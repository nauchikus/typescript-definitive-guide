class WinContentTagBarTagsLabelToTypeMap{
    static NOT_FOUND_LABEL=`*`;
    static DEFAULT_TAG_INFO_CLASSES=[`content__tag-bar-tag_default`];
    static labelToClassesMap = new Map( [
        [`Критическое изменение`, { classes: [`content__tag-bar-tag_critical`], priority: 99 }],
        [`Нововведение`, { classes: [`content__tag-bar-tag_new`], priority: 1 }],
        [`Изменение`, { classes: [`content__tag-bar-tag_change`], priority: 1 }],
        [`Компилятор`, { classes: [`content__tag-bar-tag_compiler`], priority: 1 }],
        [`*`, { classes: [`content__tag-bar-tag_default`], priority: 0 }]
    ] );
    static getInfo(label){
        return WinContentTagBarTagsLabelToTypeMap.labelToClassesMap.get(
          WinContentTagBarTagsLabelToTypeMap.labelToClassesMap.has( label ) ?
            label :
            WinContentTagBarTagsLabelToTypeMap.NOT_FOUND_LABEL
        );
    }
    static getInfoByLabel(label){
        return Object.assign( { label }, WinContentTagBarTagsLabelToTypeMap.getInfo( label ) );
    }
}


module.exports = {
    WinContentTagBarTagsLabelToTypeMap
};
