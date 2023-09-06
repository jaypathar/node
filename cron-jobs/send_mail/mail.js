// nodemailer module to send email.
const nodemailer = require("nodemailer");
// importing the 'dotenv' - to access all variables in .env file(i.e. configuration)
require("dotenv").config();

// importing moment module to append date into file.
const moment = require("moment");
const { getWeatherData } = require("./weather");

// send Mail function using Nodemailer.
async function sendMail() {
  // creating a transport and selecting service.(i.e. Authentication).
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.YOUR_EMAIL,
      pass: process.env.YOUR_PASSWORD,
    },
  });
  // awaiting weather data.
  const data = await getWeatherData();
  // setting credentials.
  const mailOptions = {
    from: process.env.YOUR_EMAIL,
    to: process.env.SEND_TO,
    subject: `Weather Data as of ${moment().format("DD-MM-YYYY HH:mm:ss")}`,
    html: `The weather data for <b>${data.location}</b> is as follows:<br>Temperature: ${data.temperature}°C<br>Humidity: ${data.humidity}%<br>Wind Speed: ${data.wind_speed} kph`,
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

module.exports = { sendMail };
