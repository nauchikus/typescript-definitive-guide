import React, {FC, ReactElement, Reducer, useReducer, useState} from "react";
import Link from "next/link";
import {BookTocSectionIcon} from "../icons/book-toc-section-icon/BookTocSectionIcon";





export type ContentNavTreeNodeProps = {
  key: string;
  level: number;
  section: string;
  title: string;
  path: string;
};

export const ContentNavTreeNode: FC<ContentNavTreeNodeProps> = ({key, level, section, title, path}) => {
    if (level === 0) {
        return (
            <Link href={`/book/chapters/${path}`}>
                <span className="book-toc__title_title-section">
                    <BookTocSectionIcon className="book-toc__title__icon" section={section} />
                    <a>{title}</a>
                </span>
            </Link>
        );
    }

    return (
        <Link href={`/book/chapters/${path}`}>
            <a>{title}</a>
        </Link>
    );
}


