export class BookChapterMdToSectionMdTransformer {
    static transform = (markdown: string): string[] => {
        return Array.from(markdown.matchAll(/^#{1,}(.*)\n/mg) as Required<RegExpMatchArray>)
            .map(([title]) => title.trim())
            .reduce((result, current, index, source) => {
                let start = markdown.indexOf(current);
                let end = index === source.length - 1 ? markdown.length : markdown.indexOf(source[index + 1], start);

                result.push([start, end])

                return result
            }, [])
            .reduce((result, [start, end]) => {
                let chapter = markdown.substring(start, end).trim();
                result.push(chapter);
                return result;
            }, []);
    }
}