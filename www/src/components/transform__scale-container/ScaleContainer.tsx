import React, {
  createContext,
  FC, MouseEventHandler,
  ReactElement,
  ReactNode,
  SyntheticEvent, TransitionEventHandler,
  useContext, useEffect,
  useLayoutEffect, useRef,
  useState
} from "react";
import { default as cn } from "classnames";
import { RippleLayer } from "../ripple-layer/RippleLayer";

enum ScaleStatus {
  On,
  Off,
  Wait,
}

export type ReactMouseHandler= <T>(event?:React.MouseEvent<T>)=>void
export type ReactTransitionHandler= <T>(event?:React.TransitionEvent<T>)=>void

export interface IUseScaleBaseParams {
  controlId?:string;
}


export const ScaleContext = createContext( ScaleStatus.Off );
export const useScale = ( controlId?: string ) => useContext( ScaleContext );
export const useScaleControl = ( controlId: string ): IUseScaleControl | undefined =>
  scaleControlMap.get( controlId );
export const useScaleBase = ( { controlId }: IUseScaleBaseParams ) => {
  let [status, setStatus] = useState( ScaleStatus.Off );
  let control = useRef<IUseInternalScaleControl>( {
    on: () => {setStatus( ScaleStatus.On );console.log('controlId',controlId)},
    off: () => {setStatus( ScaleStatus.Off );console.log('controlId',controlId)},
    wait: () => {setStatus( ScaleStatus.Wait );console.log('controlId',controlId)}
  } );


  const setScaleStatus = ( scaleStatus: ScaleStatus ) => {
    if ( scaleStatus === ScaleStatus.On && status === ScaleStatus.On ) {
      control.current.wait();
    } else if ( scaleStatus === ScaleStatus.On && status === ScaleStatus.Off ) {
      control.current.on();
    } else if ( scaleStatus === ScaleStatus.Off && status === ScaleStatus.On ) {
      control.current.off();
    }
  };

  const onClick: ReactMouseHandler = event => {
    setScaleStatus( ScaleStatus.On );
  };
  const onTransitionEnd: ReactTransitionHandler = event => {
    setScaleStatus( ScaleStatus.Off );
  };

  useEffect( () => {
    if ( controlId ) {
      scaleControlMap.set( controlId, control.current );
    }

    return () => {
      if ( controlId ) {
        scaleControlMap.delete( controlId );
      }
    };
  }, [] );
  useLayoutEffect( () => {
    if ( status === ScaleStatus.Wait ) {
      setStatus( ScaleStatus.On );
    }
  }, [status] );

  return { status, onClick, onTransitionEnd };
};


export interface IUseScaleControl {
  on():void;
  off():void;
}
export interface IUseInternalScaleControl extends IUseScaleControl{
  wait():void;
}

const scaleControlMap = new Map<string, IUseInternalScaleControl>();


interface IScaleContainerProps {
  children: ReactNode | ReactElement[];
}

export const ScaleContainer: FC<IScaleContainerProps> = ( { children } ) => {
  let status = useScale();
  let classes = cn( "scale-container", {
    [ "scale-container_scale-active" ]: status === ScaleStatus.On
  } );


  return (
    <div className={ classes }>{ children }</div>
  );
};



interface IScaleContainerProviderProps {
  controlId?:string;
  children: ReactElement | ReactElement[];
}

export const ScaleContainerProvider: FC<IScaleContainerProviderProps> = ( { controlId,children } ) => {
  let { status, onClick, onTransitionEnd } = useScaleBase( { controlId } );


  return (
    <ScaleContext.Provider value={status}>
      <div className="scale-container-provider"
           onClick={onClick}
           onTransitionEnd={onTransitionEnd}>
        {children}
      </div>
    </ScaleContext.Provider>
  )
};




type ChildrenRenderCallback<T=null,U=null>=
  (params:{
    onClick:ReactMouseHandler,
    onTransitionEnd:ReactTransitionHandler
  })=>ReactElement | ReactElement[];
interface IScaleContainerContextProviderProps {
  controlId?:string;
  children: ChildrenRenderCallback;
}

export const ScaleContainerContextProvider: FC<IScaleContainerContextProviderProps> = ( { controlId,children } ) => {
  let { status, onClick, onTransitionEnd } = useScaleBase( { controlId } );


  return (
    <ScaleContext.Provider value={status}>
      {children({onClick,onTransitionEnd})}
    </ScaleContext.Provider>
  )
};