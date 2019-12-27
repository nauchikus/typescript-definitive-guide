import React, { FC, ReactNode, useRef } from "react";
import { Link } from "gatsby";
import { SectionButtonAppDriver } from "../button__app-driver-section-button/SectionButtonAppDriver";
import { useDriver } from "../../react__hooks/app-driver-hook";

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

  let driverSectionControlRef=useRef<HTMLDivElement>(null);


  const scrollToCurrentSection = () => {
    let { current: element } = driverSectionControlRef;

    if ( !element ) {
      return;
    }

    let itemIndex=element.getAttribute(`item-index`);

    if ( !itemIndex ) {
      throw new Error( `Attribute "item-index" must be define` );
    }

    let scrollTop = element.scrollTop;

    if ( Math.round( scrollTop ) === parseInt( itemIndex ) ) {
      element.scrollIntoView({ block: "end"})
    }else{
      element.scrollIntoView({ block: "start"})
    }


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
