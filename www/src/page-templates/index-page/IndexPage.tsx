import "./index.page.scss";

import React from "react"
import {FC} from "react"
import { BookChapterPage, LocalizationPaths } from "../../localization";
import { useTranslator } from "../../react-hooks/translator.hook";
import { Link } from "gatsby";
import { useStores } from "../../mobx";
import { observer } from "mobx-react-lite";


interface IIndexPageProps {
}

const IndexPage: FC<IIndexPageProps> = observer(( {  } ) => {
    // let [[translation]]=useTranslator<[BookChapterPage]>(LocalizationPaths.BookChaptersPage);
    // let {gui}=translation;
  let { appStore } = useStores();

  return (
    <>
      <h1>IndexPage</h1>
      <h2>{ appStore.driverToggle.state }</h2>
      <Link to="/ru/book/chapters">chapters</Link>
    </>
  );
});

export default IndexPage;
