const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server);
app.use(express.static(path.resolve("./public")));

// socket.io
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    io.emit("new-message", message);
  });
});

app.get("/", (req, res) => {
  return res.sendFile("./public/index.html");
});

// listening on port 9000.
server.listen(9000, () => {
  console.log("listening on port 9000...");
});
