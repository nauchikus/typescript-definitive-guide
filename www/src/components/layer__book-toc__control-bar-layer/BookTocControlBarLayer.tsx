import React, { FC } from "react";
import { TocCollapseAllButton } from "../toc-collapse-all-button/TocCollapseAllButton";
import { useTranslator } from "../../react__hooks/translator.hook";
import { BookTocGuiLocalization, LocalizationPaths } from "../../localization";
import { BookTocFilterDropdown } from "../dropdown__filter-dropdown__book_toc/FilterDropdown";
import { ControlBarContent } from "../content__control-bar/ControlBarContent";

interface IBookTocControlBarLayerProps {
}

export const BookTocControlBarLayer: FC<IBookTocControlBarLayerProps> = () => {
  let [t] = useTranslator<[BookTocGuiLocalization]>( LocalizationPaths.BookChaptersPageGui );


  return (
    <ControlBarContent>
      <div className="book-toc-control-bar-layer">
        <span className="book-toc-control-bar-layer__label">{t.secondaryContentBar.label}</span>
        <div className="book-toc-control-bar-layer__control">
          <div className="book-toc-control-bar-layer__control-item">
            <BookTocFilterDropdown/>
          </div>
          <div className="book-toc-control-bar-layer__control-item">
            <TocCollapseAllButton className="book-toc-control__item" collapseGroupId="book-toc"/>
          </div>
        </div>
      </div>
    </ControlBarContent>
  );
};
