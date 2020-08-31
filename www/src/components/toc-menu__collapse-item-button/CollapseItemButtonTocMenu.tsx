import React, { FC } from "react";
import { CollapseButton } from "../button__collapse/CollapseButton";
import { useCollapse } from "../collapse/collpase-context";
import { observer } from "mobx-react-lite";


interface ICollapseItemButtonTocMenuProps {
}


export const CollapseItemButtonTocMenu: FC<ICollapseItemButtonTocMenuProps> = observer(({}) => {
  let collapse = useCollapse();


  return (
    <CollapseButton isCollapse={collapse.isCollapse} onClick={collapse.toggle}/>
  );
});
