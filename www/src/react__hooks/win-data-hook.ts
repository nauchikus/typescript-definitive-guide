import React, { createContext, useContext } from "react";
import { IWhatIsNewData } from "../types/IWhatIsNewToc";



export const WinDataContext = createContext<IWhatIsNewData | null>( null );
export const useWinData = () => useContext( WinDataContext )  as IWhatIsNewData;