import "./slider-second-space.layout.scss";

import React, { ReactElement, useLayoutEffect } from "react";
import {FC} from "react"
import { useAppDriver } from "../../react__hooks/app-driver-control.hook";
import { useShareStores } from "../../mobx";
import { observer } from "mobx-react-lite";

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

  return (
    <div className="float-content" toggle={ appStore.driverToggle.state }>
      <div className="float-content__driver-layout">
        { driver }
      </div>
      <div className="float-content__content-layout">
        {content}
      </div>
    </div>
  );
} );

export default SliderSecondSpaceLayout;
