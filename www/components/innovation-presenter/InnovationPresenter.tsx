import React, {FC, ReactElement, Reducer, useMemo, useReducer} from "react";
import {InnovationPage} from "../../transformers/WinMetadataToInnovationPageInfoAsyncTransformer";
import {VersionInfo} from "../../utils/VersionInfo";
import Image from "next/image"
import {Head} from "next/document";
import {
    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton, TwitterIcon,
    TwitterShareButton,
    VKIcon,
    VKShareButton
} from "next-share";




interface IInnovationPresenterProps {
  data: InnovationPage;
}



export const InnovationPresenter: FC<IInnovationPresenterProps> = ({data} ) => {
    const version = useMemo(() => new VersionInfo(data.version.version), [data]);
    const share = {
        url: `https://typescript-definitive-guide/what-is-new/${version.mpp}`,
        quote: ``
    };


    return (
        <section key={data.version.version} id={data.version.version} className="content__section innovation-presenter">
            <div className="innovation-presenter__info-bar">
                <div className="innovation-presenter__info-bar__section innovation-presenter__info-bar__section_left">
                    <span className="innovation-presenter__info-bar__section__label">Статус</span>
                    <span className="innovation-presenter__info-bar__label_version">
                        {version.preReleaseName}
                    </span>
                </div>
                <div className="innovation-presenter__info-bar__section innovation-presenter__info-bar__section_right">
                    <span className="innovation-presenter__info-bar__section__label">Дата публикации</span>
                    <time className="innovation-presenter__info-bar__label_last-update" dateTime={data.version.dateRelease}>
                        {data.version.dateRelease}
                    </time>
                </div>
            </div>
            <h1 className="innovation-presenter__title">{version.mmp}</h1>
            <div className="innovation-presenter__share-bar">
                <VKShareButton className="share-btn" url={share.url} image={'./next-share.png'}>
                    <VKIcon size={32} round />
                </VKShareButton>
                <FacebookShareButton className="share-btn" url={share.url} quote={share.quote}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton className="share-btn" url={share.url} title={share.quote}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <TelegramShareButton className="share-btn" url={share.url} title={share.quote}>
                    <TelegramIcon size={32} round />
                </TelegramShareButton>
            </div>
        </section>
    );
};
