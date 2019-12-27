class Locale {
  static Ru = `ru`
  static En = `en`
}
class TypeLocalePostfix {
  static Ru = `Ru`
  static En = `En`
}

class BookLocalizeGatsbyNodeType {
  constructor (locale){
    /*info gatsby nodes*/
    this.ChapterInfo = `BookChapterInfo${ locale }`
    this.AppLocalizationInfo = `AppLocalizationInfo${ locale }`
    this.TocInfo = `BookTocInfo${ locale }`

    /*data gatsby nodes*/
    this.AppLocalization = `AppLocalization`
    this.BookLocalization = `BookLocalization`
    this.BookToc = `BookToc`

    this.WhatIsNew=`WhatIsNew`
  }
}

class BookGatsbyNodeType {
  static ru = new BookLocalizeGatsbyNodeType( TypeLocalePostfix.Ru )
  static en = new BookLocalizeGatsbyNodeType( TypeLocalePostfix.En )
}

class FsType{
  static WhatIsNew = `what-is-new`
}
class GatsbyNodeType{
  static WhatIsNewToc = "WhatIsNewToc"
}

module.exports = {
  Locale,
  FsType,
  BookGatsbyNodeType,
  GatsbyNodeType,
}