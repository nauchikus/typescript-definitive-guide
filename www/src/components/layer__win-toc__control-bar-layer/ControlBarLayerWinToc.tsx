import React, { FC } from "react";
import { useTranslator } from "../../react__hooks/translator.hook";
import { LocalizationPaths, WhatIsNewTocGuiLocalization } from "../../localization";
import { ControlBarContent } from "../../components/content__control-bar/ControlBarContent";

interface IControlBarLayerWinTocProps {
}

export const ControlBarLayerWinToc: FC<IControlBarLayerWinTocProps> = ( {} ) => {
  let [t] = useTranslator<[WhatIsNewTocGuiLocalization]>( LocalizationPaths.WhatIsNewTocPageGui );


  return(
    <ControlBarContent>
      <div className="content__win-toc-control-bar_wrapper">
        <span className="win-toc-content-control-bar__label">{t.primaryContentBar.label}</span>
      </div>
    </ControlBarContent>
  );
};