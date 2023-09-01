// importing modules.
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
require("./connection-config");
const Product = require("./product");

const app = express();

// middleware that converts incoming string data to json.
app.use(express.json());

// swagger configuration options.
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Product API",
      version: "1.0.0",
      description: "A simple API to manage products",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["index.js"],
};

// swagger documentation.
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// getting Swagger UI.
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get products by name, price, and rating.
 *     description: Get products where name = "AC3 Phone", price = 200, and rating >= 3.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
app.get("/", async (req, res) => {
  // fetching products on basis of name, price and rating.
  let data = await Product.aggregate([
    {
      $match: {
        name: "AC3 Phone",
        price: 200,
        rating: { $gte: 3 },
      },
    },
  ]);
  // send result of the aggregation query response.
  res.send(data);
});

/**
 * @swagger
 * /groupby:
 *   get:
 *     summary: Get total price of products by brand.
 *     description: Get total price of products with brand = "MI".
 *     responses:
 *       200:
 *         description: Total price of products by brand.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The brand name.
 *                   total:
 *                     type: number
 *                     description: The total price of products with the brand.
 */
app.get("/groupby", async (req, res) => {
  // query matches products with the brand "MI" and then groups them by brand, calculating the total price for each brand.
  let data = await Product.aggregate([
    {
      $match: {
        brand: "MI",
      },
    },
    {
      $group: {
        _id: "$brand", // group by the "brand" field.
        total: { $sum: "$price" }, // calculate the total price for each brand using $sum aggregation.
      },
    },
  ]);

  // send result of  aggregation as response.
  res.send(data);
});

/**
 * @swagger
 * /sort:
 *   get:
 *     summary: Get top 3 products by price.
 *     description: Get top 3 products sorted by price in descending order.
 *     responses:
 *       200:
 *         description: A list of top 3 products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
app.get("/sort", async (req, res) => {
  // query sorts products by the "price" field in descending order (-1) and limits the result to the first 3 documents.
  let data = await Product.aggregate([
    {
      $sort: {
        price: -1, // sort by "price" field in descending order.
      },
    },
    {
      $limit: 3, // limit the result to the first 3 documents.
    },
  ]);

  // send result of aggregation as response.
  res.send(data);
});

// listening on port 5000.
app.listen(5000);
