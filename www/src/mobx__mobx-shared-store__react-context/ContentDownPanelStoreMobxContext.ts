import { createContext, useContext } from "react";
import { UseBookStores } from "../stores/mobx-entry__book";

export type UseContentDownPanelStore = UseBookStores["contentDownPanelStore"];
export const ContentDownPanelStoreContext = createContext<UseContentDownPanelStore | null>( null );
export const useContentDownPanelStore = () => useContext( ContentDownPanelStoreContext ) as UseContentDownPanelStore;
