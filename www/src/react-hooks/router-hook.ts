import React, { createContext, useContext } from "react";

interface ILocation {
  pathname: string;
}

export class RouterService{
  get isIndexPage(){
    return this.location.pathname==='/ru'
  }
  constructor ( private location:ILocation ) {
  }
}

export const RouterContext = createContext( new RouterService({
  pathname:''
}));


export const useRouter = () => useContext( RouterContext );