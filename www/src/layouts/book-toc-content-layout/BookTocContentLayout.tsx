import React, { FC,Fragment } from "react";
import { useBookTocStores } from "../../mobx/MobxBookTocProvider";
import {BookTocTreeItem } from "../../components/tree__tree-item_book-toc/BookTocTreeItem";
import { TocCollapseAllButton } from "../../components/toc-collapse-all-button/TocCollapseAllButton";
import { observer } from "mobx-react-lite";
import { BookTocTagBar } from "../../components/book-toc-tag-bar/BookTocTagBar";
import { BookTocAsideLayout } from "../book-toc-aside-layout/BookTocAsideLayout";
import { TocFilterButton } from "../../components/toc-filter-button/TocFilterButton";
import { SecondaryContentBar } from "../../components/secondary-content-bar/SecondaryContentBar";
import { useTranslator } from "../../react__hooks/translator.hook";
import { BookTocGuiLocalization, LocalizationPaths } from "../../localization";
import { BookTocNode, TreeNode } from "../../stores/BookTocTreeStore";
import { BookTocTreeSectionLabel } from "../../components/tree__tree-section-label_book-toc/BookTocTreeSectionLabel";
import { BookTocTreeCloseDecor } from "../../components/tree__tree-close-decor_book-toc/BookTocTreeCloseDecor";


interface IBookTocContentLayoutProps {
}

type DividedIntoSectionItem = {
  section: string;
  items: TreeNode<BookTocNode>[];
};

export const BookTocContentLayout: FC<IBookTocContentLayoutProps> = observer( ( {} ) => {
  let [t] = useTranslator<[BookTocGuiLocalization]>( LocalizationPaths.BookChaptersPageGui );
  let { bookTocTreeStore } = useBookTocStores();


  const onCollapse = ( id: string ) => bookTocTreeStore.collapseById( id );
  const onCopyLinkToBuffer = ( path: string ) => {
  };


  function getLastItem <T>(array:T[]) {
    return array[ array.length - 1 ];
  }
  function isEmpty<T> ( array: T[] ) {
    return array.length === 0;
  }
  function isSectionContinues(array:DividedIntoSectionItem[],item:TreeNode<BookTocNode>){
    return getLastItem( array ).section === item.data.section;
  }


  let bookToc = (bookTocTreeStore.treeFiltered as TreeNode<BookTocNode>[])
    .reduce( ( treeWithSectionAll, current ) => {
      if ( ( !isEmpty( treeWithSectionAll ) && isSectionContinues( treeWithSectionAll, current ) ) ) {
        getLastItem( treeWithSectionAll ).items.push( current );
      } else {
        treeWithSectionAll.push( {
          section: current.data.section,
          items: [current]
        } );
      }


      return treeWithSectionAll;
    }, [] as DividedIntoSectionItem[] )
    .map( ( item,index ) => {
      let sectionKey = `${ item.section }_${ index }`;
      let section = <BookTocTreeSectionLabel key={sectionKey}
                                             sectionName={ item.section }/>;
      let items = item.items.map( node => (
        <BookTocTreeItem key={ node.id }
                         bookTocTreeNodeId={ node.id }
                         onCollapse={ onCollapse }
                         onCopyLinkToBuffer={ onCopyLinkToBuffer }/>
      ) );


      return(
        <Fragment key={sectionKey}>
          {section}
          {items}
        </Fragment>
      )
    } );


  return (
    <div className="book-toc-content-layout__toc" filter={ bookTocTreeStore.showTocWithSectionName }>
      { bookToc }
      <BookTocTreeCloseDecor/>
    </div>
  );
} );