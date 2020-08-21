const Validators = require( "../gatsby-node-validators" )

const visit=require('unist-util-visit');
const findAfter=require('unist-util-find-after');

module.exports = ( { markdownAST: ast, markdownNode } ) => {
    try{


        if ( !Validators.bookChapter.isBookChapterMarkdownRemarkGatsbyNode( markdownNode ) ) {
            return ast;
        }


        const HEADING_TAG_NAME = "heading";
        const H1_TAG_DEPTH = 1;
        const H2_TAG_DEPTH = 2;
        const NODE_DEPTHS = new Set( [
            H1_TAG_DEPTH,
            H2_TAG_DEPTH
        ] );

        const isHeadingTag = node => node.type === HEADING_TAG_NAME;
        const isDepth = node => NODE_DEPTHS.has( node.depth );
        const isHeading = node => isHeadingTag( node ) && isDepth( node );


        const children = [];

        visit( ast, isHeading, currentHeadingNode => {
            let nextHeadingNode = findAfter( ast, currentHeadingNode, isHeading );

            let currentIndex = ast.children.indexOf( currentHeadingNode );
            let nextIndex = ast.children.indexOf( nextHeadingNode );
            nextIndex = nextIndex > 0 ? nextIndex : undefined;

            let between = ast.children.slice( currentIndex, nextIndex );


            children.push( {
                type: "section",
                depth: 1,
                children: between,
                data: {
                    hName: "section",
                    hProperties:{
                        className:['content__section']
                    }
                }
            } );

            // console.log(JSON.stringify(ast));
        } );

        if ( children.length ) {
            ast.children = children;
        }
    }catch(error){
        console.error(error);
    }finally {
        return ast;
    }
};
