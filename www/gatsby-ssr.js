import React from 'react';
import { MobxSharedContext } from './src/react__context/MobxSharedContext';
import { SharedPageMobxEntry } from './src/stores/SharedPageMobxEntry';

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

export const wrapRootElement = ({ element, props, pluginOptions }) => {
    return (
        <MobxSharedContext.Provider value={ SharedPageMobxEntry.getInstance() }>
            { element }
        </MobxSharedContext.Provider>
    );
};
