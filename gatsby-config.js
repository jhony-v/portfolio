const path = require('path');

module.exports = {
  pathPrefix : "/portfolio",
  siteMetadata: {
    title: `Jhony Vega - Portfolio`,
    description: `Frontend Developer, working main in React , Vue and Testing libraries to improve the websites and create new features`,
    author: `Jhony Vega`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, 
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options : {
        common : path.resolve(__dirname,"src/components/common"),
        layouts : path.resolve(__dirname,"src/components/layouts"),
        views : path.resolve(__dirname,"src/views"),
        config : path.resolve(__dirname,"src/config"),
        assets : path.resolve(__dirname,"src/assets"),
      }
    }
  ],
}
