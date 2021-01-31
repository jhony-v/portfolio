const path = require('path');

module.exports = {
  pathPrefix : "/",
  siteMetadata: {
    title: `Jhony Vega | Frontend Developer`,
    description: `Hello, my name is Jhony Vega, I'm from Peru, a person who loves technology and web development. My main experience is the frontend but also I worked with other technologies.`,
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
        utils : path.resolve(__dirname,"src/utils"),
      }
    }
  ],
}
