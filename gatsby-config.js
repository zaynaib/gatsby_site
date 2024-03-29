/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata Ola`,
  },
  plugins: [

    {
      resolve: "gatsby-source-dev",
      options: {
        // This is your username on Dev.to
        username: 'zaynaib',
        apiKey : process.env.GATSBY_DEV_API_KEY
 }
     },
     `gatsby-plugin-react-helmet`,
     `gatsby-plugin-sass`
  ],
}