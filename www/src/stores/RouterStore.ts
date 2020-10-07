import { navigate } from "gatsby";
import { observable, autorun, decorate, computed, action } from "mobx";
import { createContext, useContext } from "react";
import * as ConverterPathUtils from "../utils/converter-path-utils";
import { RouterUtils } from "../utils/router-utils";
import * as AppUtils from "../utils/app-utils";


export type LocationPartial =Pick<Location,"pathname"|"hash"|"origin"|"search">;


export interface ILocation {
  pathname: string;
  hash: string;
  origin:string;
  search:string;
}

type CreateRouterStoreParams = {
  location: LocationPartial;
};


export class RouterStore {
  static readonly EMPTY_LOCALE = ``;

  static create({location}:CreateRouterStoreParams){
    return new RouterStore( location );
  }

  get indexRoute(){
    return `/`;
  }
  get isBack(){
    return AppUtils.isBrowser() && window && window.history.length > 2;
  }

  get isIndexPage(){
    return this.location.pathname === "/";
  }

  get locale(){
    return this._locale;
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
   * https://domain.com/gh-repo-name/ru/what-is-new/3.7#concrete-innovation
   *                                |-----------------|
   */
  get purePathName(){
    return RouterUtils.clearPathFromGhPagesDomain(this.pathname);
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
   * https://domain.com/gh-repo-name/ru/what-is-new/3.7#concrete-innovation
   *                                |-------------|
   */
  get pureBasePath(){
    return RouterUtils.clearPathFromGhPagesDomain(this.basepath);
  }

  /**
   * https://domain.com/ru/what-is-new/3.7#concrete-innovation
   *                                  |---|
   */
  get pageName(){
    return (this.pathname ?? ``)
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
  constructor ( public location:ILocation, private _locale: string = RouterStore.EMPTY_LOCALE) {
  }

  goTo( path: string ) {
    navigate( ConverterPathUtils.pathToUrl(path) );

    this.scrollToAnchor(this.anchor);
  }
  goHome(){
    navigate(this.indexRoute);
  }
  goBack(){
    this.goTo(`-1`);
  }
  setLocation ( location: Location ) {
    this.location = location;
  }
  updateLocationWhenHashChanged(location: Location){
    this.location = location;
  }
  scrollToAnchor(anchor?:string){
    if ( anchor ) {
      let sectionId = decodeURIComponent(anchor);



      let section = document
        .querySelector(`main`)
        ?.querySelector(`section[id="${sectionId}"]`);


      // console.log(sectionId);

      if (section) {
        window.scrollBy(0, section.getBoundingClientRect().top);
      }else{
        throw new Error(`Section with id "${sectionId}" not found.`)
      }
    }
  }

  reset(){
    this.location = {
      ...this.location,
      hash: ``
    }
  }
}

decorate( RouterStore, {
  isIndexPage: computed,
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
  reset: action,
  setLocation: action,
  updateLocationWhenHashChanged: action,
  scrollToAnchor: action
} );


export const RouterStoreContext = createContext<RouterStore | null>( null );
export const useRouter = () => useContext(RouterStoreContext) as RouterStore;

// export type RouterStore=ReturnType<typeof createRouterStore>;
