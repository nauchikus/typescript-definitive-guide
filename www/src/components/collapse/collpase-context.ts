import { createContext, useContext } from "react";

export interface ICollapse {
  id:string;
  isCollapse: boolean;
  toggle(): void;
}

export const CollapseContext = createContext<ICollapse>({
  id: ``,
  isCollapse: false,
  toggle() {}
});

export const useCollapse = () => useContext(CollapseContext);
