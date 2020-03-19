import { navigate } from "gatsby";
import { observable, autorun, decorate, computed, action } from "mobx";
import { createContext, useContext } from "react";

export type LocationPartial =Pick<Location,"pathname"|"hash"|"origin"|"search">;


const getDefaultLocation = ():LocationPartial => ( {
  pathname: ``,
  hash: ``,
  origin: ``,
  search: ``
} );

interface ILocation {
  pathname: string;
  hash: string;
  origin:string;
  search:string;
}

type CreateRouterStoreParams = {
  location: LocationPartial;
};

// export const createRouterStore = ({location}:CreateRouterStoreParams) => {
//   const store = {
//     get isIndexPage () {
//       return this.location.pathname === "/ru";
//     },
//
//
//     /**
//      * https://domain.com/ru/what-is-new/3.7#concrete-innovation
//      * |----------------|
//      */
//     get origin () {
//       return this.location.origin;
//     },
//     /**
//      * https://domain.com/ru/what-is-new/3.7#concrete-innovation
//      *                   |-----------------|
//      */
//     get pathname () {
//       return this.location.pathname;
//     },
//
//     /**
//      * https://domain.com/ru/what-is-new/3.7#concrete-innovation
//      *                   |--------------|
//      */
//     get basepath () {
//       return this.location.pathname
//         .substring( 0, this.location.pathname.lastIndexOf( `/` ) );
//     },
//
//     /**
//      * https://domain.com/ru/what-is-new/3.7#concrete-innovation
//      *                                  |---|
//      */
//     get pageName () {
//       return this.pathname
//         .replace( /\/$/i, "" )
//         .replace( this.hash, "" )
//         .replace( /.*\//, "" );
//     },
//
//     /**
//      * https://domain.com/ru/what-is-new/3.7#concrete-innovation
//      *                                     |--------------------|
//      */
//     get hash () {
//       return this.location.hash;
//     },
//     /**
//      * https://domain.com/ru/what-is-new/3.7#concrete-innovation
//      *                                       |------------------|
//      */
//     get anchor () {
//       return this.location.hash.substring( 1 );
//     },
//     /**
//      * https://domain.com/ru/what-is-new/3.7#concrete-innovation
//      *                   |--------------------------------------|
//      */
//     get route () {
//       return `${ this.pathname }${ this.hash }`;
//     },
//
//     get search () {
//       return new URLSearchParams( this.location.search );
//     },
//
//     location: location,
//     goTo( path: string ) {
//       navigate( path );
//
//       this.scrollToAnchor(  );
//     },
//     setLocation ( location: Location ) {
//       this.location = location;
//     },
//     scrollToAnchor(anchor?:string){
//       if ( anchor || this.anchor ) {
//         document
//           .querySelector( `main` )
//           ?.querySelector( `section#${ anchor ?? this.anchor }` )
//           ?.scrollIntoView();
//       }
//     }
//   };
//
//
//
//   return observable.object( store );
// };


export class RouterStore{
  static create({location}:CreateRouterStoreParams){
    return new RouterStore( location );
  }
  get isIndexPage(){
    return this.location.pathname==='/ru'
  }


  /**
   * https://domain.com/ru/what-is-new/3.7#concrete-innovation
   * |----------------|
   */
  get origin(){
    return this.location.origin;
  }
  /**
   * https://domain.com/ru/what-is-new/3.7#concrete-innovation
   *                   |-----------------|
   */
  get pathname(){
    return this.location.pathname;
  }

  /**
   * https://domain.com/ru/what-is-new/3.7#concrete-innovation
   *                   |--------------|
   */
  get basepath(){
    return this.location.pathname
      .substring( 0, this.location.pathname.lastIndexOf( `/` ) );
  }

  /**
   * https://domain.com/ru/what-is-new/3.7#concrete-innovation
   *                                  |---|
   */
  get pageName(){
    return this.pathname
      .replace( /\/$/i, "" )
      .replace( this.hash, "" )
      .replace( /.*\//, "" );
  }

  /**
   * https://domain.com/ru/what-is-new/3.7#concrete-innovation
   *                                     |--------------------|
   */
  get hash(){
    return this.location.hash;
  }
  /**
   * https://domain.com/ru/what-is-new/3.7#concrete-innovation
   *                                       |------------------|
   */
  get anchor(){
    return this.location.hash.substring( 1 );
  }
  /**
   * https://domain.com/ru/what-is-new/3.7#concrete-innovation
   *                   |--------------------------------------|
   */
  get route(){
    return `${ this.pathname }${ this.hash }`;
  }

  get search(){
    return new URLSearchParams( this.location.search );
  }
  constructor ( public location:ILocation ) {
  }

  // goTo = ( path: string ) => navigate( path );
  goTo( path: string ) {
    navigate( path );

    this.scrollToAnchor(  );
  }
  setLocation ( location: Location ) {
    this.location = location;
  }
  scrollToAnchor(anchor?:string){
    if ( anchor || this.anchor ) {
      document
        .querySelector( `main` )
        ?.querySelector( `section#${ anchor ?? this.anchor }` )
        ?.scrollIntoView();
    }
  }
}

decorate( RouterStore, {
  origin: computed,
  pathname: computed,
  basepath: computed,
  pageName: computed,
  hash: computed,
  anchor: computed,
  route: computed,
  search: computed,

  location: observable,

  goTo: action,
  setLocation: action,
  scrollToAnchor: action
} );


export const RouterStoreContext = createContext<RouterStore | null>( null );
export const useRouter=()=>useContext(RouterStoreContext) as RouterStore;

// export type RouterStore=ReturnType<typeof createRouterStore>;