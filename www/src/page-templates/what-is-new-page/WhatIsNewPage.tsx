import "./what-is-new.page.scss";

import React from "react"
import {FC} from "react"
import SliderSecondSpaceLayout from "../../layouts/slider-second-space-layout/SliderSecondSpaceLayout";
import { IWhatIsNewData } from "../../types/IWhatIsNewToc";
import { ContentLayout } from "../../layouts/content-layout/ContentLayout";
import { WinContent } from "../../components/win__content/WinContent";
import { WhatIsNewPageAppDriver } from "../../components/app-driver__what-is-new-page/WhatIsNewPageAppDriver";


interface IWhatIsNewPageProps{

}
const WhatIsNewPage: FC<IWhatIsNewPageProps> = ( {  } ) => {
    // let [[translation]]=useTranslator<[BookChapterPage]>(LocalizationPaths.BookChaptersPage);
    // let {gui}=translation;

    return (
      <SliderSecondSpaceLayout
        // driver={ <div className="fill tomato"></div> }
        driver={ <WhatIsNewPageAppDriver/> }
        content={ <ContentLayout><WinContent/></ContentLayout> }/>
    );

};

export default WhatIsNewPage;


