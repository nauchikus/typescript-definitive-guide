import React, { createContext, useRef } from "react";
import { SharedPageMobxEntry } from './stores/SharedPageMobxEntry';


export const MobxSharedContext = createContext(  );


export const MobxProvider = ( { children } ) => {
  let mobxRef = useRef( SharedPageMobxEntry.getInstance() );


  return (
    <MobxSharedContext.Provider value={ mobxRef.current }>
      { children }
    </MobxSharedContext.Provider>
  );
};

