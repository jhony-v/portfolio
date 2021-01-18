const path = require('path');

module.exports = {
  pathPrefix : "/portfolio",
  siteMetadata: {
    title: `Jhony Vega | Frontend Developer`,
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
        name: `Jhony Vega | Frontend Developer`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#7440e2`,
        display: `standalone`,
        icon: `src/images/avatar_logo.png`, 
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
        hooks : path.resolve(__dirname,"src/hooks"),
      }
    }
  ],
}
