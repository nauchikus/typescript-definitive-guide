import * as React from "react";
import { createContext, FC, ReactNode } from "react";
import { MobxSharedContext } from "../react__context/MobxSharedContext";
import { SharedPageMobxEntry } from "../mobx__entry/SharedPageMobxEntry";

export interface MobxProviderProps<Stores> {
  children: ReactNode | ReactNode[];
}

function MobxProvider<Stores>({children}: MobxProviderProps<Stores>) {

  return (
    <MobxSharedContext.Provider value={ SharedPageMobxEntry.getInstance() }>
      { children }
    </MobxSharedContext.Provider>
  )
}

export default MobxProvider;
