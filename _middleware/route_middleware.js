// importing relevant modules.
const express = require("express");
const app = express();
const reqFilter = require("./middleware");

// to use middleware in multiple routes - use the Router method in express.
const route = require("express").Router();
route.use(reqFilter);

// creating default route   .
app.get("/", (req, res) => {
  res.send("hello");
});

// users route - 'reqFilter' is applied to users route.
app.get("/users", reqFilter, (req, res) => {
  res.send("<h1>Welcome to users page!!</h1>");
});

// about route - the 'reqFilter' middleware is applied to about route.
app.get("/about", reqFilter, (req, res) => {
  res.send("<h1>Welcome to about page..</h1>");
});

// contact route
route.get("/contact", (req, res) => {
  res.send("Contact Page...");
});

app.use("/", route);

// if  there is  any invalid url, it will be redirected to this route and the following message is rendered
app.get("*", (req, res) => {
  res.status(404);
  res.send("The page you are looking for does not exist...");
});

// listening on port 5000.
app.listen(5000);
