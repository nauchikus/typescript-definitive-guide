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
import { useBookTocPageStores } from "../../mobx__entry/BookTocPageMobxEntry";

interface ITocCollapseAllButtonProps {
  collapseGroupId: string;
  className?:string;
}

export const TocCollapseAllButton: FC<ITocCollapseAllButtonProps> = observer( ( {className, collapseGroupId} ) => {
  let [t] = useTranslator<[BookTocGuiLocalization]>( LocalizationPaths.BookChaptersPageGui );
  let { bookTocCollapseStore } = useBookTocPageStores();

  let classes = cn( "toc-collapse-all-button", className );

  return (
    <IconButton className={classes} size={Size.SM} onClick={ () => bookTocCollapseStore.collapseAll() }>
      <RotateContainer isToggle={ !bookTocCollapseStore.isCollapseAll }>
        <ArrowDownSvgIcon/>
      </RotateContainer>
      <Tooltip position={TooltipPosition.BottomCenter}>
        <If condition={bookTocCollapseStore.isCollapseAll}>
          {t.secondaryContentBar.tocCollapseAllButton.tooltip.openState}
        </If>
        <If condition={!bookTocCollapseStore.isCollapseAll}>
          {t.secondaryContentBar.tocCollapseAllButton.tooltip.closeState}
        </If>
      </Tooltip>
    </IconButton>
  );
} );
