import React, { FC } from "react";
import { useTranslator } from "../../react__hooks/translator.hook";
import { BookTocGuiLocalization, LocalizationPaths } from "../../localization";
import { ControlBarContent } from "../content__control-bar/ControlBarContent";

interface IBookControlBarLayerProps {
}

export const BookControlBarLayer: FC<IBookControlBarLayerProps> = () => {
  let [t] = useTranslator<[BookTocGuiLocalization]>( LocalizationPaths.BookChaptersPageGui );


  return (
    <ControlBarContent>
      <div className="book-control-bar-layer">
        <span className="book-control-bar-layer__label">{t.secondaryContentBar.label}</span>

      </div>
    </ControlBarContent>
  );
};