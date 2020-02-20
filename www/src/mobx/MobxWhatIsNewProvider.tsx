import React, { createContext, useContext } from "react";
import { UseWhatIsNewStores } from "../stores/mobx-entry__what-is-new";



export const MobxWhatIsNewContext = createContext<UseWhatIsNewStores | null>( null );
export const useWhatIsNewStores = () => useContext( MobxWhatIsNewContext )  as UseWhatIsNewStores;