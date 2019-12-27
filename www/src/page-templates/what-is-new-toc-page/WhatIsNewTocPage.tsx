import "./what-is-new-toc.page.scss";

import React from "react"
import {FC} from "react"
import SliderSecondSpaceLayout from "../../layouts/slider-second-space-layout/SliderSecondSpaceLayout";
import { WhatIsNewPageAppDriver } from "../../components/app-driver__what-is-new-page/WhatIsNewPageAppDriver";
import { WhatIsNewTocContentLayout } from "../../layouts/what-is-new-toc-content-layout/WhatIsNewTocContentLayout";


interface IWhatIsNewTocPageProps {

}

const WhatIsNewTocPage: FC<IWhatIsNewTocPageProps> = ( {  } ) => {
    return (
        <SliderSecondSpaceLayout
            driver={ <WhatIsNewPageAppDriver/> }
            content={ <WhatIsNewTocContentLayout/> }/>
    );

};

export default WhatIsNewTocPage;
