const Todo = `
  type Todo {
    id: ID!
    title: String!
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
  }
`;

module.exports = Todo;
