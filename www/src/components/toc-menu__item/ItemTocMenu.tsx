import React, { FC } from "react";


interface IItemTocMenuProps {
}



export const ItemTocMenu: FC<IItemTocMenuProps> = ({ children} ) => {
  return (
    <div className="toc-menu__item">
      {children}
    </div>
  );
};
