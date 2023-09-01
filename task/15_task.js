/**
 * Create an API using Express.js that handles CRUD operations on a certain resource.(i.e MySQL)
 */

// importing relevant modules.
const express = require("express");
const app = express();
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

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
  apis: ["./server.js"],
};

// generate OpenAPI specification from JSDoc comments.
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// middleware that converts incoming string data to JSON.
app.use(express.json());

// requiring the knex module and passing an object for connecting with database.
const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "jay@1234",
    database: "notes_app",
  },
});

// Get method : fetching all records.
/**
 * @swagger
 * /employee:
 *   get:
 *     summary: Fetch all employee.
 *     responses:
 *       200:
 *         description: A list of employee.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone_no:
 *                     type: string
 *                   salary:
 *                     type: string
 */
app.get("/employee", async (req, res) => {
  // query to select all employee from the table.
  const employee = await knex("employee").select("*");
  res.json(employee);
});

// Get method : to  get employee by id.
/**
 * @swagger
 * /employee/{id}:
 *   get:
 *     summary: Fetch Employee by id.
 *     description: Retrieve a list of all employees.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of employees.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone_no:
 *                     type: string
 *                   salary:
 *                     type: string
 */
app.get("/employee/:id", async (req, res) => {
  const { id } = req.params;
  // query to select employee by id.
  const result = await knex("employee").where({ id });
  res.json(result);
});

// POST method to insert record into table.
/**
 * @swagger
 * /employee:
 *   post:
 *     summary: Insert new record in table.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone_no:
 *                 type: string
 *               salary:
 *                 type: string
 *     responses:
 *       201:
 *         description: Record inserted successfully
 *       500:
 *         description: Internal server error
 */
app.post("/employee", async (req, res) => {
  const { id, name, email, phone_no, salary } = req.body;
  //  query to insert data into the table.
  const newEmployee = await knex("employee").insert({
    id,
    name,
    email,
    phone_no,
    salary,
  });
  res.send(newEmployee);
});

/**
 * @swagger
 * /employee/{id}:
 *   put:
 *     summary: Update Record in table.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: A list of employees.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone_no:
 *                     type: string
 *                   salary:
 *                     type: string
 */
app.put("/employee/:id", async (req, res) => {
  // fetching data from path parameter and req.body.
  const { id } = req.params;
  const { email } = req.body;
  // query to update a record in the table based on id and update email.
  const updateEmployee = await knex("employee").where({ id }).update({ email });
  res.json(updateEmployee);
});

// DELETE method to delete record by id.
/**
 * @swagger
 * /employee/{id}:
 *   delete:
 *     summary: Delete an employee.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of employees.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone_no:
 *                     type: string
 *                   salary:
 *                     type: string
 *       500:
 *         description: Internal server error
 */
app.delete("/employee/:id", async (req, res) => {
  // getting id from path parameter.
  const { id } = req.params;
  // delete a record in table  based on 'id'.
  const deleteEmployee = await knex("employee").where({ id }).del();
  res.send(deleteEmployee);
});

// listening on port.
app.listen(5000);
