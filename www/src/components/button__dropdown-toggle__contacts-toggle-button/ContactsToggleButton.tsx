import React, { FC } from "react";
import { default as cn } from "classnames";
import { ArrowDropdownSvgIcon } from "../icon__svg-icon/svg-icons";
import { useDropdown } from "../dropdown/dropdown-hook";

interface IContactsToggleButtonProps {
}

export const ContactsToggleButton:FC<IContactsToggleButtonProps>=({})=>{
  let { isToggle } = useDropdown();
  let iconClasses = cn( `contacts-dropdown-toggle-button__svg-icon`, {
    [ `contacts-dropdown-toggle-button__svg-icon_open` ]: isToggle
  } );


  return(
    <button className="contacts-dropdown-toggle__button">
      <span className="contacts-dropdown-toggle-button__label">Контакты</span>
      <ArrowDropdownSvgIcon className={iconClasses}/>
    </button>
  );
}