import React, { FC } from "react";
import { useTranslator } from "../../react__hooks/translator.hook";
import { BookTocGuiLocalization, LocalizationPaths } from "../../localization";
import { ControlBarContent } from "../content__control-bar/ControlBarContent";
import { EditSvgIcon } from "../icon__svg-icon/svg-icons";
import { IconButton } from "../icon-button/IconButton";
import { EditOnGithubButton } from "../button__content__conent-bar__edit-on-github-button/EditOnGithubButton";

interface IBookControlBarLayerProps {
}

export const BookControlBarLayer: FC<IBookControlBarLayerProps> = () => {

  return (
    <ControlBarContent>
      <div className="bc-control-bar-layer">
      <EditOnGithubButton/>
      </div>
    </ControlBarContent>
  );
};