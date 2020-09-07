const qs=require('querystring');
const visit=require('unist-util-visit');

const valueWrapper = ({lang,meta,innerHTML}) => ( `
<div class="content__code">
    <div class="content__code-panel_top content__code-panel_lang_${lang}">
        <span class="content_code-label_filepath">${ meta.filepath }</span>
        <span class="content_code-label_lang">${lang}</span>
    </div>
    ${innerHTML}
    <div class="content__code-panel_bottom content__code-panel_lang_${lang}"></div>
</div>
` ).trim();



const remarkDecorateBlockCode = ast => {
    try{
        const isCodeTag = node => {

            if (node.type===`html` &&node.hasOwnProperty(`lang`)) {
                return true;
            }

            return false;
        };

        visit( ast, isCodeTag, codeNode => {
            let { lang, metadata: meta, value: innerHTML } = codeNode;


            codeNode.value = valueWrapper( {
                lang,
                meta,
                innerHTML
            } );
        } );
    }catch(error){
        console.error(error);
    }finally{
        return ast;
    }


    return ast;
}

module.exports = {
    remarkDecorateBlockCode
};
