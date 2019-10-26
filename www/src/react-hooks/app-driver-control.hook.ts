import { useEffect, useLayoutEffect, useState } from "react";

enum DriverStates {
    Open = 'open',
    Close = 'close',
    Default = Open,
}

const getInitialState = () => {
    let currentWidth = window.innerWidth;

    let driverWidth = parseInt( getComputedStyle( document.documentElement )
        .getPropertyValue( '--content-left-layout_width' ) );
    let contentWidth = parseInt( getComputedStyle( document.documentElement )
        .getPropertyValue( '--content-center-layout_width' ) );

    let minWidth = driverWidth + contentWidth;

    if ( currentWidth < minWidth ) {
        return DriverStates.Close;
    }


    return DriverStates.Open;
};



export const useAppDriver = () => {
    let [toggleState, setToggleState] = useState( DriverStates.Default );


    useLayoutEffect( ()=> {
        setToggleState( getInitialState() );

        document.addEventListener( 'click', toggle );

        return ()=>{
            document.removeEventListener( "click", toggle );
        }
    }, [] );

    const open = () => setToggleState( DriverStates.Open );
    const close = () => setToggleState( DriverStates.Close );
    const toggle = () => setToggleState(
        ( prevState: DriverStates ) =>
            prevState === DriverStates.Open ?
                DriverStates.Close :
                DriverStates.Open
    );


    return [toggleState, open, close, toggle];
};