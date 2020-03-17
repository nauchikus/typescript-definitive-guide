import React, { createContext, useContext } from "react";
import { UseWhatIsNewTocStores } from "../stores/mobx-entry__what-is-new_toc";



export const MobxWhatIsNewTocContext = createContext<UseWhatIsNewTocStores | null>( null );
export const useWhatIsNewTocStores = () => useContext( MobxWhatIsNewTocContext )  as UseWhatIsNewTocStores;