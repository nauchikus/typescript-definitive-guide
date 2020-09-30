import { createToggleState, getDriverInitialState, ToggleUiState } from "../stores/AppStateService";
import { useContext } from "react";
import { createToggle } from "../utils/toggle";
import { MobxSharedContext } from "../react__context/MobxSharedContext";
import { AppDriverInitializationStateType } from "../consts/AppDriverInitializationStateType";


interface ISharedPageMobxEntryParams {
  appDriverComputedInitialStateType?: string;
}


export class SharedPageMobxEntry {
  private static instance: ReturnType<typeof SharedPageMobxEntry.create>;

  static create = ( params ?: ISharedPageMobxEntryParams) => {
    // let appDriverState = params?.appDriverComputedInitialStateType === AppDriverInitializationStateType.Auto ?
      // getDriverInitialState() :
      // ToggleUiState.Close;


    let appDriverState = getDriverInitialState();


    return {
      appStore: {
        menuToggle: createToggleState(ToggleUiState.Close),
        driverToggle: createToggleState( appDriverState  ),
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



