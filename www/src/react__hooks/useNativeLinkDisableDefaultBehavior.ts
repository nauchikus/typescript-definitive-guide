import { useCallback, useLayoutEffect } from "react";
import { RouterStore } from "../stores/RouterStore";

export const useNativeLinkDisableDefaultBehavior = (routerStore: RouterStore) => {
  let handler = useCallback((event: MouseEvent) => {
    event.preventDefault();

    let link = (event.target as HTMLAnchorElement);


    if (!link.href) {
      return;
    }


    routerStore.goTo(link.href);
  }, []);

  useLayoutEffect(() => {
    document
      .querySelectorAll(`a`)
      .forEach(link => link.addEventListener(`click`, handler));

    return () => {
      document
        .querySelectorAll(`a`)
        ?.forEach(link => link.removeEventListener(`click`, handler));
    }
  }, [routerStore.pageName]);
}
