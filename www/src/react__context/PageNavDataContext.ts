import { createContext } from "react";
import { IPageNavData } from "../types/IPageNavData";

export const PageNavDataContext = createContext<IPageNavData[] | null>( null );