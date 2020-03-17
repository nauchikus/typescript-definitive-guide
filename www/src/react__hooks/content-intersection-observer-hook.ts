import { useLayoutEffect } from "react";
import { useContentIntersectionObserverStore } from "../react__context/ContentIntersectionObserverStoreContext";
import { useRouter } from "../stores/RouterStore";

export const useContentIntersectionObserver = () => {
  let router = useRouter();
  let contentIntersectionObserver = useContentIntersectionObserverStore();

  useLayoutEffect( () => {
    router.scrollToAnchor();
    contentIntersectionObserver.init();

    return () => contentIntersectionObserver.destroy();
  }, [] );
};