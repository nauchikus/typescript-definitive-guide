import "./what-is-new.page.scss";

import React from "react"
import {FC} from "react"
import SliderSecondSpaceLayout from "../../layouts/slider-second-space-layout/SliderSecondSpaceLayout";


interface IWhatIsNewPageProps {
}

const WhatIsNewPage: FC<IWhatIsNewPageProps> = ( {  } ) => {
    // let [[translation]]=useTranslator<[BookChapterPage]>(LocalizationPaths.BookChaptersPage);
    // let {gui}=translation;

    return (
        <SliderSecondSpaceLayout
            driver={ <div className="fill tomato"></div> }
            content={ <div className="fill pink h-x3 lines-x"></div> }/>
    );

};

export default WhatIsNewPage;
