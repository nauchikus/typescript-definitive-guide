import { DOMAttributes } from "react";
import { AriaAttributes } from "react";

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // extends React's HTMLAttributes
        open?: boolean|string;
        toggle?: boolean|string;
    }
}
