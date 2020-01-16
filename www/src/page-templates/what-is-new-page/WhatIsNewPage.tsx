import "./what-is-new.page.scss";

import React from "react"
import {FC} from "react"
import SliderSecondSpaceLayout from "../../layouts/slider-second-space-layout/SliderSecondSpaceLayout";
import { ContentLayout } from "../../layouts/content-layout/ContentLayout";
import { WinContent } from "../../components/win__content/WinContent";
import { WhatIsNewPageAppDriver } from "../../components/app-driver__what-is-new-page/WhatIsNewPageAppDriver";
import { observer } from "mobx-react-lite";
import { BehaviorNotification as CustomNotification} from "../../components/notification__behavior-notification/BehaviorNotification";


interface IWhatIsNewPageProps{

}

const WhatIsNewPage: FC<IWhatIsNewPageProps> = observer(( {  } ) => {

  return (
    <SliderSecondSpaceLayout
      driver={ <WhatIsNewPageAppDriver/> }
      content={
        <ContentLayout>
          <CustomNotification/>
          <WinContent/>
        </ContentLayout>
      }/>
  );

});

export default WhatIsNewPage;


