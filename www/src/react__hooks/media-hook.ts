import { useEffect, useLayoutEffect, useState } from "react";

export const useCssProperty = ( cssPropertyName: string ) => {
  let [value, setValue] = useState( `` );
  useEffect( () => {
    setValue( window
      .getComputedStyle( document.documentElement )
      .getPropertyValue( cssPropertyName )
    );
  }, [] );


  return value;
};

export const useCssPropertyAsNumber = ( cssPropertyName: string ) =>
  parseInt( useCssProperty( cssPropertyName ) );