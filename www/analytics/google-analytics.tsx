import { FC, useEffect } from "react";
import Script from "next/script";

export const GoogleAnalytics:FC = () => {
    return (
        <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-K2BJ26CT7F" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  gtag('js', new Date());
        
                  gtag('config', 'G-K2BJ26CT7F');
                `}
            </Script>
        </>
    )
}
