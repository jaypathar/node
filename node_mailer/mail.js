/**
 * NodeMailer is the most famous module used for sending and receiving emails from NodeJS applications. It
 * is a zero dependency module for your NodeJS apps.
 * Here are some of the features of NodeMailer:
 * - Zero dependencies on other modules
 * - Secure emails delivery
 * - HTML content or embedded attachments
 * - Unicode support
 * - Various transport options besides SMTP
 */

// importing the module nodemailer.
const nodemailer = require("nodemailer");
const path = require("path");
// importing the 'dotenv' - to access all variables in .env file(i.e. configuration)
require("dotenv").config();

// creating a transport and selecting service.(i.e. Authentication)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.YOUR_EMAIL,
    pass: process.env.YOUR_PASSWORD,
  },
});

// sending an email with text, html, attachments.
const mailOptions = {
  from: process.env.YOUR_EMAIL, //process.env is a global variable that is injected during runtime.
  to: process.env.SEND_TO,
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  html: '<h2 style="color:#ff6600;">Hello Everyone!!</h2>',
  attachments: [{ filename: "images.jpeg", path: "./images.jpeg" }],
};

transporter.sendMail(mailOptions, function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + data.response);
  }
});
