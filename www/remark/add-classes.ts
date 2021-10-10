import {visit} from "unist-util-visit";
import {addClassRemarkNode} from "./utils";



const commands = [
    {
        validator: node => node.type === "list",
        action: node => addClassRemarkNode( node, "content__list" )
    },
    // {
    //     validator: node => node.type === "paragraph",
    //     action: node => addClassRemarkNode( node, "content__paragraph" )
    // },
    {
        validator: node => node.type === "heading",
        action: node => addClassRemarkNode(node, `content__heading`)
    },
];

const validator = node => commands.some( command => command.validator( node ) );
const action = node => {
    let command = commands.find( command => command.validator( node ) );
    command.action( node );
};


export const addClasses = () => ( ast ) => {
    try{
        visit( ast, validator, node => {
            action( node )
        } );
    }catch(error){
        console.error(error);
    }finally {
        return ast;
    }


    return ast;
};
