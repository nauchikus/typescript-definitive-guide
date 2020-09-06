import { useLayoutEffect } from "react";
import { useRouter } from "../stores/RouterStore";


export const useHtmlLink = () => {
  let router = useRouter();

  const link__clickHandler = ( event: Event ) => {
    event.preventDefault();

    let link = event.target as HTMLAnchorElement;

    router.goTo(link.href);
  };
  const addEventListeners = () => {
    document
      .querySelectorAll( `.content__html-content-wrapper a` )
      .forEach( link => link.addEventListener( "click", link__clickHandler ) );
  };
  const removeEventListeners = () => {
    document
      .querySelectorAll( `.content__html-content-wrapper a` )
      .forEach( link => link.removeEventListener( "click", link__clickHandler ) );
  };

  useLayoutEffect( () => {
    addEventListeners();


    return () => {
      removeEventListeners();
    };
  }, [router.pathname] );
};
