import React, { createContext, FC, useContext } from "react";
import { UseBookTocStores } from "../stores/mobx-entry__book_toc";



export const MobxBookTocContext = createContext<UseBookTocStores | null>( null );
export const useBookTocStores = () => useContext( MobxBookTocContext )  as UseBookTocStores;