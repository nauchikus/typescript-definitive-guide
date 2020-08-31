import { RouterStore } from "../stores/RouterStore";
import { useLayoutEffect } from "react";

export const useRouterUpdater = (location: Location, router: RouterStore) => {
  useLayoutEffect(() => {
    router.setLocation(location);
    router.scrollToAnchor(router.anchor);

    return () => router.reset();
  }, [location.hash]);
}
