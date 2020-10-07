import React, {FC, ReactNode} from "react";

import {AppDriver} from "../app-driver/AppDriver";
import {useTranslator} from "../../react__hooks/translator.hook";
import {AppNavigationLocalization, LocaleLocalization, LocalizationPaths} from "../../localization";
import {PageWithContentNavAppDriver} from "../app-driver__nav_page-with-content/PageWithContentNavAppDriver";
import {FooterAppDriver} from "../app-driver__footer/FooterAppDriver";
import {IPageNavSection} from "../../types/IPageNavData";
import {observer, useLocalStore} from "mobx-react-lite";
import {useRouter} from "../../stores/RouterStore";
import {AppNavSectionAppDriver} from "../app-driver__nav-section_app-nav/AppNavSectionAppDriver";
import {ContentNavSectionAppDriver} from "../app-driver__nav-section_page-nav/ContentNavSectionAppDriver";
import {RouterUtils} from "../../utils/router-utils";
import * as StringUtils from "../../utils/string-utils";
import { useBookChapterStores } from "../../mobx__entry/BookPageMobxEntry";

interface IBookChapterPageAppDriverProps {
}


export const BookChapterPageAppDriver: FC<IBookChapterPageAppDriverProps> = observer(({}) => {
    let router = useRouter();
    let {contentSection, contentNav} = useBookChapterStores();


    const hasPageNavLinkActive = (currentSectionId: string, anchor: string) => {
        return anchor === currentSectionId;
    }


    let contentNavLinkDataAll = contentNav.sectionAll
        .map((section: IPageNavSection) => ({
            name: section.name,
            path: RouterUtils.bookRoutes.getBookRoute({
                locale: router.locale,
                chapterName: router.pageName,
                subchapterName: section.path,
            }),
            isActive: hasPageNavLinkActive(contentSection.currentSectionId, section.path),
            activeClassName: "app-driver__link_page-nav-item_active"
        }));


    return (
        <AppDriver>
            <AppNavSectionAppDriver/>
            <ContentNavSectionAppDriver contentNavLinkDataAll={contentNavLinkDataAll}/>
            <FooterAppDriver/>
        </AppDriver>
    );
});
