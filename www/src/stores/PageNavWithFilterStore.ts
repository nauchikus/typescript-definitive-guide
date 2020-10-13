import { Version } from "../utils/Version";
import { PageNavTreeCreator } from "./PageNavTreeCreator";
import { RouterStore } from "./RouterStore";
import { VersionFilterStore } from "./VersionFilterStore";
import { IContentSectionStore } from "./ContentSectionStore";
import { IVersionable, IWinPageNavData } from "../page-templates/what-is-new-page/WhatIsNewPageProvider";
import { IPageNavPage, IPageNavSection } from "../types/IPageNavData";
import { computed, decorate, observable } from "mobx";
import { IPageNavStore } from "./PageNavStore";
import * as StringUtils from "../utils/string-utils";
import { InnovationDataStore } from "./InnovationDataStore";


export interface IPageNavWithFilterStoreParams {
  pageNavDataAll: IWinPageNavData[];
  innovationStore: InnovationDataStore;
  router: RouterStore;
  versionFilter: VersionFilterStore;
  contentSection: IContentSectionStore;
}



export class PageNavWithFilterStore implements IPageNavStore<null,IVersionable> {
  public static create = ( params: IPageNavWithFilterStoreParams ) => new PageNavWithFilterStore(
    params.pageNavDataAll,
    params.innovationStore,
    params.router,
    params.versionFilter,
    params.contentSection
  );


  get pageItem () {
    let currentPageItem = this.pageNavTree
      .find( item => {
        // console.log(item.name === this.router.pageName, item.name, item.sections);
        return item.name === this.router.pageName;
      } );


    if ( !currentPageItem ) {
      throw new Error( `Page with name "${ this.router.pageName }" not found.` );
    }


    return currentPageItem;
  }
  get sectionItem () {
    let currentSection = (this.pageItem.sections as Required<IPageNavSection<IVersionable>>[])
      .filter(section => this.versionFilter.isCheckedByVersion(new Version(section.data.version).version))
      .find(section => {
        return section.path === this.contentSection.currentSectionId;
      });



    if ( this.contentSection.currentSectionId !== `` && !currentSection ) {
      throw new Error( `Section with name "${ this.contentSection.currentSectionId }" not found.` );
    }


    return currentSection ?? null;

  }

  get pageNavTree(): IPageNavPage<null, IVersionable>[]{
    let versions = this.innovationStore.innovationDataAll
      .reduce((set, innovation) => set.add(innovation.version), new Set<string>())
    let mmpVersions = Array.from(versions)
      .map(version => new Version(version).mmp)
      .reduce((set, mmp) => set.add(mmp), new Set<string>());



    let pageNavDataAll = this.pageNavDataAll
      .map(pageNavData => {
        if (!mmpVersions.has(pageNavData.name)) {
          return pageNavData;
        }

        return {
          ...pageNavData,
          sections: pageNavData.sections
            .filter(section => this.innovationStore.innovationDataAll
              .some(innovation => innovation.innovationName === section.name)
            )
        }
      });


    return PageNavTreeCreator.createPageNavTree( pageNavDataAll )
  }

  constructor ( private pageNavDataAll: IWinPageNavData[],
                private innovationStore: InnovationDataStore,
                private router: RouterStore,
                private versionFilter: VersionFilterStore,
                private contentSection: IContentSectionStore ) {

  }
}

decorate( PageNavWithFilterStore, {
  pageNavTree: computed,
  pageItem: computed,
  sectionItem: computed
} );
