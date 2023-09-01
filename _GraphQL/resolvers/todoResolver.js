const axios = require("axios");

const todosResolver = async () =>
  (await axios.get("https://jsonplaceholder.typicode.com/todos")).data;

module.exports = todosResolver;
