import React, { FC } from "react";
import { ArrowBeforeSvgIcon, ArrowDownSvgIcon, ArrowNextSvgIcon, ArrowUpSvgIcon } from "../icon__svg-icon/svg-icons";
import { IconButton } from "../icon-button/IconButton";
import { Tooltip, TooltipPosition } from "../tooltip/Tooltip";
import { observer } from "mobx-react-lite";
import { useContentDownPanelStore } from "../../mobx__mobx-shared-store__react-context/ContentDownPanelStoreMobxContext";
import { useContentNavStore } from "../../mobx__mobx-shared-store__react-context/ContentNavStoreMobxContext";
import {
  ThreeDotsAnimatedCssIcon,
  ThreeDotsAnimatedCssIconPosition
} from "../icon__css-icon__three-dots-animated-css-icon/ThreeDotsAnimatedCssIcon";
import { useRouter } from "../../stores/RouterStore";

interface IControlWinContentBarProps {
}

export const LeftControlWinContentBar: FC<IControlWinContentBarProps> = observer( ( {children} ) => {
  let contentDownPanelStore = useContentDownPanelStore();

  return (
    <div className="content-bar__control content-bar__control_left" toggle-state={ contentDownPanelStore.state }>
      {children}
    </div>
  );

} );

export const RightControlWinContentBar: FC<IControlWinContentBarProps> = observer( ( {children} ) => {
  let contentDownPanelStore = useContentDownPanelStore();

  return (
    <div className="content-bar__control content-bar__control_right" toggle-state={ contentDownPanelStore.state }>
      {children}
    </div>
  );

} );


export const ToggleContentBarButton: FC = observer( ( {} ) => {
  let contentDownPanelStore = useContentDownPanelStore();

  const togglePanelIconButton_click = () => contentDownPanelStore.toggle();

  return (
    <IconButton className="down-aside-bar__toggle-button_toggle-panel"
                toggle-state={contentDownPanelStore.state}
                onClick={ togglePanelIconButton_click }>
      <ThreeDotsAnimatedCssIcon position={ ThreeDotsAnimatedCssIconPosition.Horizontal }
                                state={ contentDownPanelStore.state }/>
    </IconButton>
  );

} );

/// TODO: [refactoring][extract] Extract buttons
export const GoPrevAnchorContentControlButton = observer(({}) => {
  let contentNav = useContentNavStore();


  return (
    <IconButton className="control-bar__button"
                onClick={()=>contentNav.goPrevAnchor()}
                disabled={!contentNav.isPrevAnchor}>
      <ArrowUpSvgIcon className="control-bar__svg-icon"/>
      <Tooltip position={TooltipPosition.LeftCenter}>
        Предыдущий подраздел
      </Tooltip>
    </IconButton>
  );
});
export const GoNextAnchorContentControlButton = observer(() => {
  let contentNav = useContentNavStore();


  return (
    <IconButton className="control-bar__button"
                onClick={() => contentNav.goNextAnchor()}
                disabled={!contentNav.isNextAnchor}>
      <ArrowDownSvgIcon className="control-bar__svg-icon"/>
      <Tooltip position={ TooltipPosition.LeftCenter }>
        Следующий подраздел
      </Tooltip>
    </IconButton>
  );
});

export const GoPrevPageContentControlButton = observer(() => {
  let contentNav = useContentNavStore();


  return (
    <IconButton className="control-bar__button"
                onClick={()=>contentNav.goPrevPage()}
                disabled={!contentNav.isPrevPage}>
      <ArrowBeforeSvgIcon className="control-bar__svg-icon"/>
      <Tooltip position={ TooltipPosition.RightCenter }>
        Предыдущая страница
      </Tooltip>
    </IconButton>
  );
});
export const GoNextPageContentControlButton = observer(() => {
  let contentNav = useContentNavStore();


  return (
    <IconButton className="control-bar__button control-bar__button_next-page"
                onClick={()=>contentNav.goNextPage()}
                disabled={!contentNav.isNextPage}>
      <ArrowNextSvgIcon className="control-bar__svg-icon"/>
      <Tooltip position={ TooltipPosition.LeftCenter }>
        Следующая страница
      </Tooltip>
    </IconButton>
  );
});


