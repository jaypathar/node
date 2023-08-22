/**
 * The HTTP module can create an HTTP server that listens to server ports and gives a response back to the
 * client.
 */

// requiring the module
const http = require("http");

// creating a server - has a callback with request and response.
const server = http.createServer((req, res) => {
  console.log("request made");
  // set header content-type
  res.setHeader("Content-Type", "text/html");
  // writing message
  res.write(req.method);
  // writing an HTML string.
  res.write("<p>This is an HTML tag</p>");
  // terminating the process
  res.end(`\nHello ! The server has been created.", res.statusCode = 200`);
});

// listening on port 3000 - explicitly 'localhost'
server.listen(3000, "localhost", () => {
  console.log("Listening for request on port 3000");
});
