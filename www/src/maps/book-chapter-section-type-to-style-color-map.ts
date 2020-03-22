enum BookChapterSectionRuName {
  Common="Общее",
  TypingIntroduction="Экскурс в типизацию",
  SyntacticConstruction="Синтаксические конструкции",
  Types="Типы",
  TypescriptFeatures="Тонкости TypeScript",
  WorkingWithTypes="Работа с типами",
  Typing="Типизация",
  ExtendedTypes="Расширенные типы",
  React="React",
  Assembly="Сборка",
  Compiler="Компилятор",
  Classes="Классы",
  All="all",

}
enum BookChapterSectionType {
  Common="common",
  TypingIntroduction="typingIntroduction",
  SyntacticConstruction="syntacticConstruction",
  Types="types",
  TypescriptFeatures="typescriptFeatures",
  WorkingWithTypes="workingWithTypes",
  Typing="typing",
  ExtendedTypes="extendedTypes",
  React="react",
  Assembly="assembly",
  Compiler="compiler",
  Classes="classes",
  
  All="all",
}
enum BookChapterSectionStyleName {
  Common="common",
  TypingIntroduction="typing-introduction",
  SyntacticConstruction="syntactic-construction",
  Types="types",
  TypescriptFeatures="typescript-features",
  WorkingWithTypes="working-with-types",
  Typing="typing",
  ExtendedTypes="extended-types",
  React="react",
  Assembly="assembly",
  Compiler="compiler",
  Classes="classes",
  All="",
}


const toFullClassNameWithBgColorAttr = ( className: string ) => `book-toc__section-color_bg-color_${ className }`;
const toFullClassNameWithBorderColorAttr = ( className: string ) => `book-toc__section-color_border-color_${ className }`;

export const BookChapterSectionRuNameToSectionTypeMap = new Map( [
  [BookChapterSectionRuName.Common, BookChapterSectionType.Common],
  [BookChapterSectionRuName.TypingIntroduction, BookChapterSectionType.TypingIntroduction],
  [BookChapterSectionRuName.SyntacticConstruction, BookChapterSectionType.SyntacticConstruction],
  [BookChapterSectionRuName.Types, BookChapterSectionType.Types],
  [BookChapterSectionRuName.TypescriptFeatures, BookChapterSectionType.TypescriptFeatures],
  [BookChapterSectionRuName.WorkingWithTypes, BookChapterSectionType.WorkingWithTypes],
  [BookChapterSectionRuName.Typing, BookChapterSectionType.Typing],
  [BookChapterSectionRuName.ExtendedTypes, BookChapterSectionType.ExtendedTypes],
  [BookChapterSectionRuName.React, BookChapterSectionType.React],
  [BookChapterSectionRuName.Assembly, BookChapterSectionType.Assembly],
  [BookChapterSectionRuName.Compiler, BookChapterSectionType.Compiler],
  [BookChapterSectionRuName.Classes, BookChapterSectionType.Classes],
  [BookChapterSectionRuName.All, BookChapterSectionType.All],
] );
export const BookChapterSectionTypeToClassNameMap = new Map( [
  [BookChapterSectionType.Common, BookChapterSectionStyleName.Common],
  [BookChapterSectionType.TypingIntroduction, BookChapterSectionStyleName.TypingIntroduction],
  [BookChapterSectionType.SyntacticConstruction, BookChapterSectionStyleName.SyntacticConstruction],
  [BookChapterSectionType.Types, BookChapterSectionStyleName.Types],
  [BookChapterSectionType.TypescriptFeatures, BookChapterSectionStyleName.TypescriptFeatures],
  [BookChapterSectionType.WorkingWithTypes, BookChapterSectionStyleName.WorkingWithTypes],
  [BookChapterSectionType.Typing, BookChapterSectionStyleName.Typing],
  [BookChapterSectionType.ExtendedTypes, BookChapterSectionStyleName.ExtendedTypes],
  [BookChapterSectionType.React, BookChapterSectionStyleName.React],
  [BookChapterSectionType.Assembly, BookChapterSectionStyleName.Assembly],
  [BookChapterSectionType.Compiler, BookChapterSectionStyleName.Compiler],
  [BookChapterSectionType.Classes, BookChapterSectionStyleName.Classes],
  [BookChapterSectionType.All, BookChapterSectionStyleName.All],
] );

///TODO: [localization] added map by locale
export const getClassNameWithBgColorAttrBySectionName = ( sectionName: String, locale: string = "ru" ) => {
  let type = BookChapterSectionRuNameToSectionTypeMap.get( sectionName as BookChapterSectionRuName);

  if ( !type ) {
    throw new Error( `Unknown section name "${ sectionName }".` );
  }

  let baseClassName = BookChapterSectionTypeToClassNameMap.get( type );

  if ( baseClassName === undefined ) {
    throw new Error( `Class for section name "${ sectionName }" not exists.` );
  }

  let className = toFullClassNameWithBgColorAttr( baseClassName );

  return className;
};
export const getClassNameWithBorderColorAttrBySectionName = ( sectionName: String, locale: string = "ru" ) => {
  let type = BookChapterSectionRuNameToSectionTypeMap.get( sectionName as BookChapterSectionRuName);

  if ( !type ) {
    throw new Error( `Unknown section name "${ sectionName }".` );
  }

  let baseClassName = BookChapterSectionTypeToClassNameMap.get( type );

  if ( baseClassName === undefined ) {
    throw new Error( `Class for section name "${ sectionName }" not exists.` );
  }

  let className = toFullClassNameWithBorderColorAttr( baseClassName );

  return className;
};