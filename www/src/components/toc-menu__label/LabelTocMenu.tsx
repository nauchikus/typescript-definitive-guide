import React, { FC } from "react";
import { default as cn } from "classnames";
import { getClassNameWithBgColorAttrBySectionName } from "../../maps/book-chapter-section-type-to-style-color-map";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppLocalization } from "../../localization";


interface ILabelTocMenuProps {
}



export const LabelTocMenu: FC<ILabelTocMenuProps> = ({ children } ) => {
  let classes = cn( `toc-menu__label` );

  return (
    <span className={classes}>
      {children}
    </span>
  );
};
