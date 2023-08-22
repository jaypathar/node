/**
 * This file contains the configuration of mongodb database.
 */

// importing module
const { MongoClient } = require("mongodb");
// url to connect to path
const url = "mongodb://127.0.0.1:27017";

// creating object of MongoClient
const client = new MongoClient(url);

// defining a async function to get data from db.
async function dbConnect() {
  let result = await client.connect();
  // defining database to access.
  let db = result.db("e-comm");
  // defining collection to access and returning.
  return db.collection("products");
}

// exporting this function.
module.exports = dbConnect;
