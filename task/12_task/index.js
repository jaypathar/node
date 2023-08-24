// importing modules.
const express = require("express");
const app = express();
const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require("./database");
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
  apis: ["./index.js"],
};

// generate OpenAPI specification from JSDoc comments.
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// middleware that converts incoming string data to JSON.
app.use(express.json());

// GET method.
/**
 * @swagger
 * /read:
 *   get:
 *     summary: Get all notes
 *     description: Retrieve a list of all notes
 *     responses:
 *       200:
 *         description: A list of notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   contents:
 *                     type: string
 */

app.get("/read", async (req, res) => {
  const result = await getNotes();
  res.send(result);
});

// GET method by id. - fetch particular record.
/**
 * @swagger
 * /read/{id}:
 *   get:
 *     summary: Get a note by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a note object
 *       404:
 *         description: Note not found
 *       500:
 *         description: Internal server error
 */

app.get("/read/:id", async (req, res) => {
  const result = await getNote(req.params.id);
  res.send(result);
});

// POST method to insert record into table.
/**
 * @swagger
 * /create:
 *   post:
 *     summary: Create a new note
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               contents:
 *                 type: string
 *     responses:
 *       200:
 *         description: Note created successfully
 *       500:
 *         description: Internal server error
 */
app.post("/create", async (req, res) => {
  const result = await createNote(req.body.title, req.body.contents);
  res.send(result);
});

// PUT method to update record in table.
/**
 * @swagger
 * /update:
 *   put:
 *     summary: Update a note
 *     requestBody:
 *       require: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                contents:
 *                   type: string
 *     responses:
 *       200:
 *         description: Note updated successfully
 *       500:
 *         description: Internal server error
 */

app.put("/update", async (req, res) => {
  const result = await updateNote(req.body.contents, req.body.id);
  res.send(result);
});

// DELETE method to delete record by id.
/**
 * @swagger
 * /delete/{id}:
 *   delete:
 *     summary: Delete a note
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Note deleted successfully
 *       500:
 *         description: Internal server error
 */
app.delete("/delete/:id", async (req, res) => {
  console.log(req.params.id);
  const result = await deleteNote(req.params.id);
  res.send(result);
});

// listening on port 5000.
app.listen(5000);
