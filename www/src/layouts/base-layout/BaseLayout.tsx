import "./base-layout.scss";
import "./base-layout.grid.scss";

import React, { ReactElement } from "react"
import {FC} from "react"
import { AppHeader } from "../../components/app-header/AppHeader";


interface IBaseLayoutProps {
    children: ReactElement | ReactElement[];
}

const BaseLayout: FC<IBaseLayoutProps> = ( { children } ) => {
    // let [[translation]]=useTranslator<[BookChapterPage]>(LocalizationPaths.BookChaptersPage);
    // let {gui}=translation;


    return (
        <div className="app-grid">
            <div className="app-grid-item__header">
                <AppHeader/>
            </div>
            <div className="app-grid-item__content">
                {children}
            </div>
        </div>
    )

};

export default BaseLayout;
