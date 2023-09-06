// requiring express and creating app.
const express = require("express");
const app = express();
// require custom log module.
const logger = require("./logger");

// GET request on "/" route.
app.get("/", (req, res) => {
  // sending message to client.
  res.send("The log has been saved!!!");

  // log message with logger.
  logger.info("The log is recorded!!!");
});

// listening on port 3000.
app.listen(3000, () => {
  console.log("listening on port 3000...");

  // log a message using the custom logger.
  logger.info("Server started and running on http://localhost:3000");
});
