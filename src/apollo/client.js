import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: 'https://sls-laravel.daigo5.xyz/graphql',
  fetch,
});
