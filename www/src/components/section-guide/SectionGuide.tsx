import React, { FC, ReactNode } from "react";
import { default as cn } from "classnames";
import { getClassNameWithBgColorAttrBySectionName } from "../../maps/book-chapter-section-type-to-style-color-map";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppLocalization } from "../../localization";


interface ISectionTocMenuProps {
  sectionName:string;
  className?:string;
}

export const SectionGuide: FC<ISectionTocMenuProps> = ({sectionName, className, children} ) => {
  let [{lang:locale}]=useTranslator<[AppLocalization]>();

  let classes = cn(
    "section-guide",
    getClassNameWithBgColorAttrBySectionName(sectionName, locale)
  );

  return (
    <div className={classes}></div>
  );
};
