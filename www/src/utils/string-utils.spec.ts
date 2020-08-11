import StringUtils from './string-utils';


describe(`[StringUtils]`, () => {
    describe(`Formatting chapter name to section id and url, then convert the first to the second and Vice versa.`, () => {
        // const CHAPTER_NAME = `(Работа с типами) Оператор keyof, Mapped Types - префиксы + и -`;
        const CHAPTER_NAME = `Экскурс в типизацию - Система Типов, Тип Данных, Значимые\\Ссылочные Типы`;


        let sectionId = StringUtils.hadingToNativeElementAttributeValue(CHAPTER_NAME);
        let path = StringUtils.toPath(CHAPTER_NAME);
        let url = encodeURIComponent(path);

        test(`url must be convert to sectionId`, () => {
            expect(StringUtils.urlToSelector(url)).toEqual(sectionId);
        })
    })
});

// ekskurs_v_tipizaciu-sistema_tipov,tip_dannyh,znachimye\ssylochnye_tipy
// ekskurs_v_tipizaciu-sistema_tipov,tip_dannyh,znachimye\ssylochnye_tipy