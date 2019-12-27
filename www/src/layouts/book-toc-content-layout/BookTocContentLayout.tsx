import React, { FC } from "react";
import { useBookTocStores } from "../../mobx/MobxBookTocProvider";
import {BookTocTreeItem } from "../../components/book-toc-tree-item/BookTocTreeItem";
import { TocCollapseAllButton } from "../../components/toc-collapse-all-button/TocCollapseAllButton";
import { observer } from "mobx-react-lite";
import { BookTocTagBar } from "../../components/book-toc-tag-bar/BookTocTagBar";
import { BookTocAsideLayout } from "../book-toc-aside-layout/BookTocAsideLayout";
import { TocFilterButton } from "../../components/toc-filter-button/TocFilterButton";
import { SecondaryContentBar } from "../../components/secondary-content-bar/SecondaryContentBar";
import { useTranslator } from "../../react__hooks/translator.hook";
import { BookTocGuiLocalization, LocalizationPaths } from "../../localization";


interface IBookTocContentLayoutProps {
}


export const BookTocContentLayout: FC<IBookTocContentLayoutProps> = observer( ( {} ) => {
  let [t] = useTranslator<[BookTocGuiLocalization]>( LocalizationPaths.BookChaptersPageGui );
  let { bookTocTreeStore } = useBookTocStores();


  const onCollapse = ( id: string ) => bookTocTreeStore.collapseById( id );
  const onCopyLinkToBuffer = ( path: string ) => {
  };

  let bookToc = bookTocTreeStore.treeFiltered
    .map( ( node ) =>
      <BookTocTreeItem key={ node.id }
                       bookTocTreeNodeId={ node.id }
                       onCollapse={ onCollapse }
                       onCopyLinkToBuffer={ onCopyLinkToBuffer }/>
    );


  return (
    <div className="book-toc-content-layout chapters-content-layout__grid">
      <div className="chapters-content-layout-grid-item__primary-content-bar">
        <div className="book-toc-content-layout__bar">
          <div className="primary-content-bar">
            <span className="primary-content-bar__label">{t.secondaryContentBar.label}</span>
            <div className="book-toc__control">
              <TocFilterButton className="book-toc-control__item"/>
              <TocCollapseAllButton className="book-toc-control__item"/>
            </div>
          </div>
        </div>
      </div>
      <SecondaryContentBar>
        <BookTocAsideLayout/>
        <div className="secondary-bar__divider divide_x"></div>
      </SecondaryContentBar>
      <div className="content-layout-grid-item__content">
        <div className="book-toc-content-layout__toc" filter={ bookTocTreeStore.showTocWithSectionName }>
          { bookToc }
        </div>
      </div>
    </div>
  );
} );