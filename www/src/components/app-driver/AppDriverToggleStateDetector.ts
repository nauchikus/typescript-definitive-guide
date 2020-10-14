import * as AppUtils from "../../utils/app-utils";
import { ToggleUiState } from "../../stores/AppStateService";

export class AppDriverToggleStateDetector {
  private static getDriverInitialBrowserState = () => {
    let currentWidth = window.innerWidth;

    let driverWidth = parseInt( getComputedStyle( document.documentElement )
      .getPropertyValue( '--content-layout__left-layout_width' ) );
    let contentWidth = parseInt( getComputedStyle( document.documentElement )
      .getPropertyValue( '--content-layout__center-layout_width' ) );

    let minWidth = driverWidth + contentWidth;

    if ( currentWidth < minWidth ) {
      return ToggleUiState.Close;
    }


    return ToggleUiState.Open;
  }

  static getDriverInitialState = () => {
    if (AppUtils.isBrowser()) {
      return AppDriverToggleStateDetector.getDriverInitialBrowserState();

    }


    return ToggleUiState.Close;
  };

  private static getMenuInitialBrowserState = () => {
    let currentWidth = window.innerWidth;

    let driverWidth = parseInt( getComputedStyle( document.documentElement )
      .getPropertyValue( '--content-layout__left-layout_width' ) );
    let contentWidth = parseInt( getComputedStyle( document.documentElement )
      .getPropertyValue( '--content-layout__center-layout_width' ) );

    let minWidth = driverWidth + contentWidth;

    if ( currentWidth < minWidth ) {
      return ToggleUiState.Close;
    }


    return ToggleUiState.Open;
  }
  static getMenuInitialState = () => {
    if (AppUtils.isBrowser()) {
      return AppDriverToggleStateDetector.getMenuInitialBrowserState();
    }

    return ToggleUiState.Close;
  };
}
