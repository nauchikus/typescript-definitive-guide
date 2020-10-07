import StringUtils from './string-utils';


describe(`[StringUtils]`, () => {
    describe(`convert functions`, () => {
        describe(`convert string without space`, () => {
            const SOURCE_VALUE = `Итоги`;
            const RESULT_VALUE = `itogi`;

            const HADING = SOURCE_VALUE;
            const PATH = ConverterPathUtils.toPath(HADING);
            const URL = encodeURIComponent(PATH);
            const ATTRIBUTE = StringUtils.hadingToNativeElementAttributeValue(HADING);


            test(`Hading to native element attribute value`, () => {
                expect(ATTRIBUTE).toEqual(RESULT_VALUE);
            });
            test(`Url to native element attribute value`, () => {
                expect(StringUtils.urlToNativeElementAttributeValue(URL))
                  .toEqual(ATTRIBUTE);
            });
        });
    });

});

