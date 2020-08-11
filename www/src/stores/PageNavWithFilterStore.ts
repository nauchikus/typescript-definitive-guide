import { Version } from "../utils/Version";
import { PageNavTreeCreator } from "./PageNavTreeCreator";
import { RouterStore } from "./RouterStore";
import { VersionFilterStore } from "./VersionFilterStore";
import { ContentSectionStore, IContentSectionStore } from "./ContentSectionStore";
import { IVersionable, IWinPageNavData } from "../page-templates/what-is-new-page/WhatIsNewPageProvider";
import { IPageNavPage, IPageNavSection } from "../types/IPageNavData";
import { computed, decorate, observable } from "mobx";
import { IPageNavStore } from "./PageNavStore";


export interface IPageNavWithFilterStoreParams {
  pageNavDataAll: IWinPageNavData[];
  router: RouterStore;
  versionFilter: VersionFilterStore;
  contentSection: IContentSectionStore;
}

// export interface IPageNavStore<TNodeData,TLeafData> {
//   pageItem: IPageNavPage<TNodeData, TLeafData>;
//   sectionItem: IPageNavSection<IVersionable> | null;
//
// }


export class PageNavWithFilterStore implements IPageNavStore<null,IVersionable> {
  public static create = ( params: IPageNavWithFilterStoreParams ) => new PageNavWithFilterStore(
    params.pageNavDataAll,
    params.router,
    params.versionFilter,
    params.contentSection
  );

  readonly pageNavTree: IPageNavPage<null, IVersionable>[];

  get pageItem () {
    let currentPageItem = this.pageNavTree
      .find( item => item.name === this.router.pageName );


    if ( !currentPageItem ) {
      throw new Error( `Page with name "${ this.router.pageName }" not found.` );
    }


    return currentPageItem;
  }
  get sectionItem () {
    let currentSection = ( this.pageItem.sections as Required<IPageNavSection<IVersionable>>[] )
      .filter( section => this.versionFilter.isCheckedByVersion( new Version( section.data.version ).preReleaseName ) )
      // .find( section => section.path === this.contentSection.currentSectionId )
      .find( section => {
        return section.path === this.contentSection.currentSectionId
      } )


    if ( this.contentSection.currentSectionId !== `` && !currentSection ) {
      throw new Error( `Section with name "${ this.contentSection.currentSectionId }" not found.` );
    }


    return currentSection ?? null;

  }

  constructor ( private pageNavDataAll: IWinPageNavData[],
                private router: RouterStore,
                private versionFilter: VersionFilterStore,
                private contentSection: IContentSectionStore ) {
    this.pageNavTree = PageNavTreeCreator.createPageNavTree( pageNavDataAll );

  }
}

decorate( PageNavWithFilterStore, {
  pageNavTree: observable,
  pageItem: computed,
  sectionItem: computed
} );
