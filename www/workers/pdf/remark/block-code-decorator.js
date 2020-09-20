const visit = require('unist-util-visit');

const getCodeLanguage = html => {
    let [,,lang] = html.match(/^(<div class="remark-highlight"><pre class="language-)(.*?)(">)/);

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



const blockCodeDecorator = options => ast => {
    const isHtmlCode = node => node.type === `html`;

    visit(ast, isHtmlCode, codeNode => {
        try {
            let lang = getCodeLanguage(codeNode.value);

            codeNode.value = valueWrapper({
                lang,
                metadata: {},
                innerHTML: codeNode.value
            });
        }catch (error){
            console.log(codeNode);
            console.log(codeNode.value);
            console.error(error);
        }

    });

    return ast;
}



module.exports = blockCodeDecorator;
