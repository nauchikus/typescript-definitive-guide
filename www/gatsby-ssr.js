import React from 'react';
import { MobxSharedContext } from './src/react__context/MobxSharedContext';
import { SharedPageMobxEntry } from './src/mobx__entry/SharedPageMobxEntry';

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



const getHeadComponentAll = () => ([
    <link key="algolia_css"
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"/>

]);
const getBodyEndComponentAll = () => ([
    <script key="algolia_script"
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script>,
])

export const onRenderBody = ({setHeadComponents, setPostBodyComponents}) => {
    setHeadComponents(getHeadComponentAll());
    setPostBodyComponents(getBodyEndComponentAll());
}
