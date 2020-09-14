import React, { createContext, useRef } from "react";
import { SharedPageMobxEntry } from './mobx__entry/SharedPageMobxEntry';


export const MobxSharedContext = createContext(  );


export const MobxProvider = ( { children } ) => {
  return (
    <MobxSharedContext.Provider value={ SharedPageMobxEntry.getInstance() }>
      { children }
    </MobxSharedContext.Provider>
  );
};

