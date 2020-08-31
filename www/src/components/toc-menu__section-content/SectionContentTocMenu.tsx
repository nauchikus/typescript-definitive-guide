import React, { FC } from "react";


interface ISectionContentTocMenuProps {
}



export const SectionContentTocMenu: FC<ISectionContentTocMenuProps> = ({children} ) => {
  return (
    <div className="toc-menu__section-content">
      {children}
    </div>
  );
};
