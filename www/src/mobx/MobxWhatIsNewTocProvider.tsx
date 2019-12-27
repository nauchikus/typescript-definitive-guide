import React, { createContext, useContext } from "react";
import { UseWhatIsNewTocStores } from "../stores/what-is-new-toc-stores";



export const MobxWhatIsNewTocContext = createContext<UseWhatIsNewTocStores | null>( null );
export const useWhatIsNewTocStores = () => useContext( MobxWhatIsNewTocContext )  as UseWhatIsNewTocStores;