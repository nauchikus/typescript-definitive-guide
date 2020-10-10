import "./what-is-new.page.scss";

import React from "react"
import {FC} from "react"
import SliderSecondSpaceLayout from "../../layouts/slider-second-space-layout/SliderSecondSpaceLayout";
import { ContentLayout } from "../../layouts/content-layout/ContentLayout";
import { WhatIsNewPageAppDriver } from "../../components/app-driver__what-is-new-page/WhatIsNewPageAppDriver";
import { observer } from "mobx-react-lite";
import { ControlBarContent } from "../../components/content__control-bar/ControlBarContent";
import { InnovationCoverWinContent } from "../../components/content__cover_win/InnovationCoverWinContent";
import { ContentUnderCoverBar } from "../../components/content__under-cover-bar/ContentUnderCoverBar";
import { InnovationListWinContent } from "../../components/win__content__innovation-list/InnovationListWinContent";
import { FilterDropdown } from "../../components/dropdown__filter-dropdown/FilterDropdown";
import { WinDropdownMenuFilterDropdown } from "../../components/dropdown__filter-dropdown__dropdown-menu__win/WinDropdownMenuFilterDropdown";
import { ConclusionContent } from "../../components/content__conclusion/ConclusionContent";
import { ContentPlaceholderAutodetect } from "../../components/content__placeholder-autodetect/ContentPlaceholderAutodetect";
import { ContentWithNavLayer } from "../../components/layer__content__content-with-nav/ContentWithNavLayer";


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
            <ContentWithNavLayer>
              <InnovationCoverWinContent/>
              <ContentUnderCoverBar/>
              <InnovationListWinContent/>
              <ContentPlaceholderAutodetect/>
              <ConclusionContent/>
            </ContentWithNavLayer>
          }
        />
      }
    />
  );
} );

export default WhatIsNewPage;


