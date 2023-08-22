/**
 * Asynchronous programming is unordered execution of code.
 * When we write a synchronous code we can't write a performant application, as the code maybe blocking.
 * i.e. one part of code may block the execution of another.
 */

//  require 'xhr2' to make a request.
const XMLHttpRequest = require("xhr2");

getTodos = (callback) => {
  // creating a request object.
  const request = new XMLHttpRequest();

  // track the progress of  request(i.e. 1-4). when the readyState == 4, the data has been received.
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      // converting received JSON data to javascript object.
      const data = JSON.parse(request.responseText);
      // calling a callback.
      callback(undefined, data);
    } else if (request.readyState === 4) {
      // calling a callback.
      callback("could not fetch data", undefined);
    }
  });

  // open() used to call the API endpoint that take two parameters,type of request and API.
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

  // sending the request.
  request.send();
};

// defining a function with callback.
getTodos((error, data) => {
  console.log("callback fired!!");
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
