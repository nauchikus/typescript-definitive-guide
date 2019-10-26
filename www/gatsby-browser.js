/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

//TODO:[refactor][dev]del
// require( './src/styles/main-scrollbar.scss' );

import "./src/styles/dev-utils.scss";

import React from "react";
import { MobxProvider, useStores } from "./src/mobx";
import { RouterContext, RouterService } from "./src/react-hooks/router-hook";

export const wrapRootElement = ({element}) => {
  return (
    <MobxProvider>{element}</MobxProvider>
  );
};

export const wrapPageElement = ( { element, props } ) => {
  return (
    <RouterContext.Provider value={ new RouterService( props.location ) }>
      { element }
    </RouterContext.Provider>
  );
};

export const onRouteUpdate=()=>{

  console.log('ROUTER')
}