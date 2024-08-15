import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});
