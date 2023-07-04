import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://rickandmortyapi.com/graphql"
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
