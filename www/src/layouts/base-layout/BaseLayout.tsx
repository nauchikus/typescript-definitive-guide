import "./base-layout.scss";
import "./base-layout.grid.scss";

import React, { ReactElement } from "react"
import {FC} from "react"
import { GithubSvgIcon, PiggyBankSvgIcon, SearchSvgIcon, TelegramSvgIcon } from "../../components/svg-icon/svg-icons";
import { Search } from "../../components/search/Search";
import { AppBar } from "../../components/app-bar/AppBar";


interface IBaseLayoutProps {
    children: ReactElement | ReactElement[];
}

const BaseLayout: FC<IBaseLayoutProps> = ( { children } ) => {
    // let [[translation]]=useTranslator<[BookChapterPage]>(LocalizationPaths.BookChaptersPage);
    // let {gui}=translation;

  console.log('{{{SHARED}}}')
    return (
        <div className="app-grid">
            <div className="app-grid-item__header">
                <AppBar/>
            </div>
            <div className="app-grid-item__content">
                {children}
            </div>
        </div>
    )

};

export default BaseLayout;
