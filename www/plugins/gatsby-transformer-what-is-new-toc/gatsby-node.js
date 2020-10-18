const StringUtils = require( "../../src/utils/string-utils" );
const ConverterPathUtils = require( "../../src/utils/converter-path-utils" );
const {CustomGatsbyNodeType} = require( "../gatsby-node-types" );
const {CustomGatsbyNodeId} = require( "../gatsby-node-ids" );
const {FilesystemSourceName} = require( "../filesystem-gatsby-node-types" );
const {Version} = require( "../../src/utils/Version" );

const isWhatIsNewFileGatsbyNode = ( { node } ) =>
  node.sourceInstanceName === FilesystemSourceName.WhatIsNew;
const isMetadata = ( { node } ) => node.base === "metadata.json";
const sortInnovationByDate = ( a, b ) =>
    Date.parse( a.dateRelease ) - Date.parse( b.dateRelease );
const findLastVersionInnovationByMetadata = metadata => {


  let lastVersionInnovation = [...metadata.innovations]
                           .sort( sortInnovationByDate )
                           .pop();


  return lastVersionInnovation;
};
const getLastVersionInfo = metadata => metadata.releaseHistory[ 0 ];



const getLastVersionDate = metadata => getLastVersionInfo( metadata ).version;
const toMMP = version => new Version(version).mmp;
const toFloat = mmp => parseFloat( mmp );

const whatIsNewMetadataGatsbyNodeFilter = node => isWhatIsNewFileGatsbyNode( { node } ) && isMetadata( { node } );
const sortMetadataByVersion = ( a, b ) =>
  toFloat( toMMP( getLastVersionDate( a ) ) ) - toFloat( toMMP( getLastVersionDate( b ) ) );
const metadataToToc = metadata => {
  let { innovations, ...rest } = metadata;

  let toc = {
    ...rest,

    mmp: toMMP( getLastVersionInfo( metadata ).version ),
    innovations: innovations.map( innovation =>
      Object.assign( innovation, {
        path: ConverterPathUtils.toUrl(innovation.innovationName)
      } ) )
  };


  return toc;
};


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




  const whatIsNewTocGatsbyNode = {
    toc,

    id: CustomGatsbyNodeId.WhatIsNewToc,
    internal: {
      type: CustomGatsbyNodeType.WhatIsNewToc,
      contentDigest: createContentDigest( JSON.stringify(toc) ),
    },
  };


  await createNode( whatIsNewTocGatsbyNode );
};
