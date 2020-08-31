import { createContext, useContext } from "react";
import { LocationPartial, RouterStore } from "./RouterStore";


interface ICreateNotFoundPageMobxEntryParams {
  location:LocationPartial;
}

export const createNotFoundPageMobxEntry = ( { location }: ICreateNotFoundPageMobxEntryParams ) => {
  let router = new RouterStore(location);

  return {
    router,
  };
};

export type UseNotFoundPageMobxStores=ReturnType<typeof createNotFoundPageMobxEntry>;



export const MobxNotFoundPageContext = createContext<UseNotFoundPageMobxStores | null>( null );
export const useNotFoundPageStores = () => useContext( MobxNotFoundPageContext ) as UseNotFoundPageMobxStores;