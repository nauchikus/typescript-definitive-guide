import * as React from "react";
import { FC, ReactNode } from "react";

export interface MobxProviderProps<Stores> {
  storeFactory: () => Stores;
  children: ReactNode | ReactNode[];
}

function MobxProvider<Stores>({storeFactory, children}: MobxProviderProps<Stores>) {

  return
}

export default MobxProvider;
