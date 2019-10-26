import React, { FC, ReactElement } from "react";
import { default as cn } from "classnames";
import { RippleLayer } from "../ripple-layer/RippleLayer";


interface IDonateButtonProps {
  className?: string;
  children: ReactElement | ReactElement[];
}

export const DonateButton: FC<IDonateButtonProps> = ( { className, children } ) => {
  let classes = cn( className,{
    ['donate-button']:true
  } );


  return (
    <button className={ classes }>
      <RippleLayer/>
      { children }
    </button>
  );
};