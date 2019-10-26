import "./slider-second-space.layout.scss";

import React, { ReactElement, useLayoutEffect } from "react";
import {FC} from "react"
import { useAppDriver } from "../../react-hooks/app-driver-control.hook";
import { useStores } from "../../mobx";
import { observer } from "mobx-react-lite";


interface ISliderSecondSpaceLayoutProps{
    driver: ReactElement;
    content: ReactElement;
}

const SliderSecondSpaceLayout: FC<ISliderSecondSpaceLayoutProps> = observer( ( { driver, content } ) => {
  let { appStore } = useStores();

  return (
    <div className="float-content" toggle={ appStore.driverToggle.state }>
      <div className="float-content__left-layout">
        { driver }
      </div>
      <div className="float-content__center-layout">
        { content }
      </div>
    </div>
  );
} );

export default SliderSecondSpaceLayout;
