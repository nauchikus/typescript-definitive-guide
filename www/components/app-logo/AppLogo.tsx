import React, {FC} from "react";
import {default as cn} from "classnames";
import Link from "next/link";
import AppLogoSvg from "../../assets/svg/imgs/logo_app.svg"
import Icon from "@ant-design/icons";


export const AppLogo: FC = () => {
    return (
        <Link href="/">
            <Icon className="app-logo" component={AppLogoSvg} />
        </Link>
    )
}