module.exports = {
  siteMetadata: {
    title: 'jean erek alves '
  },
  plugins: [
  {    
    resolve: 'gatsby-source-filesystem',
        options: {
          name: 'recipes',
          path: `${__dirname}/recipes`
        }
      }
  ],
}
