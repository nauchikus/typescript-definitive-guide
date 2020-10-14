import React,{FC} from  'react';
import {default as cn} from 'classnames';
import { ToggleUiState } from "../../stores/AppStateService";
import { observer } from "mobx-react-lite";
import { useAppDriver, useShareStores } from "../../mobx__entry/SharedPageMobxEntry";

interface MainNavAnimatedCssIconProps {
  className?: string;
  state: ToggleUiState;
}

export const MainNavAnimatedCssIcon: FC<MainNavAnimatedCssIconProps> = observer(({ className, state }) => {
  let appDriver = useAppDriver();

  let viewboxClasses = cn("css-icon-viewbox", className);
  let iconClasses = cn({
    ["main-nav-animated-css-icon"]: true,
    ["main-nav-animated-css-icon_on"]: state === ToggleUiState.Close,
    ["main-nav-animated-css-icon_placeholder"]: !appDriver.isBrowserInit,
  });


  return (
    <div className={viewboxClasses}>
      <div className={iconClasses}>
        <div className="main-nav-animated-css-icon__line"></div>
        <div className="main-nav-animated-css-icon__line"></div>
        <div className="main-nav-animated-css-icon__line"></div>
      </div>
    </div>
  );
});
