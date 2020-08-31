import { createContext, useContext } from "react";
import { ICollapse } from "../collapse/collpase-context";



export class CollapseGroupService {
  private static map = new Map<string, ICollapse>();
  public static registerGroup(collapseGroup: ICollapse){
    CollapseGroupService.map.set(collapseGroup.id, collapseGroup);
  }
  public static unregisterGroup(collapseGroup: ICollapse){
    CollapseGroupService.map.delete(collapseGroup.id);
  }
  public static getCollapseGroup(id: string){
    return CollapseGroupService.map.get(id);
  }
}
export const CollapseGroupContext = createContext({
  id: ``,
  isCollapse: false,
  toggle(){}
});

export const useCollapseGroup = () => useContext(CollapseGroupContext);
export const useCollapseGroupService = (id: string) => {


}
