import React, { createContext, useRef } from "react";
import { createSharedStore } from "./stores/mobx-entry__shared-stores";


export const MobxSharedContext = createContext(  );


export const MobxProvider = ( { children } ) => {
  let mobxRef = useRef( createSharedStore() );


  return (
    <MobxSharedContext.Provider value={ mobxRef.current }>
      { children }
    </MobxSharedContext.Provider>
  );
};

