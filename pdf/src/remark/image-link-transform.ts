import { visit } from "unist-util-visit";
import { ChapterInfo } from "../create-book-data";



export const imageLinkTransform = ( chapterInfo: ChapterInfo): any => ( ast: any) => {
    try {
      visit( ast, `image`, ( imageNode: any ) => {
        imageNode.url = imageNode.url
          .replace( /(.*)\/images\//, chapterInfo.imageDirname + `/` );
      } );
    }catch (error){
        console.error(error);
        throw error;
    }


    return ast;
};
