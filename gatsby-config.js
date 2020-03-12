/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Blog AxaGuildDev`,
    siteUrl: `https://www.samuelgomez.fr`,
    description: `Blazing fast modern site generator for React`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `page`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-contract",
      options: {
        apiKey: "uL19TxbOTqdHcHTPd1AgQbR-FjqEDqWK",
      },
    },
    {
      resolve: "gatsby-source-github",
      options: {
        client_id: "uL19TxbOTqdHcHTPd1AgQbR-FjqEDqWK",
        client_secret: "9762db2dfc39e0b0e8d9988b89ebe8ad0221488e",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131767530-1",
      },
    },
  ],
}
