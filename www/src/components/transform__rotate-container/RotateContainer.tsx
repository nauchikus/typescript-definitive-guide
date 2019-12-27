import React, { FC, ReactElement } from "react";
import { default as cn } from "classnames";

interface IRotateContainerProps {
  isToggle: boolean;
  className?:string;
  children: ReactElement | ReactElement[];
}

export const RotateContainer: FC<IRotateContainerProps> = ( { isToggle, className, children } ) => {
  let classes = cn( "rotate-container", className, {
    [ "rotate-container_rotate_180deg" ]: isToggle
  } );

  return (
    <div className={classes}>{children}</div>
  );
};