import {generateIndex, toCharCodeId} from "../../www/utils/string-utils";


export const headingIndex = (index: number) => `Глава ${generateIndex(index, 2)}`;
export const h1BookPdf = (index: number, title: string) => `${headingIndex(index)}. ${title}`;
export const h2BookPdf = (index: number, title: string) => `${generateIndex(index, 2)}. ${title}`;
export const toBookPdfHref = (link: string) => `#` + toCharCodeId(link);