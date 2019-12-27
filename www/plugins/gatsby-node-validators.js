const { GatsbyNodeType } = require( "./book-gatsby-node-type" );

const { SourceInstanceNames } = require( "./source-instance-names" );
const { FilesystemSourceName } = require( "./filesystem-gatsby-node-types" );

const isFileGatsbyNode = node => node.internal.type === "File";
const isMarkdownRemarkGatsbyNode = node => node.internal.type === "MarkdownRemark";
const isWhatIsNewTocGatsbyNode = node => node.internal.type === GatsbyNodeType.WhatIsNewToc;
const isBookTocGatsbyNode = node => isFileGatsbyNode( node ) && isBookToc( node );


const isBookChapter = node => node.base === "content.md";
const isBookToc = node => node.base === "toc.json";
const isAppLocalization = node => node.base === "localization.json";
const isCurrentLocale = ( node, locale ) => getLocale( node ) === locale;


const isWhatIsNewMetadata = node => node.base === "metadata.json";
const sourceInstanceNames = new Set( [
  SourceInstanceNames.WhatIsNew,
  SourceInstanceNames.Book
] );

const isValidSourceInstanceName = node =>
  sourceInstanceNames.has( node.sourceInstanceName );
const isWhatIsNewSource = node =>
  node.sourceInstanceName === SourceInstanceNames.WhatIsNew;

const isBookSource = node =>
  node.sourceInstanceName === SourceInstanceNames.Book;


const isWhatIsNewMetadataGatsbyNode = node => node.internal.type === "WhatIsNewMetadata";

const isWhatIsNewMarkdownRemarkGatsbyNode = node => {
  if (
    node.sourceInstanceName &&
    node.sourceInstanceName === FilesystemSourceName.WhatIsNew
  ) {
    return true;
  }

  return false;
};
const isNotWhatIsNewMarkdownRemarkGatsbyNode = node => !isWhatIsNewMarkdownRemarkGatsbyNode( node );

const isWhatIsNewTitleMarkdownRemarkGatsbyNode = node =>
  /.*\/what-is-new\/\d+\.\d+\/title\/content\.md$/.test( node.fileAbsolutePath );


module.exports = {
  isFileGatsbyNode,
  isMarkdownRemarkGatsbyNode,

  isValidSourceInstanceName,

  file: {
    isFileGatsbyNode,
    isBookChapter,
    isBookToc,
    isAppLocalization,

    isWhatIsNewMetadata
  },
  source: {
    isWhatIsNewSource,
    isBookSource
  },

  whatIsNew: {
    isWhatIsNewMarkdownRemarkGatsbyNode,
    isWhatIsNewTitleMarkdownRemarkGatsbyNode,
    isNotWhatIsNewMarkdownRemarkGatsbyNode
  },

  gatsbyNode: {
    isWhatIsNewMetadataGatsbyNode,
    isWhatIsNewTocGatsbyNode,
    isBookTocGatsbyNode
  },

  isWhatIsNewSource,
  isBookSource
};
