const { default: cn } = require( "classnames" );
const { CustomGatsbyNodeId } = require( "../gatsby-node-ids" );
const { WinContentTagBarTagsLabelToTypeMap } = require( "../win-content-tag-bar-tags-label-to-type-map" );

const createTagTemplate = ( { label, classes } ) => ( {
    type: `span`,
    children: [{
        type: `text`,
        value: label
    }],
    data: {
        hName: `span`,
        hProperties: {
            class: cn( `content__tag-bar-tag`, classes )
        }
    }
} );
const createTagBarTemplate = ( { tags } ) => ( {
    type: `div`,
    children: tags.reduce( ( children, tag ) => children.concat( createTagTemplate( tag ) ), [] ),
    data: {
        hName: `div`,
        hProperties: {
            class: `content__tag-bar`
        }
    }
} );


const isWinMdGatsbyNode = markdownNode =>
  /.*\/what-is-new\/\d\.\d\/.*content\.md$/i.test( markdownNode.fileAbsolutePath );
const getInnovationName = markdownNode => {
    let [,,innovationName] = /(.*\/what-is-new\/\d\.\d\/)(.*)(\/content\.md)$/i.exec( markdownNode.fileAbsolutePath );


    return innovationName;
};
const getMMP = markdownNode => {
    let [,,mmp] = /(.*\/what-is-new\/)(\d\.\d)(\/.*\/content\.md)$/i.exec( markdownNode.fileAbsolutePath );


    return mmp;
};

module.exports = ( ...params ) => {
    let [{ markdownNode,markdownAST: ast,getNode }] = params;


    try {
        if ( !isWinMdGatsbyNode( markdownNode ) ) {
            return ast;
        }


        let { toc } = getNode( CustomGatsbyNodeId.WhatIsNewToc );

        let mmp = getMMP( markdownNode );
        let innovationName = getInnovationName( markdownNode );

        let metadata = toc.find( item => item.mmp === mmp );
        let innovation = metadata.innovations.find( item => item.innovationName === innovationName );


        let h2Node = ast.children[ 0 ];


        if ( h2Node.type !== `heading` && h2Node.depth !== 2 ) {
            throw new Error( `Invalid h2Node.` );
        }


        let tagBarNode = createTagBarTemplate( {
            tags: innovation.tags
                            .map( label => WinContentTagBarTagsLabelToTypeMap.getInfoByLabel( label ) )
                            .sort( ( a, b ) => a.priority - b.priority )
                            .reverse()
        } );
        ast.children.splice( 1, 0, tagBarNode );


    }catch ( error ) {
        console.error(error);
    }finally {
        return ast;
    }



    return ast;
};
