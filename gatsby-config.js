/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `LucasBurnsMortgages`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "TLwL9qWkNhRZLUYf2PlHzd9PamgCq6lH-ieZBMHBrME",
      "spaceId": "3uk34yq9t6vg"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/files/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `didot`, `lato`, `licorice`, `koh santepheap`
      ],
      display: 'swap'
    }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Lucas Burns Mortgages`,
      short_name: `LB`,
      start_url: `/`,
      icon: 'src/favicon.png',
    },
  }
]
};