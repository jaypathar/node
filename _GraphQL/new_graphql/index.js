// importing relevant  modules.
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// package to generate 'uniqueId' every time we insert new data.
import { v4 } from "uuid";
// importing dummy data.
import db from "./_db.js  ";
// importing type definitions.
import { typeDefs } from "./schema.js";

// defining resolvers.
const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
    // fetching single review based on id - Read Data.
    singleReview(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    // fetching single game based on id - Read Data.
    singleGame(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    // fetching single author based on id - Read Data.
    singleAuthor(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
  },
  // mutation is used to write or post data.
  Mutation: {
    // delete data
    deleteGame(_, args) {
      // filtering out the game with the provided ID and updating the games list.
      db.games = db.games.filter((games) => games.id !== args.id);
      return db.games; // returning the updated list of games after deletion.
    },
    // insert new data.
    addGame(_, args) {
      // creating a new game object with properties from args.game and a generated unique ID - spread operator.
      let game = {
        ...args.game,
        // generate a unique id every time we insert new data.
        id: v4(),
      };
      db.games.push(game); // add new game to list.
      return game;
    },
    // update existing data.
    updateGame(_, args) {
      // mapping through the games list and updating the matching game's properties.
      db.games = db.games.map((game) => {
        if (game.id === args.id) {
          return { ...game, ...args.edits }; // merging existing properties with edited properties.
        }
        // if there is no match we return the original object.
        return game;
      });
      // finding and returning the updated game.
      return db.games.find((game) => game.id === args.id);
    },
  },
};

// server setup.
const server = new ApolloServer({
  // typeDefs - definitions of type of data.
  typeDefs,
  // resolvers - consists of main logic of data.
  resolvers,
});

// listening on port 4000.
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server Running on port 4000....");
