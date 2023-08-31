const axios = require("axios");

const userResolver = async () =>
  (await axios.get("https://jsonplaceholder.typicode.com/users")).data;

module.exports = userResolver;
