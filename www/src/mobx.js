import React, { createContext, useContext } from "react";
import { useLocalStore } from "mobx-react-lite";
import { createSharedStore } from "./stores/shared-stores";


const MobxSharedContext = createContext(  );
const MobxContext = createContext(  );


export const MobxProvider = ( { children } ) => {
  let store = useLocalStore( createSharedStore );


  return (
    <MobxSharedContext.Provider value={ store }>
      { children }
    </MobxSharedContext.Provider>
  );
};

export const useShareStores = () => useContext( MobxSharedContext );