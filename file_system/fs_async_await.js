const fs = require("node:fs/promises");

async function readFile() {
  try {
    const data = await fs.readFile("./new-directory/article1.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

readFile();
