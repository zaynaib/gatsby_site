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
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // {
    //   resolve: "gatsby-source-dev",
    //   options: {
    //     // This is your username on Dev.to
    //     username: 'zaynaib',

    //   }
    // },
    // `gatsby-plugin-sass`
  ],
}