import "./slider-second-space.layout.scss";

import React, { ReactElement, useLayoutEffect } from "react";
import {FC} from "react"
import { useAppDriver } from "../../react__hooks/app-driver-control.hook";
import { useShareStores } from "../../mobx";
import { observer } from "mobx-react-lite";
import { Media } from "../../components/media/Media";
import { If } from "../../components/if-operator/If";
import { useCssPropertyAsNumber } from "../../react__hooks/media-hook";
import { CssPropertyName } from "../../CssPropertyName";

interface HTMLDivElement{
  toggle:boolean;
}


interface ISliderSecondSpaceLayoutProps{
    driver: ReactElement;
    content: ReactElement;
    aside?: ReactElement;
}

const SliderSecondSpaceLayout: FC<ISliderSecondSpaceLayoutProps> = observer( ( { driver, content,aside } ) => {
  let { appStore } = useShareStores();
  let asideMediaSize = useCssPropertyAsNumber( CssPropertyName.AppRightLayoutShowMedia );
  let asideMediaQuery = !isNaN( asideMediaSize ) ? `(min-width:${ asideMediaSize }px)` : ``;

  const isRenderAsideLayout = () => aside != null;


  return (
    <div className="float-content" toggle={ appStore.driverToggle.state }>
      <div className="float-content__driver-layout">
        { driver }
      </div>
      <div className="float-content__content-layout">
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
