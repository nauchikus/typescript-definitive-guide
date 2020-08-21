import React, { FC, useEffect, useState } from "react";
import { useCollapse } from "../collapse/collpase-context";
import { observer } from "mobx-react-lite";
import { useCollapseGroup } from "../collapse__group/collpase-group-context";


interface ICollapsedCollapseProps {
}



export const CollapsedCollapse: FC<ICollapsedCollapseProps> = observer(({children} ) => {
  const getStateByValue = (value: boolean) => value ? "true" : "false";

  let collapse = useCollapse();
  let collapseGroup = useCollapseGroup();

  let [state, setState] = useState(getStateByValue(collapse.isCollapse));

  useEffect(() => {
    setState(getStateByValue(collapse.isCollapse));
  }, [collapse.isCollapse]);
  useEffect(() => {
    collapse.isCollapse = collapseGroup.isCollapse;
  }, [collapseGroup.isCollapse]);

  return (
    <div className="collapse__collapsed" is-collapse={state}>
      {children}
    </div>
  );
});
