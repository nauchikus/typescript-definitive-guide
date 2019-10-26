const { CustomGatsbyNodeType } = require( '../gatsby-node-types' );


const isCurrentAppNavigationFileGatsbyNode = ( { name, node } ) =>
    node.internal.type === 'File' &&
    'sourceInstanceName' in node &&
    node.sourceInstanceName === name;

module.exports.onCreateNode = async ( helpers, options ) => {
    let { node, actions, createNodeId, loadNodeContent, createContentDigest } = helpers;
    let { createNode } = actions;
    let { name, locale } = options;


    if ( !isCurrentAppNavigationFileGatsbyNode( { name, node } ) ) {
        return;
    }


    let content = await loadNodeContent( node );
    let localization = JSON.parse( content );



    const GATSBY_NODE_ID = createNodeId( `navigation_${ locale }` );

    const gatsbyNode = {
        localization,
        locale,

        id: GATSBY_NODE_ID,
        internal: {
            type: CustomGatsbyNodeType.AppNavigation,
            contentDigest: createContentDigest( content ),
        },
    };


    await createNode( gatsbyNode );
};
