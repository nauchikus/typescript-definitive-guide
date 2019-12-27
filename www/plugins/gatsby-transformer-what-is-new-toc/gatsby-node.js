const StringUtils = require( "../../src/utils/string-utils" );
const {CustomGatsbyNodeType} = require( "../gatsby-node-types" );
const {FilesystemGatsbyNodeType,FilesystemSourceName} = require( "../filesystem-gatsby-node-types" );

const isWhatIsNewFileGatsbyNode = ( { node } ) =>
  node.sourceInstanceName === FilesystemSourceName.WhatIsNew;
const isMetadata = ( { node } ) => node.base === "metadata.json";

const findLastVersionInnovationByMetadata = metadata => {
  const sortInnovationByDate = ( a, b ) =>
    Date.parse( a.dateRelease ) - Date.parse( b.dateRelease );

  let lastVersionInnovation = metadata.innovations
                           .sort( sortInnovationByDate )
                           .pop();


  return lastVersionInnovation;
};
const innovationToVersionInfoConverter = innovation => ( {
  version: innovation.version,
  date: innovation.dateRelease
} );
const getCurrentReleaseStatusByMetadata = metadata =>
  innovationToVersionInfoConverter(
    findLastVersionInnovationByMetadata( metadata )
  );


const whatIsNewMetadataGatsbyNodeFilter = node => isWhatIsNewFileGatsbyNode( { node } ) && isMetadata( { node } );
const sortMetadataByVersion = ( a, b ) => a.versionMMP - b.versionMMP;
const metadataToToc = metadata => {
  let { innovations, ...rest } = metadata;
  let lastVersionStatus = getCurrentReleaseStatusByMetadata( metadata );


  let toc = {
    ...rest,
    lastVersionStatus,

    innovations: innovations.map( innovation =>
      Object.assign( innovation, {
        path: StringUtils.toPath( innovation.innovationName )
      }) )
  };


  return toc;
};
const sortInnovationByDatePublication = ( a, b ) =>
  Date.parse( a.datePublication ) - Date.parse( b.datePublication );
const sortStatusesByDate = ( a, b ) =>
  Date.parse( a.date ) - Date.parse( b.date );


const arrangeFewFieldWinTocAction = toc => toc.forEach( node => {
  node.innovations.sort( sortInnovationByDatePublication );
} );

module.exports.sourceNodes = async ( helpers, options ) => {
  let { actions, createNodeId, loadNodeContent, createContentDigest, getNodesByType } = helpers;
  let { createNode } = actions;


  let whatIsNewMetadataGatsbyNodePromiseAll = getNodesByType( "File" )
    .filter( whatIsNewMetadataGatsbyNodeFilter )
    .map( async node => {
      let content = await loadNodeContent( node );
      let metadata = JSON.parse( content );

      return metadata;
    } );
  let whatIsNewMetadataGatsbyNodeAll = await Promise.all( whatIsNewMetadataGatsbyNodePromiseAll );
  let toc = whatIsNewMetadataGatsbyNodeAll
    .sort( sortMetadataByVersion )
    .map( metadataToToc );


  // arrangeFewFieldWinTocAction( toc );



  const WHAT_IS_NEW_TOC_GATSBY_NODE_ID = createNodeId( `what-is-new-toc` );

  const whatIsNewTocGatsbyNode = {
    toc,

    id: WHAT_IS_NEW_TOC_GATSBY_NODE_ID,
    internal: {
      type: CustomGatsbyNodeType.WhatIsNewToc,
      contentDigest: createContentDigest( JSON.stringify(toc) ),
    },
  };


  await createNode( whatIsNewTocGatsbyNode );
};
