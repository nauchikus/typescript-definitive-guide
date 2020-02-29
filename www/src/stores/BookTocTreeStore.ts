import { createToggleState, ToggleUiState } from "./AppStateService";
import { createToggle } from "../utils/toggle";
import { observable } from "mobx";

export interface ISection {
  section:string;
}
export interface BookTocSubNode {
  subtitle:string;
  path:string;
}
export interface BookTocNode {
  section:string;

  title:string;
  subtitles:BookTocSubNode[];

  path:string;

}
export interface TreeNode<T> {
  id:string;
  isCollapse:boolean;
  index:number;
  data: T;
}

export const BOOK_TOC_SECTION_NAME_ALL = "";

export const createBookTocTree=<T extends ISection>(tree:TreeNode<T>[],isCollapseAll=false) => {
  let sectionMatchCount = tree.reduce( ( result, current ) => {
    let { section } = current.data;

    let count = result.has( section ) ? ( result.get( section ) ?? 0 ) + 1 : 1;

    result.set( section, count );


    return result;
  }, new Map<string, number>() );


  let store = observable.object( {
    tree,
    isCollapseAll,
    showTocWithSectionName: BOOK_TOC_SECTION_NAME_ALL,
    get isAllSection () {
      return this.showTocWithSectionName === BOOK_TOC_SECTION_NAME_ALL;
    },
    get treeFiltered () {
      return this.isAllSection ?
        this.tree :
        this.tree.filter( (node:TreeNode<T>) => node.data.section === this.showTocWithSectionName );
    },
    getNodeById ( id: string ) {
      return this.tree.find( node => node.id === id );
    },
    collapseById ( id: string ) {
      let node = this.tree.find( node => node.id === id );

      if ( node ) {
        node.isCollapse = !node.isCollapse;
      }
    },
    collapseAll () {
      this.isCollapseAll = !this.isCollapseAll;
      this.tree.forEach( node => node.isCollapse = this.isCollapseAll );
    },
    hideBySectionName ( sectionName: string ) {
      this.showTocWithSectionName = sectionName;
    },
    showAll () {
      this.showTocWithSectionName = BOOK_TOC_SECTION_NAME_ALL;
    },
    getSectionMatchCount ( sectionName: string ) {
      return sectionMatchCount.get( sectionName ) ?? 0;
    }
  } );

  return store;
};


export interface BookTocStore<T> {
  tree:TreeNode<T>[];
  isCollapseAll:boolean;
  collapseById(id:string):void;
  collapseAll():void;
}