import { mapActions, mapGetters } from 'vuex';
import { SelectionExcludes } from '@/enums/SelectionExcludes';

export default {
    props: {
        toggle: Boolean
    },
    data(this: any) {
        return {
            SelectionExcludes
        };
    },
    computed: {
        ...mapGetters([
            'bookCurrentChapterContent',
            'isAppDrawerToggle',
            'scrollToElementWithId',
            'bookNextChapterPath',
            'bookPrevChapterPath',

            'isBookNextChapter',
            'isBookPrevChapter',

            'isBookChapterTextSelected',
            'bookChapterTextSelectionPosition',

            'getChapterNameByChapterPath',
        ]),
        chapterRepoHref(this: any) {
            let {
                params: { chapter:chapterPath }
            } = this.$route;
            let chapterName = this.getChapterNameByChapterPath( chapterPath );


            let chapterRepoHref = `https://github.com/nauchikus/typescript-definitive-guide/blob/master/chapters/${chapterName}.md`;

            return chapterRepoHref;
        },
        drawerState(this: any) {
            return this.isAppDrawerToggle ? 'open' : 'close';
        },
        reportAboutSyntaxErrorButtonPositionStyle(this: any) {
            return { top: `${this.bookChapterTextSelectionPosition.y}px` };
        }
    },
    mounted(this: any) {},
    methods: {
        ...mapActions([
            'scrollBookContentBy',
            'scrollBookContentTo',
            'bookChapterTextSelected',
            'bookChapterTextUnselected',
            'showReportAboutSyntaxErrorPopup',
            'hideReportAboutSyntaxErrorPopup'
        ]),
        bookContent_click(this: any, event: MouseEvent) {
            let target = event.target as Node;

            if ((target as HTMLElement).tagName !== 'A') {
                return;
            }

            let a = target as HTMLLinkElement;
            let href = a.href;

            let path = href.replace(window.location.origin, '');

            this.$router.push(path);
        },
        bookNextChapter(this: any) {
            this.$router.push(this.bookNextChapterPath);
        },
        bookPrevChapter(this: any) {
            this.$router.push(this.bookPrevChapterPath);
        },
        reportAboutSyntaxErrorButton_clickHandler(this: any) {
            // this.bookChapterTextUnselected();
            // this.showReportAboutSyntaxErrorPopup();
        }
    },
    watch: {
        bookCurrentChapterContent(this: any) {
            let { subchapter: subchapterId } = this.$route.params;

            if (subchapterId) {
                this.scrollBookContentBy(subchapterId);
            }
        },
        scrollToElementWithId(this: any, scrollToElementWithId: string) {
            this.$nextTick(() => {
                let scrollableElement = this.$refs.bookChapterContentRef;

                if (scrollToElementWithId === '') {
                    this.scrollBookContentTo({ x: 0, y: 0 });
                } else {
                    let scrollElement = scrollableElement.querySelector(
                        `#${scrollToElementWithId}`
                    );

                    if (!scrollElement) {
                        throw new Error(
                            `element with id "${scrollToElementWithId}" not found`
                        );
                    }

                    let { offsetTop } = scrollElement;

                    this.scrollBookContentTo({
                        x: 0,
                        y: offsetTop
                    });
                }
            });
        }
    }
};
