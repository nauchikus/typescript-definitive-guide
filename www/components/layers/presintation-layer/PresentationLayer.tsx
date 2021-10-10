import React, {FC} from "react";
import {default as cn} from "classnames";

export interface PresentationLayerProps {
    className?: string;
}

export const PresentationLayer: FC<PresentationLayerProps> = ({className, children}) => {
    let classes  = cn("presentation-layer", className)
    return (
        <div className={classes}>
            {children}
        </div>
    );
};


