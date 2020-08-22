import { MobxProvider } from './src/mobx';
import React from 'react';

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

export const wrapRootElement = ({ element, props, pluginOptions }) => {

    return (
        <MobxProvider>{element}</MobxProvider>


    );
};
