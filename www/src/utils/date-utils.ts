export const toAppBaseDateFormat = ( date: string, options: Intl.DateTimeFormatOptions, locale = "ru" ) =>
  new Date( date ).toLocaleDateString( locale, options );
export const toAppDateFormat = ( date: string, locale: string = "ru" ) => {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return toAppBaseDateFormat( date, options, locale );
};
export const toAppShortDateFormat = ( date: string, locale: string = "ru" ) => {
  let options = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  };

  return toAppBaseDateFormat( date, options, locale );
};

export interface IDated {
  date:string;
}
export const sortByDateFromMinToMax = ( a:IDated, b:IDated ) =>
  Date.parse( a.date ) - Date.parse( b.date );
export const sortByDateFromMaxToMin = ( a:IDated, b:IDated ) =>
  Date.parse( b.date ) - Date.parse( a.date );
