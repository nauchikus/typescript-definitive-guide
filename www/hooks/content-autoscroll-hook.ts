import React, {useEffect, useLayoutEffect} from "react";
import {useRouter} from "next/router";
import {Scroll} from "../services/Scroll";


export function useContentAutoscroll(){
    let router = useRouter();


    useLayoutEffect(() => {
        /* scroll stabilisation */

        function scrollHandler(event) {
            window.scrollTo({
                left: 0,
            });
        }

        window.addEventListener("scroll", scrollHandler);



        /* scroll to anchor (#) */

        if (window.location.hash.includes(`#`)) {
            let hash = window.location.hash.replace(`#`, ``);
            let sectionId = decodeURIComponent(hash);
            let element = document.getElementById<HTMLElement>(`${sectionId}`);

            element.scrollIntoViewIfNeeded(false);
        }

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, [router.asPath]);
}