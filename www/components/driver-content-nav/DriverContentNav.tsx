import React, {FC, ReactElement, ReactNode, useLayoutEffect, useRef, useState} from "react";
import Link from "next/link";
import {default as cn} from "classnames";
import {Menu} from "antd";
import {observer} from "mobx-react-lite";
import {useContentNav} from "../../contexts/content-nav-context";


interface IDriverContentNav {
    className?: string;
}

export const DriverContentNav = observer<IDriverContentNav>(({className}) => {
    const contentNav = useContentNav();

    const classes = cn(`layer`, `driver-content-nav`, className);

    const linkClickHandler: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
        // event.preventDefault();
        let link = event.target as HTMLLinkElement;
        let elementId = link.href.replace(/(.*)?#/, ``);
        let element = document.getElementById(decodeURIComponent(elementId)) as HTMLElement;
        let clientRect = element.getBoundingClientRect();

        window.scrollTo({
            top: window.pageYOffset + clientRect.top,
            left: 0
        })
    }


    const items = contentNav.tree.children?.map(({path, title, key}) => {
        return (
            <Menu.Item key={key}>
                <Link href={`#${path}`} scroll={false}>
                    <a onClick={linkClickHandler}>{title}</a>
                </Link>
            </Menu.Item>
        );
    })
    return (
        <div className={classes}>
            <Menu className="driver-content-nav__menu"
                  mode="inline"
                  defaultOpenKeys={[`content-nav`]}
                  selectedKeys={contentNav.activeKeys as string[]}> /// TODO: [refactoring]
                <Menu.SubMenu key="content-nav" title="Содержание">
                    {items}
                </Menu.SubMenu>
            </Menu>
        </div>
    );
});


