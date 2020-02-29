import React, { FC } from "react";
import { default as cn } from "classnames";
import { getClassNameWithBgColorAttrBySectionName } from "../../maps/book-chapter-section-type-to-style-color-map";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppLocalization } from "../../localization";

interface IBookTocTreeSectionLabelProps {
  sectionName:string;
}

export const BookTocTreeSectionLabel: FC<IBookTocTreeSectionLabelProps> = ( { sectionName } ) => {
  let [{ lang: locale }] = useTranslator<[AppLocalization]>();
  let classes = cn( `book-toc-tree__section-label`, getClassNameWithBgColorAttrBySectionName( sectionName, locale ) );

  return (
    <div className={classes}>
      <span>
        { sectionName }
      </span>
    </div>
  );
};