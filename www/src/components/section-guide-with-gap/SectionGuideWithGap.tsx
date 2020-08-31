import React, { FC, ReactNode } from "react";
import { default as cn } from "classnames";
import { getClassNameWithBgColorAttrBySectionName } from "../../maps/book-chapter-section-type-to-style-color-map";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppLocalization } from "../../localization";


interface ISectionTocMenuProps {
  sectionName:string;
  className?:string;
}



export const SectionGuideWithGap: FC<ISectionTocMenuProps> = ({sectionName, className, children} ) => {
  let [{lang:locale}]=useTranslator<[AppLocalization]>();

  let guideClasses = ["section-guide-with-gap__guide", className, getClassNameWithBgColorAttrBySectionName( sectionName, locale )]
  let topGuideClasses = cn("section-guide-with-gap__guide_start", guideClasses);
  let bottomGuideClasses = cn("section-guide-with-gap__guide_end", guideClasses);


  return (
    <div className="section-guide-with-gap">
      <div className={topGuideClasses}></div>
      {children}
      <div className={bottomGuideClasses}></div>
    </div>
  );
};
