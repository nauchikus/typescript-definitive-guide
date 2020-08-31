import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactElement, SyntheticEvent } from "react";
import { default as cn } from "classnames";
import {
  ScaleContainer,
  ScaleContainerContextProvider,
  ScaleContainerProvider
} from "../transform__scale-container/ScaleContainer";

interface IScaleButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  scaleControlId?:string;
  className?:string;
  children: ReactElement | ReactElement[];
}

export const ScaleButton: FC<IScaleButtonProps> = ( { scaleControlId,className, children,onClick,onTransitionEnd,...props } ) => {
  let classes = cn( "scale-button", className );


  return <ScaleContainerContextProvider controlId={ scaleControlId }>
    { ( { onClick: onScaleClick, onTransitionEnd: onScaleTransitionEnd } ) => {
      const click = ( event: React.MouseEvent<HTMLButtonElement> ) => {
        onClick && onClick( event );
        onScaleClick( event );
      };
      const transitionEnd = ( event: React.TransitionEvent<HTMLButtonElement> ) => {
        onTransitionEnd && onTransitionEnd( event );
        onScaleTransitionEnd( event );
      };

      return (
        <button className={ classes } onClick={ click } onTransitionEnd={transitionEnd} { ...props }>
          <ScaleContainer>
            { children }
          </ScaleContainer>
        </button>
      );
    } }
  </ScaleContainerContextProvider>;
};
