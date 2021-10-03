import React, { FC, ReactElement } from "react";
import {useSharedStore} from "../../stores/shared-store";
import {observer} from "mobx-react-lite";
import {
    CentredContentSlideLayer,
    ContentSlideLayer,
    DriverSlideLayer,
    SlideLayer
} from "../layers/slide-layer/SlideLayer";


interface IAppContentProps {
  className?:string;
}

export const AppContent: FC<IAppContentProps> = observer<IAppContentProps>(({children}) => {


    return (
        <SlideLayer>
            <DriverSlideLayer>
                <div className="driver">
                    <span>top</span>
                    <span>bottom</span>
                </div>
            </DriverSlideLayer>
            <ContentSlideLayer>
                {children}
            </ContentSlideLayer>
        </SlideLayer>
    );
});