import React, {FC} from "react";
import {default as cn} from "classnames";

export interface PresentationLayerProps {
    className?: string;
}

export const A4Layer: FC<PresentationLayerProps> = ({className, children}) => {
    let classes  = cn("a4-layer", className)
    return (
        <div className="a4-layer_base">
            <div className={classes}>
                {children}
            </div>
        </div>
    );
};


