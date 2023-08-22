/**
 * The file system inbuilt module is used to read/write files.
 */

// requiring a module.
const fs = require("fs");

// reading file doc1.txt.this is asynchronous function which will have a callback function.
fs.readFile("doc1.txt", (error, data) => {
  if (error) console.log(error);
  // converting the buffer data to string.
  console.log(data.toString());
});

// writing file doc1.txt. this is asynchronous function with callback.
fs.writeFile("doc1.txt", "This is message written by fs.writeFile()", () => {
  console.log("File written...");
});

// checking if 'new-directory' doesn't exist and then creating the directory.
if (!fs.existsSync("./new-directory")) {
  // creating directory.
  fs.mkdir("./new-directory", (error) => {
    if (error) console.log(error);
    console.log("folder created");
  });
}

// deleting files
if (fs.existsSync("./new-directory/deletefile.txt")) {
  // unlink() - to delete file.
  fs.unlink("doc1.txt", (error) => {
    if (error) console.log(error);
    console.log("file deleted.");
  });
}

/**
 * streams is a mechanism through which we can start using data before it has finished loading.
 * This features reading and writing data simultaneously.
 */

// let's say we have a huge file article1.txt. write it to article2.txt.
const readStream = fs.createReadStream("./new-directory/article1.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("./new-directory/article2.txt");

// 'on()' is  an event listener.
readStream.on("data", (chunk) => {
  console.log("----new chunk----");
  writeStream.write("\nNEW LINE\n");
  writeStream.write(chunk);
});

/**
 * Piping is  used to attach a writeable stream to a readable stream allowing to pass the readable stream data
 * to the writeable stream.
 */

// the above code can be optimized as follows.
readStream.pipe(writeStream);
