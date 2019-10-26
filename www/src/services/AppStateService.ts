
export enum ToggleUiState{
  Open = 'open',
  Close = 'close',
}

const getDriverInitialState = () => {
  let currentWidth = window.innerWidth;

  let driverWidth = parseInt( getComputedStyle( document.documentElement )
    .getPropertyValue( '--content-left-layout_width' ) );
  let contentWidth = parseInt( getComputedStyle( document.documentElement )
    .getPropertyValue( '--content-center-layout_width' ) );

  let minWidth = driverWidth + contentWidth;

  if ( currentWidth < minWidth ) {
    return ToggleUiState.Close;
  }


  return ToggleUiState.Open;
};
const getMenuInitialState = () => {
  let currentWidth = window.innerWidth;

  let driverWidth = parseInt( getComputedStyle( document.documentElement )
    .getPropertyValue( '--content-left-layout_width' ) );
  let contentWidth = parseInt( getComputedStyle( document.documentElement )
    .getPropertyValue( '--content-center-layout_width' ) );

  let minWidth = driverWidth + contentWidth;

  if ( currentWidth < minWidth ) {
    return ToggleUiState.Close;
  }


  return ToggleUiState.Open;
};

const createToggleState = (initialState:ToggleUiState) => ( {
  state: initialState,
  get invertState(){
    return this.state === ToggleUiState.Open ?
      ToggleUiState.Close :
      ToggleUiState.Open;
  },
  get isOn(){return this.state===ToggleUiState.Open},
  open () {
    this.state = ToggleUiState.Open;
  },
  close () {
    this.state = ToggleUiState.Close;
  },
  toggle () {
    this.state === ToggleUiState.Open ? this.close() : this.open();
  }
} );


export const createAppState = () => {
  return ( {
    appStore: {
      navToggle: createToggleState(getDriverInitialState()),
      menuToggle: createToggleState(getMenuInitialState()),
      driverToggle: createToggleState( getDriverInitialState() ),
      donateToggle: createToggleState( getDriverInitialState() )
    }
  } );
};
export const createDefaultAppState = createAppState;
