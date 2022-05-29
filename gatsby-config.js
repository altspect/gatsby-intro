module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.placeholder-domain.com',
    title: 'Basic boilerplate gatsby course',
    description: 'Some description całe te',
    image: 'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {}
    }
  ]
}
