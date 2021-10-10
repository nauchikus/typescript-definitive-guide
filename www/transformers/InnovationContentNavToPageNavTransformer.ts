export class InnovationContentNavToPageNavTransformer {
    static readonly transform = (currentVersion: string, versionAll: string[]) => {
        const DEFAULT_PAGE = {
            title: ``,
            path: ``
        };

        const currentItemIndex = versionAll.indexOf(currentVersion);


        const isPrevPage = currentItemIndex >= 0;
        const isNextPage = currentItemIndex >= 0 && currentItemIndex < versionAll.length - 1;



        type TocTreeItem = typeof versionAll[0];

        const getPage = (version: string) => {
            if (!version) {
                return DEFAULT_PAGE;
            }

            const title = version;
            const path = version;

            return {title, path};
        };

        const pageNav = {
            isPrevPage,
            isNextPage,

            prevPage: getPage(versionAll[currentItemIndex - 1]),
            nextPage: getPage(versionAll[currentItemIndex + 1]),
        };


        return pageNav;
    }
}