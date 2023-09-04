// importing modules.
const cron = require("node-cron");
const express = require("express");
// nodemailer module to send email.
const nodemailer = require("nodemailer");
// importing the 'dotenv' - to access all variables in .env file(i.e. configuration)
require("dotenv").config();
app = express();

// importing moment module to append date into file.
const moment = require("moment");

// calling sendEmail() function at 10:45 am on every day-of-week from Monday to Friday.
cron.schedule("* * * * * *", function () {
  sendMail();
});

// send Mail function using Nodemailer.
function sendMail() {
  // creating a transport and selecting service.(i.e. Authentication).
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.YOUR_EMAIL,
      pass: process.env.YOUR_PASSWORD,
    },
  });

  // setting credentials.
  const mailOptions = {
    from: process.env.YOUR_EMAIL,
    to: process.env.SEND_TO,
    subject: `Weather Data as of ${moment().format("DD-MM-YYYY HH:mm:ss")}`,
    text: "The weather data is as follows:",
  };

  // sending Email.
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error Occurred:", err);
    } else {
      console.log("Email sent successfully");
    }
  });
}

// listening on port 3000.
app.listen(3000);
