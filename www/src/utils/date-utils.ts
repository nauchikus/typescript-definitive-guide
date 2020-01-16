export const toAppDateFormat = ( date: string, locale: string = "ru" ) => {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return new Date( date ).toLocaleDateString( locale, options );
};

export interface IDated {
  date:string;
}
export const sortByDate = ( a:IDated, b:IDated ) =>
  Date.parse( a.date ) - Date.parse( b.date );