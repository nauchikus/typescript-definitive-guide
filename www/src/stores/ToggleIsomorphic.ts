import { action, computed, decorate, observable } from "mobx";
import { Toggle } from "./AppStateService";

export class ToggleIsomorphic extends Toggle {
  public isBrowserInit: boolean = false;

  readonly browserInit = () => {
    this.isBrowserInit = true;
  }
}


decorate(ToggleIsomorphic, {
  isBrowserInit: observable
});

