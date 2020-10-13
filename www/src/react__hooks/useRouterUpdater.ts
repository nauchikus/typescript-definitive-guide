import { RouterStore } from "../stores/RouterStore";
import { useLayoutEffect } from "react";
import { useLocation } from "@reach/router";

export const useRouterUpdater = (router: RouterStore) => {
  let location = useLocation();

  useLayoutEffect(() => {
    router.setLocation(location);
    router.scrollToAnchor(router.anchor);

    return () => router.reset();
  }, [location.hash, location.search]);
}
