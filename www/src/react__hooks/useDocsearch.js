import { navigate } from 'gatsby';
import { useLayoutEffect } from 'react';


export const useDocsearch = () => {
    useLayoutEffect(() => {
        let ds = docsearch({
            apiKey: '0260af6591f616d3300bc3b89d75cfd1',
            indexName: 'nauchikus_typescript-definitive-guide',
            inputSelector: '#algolia-search',
            debug: false,
            handleSelected: function (input, event, suggestion, datasetNumber, context) {
                if (context.selectionMethod === 'click') {
                    input.setVal('');

                    let url = suggestion.url;
                    let pattern = `/#gatsby-focus-wrapper`;

                    if (url.endsWith(pattern)) {
                        url = url.substring(0, url.length - pattern.length);
                    }

                    if (process.env.NODE_ENV === `development`) {
                        url = url.replace(`https://typescript-definitive-guide.ru`, `http://localhost:8000`);

                    }

                    navigate(url);
                }
            }
        });

        let input = ds.autocomplete[0];
        let autocomplete = ds.autocomplete.autocomplete;

        const input_blurHandler = () => {
            autocomplete.setVal('');
        };

        input.addEventListener(`blur`, input_blurHandler);

        return () => {
            input.removeEventListener(`blur`, input_blurHandler);
        };
    });
}
