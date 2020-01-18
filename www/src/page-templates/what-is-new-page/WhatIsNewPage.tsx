import "./what-is-new.page.scss";

import React from "react"
import {FC} from "react"
import SliderSecondSpaceLayout from "../../layouts/slider-second-space-layout/SliderSecondSpaceLayout";
import { ContentLayout } from "../../layouts/content-layout/ContentLayout";
import { WinContent } from "../../components/win__content/WinContent";
import { WhatIsNewPageAppDriver } from "../../components/app-driver__what-is-new-page/WhatIsNewPageAppDriver";
import { observer } from "mobx-react-lite";
import { BehaviorNotification as CustomNotification} from "../../components/notification__behavior-notification/BehaviorNotification";
import { ControlBarContent } from "../../components/content__control-bar/ControlBarContent";
import {
  LeftControlWinContentBar,
  RightControlWinContentBar
} from "../../components/content__aside-bar_win-control-all/ControlWinContentBar";
import { AsideBarContent } from "../../components/content__aside-bar/AsideBarContent";
import { InnovationCoverWinContent } from "../../components/win__content_innovation-cover/InnovationCoverWinContent";
import { ContentUnderCoverBar } from "../../components/content__under-cover-bar/ContentUnderCoverBar";
import { InnovationListWinContent } from "../../components/win__content__innovation-list/InnovationListWinContent";
import { DownPanelContent } from "../../components/content__down-panel/DownPanelContent";
import { FilterDropdown } from "../../components/dropdown__filter-dropdown/FilterDropdown";
import { WinDropdownMenuFilterDropdown } from "../../components/dropdown__filter-dropdown__dropdown-menu__win/WinDropdownMenuFilterDropdown";


interface IWhatIsNewPageProps{

}

const WhatIsNewPage: FC<IWhatIsNewPageProps> = observer(( {  } ) => {

  return (
    <SliderSecondSpaceLayout
      driver={ <WhatIsNewPageAppDriver/> }
      content={
        <ContentLayout>
          <CustomNotification/>
          <div className="content-layout-grid">
            <div className="content-layout-grid-item__control-bar">
              <ControlBarContent>
                <FilterDropdown>
                  <WinDropdownMenuFilterDropdown/>
                </FilterDropdown>
              </ControlBarContent>
            </div>
            <div className="content-layout-grid-item__aside-bar_left">
              <AsideBarContent className="content__aside-bar_left">
                <LeftControlWinContentBar/>
              </AsideBarContent>
            </div>
            <div className="content-layout-grid-item__aside-bar_main">
              <main>
                <InnovationCoverWinContent/>
                <ContentUnderCoverBar/>
                <InnovationListWinContent/>
              </main>
            </div>
            <div className="content-layout-grid-item__aside-bar_right">
              <AsideBarContent className="content__aside-bar_right">
                <RightControlWinContentBar/>
              </AsideBarContent>
              <DownPanelContent/>
            </div>
          </div>
        </ContentLayout>
      }/>
  );

});

export default WhatIsNewPage;


