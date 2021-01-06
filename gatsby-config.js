const path = require('path');

module.exports = {
  pathPrefix : '/portfolio',
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      plugin: 'gatsby-plugin-root-import',
      options : {
        data : path.join(__dirname,'data'),
        views : path.join(__dirname,'views'),
        shared : path.join(__dirname,'shared'),
        assets : path.join(__dirname,'assets')
      }
    }
  ],
}
