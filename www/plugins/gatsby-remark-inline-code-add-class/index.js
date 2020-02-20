const visit = require( "unist-util-visit" );
const { addClassRemarkNode } = require( "../utils" );


module.exports = ( ...params ) => {
    let [{ markdownAST: ast }] = params;


    try{
        const INLINE_CODE_TAG_NAME = "inlineCode";

        const isInlineCodeTag = node => node.type === INLINE_CODE_TAG_NAME;

        visit( ast, isInlineCodeTag, inlineCodeNode => {
            addClassRemarkNode( inlineCodeNode, "inline-code" );
        } );
    }catch(error){
        console.error(error);
    }finally{
        return ast;
    }


    return ast;
};