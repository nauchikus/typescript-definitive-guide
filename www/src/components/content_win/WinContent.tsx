import React, { FC, ReactNode } from "react";
import { InnovationCoverWinContent } from "../content__cover_win/InnovationCoverWinContent";
import { InnovationListWinContent } from "../win__content__innovation-list/InnovationListWinContent";
import { AsideBarContent } from "../content__aside-bar/AsideBarContent";
import { IconButton } from "../icon-button/IconButton";
import { ArrowBeforeSvgIcon, ArrowDownSvgIcon, ArrowNextSvgIcon, ArrowUpSvgIcon } from "../icon__svg-icon/svg-icons";
import {
  LeftControlWinContentBar,
  RightControlWinContentBar
} from "../content__aside-bar_win-control-all/ControlWinContentBar";
import { DownPanelContent } from "../content__down-panel/DownPanelContent";
import { ContentUnderCoverBar } from "../content__under-cover-bar/ContentUnderCoverBar";

interface IWinContentProps {

}
///TODO:[refactoring][delete]
export const WinContent: FC<IWinContentProps> = ( { children } ) => {
  return (
    <>
      <AsideBarContent className="content__aside-bar_left">
        <LeftControlWinContentBar/>
      </AsideBarContent>
      <main>
        <InnovationCoverWinContent/>
        <ContentUnderCoverBar/>
        <InnovationListWinContent/>
      </main>
      <AsideBarContent className="content__aside-bar_right">
        <RightControlWinContentBar/>
      </AsideBarContent>
      <DownPanelContent/>
    </>
  );
};
