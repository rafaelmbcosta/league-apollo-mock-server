const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    message: String!
  }
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true
});

server.listen().then(({ url }) => console.log(`Server running on ${url}`));
