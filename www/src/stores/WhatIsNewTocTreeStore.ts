import { IWhatIsNewToc } from "../types/IWhatIsNewToc";
import { observable } from "mobx";
import { Version } from "../utils/Version";


export interface TreeNode<T> {
  id:string;
  isCollapse:boolean;
  index:number;
  data: T;
}

export const BOOK_TOC_SECTION_NAME_ALL = "";

export const createWhatIsNewTocTree=<T>(tree:TreeNode<IWhatIsNewToc>[],isCollapseAll=false) => {
  let store=observable({
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
        .find( item => new Version(item.data.releaseHistory[0].version).mmp === versionMMP )
        ?.data.innovations;
    }
  })


  return store;
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
