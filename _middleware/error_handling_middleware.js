// importing relevant modules.
const express = require("express");
const app = express();

// define a route.
app.get("/", function (req, res) {
  res.send("Home Page...");
});

// define an error handling middleware function for undefined routes.
app.use("*", (req, res, next) => {
  res.status(404).send("404 Not Found");
});

// define an error handling middleware function for all other errors.
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// listen on port 3000.
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
