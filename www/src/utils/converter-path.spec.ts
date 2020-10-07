import StringUtils from './string-utils';


describe(`[ConverterPath]`, () => {
    const NAME_PART_ALL: string[] = [
        `Слово`,
        `[]`, `[слово]`, `[ слово ]`,
        `<>`, `<слово>`, `< слово >`,
        `@`, `-`, `:`, `;`, `\\`, `/`,
        `//`, `~`, `#`, `$`, `%`, `*`,
        `№`,
        `()`, `(слово)`, `( слово )`,
        `""`, `"слово`, `" слово "`,
        `''`, `'слово'`, `' слово '`
    ];

    const getName = (partAll: string[]) => partAll.join(` `);



    describe(`Convert name to url`, () => {
        const CHAPTER_NAME = getName(NAME_PART_ALL);


        let sectionId = StringUtils.hadingToNativeElementAttributeValue(CHAPTER_NAME);
        let path = CHAPTER_NAME;
        let url = encodeURIComponent(path);

        xtest(`url must be convert to sectionId`, () => {
            expect(StringUtils.urlToSelector(url)).toEqual(sectionId);
        })
    })
});

// ekskurs_v_tipizaciu-sistema_tipov,tip_dannyh,znachimye\ssylochnye_tipy
// ekskurs_v_tipizaciu-sistema_tipov,tip_dannyh,znachimye\ssylochnye_tipy
