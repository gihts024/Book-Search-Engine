const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    name: String
    email: String
    password: String
    books: [String]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addbook(userId: ID!, book: String!): User
    deleteUser: User
    deleteBook(book: String!): User
  }
`;

module.exports = typeDefs;
