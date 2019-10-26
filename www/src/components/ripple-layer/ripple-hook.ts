import React, { useCallback, useState } from "react";
import { Ripple, RippleModel } from "./Ripple";

export const useRipple = ( {id=Ripple.generateRippleUiUid(),isFromCenter=false} ) => {
  let [ripples, setRipple] = useState<RippleModel[]>( [] );


  let onClick = useCallback( ( { currentTarget, clientX, clientY }: React.MouseEvent<HTMLElement> ) => {
    // if ( currentTarget.id !== id ) {
    //   throw new Error( `currentTarget id "${ currentTarget.id } must be equal set from ui id "${ id }."` );
    // }

    let { width, height, top, left } = currentTarget.getBoundingClientRect();
    let position = {
      x: clientX - left,
      y: clientY - top
    };


    let ripple = Ripple.createRippleModel( {
      isFromCenter,

      width,
      height,

      bg:`rgba(0,0,0,.1)`,

      position
    } );

    setRipple( [...ripples, ripple] );
  }, [ripples] );
  let onAnimationEnd = useCallback( ( { target }: React.AnimationEvent<HTMLElement> ) => {
    let removeRipple = ripples.find( ripple => ripple.id === (target as HTMLElement).id );

    if ( !removeRipple ) {
      throw new Error();
    }

    setRipple( ripples.filter( ripple => ripple !== removeRipple ) );

  }, [ripples] );


  return { ripples, onClick, onAnimationEnd };
};