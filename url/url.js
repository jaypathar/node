// importing module
const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }
  // creating a log file that will store date and time every time we run server..
  const log = `${Date.now()} :${req.url} New Request Received\n`;
  // parsing the url and printing its properties on console.
  // properties : protocol, auth, host, hostname, path, query etc.
  const myUrl = url.parse(req.url);
  console.log(myUrl.pathname);
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
