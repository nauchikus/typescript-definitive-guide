import React, {FC, ReactElement, useMemo} from "react";
import {Avatar, Button, Tooltip} from "antd";
import {GithubFileInfo} from "../../models/GithubFileInfo";
import {EMPTY_ARRAY} from "../../utils/react-utils";
import {Head} from "next/document";


interface IContributorBarProps {
    githubFileInfo: GithubFileInfo;
}

export const GithubFileInfoBar: FC<IContributorBarProps> = ({githubFileInfo} ) => {
    const lastUpdateDate = useMemo(() => new Date(githubFileInfo.lastUpdate).toLocaleDateString(),
        EMPTY_ARRAY);

    const avatarGroupStyles = useMemo(() => ({
        color: '#fff',
        backgroundColor: '#1890ff'
    }), EMPTY_ARRAY);

    const avatars = githubFileInfo.contributorAll.map(({name, avatar, githubUrl}, index) => (
        <Tooltip key={index} title={name} placement="top">
            <Button className="github-file-info-bar__avatar-btn" shape="circle" href={githubUrl} target="_blank">
                <Avatar src={avatar}/>
            </Button>
        </Tooltip>
    ))

    return (
        <div className="github-file-info-bar">

            <div className="github-file-info-bar__section github-file-info-bar__section_contributors">
                <span className="github-file-info-bar__label">Контрибьютеры</span>
                <Avatar.Group maxCount={5} maxStyle={avatarGroupStyles}>
                    {avatars}
                </Avatar.Group>
            </div>

            <div className="github-file-info-bar__section github-file-info-bar__section_update-info">
                <span className="github-file-info-bar__label">Обновлено</span>
                <span className="github-file-info-bar__label_date">{lastUpdateDate}</span>
            </div>

        </div>
  );
};

