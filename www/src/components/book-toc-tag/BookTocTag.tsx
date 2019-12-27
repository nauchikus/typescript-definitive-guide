import React, { FC, ReactNode } from "react";
import { default as cn } from "classnames";
import { getClassNameWithBgColorAttrBySectionName } from "../../maps/book-chapter-section-type-to-style-color-map";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppLocalization } from "../../localization";


interface IBookTocTagProps {
  className?:string;
  section:string;
  sectionMatchCount:number;
  children: ReactNode | ReactNode[];
  onClick:()=>void;
}



export const BookTocTag: FC<IBookTocTagProps> = ( {section,sectionMatchCount,className,children,onClick} ) => {
  let [{lang:locale}]=useTranslator<[AppLocalization]>();

  let classes = cn( "book-toc__tag", className, getClassNameWithBgColorAttrBySectionName( section, locale ) );


  return (
    <div className={classes} onClick={onClick}>
      <div className="book-toc__section-match-count">
        {sectionMatchCount}
      </div>
      <div className="book-toc__tag-label">
        <span>{ children }</span>
      </div>
    </div>
  );
};
