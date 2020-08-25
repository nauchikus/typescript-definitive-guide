import React, { createContext, useRef } from "react";
import { SharedPageMobxEntry } from './stores/SharedPageMobxEntry';


export const MobxSharedContext = createContext(  );


export const MobxProvider = ( { children } ) => {
  return (
    <MobxSharedContext.Provider value={ SharedPageMobxEntry.getInstance() }>
      { children }
    </MobxSharedContext.Provider>
  );
};

