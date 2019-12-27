import React, { FC } from "react";
import { BookTocTagBar } from "../../components/book-toc-tag-bar/BookTocTagBar";
import { useTranslator } from "../../react__hooks/translator.hook";
import { BookTocGuiLocalization, LocalizationPaths } from "../../localization";


interface IBookTocAsideLayoutProps {
}

export const BookTocAsideLayout: FC<IBookTocAsideLayoutProps> = ( {} ) => {
  let [t] = useTranslator<[BookTocGuiLocalization]>( LocalizationPaths.BookChaptersPageGui );

  return (
    <div className="book-toc__aside-layout">
      <div className="book-toc-aside__label">
        {t.asideLayout.tagBarLabel}
      </div>
      <BookTocTagBar/>
    </div>
  );
};