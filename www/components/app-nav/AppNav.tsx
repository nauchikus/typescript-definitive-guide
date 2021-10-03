import React, {FC, ReactElement, Reducer, useReducer, useState} from "react";
import {default as cn} from "classnames";
import Link from "next/link";
import {MoreVerticalIcon, TelegramIcon} from "../icons/icons";
import {Dropdown} from "../dropdown/Dropdown";
import {DropdownMenu} from "../dropdown/DropdownMenu";
import {DropdownToggle} from "../dropdown/DropdownToggle";
import {AppLinkBar} from "../app-link-bar/AppLinkNav";
import {useRouter} from "next/router";




export const AppNav: FC = () => {
    const router = useRouter();
    const routes = [
        {path: "/", title: "Главная"},
        {path: "/book/chapters", title: "Оглавление"},
        {path: "/what-is-new", title: "Что нового?"},
        {path: "/pdf", title: "Скачать Pdf"},
    ];

    const items = routes.map(({path, title}, index) => {
        const classes = cn("menu-item", "app-nav__menu-item_adaptive", {
            ["menu-item_active"]: router.route === path

        });

        return (
            <li key={index} className={classes}>
                <Link href={path}>
                    <a className="link">{title}</a>
                </Link>
            </li>
        )
    });


    return (
        <Dropdown className="app-nav__dropdown">
            <DropdownToggle className="app-nav__dropdown-toggle_adaptive">
                <MoreVerticalIcon/>
            </DropdownToggle>
            <DropdownMenu className="app-nav__dropdown-menu_adaptive">
                <div className="flat-panel">
                    <div className="app-nav__link-bar app-nav__link-bar_adaptive">
                        <AppLinkBar/>
                    </div>
                    <div className="divide-full_x app-nav__divide_adaptive"></div>
                    <div className="app-nav__nav">
                        <nav className="app-nav">
                            <ul className="menu app-nav__menu_adaptive">
                                {items}
                            </ul>
                        </nav>
                    </div>
                </div>
            </DropdownMenu>
        </Dropdown>
    );
}


