import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, useMutation } from "@apollo/client"
import DisplayData from "./components/DisplayData";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(), 
    uri: "http://localhost:4000/"
  })
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>List of Users</h2>
        <DisplayData />
      </div>
    </ApolloProvider>
    
  );
}

export default App;
