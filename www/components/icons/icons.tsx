import React, {FC} from "react";
import {default as cn} from "classnames";

import "./icon.module.scss";

import Telegram from "../../assets/svg/icons/telegram.svg";
import Github from "../../assets/svg/icons/iconmonstr-github-1.svg";
import DriverOpen from "../../assets/svg/icons/format_indent_increase_black_24dp.svg";
import DriverClose from "../../assets/svg/icons/format_indent_decrease_black_24dp.svg";
import MoreHorizontal from "../../assets/svg/icons/more_horiz_black_24dp.svg";
import MoreVertical from "../../assets/svg/icons/more_vert_black_24dp.svg";
import Magnifier from "../../assets/svg/icons/search_black_24dp.svg";
import BookSection from "../../assets/svg/icons/chrome_reader_mode_black_18dp.svg";
import Link from "../../assets/svg/icons/iconmonstr-link.svg";


type ClassName = {
    className?: string;
}

export const DriverOpenIcon: FC = () => <DriverOpen className="svg-icon" />
export const DriverCloseIcon: FC = () => <DriverClose className="svg-icon" />
export const MoreHorizontalIcon: FC = () => <MoreHorizontal className="svg-icon" />
export const MoreVerticalIcon: FC = () => <MoreVertical className="svg-icon" />
export const BookSectionIcon: FC = () => <BookSection className="svg-icon-with-inherit-fill" />


export const TelegramIcon: FC = () => <Telegram className="svg-icon" />
export const GithubIcon: FC<ClassName> = ({className}) =>
    <Github className={cn("svg-icon", className)} />
export const MagnifierIcon: FC<ClassName> = ({className}) =>
    <Magnifier className={cn("svg-icon", className)} />