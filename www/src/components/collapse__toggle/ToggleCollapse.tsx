import React, { FC } from "react";
import { useCollapse } from "../collapse/collpase-context";


interface IToggleCollapseProps {
  onCollapse(id: string): void;
}



export const ToggleCollapse: FC<IToggleCollapseProps> = ({children} ) => {
  let collapse = useCollapse();

  return (
    <button className="collapse__toggle" onClick={() => collapse.toggle()}>
      {children}
    </button>
  );
};
