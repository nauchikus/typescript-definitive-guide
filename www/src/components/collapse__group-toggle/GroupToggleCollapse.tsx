import React, { FC } from "react";


interface IGroupToggleCollapseProps {
  id?:string;
  onCollapse(id: string): void;
}



export const GroupToggleCollapse: FC<IGroupToggleCollapseProps> = ({id, onCollapse, children} ) => {
  return (
    <button className="collapse__toggle">
      {children}
    </button>
  );
};
