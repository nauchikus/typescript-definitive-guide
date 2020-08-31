const visit=require('unist-util-visit');

const StringUtils=require('../../src/utils/string-utils');
const Validators=require('../gatsby-node-validators');

module.exports = ( ...params ) => {
    let [{ markdownAST: ast, markdownNode, getNodes }, { locale }] = params;


    try{
        if ( !Validators.bookChapter.isBookChapterMarkdownRemarkGatsbyNode( markdownNode ) ) {
            return ast;
        }

        const isCurrentBookTocGatsbyNode =
          node => node.internal.type === "BookToc" &&
            node.fileAbsolutePath === markdownNode.fileAbsolutePath;

        // let currentChapterTocGatsbyNode = getNodes().find( isCurrentBookTocGatsbyNode );
        // let { toc: currentChapterToc } = currentChapterTocGatsbyNode;

        const SECTION_TAG_NAME = "section";
        const HEADING_TAG_NAME = "heading";
        const TEXR_TAG_NAME = "text";
        const H1_TAG_DEPTH = 1;
        const H2_TAG_DEPTH = 2;

        const NODE_DEPTHS = new Set( [H1_TAG_DEPTH, H2_TAG_DEPTH] );
        const isHeadingTag = node => node.type === HEADING_TAG_NAME;
        const isDepth = node => NODE_DEPTHS.has( node.depth );
        const isH2 = node => node.depth === H2_TAG_DEPTH;
        const isHeading = node => isHeadingTag( node ) && isDepth( node );
        const isSection = node => node.type === SECTION_TAG_NAME;

        const isText = node => node.type === TEXR_TAG_NAME;

        const joinTextNodeValue = (result, node) => {
            return result.concat(node.value);
        }


        visit( ast, isSection, sectionNode => {
            let headingNode = sectionNode.children.find( isHeading );
            // let textNode = headingNode.children.find( isText );

            if ( !NODE_DEPTHS.has( headingNode.depth ) ) {
                return;
            }



            let heading = headingNode.children
                .filter(isText)
                .reduce(joinTextNodeValue, ``);
            let sectionId = ``;


            if ( isH2( headingNode ) ) {
                sectionId = StringUtils.hadingToNativeElementAttributeValue(heading);
            }


            sectionNode.data || ( sectionNode.data = {} );
            sectionNode.data.hProperties || ( sectionNode.data.hProperties = {} );

            Object.assign( sectionNode.data.hProperties, {
                id: sectionId
            } );
        } );
    }catch(error){
        console.error(error);
    }finally{
        return ast;
    }


    return ast;
};