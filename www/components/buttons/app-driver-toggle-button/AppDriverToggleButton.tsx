import React, {FC, ReactElement, useEffect, useState} from "react";
import { observer } from "mobx-react-lite";
import {DriverOpenIcon} from "../../icons/icons";
import {useSharedStore} from "../../../stores/shared-store";
import {useRouter} from "next/router";


interface IAppDriverToggleButtonProps {
}

export const AppDriverToggleButton: FC<IAppDriverToggleButtonProps> = observer(( {...props} ) => {
    const store = useSharedStore();
    const router = useRouter();
    const toggle = () => store.appDriverToggle.toggle();

    const pattern = /(book\/chapters\/(.*)|what-is-new\/(.*))$/m;

    const [isHiddenDriverToggle, setIsHiddenDriverToggle] = useState(() => !pattern.test(router.pathname));


    useEffect(() => {
        setIsHiddenDriverToggle(!pattern.test(router.pathname));
    }, [router.pathname]);
    // /(http|https):\/\/(.*)?(\.ru|:\d{4})\/(book\/chapters|what-is-new\/\d\.\d)$/m.test('http://localhost:3000/what-is-new/4.4'

    return (
      <button className="app-driver-toggle-btn" onClick={toggle} hidden={isHiddenDriverToggle}>
          <DriverOpenIcon/>
      </button>
  );
});

