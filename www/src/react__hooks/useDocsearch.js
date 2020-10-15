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

                    let origin = `https://typescript-definitive-guide.ru`;


                    if (process.env.NODE_ENV === `development`) {
                        origin = `http://localhost:8000`;

                        url = url.replace(
                            `https://typescript-definitive-guide.ru`,
                            origin
                        );
                    }


                    url = url.replace(origin, ``);

                    navigate(encodeURIComponent(url));
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

//http://localhost:8000/book/chapters/readonly,%20partial,%20required,%20pick,%20record#readonly%3Ct%3E%20(sdelat%20chleny%20obekta%20tolko%20dlya%20chteniya)

//https://typescript-definitive-guide.ru/book/chapters/readonly,%20partial,%20required,%20pick,%20record#required%3Ct%3E%20(sdelat%20vse%20neobyazatelnye%20chleny%20obyazatelnymi)
//https://typescript-definitive-guide.ru/book/chapters/readonly,%20partial,%20required,%20pick,%20record/#required<t>_(sdelat_vse_neobyazatelnye_chleny_obyazatelnymi)
