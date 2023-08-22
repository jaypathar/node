// requiring modules.
const express = require("express");
require("./connection-config");
const Product = require("./product");

const app = express();

// middleware that converts incoming string data to json.
app.use(express.json());

// get method.
app.get("/list", async (req, res) => {
  // find query to get data.
  let data = await Product.find({});
  res.send(data);
});

// post method.
app.post("/create", async (req, res) => {
  // store data into database.
  let data = new Product(req.body);
  let result = await data.save();
  res.send(result);
});

// delete method
app.delete("/delete/:_id", async (req, res) => {
  // delete query.
  let data = await Product.deleteOne(req.params);
  res.send(data);
});

// put method.
app.put("/update/:_id", async (req, res) => {
  // update query - consists of 2 parameters - condition and updation.
  let data = await Product.updateOne(
    {
      _id: req.params,
    },
    { $set: { price: 1000 } }
  );
  res.send(data);
});

// listening on port 5000.
app.listen(5000);
