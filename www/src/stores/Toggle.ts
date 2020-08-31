import { action, computed, decorate, observable } from "mobx";

export class CollapseService {
  private static map = new Map<string, Collapse>()
  static create(id: string, isCollapse: boolean = false){
    return CollapseService.map.get(id) ??
      CollapseService.map
        .set(id, new Collapse(id, isCollapse))
        .get(id) as Collapse;
  }
  static destroy(id:string){
    return CollapseService.map.delete(id);
  }
  static getCollapseById(id:string){
    return CollapseService.map.get(id);
  }
}



export class Collapse {
  constructor(readonly id: string, public isCollapse: boolean = false) {
  }

  public toggle = () => {
    this.isCollapse = !this.isCollapse
  };
}


decorate(Collapse, {
  isCollapse: observable,
  toggle: action
});

