// import the 'mongoose' library
const mongoose = require("mongoose");
require("dotenv").config();

// connect to the MongoDB database.
mongoose
  .connect(process.env.DATABASE_CONNNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // if the connection is successful, log a success message
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    // if there is an error connecting to the database, log the error
    console.error("Error connecting to MongoDB", error);
  });

// export the 'mongoose' object for use in other parts of the application.
module.exports = { mongoose };
