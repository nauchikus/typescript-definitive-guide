import "./slider-second-space.layout.scss";

import React, { FC, ReactElement, useLayoutEffect } from "react";
import { default as cn } from "classnames";
import { observer } from "mobx-react-lite";
import { Media } from "../../components/media/Media";
import { If } from "../../components/if-operator/If";
import { useCssPropertyAsNumber } from "../../react__hooks/media-hook";
import { CssPropertyName } from "../../CssPropertyName";
import { useAppDriver } from "../../mobx__entry/SharedPageMobxEntry";
import { ToggleUiState } from "../../stores/AppStateService";

interface HTMLDivElement{
  toggle:boolean;
}


interface ISliderSecondSpaceLayoutProps{
    driver: ReactElement;
    content: ReactElement;
    aside?: ReactElement;
}

const SliderSecondSpaceLayout: FC<ISliderSecondSpaceLayoutProps> = observer( ( { driver, content,aside } ) => {
  let appDriver = useAppDriver();
  let asideMediaSize = useCssPropertyAsNumber( CssPropertyName.AppRightLayoutShowMedia );
  let asideMediaQuery = !isNaN( asideMediaSize ) ? `(min-width:${ asideMediaSize }px)` : ``;

  const isRenderAsideLayout = () => aside != null;

  let driverLayoutClasses = cn(`float-content__driver-layout`, {
    ["app-driver__driver-layout_placeholder"]: !appDriver.isBrowserInit
  });
  let contentLayoutClasses = cn(`float-content__content-layout`, {
    ["app-driver__content-layout_placeholder"]: !appDriver.isBrowserInit
  });



  return (
    <div className="float-content" toggle-state={ appDriver.state }>
      <div className={driverLayoutClasses}>
        { driver }
      </div>
      <div className={contentLayoutClasses}>
        {content}
      </div>
      <If condition={isRenderAsideLayout()}>
        <Media query={asideMediaQuery}>
          <div className="float-content__aside-layout">
            {aside}
          </div>
        </Media>
      </If>
    </div>
  );
} );

export default SliderSecondSpaceLayout;
