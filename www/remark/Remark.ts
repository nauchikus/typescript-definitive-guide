import {unified} from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import prism from "remark-prism";

/* custom transformers */
import {divisionIntoSections} from "./division-into-sections";
import {addSectionId} from "./add-section-id";
import {decorateBlockCode} from "./decorate-block-code";
import {addHeadingLink} from "./add-heading-link";
import {addTagBar} from "./add-tag-bar";


export type RemarkCompilerConfig = typeof Remark["DEFAULT_REMARK_COMPILER_BUILD_CONFIG"];

export type RemarkPluginConfig = {
    isActive: boolean;
    settings?: object;
}
export type RemarkSettings = {
    [K in keyof RemarkCompilerConfig]: RemarkPluginConfig;
}
type Keys = keyof ReturnType<typeof Remark["getDefaultConfig"]>;

export class Remark {
    static getDefaultConfig = (): Required<RemarkSettings> => ({
        prism: {isActive: true},
        divisionIntoSections: {isActive: true},
        addSectionId: {isActive: true},
        decorateBlockCode: {isActive: true},
        addHeadingLink: {isActive: true},
        addTagBar: {isActive: true},
        remarkParse: {isActive: true},
        remarkRehype: {isActive: true, settings: {allowDangerousHtml: true}},
        rehypeStringify: {isActive: true, settings: {allowDangerousHtml: true}},
    });


    static pluginMap = new Map<keyof RemarkCompilerConfig, any>([
        ["prism", prism],
        ["divisionIntoSections", divisionIntoSections],
        ["addSectionId", addSectionId],
        ["decorateBlockCode", decorateBlockCode],
        ["addHeadingLink", addHeadingLink],
        ["addTagBar", addTagBar],
        ["remarkParse", remarkParse],
        ["remarkRehype", remarkRehype],
        ["rehypeStringify", rehypeStringify],
    ])
    static build = (config: Partial<RemarkCompilerConfig>) => {
        const defaultConfig = Remark.getDefaultConfig();

        return Object.entries(defaultConfig).reduce((compiler, [key, defaultSettings])=> {
            const isKeyExists = key in config;

            if (isKeyExists && !config[key].isActive) {
                return compiler;
            }

            const plugin = Remark.pluginMap.get(key);
            const pluginSettings = Object.assign(
                {},
                defaultSettings.settings,
                isKeyExists ? config[key].settings ?? {} : {}
            );

            return compiler.use(plugin, pluginSettings);
        }, unified()).process
    };
    static async compile(markdown: string, config?: Partial<RemarkCompilerConfig>) {
        return Remark.build(config)(markdown);
    }

    static compiler = unified()
        .use(prism)

        .use(divisionIntoSections)
        .use(addSectionId)
        .use(decorateBlockCode)
        .use(addHeadingLink)

        .use(remarkParse)
        .use(remarkRehype, {allowDangerousHtml: true}) // Pass raw HTML strings through.
        .use(rehypeStringify, {allowDangerousHtml: true}) // Serialize the raw HTML strings

        .process;
}