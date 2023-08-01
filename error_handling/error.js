/** Types of error
 *
 * Programmer Error
 *  - mistakes in the logic or syntax of the code.
 *  - can be fixed by editing source code.
 *  - i.e. trying to access a property of an undefined variable.
 *
 * Operational Error
 *  - anticipated and accounted for(expected errors)
 *  - when an operation has the potential to fail
 *  - handled by determining what should happen if it fails
 *  - i.e. user not found,not authorized
 */

// importing relevant modules.
const express = require("express");
const { errorHandler } = require("./errorHandler");
const CustomError = require("./errorHandler");

const app = express();

// dummy function that is getting data('undefined')
const getUser = () => undefined;

// creating a route text and  passing 3rd parameter as middleware.
app.use("/test", async (req, res, next) => {
  try {
    const user = getUser();
    // there is not data coming hence it will throw a custom error.
    if (!user) {
      throw new Error("user not found");
    }
  } catch (error) {
    // the next() will be used to pass error message to the middleware function.
    return next(error);
  }
  return res.status(200).json({ success: true });
});

// use() signifies use of middleware.
app.use(errorHandler);

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});

// throwing imported custom error from errorHandler.js
throw new CustomError("This is a custom error");

// handling uncaught exceptions.
process.on("uncaughtException", () => {
  console.log("There was an uncaught exception.");
  process.exit(1);
});
