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
import { useCssPropertyAsNumber } from "../../react__hooks/media-hook";
import { CssPropertyName } from "../../CssPropertyName";
import { Media } from "../media/Media";
import { DownAsideBarContent } from "../content__aside-bar_down/DownAsideBarContent";


interface IContentWithNavLayerProps {
  children:ReactNode|ReactNode[];
}


export const ContentWithNavLayer: FC<IContentWithNavLayerProps> = ( { children } ) => {
  let contentNavXsSize = useCssPropertyAsNumber( CssPropertyName.ContentNavXsMedia );
  let hideSideContentNavXsMediaQuery = !isNaN( contentNavXsSize ) ? `(min-width:${ contentNavXsSize }px)` : ``;
  let showDownContentNavXsMediaQuery = !isNaN( contentNavXsSize ) ? `(max-width:${ contentNavXsSize }px)` : ``;

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
      <Media query={showDownContentNavXsMediaQuery}>
        <div className="content-layout-grid-item__aside-bar_down">
          <DownAsideBarContent/>
        </div>
      </Media>
    </div>
  );
};
