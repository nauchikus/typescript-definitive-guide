import StringUtils from './string-utils';
import * as ConverterUtils from "./converter-utils.spec";


describe(`[ConverterPath]`, () => {
    describe(`Convert name to url`, () => {
        const CHAPTER_NAME = ConverterUtils.getName();


        xtest(`url must be convert to sectionId`, () => {
            expect(StringUtils.urlToSelector(url)).toEqual(sectionId);
        })
    })
});

// ekskurs_v_tipizaciu-sistema_tipov,tip_dannyh,znachimye\ssylochnye_tipy
// ekskurs_v_tipizaciu-sistema_tipov,tip_dannyh,znachimye\ssylochnye_tipy
