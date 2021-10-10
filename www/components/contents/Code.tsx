import React, {FC} from "react";
import {default as cn} from "classnames";
import {Prism} from "react-syntax-highlighter";

export interface WithLangProps {
    lang: string;
}

export const BlockCode: FC<WithLangProps> = ({lang, children}) => {
    return (
        <Prism language={lang} children={children} PreTag="div" customStyle={{
            background: `node`,
            whiteSpace: `pre-wrap`
        }}/>
    );
}
export const InlineCode: FC = ({children}) => {
    return <code className="content__code_inline">{children}</code>
}
export const Pre: FC<WithLangProps> = ({lang, children}) => {
    const panelColorClass = `content__code-panel_lang_${lang}`;
    const topPanelClasses = cn(`content__code-panel_top`, panelColorClass);
    const bottomPanelClasses = cn(`content__code-panel_bottom`, panelColorClass);

    return (
        <div className="content__code">
            <div className={topPanelClasses}>
                <span className="content_code-label_lang">{lang}</span>
            </div>
            <pre className="content__pre">{children}</pre>
            <div className={bottomPanelClasses}></div>
        </div>

    )
}


export const Code = {BlockCode, InlineCode, Pre};