import { createToggleState, getDriverInitialState, getMenuInitialState, ToggleUiState } from "./AppStateService";
import {default as appSearch} from "./AppSearchService";


export const createSharedStore = () => {
  return ( {
    appStore:{
      menuToggle: createToggleState(ToggleUiState.Close),
      driverToggle: createToggleState( getDriverInitialState() ),
    },
    appSearch,
  } );
};