import React, { createContext, useContext, useRef } from "react";
import { SharedStoreCreator } from "./stores/mobx-entry__shared-stores";


export const MobxSharedContext = createContext(  );
const MobxContext = createContext(  );


export const MobxProvider = ( { children } ) => {
  let mobxRef = useRef( SharedStoreCreator.create() );


  return (
    <MobxSharedContext.Provider value={ mobxRef.current }>
      { children }
    </MobxSharedContext.Provider>
  );
};

