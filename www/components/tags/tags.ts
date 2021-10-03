export class Tag {
    static readonly tags = new Set<string>([
        `Улучшение`,
        `Нововведение`,
        `Критическое изменение`,
        `Адаптация`,
    ]);
    static readonly validate = (tag: string) => Tag.tags.has(tag);
    static getColor = (tagName: string) => {
        let cssClass = Tag.tagNameByColorMap.get(tagName);

        if (!cssClass) {
            throw new Error(`Css class for tag "${tagName}" not exists. Check the spelling or register a new tag.`);
        }

        return cssClass;
    }

    private static tagNameByColorMap = new Map([
        [`Улучшение`, `#1890ff`],
        [`Нововведение`, `#a0d911`],
        [`Критическое изменение`, `#f5222d`],
        [`Адаптация`, `#fa541c`],
        [``, ``],
        [``, ``],
        [``, ``],
        [``, ``],
        [``, ``],
        [``, ``],
        [``, ``],
    ]);
}

