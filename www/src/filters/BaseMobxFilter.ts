import { computed, decorate, observable } from "mobx";

export class BaseMobxFilter<Id> {
  readonly id: Id;

  public isActive = true;



  constructor(id:Id) {
    this.id = id;
  }

  readonly activate = () => this.isActive = true;
  readonly deactivate = () => this.isActive = false;
}

decorate(BaseMobxFilter, {
  isActive: observable,
});
