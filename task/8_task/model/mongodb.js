const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/authentication";

// creating a async function to connect to database.
async function connectToDatabase() {
  const client = await MongoClient.connect(url);
  const db = client.db();
  return db;
}

// exporting module.
module.exports = connectToDatabase;
