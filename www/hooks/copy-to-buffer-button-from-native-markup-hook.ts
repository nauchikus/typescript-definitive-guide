import * as NativeUtils from "../utils/native-utils";
import { useLayoutEffect } from "react";
import {useRouter} from "next/router";
import {message} from "antd";


export const useCopyToBufferButtonFromNativeMarkup = () => {
  let router = useRouter();

  message.config({
    top: 0,
    duration: 2,
    maxCount: 3,
    rtl: false,
  });


  const copyToBufferButton__clickHandler = ( event: Event ) => {
    let href = window.location.href;

    NativeUtils.copyToBuffer( href );
    message.info(`Ссылка скопирована`);
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
  }, [router.query.version] );
};
