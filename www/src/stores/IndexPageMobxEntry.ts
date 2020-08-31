import { createContext, useContext } from "react";
import { LocationPartial, RouterStore } from "./RouterStore";


interface IIndexPageMobxEntryParams {
  location:LocationPartial;
}

export class IndexPageMobxEntry {
  private static instance: ReturnType<typeof IndexPageMobxEntry.create>;

  static create = ({location}: IIndexPageMobxEntryParams) =>{
    let router = new RouterStore(location);

    return {
      router,
    };
  }
  static getInstance(params: IIndexPageMobxEntryParams){
    if (!IndexPageMobxEntry.instance) {
      IndexPageMobxEntry.instance = IndexPageMobxEntry.create(params);
    }

    return IndexPageMobxEntry.instance;
  }
}



export type UseIndexPageMobxStores=ReturnType<typeof IndexPageMobxEntry.getInstance>;



export const MobxIndexPageContext = createContext<UseIndexPageMobxStores | null>( null );
export const useIndexPageStores = () => useContext( MobxIndexPageContext ) as UseIndexPageMobxStores;
