import { DOMAttributes } from "react";
import { AriaAttributes } from "react";

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // extends React's HTMLAttributes
        toggle?: "true"|"false";
        filter?: string;
        ['toggle-state']?: string;
        [`is-match`]?: string;
        [`is-collapse`]?: string;
        [`item-index`]?: number;
        allowtransparency?: "true"|"false";
    }
}
