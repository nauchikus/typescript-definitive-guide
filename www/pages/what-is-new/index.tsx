import type { NextPage } from 'next'
import React from "react";
import Link from "next/link";
import {Divider, List, Timeline, Tree} from "antd";
import Title from "antd/lib/typography/Title";
import {Layer} from "../../components/layers/slide-layer/SlideLayer";
import {WinVersionListProvider} from "../../provaders/WinVersionListProvider";
import {toUrl} from "../../utils/converter-path-utils";
import {ClockCircleOutlined} from "@ant-design/icons";
import {WinMetadataProvider} from "../../provaders/WinMetadataProvider";
import {toLastVersion} from "../../utils/version-utils";
import {VersionInfo} from "../../utils/VersionInfo";

export interface Innovation {
    version: WinVersion;
    dateRelease: string;
    innovations: Innovation[];
}

interface IChaptersProps {
    innovationAll: Innovation[]
}
const Index: NextPage<IChaptersProps> = ({innovationAll, children}) => {
    const createListItem = (innovation: Innovation["innovations"][0], version: string, index: number) => {
        return (
            <List.Item key={`${version}_${index}`}>
                <Link href={`/what-is-new/${version}/${toUrl(innovation.innovationName)}`}>
                    {innovation.innovationName}
                </Link>
            </List.Item>
        );
    }
    const timelineItemAll = innovationAll.map(innovation => {
        const version = new VersionInfo(innovation.version);


        return (
            <Timeline.Item key={innovation.version}
                           dot={<ClockCircleOutlined className="timeline-clock-icon"/>}>
                <Link href={`/what-is-new/${version.mmp}`}>
                    <a className="innovation__link_main">
                        <span className="innovation__link__label_last-version">
                            {innovation.version}
                        </span>
                        <span className="innovation__link__label_date_release">
                            {innovation.dateRelease}
                        </span>
                    </a>
                </Link>
                <List size="small"
                      split={false}
                      dataSource={innovation.innovations}
                      renderItem={(innovation, index) => createListItem(innovation, version.mmp, index)}/>
            </Timeline.Item>
        );
    })

    return (
      <Layer>
          <Divider>
              <Title type="secondary">Что нового?</Title>
          </Divider>
          <Timeline>
              {timelineItemAll}
          </Timeline>
      </Layer>
  );
}

export default Index;

export interface Innovation {
    "id": string;
    "version": string;
    "innovationName": string;
    "dateRelease": string;
    "datePublication": string;
    "tags": string[];
}
export interface WinVersion {
    "version": string;
    "dateRelease": string;
    "datePublication": string;
}
export interface WinMetadata {
    "releaseHistory": WinVersion[];
    "colors": {
        "bookCoverColors": {
            "--color_light": string;
            "--color_middle-lite": string;
            "--color_accent": string;
            "--color_ambient": string;
        },
        "bookUpdateCurrentVersionCoverColors": {
            "--color": string;
        }
    };
    "innovations": Innovation[];
}



export async function getStaticProps() {
    const winVersionAll = await WinVersionListProvider.getData();

    let innovationMetadataAll = await Promise.all(winVersionAll.map(async version => {
        const metadata = await WinMetadataProvider.getData(version);

        return metadata;
    }));

    const innovationAll = innovationMetadataAll.map( metadata => {
        return {
            version: toLastVersion(metadata).version,
            dateRelease: metadata.releaseHistory[0].dateRelease,
            innovations: metadata.innovations
        };
    } ).reverse()

    return {
        props: {
            innovationAll,
        }
    };
}
