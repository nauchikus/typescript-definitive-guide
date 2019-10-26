import React, { createContext, FC, ReactElement, useContext, useLayoutEffect, useState } from "react";
import { default as cn } from "classnames";
import { RippleLayer } from "../ripple-layer/RippleLayer";

enum ScaleStatus {
  On,
  Off,
  Wait,
}

export const ScaleContext = createContext( ScaleStatus.Off );
export const useScale = () => useContext( ScaleContext );


interface IScaleButtonContainerProps {
  children: ReactElement | ReactElement[];
}

export const ScaleButtonContainer: FC<IScaleButtonContainerProps> = ( { children } ) => {
  let status = useScale();
  let classes = cn( "scale-button", {
    [ "scale-button_scale-active" ]: status === ScaleStatus.On
  } );

  return (
    <div className={ classes }>{ children }</div>
  );
};



interface IScaleButtonProviderProps {
  children: ReactElement | ReactElement[];
}

export const ScaleButtonProvider: FC<IScaleButtonProviderProps> = ( { children } ) => {
  let [status, setStatus] = useState(ScaleStatus.Off);

  const setScaleStatus = ( scaleStatus:ScaleStatus ) => {
    if ( scaleStatus === ScaleStatus.On && status === ScaleStatus.On ) {
      setStatus( ScaleStatus.Wait );
    } else if ( scaleStatus === ScaleStatus.On && status === ScaleStatus.Off ) {
      setStatus( ScaleStatus.On );
    } else if ( scaleStatus === ScaleStatus.Off && status === ScaleStatus.On ) {
      setStatus( ScaleStatus.Off );
    }
  };

  const onClick = ()=>{
    setScaleStatus( ScaleStatus.On );
  };
  const onTransitionEnd = () => {
    setScaleStatus( ScaleStatus.Off );
  };

  useLayoutEffect( () => {
    if ( status === ScaleStatus.Wait ) {
      setStatus( ScaleStatus.On );
    }
  }, [status] );



  return (
    <ScaleContext.Provider value={status}>
      <div onClick={onClick} onTransitionEnd={onTransitionEnd}>
        {children}
      </div>
    </ScaleContext.Provider>
  )
};