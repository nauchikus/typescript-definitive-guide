import "./what-is-new-toc.page.scss";

import React from "react"
import {FC} from "react"
import SliderSecondSpaceLayout from "../../layouts/slider-second-space-layout/SliderSecondSpaceLayout";


interface IWhatIsNewTocPageProps {
}

const WhatIsNewTocPage: FC<IWhatIsNewTocPageProps> = ( {  } ) => {
    // let [[translation]]=useTranslator<[BookChapterPage]>(LocalizationPaths.BookChaptersPage);
    // let {gui}=translation;

    return (
        <SliderSecondSpaceLayout
            driver={ <div className="fill tomato"></div> }
            content={ <div className="fill pink h-x3 lines-x"></div> }/>
    );

};

export default WhatIsNewTocPage;
