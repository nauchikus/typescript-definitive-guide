import React, { FC } from "react";
import { ForwardArrowSvgIcon } from "../svg-icon/svg-icons";

interface ISectionButtonAppDriver {
  label:string;
  onClick:()=>void;
}

export const SectionButtonAppDriver: FC<ISectionButtonAppDriver> = ( {label,onClick} ) => {
  return (
    <button className="app-driver__section-button" onClick={onClick}>
      {label}
      <ForwardArrowSvgIcon/>
    </button>
  );
};