import React, {FC, ReactElement, Reducer, useReducer, useState} from "react";
import Icon from "@ant-design/icons";
import {Tooltip} from "antd";
import {sectionToColorMap} from "../../../utils/book-section-colors";
import {BookSectionIcon} from "../icons";



export type BookTocSectionIconProps = {
    className?: string;
    section: string;
};
export const BookTocSectionIcon: FC<BookTocSectionIconProps> = ({section, className}) => {
    return (
        <Tooltip className={className} placement="right" title={section} color={sectionToColorMap.get(section)}>
            <Icon component={BookSectionIcon} style={{fill: sectionToColorMap.get(section)}} />
        </Tooltip>

    );
}


