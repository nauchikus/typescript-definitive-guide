import { createToggleState, getDriverInitialState, ToggleUiState } from "./AppStateService";
import { useContext } from "react";
import { createToggle } from "../utils/toggle";
import { RouterStore } from "./RouterStore";
import { MobxSharedContext } from "../react__context/MobxSharedContext";


interface ISharedPageMobxEntryParams {

}
export class SharedPageMobxEntry {
  private static instance: ReturnType<typeof SharedPageMobxEntry.create>;

  static create = (params?: ISharedPageMobxEntryParams) => {
    return {
      appStore: {
        menuToggle: createToggleState(ToggleUiState.Close),
        driverToggle: createToggleState( getDriverInitialState() ),
      },
      appSearch: {
        active: createToggleState(ToggleUiState.Close),
        match: createToggle(false)
      }
    };
  }
  static getInstance(params?: ISharedPageMobxEntryParams){
    if (!SharedPageMobxEntry.instance) {
      SharedPageMobxEntry.instance = SharedPageMobxEntry.create(params);
    }

    return SharedPageMobxEntry.instance;
  }
}


export type UseSharedMobxEntry = ReturnType<typeof SharedPageMobxEntry.getInstance>


export const useShareStores = () => useContext( MobxSharedContext ) as UseSharedMobxEntry;
export const useAppDriver = () => {
  let { appStore: { driverToggle } } = useShareStores();

  return driverToggle;
};
export const useAppMenuToggle = () => {
  let { appStore:{menuToggle} } = useShareStores();

  return menuToggle;
};
export const useAppSearch = () => {
  let { appSearch } = useShareStores();

  return appSearch;
};



