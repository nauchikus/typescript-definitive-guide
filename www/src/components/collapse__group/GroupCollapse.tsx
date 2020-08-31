import React, { FC } from "react";
import { CollapseGroupContext } from "./collpase-group-context";
import { CollapseService } from "../../stores/Toggle";


interface IGroupCollapseProps {
  id: string;
  isCollapse: boolean;
}


export const GroupCollapse: FC<IGroupCollapseProps> = ({id, isCollapse, children} ) => {
  return (
    <CollapseGroupContext.Provider value={CollapseService.create(id, isCollapse)}>
      {children}
    </CollapseGroupContext.Provider>
  );
};
