// importing required modules
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const axios = require("axios");

// importing type definitions
const Users = require("./types/users");
const Todo = require("./types/todos");

// importing resolver definition.
const todosResolver = require("./resolvers/todoResolver");
const userResolver = require("./resolvers/userResolver");

async function startServer() {
  // creating an express app.
  const app = express();
  // defining GraphQL schema.
  const server = new ApolloServer({
    // modularizing GraphQL schema.
    typeDefs: [Users, Todo],
    // defining resolvers for the schema.
    resolvers: {
      Query: {
        getTodos: todosResolver,
        getUsers: userResolver,
      },
    },
  });

  // using middleware to convert string data to json.
  app.use(express.json());
  // starting apollo server.
  await server.start();
  // using apollo server middleware - responsible for handling GraphQL requests and responses.
  app.use("/", expressMiddleware(server));

  // listening on port 5000.
  app.listen(5000, () => {
    console.log("Listening on port 5000....");
  });
}

// function call.
startServer();
