// importing modules.
const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const app = express();
const hbs = require("hbs");
const connectToDatabase = require("./model/mongodb");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");

// passport.js initialization
app.use(passport.initialize());

// local strategy configuration.
passport.use(
  // this async function will fetch the username and password on click of 'submit'.
  new LocalStrategy(async (username, password, done) => {
    console.log(username, password);
    try {
      // connect to the database.
      const db = await connectToDatabase();
      // find the user with the given username.
      const user = await db.collection("users").findOne({ name: username });

      if (!user) {
        // if the user is not found, return an error message.
        return done(null, false, { message: "User not found" });
      }

      if (user.password !== password) {
        // if the password is incorrect, return an error message.
        return done(null, false, { message: "Incorrect password" });
      }
      // if the user is found and the password is correct, return the user object.
      return done(null, user);
    } catch (error) {
      // return an error message if any.
      return done(error);
    }
  })
);

// routes
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/", (req, res) => {
  res.render("login");
});

// setting up post request on /signup route
app.post("/signup", async (req, res) => {
  // creating an object to store data.
  const data = {
    name: req.body.name,
    password: req.body.password,
  };

  // connecting to database and inserting data
  const db = await connectToDatabase();
  // check if user already exits - if true return 'already exists' else insert data.
  const user = await db.collection("users").findOne({ name: data.name });
  if (user) {
    return res.status(400).send("User already exists....");
  } else {
    let result = await db.collection("users").insertOne(data);
    console.log(result);
    // rendering home page upon signup.
    res.render("login");
  }
});

// modified login route to use passport.authenticate.
app.post(
  "/login",
  // authenticate the user's login credentials using the local strategy.
  passport.authenticate("local", { failureRedirect: "/", session: false }),
  (req, res) => {
    // authentication successful, render home page.
    res.render("home");
  }
);

// listening on port 5000..
app.listen(5000);
