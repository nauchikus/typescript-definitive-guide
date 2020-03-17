import React, { FC, ReactNode, useRef } from "react";
import { Link } from "gatsby";
import { SectionButtonAppDriver } from "../button__app-driver-section-button/SectionButtonAppDriver";
import { useDriver } from "../../react__hooks/app-driver-hook";
import { useScrollProvider } from "../../react__hooks/scroll-provider-hook";

export interface INavItem{
  path:string;
  name:string;
}

interface INavSectionAppDriverProps {
  itemIndex:number;
  itemLabel:string;
  isMatchPathWithHash?:boolean;
  children: ReactNode | ReactNode[];
}


interface IGetPropsGatsbyLink{
  isCurrent:boolean;
  href:string;
  location:{
    hash:string;
    pathname:string;
  }
}

export const NavSectionAppDriver: FC<INavSectionAppDriverProps> = props => {
  let { children, itemIndex, itemLabel, isMatchPathWithHash = true } = props;

  let scrollCallback = useScrollProvider();
  let driverSectionControlRef=useRef<HTMLDivElement>(null);


  const scrollToCurrentSection = () => {
    let { current: element } = driverSectionControlRef;

    if ( !element || !element.parentElement ) {
      return;
    }


    let parent = element.parentElement;
    let sectionControlHeight = parseInt( window
      .getComputedStyle( document.documentElement )
      .getPropertyValue( `--app-driver__section-control_height` ) );
    let currentSectionControlIndex = parseInt( element.getAttribute( `item-index` ) as string );

    const getInitialHeight = () => currentSectionControlIndex === 0 ? 0 : sectionControlHeight;

    let scrollOffsetTop = Array
      .from( parent.children )
      .filter( element => !element.classList.contains( `footer/app-footer__content-layerapp-driver__section-control` ) )
      .slice( 0, currentSectionControlIndex )
      .reduce( ( height, element ) =>
        height + ( element.clientHeight - sectionControlHeight ), getInitialHeight() );


    scrollCallback( {
      y: scrollOffsetTop
    } );

  };
  
  



  return (
    <>
      <div ref={driverSectionControlRef} className="app-driver__section-control" item-index={itemIndex}>
        <SectionButtonAppDriver label={itemLabel} onClick={scrollToCurrentSection}/>
      </div>
      <nav className="app-driver__list">
        { children }
      </nav>
    </>
  );
};
