import * as NativeUtils from "../utils/native-utils";
import { useBehaviorNotificationAction } from "./behavior-notification-action-hook";
import { useRouter } from "./router-hook";
import { useLayoutEffect } from "react";


export const useCopyToBufferButtonFromNativeMarkup = () => {
  let behaviorNotificationActions = useBehaviorNotificationAction();
  let router = useRouter();

  const copyToBufferButton__clickHandler = ( event: Event ) => {
    let copyToBufferNativeButton = event.target as HTMLButtonElement;
    let anchor = copyToBufferNativeButton.getAttribute( `path` );
    let href = `${ router.origin }${ router.pathname }#${ anchor }`;


    NativeUtils.copyToBuffer( href );
    behaviorNotificationActions.copyLink();
  };
  const addCopyToBufferNativeButtonListeners = () => {
    document
      .querySelectorAll( `.content__button_copy-to-buffer` )
      .forEach( button => button.addEventListener( "click", copyToBufferButton__clickHandler ) );
  };
  const removeCopyToBufferNativeButtonListeners = () => {
    document
      .querySelectorAll( `.content__button_copy-to-buffer` )
      .forEach( button => button.removeEventListener( "click", copyToBufferButton__clickHandler ) );
  };

  useLayoutEffect( () => {
    addCopyToBufferNativeButtonListeners();


    return () => {
      removeCopyToBufferNativeButtonListeners();
    };
  }, [router.pathname] );
};