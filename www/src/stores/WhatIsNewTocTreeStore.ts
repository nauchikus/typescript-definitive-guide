import { createToggleState, ToggleUiState } from "./AppStateService";
import { createToggle } from "../utils/toggle";
import { IWhatIsNewToc, IWhatIsNewTocInnovation, IWhatIsNewTocVersionStatus } from "../types/IWhatIsNewToc";


export interface TreeNode<T> {
  id:string;
  isCollapse:boolean;
  index:number;
  data: T;
}

export const BOOK_TOC_SECTION_NAME_ALL = "";

export const createWhatIsNewTocTree=<T>(tree:TreeNode<IWhatIsNewToc>[],isCollapseAll=false) => {
  // let sectionMatchCount = tree.reduce( ( result, current ) => {
  //   let { section } = current.data;
  //
  //   let count = result.has( section ) ? ( result.get( section ) ?? 0 ) + 1 : 1;
  //
  //   result.set( section, count );
  //
  //
  //   return result;
  // }, new Map<string, number>() );


  return ( {
    tree,
    isCollapseAll,
    showTocWithSectionName: BOOK_TOC_SECTION_NAME_ALL,
    get isAllSection () {
      return this.showTocWithSectionName === BOOK_TOC_SECTION_NAME_ALL;
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
      // return sectionMatchCount.get( sectionName ) ?? 0;

      return  0;
    },
    getInnovationAllByVersionMMP(versionMMP:string){
      return this.tree
        .find( item => item.data.versionMMP === versionMMP )
        ?.data.innovations;
    }
  } );
};


export interface WhatIsNewTocStore<T> {
  tree:TreeNode<T>[];
  isCollapseAll:boolean;
  collapseById(id:string):void;
  collapseAll():void;
}
export interface CreateWhatIsNewTocTreeStore {
  <T>(tree:TreeNode<T>[],isToggleAll?:boolean):WhatIsNewTocStore<T>;
}