import type {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import Link from 'next/link';
import Head from "next/head";
import React, {useEffect, useMemo} from "react";
import {Avatar, Button, Descriptions, Tooltip} from "antd";
import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    DownOutlined,
    LeftOutlined,
    RightOutlined,
    UpOutlined
} from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import {observer, useLocalObservable} from "mobx-react-lite";
import {WinVersionListProvider} from "../../provaders/WinVersionListProvider";
import {InnovationContentNavToPageNavTransformer} from "../../transformers/InnovationContentNavToPageNavTransformer";
import {InnovationMetadataToContentNavTransformer} from "../../transformers/InnovationMetadataToContentNavTransformer";
import {
    InnovationPage,
    WinMetadataToInnovationPageInfoAsyncTransformer
} from "../../transformers/WinMetadataToInnovationPageInfoAsyncTransformer";
import {InnovationPresenter} from "../../components/innovation-presenter/InnovationPresenter";
import {useContentNavStore} from "../../stores/use-content-nav-store";
import {ContentNavService} from "../../services/ContentNavService";
import {useContentAutoscroll} from "../../hooks/content-autoscroll-hook";
import {ContentSlideLayer, DriverSlideLayer, SlideLayer} from "../../components/layers/slide-layer/SlideLayer";
import {WinMetadataProvider} from "../../provaders/WinMetadataProvider";
import {EMPTY_ARRAY} from "../../utils/react-utils";
import {ContentNavContext} from "../../contexts/content-nav-context";
import {DriverContentNav} from "../../components/driver-content-nav/DriverContentNav";
import {ContentNavItem} from "../../models/ContentNav";
import {GithubFileInfoBar} from "../../components/github-file-info-bar/GithubFileInfoBar";
import {useCopyToBufferButtonFromNativeMarkup} from "../../hooks/copy-to-buffer-button-from-native-markup-hook";

import {components} from "../../components/contents/content-component-map";
import {addClasses} from "../../remark/add-classes";
import { MetaMultiDescription } from "../../components/meta-multi-description/MetaMultyDescription";
import { appConfig } from "../../app-config";

/* local types */
type Contributor = {
    name: string;
    avatar: string;
    bio: string;
    githubUrl: string;
}
type FileInfo = {
    lastUpdate: string,
    contributorAll: Contributor[];
}
// -----
type PageNav = {
    title: string;
    path: string;
}
type PageNavInfo = {
    isPrevPage: boolean;
    isNextPage: boolean;

    prevPage: PageNav;
    nextPage: PageNav;
}
// ----
type LevelId = {
    levelId: string;
}
// ----

// ----
// ----

/* local types */

type Innovations = {
    innovationPage: InnovationPage;
    contentNavData: ContentNavItem;
    pageNav: PageNavInfo;

    pageDescription: string;

}
const Innovation:NextPage<Innovations> = observer(({ innovationPage, pageDescription, pageNav, contentNavData, children }) => {

    const contentNavService = useMemo(() => new ContentNavService(contentNavData), EMPTY_ARRAY);

    useEffect(() => {
        contentNavService.update(contentNavData);
    }, [contentNavData]);


    const contentNavStore = useContentNavStore(contentNavService);

    useContentAutoscroll();
    useCopyToBufferButtonFromNativeMarkup();



    const sections = innovationPage.sections.map(({key, elementId, markdown, githubFileInfo}) => {
        return (
            <section key={key} id={elementId} className="content__section">
                <aside>
                    <GithubFileInfoBar githubFileInfo={githubFileInfo} />
                </aside>
                <ReactMarkdown remarkPlugins={[addClasses]} components={components} children={markdown} />
            </section>
        )
    });


    return (
      <ContentNavContext.Provider value={ contentNavStore }>
          <Head>
              <MetaMultiDescription title={appConfig.title} description={pageDescription} />
          </Head>
          <SlideLayer>
              <DriverSlideLayer>
                  <div className="driver">
                      <DriverContentNav/>
                  </div>
              </DriverSlideLayer>
              <ContentSlideLayer>
                  <div className="content-box">
                      <div className="content-box__page-nav content-box__page-nav_left">
                          <div className="page-nav__bar page-nav__bar_left">
                              <Link href={ pageNav.prevPage.path }>
                                  <Tooltip placement="right" title="Предыдущая глава">
                                      <Button className="page-nav__btn"
                                              type="primary"
                                              size="middle"
                                              icon={ <LeftOutlined/> }
                                              disabled={ !pageNav.isPrevPage }/>
                                  </Tooltip>
                              </Link>
                          </div>
                      </div>
                      <main id="content" className="content-box__html">
                          <InnovationPresenter data={ innovationPage }/>
                          { sections }
                          <aside className="content-box__page__content-bar_post">
                              <nav className="post-content-bar__nav">
                                  <Link href={ pageNav.prevPage.path }>
                                      <Button className="post-content-bar__nav__btn post-content-bar__nav__btn_prev"
                                              size="large"
                                              href={ pageNav.prevPage.path }
                                              disabled={ !pageNav.isPrevPage }
                                              block>
                                          <div className="post-content-bar__nav__btn_padding-fix">
                                              <ArrowLeftOutlined className="post-content-bar__nav__btn__icon_prev"/>
                                              <span
                                                className="post-content-bar__nav__btn__label">{ pageNav.prevPage.title }</span>
                                          </div>
                                      </Button>
                                  </Link>
                                  <Link href={ pageNav.nextPage.path }>
                                      <Button className="post-content-bar__nav__btn post-content-bar__nav__btn_next"
                                              size="large"
                                              href={ pageNav.nextPage.path }
                                              disabled={ !pageNav.isNextPage }
                                              block>
                                          <div className="post-content-bar__nav__btn_padding-fix">
                                              <span
                                                className="post-content-bar__nav__btn__label">{ pageNav.nextPage.title }</span>
                                              <ArrowRightOutlined className="post-content-bar__nav__btn__icon_next"/>
                                          </div>
                                      </Button>
                                  </Link>
                              </nav>
                          </aside>
                      </main>
                      <div className="content-box__page-nav content-box__page-nav_right">
                          <div className="page-nav__bar page-nav__bar_right">
                              <Tooltip placement="left" title="Предыдущая подглава">
                                  <Button className="page-nav__btn"
                                          type="primary"
                                          icon={ <UpOutlined/> }
                                          disabled={ !contentNavStore.isPrev }
                                          onClick={ () => contentNavStore.goPrev() }/>
                              </Tooltip>
                              <Link href={ pageNav.nextPage.path }>
                                  <Tooltip placement="left" title="Следующая глава">
                                      <Button className="page-nav__btn page-nav__btn_next-page"
                                              type="primary"
                                              icon={ <RightOutlined/> }
                                              disabled={ !pageNav.isNextPage }/>
                                  </Tooltip>
                              </Link>
                              <Tooltip placement="left" title="Следующая подглава">
                                  <Button className="page-nav__btn"
                                          type="primary"
                                          icon={ <DownOutlined/> }
                                          disabled={ !contentNavStore.isNext }
                                          onClick={ () => contentNavStore.goNext() }/>
                              </Tooltip>
                          </div>
                      </div>
                  </div>
              </ContentSlideLayer>
          </SlideLayer>
      </ContentNavContext.Provider>
    );
});



export const getStaticPaths: GetStaticPaths = async (context) => {
    const winVersionAll = await WinVersionListProvider.getData();

    const paths = winVersionAll.map(version => {
        return {params: {version}};
    });


    return {
        paths,
        fallback: false,
    }
}

type Params = {
    params: {
        version: string;
    }
}
export const getStaticProps: GetStaticProps = async ({params}: Params) => {
    const winVersionAll = await WinVersionListProvider.getData();
    const metadata = await WinMetadataProvider.getData(params.version);
    const innovationPage = await WinMetadataToInnovationPageInfoAsyncTransformer.transform(metadata);
    const contentNavData = InnovationMetadataToContentNavTransformer.transform(metadata);
    const pageNav = InnovationContentNavToPageNavTransformer.transform(
        params.version,
        winVersionAll,
    );


    return {
        props: {
            innovationPage,
            contentNavData,
            pageNav,

            pageDescription: `Обзор нововведений и изменений для версии ${ params.version }`
        }
    };
}

export default Innovation;