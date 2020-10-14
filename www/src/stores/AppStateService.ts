import { action, computed, decorate, observable } from "mobx";


export enum ToggleUiState{
  Open = 'open',
  Close = 'close',
}


export class Toggle {
  get isOpen(){
    return this.isToggle;
  }
  get isClose(){
    return !this.isOpen;
  }

  get invertState () {
    return this.state === ToggleUiState.Open ?
      ToggleUiState.Close :
      ToggleUiState.Open;
  }

  readonly defaultState;
  public state;
  public isToggle;

  constructor(initialState: ToggleUiState = ToggleUiState.Open) {
    this.defaultState = this.state = initialState;
    this.isToggle = this.state === ToggleUiState.Open;
  }

  readonly open = () => {
    this.isToggle = true;

    return this.state = ToggleUiState.Open;
  }
  readonly close = () => {
    this.isToggle = false;

    return this.state = ToggleUiState.Close;
  }
  readonly toggle = () => {
    return this.isToggle ? this.close() : this.open();
  }
}

export function createToggle(initialState: ToggleUiState = ToggleUiState.Open){
  return {
    state: initialState,
    isToggle: initialState === ToggleUiState.Open,
    get isOpen(){
      return this.isToggle;
    },
    get isClose(){
      return !this.isOpen;
    },

    get invertState () {
      return this.state === ToggleUiState.Open ?
        ToggleUiState.Close :
        ToggleUiState.Open;
    },
    open() {
      this.isToggle = true;

      return this.state = ToggleUiState.Open;
    },
    close() {
      this.isToggle = false;

      return this.state = ToggleUiState.Close;
    },
    toggle() {
      return this.isToggle ? this.close() : this.open();
    }
  }
}

decorate(Toggle, {
  state: observable,
  isToggle: observable,

  isOpen: computed,
  isClose: computed,
  invertState: computed,

  open: action,
  close: action,
  toggle: action
});
