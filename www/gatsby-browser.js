/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

//TODO:[refactor][dev]del
// require( './src/styles/main-scrollbar.scss' );

import "./src/styles/dev-utils.scss";

import React from 'react';
import { SharedPage } from './src/shared-page';
import { MobxSharedContext } from './src/react__context/MobxSharedContext';
import { SharedPageMobxEntry } from './src/stores/SharedPageMobxEntry';




export const wrapRootElement = ({ element, props, pluginOptions }) => {
    return (
        <MobxSharedContext.Provider value={ SharedPageMobxEntry.getInstance() }>
            { element }
        </MobxSharedContext.Provider>
    );
};

// export const wrapPageElement = ( { element, props } ) => {
//   return (
//       <SharedPage {...props}>
//           {element}
//       </SharedPage>
//   );
// };
export const shouldUpdateScroll = ({routerProps:{location}}) => {
    if (location.hash === ``) {
        window.scrollTo(0, 0);
    }

    return false;
};
export const onRouteUpdate = ( { location: { hash } } ) => {
};

export const onPreRouteUpdate = ({ location: { hash } }) => {

}
