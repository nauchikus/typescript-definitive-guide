import React, { createContext, FC, ReactElement, useContext } from "react";
import { useLocalStore } from "mobx-react-lite";
import { createSharedStore } from "../stores/shared-stores";

export type UseSharedStores = ReturnType<typeof createSharedStore>;

const MobxSharedContext = createContext<UseSharedStores | null>( null );


interface IMobxSharedProviderProps {
  children: ReactElement | ReactElement[];
}

export const MobxSharedProvider:FC<IMobxSharedProviderProps> = ( { children } ) => {
  let store = useLocalStore( createSharedStore );


  return (
    <MobxSharedContext.Provider value={ store }>
      { children }
    </MobxSharedContext.Provider>
  );
};

export const useShareStores = () => useContext( MobxSharedContext );