// importing module
const http = require("http");
const fs = require("fs");
const { error } = require("console");

const server = http.createServer((req, res) => {
  // creating a log file that will store date and time every time we run server..
  const log = `${Date.now()} :${req.url} New Request Received\n`;
  // creating routes - multi route
  fs.appendFile("log.txt", log, (error, data) => {
    switch (req.url) {
      case "/":
        res.end("<h1>Home Page</h1>");
        break;
      case "/about":
        res.end("<h1>About Page</h1>");
        break;
      default:
        res.end("<h1>404 - Page not found!!</h1>");
    }
  });
});

server.listen(8000, () => {
  console.log("listening on port 8000....");
});
