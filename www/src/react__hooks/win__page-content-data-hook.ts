import React, { createContext, useContext } from "react";
import { IWinPageContentData } from "../types/IWhatIsNewToc";



export const WinPageContentDataContext = createContext<IWinPageContentData | null>( null );
export const useWinPageContentData = () => useContext( WinPageContentDataContext )  as IWinPageContentData;