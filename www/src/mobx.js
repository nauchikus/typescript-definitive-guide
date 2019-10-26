import React, { createContext, useContext } from "react";
import { useLocalStore } from "mobx-react-lite";
import { createAppState, createDefaultAppState } from "./services/AppStateService";

const MobxContext = createContext( createDefaultAppState() );

export const MobxProvider = ( { children } ) => {
  let store = useLocalStore( createAppState );

  return (
    <MobxContext.Provider value={ store }>
      { children }
    </MobxContext.Provider>
  );
};

export const useStores = () => useContext( MobxContext );