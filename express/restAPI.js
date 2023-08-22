// requiring module and JSON data.
const fs = require("fs");
const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();

// middleware - whatever form data is posted it will put it in the 'req.body'.
app.use(express.urlencoded({ extended: false }));

// returns all users JSON data.
app.get("/users", (req, res) => {
  res.json(users);
});

// route to get user with some dynamic ID - ID is a variable value.
app.route("/users/:id").get((req, res) => {
  const id = Number(req.params.id); // it will return a string which will be converted to number.
  const user = users.find((user) => user.id === id);
  res.json(user);
});

app.post("/users", (req, res) => {
  // sending data from postman which will be stored in body variable and the pushed to JSON File.
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, data) => {
    res.json({ status: "success", id: users.length + 1 });
  });
});
// listening on port 8000.
app.listen(8000, () => {
  console.log("Port started on port 9000.....");
});
