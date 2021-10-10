import {visit} from "unist-util-visit";



const getCodeLanguage = html => {
    let [,,lang] = html.match(/^(<div class="gatsby-highlight" data-language=")(.*?)(">)/);

    return lang.trim();
}


const valueWrapper = ({lang,metadata,innerHTML}) => ( `
<div class="content__code">
    <div class="content__code-panel_top content__code-panel_lang_${lang}">
        <span class="content_code-label_filepath">${ metadata.filepath || `` }</span>
        <span class="content_code-label_lang">${lang}</span>
    </div>
    ${innerHTML}
    <div class="content__code-panel_bottom content__code-panel_lang_${lang}"></div>
</div>
` ).trim();


export const decorateBlockCode = () => (ast) => {
    const isPrismCode = node =>
        node.type === `element` &&
        node.hasOwnProperty(`properties`) &&
        node?.properties.className.includes(`remark-highlight`);


    visit(ast, isPrismCode, (codeNode, index, parent) => {
        try {
            let lang = codeNode.children[0].properties.className[0].replace(`language-`, ``)

            let codeWithWrapperNode = {
                type: `div`,
                data: {
                    hName: "div",
                    hProperties:{
                        className:['content__code']
                    }
                },
                children: [
                    {
                        type: `div`,
                        data: {
                            hName: "div",
                            hProperties:{
                                className:[
                                    `content__code-panel_top`,
                                    `content__code-panel_lang_${lang}`
                                ]
                            }
                        },
                        children: [
                            {
                                type: `span`,
                                data: {
                                    hName: "span",
                                    hProperties:{
                                        className:[
                                            `content_code-label_filepath-panel_top`,
                                        ]
                                    }
                                },
                            },
                            {
                                type: `span`,
                                data: {
                                    hName: "span",
                                    hProperties:{
                                        className:[
                                            `content_code-label_lang`,
                                        ]
                                    }
                                },
                                children: [
                                    {
                                        type: `text`,
                                        value: lang
                                    }
                                ]
                            }
                        ]
                    },
                    codeNode,
                    {
                        type: `div`,
                        data: {
                            hName: "div",
                            hProperties:{
                                className:[
                                    `content__code-panel_bottom`,
                                    `content__code-panel_lang_${lang}`
                                ]
                            }
                        },
                    }
                ]
            };

            parent.children.splice(index, 1, codeWithWrapperNode);
        }catch (error){
            throw new Error(`[transformer DecorateBlockCode] ${error.message}`);
        }

    });

    return ast;
};
