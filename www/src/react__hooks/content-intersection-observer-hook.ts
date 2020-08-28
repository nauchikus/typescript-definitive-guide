import { useLayoutEffect } from "react";
import { useContentIntersectionObserverStore } from "../react__context/ContentIntersectionObserverStoreContext";
import { useRouter } from "../stores/RouterStore";
import { GlobalObservables } from "../rxjs/global-observables";
import { debounceTime } from "rxjs/operators";

export const useContentIntersectionObserver = () => {
  let router = useRouter();
  let contentIntersectionObserver = useContentIntersectionObserverStore();

  useLayoutEffect( () => {
    const init = () => {
      router.scrollToAnchor(router.anchor);
      contentIntersectionObserver.init();
    };
    const reinit = () => {
      contentIntersectionObserver.init();
    }
    const destroy = () => {
      contentIntersectionObserver.destroy();
    }


    init();


    let subscription = GlobalObservables.resizeGlobalObserver
      .pipe(debounceTime(2000))
      .subscribe(() => {
        // destroy();
        // reinit();
      });


    return () => {
      subscription.unsubscribe();
      destroy();
    }
  }, [] );
};
