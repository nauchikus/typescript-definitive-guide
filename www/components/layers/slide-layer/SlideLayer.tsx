import React, {FC, ReactElement, ReactNode, useLayoutEffect, useRef, useState} from "react";
import {default as cn} from "classnames";
import {useSharedStore} from "../../../stores/shared-store";
import {observer} from "mobx-react-lite";

interface ISlideLayerProps {
  className?: string;
}



export const DriverSlideLayer: FC = ({children}) => (
    <div className="slide-layer__driver">
      <div className="slide-layer__fixed-driver">
          {children}
      </div>
    </div>
);



export const ContentSlideLayer: FC = ({children}) => (
    <>
      <div className="slide-layer__first-empty"></div>
      <div className="slide-layer__content">
        {children}
      </div>
      <div className="slide-layer__last-empty"></div>
    </>
);
export const FillContentSlideLayer: FC = ({children}) => (
    <div className="slide-layer__content_fill-layer">
        {children}
    </div>
);
export const CentredContentSlideLayer: FC = ({children}) => (
    <div className="slide-layer__content_centred-layer">
        {children}
    </div>
);


export const SlideLayer: FC<ISlideLayerProps> = observer<ISlideLayerProps>(({className, children}) => {
  const store = useSharedStore();
  const classes = cn(`layer`, `slide-layer`, className);


  return (
      <div className={classes} toggle={store.appDriverToggle.isToggle.toString()}>
        {children}
      </div>
  );
});
export const Layer: FC<ISlideLayerProps> = ({className, children}) => {
    const classes = cn(`layer`, className);


    return (
        <div className={classes}>
            <FillContentSlideLayer>
                <CentredContentSlideLayer>
                    {children}
                </CentredContentSlideLayer>
            </FillContentSlideLayer>
        </div>
    );
};


