import React, { FC } from "react";
import { default as cn } from "classnames";
import { DynamicGatsbyImage } from "../dynamic-gatsby-image/DynamicGatsbyImage";

interface IImageIconProps {
  className?:string;
}

export const YandexMailImageIcon: FC<IImageIconProps> = ( { className } ) => (
  <DynamicGatsbyImage className={ cn( `image-icon`,`image-icon_yandex-mail`, className ) }
                      relativePath="icon__image/yandex-mail-icon.png"
                      alt="yandex mail icon"/>
);