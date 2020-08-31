const { CustomGatsbyNodeType } = require( '../gatsby-node-types' );


const isCurrentAppLocalizationFileGatsbyNode = ( { name, node } ) =>
    node.internal.type === 'File' &&
    'sourceInstanceName' in node &&
    node.sourceInstanceName === name;

module.exports.onCreateNode = async ( helpers, options ) => {
    let { node, actions, createNodeId, loadNodeContent, createContentDigest } = helpers;
    let { createNode } = actions;
    let { name, lang } = options;



    if ( !isCurrentAppLocalizationFileGatsbyNode( { name, node } ) ) {
        return;
    }



    let content = await loadNodeContent( node );
    let localization = JSON.parse( content );


    const APP_LOCALIZATION_GATSBY_NODE_ID = createNodeId( `localisation_${ lang }` );

    const appLocalizationGatsbyNode = {
        localization,
        lang,

        id: APP_LOCALIZATION_GATSBY_NODE_ID,
        internal: {
            type: CustomGatsbyNodeType.AppLocalization,
            contentDigest: createContentDigest( content ),
        },
    };


    await createNode( appLocalizationGatsbyNode )
};
