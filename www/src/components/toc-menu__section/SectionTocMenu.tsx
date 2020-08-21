import React, { FC } from "react";


interface ISectionTocMenuProps {
}



export const SectionTocMenu: FC<ISectionTocMenuProps> = ( {children} ) => {
  return (
    <div className="toc-menu__section">
      {children}
    </div>
  );
};
