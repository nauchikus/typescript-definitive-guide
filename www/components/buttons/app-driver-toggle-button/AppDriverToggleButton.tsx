import React, { FC, ReactElement } from "react";
import { observer } from "mobx-react-lite";
import {DriverOpenIcon} from "../../icons/icons";
import {useSharedStore} from "../../../stores/shared-store";


interface IAppDriverToggleButtonProps {
}

export const AppDriverToggleButton: FC<IAppDriverToggleButtonProps> = observer(( {...props} ) => {
    const store = useSharedStore();
    const toggle = () => store.appDriverToggle.toggle();

    return (
      <button className="app-driver-toggle-btn" onClick={toggle}>
          <DriverOpenIcon/>
      </button>
  );
});

