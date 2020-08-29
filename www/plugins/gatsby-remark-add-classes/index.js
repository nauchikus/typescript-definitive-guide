const visit = require( "unist-util-visit" );
const { addClassRemarkNode } = require( "../utils" );



const commands = [
    {
        validator: node => node.type === "list",
        action: node => addClassRemarkNode( node, "content__list" )
    },
    {
        validator: node => node.type === "heading",
        action: node => addClassRemarkNode(node, `content__heading_${node.depth}`)
    },
];

const validator = node => commands.some( command => command.validator( node ) );
const action = node => {
    let command = commands.find( command => command.validator( node ) );
    command.action( node );
};


module.exports = ( ...params ) => {
    let [{ markdownAST: ast }] = params;

    try{
        visit( ast, validator, node => action( node ) );
    }catch(error){
        console.error(error);
    }finally {
        return ast;
    }


    return ast;
};
