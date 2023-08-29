GraphQL is an open source server-side technology which was developed by Facebook to optimize RESTful API calls. It is an execution engine and a data query language

### Why GraphQL

GraphQL queries always return predictable results. Applications using GraphQL are fast and stable. Unlike Restful services, these applications can restrict data that should be fetched from the server.

For Example :
Let us consider a business object Student with the attributes id, firstName, lastName and collegeName. Suppose a mobile application needs to fetch only the firstName and id. If we design a REST endpoint like /api/v1/students, it will end up fetching data for all the fields for a student object. This means, data is over fetched by the RESTful service. This problem can be solved by using GraphQL.

```graphql
{
  students {
    id
    firstName
  }
}
```

This will return values only for the id and firstname fields. The query will not fetch values for other attributes of the student object.

### GraphQL Schema

A GraphQL schema is at the core of any GraphQL server implementation. It describes the functionality available to the client applications that connect to it. We can use any programming language to create a GraphQL schema and build an interface around it.
The below **Schema** describes the kind of data that will be returned.

```graphql
type Student {
  id: ID!
  firstName: String
  lastName: String
  fullName: String
  college: College
}

type College {
  id: ID!
  name: String
  location: String
  rating: Float
  students: [Student]
}
type Query {
  students: [Student]
}
```

### GraphQL Resolver

Resolver is a collection of functions that generate response for a GraphQL query. In simple terms, a resolver acts as a GraphQL query handler.

### GraphQL Operation

A GraphQL operation can either be a read or a write operation. A GraphQL **query** is used to read or fetch values while a **mutation** is used to write or post values.
