export const createToggle = ( initialState: boolean ) => ( {
  isToggle: initialState,
  get isOn () {
    return this.isToggle;
  },
  get isOff () {
    return !this.isToggle;
  },
  on () {
    this.isToggle = true;
  },
  off () {
    this.isToggle = false;
  },
  toggle () {
    this.isToggle ? this.off() : this.on();
  }
} );
