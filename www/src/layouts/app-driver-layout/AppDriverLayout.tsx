import React, { FC, ReactNode } from "react";
import { If } from "../../components/if-operator/If";

interface IAppDriverLayoutProps {
  appNav?:ReactNode;
  pageNav?:ReactNode;
}

export const AppDriverLayout: FC<IAppDriverLayoutProps> = ( {appNav,pageNav} ) => {
  let isAppNavExistValid = appNav != null;
  let isPageNavExistValid = pageNav != null;

  return (
    <div className="app-driver-layout">
      <If condition={isAppNavExistValid}>
        {appNav}
      </If>
      <If condition={isPageNavExistValid}>
        {pageNav}
      </If>
    </div>
  );
};