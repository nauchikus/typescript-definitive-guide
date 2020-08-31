import React, { FC } from "react";
import { default as cn } from "classnames";
import { getClassNameWithBgColorAttrBySectionName } from "../../maps/book-chapter-section-type-to-style-color-map";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppLocalization } from "../../localization";


interface IItemIndexTocMenuProps {
  index:string
}


export const ItemIndexTocMenu: FC<IItemIndexTocMenuProps> = ({ index} ) => {
  return (
    <span className="toc-menu-item__index">
      {index}
    </span>
  );
};
