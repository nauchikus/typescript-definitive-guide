import React, { FC, ReactNode } from "react";
import { default as cn } from "classnames";

export enum TooltipPosition {
  Top="top",
  Right="right",
  Bottom="bottom",
  Left="left",

  BottomCenter="bottomCenter",
  BottomRight="bottomRight",
  BottomLeft="bottomLeft",
  LeftCenter="leftCenter",
  RightCenter="rightCenter",
}

interface ITooltipProps {
  children: ReactNode | ReactNode[];
  className?:string;
  position:TooltipPosition

}

export const Tooltip: FC<ITooltipProps> = ( { position,children, className } ) => {
  let classes = cn( "tooltip", className,{
    [ "tooltip_bottom-center" ]: position === TooltipPosition.BottomCenter,
    // [ "tooltip__tail_bottom-center" ]: position === TooltipPosition.BottomCenter,

    [ "tooltip_bottom-right" ]: position === TooltipPosition.BottomRight,
    // [ "tooltip__tail_bottom-right" ]: position === TooltipPosition.BottomRight,

    [ "tooltip_bottom-left" ]: position === TooltipPosition.BottomLeft,
    [ "tooltip_left-center" ]: position === TooltipPosition.LeftCenter,
    [ "tooltip_right-center" ]: position === TooltipPosition.RightCenter,
    // [ "tooltip__tail_bottom-left" ]: position === TooltipPosition.BottomLeft,
  } );

  return (
    <div className={ classes }>
      <span>{ children }</span>
    </div>
  );
};