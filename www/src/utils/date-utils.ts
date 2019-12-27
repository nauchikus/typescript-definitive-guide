export const toAppDateFormat = ( date: string, locale: string = "ru" ) => {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return new Date( date ).toLocaleDateString( locale, options );
};