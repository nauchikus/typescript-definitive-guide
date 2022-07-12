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
import { InnovationMetadata, VersionMetadata } from "../../models/WinMetadata";
import { A4Layer } from "../../components/layers/a4-layer/A4Layer";

export interface Innovation {
    version: VersionMetadata;
    dateRelease: string;
    innovations: InnovationMetadata[];
}

// export const Yoomany = () => (
//     <iframe
//         src="https://yoomoney.ru/quickpay/shop-widget?writer=seller&targets=%D0%9D%D0%B0%20%D1%87%D0%B0%D1%88%D0%BA%D1%83%20%D0%BA%D0%BE%D1%84%D0%B5&default-sum=200&button-text=14&payment-type-choice=on&mobile-payment-type-choice=on&successURL=&quickpay=shop&account=410016532024848&"
//         width="423"
//         height="222"
//         frameBorder="0"
//         allowTransparency="true"
//         scrolling="no">
//     </iframe>
// )

interface IChaptersProps {
    innovationAll: Innovation[]
}
const Index: NextPage<IChaptersProps> = ({innovationAll, children}) => {
    const createListItem = (innovation: Innovation["innovations"][0], version: string, index: number) => {
        const createUrl = (path: string, hash: string) => {
            return `/what-is-new/${version}${hash.length ? `#${hash}` : ``}`;
        }

        return (
            <List.Item key={`${version}_${index}`}>
                <Link href={createUrl(version, toUrl(innovation.innovationName))}>
                    {innovation.innovationName}
                </Link>
            </List.Item>
        );
    }
    const timelineItemAll = innovationAll.map(innovation => {
        const version = new VersionInfo(innovation.version.toString());


        return (
            <Timeline.Item key={innovation.version.toString()}
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
            <A4Layer className="toc__layer">
                <div className="toc__header">
                    <h1 className="toc__title">Что нового?</h1>
                </div>
                <Timeline>
                    { timelineItemAll }
                </Timeline>
            </A4Layer>
        </Layer>
    );
}

export default Index;





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
