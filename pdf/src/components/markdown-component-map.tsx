import * as React from "react";
import {Code} from "../../../www/components/contents/Code";
import { ReactElement, ReactNode } from "react";


export const components = {
    // pre: ({children, ...params}: {children: ReactElement[]}) => {
    //     let code = children[0];
    //
    //     if ( !code ) {
    //         return;
    //     }
    //
    //     let lang = code.props.className.replace(`language-`, ``);
    //
    //     return <Code.Pre lang={lang} children={children} />
    // },
    // code: ({inline, className, children, ...params}: {inline: boolean, className: string, children: ReactElement[]}) => {
    //     let normalizeChildren = String(children).replace(/\n$/, '');
    //
    //
    //     if (inline) {
    //         return <Code.InlineCode children={normalizeChildren} />
    //     }
    //
    //
    //     let lang = className.replace(`language-`, ``);
    //
    //     return <Code.BlockCode children={normalizeChildren} lang={lang} />
    // },
}