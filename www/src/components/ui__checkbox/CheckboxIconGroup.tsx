import React, { FC, ReactNode, useState } from "react";
import { generateStringId } from "../../utils/string-utils";
import { CheckboxActiveSvgIcon, CheckboxUnactiveSvgIcon } from "../icon__svg-icon/svg-icons";
import { default as cn } from "classnames";
import { useInputChecked } from "../ui__radio/Radio";
import { If } from "../if-operator/If";

interface ICheckboxIconGroupProps {
  className?:string;
}

export const CheckboxIconGroup: FC<ICheckboxIconGroupProps> = ( { className } ) => {
  let { checked } = useInputChecked();

  let classes = cn( `checkbox__icon-group`, className, {
    [ `checkbox__icon-group_checked` ]: checked,
    [ `checkbox__icon-group_not-checked` ]: !checked
  } );

  return (
    <div className={ classes }>
      <If condition={checked}>
        <CheckboxActiveSvgIcon className="checkbox__svg-icon"/>
      </If>
      <If condition={!checked}>
        <CheckboxUnactiveSvgIcon className="checkbox__svg-icon"/>
      </If>
    </div>
  );
};