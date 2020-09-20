import React, { FC } from "react";
import { getClassNameWithBorderColorAttrBySectionName } from "../../maps/book-chapter-section-type-to-style-color-map";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppLocalization } from "../../localization";
import { default as cn } from "classnames";


interface ISectionContentTocMenuProps {
  sectionName: string;
}



export const SectionContentTocMenu: FC<ISectionContentTocMenuProps> = ({sectionName, children} ) => {
  let [{lang:locale}]=useTranslator<[AppLocalization]>();
  let classes = cn(
    `toc-menu__section-content`,
    getClassNameWithBorderColorAttrBySectionName(sectionName, locale)

  );


  return (
    <div className={classes}>
      {children}
    </div>
  );
};
