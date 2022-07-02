/** @format */

import { ApolloClient, InMemoryCache } from "@apollo/client";
const port = process.env.NEST_GRAPH_PORT;
const url = process.env.NEST_GRAPH_URL;

console.log(`[${url}:${port}]`);

const client = new ApolloClient({
  uri: "http://127.0.0.1:3000/graphql",
  cache: new InMemoryCache(),
});

export default client;
