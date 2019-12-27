import React, { createContext, FC, useContext } from "react";
import { UseBookTocStores } from "../stores/book-toc-stores";



export const MobxBookTocContext = createContext<UseBookTocStores | null>( null );
export const useBookTocStores = () => useContext( MobxBookTocContext )  as UseBookTocStores;