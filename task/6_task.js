/**
 * Use Promises and async/await to perform some asynchronous operations and handle errors that might occur.
 */

// creating a asynchronous function that is fetching data from awaiting data from API.
async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// handling errors if any.
getData().catch((error) => console.error(error));
