import { createContext, useContext } from "react";
import { UseBookPageStores } from "../mobx__entry/BookPageMobxEntry";

export type UseContentDownPanelStore = UseBookPageStores["contentDownPanelStore"];
export const ContentDownPanelStoreContext = createContext<UseContentDownPanelStore | null>( null );
export const useContentDownPanelStore = () => useContext( ContentDownPanelStoreContext ) as UseContentDownPanelStore;
