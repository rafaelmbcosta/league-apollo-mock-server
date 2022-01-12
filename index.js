import { ApolloServer, gql } from 'apollo-server';
import logs from './plugins/logs.js';
import typeDefs from './types.js';


const server = new ApolloServer({
  typeDefs,
  mocks: true,
  subscriptions: { path: '/graphql' },
  plugins: [
    logs
  ]
});

server.listen().then(({ url, request, response }) => {
  console.log(request)
  console.log(`Server running on ${url}`);
});
