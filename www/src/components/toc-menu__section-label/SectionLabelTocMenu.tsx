import React, { FC } from "react";
import { default as cn } from "classnames";
import { getClassNameWithBgColorAttrBySectionName } from "../../maps/book-chapter-section-type-to-style-color-map";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppLocalization } from "../../localization";


interface SectionLabelTocMenuProps {
  sectionName:string;
}


export const SectionLabelTocMenu: FC<SectionLabelTocMenuProps> = ( { sectionName } ) => {
  let [{ lang: locale }] = useTranslator<[AppLocalization]>();
  let classes = cn( `toc-menu__section-label`, getClassNameWithBgColorAttrBySectionName( sectionName, locale ) );

  return (
    <div className={classes}>
      <span>
        { sectionName }
      </span>
    </div>
  );
};
