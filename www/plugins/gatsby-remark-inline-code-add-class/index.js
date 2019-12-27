const visit=require('unist-util-visit');


module.exports = ( ...params ) => {
    let [{ markdownAST: ast }] = params;


    try{
        const INLINE_CODE_TAG_NAME = "inlineCode";

        const isInlineCodeTag = node => node.type === INLINE_CODE_TAG_NAME;

        visit( ast, isInlineCodeTag, inlineCodeNode => {
            inlineCodeNode.data || ( inlineCodeNode.data = {} );
            inlineCodeNode.data.hProperties || ( inlineCodeNode.data.hProperties = {} );
            inlineCodeNode.data.hProperties.className || ( inlineCodeNode.data.hProperties.className = [] );

            inlineCodeNode.data.hProperties.className.push( "inline-code" );
            //
            // Object.assign( inlineCodeNode.data.hProperties, {
            //     class: `inline-code`
            // } );
        } );
    }catch(error){
        console.error(error);
    }finally{
        return ast;
    }


    return ast;
};