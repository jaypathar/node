// import required modules and packages.
const http = require("http");
const express = require("express");
const app = express();
// path module for working with file paths.
const path = require("path");
// create an HTTP server using the Express app.
const server = http.createServer(app);
// import the Socket.io Server class.
const { Server } = require("socket.io");

// create a Socket.io instance and bind it to the HTTP server.
const io = new Server(server);

// serve static files from the 'public' directory.
app.use(express.static(path.resolve("./public")));

// socket.io: handle when a client connects.
io.on("connection", (socket) => {
  console.log("User Connected!!");
  // handle a custom event "user-message" from the client.
  socket.on("user-message", (message) => {
    // broadcast the received message to all connected clients.
    io.emit("new-message", message);
  });
  socket.on("disconnect", (socket) => {
    console.log("User dis-connected!!");
  });
});

// defining a route and send the index.html file.
app.get("/", (req, res) => {
  // use 'path.resolve' to provide the absolute file path.
  return res.sendFile(path.resolve("./public/index.html"));
});

// listen on port 9000.
server.listen(9000, () => {
  console.log("Listening on port 9000...");
});
