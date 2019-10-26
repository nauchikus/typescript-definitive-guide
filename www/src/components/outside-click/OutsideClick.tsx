import React, { FC } from "react";

interface IOutsideClickProps {
  onOutsideClick?: () => void
}

export const OutsideClick: FC<IOutsideClickProps> = ( {onOutsideClick} ) => {
  return (
    <div className="outside-click" onClick={onOutsideClick}></div>
  );
};