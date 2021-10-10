import { visit } from "unist-util-visit";
import { ChapterInfo } from "../create-book-data";
import { toValue, findTree, initDataAttr, hProperties } from "./utils";


export const headingAddId = (chapterInfo: ChapterInfo): any => (ast: any): any => {
    try{
        visit( ast, `heading`, (headingNode, index, parent) => {
            const title = toValue( headingNode );
            const currentNode = findTree( chapterInfo, node => node.title === title );

            let id = currentNode?.index;

            hProperties( headingNode, { id } );
        } );
    }catch(error){
        console.error(error);
    }finally{
        return ast;
    }


    return ast;
};
