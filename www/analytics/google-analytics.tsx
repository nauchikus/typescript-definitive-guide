import { FC, useEffect } from "react";
import Script from "next/script";

export const GoogleAnalytics:FC = () => {
    return (
        <>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  gtag('js', new Date());
                    console.log('GGGGGGGGGG')
                  gtag('config', 'G-K2BJ26CT7F');
                `}
            </Script>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-K2BJ26CT7F" strategy="afterInteractive" />
        </>
    )
}
