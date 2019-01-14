import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
  {
    pdfs(count: 10, page: 1) {
      data {
        uuid
        title
        url
      }
    }
  }
`;

export default () => (
  <div>
    <h1>List All PDFs (Gatsby - React)</h1>
    <span>URL: https://sls-laravel.daigo5.xyz/graphql</span>
    <br />
    <Query query={APOLLO_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading data...</p>;
        if (error) return <p>Error: ${error.message}</p>;

        console.log(data);

        return (
          <ul>
            {data.pdfs.data.map(pdf => (
              <li key={pdf.uuid} style={{ margin: '10px' }}>
                <b>UUID</b>: {pdf.uuid}
                <br />
                <b>Title</b>: {pdf.title}
                <br />
                <b>URL</b>: {pdf.url}
              </li>
            ))}
          </ul>
        );
      }}
    </Query>
  </div>
);
