import React, { FC, ReactNode, useEffect, useState } from "react";
import { If } from "../if-operator/If";

interface IMediaProps {
  query:string;
  children: ReactNode | ReactNode[];
}

export const Media: FC<IMediaProps> = ( { query, children } ) => {
  let [isMatch, setMatch] = useState( false );

  const matchMediaHandler = ( event: MediaQueryListEvent ) => {
    setMatch( event.matches );
  };

  useEffect( () => {
    let matchMedia = window.matchMedia( query );
    matchMedia.addEventListener( `change`, matchMediaHandler );


    if ( matchMedia.media !== `` ) {
      setMatch( matchMedia.matches );
    }


    return () => {
      matchMedia.removeEventListener( `change`, matchMediaHandler );
    };
  }, [query] );


  return (
    <If condition={ isMatch }>
      { children }
    </If>
  );
};