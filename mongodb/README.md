### <u> Relational Database </u>

A relational database stores data in tables composed of rows and columns. In a relational database, data is contained within a table, which is then linked to data contained within other tables through the use of unique identifying keys. Specifically, relationships between tables are formed when a primary key, which uniquely identifies a row in one table, connects with a foreign key identifying a row of data in another table.

- Examples:
  - MySQL
  - IBM Db2
  - Snowflake
  - Amazon Aurora
  - PostgreSQL
  - Microsoft SQL Server

### <u>Non-Relational Database</u>

A non-relational database is a type of database that doesn’t store data in tables but instead in whatever format is best for the type of data being stored. In effect, non-relational databases are designed to contain unstructured data, or loosely defined data like email messages, videos, images, and business documents that aren’t easily standardized. They can also be used to store a mix of structured and unstructured data.

Some of the most common approaches include using key-value stores, column-family data stores, graph databases, and document databases

- Examples:
  - MongoDB
  - IBM Cloundant
  - Amazon DynamoDB
  - Apache Cassandra

### <u>ORM-Object Relational Mapping</u>

ORM is Object Relational Mapping, basically a technique to query or perform CRUD (Create, Read, Update, Delete) operations to the database, mainly RDBMS (Relational Databases), using an object-oriented paradigm. You don’t need to actually write SQL queries.

- Examples:
  - Sequelize
  - Prisma
  - Objection.js
  - Mikro ORM
  - TypeORM
  - Waterline etc.

### <u>ODM-Object Document Mapping</u>

ODM is Object Document Mapping. It is like an ORM for non-relational databases or distributed databases such as MongoDB, i.e., mapping an object model and NoSQL database (document databases, graph database, etc.).

- Example: Mongoose

### <u>ORM vs ODM</u>

The key difference between the two is the type of database these data-mappers are used for. Suppose we have a relational database such as PostgreSQL, MySQL, etc. in that case, we will use an ORM. On the other hand, for non-relational databases such as MongoDB, Cassandra, Redis, etc. we will use an ODM to achieve the same results.
