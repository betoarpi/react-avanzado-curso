const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

//servidor
const server = new ApolloServer({
  typeDefs,
  resolvers
});

//arrancar el servidor
server.listen().then(({ url }) => {
  console.log(`Server listo en la siguiente URL ${url}`)
})