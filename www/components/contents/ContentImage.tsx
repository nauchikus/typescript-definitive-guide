import React, {FC} from "react";
// import Image from "next/image";
import { Image } from "antd";


interface ContentImageProps {
    src: string;
    alt?: string
}

export const ContentImage:FC<ContentImageProps> = ({src, alt}) => {
    return <Image preview={ false } src={src} alt={alt} height="200" width="100%" />;
}