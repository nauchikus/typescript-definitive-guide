import React, { useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "../stores/RouterStore";
import { GlobalObservables } from "../rxjs/global-observables";


// export const resizeGlobalObserver = fromEvent( window, `resize` ).pipe( share() );
// export const scrollGlobalObserver = fromEvent( window, `scroll` ).pipe( share() );

const getAppContentSections = () => document
  ?.querySelector( `main` )
  ?.querySelectorAll( `section.content__section` );

export interface IIntersectionObserverEntryInfo {
  sectionId:string;
  isIntersecting: boolean;
}

// export class AppContentIntersectionObserver{
//   private observer?:IntersectionObserver;
//   private resizeSubscription?: Subscription;
//
//   readonly intersections: IIntersectionObserverEntryInfo = [];
//
//   constructor () {
//   }
//
//   private getRootMargin = () => {
//     let contentTopOffset = parseInt(
//       getComputedStyle( document.documentElement )
//         .getPropertyValue( `--app-header_height` )
//     );
//     let marginTop = contentTopOffset / document.documentElement.clientHeight;
//     let marginBottom = 100 - ( marginTop / document.documentElement.clientHeight * 100 );
//
//
//     return `-${ marginTop }px 0px -${ marginBottom }% 0px`;
//   };
//   private getOptions = () => ( {
//     rootMargin: this.getRootMargin()
//   } );
//   private intersectionObserverCallback: IntersectionObserverCallback = entries => {
//     this.intersections = entries.map( entry => {
//       return ( {
//         sectionId: entry.target.id,
//         isIntersecting: entry.isIntersecting
//       } );
//     } );
//   };
//   private createIntersectionObserver = () => this.observer = new IntersectionObserver(
//     this.intersectionObserverCallback,
//     this.getOptions()
//   );
//
//   readonly getAppContentSections = () => document
//     ?.querySelector( `main` )
//     ?.querySelectorAll( `section.content__section` );
//   readonly observe = () => this.getAppContentSections()
//     ?.forEach( section => this.observer?.observe( section ) );
//   readonly unobserve = () => this.observer?.disconnect();
//
//
//   readonly init = () => {
//     this.resizeSubscription = resizeGlobalObserver.subscribe( this.createIntersectionObserver );
//
//   };
//   readonly destroy = () => {
//     this.resizeSubscription?.unsubscribe();
//   };
// }


// export const createAppContentIntersectionObserver = () => {
//   let observer: IntersectionObserver;
//   let intersections:IIntersectionObserverEntryInfo[]=[]
//   let routerStore = useRouter();
//
//   const intersectionObserverCallback: IntersectionObserverCallback = entries => {
//     setIntersection( entries.map( entry => {
//       return( {
//         sectionId: entry.target.id,
//         isIntersecting: entry.isIntersecting
//       } )
//     } ) );
//   };
//   const observe = () => getAppContentSections()
//     ?.forEach( section => observerRef.current?.observe( section ) );
//   const unobserve = () => observerRef.current?.disconnect();
//
//   const getRootMargin = () => {
//     let contentTopOffset = parseInt(
//       getComputedStyle( document.documentElement )
//         .getPropertyValue( `--app-header_height` )
//     );
//     let marginTop = contentTopOffset / document.documentElement.clientHeight;
//     let marginBottom = 100 - ( marginTop / document.documentElement.clientHeight * 100 );
//
//
//     return `-${ marginTop }px 0px -${ marginBottom }% 0px`;
//   };
//   const getOptions = () => ( {
//     rootMargin: getRootMargin()
//   } );
//
//   const createIntersectionObserver = () => observerRef.current = new IntersectionObserver(
//     intersectionObserverCallback,
//     getOptions()
//   );
//
//   useLayoutEffect( () => {
//     createIntersectionObserver();
//
//     console.log(`@@@@@@@@@@`);
//
//     let subscription = resizeGlobalObserver.subscribe(
//       createIntersectionObserver
//     );
//
//
//
//     return () => {
//       subscription.unsubscribe();
//     };
//   },[] );
//
//   useLayoutEffect( () => {
//     console.log(document.querySelectorAll('.content__section'));
//
//     document.addEventListener('DOMContentLoaded',()=>{
//       console.log(document.querySelectorAll('.content__section'));
//     })
//     observe();
//   }, [routerStore.pathname] );
//
//
//
//   return {
//     intersections,
//     observe,
//     unobserve
//   };
// };


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


    let subscription = GlobalObservables.resizeGlobalObserver.subscribe(
      createIntersectionObserver
    );



    return () => {
      subscription.unsubscribe();
    };
  },[] );


  return {
    intersections,
    observe,
    unobserve
  };
};

