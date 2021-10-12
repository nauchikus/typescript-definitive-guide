import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import BaseAppLayout from "../layout/base-layout/base-app-layout";
import Head from "next/head";
import {useDocSearch} from "../hooks/use-doc-search";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
    useDocSearch();


  return (
      <BaseAppLayout>
          <Head>
              <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no"/>
              <link key="algolia_css"
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"/>
              <script async
                      key="algolia_script"
                      type="text/javascript"
                      src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script>
          </Head>
          <Component {...pageProps} />
      </BaseAppLayout>
  )
}
export default MyApp
