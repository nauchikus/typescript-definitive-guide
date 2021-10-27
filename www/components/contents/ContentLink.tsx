import React, {FC} from "react";
// import Image from "next/image";
import { Image } from "antd";
import { useRouter } from "next/router";


interface ContentLinkProps {
    href: string
}

export const ContentLink:FC<ContentLinkProps> = ({href, children}) => {
    const router = useRouter();

    const go = () => {
        router.push( href );
    };

    return <a className="content__link" href={href} onClick={go}>{children}</a>;
}