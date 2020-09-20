const visit = require('unist-util-visit');



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


module.exports = ( ...params ) => {
    let [{ markdownAST: ast, markdownNode }] = params;

    const isHtmlCode = node =>
        node.type === `html` &&
        node.hasOwnProperty(`lang`);

    visit(ast, isHtmlCode, codeNode => {
        try {
            let lang = codeNode.lang;

            codeNode.value = valueWrapper({
                lang,
                metadata: {},
                innerHTML: codeNode.value
            });
        }catch (error){
            console.log(markdownNode.fileAbsolutePath);
            console.log(codeNode);
            console.log(codeNode.value);
            console.error(error);
        }

    });

    return ast;
};
