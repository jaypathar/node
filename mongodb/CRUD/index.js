// importing relevant modules.
const express = require("express");
const mongodb = require("mongodb");
const dbConnect = require("./mongodb_connection");
const app = express();

// middleware used to convert data to json.
app.use(express.json());

// get request route.
app.get("/", async (req, res) => {
  const data = await dbConnect();
  data = await data.find({}).toArray();
  res.send(data);
});

// post request route.
app.post("/", async (req, res) => {
  const data = await dbConnect();
  const result = await data.insertOne(req.body);
  res.send(result);
});

// put method route.
app.put("/:name", async (req, res) => {
  const data = await dbConnect();
  // argument in updateOne() consists of 1.condition -> 2.update information.
  const result = await data.updateOne(
    { name: req.params.name },
    { $set: { price: 500 } }
  );
  res.send(result);
});

// delete method route.
app.delete("/:id", async (req, res) => {
  const data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(result);
});

// listening on port 5000.
app.listen(5000);
