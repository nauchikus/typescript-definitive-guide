import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { useTranslator } from "../../react__hooks/translator.hook";
import { BookTocGuiLocalization, LocalizationPaths } from "../../localization";
import { BookTocNode, TreeNode } from "../../stores/BookTocTreeStore";
import { BookTocTreeCloseDecor } from "../../components/tree__tree-close-decor_book-toc/BookTocTreeCloseDecor";
import { SectionTocMenu } from "../../components/toc-menu__section/SectionTocMenu";
import { SectionLabelTocMenu } from "../../components/toc-menu__section-label/SectionLabelTocMenu";
import { SectionContentTocMenu } from "../../components/toc-menu__section-content/SectionContentTocMenu";
import { SectionGuideWithGap } from "../../components/section-guide-with-gap/SectionGuideWithGap";
import { SectionGuide } from "../../components/section-guide/SectionGuide";
import { Collapse } from "../../components/collapse/Collapse";
import { CollapsedCollapse } from "../../components/collapse__collapsed/CollapsedCollapse";
import { Tree } from "../../components/tree/Tree";
import { ItemTocMenu } from "../../components/toc-menu__item/ItemTocMenu";
import { ItemIndexTocMenu } from "../../components/toc-menu__item__index/ItemIndexTocMenu";
import { RouterUtils } from "../../utils/router-utils";
import { Link } from "gatsby";
import { CopyToBufferButtonTocMenu } from "../../components/toc-menu__copy-to-buffer-button/CopyToBufferButtonTocMenu";
import { CollapseItemButtonTocMenu } from "../../components/toc-menu__collapse-item-button/CollapseItemButtonTocMenu";
import { GroupCollapse } from "../../components/collapse__group/GroupCollapse";
import { useBookTocPageStores } from "../../mobx__entry/BookTocPageMobxEntry";


interface IBookTocContentLayoutProps {
}

type DividedIntoSectionItem = {
  section: string;
  items: TreeNode<BookTocNode>[];
};

export const BookTocContentLayout: FC<IBookTocContentLayoutProps> = observer( ( {} ) => {
  let [t] = useTranslator<[BookTocGuiLocalization]>( LocalizationPaths.BookChaptersPageGui );
  let { bookTocCollapseStore,bookTocSectionStore } = useBookTocPageStores();

  // const onCollapse = ( id: string ) => bookTocTreeStore.collapseById( id );
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


  let bookToc = (bookTocSectionStore.treeFiltered as TreeNode<BookTocNode>[])
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
    .map( ( item, sectionIndex ) => {
      let sectionKey = `${ item.section }_${ sectionIndex }`;

      let items = item.items.map((node) => {
        let bookTocTreeNode = bookTocCollapseStore.getNodeById(node.id);


        if (!bookTocTreeNode) {
          throw new Error(`Book tree node with id "${node.id}" not found.`);
        }


        let { index: firstLevelIndex, data } = bookTocTreeNode;
        let { title, path: firstLevelPath, subtitles } = data;



        let firstLevelItem = (
          <ItemTocMenu>
            <div className="toc-menu__section_left">
              <ItemIndexTocMenu index={firstLevelIndex.toString()}/>
            </div>
            <div className="toc-menu__section_center">
              <Link className="toc-menu-item__gatsby-link"
                    to={RouterUtils.toRelativePath(firstLevelPath)}>{title}</Link>
            </div>
            <div className="toc-menu__section_right">
              <div className="toc-menu-item__control">
                <CopyToBufferButtonTocMenu onClick={() => onCopyLinkToBuffer(firstLevelPath)}/>
                <CollapseItemButtonTocMenu/>
              </div>
            </div>
          </ItemTocMenu>
        );
        let secondLevelItemAll = subtitles.map(({ path: secondLevelPath, subtitle }, secondLevelIndex) => (
          <ItemTocMenu key={`${firstLevelIndex}.${secondLevelIndex}`}>
            <div className="toc-menu__section_left">
              <ItemIndexTocMenu index={`${firstLevelIndex.toString()}.${secondLevelIndex}`}/>
            </div>
            <div className="toc-menu__section_center">
              <Link className="toc-menu-item__gatsby-link"
                    to={RouterUtils.toRelativePath(secondLevelPath)}>{subtitle}</Link>
            </div>
            <div className="toc-menu__section_right">
              <div className="toc-menu-item__control">
                <CopyToBufferButtonTocMenu onClick={() => onCopyLinkToBuffer(secondLevelPath)}/>
              </div>
            </div>
          </ItemTocMenu>
        ));



        return (
          <Collapse key={firstLevelIndex} id={firstLevelIndex.toString()}>
            {/*<SectionGuideWithGap sectionName={item.section}/>*/}
            <Tree level={0}>
              {firstLevelItem}
            </Tree>
            <CollapsedCollapse>
              {/*<SectionGuide sectionName={item.section}/>*/}
              <Tree level={1}>
                {secondLevelItemAll}
              </Tree>
            </CollapsedCollapse>
          </Collapse>
        );
      });



      return(
        <SectionTocMenu key={sectionKey}>
          <SectionLabelTocMenu sectionName={ item.section }/>
          <SectionContentTocMenu sectionName={item.section}>
            {items}
          </SectionContentTocMenu>
        </SectionTocMenu>
      )

    } );


  return (
    <main className="content content-without-control book-toc-content-layout__toc" filter={ bookTocSectionStore.showTocWithSectionName }>
      <GroupCollapse id="book-toc" isCollapse={false}>
        { bookToc }
      </GroupCollapse>
      <BookTocTreeCloseDecor/>
    </main>
  );
} );
