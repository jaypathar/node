// error handling middleware.
const errorHandler = (error, req, res, next) => {
  return res.status(400).send(error.message);
};

// creating a class which extends 'Error'.
class CustomError extends Error {
  constructor(message) {
    super(message);
  }
}

// exporting the function
module.exports = { errorHandler, CustomError };
