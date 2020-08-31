import React,{FC} from  'react';
import {default as cn} from 'classnames';
import { ToggleUiState } from "../../stores/AppStateService";

interface MainNavAnimatedCssIconProps {
  className?: string;
  state: ToggleUiState;
}

export const MainNavAnimatedCssIcon: FC<MainNavAnimatedCssIconProps> = ( { className, state } ) => {
    let viewboxClasses = cn( "css-icon-viewbox", className );
    let iconClasses = cn( {
        [ "main-nav-animated-css-icon" ]: true,
        [ "main-nav-animated-css-icon_on" ]: state === ToggleUiState.Close
    } );


    return (
      <div className={ viewboxClasses }>
          <div className={ iconClasses }>
              <div className="main-nav-animated-css-icon__line"></div>
              <div className="main-nav-animated-css-icon__line"></div>
              <div className="main-nav-animated-css-icon__line"></div>
          </div>
      </div>
    );
};