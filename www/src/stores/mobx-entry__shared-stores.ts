import { createToggleState, getDriverInitialState, getMenuInitialState, ToggleUiState } from "./AppStateService";
import {default as appSearch} from "./AppSearchService";
import { useContext } from "react";
import { MobxSharedContext } from "../mobx";



export const createSharedStore = () => {
  return ( {
    appStore:{
      menuToggle: createToggleState(ToggleUiState.Close),
      driverToggle: createToggleState( getDriverInitialState() ),
    },
    appSearch,
  } );
};

// export type UseSharedMobxEntry = ReturnType<typeof SharedStoreCreator.prototype.create>
export type UseSharedMobxEntry = ReturnType<typeof createSharedStore>


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



