const Users = `
  type Users {
    id: ID!
    name: String!
    username: String!
    email: String!
    phone: String!
    website: String!
  }

  type Query {
    getUsers: [Users]
  }
`;

module.exports = Users;
