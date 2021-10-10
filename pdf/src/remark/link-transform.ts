import { visit } from "unist-util-visit";
import { ChapterInfo } from "../create-book-data";


const isWwwLink = ( link: string ) => /^(http|https):\/\//.test( link );
const isAppWebLink = (link: string) => link.startsWith(`https://typescript-definitive-guide`);

export const linkTransform = (chapterInfo: ChapterInfo): any => (ast: any) => {
  try {
    visit( ast, `link`, ( linkNode: any, index: any, parent: any ) => {
      let link = linkNode.url;

      if (isWwwLink(link) && !isAppWebLink(link)) {
        return ;
      }

      if (isAppWebLink(link)) {
      }

    } );
  }catch (error){
    console.error(error);
    throw error;
  }


  return ast;
};
