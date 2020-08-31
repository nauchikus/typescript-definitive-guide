import {Langs, Locales} from "./locales";
import {AppLocalization} from "../../src/types/app-localizations";

export interface IAppLocalizationGatsbyNode {
    locale: Locales;
    lang: Langs;
    localization: AppLocalization;
}