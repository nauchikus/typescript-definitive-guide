import { useShareStores } from "../mobx__entry/SharedPageMobxEntry";
import { AppDriverToggleStateDetector } from "../components/app-driver/AppDriverToggleStateDetector";
import { useLayoutEffect } from "react";
import { ToggleUiState } from "../stores/AppStateService";

export function useAppDriverToggleDetector() {
  let { appStore: { driverToggle } } = useShareStores();


  useLayoutEffect(() => {
    AppDriverToggleStateDetector.getDriverInitialState() === ToggleUiState.Open ?
      driverToggle.open() :
      driverToggle.close();

    driverToggle.browserInit();
  }, []);
}
