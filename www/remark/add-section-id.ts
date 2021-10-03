import {visit} from "unist-util-visit";

import * as Utils from "./utils";
import {toId} from "../utils/converter-path-utils";
import {createBox, generateContentSectionIncrementalId} from "../utils/string-utils";

export const addSectionId = (  ) => (ast) => {
    const levels = createBox(5);



    try{
        const isHeading = node => node.type === "heading";
        const isSection = node => node.type === "section";

        visit( ast, isSection, sectionNode => {
            let headingNode = sectionNode.children.find( isHeading );

            let heading = Utils.reduceChildrenValue(headingNode);
            let sectionId = toId(heading);
            let levelId = generateContentSectionIncrementalId(headingNode.depth - 1, levels);


            sectionNode.data || ( sectionNode.data = {} );
            sectionNode.data.hProperties || ( sectionNode.data.hProperties = {} );

            Object.assign( sectionNode.data.hProperties, {
                id: sectionId,
                [`level-id`]: levelId
            } );
        } );
    }catch(error){
        throw new Error(`[transformer AddSectionId] ${error.message}`);
    }finally{
        return ast;
    }


    return ast;
};
