import React, { FC, ReactNode } from "react";
import { default as cn } from "classnames";
import { useContentDownPanelStore } from "../../mobx__mobx-shared-store__react-context/ContentDownPanelStoreMobxContext";
import { IconButton } from "../icon-button/IconButton";
import {
  ThreeDotsAnimatedCssIcon,
  ThreeDotsAnimatedCssIconPosition
} from "../icon__css-icon__three-dots-animated-css-icon/ThreeDotsAnimatedCssIcon";
import {
  GoNextAnchorContentControlButton, GoNextPageContentControlButton,
  GoPrevAnchorContentControlButton,
  GoPrevPageContentControlButton, ToggleContentBarButton
} from "../content__aside-bar_win-control-all/ControlWinContentBar";
import { observer } from "mobx-react-lite";

interface IDownAsideBarContentProps {
}

export const DownAsideBarContent: FC<IDownAsideBarContentProps> = observer(({}) => {
  let contentDownPanelStore = useContentDownPanelStore();



  return (
    <div className="content__aside-bar_down">

      <div className="content__panel-down_auxiliary-animated-layer"
           toggle-state={contentDownPanelStore.state}>
      </div>

      <div className="down-aside-bar__control">

        <div className="down-aside-bar__control-section_content-nav content-nav">
          <div className="content-nav__section content-nav__section_left" toggle-state={contentDownPanelStore.state}>
            <div className="content-nav__animation-item content-nav__animation-item_fade-effect_3">
              <GoPrevPageContentControlButton/>
            </div>
          </div>
          <div className="content-nav__section content-nav__section_right" toggle-state={contentDownPanelStore.state}>
            <div className="content-nav__animation-item content-nav__animation-item_fade-effect_2">
              <GoPrevAnchorContentControlButton/>
            </div>
            <div className="content-nav__animation-item content-nav__animation-item_fade-effect_1">
              <GoNextAnchorContentControlButton/>
            </div>
            <div className="content-nav__animation-item content-nav__animation-item_fade-effect_0">
              <GoNextPageContentControlButton/>
            </div>
          </div>
        </div>

        <div className="down-aside-bar__control-section_bar-toggle-button">
          <ToggleContentBarButton/>
        </div>

      </div>

    </div>
  );
});
