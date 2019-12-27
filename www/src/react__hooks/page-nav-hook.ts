import React, { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { PageNavDataContext } from "../react__context/PageNavDataContext";
import { IPageNavData } from "../types/IPageNavData";
import { useRouter } from "./router-hook";
import { navigate } from "gatsby";
import { fromEvent } from "rxjs";
import { startWith } from "rxjs/operators";
import { useAppContentIntersectionObserver } from "./scroll-page-hook";
import { useContentSectionInformer } from "./content-section-informer-hook";


const getCurrentPageNavData=(pageName:string,pageNavDataAll: IPageNavData[])=>{
  let currentPageNavData = pageNavDataAll.find( item => item.name === pageName );

  if ( !currentPageNavData ) {
    throw new Error( `Page nav data for page with name "${ pageName }" not found.` );
  }


  return currentPageNavData;
}
const createPageItem = ( pageName: string, pageNavDataAll: IPageNavData[] ) => {
  let currentPageNavData = getCurrentPageNavData( pageName, pageNavDataAll );
  let currentPageNavDataIndex = pageNavDataAll.indexOf( currentPageNavData );

  let prevPageNavData = pageNavDataAll[ currentPageNavDataIndex - 1 ];
  let nextPageNavData = pageNavDataAll[ currentPageNavDataIndex + 1 ];


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


export const usePageNav = () => {
  let pageNavDataAll = useContext( PageNavDataContext ) as IPageNavData[];
  let contentSectionInformer = useContentSectionInformer();
  let routerStore = useRouter();

  let pageItemRef = useRef( createPageItem(
    routerStore.pageName,
    pageNavDataAll
  ) );
  let sectionItemRef = useRef( createSectionItem(
    routerStore.hash,
    pageItemRef.current.sections
  ) );

  let [pageItem, setPageItem] = useState(pageItemRef.current);
  let [sectionItem, setSectionItem] = useState(sectionItemRef.current);

  useEffect( () => {
    setPageItem( createPageItem(
      routerStore.pageName,
      pageNavDataAll
    ) );

    setSectionItem( createSectionItem(
      routerStore.anchor === contentSectionInformer.activeSectionId ?
        routerStore.anchor :
        contentSectionInformer.activeSectionId,
      pageItem.sections
    ) );
  }, [
    routerStore.pageName,
    routerStore.hash,
    contentSectionInformer.activeSectionId
  ] );

  useLayoutEffect( () => {
    const getSectionClientRectAll = ( container: HTMLElement | null ) =>
      Array.from( container?.querySelectorAll( `section` ) ?? [] )
        .map( element => element.getBoundingClientRect() );
    let resize = fromEvent( window, `resize` ).pipe(
      startWith( getSectionClientRectAll( document.querySelector( `main` ) ) )
    );
    let scroll = fromEvent( window, `scroll` ).pipe(

    );
    let subscriber = scroll.subscribe();

    return () => {
      subscriber.unsubscribe();
    };
  }, [] );
  useLayoutEffect( () => {
    // appContentIntersectionObserver.observe();
  }, [routerStore.pathname] );


  const hasPrevPage = () => pageItem.hasPrevPage;
  const hasNextPage = () => pageItem.hasNextPage;

  // console.log( `((item))`, pageItem );
  const goPrevPage = () => pageItem.prevPage && routerStore.goTo(
    `${routerStore.basepath}/${pageItem.prevPage.path}`
  );
  const goNextPage = () => pageItem.nextPage && routerStore.goTo(
    `${routerStore.basepath}/${pageItem.nextPage.path}`
  );

  const hasPrevAnchor = () => sectionItem.prevAnchor != null;
  const hasNextAnchor = () => sectionItem.nextAnchor != null;

  const goPrevAnchor = () => sectionItem.prevAnchor && routerStore.goTo(
    `${routerStore.pathname}#${sectionItem.prevAnchor.path}`
  );
  const goNextAnchor = () => sectionItem.nextAnchor && routerStore.goTo(
    `${routerStore.pathname}#${sectionItem.nextAnchor.path}`
  );


  return {
    hasPrevPage,
    hasNextPage,

    goPrevPage,
    goNextPage,

    hasPrevAnchor,
    hasNextAnchor,

    goPrevAnchor,
    goNextAnchor,
  };
};