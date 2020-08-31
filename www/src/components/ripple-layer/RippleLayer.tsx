import React, { CSSProperties, FC } from "react";
import { useRipple } from "./ripple-hook";
import { Ripple } from "./Ripple";

interface IRippleLayerProps {
  isFromCenter?: boolean;
}

const styles:CSSProperties = {
  width:`100%`,
  height:`100%`,

  overflow:`hidden`,

  position: `absolute`,
  left: `0`,
  top: `0`
};

export const RippleLayer: FC<IRippleLayerProps> = ( { isFromCenter = false } ) => {
  let id = Ripple.generateRippleUiUid();
  let { ripples, onClick, onAnimationEnd } = useRipple( { id, isFromCenter } );

  return (
    <div id={ id }
         className="ripple-layer"
         style={ styles }
         onClick={ onClick }
         onAnimationEnd={ onAnimationEnd }>
      { ripples.map( props => <div {...props} key={ props.id }></div> ) }
    </div>
  );
};