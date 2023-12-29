import { ApolloClient, ApolloProvider, InMemoryCache, split } from "@apollo/client"
import { getMainDefinition } from "@apollo/client/utilities"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import httpLink from "./utils/httpLink"
import wsLink from "./utils/wsLink"

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>

      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
