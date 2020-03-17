import { createContext } from "react";
import { IWinPageNavData } from "../page-templates/what-is-new-page/WhatIsNewPageProvider";

export const WinPageNavDataContext = createContext<IWinPageNavData[] | null>( null );