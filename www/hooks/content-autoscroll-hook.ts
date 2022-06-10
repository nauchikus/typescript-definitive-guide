import React, {useEffect, useLayoutEffect} from "react";
import {useRouter} from "next/router";
import { goToAnchor } from "../utils/scroll.utls";


export function useContentAutoscroll(){
    const router = useRouter();

    useEffect(() => {
        function scrollHandler() {
            if (window.scrollX === 0) {
                window.removeEventListener("scroll", scrollHandler);

                // hack for mobile
                setTimeout(()=>{
                    if ( scrollX > 0 ) {
                        document.scrollingElement.scrollLeft = 0;
                    }
                })

                return;
            }
            document.scrollingElement.scrollLeft = 0;
        }

        function startHashChangeHandler() {
            let hash = location.hash.slice( 1 );
            goToAnchor( hash );
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
