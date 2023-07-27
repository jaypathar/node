// requiring the module.
const express = require("express");

// express app
const app = express();

// listen for request.
app.listen(3000);

// rendering HTML Pages
app.get("/", (req, res) => {
  res.sendFile("./html_pages/home.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./html_pages/about.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

/**
 * use() is used to create middleware and fire middleware function.
 * this piece of code will fire for every url that does not match the get() request.
 * this piece of code should always be at the bottom of the code.
 */

// 404 page : page does not exist.
app.use((req, res) => {
  res.sendFile("./html_pages/404.html", { root: __dirname });
});
