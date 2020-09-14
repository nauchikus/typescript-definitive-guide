import React, { FC } from "react";
import { IconButton } from "../icon-button/IconButton";
import { default as cn } from "classnames";
import { MenuAnimatedCssIcon } from "../menu-animated-css-icon/MenuAnimatedCssIcon";
import { observer } from "mobx-react-lite";
import { Tooltip, TooltipPosition } from "../tooltip/Tooltip";
import { useTranslator } from "../../react__hooks/translator.hook";
import { BookTocGuiLocalization, LocalizationPaths } from "../../localization";
import { useBookTocPageStores } from "../../mobx__entry/BookTocPageMobxEntry";

interface ITocFilterButtonProps {
  className?:string;
}

export const TocFilterButton: FC<ITocFilterButtonProps> = observer(( {className} ) => {
  let [t] = useTranslator<[BookTocGuiLocalization]>( LocalizationPaths.BookChaptersPageGui );
  let { tocFilterStore } = useBookTocPageStores();

  let classes = cn( "toc-filter-button", className );

  return(
    <IconButton className={classes} onClick={()=>tocFilterStore.toggle()}>
      <MenuAnimatedCssIcon state={tocFilterStore.state}/>
      <Tooltip position={TooltipPosition.BottomCenter}>
        {t.secondaryContentBar.tocFilterButton.tooltip}
      </Tooltip>
    </IconButton>
  )
})

