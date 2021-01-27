import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, gql } from '@apollo/client';
import { fetch } from 'cross-fetch';

const httpLink = new HttpLink({ uri: 'https://hml-api.elo.com.br/graphql', fetch });

const authLink = new ApolloLink((operation, forward) => {
  const client_id = 'fb562737-2a39-36db-a9e7-b1b19d060ed2';

  operation.setContext({
    headers: {
      client_id: client_id
    }
  });

  return forward(operation);
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export const queryBin = gql`
  query OneBin($number: String!) {
    bin(number: $number) {
      issuer {
        name
      }

      product {
        name
      }

      allowedCaptures {
        name
        code
      }
      
      usages {
        name
        code
      }
    }
  }
`;