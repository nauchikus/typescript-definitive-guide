import { PageNavTreeCreator } from "./PageNavTreeCreator";
import { RouterStore } from "./RouterStore";
import { IContentSectionStore } from "./ContentSectionStore";
import { IPageNavLeaf, IPageNavNode, IPageNavPage, IPageNavSection } from "../types/IPageNavData";
import { computed, decorate, observable } from "mobx";
import * as StringUtils from "../utils/string-utils";


export interface IPageNavStoreParams<TNodeData=null,TLeafData=null> {
  pageNavDataAll: IPageNavNode<IPageNavLeaf<TLeafData>,TNodeData>[];
  router: RouterStore;
  contentSection: IContentSectionStore;
}

export interface IPageNavStore<TNodeData=null,TLeafData=null> {
  pageItem: IPageNavPage<TNodeData, TLeafData>;
  sectionItem: IPageNavSection<TLeafData> | null;

}


export class PageNavStore<TNodeData=null,TLeafData=null> implements IPageNavStore<TNodeData,TLeafData> {
  public static create = <TNodeData,TLeafData>( params: IPageNavStoreParams<TNodeData,TLeafData> ) => new PageNavStore<TNodeData,TLeafData>(
    params.pageNavDataAll,
    params.router,
    params.contentSection
  );

  readonly pageNavTree: IPageNavPage<TNodeData, TLeafData>[];

  get pageItem () {
    let currentPageItem = this.pageNavTree
      .find( item => {
        return item.path === decodeURIComponent(this.router.pageName)
      } );


    if ( !currentPageItem ) {
      throw new Error( `Page with name "${ decodeURIComponent(this.router.pageName) }" not found.` );
    }


    return currentPageItem;
  }
  get sectionItem () {
    let currentSection = ( this.pageItem.sections as Required<IPageNavSection<TLeafData>>[] )
      // .find( section => StringUtils.toNativeElementAttributeValue(section.path) === this.contentSection.currentSectionId );
      .find( section => {
        return StringUtils.pathToNativeElementAttributeValue(section.path) === this.contentSection.currentSectionId
      } );


    if ( this.contentSection.currentSectionId !== `` && !currentSection ) {
      throw new Error( `Section with name "${ this.contentSection.currentSectionId }" not found.` );
    }


    return currentSection ?? null;

  }

  constructor ( private pageNavDataAll: IPageNavNode<IPageNavLeaf<TLeafData>,TNodeData>[],
                private router: RouterStore,
                private contentSection: IContentSectionStore ) {
    this.pageNavTree = PageNavTreeCreator.createPageNavTree( pageNavDataAll );

  }
}

decorate( PageNavStore, {
  pageNavTree: observable,
  pageItem: computed,
  sectionItem: computed
} );
