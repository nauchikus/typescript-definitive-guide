import { autorun, observable, observe, computed, IObservableArray } from "mobx";
import { INav, IPageNavData } from "../types/IPageNavData";
import { RouterStore } from "./RouterStore";
import { IIntersectionObserverEntryInfo, IntersectionObserverStore } from "./IntersectionObserverStore";
import { VersionFilterStore } from "./VersionFilterStore";
import { Version } from "../utils/Version";
import { changeDependenciesStateTo0 } from "mobx/lib/core/derivation";
import { IArrayChange, IArraySplice } from "mobx/lib/types/observablearray";
import { ContentSectionStore } from "./ContentSectionStore";


interface ICreateContentNavStoreProps {
  pageNavDataAll:IPageNavData[];
  router:RouterStore;
  contentIntersectionObserver:IntersectionObserverStore;
  versionFilter:VersionFilterStore;
  contentSection:ContentSectionStore;
}

const getCurrentPageNavData = ( pageName: string, pageNavDataAll: IPageNavData[] ) => {
  let currentPageNavData = pageNavDataAll.find( item => item.name === pageName );

  if ( !currentPageNavData ) {
    throw new Error( `Page nav data for page with name "${ pageName }" not found.` );
  }


  return currentPageNavData;
};
const getSequencePageData = ( currentPageName: string, pageNavDataAll: IPageNavData[] ) => {
  let currentPageNavData = getCurrentPageNavData( currentPageName, pageNavDataAll );
  let currentPageNavDataIndex = pageNavDataAll.indexOf( currentPageNavData );

  let prevPageNavData = pageNavDataAll[ currentPageNavDataIndex - 1 ];
  let nextPageNavData = pageNavDataAll[ currentPageNavDataIndex + 1 ];

  return {
    prevPageNavData,
    currentPageNavData,
    nextPageNavData
  };
};
const createPageItem = ( {prevPageNavData,currentPageNavData,nextPageNavData}:ReturnType<typeof getSequencePageData> ) => {
  const hasPrevPage = () => prevPageNavData != null;
  const hasNextPage = () => nextPageNavData != null;

  const getPrevPageData = () => !hasPrevPage() ? null : ( {
    name: prevPageNavData.name,
    path: prevPageNavData.name
  } );
  const getNextPageData = () => !hasNextPage() ? null : ( {
    name: nextPageNavData.name,
    path: nextPageNavData.name
  } );

  let result = {
    name: currentPageNavData.name,
    path: currentPageNavData.name,

    hasPrevPage: hasPrevPage(),
    hasNextPage: hasNextPage(),

    prevPage: getPrevPageData(),
    nextPage: getNextPageData(),


    sections: currentPageNavData.sections
  };


  return result;
};
const createSectionItem = ( anchorPath: string, sectionAll: IPageNavData["sections"] ) => {
  if ( anchorPath.startsWith( `#` ) ) {
    anchorPath = anchorPath.substring( 1 );
  }


  let currentAnchorData = sectionAll.find( item => item.path === anchorPath );
  if ( !currentAnchorData && anchorPath !== `` ) {
    throw new Error( `Anchor "${ anchorPath }" not found.` );
  }
  let currentAnchorIndex = currentAnchorData ? sectionAll.indexOf( currentAnchorData ) : -1;


  let prevAnchorData = sectionAll[ currentAnchorIndex - 1 ];
  let nextAnchorData = sectionAll[ currentAnchorIndex + 1 ];

  let result = {
    prevAnchor: prevAnchorData,
    nextAnchor: nextAnchorData
  };


  return result;
};

export const DEFAULT_SECTION_ID = ``;

export const createContentNavStore = ( { contentSection,pageNavDataAll, router, contentIntersectionObserver, versionFilter }: ICreateContentNavStoreProps ) => {
  let store = observable.object( {
    get currentSectionId(){
      return contentSection.currentSectionId;
    },
    get pageItem () {
      return createPageItem(
        getSequencePageData( router.pageName, pageNavDataAll )
      );
    },
    get sectionItem () {
      return createSectionItem(
        contentSection.currentSectionId,
        this.pageItem.sections
          .filter( (section:INav) => versionFilter.isCheckedByVersion( new Version( section.version ).preReleaseName ) )
      );
    },

    hasPrevPage () {
      return this.pageItem.hasPrevPage;
    },
    hasNextPage () {
      return this.pageItem.hasNextPage;
    },

    goPrevPage () {
      this.pageItem.prevPage && router.goTo(
        `${ router.basepath }/${ this.pageItem.prevPage.path }`
      );
    },

    goNextPage () {
      this.pageItem.nextPage && router.goTo(
        `${ router.basepath }/${ this.pageItem.nextPage.path }`
      );
    },

    hasPrevAnchor () {
      return this.sectionItem.prevAnchor != null;
    },
    hasNextAnchor () {
      return this.sectionItem.nextAnchor != null;
    },


    goPrevAnchor () {
      this.sectionItem.prevAnchor && router.goTo(
        `${ router.pathname }#${ this.sectionItem.prevAnchor.path }`
      );
    },

    goNextAnchor () {
      this.sectionItem.nextAnchor && router.goTo(
        `${ router.pathname }#${ this.sectionItem.nextAnchor.path }`
      );
    }
  } );


  return store;
};