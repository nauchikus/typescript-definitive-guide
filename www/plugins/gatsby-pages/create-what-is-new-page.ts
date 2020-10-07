import * as path from 'path';

import * as StringUtils from "../../src/utils/string-utils";
import * as ConverterPathUtils from "../../src/utils/converter-path-utils";
import * as EnvUtils from "../../src/utils/env-utils";
import {RouterUtils} from '../../src/utils/router-utils';

import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import {Langs, Locales} from "../types/locales";
import { CustomGatsbyNodeType } from '../gatsby-node-types';
import { AppLocalization } from "../../src/types/app-localizations";
import { IWhatIsNewTocGatsbyNode } from "./create-what-is-new-toc-page";
import { TreeNode } from "../../src/stores/WhatIsNewTocTreeStore";
import { IWhatIsNewToc } from "../../src/types/IWhatIsNewToc";
import { Version } from "../../src/utils/Version";
import { GithubRepositoryInfoDataProvider } from "./data-providers/GithubRepositoryInfoDataProvider";
import { CommitHistoryToCommitInfoTransformer } from "./transformers/CommitHistoryToCommitInfoTransformer";
import { WinFileOnGithubHtmlContentDataProvider } from "./data-providers/WinFileOnGithubHtmlContentDataProvider";
import { WinFileOnGithubCommitHistoryDataProvider } from "./data-providers/WinFileOnGithubCommitHistoryDataProvider";
import {IAppLocalizationGatsbyNode} from "../types/gatsby-node-types";
import {ICreatePageSharedOptions} from "../types/ICreatePageSharedOptions";



const winTocToPageNav = ( winToc: IWhatIsNewToc[] ) =>
  winToc.map( winTocItem => {
      let version = new Version( winTocItem.releaseHistory[ 0 ].version );


      return {
          name: version.mmp,
          path: version.mmp,

          sections: winTocItem.innovations
            .map( innovation => ( {
                name: innovation.innovationName,
                path: innovation.path,
                data: {
                    version: innovation.version
                }
            } ) )
      };
  }  );


interface ICreateWinFileOnGithubPathParams {
    versionMMP:string;
    innovationName: string;
}
//Оператор опциональной последовательности (?.)
const createWinFileOnGithubPath = ( { versionMMP, innovationName }: ICreateWinFileOnGithubPathParams ) => (
  `what-is-new/${versionMMP}/${innovationName}/content.md`
);
const createEditeWinFileOnGithubLink = ( { versionMMP, innovationName }: ICreateWinFileOnGithubPathParams ) => (
  `https://github.com/${EnvUtils.getRepositoryOwner()}/${EnvUtils.getRepositoryName()}/blob/what-is-new/${versionMMP}/${innovationName}/content.md`
);



export const createPages: GatsbyCreatePages<ICreatePageSharedOptions> = async ( helpers, options ) => {
    let { actions: { createPage }, getNodesByType, graphql } = helpers;
    let { locale, lang } = options;

    let [{ localization }] = getNodesByType<IAppLocalizationGatsbyNode>( CustomGatsbyNodeType.AppLocalization )
        .filter( node => node.lang === lang );
    let [{ toc: winToc }] = getNodesByType<IWhatIsNewTocGatsbyNode>( CustomGatsbyNodeType.WhatIsNewToc );

    let winTocTree: TreeNode<IWhatIsNewToc>[] = winToc.map( ( node, index ) => ( {
        id: index.toString(),
        isCollapse: false,
        index,
        data: node
    } ) );


    let pageNavDataAll = winTocToPageNav( winToc );

    let githubRepositoryInfoDataProvider = new GithubRepositoryInfoDataProvider( graphql );
    let { repository } = await githubRepositoryInfoDataProvider.getData();


    let winPagePromiseAll = winToc.map( async ( winTocItem ) => {
        let { innovations, ...innovationInfo } = winTocItem;
        let versionMMP = new Version( innovationInfo.releaseHistory[ 0 ].version ).mmp;
        let innovationVersionMMP = StringUtils.escapeString( versionMMP );


        let innovationDataPromiseAll = innovations.map( async ( innovation ) => {
            let innovationEscapedName = StringUtils.escapeString( innovation.innovationName );


            let winFileOnGithubHtmlContentDataProvider = new WinFileOnGithubHtmlContentDataProvider( graphql )
            let { html:innovationContentHtml } = await winFileOnGithubHtmlContentDataProvider.getData( {
                innovationVersionMMP,
                innovationEscapedName,
                versionMMP,
                innovationName: innovation.innovationName
            } );

            let winFileOnGithubCommitHistoryDataProvider = new WinFileOnGithubCommitHistoryDataProvider( graphql )
            let { commitHistoryAll } = await winFileOnGithubCommitHistoryDataProvider.getData( {
                repository,
                versionMMP,
                innovationName: innovation.innovationName
            } );


            let commitHistoryToCommitInfoTransformer = new CommitHistoryToCommitInfoTransformer( graphql );
            let commitInfoAll = await commitHistoryToCommitInfoTransformer.transform( commitHistoryAll );


            let fileOnGithubLink = createEditeWinFileOnGithubLink( { versionMMP, innovationName: innovationEscapedName } );



            let innovationData = {
                ...innovation,
                html: innovationContentHtml,
                commitInfoAll,
                fileOnGithubLink,
            };

            return innovationData;
        } );


        let innovationDataAll = await Promise.all( innovationDataPromiseAll );
        let innovationData = {
            ...innovationInfo,
            innovations: innovationDataAll
        };



        await createPage( {
            path: RouterUtils.whatIsNewRoutes.getWhatIsNewRoute( { version: versionMMP } ),
            component: path.resolve( __dirname, "../../src/page-templates/what-is-new-page/WhatIsNewPageProvider.tsx" ),
            context: {
                locale,
                localization,
                innovationData,
                winTocTree,
                pageNavDataAll,
            }
        } );
    } );

    await Promise.all( winPagePromiseAll );
};
