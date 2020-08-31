import React, { FC } from "react";
import { useTranslator } from "../../react__hooks/translator.hook";
import { BookTocGuiLocalization, LocalizationPaths } from "../../localization";
import { IconButton, Size } from "../icon-button/IconButton";
import { LinkSvgIcon } from "../icon__svg-icon/svg-icons";
import { Tooltip, TooltipPosition } from "../tooltip/Tooltip";


interface ICopyToBufferButtonTocMenuProps {
  onClick:()=>void;
}

export const CopyToBufferButtonTocMenu: FC<ICopyToBufferButtonTocMenuProps> = ({ onClick } ) => {
  let [t]=useTranslator<[BookTocGuiLocalization]>(LocalizationPaths.BookChaptersPageGui)

  return (
    <IconButton className="toc-control__copy-to-buffer-button toc-menu__control_button_offset-for-center"
                size={Size.SM}
                onClick={onClick}>
      <LinkSvgIcon className="copy-to-buffer-button__svg-icon"/>
      <Tooltip position={TooltipPosition.BottomCenter}>
        {t.tocItem.copyLinkToBufferButton.tooltip}
      </Tooltip>
    </IconButton>
  );
};
