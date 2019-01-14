module.exports = {
  siteMetadata: {
    title: 'Gatsby With Apollo',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'AdtomicAPI',
        fieldName: 'adtomic',
        url: 'https://sls-laravel.daigo5.xyz/',
      },
    },
  ],
};
