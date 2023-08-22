//  require 'xhr2' to make a request.
const XMLHttpRequest = require("xhr2");

getTodos = (callback) => {
  return new Promise((resolve, reject) => {
    // creating a request object.
    const request = new XMLHttpRequest();
    // track the progress of  request(i.e. 1-4). when the readyState == 4, the data has been received.
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        // converting received JSON data to javascript object.
        const data = JSON.parse(request.responseText);
        // resolving promise
        resolve(data);
      } else if (request.readyState === 4) {
        // calling a callback.
        reject("error getting resource");
      }
    });

    // open() used to call the api endpoint that  take two parameters,type of request and API.
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

    // sending the request.
    request.send();
  });
};

// getTodos() returning a promise - resolved state - chaining of promises
getTodos()
  .then((data) => {
    console.log(data);
    return console.log("promise resolved!!");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
