/**
 * Create a simple web server using Express.js and handle GET requests to a certain endpoint to return some
 * data.
 */

// requiring module to create server
const express = require("express");
const app = express();

// defining a default route with get request and responding with json data.
app.get("/", (req, res) => {
  res.send({ name: "Mark", email: "mark@gmail.com" });
});

// listening on port 5000.
app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
