// importing modules.
const cron = require("node-cron");
const express = require("express");
app = express();
const { sendMail } = require("./mail");

// calling sendEmail() function at 10:45 am on every day-of-week from Monday to Friday.
cron.schedule("45 10 * * 1-5", function () {
  sendMail();
});

// listening on port 3000.
app.listen(3000);
