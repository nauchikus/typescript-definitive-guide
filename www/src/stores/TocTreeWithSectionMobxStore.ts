import { BOOK_TOC_SECTION_NAME_ALL } from "./BookTocTreeStore";
import { TreeNode } from "./CollapseTreeMobxStore";
import { computed, decorate, observable } from "mobx";

export interface ISection {
  section:string;
}

export class TocTreeWithSectionMobxStore<T extends ISection> {
  private static BOOK_TOC_SECTION_NAME_ALL = ``;
  private static getNumSection = <T extends ISection>(tree:TreeNode<T>[]) => tree.reduce( ( result, current ) => {
    let { section } = current.data;

    let count = result.has( section ) ? ( result.get( section ) ?? 0 ) + 1 : 1;

    result.set( section, count );


    return result;
  }, new Map<string, number>() );


  get isAllSection () {
    return this.showTocWithSectionName === TocTreeWithSectionMobxStore.BOOK_TOC_SECTION_NAME_ALL;
  }
  get treeFiltered () {
    return this.isAllSection ?
      this.tree :
      this.tree.filter( (node:TreeNode<T>) => node.data.section === this.showTocWithSectionName );
  }


  public showTocWithSectionName = TocTreeWithSectionMobxStore.BOOK_TOC_SECTION_NAME_ALL;
  private sectionMatchCount: Map<string, number>;

  constructor(public tree:TreeNode<T>[]) {
    this.sectionMatchCount = TocTreeWithSectionMobxStore.getNumSection(this.tree);
  }
  hideBySectionName ( sectionName: string ) {
    this.showTocWithSectionName = sectionName;
  }
  showAll () {
    this.showTocWithSectionName = BOOK_TOC_SECTION_NAME_ALL;
  }
  getSectionMatchCount ( sectionName: string ) {
    return this.sectionMatchCount.get( sectionName ) ?? 0;
  }
}

decorate(TocTreeWithSectionMobxStore, {
  isAllSection: computed,
  treeFiltered: computed,
  showTocWithSectionName: observable,
})
