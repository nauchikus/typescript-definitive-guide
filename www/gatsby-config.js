const path = require('path');

const dotenv = require('dotenv');
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
});

dotenv.config({
  path: path.join(
      path.resolve(process.cwd(), `../`),
      `.env.github.development`
  )
});


const { isRepoInfo } = require(`./src/utils/env-utils`);

const {
  NODE_ENV,
  GITHUB_TOKEN,
  GATSBY_REPOSITORY_NAME,
  GATSBY_REPOSITORY_OWNER,
  GATSBY_REPOSITORY_BRANCH,
} = process.env


if(!isRepoInfo() && NODE_ENV === `development`){
  console.warn(`[GITHUB_TOKEN WARN] Github token not found.`);
}

const githubNodeEnvValid = () => {
  if (!NODE_ENV && !GITHUB_TOKEN) {
    throw new Error("GITHUB_TOKEN must be specified")
  }
  if (!NODE_ENV && !GATSBY_REPOSITORY_NAME) {
    throw new Error("GATSBY_REPOSITORY_NAME must be specified")
  }
  if (!NODE_ENV && !GATSBY_REPOSITORY_OWNER) {
    throw new Error("GATSBY_REPOSITORY_OWNER must be specified")
  }
  if (!NODE_ENV && !GATSBY_REPOSITORY_BRANCH) {
    throw new Error("GATSBY_REPOSITORY_BRANCH must be specified")
  }
};

githubNodeEnvValid()


const { CustomGatsbyNodeType } = require("./plugins/gatsby-node-types")
const {
  FilesystemSourceName,
} = require("./plugins/filesystem-gatsby-node-types")

class ProjectPath {
  static IMAGES_DIR = path.resolve("./src/images")
  // static IMAGES_DIR = `${ __dirname }/src/images`;
  // static ASSETS_DIR = `${ __dirname }/src/assets`;
  static ASSETS_DIR = path.resolve("./assets")
  static LOCALIZATION_RU = path.resolve("../book/ru/metadata/localization.json")
  static NAVIGATION_RU = path.resolve("../book/ru/metadata/navigation.json")
  static BOOK_TOC_RU = path.resolve("../book/ru/metadata/toc.json")
  static WHAT_IS_NEW_DIR = path.resolve("../what-is-new/")
  static BOOK_DIR = path.resolve("../book/")

  static getBookDirLocalized(locale) {
    return `${ProjectPath.BOOK_DIR}/${locale}/`
  }
}



const getPlugins = ({ locale, lang }) => [
  {
    resolve: 'gatsby-plugin-ts',
    options: {
      fileName: 'gen/graphql-types.ts'
    }
  },
  'gatsby-plugin-sass',
  'gatsby-plugin-svg-sprite',
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: ProjectPath.IMAGES_DIR
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'icon__image',
      path: ProjectPath.ASSETS_DIR
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'localization_ru',
      path: ProjectPath.LOCALIZATION_RU
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'book-toc_ru',
      path: ProjectPath.BOOK_TOC_RU
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: FilesystemSourceName.WhatIsNew,
      path: ProjectPath.WHAT_IS_NEW_DIR
    }
  },
  {
    resolve: 'gatsby-transformer-what-is-new-toc',
    options: {}
  },
  {
    resolve: 'gatsby-transformer-sharp',
    options: {
      // The option defaults to true
      checkSupportedExtensions: false
    }
  },
  'gatsby-plugin-sharp',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'gatsby-starter-default',
      short_name: 'starter',
      start_url: '/',
      background_color: '#663399',
      theme_color: '#663399',
      display: 'minimal-ui',
      icon: 'assets/images/app-logos/app-logo.svg' // This path is relative to the root of the site.
    }
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
        Authorization: `bearer ${GITHUB_TOKEN}`,
      },
      // Additional options to pass to node-fetch
      fetchOptions: {},
    },
  },

  {
    resolve: 'gatsby-transformer-remark',
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
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 608
          }
        },
        {
          resolve: 'gatsby-remark-prismjs',
          options: {
            classPrefix: 'language-',
            // inlineCodeMarker: null,
            // // This toggles the display of line numbers globally alongside the code.
            // // To use it, add the following line in src/layouts/index.js
            // // right after importing the prism color scheme:
            // //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
            // // Defaults to false.
            // // If you wish to only show line numbers on certain code blocks,
            // // leave false and use the {numberLines: true} syntax below
            showLineNumbers: false,
            noInlineHighlight: true
          }
        },
        {
          resolve: 'gatsby-remark-transform-link',
          options: {
            locale,
            lang
          }
        },
        {
          resolve: 'gatsby-remark-formatting-content-link',
          options: {
            locale,
            lang
          }
        },
        {
          resolve: 'gatsby-remark-divide-into-section',
          options: {}
        },
        {
          resolve: 'gatsby-remark-add-section-id',
          options: {
            locale,
            lang
          }
        },
        {
          resolve: 'gatsby-remark-decorate-block-code',
          options: {}
        },

        {
          resolve: 'gatsby-remark-add-heading-link',
          options: {
            locale,
            lang
          }
        },
        {
          resolve: 'gatsby-remark-add-classes',
          options: {}
        },

        {
          resolve: 'gatsby-remark-book-chapter-cover',
          options: {
            locale,
            lang
          }
        }
      ]
    }
  },

  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: FilesystemSourceName.localized(
          FilesystemSourceName.BookChapters,
          lang
      ),
      path: ProjectPath.getBookDirLocalized(lang),
      locale
    }
  },
  {
    resolve: 'gatsby-transformer-app-localization',
    options: {
      name: `localization_${lang}`,
      lang
    }
  },
  {
    resolve: 'gatsby-transformer-json-to-gatsby-node',
    options: {
      name: `book-toc_${lang}`,
      nodeId: `book-toc_${lang}`,
      nodeType: CustomGatsbyNodeType.BookTocSource,
      contentId: 'toc',
      locale,
      lang
    }
  },
  {
    resolve: 'gatsby-pages',
    options: {
      locale,
      lang
    }
  }
].filter(Boolean);

module.exports = {
  pathPrefix: process.env.GATSBY_REPOSITORY_NAME,
  siteMetadata: {
    repository: {
      name: `typescript-definitive-guide`,
      // name: process.env.GATSBY_REPOSITORY_NAME,
      owner: process.env.GATSBY_REPOSITORY_OWNER,
      branch: process.env.GATSBY_REPOSITORY_BRANCH,
    },

    siteUrl: `https://typescript-definitive-guide.ru/`,
    title: "",
    description: "",
    author: "nauchikus",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-cname`
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://typescript-definitive-guide.ru/',
        sitemap: 'https://typescript-definitive-guide.ru/sitemap.xml',
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        // The ID of yandex metrika.
        trackingId: 51846272,
        // Enabled a webvisor. The default value is `false`.
        webvisor: true,
        // Enables tracking a hash in URL. The default value is `false`.
        trackHash: true,
        // Defines where to place the tracking script - `false` means before body (slower loading, more hits)
        // and `true` means after the body (faster loading, less hits). The default value is `false`.
        afterBody: true,
        // Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
        // Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
        defer: true,
      },
    },
    ...getPlugins({
      locale: undefined,
      lang: "ru",
    })

  ]

}
