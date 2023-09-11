const express = require("express");
const app = express();
const path = require("path");

const { Server } = require("socket.io");
const io = Server();

app.use(express.static(path.join(__dirname, "client")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/index.html");
});

io.on("connection", (socket) => {
  console.log("Server connected", socket.id);
});

app.listen(5000, () => {
  console.log("Running on port 5000..");
});
