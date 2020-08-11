import {Langs, Locales} from "../types/locales";
import { GatsbyCreatePages } from "../types/gatsby-create-pages";

interface ICreateRedirectOptions {
  locale: Locales;
  lang: Langs;
}


export const createRedirects: GatsbyCreatePages<ICreateRedirectOptions> = async ( helpers, options ) => {
  let { actions: { createRedirect } } = helpers;
  let { locale, lang } = options;

  createRedirect( { fromPath: `/`, toPath: `/ru`, isPermanent: true, redirectInBrowser: true } );
};