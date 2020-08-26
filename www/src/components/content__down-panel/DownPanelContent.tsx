import React, { FC } from "react";
import { IconButton } from "../icon-button/IconButton";
import {
  ThreeDotsAnimatedCssIcon,
  ThreeDotsAnimatedCssIconPosition
} from "../icon__css-icon__three-dots-animated-css-icon/ThreeDotsAnimatedCssIcon";
import { observer } from "mobx-react-lite";
import { useContentDownPanelStore } from "../../mobx__mobx-shared-store__react-context/ContentDownPanelStoreMobxContext";

interface IDownPanelContentProps {
}

export const DownPanelContent: FC<IDownPanelContentProps> = observer( ( {children} ) => {
  let contentDownPanelStore = useContentDownPanelStore();

  const togglePanelIconButton_click = () => contentDownPanelStore.toggle();

  return (
    <div className="content__aside-bar_down">

      <div className="content__panel_down" toggle-state={ contentDownPanelStore.state }>
        <div className="content__panel-down_auxiliary-animated-layer"
             toggle-state={contentDownPanelStore.state}>
        </div>
      </div>

      <IconButton className="content-panel-down__button_toggle-panel" onClick={ togglePanelIconButton_click }>
        <ThreeDotsAnimatedCssIcon position={ ThreeDotsAnimatedCssIconPosition.Horizontal }
                                  state={ contentDownPanelStore.state }/>
      </IconButton>

    </div>

  );
} );
