import React, { FC, ReactNode, useRef } from "react";
import { ScrollProviderCallback, ScrollProviderContext } from "../../react__hooks/scroll-provider-hook";

interface IAppDriverProps {
  children:ReactNode|ReactNode[];
}

export const AppDriver: FC<IAppDriverProps> = ( { children } ) => {
  let appDriverRef = useRef<HTMLDivElement|null>(null);
  let scrollCallbackRef = useRef<ScrollProviderCallback>(({x=0,y=0})=>{
    appDriverRef.current?.scrollTo( x, y );
  });

  return (
    <ScrollProviderContext.Provider value={scrollCallbackRef.current}>
      <div ref={appDriverRef} className="app-driver">
        { children }
      </div>
    </ScrollProviderContext.Provider>


  );
};
