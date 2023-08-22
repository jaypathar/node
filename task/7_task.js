/**
 * Create a function that intentionally throws an error and use try-catch to handle the error gracefully.
 */

// defining a  function for division.
function divide(numerator, denominator) {
  if (denominator === 0) {
    // creating a custom error message.
    throw new Error("Cannot divide by zero");
  }
  return numerator / denominator;
}

// defining a try-catch block and dealing with error.
try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error(error.message);
}
