import React, {FC} from "react";

export const TitlePage: FC = ({}) => {
    return (
        <>
            <div className="main-title_container">
                <p className="main-title">TypeScript</p>
                <p className="main-title">Подробное Руководство</p>
            </div>
            <p className="main-description">
                Книга и документация в одном
            </p>
            <p className="main-date">
                Дата последнего обновления: <time>{new Date().toLocaleDateString()}</time>
            </p>
        </>
    );
}