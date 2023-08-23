// import relevant modules.
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
require("./database");
const Product = require("./product");

const app = express();

// middleware that converts incoming string data to JSON.
app.use(express.json());

// define the Swagger options and create the Swagger specification.
const swaggerOptions = {
  parameterOptions: {
    allowEditing: true, // allow editing of path parameters.
  },
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Product API",
      version: "1.0.0",
      description: "API for managing products",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./index.js"],
};

// generate OpenAPI specification from JSDoc comments.
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// add the Swagger middleware to express app.
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Get method.
/**
 * @swagger
 * /list:
 *   get:
 *     summary: It is fetching all products from database.
 *     description: Returns a list of products.
 *     responses:
 *       200:
 *         description: A list of products
 */
app.get("/list", async (req, res) => {
  const data = await Product.find({});
  res.send(data);
});

// Post method.
/**
 * @swagger
 * /create:
 *   post:
 *     summary: Create a new product.
 *     description: Creates a new product with the specified details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The created product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Invalid request body
 */
app.post("/create", async (req, res) => {
  const data = new Product(req.body);
  const result = await data.save();
  res.send(result);
});

// Delete method.
/**
 * @swagger
 * /delete/{_id}:
 *   delete:
 *     summary: Delete a product.
 *     description: Deletes a product with the specified ID.
 *     parameters:
 *       - in: path
 *         name: _id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the product to delete
 *         readOnly: false
 *     responses:
 *       200:
 *         description: The deleted product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
app.delete("/delete/:_id", async (req, res) => {
  const data = await Product.deleteOne(req.params);
  res.send(data);
});

// Put method.
/**
 * @swagger
 * /update/{_id}:
 *   put:
 *     summary: Update a product.
 *     description: Updates a product with the specified ID.
 *     parameters:
 *       - in: path
 *         name: _id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the product to update
 *     responses:
 *       200:
 *         description: The updated product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
app.put("/update/:_id", async (req, res) => {
  const data = await Product.updateOne(
    {
      _id: req.params,
    },
    { $set: { price: 350 } }
  );
  res.send(data);
});

// listening on port 5000.
app.listen(5000);
