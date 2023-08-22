// importing relevant modules.
const mongoose = require("mongoose");

const main = async () => {
  // connection to the database is established.
  await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

  // creating a schema and defining properties with data type.
  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });

  // create a model named 'ProductsModel' with the schema 'ProductSchema'
  const ProductsModel = mongoose.model("products", ProductSchema);

  // inserting data.
  const data = new ProductsModel({
    name: "Note Pro",
    price: 500,
    brand: "MI",
    category: "Mobile",
  });

  // save data to  database.
  const result = await data.save();

  console.log(result);
};

main();
