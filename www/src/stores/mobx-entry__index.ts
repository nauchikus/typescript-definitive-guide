import { createContext, useContext } from "react";
import { LocationPartial, RouterStore } from "./RouterStore";


interface ICreateIndexPageMobxEntryParams {
  location:LocationPartial;
}

export const createIndexPageMobxEntry = ( { location }: ICreateIndexPageMobxEntryParams ) => {
  let router = new RouterStore(location);

  return {
    router,
  };
};

export type UseIndexPageMobxStores=ReturnType<typeof createIndexPageMobxEntry>;



export const MobxIndexPageContext = createContext<UseIndexPageMobxStores | null>( null );
export const useIndexPageStores = () => useContext( MobxIndexPageContext ) as UseIndexPageMobxStores;