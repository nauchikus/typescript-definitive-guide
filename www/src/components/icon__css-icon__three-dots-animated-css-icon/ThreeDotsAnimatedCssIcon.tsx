import React, { FC, useEffect, useState } from "react";
import { ToggleUiState } from "../../stores/AppStateService";
import { default as cn } from "classnames";

interface IThreeDotsAnimatedCssIconProps {
  position?:ThreeDotsAnimatedCssIconPosition;
  className?: string;
  state: ToggleUiState;
}

const DEFAULT_ANIMATION_CLASS=`three-dots-animation-css-icon_animation_default`;
const OPEN_ANIMATION_CLASS = `three-dots-animation-css-icon_animation_open`;
const CLOSE_ANIMATION_CLASS = `three-dots-animation-css-icon_animation_close`;

const getPositionClass = ( position: ThreeDotsAnimatedCssIconPosition ) =>
  position === ThreeDotsAnimatedCssIconPosition.Vertical ?
    `three-dots-animated-css-icon_position_vertical` :
    `three-dots-animated-css-icon_position_horizontal`;
const getDefaultClasses = (...classes:(string|undefined)[]) => cn(
  "three-dots-animated-css-icon",
  DEFAULT_ANIMATION_CLASS,
  ...classes
);

export enum ThreeDotsAnimatedCssIconPosition {
  Horizontal,
  Vertical
}

export const ThreeDotsAnimatedCssIcon: FC<IThreeDotsAnimatedCssIconProps> = ( {position=ThreeDotsAnimatedCssIconPosition.Vertical,state,className} ) => {
  let [isInit, setIsInit] = useState(false);
  let [classes, setClasses] = useState( getDefaultClasses(
    className,
    getPositionClass(position)
  ) );

  const onTransitionEnd = ( event: React.TransitionEvent ) => {
    setClasses( getDefaultClasses(
      className,
      getPositionClass(position)
    ) );
  };


  useEffect( () => {
    if ( isInit ) {
      setClasses( getDefaultClasses(
        className,
        getPositionClass(position),
        state === ToggleUiState.Open ? OPEN_ANIMATION_CLASS : CLOSE_ANIMATION_CLASS
        )
      );
    } else {
      setIsInit( true );
    }
  }, [state] );

  return (
    <div className={classes} toggle-state={state} onTransitionEnd={onTransitionEnd}>
      <div className="three-dots-animation-css-icon__dot"></div>
      <div className="three-dots-animation-css-icon__dot"></div>
      <div className="three-dots-animation-css-icon__dot"></div>
    </div>
  );
};