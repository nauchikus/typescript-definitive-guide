import React, { FC, ReactNode } from "react";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppLocalization, LocalizationPaths, WhatIsNewTocGuiLocalization } from "../../localization";
import { useWhatIsNewTocStores } from "../../mobx/MobxWhatIsNewTocProvider";
import { IWhatIsNewTocVersionStatus } from "../../types/IWhatIsNewToc";
import { Link } from "gatsby";
import { IconButton, Size } from "../icon-button/IconButton";
import { ArrowDownSvgIcon, LinkSvgIcon } from "../icon__svg-icon/svg-icons";
import { Tooltip, TooltipPosition } from "../tooltip/Tooltip";
import { RotateContainer } from "../transform__rotate-container/RotateContainer";
import { If } from "../if-operator/If";
import {RouteUtils} from "../../utils/route-utils";
import * as DateUtils from "../../utils/date-utils";

interface IWhatIsNewTocTreeItemProps {
  winTocTreeNodeId:string;

  onCopyLinkToBuffer:(path:string)=>void;
}

export const WhatIsNewTocTreeItem: FC<IWhatIsNewTocTreeItemProps> = ( { winTocTreeNodeId, onCopyLinkToBuffer } ) => {
  let [{ lang: locale }] = useTranslator<[AppLocalization]>();
  let { winTocTreeStore } = useWhatIsNewTocStores();
  let winTocTreeNode = winTocTreeStore.getNodeById( winTocTreeNodeId );

  if ( !winTocTreeNode ) {
    throw new Error( `` );
  }

  let winToc = winTocTreeNode.data;



  let whatIsNewTocSecondLevelTreeItems = winToc.innovations.map( ( winTocItem, index ) => (
    <WhatIsNewTocSecondLevelTreeItem key={ index }
                                     version={ winTocItem.version }
                                     innovationName={ winTocItem.innovationName }
                                     path={ winTocItem.path }
                                     onCopyLinkToBuffer={ onCopyLinkToBuffer }/>
  ) );

  return (
    <div className="win-toc">
      <div className="win-toc__first-level">
        <WhatIsNewTocFirstLevelTreeItem
          version={ winToc.lastVersionStatus.version }
          lastVersionStatus={ winToc.lastVersionStatus }
          locale={locale}
          onCopyLinkToBuffer={ onCopyLinkToBuffer }/>
      </div>
      <div className="win-toc__second-level">
        { whatIsNewTocSecondLevelTreeItems }
      </div>
    </div>


  );
};

interface IWhatIsNewTocFirstLevelTreeItemProps {
  version:string;
  lastVersionStatus:IWhatIsNewTocVersionStatus;
  locale:string;

  onCopyLinkToBuffer:(path:string)=>void;
}

export const WhatIsNewTocFirstLevelTreeItem: FC<IWhatIsNewTocFirstLevelTreeItemProps> = ( props ) => {
  let [t] = useTranslator<[WhatIsNewTocGuiLocalization]>( LocalizationPaths.WhatIsNewTocPageGui );
  let { version, lastVersionStatus, locale,onCopyLinkToBuffer } = props;
  let route = RouteUtils.whatIsNewRoutes.getWhatIsNewRoute( {version} );


  return (
    <div className="win-toc__item win-toc__item_first-level">

      <Link className="win-toc__gatsby-link win-toc__version" to={route}>
        <span className="win-toc__version-phase">{ lastVersionStatus.version }</span>
      </Link>

      <div className="win-toc__control win-toc__control_first-level">
        <IconButton className="win-toc-control__copy-to-buffer-button"
                    size={Size.SM}
                    onClick={()=>onCopyLinkToBuffer(route)}>
          <LinkSvgIcon className="copy-to-buffer-button__svg-icon"/>
          <Tooltip className="win-toc__tooltip_copy-to-buffer" position={TooltipPosition.BottomCenter}>
            {t.tocItem.copyLinkToBufferButton.tooltip}
          </Tooltip>
        </IconButton>
      </div>

      <div className="win-toc__version-date">
        <span>{ DateUtils.toAppDateFormat(lastVersionStatus.date,locale) }</span>
      </div>

    </div>
  );
};


interface IWhatIsNewTocSecondLevelTreeItemProps {
  version:string;
  innovationName:string;
  path:string;
  onCopyLinkToBuffer:(path:string)=>void;
}

export const WhatIsNewTocSecondLevelTreeItem: FC<IWhatIsNewTocSecondLevelTreeItemProps> = ( props ) => {
  let [t] = useTranslator<[WhatIsNewTocGuiLocalization]>( LocalizationPaths.WhatIsNewTocPageGui );
  let { version, innovationName, path, onCopyLinkToBuffer } = props;
  let route = RouteUtils.whatIsNewRoutes.getWhatIsNewRoute( {
    version,
    innovation: path
  } );

  return (
    <div className="win-toc__item win-toc__item_second-level">
      <div className="win-toc__version_color-indicator"></div>
      <Link className="win-toc__gatsby-link" to={ route }>{ innovationName }</Link>
      <div className="win-toc__control">
        <IconButton className="win-toc-control__copy-to-buffer-button win-toc-control__button_offset-for-center"
                    size={ Size.SM }
                    onClick={ () => onCopyLinkToBuffer( route ) }>
          <LinkSvgIcon className="copy-to-buffer-button__svg-icon"/>
          <Tooltip className="win-toc__tooltip_copy-to-buffer" position={ TooltipPosition.BottomCenter }>
            {t.tocItem.copyLinkToBufferButton.tooltip}
          </Tooltip>
        </IconButton>
      </div>
    </div>
  );
};