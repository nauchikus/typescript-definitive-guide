const path = require( 'path' );

const getPlugins = locale => ( [
  {
    resolve: `gatsby-transformer-app-localization`,
    options: {
      name: `localization_${ locale }`,
      locale
    }
  },
  {
    resolve: `gatsby-transformer-app-navigation`,
    options: {
      name: `navigation_${ locale }`,
      locale
    }
  },
  {
    resolve:`gatsby-pages`,
    options: {
      locale
    }
  }
] );

module.exports = {
  siteMetadata: {
    title: ``,
    description: ``,
    author: `nauchikus`,
    nav:[
      {path:'/ru',name:''},
      {path:'/ru/book/chapters'},
      {path:'/ru/what-is-new'},
      {path:'/ru/tests'},
      {path:'/ru/fast'},
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-svg-sprite`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icon__image`,
        path: `${ __dirname }/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `localization_ru`,
        path: path.resolve( '../book/ru/metadata/localization.json' ),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `navigation_ru`,
        path: path.resolve( '../book/ru/metadata/navigation.json' ),
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    ...getPlugins( `ru` )
  ],
};
