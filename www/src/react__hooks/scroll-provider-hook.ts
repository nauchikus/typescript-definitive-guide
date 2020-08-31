import React, { createContext, useContext } from "react";

export type Point={x?:number;y?:number}
export type ScrollProviderCallback=(position:Point)=>void;

export const  ScrollProviderContext = createContext(
  (position:Point)=>{} );

export const useScrollProvider = () => useContext( ScrollProviderContext );