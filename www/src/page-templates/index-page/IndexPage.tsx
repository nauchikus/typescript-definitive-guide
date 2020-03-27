import "./index.page.scss";

import React from "react"
import {FC} from "react"
import { Link } from "gatsby";
import { observer } from "mobx-react-lite";


interface IIndexPageProps {
}

const IndexPage: FC<IIndexPageProps> = observer(( {  } ) => {
    // let [[translation]]=useTranslator<[BookChapterPage]>(LocalizationPaths.BookChaptersPage);
    // let {gui}=translation;
  return (
    <>
      <h1>IndexPage</h1>
      <Link to="/ru/book/chapters">chapters</Link>
    </>
  );
});

export default IndexPage;
