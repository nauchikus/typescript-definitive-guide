import React, { FC } from "react";
import { useTranslator } from "../../react__hooks/translator.hook";
import { BookTocGuiLocalization, LocalizationPaths } from "../../localization";
import { IconButton, Size } from "../icon-button/IconButton";
import { ArrowDownSvgIcon, LinkSvgIcon } from "../icon__svg-icon/svg-icons";
import { Tooltip, TooltipPosition } from "../tooltip/Tooltip";
import { RotateContainer } from "../transform__rotate-container/RotateContainer";
import { If } from "../if-operator/If";


interface ICopyToBufferButtonTocMenuProps {
  isCollapse:boolean;
  onClick:()=>void;
}



export const CollapseButton: FC<ICopyToBufferButtonTocMenuProps> = ({ isCollapse,onClick } ) => {
  let [t]=useTranslator<[BookTocGuiLocalization]>(LocalizationPaths.BookChaptersPageGui)


  return (
    <IconButton className="toc-control__collapse-button toc-control__button_offset-for-center"
                size={Size.SM}
                onClick={onClick}>
      <RotateContainer isToggle={!isCollapse}>
        <ArrowDownSvgIcon className="collapse-button__svg-icon"/>
      </RotateContainer>
      <Tooltip position={TooltipPosition.BottomCenter}>
        <If condition={isCollapse}>
          {t.tocItem.collapseTocButton.tooltip.openState}
        </If>
        <If condition={!isCollapse}>
          {t.tocItem.collapseTocButton.tooltip.closeState}
        </If>
      </Tooltip>
    </IconButton>
  );
};
