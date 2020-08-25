import { navigate } from "gatsby";
import { observable, autorun, decorate, computed, action } from "mobx";
import { createContext, useContext } from "react";
import * as StringUtils from "../utils/string-utils";
import { RouterUtils } from "../utils/router-utils";
import { MobxSharedContext } from "../react__context/MobxSharedContext";
import { UseSharedMobxEntry } from "./SharedPageMobxEntry";
import { Simulate } from "react-dom/test-utils";

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
  get isIndexPage(){
    return this.location.pathname==='/ru'
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
   * https://domain.com/gh=repo-name/ru/what-is-new/3.7#concrete-innovation
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
    navigate( path );
  }
  setLocation ( location: Location ) {
    this.location = location;
  }
  updateLocationWhenHashChanged(location: Location){
    this.location = location;
  }
  scrollToAnchor(anchor?:string){
    if ( anchor ) {
      let sectionId = StringUtils.urlToSelector(anchor);

      let section = document
        .querySelector(`main`)
        ?.querySelector(`section#${sectionId}`);


      if (section) {
        window.scrollBy(0, section.getBoundingClientRect().top);
      }else{
        throw new Error(`Section with id "${StringUtils.urlToNativeElementAttributeValue(anchor)}" not found.`)
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
