import "./index.page.scss";

import React from "react"
import {FC} from "react"
import { BookChapterPage, LocalizationPaths } from "../../localization";
import { useTranslator } from "../../react__hooks/translator.hook";
import { Link } from "gatsby";
import { useShareStores } from "../../mobx";
import { observer } from "mobx-react-lite";


interface IIndexPageProps {
}

const IndexPage: FC<IIndexPageProps> = observer(( {  } ) => {
    // let [[translation]]=useTranslator<[BookChapterPage]>(LocalizationPaths.BookChaptersPage);
    // let {gui}=translation;
  let { appStore } = useShareStores();

  return (
    <>
      <h1>IndexPage</h1>
      <h2>{ appStore.driverToggle.state }</h2>
      <Link to="/ru/book/chapters">chapters</Link>
    </>
  );
});

export default IndexPage;
