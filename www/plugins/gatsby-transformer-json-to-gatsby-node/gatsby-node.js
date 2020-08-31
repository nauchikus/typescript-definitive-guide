const isCurrentNodeIsWantedGatsbyNode = ( { name, node } ) =>
    node.internal.type === 'File' &&
    'sourceInstanceName' in node &&
    node.sourceInstanceName === name;

module.exports.onCreateNode = async ( helpers, options ) => {
    let { node, actions, createNodeId, loadNodeContent, createContentDigest } = helpers;
    let { createNode } = actions;
    let { name, locale, lang,nodeId,nodeType,contentId } = options;


    if ( !isCurrentNodeIsWantedGatsbyNode( { name, node } ) ) {
        return;
    }


    let content = await loadNodeContent( node );


    const GATSBY_NODE_ID = createNodeId( nodeId );

    const gatsbyNode = {
        [contentId]:JSON.parse(content),
        locale,
        lang,

        id: GATSBY_NODE_ID,
        internal: {
            // type: CustomGatsbyNodeType.AppNavigation,
            type: nodeType,
            contentDigest: createContentDigest( content ),
        },
    };


    await createNode( gatsbyNode );
};
