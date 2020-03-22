import React, { FC, ReactNode } from "react";
import { AsideBarContent } from "../content__aside-bar/AsideBarContent";
import {
  LeftControlWinContentBar,
  RightControlWinContentBar
} from "../content__aside-bar_win-control-all/ControlWinContentBar";
import { DownPanelContent } from "../content__down-panel/DownPanelContent";


interface IContentWithNavLayerProps {
  children:ReactNode|ReactNode[];
}

export const ContentWithNavLayer: FC<IContentWithNavLayerProps> = ( { children } ) => {
  return (
    <div className="content-layout-grid">
      <div className="content-layout-grid-item__aside-bar_left">
        <AsideBarContent className="content__aside-bar_left">
          <LeftControlWinContentBar/>
        </AsideBarContent>
      </div>
      <div className="content-layout-grid-item__main">
        <main className="content content-with-control">
          { children }
        </main>
      </div>
      <divgit className="content-layout-grid-item__aside-bar_right">
        <AsideBarContent className="content__aside-bar_right">
          <RightControlWinContentBar/>
        </AsideBarContent>
        <DownPanelContent/>
      </div>
    </div>
  );
};