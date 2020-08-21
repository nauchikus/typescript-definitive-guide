import React, { createContext, useLayoutEffect, useRef } from 'react';
import { createSharedStore } from "./stores/mobx-entry__shared-stores";


export const MobxSharedContext = createContext(  );


export const SharedPage = ( { location, children } ) => {
  console.log(`@@@@@@@@@@@@@@`);
  useLayoutEffect(()=> {
    console.log( `SharedPage`);
  }, [])


  return children;
};

