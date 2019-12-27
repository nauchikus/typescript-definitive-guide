import React, { createContext, useContext } from "react";
import { navigate } from "gatsby";

interface ILocation {
  pathname: string;
  hash: string;
}

export class RouterService{
  get isIndexPage(){
    return this.location.pathname==='/ru'
  }
  get pathname(){
    return this.location.pathname;
  }
  get basepath(){
    return this.location.pathname
      .substring( 0, this.location.pathname.lastIndexOf( `/` ) );
  }
  get pageName(){
    return this.pathname
      .replace( /\/$/i, "" )
      .replace( this.hash, "" )
      .replace( /.*\//, "" );
  }
  get hash(){
    return this.location.hash;
  }
  get anchor(){
    return this.location.hash.substring( 1 );
  }
  get route(){
    return `${ this.pathname }${ this.hash }`;
  }
  constructor ( private location:ILocation ) {
  }

  goTo = ( path: string ) => navigate( path );

}

export const  RouterContext = createContext( new RouterService({
  pathname:'',
  hash:'',
}));


export const useRouter = () => useContext( RouterContext );