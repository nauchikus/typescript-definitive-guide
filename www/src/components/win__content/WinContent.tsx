import React, { FC, ReactNode } from "react";
import { InnovationCoverWinContent } from "../win__content_innovation-cover/InnovationCoverWinContent";
import { InnovationListWinContent } from "../win__content__innovation-list/InnovationListWinContent";
import { AsideBarContent } from "../content__aside-bar/AsideBarContent";
import { IconButton } from "../icon-button/IconButton";
import { ArrowBeforeSvgIcon, ArrowDownSvgIcon, ArrowNextSvgIcon, ArrowUpSvgIcon } from "../svg-icon/svg-icons";
import {
  LeftControlWinContentBar,
  RightControlWinContentBar
} from "../content__aside-bar_win-control-all/ControlWinContentBar";
import { DownPanelContent } from "../content__down-panel/DownPanelContent";

interface IWinContentProps {

}

export const WinContent: FC<IWinContentProps> = ( { children } ) => {
  return (
    <>
      <AsideBarContent className="content__aside-bar_left">
        <LeftControlWinContentBar/>
      </AsideBarContent>
      <main>
        <InnovationCoverWinContent/>
        <InnovationListWinContent/>
      </main>
      <AsideBarContent className="content__aside-bar_right">
        <RightControlWinContentBar/>
      </AsideBarContent>
      <DownPanelContent/>
    </>
  );
};
