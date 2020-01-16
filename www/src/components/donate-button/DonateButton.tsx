import React, { FC, ReactElement } from "react";
import { default as cn } from "classnames";
import { RippleLayer } from "../ripple-layer/RippleLayer";
import { DonateSvgIcon } from "../icon__svg-icon/svg-icons";
import { useTranslator } from "../../react__hooks/translator.hook";
import { LocalizationPaths, SharedLayoutLocalization } from "../../localization";


interface IDonateButtonProps {
  className?: string;
  children?: ReactElement | ReactElement[];
}

export const DonateButton: FC<IDonateButtonProps> = ( { className, children } ) => {
  let [shared] = useTranslator<[SharedLayoutLocalization]>( LocalizationPaths.SharedLayout );
  let { appHeader: {donateDropdown} } = shared;

  let classes = cn( className,{
    ['donate-button']:true
  } );


  return (
    <button className={ classes }>
      <RippleLayer/>
      <DonateSvgIcon/>
      <div className="donate-button__label">
        <span>{donateDropdown.toggleButton.label[0]}</span>
        <span>{donateDropdown.toggleButton.label[1]}</span>
      </div>
    </button>
  );
};