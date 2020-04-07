import { createContext, useContext } from "react";
import { UseBookPageStores } from "../stores/mobx-entry__book";

export type UseContentDownPanelStore = UseBookPageStores["contentDownPanelStore"];
export const ContentDownPanelStoreContext = createContext<UseContentDownPanelStore | null>( null );
export const useContentDownPanelStore = () => useContext( ContentDownPanelStoreContext ) as UseContentDownPanelStore;
