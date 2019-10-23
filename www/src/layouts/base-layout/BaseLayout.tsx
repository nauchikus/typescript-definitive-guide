import "./base.layout.scss";

import React, { ReactElement } from "react"
import {FC} from "react"


interface IBaseLayoutProps {
    children: ReactElement | ReactElement[];
}

const BaseLayout: FC<IBaseLayoutProps> = ( { children } ) => {
    // let [[translation]]=useTranslator<[BookChapterPage]>(LocalizationPaths.BookChaptersPage);
    // let {gui}=translation;

    return (
        <div className="app-grid">
            <div className="app-grid-item__header">
                <header>
                    <nav>

                    </nav>
                </header>
            </div>
            <div className="app-grid-item__main">
                {children}
            </div>
            <div className="app-grid-item__footer">
                <footer></footer>
            </div>
        </div>
    )

};

export default BaseLayout;
