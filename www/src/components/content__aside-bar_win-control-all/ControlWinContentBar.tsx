import React, { FC } from "react";
import { ArrowBeforeSvgIcon, ArrowDownSvgIcon, ArrowNextSvgIcon, ArrowUpSvgIcon } from "../svg-icon/svg-icons";
import { IconButton } from "../icon-button/IconButton";
import { Tooltip, TooltipPosition } from "../tooltip/Tooltip";
import { useWhatIsNewStores } from "../../mobx/MobxWhatIsNewProvider";
import { observer } from "mobx-react-lite";
import { usePageNav } from "../../react__hooks/page-nav-hook";

interface IControlWinContentBarProps {
}

export const LeftControlWinContentBar: FC<IControlWinContentBarProps> = observer( ( {} ) => {
  let { contentDownPanelStore } = useWhatIsNewStores();
  let {hasPrevPage,goPrevPage} = usePageNav();

  return (
    <div className="content-bar__control content-bar__control_left" toggle-state={ contentDownPanelStore.state }>
      <IconButton className="control-bar__button control-bar__button_fade-effect_4"
                  onClick={goPrevPage}
                  disabled={!hasPrevPage()}>
        <ArrowBeforeSvgIcon className="control-bar__svg-icon"/>
        <Tooltip position={ TooltipPosition.RightCenter }>
          Предыдущая страница
        </Tooltip>
      </IconButton>
    </div>
  );

} );
export const RightControlWinContentBar: FC<IControlWinContentBarProps> = observer( ( {} ) => {
  let { contentDownPanelStore } = useWhatIsNewStores();
  let {hasPrevAnchor,hasNextAnchor,hasNextPage,goPrevAnchor,goNextAnchor,goNextPage} = usePageNav();

  return (
    <div className="content-bar__control content-bar__control_right" toggle-state={ contentDownPanelStore.state }>
      <IconButton className="control-bar__button control-bar__button_fade-effect_3"
                  onClick={goPrevAnchor}
                  disabled={!hasPrevAnchor()}>
        <ArrowUpSvgIcon className="control-bar__svg-icon"/>
        <Tooltip position={ TooltipPosition.LeftCenter }>
          Предыдущий подраздел
        </Tooltip>
      </IconButton>
      <IconButton className="control-bar__button control-bar__button_next-page control-bar__button_fade-effect_1"
                  onClick={goNextPage}
                  disabled={!hasNextPage()}>
        <ArrowNextSvgIcon className="control-bar__svg-icon"/>
        <Tooltip position={ TooltipPosition.LeftCenter }>
          Следующая страница
        </Tooltip>
      </IconButton>
      <IconButton className="control-bar__button control-bar__button_fade-effect_2"
                  onClick={goNextAnchor}
                  disabled={!hasNextAnchor()}>
        <ArrowDownSvgIcon className="control-bar__svg-icon"/>
        <Tooltip position={ TooltipPosition.LeftCenter }>
          Следующий подраздел
        </Tooltip>
      </IconButton>
    </div>
  );

} );