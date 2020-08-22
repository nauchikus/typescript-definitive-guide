import { observable } from "mobx";
import * as AppUtils from "../utils/app-utils";


export enum ToggleUiState{
  Open = 'open',
  Close = 'close',
}

const getDriverInitialBrowserState = () => {
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

export const getDriverInitialState = () => {
  if (AppUtils.isBrowser()) {
    return getDriverInitialBrowserState();

  }


  return ToggleUiState.Close;
};

const getMenuInitialBrowserState = () => {
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
export const getMenuInitialState = () => {
  if (AppUtils.isBrowser()) {
    return getMenuInitialBrowserState();
  }

  return ToggleUiState.Close;
};

export const createToggleState = ( initialState: ToggleUiState = ToggleUiState.Open ) => observable( {
  state: initialState,
  isOpen: initialState === ToggleUiState.Open,
  isClose: initialState === ToggleUiState.Close,
  isToggle: initialState === ToggleUiState.Open,
  get invertState () {
    return this.state === ToggleUiState.Open ?
      ToggleUiState.Close :
      ToggleUiState.Open;
  },

  open () {
    this.isOpen = this.isToggle = true;
    this.isClose = false;

    return this.state = ToggleUiState.Open;
  },
  close () {
    this.isOpen = this.isToggle = false;
    this.isClose = true;

    return this.state = ToggleUiState.Close;
  },
  toggle () {
    return this.state === ToggleUiState.Open ? this.close() : this.open();
  }
} );


