import React, { useEffect, useLayoutEffect } from 'react';
import { useRouter } from './stores/RouterStore';



export const SharedPage = ( { location, children } ) => {
  let router = useRouter();
  router.setLocation(location);

  useLayoutEffect(() => {
    router.scrollToAnchor(router.anchor);
  }, [location.hash]);

  return children;
};

