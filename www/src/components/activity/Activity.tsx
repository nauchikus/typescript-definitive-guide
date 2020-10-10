import React, { FC, ReactElement } from "react";
import { default as cn } from "classnames";
import { If } from "../if-operator/If";

export enum ActivityState {
  Active,
  Inactive,
}

interface IActivityProps {
  isActive:boolean;
  state?: ActivityState;
}


export const Activity: FC<IActivityProps> = ({isActive, state= ActivityState.Active} ) => {
  let classes = cn(`activity`, {
    [`activity-state_active`]: state === ActivityState.Active,
    [`activity-state_inactive`]: state === ActivityState.Inactive
  });


  return (
    <If condition={isActive}>
      <div className={classes}></div>
    </If>
  );
};
