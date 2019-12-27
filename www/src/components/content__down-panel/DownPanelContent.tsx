import React, { FC } from "react";
import { useWhatIsNewStores } from "../../mobx/MobxWhatIsNewProvider";
import { IconButton } from "../icon-button/IconButton";
import {
  ThreeDotsAnimatedCssIcon,
  ThreeDotsAnimatedCssIconPosition
} from "../css-icon__three-dots-animated-css-icon/ThreeDotsAnimatedCssIcon";
import { observer } from "mobx-react-lite";

interface IDownPanelContentProps {
}

export const DownPanelContent: FC<IDownPanelContentProps> = observer( ( {} ) => {
  let { contentDownPanelStore } = useWhatIsNewStores();

  const togglePanelIconButton_click = () => contentDownPanelStore.toggle();

  return (
    <div className="content__panel_down" toggle-state={ contentDownPanelStore.state }>
      <IconButton className="content-panel-down__button_toggle-panel" onClick={ togglePanelIconButton_click }>
        <ThreeDotsAnimatedCssIcon position={ ThreeDotsAnimatedCssIconPosition.Horizontal }
                                  state={ contentDownPanelStore.state }/>
      </IconButton>
      <div className="content__panel-down_auxiliary-animated-layer"
           toggle-state={contentDownPanelStore.state}></div>
    </div>
  );
} );