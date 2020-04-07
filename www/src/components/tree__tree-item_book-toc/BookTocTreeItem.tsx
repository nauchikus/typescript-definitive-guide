import React, { FC, ReactElement } from "react";
import { Link } from "gatsby";
import { default as cn } from "classnames";
import { observer } from "mobx-react-lite";

import * as StringUtils from "../../utils/string-utils";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppLocalization, BookTocGuiLocalization, LocalizationPaths } from "../../localization";
import { IconButton, Size } from "../icon-button/IconButton";
import { ArrowDownSvgIcon, LinkSvgIcon } from "../icon__svg-icon/svg-icons";
import { RotateContainer } from "../transform__rotate-container/RotateContainer";
import { RouterUtils } from "../../utils/router-utils";
import {
  getClassNameWithBgColorAttrBySectionName,
  getClassNameWithBorderColorAttrBySectionName
} from "../../maps/book-chapter-section-type-to-style-color-map";
import { Tooltip, TooltipPosition } from "../tooltip/Tooltip";
import { If } from "../if-operator/If";
import { useBookTocPageStores } from "../../stores/mobx-entry__book_toc";

interface IBookTocTreeItemProps {
  bookTocTreeNodeId:string;

  onCollapse:(id:string)=>void;
  onCopyLinkToBuffer:(path:string)=>void;
}

export const BookTocTreeItem: FC<IBookTocTreeItemProps> = observer( ( { bookTocTreeNodeId,onCollapse,onCopyLinkToBuffer } ) => {
  let [{lang:locale}]=useTranslator<[AppLocalization]>();
  let { bookTocTreeStore } = useBookTocPageStores();
  let bookTocTreeNode = bookTocTreeStore.getNodeById( bookTocTreeNodeId );

  if ( !bookTocTreeNode ) {
    throw new Error();
  }

  let { id, isCollapse, index: firstLevelIndex, data } = bookTocTreeNode;
  let { section, title, path: firstLevelPath, subtitles } = data;



  return (
    <BookTocFirstLevelTreeItem key={`${firstLevelIndex}`}
                               id={ id }
                               locale={ locale }
                               index={ firstLevelIndex.toString() }
                               section={section}
                               isCollapse={ isCollapse }
                               title={ title }
                               path={ RouterUtils.bookRoutes.getBookRoute( { locale, chapterName: firstLevelPath } ) }
                               relativePath={ firstLevelPath }
                               onCollapse={ onCollapse }
                               onCopyLinkToBuffer={ onCopyLinkToBuffer }>

      { subtitles.map( ( { path: secondLevelPath,subtitle }, secondLevelIndex ) => (
        <BookTocSecondLevelTreeItem key={`${firstLevelIndex}.${secondLevelIndex}`}
                                    section={section}
                                    locale={locale}
                                    index={ `${ firstLevelIndex }.${ secondLevelIndex }` }
                                    title={ subtitle }
                                    path={ RouterUtils.bookRoutes.getBookRoute( {
                                      locale,
                                      chapterName: secondLevelPath
                                    } ) }
                                    relativePath={ secondLevelPath }
                                    onCopyLinkToBuffer={ onCopyLinkToBuffer }/>
      ) ) }

    </BookTocFirstLevelTreeItem>
  );
} );

interface IBookTocFirstLevelTreeItemProps {
  index:string;
  section:string;
  isCollapse:boolean;
  title:string;
  id:string;

  path:string;
  relativePath:string;

  children: ReactElement | ReactElement[];

  locale:string;

  onCollapse:(id:string)=>void;
  onCopyLinkToBuffer:(path:string)=>void;
}


export const BookTocFirstLevelTreeItem: FC<IBookTocFirstLevelTreeItemProps> = observer(( {index,isCollapse,title,id,path,relativePath,section,locale,children,onCopyLinkToBuffer,onCollapse} ) => {
  let [t]=useTranslator<[BookTocGuiLocalization]>(LocalizationPaths.BookChaptersPageGui)


  let tocPointMapHighLevel = cn( "point-map__point_high-level", getClassNameWithBgColorAttrBySectionName( section, locale ) );
  let pointMapBranchClasses = cn( "point-map__branch", getClassNameWithBorderColorAttrBySectionName( section, locale ) );

  return (
    <div className="collapse">

      <div className="collapse__content toc">

        <div className="toc__point-map-section">
          <div className={tocPointMapHighLevel}></div>
        </div>

        <div className="toc__left-section">
          <div className="book-toc__index book-toc__index_first-level">
            <div className="toc-index__label">
              {index}
            </div>
          </div>
        </div>

        <div className="toc__center-section">
          <Link className="toc__gatsby-link" to={`/${path}`}>{title}</Link>
        </div>

        <div className="toc__right-section">
          <div className="toc__control">
            <IconButton className="toc-control__copy-to-buffer-button toc-control__button_offset-for-center"
                        size={Size.SM}
                        onClick={()=>onCopyLinkToBuffer(path)}>
              <LinkSvgIcon className="copy-to-buffer-button__svg-icon"/>
              <Tooltip className="toc__tooltip_copy-to-buffer" position={TooltipPosition.BottomCenter}>
                {t.tocItem.copyLinkToBufferButton.tooltip}
              </Tooltip>
            </IconButton>
            <IconButton className="toc-control__collapse-button toc-control__button_offset-for-center"
                        size={Size.SM}
                        onClick={()=>onCollapse(id)}>
              <RotateContainer isToggle={!isCollapse}>
                <ArrowDownSvgIcon className="collapse-button__svg-icon"/>
              </RotateContainer>
              <Tooltip className="toc__tooltip_copy-to-buffer" position={TooltipPosition.BottomCenter}>
                <If condition={isCollapse}>
                  {t.tocItem.collapseTocButton.tooltip.openState}
                </If>
                <If condition={!isCollapse}>
                  {t.tocItem.collapseTocButton.tooltip.closeState}
                </If>
              </Tooltip>
            </IconButton>
          </div>
        </div>

      </div>

      <div className="collapse__collapsed-content toc_low-level" is-collapse={isCollapse?"true":"false"}>
        <div className={pointMapBranchClasses}></div>
        {children}
      </div>
      
    </div>
  );
});

interface IBookTocSecondLevelTreeItemProps {
  section:string;
  locale:string;
  index:string;
  title:string;

  path:string;
  relativePath:string;

  onCopyLinkToBuffer:(path:string)=>void;
}

export const BookTocSecondLevelTreeItem: FC<IBookTocSecondLevelTreeItemProps> = ( {section,locale,index,title,path,relativePath,onCopyLinkToBuffer} ) => {
  let tocPointMapLowLevel = cn( "point-map__point_low-level", getClassNameWithBgColorAttrBySectionName( section, locale ) );

  return (
    <div className="toc">

      <div className="toc__point-map-section">
        <div className={tocPointMapLowLevel}></div>
      </div>

      <div className="toc__left-section">
        <div className="book-toc__index book-toc__index_second-level">
          { index }
        </div>
      </div>

      <div className="toc__center-section">
        <Link className="toc__gatsby-link" to={`/${path}`}>{title}</Link>
      </div>

      <div className="toc__right-section">
        <div className="toc__control">
          <IconButton className="toc-control__button_offset-for-center"
                      size={Size.SM}
                      onClick={()=>onCopyLinkToBuffer(path)}>
            <LinkSvgIcon className="copy-to-buffer-button__svg-icon"/>
            <Tooltip className="toc__tooltip_copy-to-buffer" position={TooltipPosition.BottomCenter}>
              Скопировать ссылку в буффер обмена
            </Tooltip>
          </IconButton>
        </div>
      </div>

    </div>
  );
};