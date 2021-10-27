import {Code} from "./Code";
import {ContentImage} from "./ContentImage";
import { ReactElement } from "react";
import { ContentLink } from "./ContentLink";

export const components = {
    pre: ({children, ...params}: {children: ReactElement[]}) => {
        let lang = children[0].props.className.replace(`language-`, ``);

        return <Code.Pre lang={lang} children={children} />
    },
    code: ({inline, className, children, ...params}: {inline: boolean, className: string, children: ReactElement[]}) => {
        let normalizeChildren = String(children).replace(/\n$/, '');


        if (inline) {
            return <Code.InlineCode children={normalizeChildren} />
        }


        let lang = className.replace(`language-`, ``);

        return <Code.BlockCode children={normalizeChildren} lang={lang} />
    },
    img: (image: {src: string, alt: string}) => {
        return <ContentImage src={image.src} alt={image.alt} />
    },
    paragraph: (paragraph: {node: {children: ReactElement[]}, children: ReactElement[]}) => {
        const { node } = paragraph;
        if (node.children[0].type === "image") {
            const image: {url: string, alt: string} = node.children[0] as any;
            return <ContentImage src={image.url} alt={image.alt} />;
        }

        return <p>{paragraph.children}</p>;
    },
    a: ( { href, children }) => {
        return <ContentLink href={ href }>{ children }</ContentLink>;
    }
}