require( "dotenv" ).config( {
  path: `.env.${ process.env.NODE_ENV }`,
} )

const path = require( 'path' );
const { CustomGatsbyNodeType } = require( './plugins/gatsby-node-types' );
const { FilesystemSourceName } = require( './plugins/filesystem-gatsby-node-types' );

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
    resolve: `gatsby-transformer-json-to-gatsby-node`,
    options: {
      name: `book-toc_${ locale }`,
      nodeId: `book-toc_${ locale }`,
      nodeType: CustomGatsbyNodeType.BookToc,
      contentId:`toc`,
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-ts-loader",
      options: {
        tslint: false // false or exclude to disable tslint
      }
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `book-toc_ru`,
        path: path.resolve( '../book/ru/metadata/toc.json' ),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: FilesystemSourceName.WhatIsNew,
        path: path.resolve( '../what-is-new/' ),
      },
    },
    {
      resolve: `gatsby-transformer-what-is-new-toc`,
      options: {},
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

    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        // Url to query from
        url: "https://api.github.com/graphql",
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `bearer ${ process.env.GITHUB_TOKEN }`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          // {
          //   resolve: `gatsby-remark-decorate-what-is-new-heading-h1`,
          // },
          {
            resolve:`gatsby-remark-collect-info-for-block-code-before-prismjs`,
            options:{}
          },

          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              // inlineCodeMarker: null,
              // // This toggles the display of line numbers globally alongside the code.
              // // To use it, add the following line in src/layouts/index.js
              // // right after importing the prism color scheme:
              // //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // // Defaults to false.
              // // If you wish to only show line numbers on certain code blocks,
              // // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              noInlineHighlight: true,
            },
          },
          // {
          //   resolve: `gatsby-remark-inline-code-add-class`,
          //   options: {  },
          // },


          // {
          //   resolve: `gatsby-remark-divide-into-section`,
          //   options: {},
          // },
          // {
          //   resolve: `gatsby-remark-add-section-id`,
          //   options: { locale: "ru" },
          // },
          {
            resolve:`gatsby-remark-decorate-block-code`,
            options:{}
          },

          {
            resolve: `gatsby-remark-add-heading-link`,
            options: { locale: `ru` },
          },


          // {
          //   resolve: `gatsby-remark-decorate-book-chapter-h1`,
          //   options: { locale: `ru` },
          // },



          // {
          //   resolve:`gatsby-remark-copy-linked-files`,
          //   options:{}
          // },


          // `gatsby-remark-images`,

        ],
      },
    },


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    ...getPlugins( `ru` ),
  ],
};
