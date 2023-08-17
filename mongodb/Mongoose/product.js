// requiring modules.
const mongoose = require("mongoose");

// creating schema and defining properties with datatype.
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

// exporting module.
module.exports = mongoose.model("products", productSchema);
