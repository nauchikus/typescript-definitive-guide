import { useCallback, useLayoutEffect } from "react";
import { RouterStore } from "../stores/RouterStore";

export const useNativeLinkDisableDefaultBehavior = (routerStore: RouterStore) => {
  // let handler = useCallback((event: MouseEvent) => {
  //   event.preventDefault();
  //   event.stopImmediatePropagation();
  //
  //   let link = (event.target as HTMLAnchorElement);
  //
  //   console.log(`link: ${link.href}`);
  //
  //   if (!link.href) {
  //     return;
  //   }
  //
  //
  //   routerStore.goTo(link.href);
  // }, []);
  //
  // useLayoutEffect(() => {
  //   document
  //     .querySelectorAll(`a`)
  //     .forEach(link => link.addEventListener(`click`, handler, false));
  //
  //   console.log(`ADD`);
  //
  //   return () => {
  //     console.log(`REMOVE`);
  //     document
  //       .querySelectorAll(`a`)
  //       ?.forEach(link => link.removeEventListener(`click`, handler));
  //   }
  // }, [routerStore.pageName]);
}
