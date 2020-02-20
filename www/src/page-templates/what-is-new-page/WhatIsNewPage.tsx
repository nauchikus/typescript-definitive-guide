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
import { ConclusionContent } from "../../components/content__conclusion/ConclusionContent";
import { EmptyContentPlaceholder } from "../../components/content__placeholder_empty/EmptyContentPlaceholder";
import { ContentPlaceholderAutodetect } from "../../components/content__placeholder-autodetect/ContentPlaceholderAutodetect";
import { AppFooter } from "../../components/app-footer/AppFooter";


interface IWhatIsNewPageProps{

}

const WhatIsNewPage: FC<IWhatIsNewPageProps> = observer( ( {} ) => {

  return (
    <SliderSecondSpaceLayout
      driver={ <WhatIsNewPageAppDriver/> }
      content={
        <ContentLayout
          controlBar={
            <ControlBarContent>
              <div className="content__win-control-bar_wrapper">
                <FilterDropdown>
                  <WinDropdownMenuFilterDropdown/>
                </FilterDropdown>
              </div>
            </ControlBarContent>
          }
          content={
            <div className="content-layout-grid">
              <div className="content-layout-grid-item__aside-bar_left">
                <AsideBarContent className="content__aside-bar_left">
                  <LeftControlWinContentBar/>
                </AsideBarContent>
              </div>
              <div className="content-layout-grid-item__main">
                <main>
                  <InnovationCoverWinContent/>
                  <ContentUnderCoverBar/>
                  <InnovationListWinContent/>
                  <ContentPlaceholderAutodetect/>
                  <ConclusionContent/>
                </main>
              </div>
              <div className="content-layout-grid-item__aside-bar_right">
                <AsideBarContent className="content__aside-bar_right">
                  <RightControlWinContentBar/>
                </AsideBarContent>
                <DownPanelContent/>
              </div>
            </div>
          }
        />
      }
    />
  );
} );

export default WhatIsNewPage;


