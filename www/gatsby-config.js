require( "dotenv" ).config( {
  path: `.env.${ process.env.NODE_ENV }`,
} )


const githubNodeEnvValid = () => {
  if ( !process.env.GITHUB_TOKEN ) {
    throw new Error(`GITHUB_TOKEN must be specified`)
  }
  if ( !process.env.REPOSITORY_OWNER ) {
    throw new Error(`REPOSITORY_OWNER must be specified`)
  }
  if ( !process.env.REPOSITORY_BRANCH ) {
    throw new Error(`REPOSITORY_BRANCH must be specified`)
  }
};


githubNodeEnvValid();

const path = require( 'path' );
const { CustomGatsbyNodeType } = require( './plugins/gatsby-node-types' );
const { FilesystemSourceName } = require( './plugins/filesystem-gatsby-node-types' );

class ProjectPath{
  static IMAGES_DIR = path.resolve(`./src/images`);
  // static IMAGES_DIR = `${ __dirname }/src/images`;
  // static ASSETS_DIR = `${ __dirname }/src/assets`;
  static ASSETS_DIR = path.resolve(`./assets`);
  static LOCALIZATION_RU = path.resolve( '../book/ru/metadata/localization.json' );
  static NAVIGATION_RU = path.resolve( '../book/ru/metadata/navigation.json' );
  static BOOK_TOC_RU = path.resolve( '../book/ru/metadata/toc.json' );
  static WHAT_IS_NEW_DIR = path.resolve( '../what-is-new/' );
  static BOOK_DIR = path.resolve( '../book/' );

  static getBookDirLocalized(locale){
    return `${ ProjectPath.BOOK_DIR }/${ locale }/`;
  }
}

const getPlugins = locale => ( [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: FilesystemSourceName.localized( FilesystemSourceName.BookChapters, locale ),
      path: ProjectPath.getBookDirLocalized(locale),
      locale
    },
  },
  {
    resolve: `gatsby-transformer-app-localization`,
    options: {
      name: `localization_${ locale }`,
      locale
    }
  },
  // {
  //   resolve: `gatsby-transformer-app-navigation`,
  //   options: {
  //     name: `navigation_${ locale }`,
  //     locale
  //   }
  // },
  {
    resolve: `gatsby-transformer-json-to-gatsby-node`,
    options: {
      name: `book-toc_${ locale }`,
      nodeId: `book-toc_${ locale }`,
      nodeType: CustomGatsbyNodeType.BookTocSource,
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
    repository:{
      owner:process.env.REPOSITORY_OWNER,
      branch:process.env.REPOSITORY_BRANCH,
    },

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
    {
      resolve: `gatsby-plugin-ts`,
      options: {
        fileName: `gen/graphql-types.ts`,
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-svg-sprite`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: ProjectPath.IMAGES_DIR,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icon__image`,
        path: ProjectPath.ASSETS_DIR,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `localization_ru`,
        path: ProjectPath.LOCALIZATION_RU,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `navigation_ru`,
    //     path: ProjectPath.NAVIGATION_RU,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `book-toc_ru`,
        path: ProjectPath.BOOK_TOC_RU,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: FilesystemSourceName.WhatIsNew,
        path: ProjectPath.WHAT_IS_NEW_DIR,
      },
    },
    {
      resolve: `gatsby-transformer-what-is-new-toc`,
      options: {},
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
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
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 608,
            },
          },
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


          {
            resolve: `gatsby-remark-divide-into-section`,
            options: {},
          },
          {
            resolve: `gatsby-remark-add-section-id`,
            options: { locale: "ru" },
          },
          {
            resolve:`gatsby-remark-decorate-block-code`,
            options:{}
          },

          {
            resolve: `gatsby-remark-add-heading-link`,
            options: { locale: `ru` },
          },
          {
            resolve:`gatsby-remark-add-classes`,
            options:{}
          },
          {
            resolve:`gatsby-remark-create-tag-bar`,
            options:{}
          },


          {
            resolve: `gatsby-remark-book-chapter-cover`,
            options: { locale: `ru` },
          },



          // {
          //   resolve:`gatsby-remark-copy-linked-files`,
          //   options:{}
          // },



        ],
      },
    },


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    ...getPlugins( `ru` ),
  ],
};
