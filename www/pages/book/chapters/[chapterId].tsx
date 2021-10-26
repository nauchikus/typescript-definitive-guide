import type {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import Link from 'next/link';
import Head from "next/head";
import {ContentSlideLayer, DriverSlideLayer, SlideLayer} from "../../../components/layers/slide-layer/SlideLayer";
import React, {useEffect, useMemo} from "react";
import {createBox, generateContentSectionIncrementalId, generateIndex} from "../../../utils/string-utils";


import {DriverContentNav} from "../../../components/driver-content-nav/DriverContentNav";
import {Remark} from "../../../remark/Remark";
import {Avatar, Button, Descriptions, Tooltip} from "antd";
import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    DownOutlined,
    LeftOutlined,
    RightOutlined,
    UpOutlined
} from "@ant-design/icons";
import {EMPTY_ARRAY} from "../../../utils/react-utils";
import {useContentNavStore} from "../../../stores/use-content-nav-store";
import {observer, useLocalObservable} from "mobx-react-lite";
import {useContentAutoscroll} from "../../../hooks/content-autoscroll-hook";
import {ContentNavService} from "../../../services/ContentNavService";
import {ContentNavContext} from "../../../contexts/content-nav-context";
import {BookTocFileProvider} from "../../../provaders/BookChapterFileProvider";
import {BookChapterCommitInfoProviderCommit} from "../../../provaders/BookChapterCommitInfoProviderCommit";
import {CommitInfoTransformer} from "../../../transformers/CommitInfoTransformer";
import {BookChapterContentNavToPageNavTransformer} from "../../../transformers/BookChapterContentNavToPageNavTransformer";
import {GithubFileInfo} from "../../../models/GithubFileInfo";
import {BookTocProvider} from "../../../provaders/BookTocProvider";
import {toUrl} from "../../../utils/converter-path-utils";
import {BookTocToContentNavTransformer} from "../../../transformers/BookTocToContentNavTransformer";
import {ContentNavItem} from "../../../models/ContentNav";
import {GithubFileInfoBar} from "../../../components/github-file-info-bar/GithubFileInfoBar";
import ReactMarkdown from "react-markdown";
import {addClasses} from "../../../remark/add-classes";
import {components} from "../../../components/contents/content-component-map";
import {
    BookContentSectionInfoTransformer,
    ChapterSectionInfo
} from "../../../transformers/BookContentSectionInfoTransformer";
import {BookChapterMdToSectionMdTransformer} from "../../../transformers/BookChapterMdToSectionMdTransformer";
import {
    ContentNavToUrlResolverTransformer,
    UrlResolver
} from "../../../transformers/ContentNavToUrlResolverTransformer";
import { MetaMultiDescription } from "../../../components/meta-multi-description/MetaMultyDescription";



/* local types */

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


type Chapters = {
    urlResolver: UrlResolver;
    sectionInfoAll: ChapterSectionInfo[];
    contentNavData: ContentNavItem;
    githubFileInfo: GithubFileInfo;
    pageNav: PageNavInfo;

    pageDescription: string;
}
const Chapters = observer<Chapters>(({pageDescription, urlResolver, sectionInfoAll, pageNav, githubFileInfo, contentNavData, children}) => {
    const contentNavService = useMemo(() => new ContentNavService(contentNavData), EMPTY_ARRAY);


    useEffect(() => {
        contentNavService.update(contentNavData);
    }, [contentNavData]);

    const contentNavStore = useContentNavStore(contentNavService);

    useContentAutoscroll();


    const sections = sectionInfoAll.map(({key, elementId, markdown}) => {
        return (
            <section key={key} id={elementId} className="content__section">
                <ReactMarkdown remarkPlugins={[addClasses]}
                               transformImageUri={(path)=>{
                                   return urlResolver.image.concat(path.substring(path.lastIndexOf(`/`) + 1))
                               }}
                               components={components}
                               children={markdown} />
            </section>
        )
    });





    return (
        <ContentNavContext.Provider value={contentNavStore}>
            <Head>
                <MetaMultiDescription description={pageDescription} />
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
                                <Link href={pageNav.prevPage.path}>
                                    <Tooltip placement="right" title="Предыдущая глава">
                                        <Button className="page-nav__btn"
                                                type="primary"
                                                size="middle"
                                                icon={<LeftOutlined/>}
                                                disabled={!pageNav.isPrevPage}/>
                                    </Tooltip>
                                </Link>
                            </div>
                        </div>
                        <main id="content" className="content-box__html">
                            <aside>
                                <GithubFileInfoBar githubFileInfo={githubFileInfo} />
                            </aside>
                            {sections}
                            <aside className="content-box__page__content-bar_post">
                                <nav className="post-content-bar__nav">
                                    <Link href={pageNav.prevPage.path}>
                                        <Button className="post-content-bar__nav__btn post-content-bar__nav__btn_prev"
                                                size="large"
                                                href={pageNav.prevPage.path}
                                                disabled={!pageNav.isPrevPage}
                                                block>
                                            <div className="post-content-bar__nav__btn_padding-fix">
                                                <ArrowLeftOutlined className="post-content-bar__nav__btn__icon_prev"/>
                                                <span className="post-content-bar__nav__btn__label">{pageNav.prevPage.title}</span>
                                            </div>
                                        </Button>
                                    </Link>
                                    <Link href={pageNav.nextPage.path}>
                                        <Button className="post-content-bar__nav__btn post-content-bar__nav__btn_next"
                                                size="large"
                                                href={pageNav.nextPage.path}
                                                disabled={!pageNav.isNextPage}
                                                block>
                                            <div className="post-content-bar__nav__btn_padding-fix">
                                                <span className="post-content-bar__nav__btn__label">{pageNav.nextPage.title}</span>
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
                                            icon={<UpOutlined/>}
                                            disabled={!contentNavStore.isPrev}
                                            onClick={()=>contentNavStore.goPrev()}/>
                                </Tooltip>
                                <Link href={pageNav.nextPage.path}>
                                    <Tooltip placement="left" title="Следующая глава">
                                        <Button className="page-nav__btn page-nav__btn_next-page"
                                                type="primary"
                                                icon={<RightOutlined/>}
                                                disabled={!pageNav.isNextPage}/>
                                    </Tooltip>
                                </Link>
                                <Tooltip placement="left" title="Следующая подглава">
                                    <Button className="page-nav__btn"
                                            type="primary"
                                            icon={<DownOutlined/>}
                                            disabled={!contentNavStore.isNext}
                                            onClick={()=>contentNavStore.goNext()}/>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </ContentSlideLayer>
            </SlideLayer>
        </ContentNavContext.Provider>
    )
});

export default Chapters;

export const getStaticPaths: GetStaticPaths = async (context) => {
    const bookToc = await BookTocProvider.getData();

    const paths = bookToc.map(({title}) => {
        return {
            params: {
                chapterId: toUrl(title)
            }
        };
    });


    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const bookToc = await BookTocProvider.getData();

    const currentBookToc = bookToc.find(item => toUrl(item.title) === params.chapterId);



    if (!currentBookToc) {
        throw new Error(`Book toc item for url "${params.chapterId}" not found.`);
    }

    const currentContentNavItem = BookTocToContentNavTransformer.transform(currentBookToc, bookToc);


    const urlResolver = ContentNavToUrlResolverTransformer.transform(currentContentNavItem);

    /* get book chapter from github */

    const {index, section, title} = currentContentNavItem;
    const name = `${generateIndex(index, 3)}.(${section}) ${title}`;


    const markdown = await BookTocFileProvider.getData(name);
    const markdownAll = BookChapterMdToSectionMdTransformer.transform(markdown);

    const sectionInfoAll = BookContentSectionInfoTransformer.transform(markdownAll, currentContentNavItem);

    // const {value: html} = await Remark.compile(contentMd, {
    //     addTagBar: {isActive: false}
    // });

    /* file commit info */
    const commitAll = await BookChapterCommitInfoProviderCommit.getData(name);
    const githubFileInfo = CommitInfoTransformer.transform(commitAll);

    /* page nav (prev or next page data) */

    const pageNav = BookChapterContentNavToPageNavTransformer.transform(
        currentBookToc,
        bookToc
    );


    const getMainTitle = (markdown: string) => {
        const [, title] = markdown.match( /^(?:# )(.*)$/m );

        if ( !title ) {
            throw new Error( `Chapter description not found` );
        }

        return title.trim();
    }

    return {
        props: {
            urlResolver,
            sectionInfoAll,
            githubFileInfo,
            pageNav,
            contentNavData: currentContentNavItem,

            pageDescription: getMainTitle( markdown )
        }
    };
}
