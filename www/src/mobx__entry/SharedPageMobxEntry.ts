import { Toggle, ToggleUiState } from "../stores/AppStateService";
import { useContext } from "react";
import { MobxSharedContext } from "../react__context/MobxSharedContext";
import { AppDriverToggleStateDetector } from "../components/app-driver/AppDriverToggleStateDetector";


interface ISharedPageMobxEntryParams {
  appDriverComputedInitialStateType?: string;
}


export class SharedPageMobxEntry {
  private static instance: ReturnType<typeof SharedPageMobxEntry.create>;

  static create = ( params ?: ISharedPageMobxEntryParams) => {
    return {
      appStore: {
        menuToggle: new Toggle(ToggleUiState.Close),
        driverToggle: new Toggle(
          AppDriverToggleStateDetector.getDriverInitialState()
        )
      },
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



