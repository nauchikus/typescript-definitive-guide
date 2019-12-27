import React, { createContext, useContext } from "react";
import { UseWhatIsNewStores } from "../stores/what-is-new-stores";



export const MobxWhatIsNewContext = createContext<UseWhatIsNewStores | null>( null );
export const useWhatIsNewStores = () => useContext( MobxWhatIsNewContext )  as UseWhatIsNewStores;