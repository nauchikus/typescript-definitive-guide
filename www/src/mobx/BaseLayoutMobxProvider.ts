import { createContext, useContext } from "react";
import { UseBaseLayoutStores } from "../stores/base-layout-stores";

export const BaseLayoutMoxContext = createContext<UseBaseLayoutStores | null>( null );
export const useBaseLayoutStores = () => useContext( BaseLayoutMoxContext) as UseBaseLayoutStores ;