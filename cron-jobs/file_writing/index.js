/**
 * Task: writing data to file every 10 seconds.
 */

// importing moment module to append date into file.
const moment = require("moment");

// importing node-cron module.
const cron = require("node-cron");
const fs = require("fs");

// scheduling a cron job that will run every 10 seconds.
cron.schedule("*/10 * * * * *", function () {
  // formatting data with the current date and writing into file.
  const data = `This is cron!! ${moment().format("YYYY-MM-DD HH:mm:ss")}\n`;

  // appending data to file(i.e creates file if it does not exist).
  fs.appendFile("logs.txt", data, function (error) {
    if (error) {
      console.log(error);
    }
    console.log("File data added!!");
  });
});
