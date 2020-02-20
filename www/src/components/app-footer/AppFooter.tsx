import React, { FC, ReactElement } from "react";
import { default as cn } from "classnames";
import { ContactsAppFooterDropdown } from "../dropdown__app-footer__contacts/ContactsAppFooterDropdown";


interface IAppFooterProps {
  className?:string;
}

export const AppFooter: FC<IAppFooterProps> = ( { className } ) => {
  let classes = cn( `app-footer`, className );

  
  return (
    <footer className={ classes }>
      <div className="app-footer-grid-item__contacts app-footer__section">
        <ContactsAppFooterDropdown/>
      </div>
    </footer>
  );
};