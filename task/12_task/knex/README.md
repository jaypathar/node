## knex query builder

Knex.js, a JavaScript query builder, simplifies database management, while MySQL, a widely-used relational database management system, allows for efficient data storage and retrieval. This technical article will explore the process of creating a Node API using Knex.js and MySQL, and you will discover how to build complex SQL queries for selecting, inserting, updating, and deleting data.

### Configuration Options

The knex module is itself a function which takes a configuration object for Knex, accepting a few parameters. The client parameter is required and determines which client adapter will be used with the library.

```javascript
// requiring the next library and passing an object for connecting with database.
const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "jay@1234",
    database: "notes_app",
  },
});
```

The connection options are passed directly to the appropriate database client to create the connection, and may be either an object, a connection string, or a function returning an object:
