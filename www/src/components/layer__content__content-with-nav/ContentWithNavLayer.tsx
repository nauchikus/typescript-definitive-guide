import React, { FC, ReactNode } from "react";
import { AsideBarContent } from "../content__aside-bar/AsideBarContent";
import {
  GoNextAnchorContentControlButton,
  GoNextPageContentControlButton,
  GoPrevAnchorContentControlButton,
  GoPrevPageContentControlButton,
  LeftControlWinContentBar,
  RightControlWinContentBar
} from "../content__aside-bar_win-control-all/ControlWinContentBar";
import { DownAsideBarContent } from "../content__aside-bar_down/DownAsideBarContent";
import { MediaQuery } from "../../meadia/MediaQuery";
import { Media } from "../media/Media";
import { AppFooter } from "../app-footer/AppFooter";


interface IContentWithNavLayerProps {
  children:ReactNode|ReactNode[];
}


export const ContentWithNavLayer: FC<IContentWithNavLayerProps> = ( { children } ) => {
  let hideSideContentNavXsMediaQuery = MediaQuery.XsUp;
  let showDownContentNavXsMediaQuery = MediaQuery.XsDown;



  return (
    <div className="content-layout-grid">
      <Media query={hideSideContentNavXsMediaQuery}>
        <div className="content-layout-grid-item__aside-bar_left">
          <AsideBarContent className="content__aside-bar_left">
            <LeftControlWinContentBar>
              <GoPrevPageContentControlButton/>
            </LeftControlWinContentBar>
          </AsideBarContent>
        </div>
      </Media>
      <div className="content-layout-grid-item__main">
        <main className="content content-with-control">
          { children }
        </main>
      </div>
      <Media query={hideSideContentNavXsMediaQuery}>
        <div className="content-layout-grid-item__aside-bar_right">
          <AsideBarContent className="content__aside-bar_right">
            <RightControlWinContentBar>
              <GoPrevAnchorContentControlButton/>
              <GoNextPageContentControlButton/>
              <GoNextAnchorContentControlButton/>
            </RightControlWinContentBar>
          </AsideBarContent>
        </div>
      </Media>
      <Media query={MediaQuery.XsDown}>
        <div className="content-layout-grid-item__app-footer">
          <AppFooter/>
        </div>
      </Media>
      <Media query={showDownContentNavXsMediaQuery}>
        <div className="content-layout-grid-item__aside-bar_down">
          <DownAsideBarContent/>
        </div>
      </Media>
    </div>
  );
};
