// importing relevant modules.
const express = require("express");
const app = express();

// creating a middleware function.
const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age..");
  } else if (req.query.age <= 18) {
    // if age in url is below 18, not able to access site.
    res.send("You are not  eligible for this site..");
  } else {
    next();
  }
};

// using middleware.
app.use(reqFilter);

// creating default route.
app.get("/", (req, res) => {
  res.send("hello");
});

//users route.
app.get("/users", (req, res) => {
  res.send("<h1>Welcome to users page!!</h1>");
});

// listening on port 5000.
app.listen(5000);
