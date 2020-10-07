interface PathInfo {
    from: string;
    to: string;
}

export const PATH_INFO_ALL: PathInfo[] = [
    {from: `Слово`, to: `slovo`},
    {from: `[]`, to: `[]`},
    {from: `[Слово]`, to: `[slovo]`},
    {from: `[ Слово ]`, to: `[ slovo ]`},
    {from: `<>`, to: `<>`},
    {from: `<Слово>`, to: `<slovo>`},
    {from: `< Слово >`, to: `< slovo >`},
    {from: `()`, to: `()`},
    {from: `(Слово)`, to: `(slovo)`},
    {from: `( Слово )`, to: `( slovo )`},
    {from: `""`, to: `""`},
    {from: `"Слово"`, to: `"slovo"`},
    {from: `" Слово "`, to: `" slovo "`},
    {from: `''`, to: `''`},
    {from: `'Слово'`, to: `'slovo'`},
    {from: `' Слово '`, to: `' slovo '`},
    {from: "``", to: "``"},
    {from: "`Слово`", to: "`slovo`"},
    {from: "` Слово `", to: "` slovo `"},
    {from: `@`, to: `@`},
    {from: `-`, to: `-`},
    {from: `:`, to: `:`},
    {from: `;`, to: `;`},
    {from: `\\`, to: `\\`},
    {from: `/`, to: `/`},
    {from: `~`, to: `~`},
    {from: `#`, to: `#`},
    {from: `$`, to: `$`},
    {from: `%`, to: `%`},
    {from: `*`, to: `*`},
    {from: `№`, to: `#`},
];

export const getName = () => PATH_INFO_ALL
  .map(info => info.from)
  .join(` `);

