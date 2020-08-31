import React, { FC, ReactElement } from "react";
import { default as cn } from "classnames";
import { RippleLayer } from "../ripple-layer/RippleLayer";
import { CreditCardSvgIcon, DonateSvgIcon } from "../icon__svg-icon/svg-icons";
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

  let donateButtonLabel = donateDropdown.toggleButton.label.join( ` ` );


  return (
    <a className={ classes } href={donateDropdown.href} target="_blank">
      <RippleLayer/>
      <CreditCardSvgIcon className="donate-button__svg-icon"/>
      <span className="donate-button__label">
        { donateButtonLabel }
      </span>
    </a>
  );
};
