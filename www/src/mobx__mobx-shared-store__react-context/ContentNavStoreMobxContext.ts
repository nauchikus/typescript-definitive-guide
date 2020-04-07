import { createContext, useContext } from "react";
import { UseBookPageStores } from "../stores/mobx-entry__book";
import { IContentNavStore } from "../stores/ContentNavStore";


export const ContentNavStoreContext = createContext<IContentNavStore<any,any> | null>( null );
export const useContentNavStore = <TNodeData=null,TLeafData=null>() => useContext( ContentNavStoreContext ) as IContentNavStore<TNodeData, TLeafData>;
