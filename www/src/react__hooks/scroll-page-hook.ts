import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "./router-hook";
import { fromEvent, merge, Subject } from "rxjs";
import { share, tap } from "rxjs/operators";
import { usePageNav } from "./page-nav-hook";


export const resizeGlobalObserver = fromEvent( window, `resize` ).pipe( share() );
export const scrollGlobalObserver = fromEvent( window, `scroll` ).pipe( share() );

const getAppContentSections = () => document
  ?.querySelector( `main` )
  ?.querySelectorAll( `section.content__section` );

export interface IIntersectionObserverEntryInfo {
  sectionId:string;
  isIntersecting: boolean;
}

export const useAppContentIntersectionObserver = () => {
  let observerRef = useRef<IntersectionObserver | null>( null );
  let [intersections, setIntersection] = useState<IIntersectionObserverEntryInfo[]>( [] );
  let routerStore = useRouter();

  const intersectionObserverCallback: IntersectionObserverCallback = entries => {
    setIntersection( entries.map( entry => {
      return( {
        sectionId: entry.target.id,
        isIntersecting: entry.isIntersecting
      } )
    } ) );
  };
  const observe = () => getAppContentSections()
    ?.forEach( section => observerRef.current?.observe( section ) );
  const unobserve = () => observerRef.current?.disconnect();

  const getRootMargin = () => {
    let contentTopOffset = parseInt(
      getComputedStyle( document.documentElement )
        .getPropertyValue( `--app-header_height` )
    );
    let marginTop = contentTopOffset / document.documentElement.clientHeight;
    let marginBottom = 100 - ( marginTop / document.documentElement.clientHeight * 100 );


    return `-${ marginTop }px 0px -${ marginBottom }% 0px`;
  };
  const getOptions = () => ( {
    rootMargin: getRootMargin()
  } );

  const createIntersectionObserver = () => observerRef.current = new IntersectionObserver(
    intersectionObserverCallback,
    getOptions()
  );

  useLayoutEffect( () => {
    createIntersectionObserver();

    let subscription = resizeGlobalObserver.subscribe(
      createIntersectionObserver
    );



    return () => {
      subscription.unsubscribe();
    };
  },[] );

  useLayoutEffect( () => {
    observe();
  }, [routerStore.pathname] );



  return {
    intersections,
    observe,
    unobserve
  };
};
