import { createContext, useContext } from "react";
import { IBookChapterPageNavData } from "../page-templates/book-page/BookPageProvider";
import { LocationPartial, RouterStore } from "../stores/RouterStore";


interface INotFoundPageMobxEntryParams {
  // bookTocTree: TreeNode<BookTocNode>[];
  locale: string;
  location:LocationPartial;
}


export class NotFoundPageMobxEntry {
  private static instance: ReturnType<typeof NotFoundPageMobxEntry.create>;

  static create = ({ locale,location }: INotFoundPageMobxEntryParams) => {
    let router = new RouterStore(location, locale);

    return {
      router,
    };
  }
  static getInstance(params: INotFoundPageMobxEntryParams){
    if (!NotFoundPageMobxEntry.instance) {
      NotFoundPageMobxEntry.instance = NotFoundPageMobxEntry.create(params);
    }

    return NotFoundPageMobxEntry.instance;
  }
}


export type UseBookPageStores=ReturnType<typeof NotFoundPageMobxEntry.getInstance>;


export const MobxBookChapterPageContext = createContext<UseBookPageStores | null>( null );
export const useBookChapterStores = () => useContext( MobxBookChapterPageContext ) as UseBookPageStores;
