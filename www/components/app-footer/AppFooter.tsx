import React, { FC, ReactElement } from "react";
import { default as cn } from "classnames";



interface IAppFooterProps {
  className?:string;
}

export const AppFooter: FC<IAppFooterProps> = ( { className } ) => {
  let classes = cn( `app-footer`, className );

  
  return (
    <footer className={ classes }>
        <div className="app-footer__empty"></div>
      <div className="app-footer_contacts app-footer__section">

      </div>
    </footer>
  );
};