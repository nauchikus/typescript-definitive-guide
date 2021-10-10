import type { NextPage } from 'next'
import Link from 'next/link'
import {Button, Layout} from "antd";
import {PresentationLayer} from "../components/layers/presintation-layer/PresentationLayer";
import {WinVersionListProvider} from "../provaders/WinVersionListProvider";
import {WinMetadataProvider} from "../provaders/WinMetadataProvider";
import {toLastVersion} from "../utils/version-utils";
import React from "react";

type HomeProps = {
    version: string
}
const Home: NextPage<HomeProps> = ({version}) => {
  return (
      <PresentationLayer className="index__layer">
          <h1 className="title">
              <span>
                  <span className="title_first">TypeScript</span>
                  <span className="title_version">{version}</span>
              </span>
              <span className="title_second">
                  <span>Подробное Руководство</span>
              </span>
          </h1>

          <h2 className="description">
              <span>Структурированная подробная документация по языку </span>
              <span className="description_ts">TypeScript</span>
          </h2>

          <nav className="home__nav">
              <Link href="/book/chapters">
                  <Button type="primary" size="large" shape="round">Оглавление</Button>
              </Link>
              <Link href="/what-is-new">
                  <Button type="primary" size="large" shape="round">Что нового?</Button>
              </Link>
              <Link href="/pdf">
                  <Button type="primary" size="large" shape="round" danger>Скачать Pdf</Button>
              </Link>
          </nav>

      </PresentationLayer>
  )
}

export default Home


export async function getStaticProps() {
    const winVersionAll = await WinVersionListProvider.getData();
    const lastVersion = winVersionAll
        .sort((a, b) => parseFloat(a) - parseFloat(b))
        .pop() as string;
    const metadata = await WinMetadataProvider.getData(lastVersion);

    const version = toLastVersion(metadata);


    return {
        props: {
            version: version.version
        }
    };
}