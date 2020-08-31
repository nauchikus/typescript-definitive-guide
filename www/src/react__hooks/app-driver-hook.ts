import React, { createContext, useContext } from "react";

export const  DriverContext = createContext(
  (id:string)=>{

  } );

export const useDriver = () => useContext( DriverContext );