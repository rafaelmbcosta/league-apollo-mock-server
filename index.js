const { ApolloServer, gql } = require('apollo-server');

const myPlugin = {
  // Fires whenever a GraphQL request is received from a client.
  async requestDidStart(requestContext) {
    console.log('Request started! Query:\n' +
      requestContext.request.query);

    return {
      // Fires whenever Apollo Server will parse a GraphQL
      // request to create its associated document AST.
      async parsingDidStart(requestContext) {
        console.log('Parsing started!');
      },  

      // Fires whenever Apollo Server will validate a
      // request's document AST against your GraphQL schema.
      async validationDidStart(requestContext) {
        console.log('Validation started!');
      },

    }
  },
};

const typeDefs = gql`
  type Season {
    id: ID!
    year: Int!
    # rounds: [RoundType]
    # disputes: [DisputeType]
  }
  type Dispute {
    id: ID!
    name: String!
    order: Int
    status: String
    season: Season
    # rounds: RoundType
  }
  type Query {
    disputes: [Dispute]!,
    # monthScores: []
  }
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true,
  subscriptions: { path: '/graphql' },
  plugins: [
    myPlugin
  ]
});

server.listen().then(({ url, request, response }) => {
  console.log(request)
  console.log(`Server running on ${url}`);
});
