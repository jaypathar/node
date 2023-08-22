const fs = require("node:fs/promises");

// the following code is asynchronous - hence first -> second -> data will be printed.
console.log("first");

// it is the same fs module but with promises.
fs.readFile("./new-directory/article1.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("second");
