import React, { createContext, useContext } from "react";
import { navigate } from "gatsby";

interface ILocation {
  pathname: string;
  hash: string;
  origin:string;
  search:string;
}

export class RouterService{
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
  constructor ( private location:ILocation ) {
  }

  goTo = ( path: string ) => navigate( path );

}

export const  RouterContext = createContext( new RouterService({
  pathname:'',
  hash:'',
  origin:'',
  search: ``

}));


export const useRouter = () => useContext( RouterContext );