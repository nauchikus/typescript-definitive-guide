export function goToAnchor(anchor: string) {
    function scrollHandler(event) {
        window.removeEventListener("scroll", scrollHandler);

        window.scrollTo({
            left: 0,
        });
    }

    window.addEventListener("scroll", scrollHandler);

    let sectionId = decodeURIComponent(anchor);
    let element = document.getElementById(`${sectionId}`);

    // element.scrollIntoView();

    let clientRect = element.getBoundingClientRect();

    window.scrollTo( {
        top: window.pageYOffset + clientRect.top,
        left: 0
    } )
}
