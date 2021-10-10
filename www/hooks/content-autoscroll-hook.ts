import React, {useEffect, useLayoutEffect} from "react";
import {useRouter} from "next/router";


export function useContentAutoscroll(){
    const router = useRouter();

    useEffect(() => {
        function scrollHandler() {
            if (window.pageXOffset === 0) {
                window.removeEventListener("scroll", scrollHandler);

                return;
            }

            window.scrollTo({
                left: 0
            });
        }

        function startHashChangeHandler() {
            window.addEventListener("scroll", scrollHandler);
        }

        window.addEventListener("scroll", scrollHandler);


        router.events.on(`hashChangeStart`, startHashChangeHandler);


        return () => {
            router.events.off(`hashChangeStart`, startHashChangeHandler);
            window.removeEventListener("scroll", scrollHandler);
        }
    }, []);
}