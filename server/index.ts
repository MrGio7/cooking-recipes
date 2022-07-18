import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "../graphql/schema";
import context from "./context";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});