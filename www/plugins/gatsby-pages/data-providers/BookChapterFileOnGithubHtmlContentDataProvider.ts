import {
  getWhatIsNewContentHtmlRequest,
  IGetContentHtmlResponse,
} from "../graphql-querys"
import { GraphQlResponse } from "../../types/gatsby-create-pages"
import {
  BaseFileOnGithubHtmlContentDataProvider,
  ResultData,
} from "./BaseFileOnGithubHtmlContentDataProvider"

export interface BookChapterFileOnGithubHtmlContentGetDataParams {
  lang: string
  chapterName: string
  chapterEscapedGithubName: string
}
export class BookChapterFileOnGithubHtmlContentDataProvider extends BaseFileOnGithubHtmlContentDataProvider<
  BookChapterFileOnGithubHtmlContentGetDataParams
> {
  private createGraphQlRequest(locale: string, chapterEscapedName: string) {
    return {
      regexp: `/.*\/book\/${locale}\/chapters\/${chapterEscapedName}\/content\\.md/`,
    }
  }

  async getData(
    params: BookChapterFileOnGithubHtmlContentGetDataParams
  ): Promise<ResultData> {
    let response = await super.load(
      getWhatIsNewContentHtmlRequest(),
      this.createGraphQlRequest(params.lang, params.chapterEscapedGithubName)
    )

    if (!super.isResponseValid(response)) {
      throw new Error(`Chapter with name "${params.chapterName}" not exists.`)
    }

    return Promise.resolve(
      super.responseToData(
        response as Required<GraphQlResponse<IGetContentHtmlResponse>>
      )
    )
  }
}
