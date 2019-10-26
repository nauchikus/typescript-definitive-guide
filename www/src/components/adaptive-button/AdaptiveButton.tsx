import React, { FC, ReactElement } from "react";
import { default as cn } from "classnames";
import { RippleLayer } from "../ripple-layer/RippleLayer";


interface IAdaptiveButtonProps {
  className?: string;
  children: ReactElement | ReactElement[];
}

export const AdaptiveButton: FC<IAdaptiveButtonProps> = ( { className, children } ) => {
  let classes = cn( className,{
    ['adaptive-button']:true
  } );


  return (
    <button className={ classes }>
      <RippleLayer/>
      { children }
    </button>
  );
};