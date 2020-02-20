import React, { createContext, FC, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { default as cn } from "classnames";
import { generateStringId } from "../../utils/string-utils";
import { useRadioGroup } from "../ui__radio-group/RadioGroup";
import { observer } from "mobx-react-lite";
import { CheckedEvent } from "../ui__checkbox/Checkbox";

export const InputCheckedContext = createContext( { id: "", checked: false } );
export const useInputChecked = () => useContext( InputCheckedContext );


interface IRadioProps {
  id?: string;
  value:string;
  className?: string;
  classNameChecked?:string;
  classNameNotChecked?:string;
  checked?: boolean;
  children: ReactNode | ReactNode[];
  onChecked?:(event:CheckedEvent)=>void;

}



export const Radio: FC<IRadioProps> = observer(( { onChecked,value, className, classNameChecked = `checked`, classNameNotChecked = `not-checked`, checked:checkedProps = false, id , children } ) => {
  let { name, setState,getState } = useRadioGroup();
  let idRef = useRef( id ?? generateStringId() );

  let checked = getState( idRef.current ) ?? checkedProps;

  let context = {
    id: idRef.current,
    checked
  };

  let classes = cn( `radio`, className, {
    [ classNameChecked ]: checked,
    [ classNameNotChecked ]: !checked
  } );

  const inputChangeHandler = () => {
    let nextState = { id: idRef.current, checked: !checked };

    setState( {...nextState} );


    if ( onChecked ) {
      onChecked( { ...nextState } );
    }

  };



  useEffect( () => {
    setState( {
      id: idRef.current,
      checked: context.checked !== checked ? checked : checkedProps
    } );
  }, [checkedProps] );




  return (
    <InputCheckedContext.Provider value={ context }>
      <label htmlFor={ idRef.current } className={ classes }>
        <input type="radio"
               id={ idRef.current }
               name={ name }
               value={ value }
               className="radio__input"
               checked={checked}
               onChange={ inputChangeHandler }/>
        { children }
      </label>
    </InputCheckedContext.Provider>
  );
});