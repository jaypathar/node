/**
 * Use the fs module to read from and write to a file. Use the path module to work with file paths.
 */

// importing fs and  path module.
const fs = require("fs");
const path = require("path");

// setting file  path.
const filePath = path.join(__dirname, "file.txt");

// write to file.
fs.writeFile(filePath, "This is newfile!!!", (err) => {
  if (err) throw err;
  console.log("File written successfully...");

  // read from file.
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log("File contents:", data);

    // delete the file.
    fs.unlink(filePath, (err) => {
      if (err) throw err;
      console.log("File deleted successfully...");
    });
  });
});
