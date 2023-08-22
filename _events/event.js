// requiring  modules
const express = require("express");
// events module return a  class 'EventEmitter'
const EventEmitter = require("events");

// requiring user module
const user = require("./user");

// creating object 'event' - user is inheriting from EventEmitter class.
const event = new user();

const app = express();
// creating  a count variable that  will increment every time the 'countAPI' is called.
let count = 0;

// capturing event - we can listen to same event  multiple times.
event.on("countAPI", (data) => {
  count++;
  console.log(data, count);
});

// listening to  same even.
event.on("countAPI", () => {
  console.log("Listening to event again....");
});

app.get("/", (req, res) => {
  res.send("API Called...");
  // custom event - generating event - passing data as second parameter.
  event.emit("countAPI", "This is event");
});

app.listen(8000, () => {
  console.log("Port running on 8000.....");
});
