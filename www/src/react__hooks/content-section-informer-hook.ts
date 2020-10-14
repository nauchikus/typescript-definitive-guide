import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAppContentIntersectionObserver } from "./scroll-page-hook";


const ACTIVE_SECTION_EMPTY_ID = ``;

export const useContentSectionInformer = () => {
  let {intersections} = useAppContentIntersectionObserver(  );

  let [state,setState] = useState( {
    activeSectionId: ACTIVE_SECTION_EMPTY_ID
  } );

  let [activeSection = { sectionId: ACTIVE_SECTION_EMPTY_ID }] = intersections
    .filter( sectionInfo => sectionInfo.isIntersecting );


  useEffect( () => {
    setState( { activeSectionId: activeSection.sectionId } );
  }, [activeSection.sectionId] );


  return state;
};
