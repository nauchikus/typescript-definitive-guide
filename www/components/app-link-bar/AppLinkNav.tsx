import React, {FC, ReactElement, Reducer, useReducer, useState} from "react";
import {GithubIcon, MoreHorizontalIcon, MoreVerticalIcon, TelegramIcon} from "../icons/icons";
import {SvgLinkButton} from "../buttons/svg-link-button/SvgLinkButton";


export const AppLinkBar: FC = () => (
    <nav className="app-link-bar">
        <ul className="menu app-link-bar__menu">
            <li>
                <SvgLinkButton className="app-link-bar__icon-btn" href="" title="Следить за выходом новых версий в Telegram">
                    <TelegramIcon />
                </SvgLinkButton>
            </li>
            <li>
                <SvgLinkButton className="app-link-bar__icon-btn" href="" title="Посетить Github">
                    <GithubIcon className="app-link-bar__github-svg-icon" />
                </SvgLinkButton>
            </li>
        </ul>
    </nav>
);


