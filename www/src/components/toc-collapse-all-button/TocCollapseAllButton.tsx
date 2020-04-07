import React, { FC } from "react";
import { default as cn } from "classnames";
import { RotateContainer } from "../transform__rotate-container/RotateContainer";
import { ArrowDownSvgIcon } from "../icon__svg-icon/svg-icons";
import { IconButton, Size } from "../icon-button/IconButton";
import { observer } from "mobx-react-lite";
import { Tooltip, TooltipPosition } from "../tooltip/Tooltip";
import { If } from "../if-operator/If";
import { useTranslator } from "../../react__hooks/translator.hook";
import { BookTocGuiLocalization, LocalizationPaths } from "../../localization";
import { useBookTocPageStores } from "../../stores/mobx-entry__book_toc";

interface ITocCollapseAllButtonProps {
  className?:string;
}

export const TocCollapseAllButton: FC<ITocCollapseAllButtonProps> = observer( ( {className} ) => {
  let [t] = useTranslator<[BookTocGuiLocalization]>( LocalizationPaths.BookChaptersPageGui );
  let { bookTocTreeStore } = useBookTocPageStores();

  let classes = cn( "toc-collapse-all-button", className );

  return (
    <IconButton className={classes} size={Size.SM} onClick={ () => bookTocTreeStore.collapseAll() }>
      <RotateContainer isToggle={ !bookTocTreeStore.isCollapseAll }>
        <ArrowDownSvgIcon/>
      </RotateContainer>
      <Tooltip position={TooltipPosition.BottomCenter}>
        <If condition={bookTocTreeStore.isCollapseAll}>
          {t.secondaryContentBar.tocCollapseAllButton.tooltip.openState}
        </If>
        <If condition={!bookTocTreeStore.isCollapseAll}>
          {t.secondaryContentBar.tocCollapseAllButton.tooltip.closeState}
        </If>
      </Tooltip>
    </IconButton>
  );
} );