// function that returns the sum of two numbers.
const add = (number1, number2) => {
  return number1 + number2;
};

// function that throws an error message.
const error = () => {
  throw new Error("There is an error!!");
};

// import Express.js library and create an express application.
const express = require("express");
const app = express();

// middleware to parse incoming JSON requests.
app.use(express.json());

// GET request to "/users" route.
app.get("/users", (req, res) => {
  // respond with a JSON object containing user data.
  res.status(200).json({
    users: [
      {
        name: "Mark",
        email: "mark@gmail.com",
        password: "mark@1234",
      },
    ],
  });
});

// listening on port 3000.
app.listen(3000);

// export functions.
module.exports = { add, error, app };
