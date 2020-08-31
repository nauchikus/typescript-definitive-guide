class Locale {
  static Ru = `ru`
  static En = `en`
}
class LocalePostfix {
  static Ru = `Ru`
  static En = `En`
}

class BookGatsbyNodeConstant {
  constructor (locale){
    this.BookTocId = `book-toc_${ locale }`
  }
}

class BookGatsbyNodeId {
  static ru = new BookGatsbyNodeConstant( LocalePostfix.Ru )
  static en = new BookGatsbyNodeConstant( LocalePostfix.En )
}

module.exports = {BookGatsbyNodeId}