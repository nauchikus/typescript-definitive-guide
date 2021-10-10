import {visit} from "unist-util-visit";
import {findAfter} from "unist-util-find-after";


export const divisionIntoSections = () => (ast) => {
    try{
        const isHeadingTag = node => node.type === "heading";

        const children = [];


        visit( ast, isHeadingTag, (currentHeadingNode) => {
            let nextHeadingNode = findAfter( ast, currentHeadingNode, isHeadingTag );

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


        } );

        if ( children.length ) {
            ast.children = children;
        }
    }catch(error){
        throw new Error(`[transformer DivisionIntoSection] ${error.message}`);
    }finally {
        return ast;
    }
};
