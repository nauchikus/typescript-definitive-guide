import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { generateStringId } from "../../utils/string-utils";
import { CheckboxActiveSvgIcon, CheckboxUnactiveSvgIcon } from "../icon__svg-icon/svg-icons";
import { default as cn } from "classnames";
import { InputCheckedContext } from "../ui__radio/Radio";
import { observer } from "mobx-react-lite";

export type CheckedEvent={id:string; checked: boolean;}

interface ICheckboxProps {
  className?:string;
  classNameChecked?:string;
  classNameNotChecked?:string;

  checked?:boolean;

  value:string;

  id?:string;

  children?:ReactNode|ReactNode[];

  onChecked?:(event:CheckedEvent)=>void;
}

export const Checkbox: FC<ICheckboxProps> = observer(( { onChecked,className,classNameChecked=`checked`,classNameNotChecked=`not-checked`,value,children,checked=false,id = generateStringId() } ) => {
  let idRef = useRef( id ?? generateStringId() );

  let classes = cn( `checkbox`, className, {
    [ classNameChecked ]: checked,
    [ classNameNotChecked ]: !checked
  } );
  let context = {
    id: idRef.current,
    checked
  };

  const inputChangeHandler = () => {
    if ( onChecked ) {
      onChecked( { checked: !checked, id: idRef.current } );
    }

  };



  return (
    <InputCheckedContext.Provider value={context}>
      <label className={ classes }>
        <input type="checkbox"
               value={ value }
               id={ idRef.current }
               className="checkbox__input"
               onChange={ inputChangeHandler }
               checked={ checked }/>
        { children }
      </label>
    </InputCheckedContext.Provider>
  );
});