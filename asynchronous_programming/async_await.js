// using fetch API to call API end point.

// writing a  async function which will always return a promise - making get request.
async function getTodos() {
  // awaiting the fetch() to be executed.
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  // converting response received into JSON.
  const data = await response.json();

  return data;
}
// function call and response is logged to console.
getTodos().then((data) => {
  console.log(data);
});
