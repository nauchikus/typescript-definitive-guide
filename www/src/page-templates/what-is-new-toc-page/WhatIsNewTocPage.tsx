import "./what-is-new-toc.page.scss";

import React from "react"
import {FC} from "react"
import SliderSecondSpaceLayout from "../../layouts/slider-second-space-layout/SliderSecondSpaceLayout";
import { WhatIsNewTocPageAppDriver } from "../../components/app-driver__what-is-new-toc-page/WhatIsNewTocPageAppDriver";
import { BehaviorNotification as CustomNotification } from "../../components/notification__behavior-notification/BehaviorNotification";
import { AppFooter } from "../../components/app-footer/AppFooter";
import { ContentLayout } from "../../layouts/content-layout/ContentLayout";
import { ControlBarLayerWinToc } from "../../components/layer__win-toc__control-bar-layer/ControlBarLayerWinToc";
import { ContentLayerWinToc } from "../../components/layer__win-toc__content-layer/ContentLayerWinToc";


interface IWhatIsNewTocPageProps {

}

const WhatIsNewTocPage: FC<IWhatIsNewTocPageProps> = ( {  } ) => {
  return (
    <>
      <SliderSecondSpaceLayout
        driver={ <WhatIsNewTocPageAppDriver/> }
        content={
          <ContentLayout
            controlBar={<ControlBarLayerWinToc/>}
            content={ <ContentLayerWinToc/> }/>
        }/>
      <CustomNotification/>
    </>
  );

};

export default WhatIsNewTocPage;
