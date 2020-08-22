import React, { createContext, useLayoutEffect, useRef } from 'react';


export const MobxSharedContext = createContext(  );


export const SharedPage = ( { location, children } ) => {
  return children;
};

