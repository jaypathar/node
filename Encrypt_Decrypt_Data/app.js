// requiring modules
const bcrypt = require("bcrypt");
const express = require("express");

// creating an object
const app = express();

// middleware - parses incoming requests with JSON payloads
app.use(express.json());

// creating a users array to store data(i.e database)
const users = [];

// creating a route - signup
app.post("/signup", async (req, res) => {
  if (req.body) {
    const { username, password } = await req.body;
    // creating a hash of password and push it to users[].
    const hash = await bcrypt.hash(password, 10);
    users.push({
      username,
      password: hash,
    });
    console.log(users);
    res.send("ok");
  } else {
    res.send("No body");
  }
});

// once the user has signed up - he/she can login.
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // we are finding the username and retuning it if it is equal to username entered.
  const user = users.find((user) => user.username === username);
  if (!user) {
    res.send("Wrong Username...");
    return;
  }
  // comparing the password to hash value.. then allow to login.
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    res.send("Wrong Password..");
    return;
  }
  // sending response on successful login.
  res.send("You have logged in..");
});

// listening on port : 8080
app.listen(8080, () => {
  console.log("listening on port...");
});
