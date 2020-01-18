import React, { FC } from "react";
import { generateStringId } from "../../utils/string-utils";
import { CheckboxActiveSvgIcon, CheckboxUnactiveSvgIcon } from "../icon__svg-icon/svg-icons";

interface ICheckboxProps {
  checked?:boolean;

  id?:string;
}

export const Checkbox: FC<ICheckboxProps> = ( { checked=true,id = generateStringId() } ) => {
  return (
    <div className="checkbox">
      <input type="checkbox" id={id} className="checkbox__input" checked={ checked }/>
      <label htmlFor={id}>
        <CheckboxActiveSvgIcon className="checkbox__svg-icon checkbox__svg-icon_active"/>
        <CheckboxUnactiveSvgIcon className="checkbox__svg-icon checkbox__svg-icon_unactive"/>
      </label>
    </div>
  );
};