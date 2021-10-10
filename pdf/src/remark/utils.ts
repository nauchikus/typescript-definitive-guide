import { generateIndex, toCharCodeId } from "../../../www/utils/string-utils";

export const toValue = (node: any): string => node.children
  .reduce((result: string, current: any) => result + current.value, ``);
// export const getH1 = (ast: any) => ast.children
//   .find(node => node.type === `heading` && node.depth === 2);



export const headingIndex = (index: number) => `Глава ${generateIndex(index, 2)}`;
export const h1BookPdf = (index: number, title: string) => `${headingIndex(index)}. ${title}`;
export const h2BookPdf = (index: number, title: string) => `${generateIndex(index, 2)}. ${title}`;
export const toBookPdfHref = (link: string) => `#` + toCharCodeId(link);


export function initDataAttr(node: any){
  node.data || ( node.data = {} );
  node.data.hProperties || ( node.data.hProperties = {} );
}
export function addHProperties(node: any, props: object){
  Object.assign( node.data.hProperties, props );
}
export function hProperties( node: any, props: object){
  initDataAttr( node );
  addHProperties( node, props );
}
export type TNode = {
  children?: TNode[]
}
export function findTree<T extends TNode>(tree: T, validator: (tree: T) => boolean): T | null{
  if(validator(tree)){
    return tree;
  }

  if(tree.children){
    for(let child of tree.children){
      let match = findTree(child as T, validator);

      if(match){
        return match;
      }
    }
  }

  return null;
}
