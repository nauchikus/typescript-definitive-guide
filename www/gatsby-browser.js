/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

//TODO:[refactor][dev]del
// require( './src/styles/main-scrollbar.scss' );

import "./src/styles/dev-utils.scss";

import React  from 'react';
import { MobxProvider } from "./src/mobx";
import { SharedPage } from './src/shared-page';

export const wrapRootElement = ({ element, props, pluginOptions }) => {

  return (
      <MobxProvider>{element}</MobxProvider>


  );
};


export const wrapPageElement = ( { element, props } ) => {
  return (
      <SharedPage {...props}>
          {element}
      </SharedPage>
  );
};

// export const onRouteUpdate = ( { location: { hash } } ) => {
//
// };
