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
    getAllUsers: [Users]
  }
`;

module.exports = Users;
