import { FC, useEffect } from "react";

export const GoogleAnalytics:FC = () => {
    useEffect( () => {
        window[`dataLayer`] = window[ `dataLayer` ] ?? [];

        function gtag ( ...rest ) {
            window[ `dataLayer` ].push( arguments );
        }

        gtag( 'js', new Date() );
        gtag( 'config', 'G-K2BJ26CT7F' );
    }, [] );
    return (
        <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2BJ26CT7F"></script>
        </>
    )
}
