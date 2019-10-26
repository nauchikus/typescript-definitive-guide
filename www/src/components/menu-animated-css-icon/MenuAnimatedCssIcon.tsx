import React,{FC} from  'react';
import {default as cn} from 'classnames';
import { ToggleUiState } from "../../services/AppStateService";

interface MenuAnimatedCssIconProps {
  className?: string;
  state: ToggleUiState;
}

export const MenuAnimatedCssIcon: FC<MenuAnimatedCssIconProps> = ( { className, state } ) => {
    let viewboxClasses = cn( "css-icon-viewbox", className );
  let lineClasses = cn( {
    [ "menu-animated-css-icon__line" ]: true,
    [ "menu-animated-css-icon__line_animate" ]: state === ToggleUiState.Open
  } );


  return (
    <div className={ viewboxClasses }>
      <div className="menu-animated-css-icon">
        <div className={ lineClasses }></div>
        <div className={ lineClasses }></div>
        <div className={ lineClasses }></div>
      </div>
    </div>
  );
};