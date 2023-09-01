/**
 * Use middleware functions in Express.js to
 * perform some preprocessing on incoming
 * requests, such as logging or
 * authentication.
 */

// importing modules.
const express = require("express");
const app = express();

// middleware  for authentication.
const auth = (req, res, next) => {
  const { username, password } = req.body;
  // using hardcoded username and password for authentication.
  if (username === "mark" && password === "mark@1234") {
    // logging the date, request method and url to console.
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  } else {
    // if credentials fail - unauthorized message will be sent.
    res.status(401).send("Unauthorized");
  }
};

// GET method - login page default.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

// POST method - sends and authenticates login data.
app.post("/login", express.urlencoded({ extended: true }), auth, (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

// listening on port 3000.
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
