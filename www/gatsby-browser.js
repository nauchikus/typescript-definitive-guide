/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

//TODO:[refactor][dev]del
// require( './src/styles/main-scrollbar.scss' );

import "./src/styles/dev-utils.scss";

import React, { useLayoutEffect } from "react";
import { MobxProvider, useShareStores } from "./src/mobx";
import { RouterContext, RouterService } from "./src/react__hooks/router-hook";
import { Localization } from "./src/react__hooks/translator.hook";

export const wrapRootElement = ({element}) => {
  return (
    <MobxProvider>{element}</MobxProvider>
  );
};

export const wrapPageElement = ( { element, props } ) => {
  return (
    <Localization.Provider value={props.pageContext.localization}>
      <RouterContext.Provider value={ new RouterService( props.location ) }>
        { element }
      </RouterContext.Provider>
    </Localization.Provider>
  );
};

export const onRouteUpdate = ( { location: { hash } } ) => {
  
};