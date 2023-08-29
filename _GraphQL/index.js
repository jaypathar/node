// importing required modules.
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const axios = require("axios");

async function startServer() {
  // creating an express app.
  const app = express();
  // defining GraphQL schema.
  const server = new ApolloServer({
    typeDefs: `
    type Users {
        id : ID!,
        name : String!,
        username : String!,
        email : String!,
        phone : String!,
        website : String!
    }
    type Todo {
        id : ID!,
        title : String!,
        completed : Boolean
    }
    type Query {
        getTodos : [Todo]
        getAllUsers : [Users]
    }
    `,
    // defining resolvers for the schema.
    resolvers: {
      Query: {
        getTodos: async () =>
          (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,
        getAllUsers: async () =>
          (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
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
