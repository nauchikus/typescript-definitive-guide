import React, { FC } from "react";
import { DonateButton } from "../donate-button/DonateButton";

interface IFooterAppDriverProps {
}

export const FooterAppDriver:FC<IFooterAppDriverProps>=({})=>{
  return(
    <div className="app-driver__footer">
      <DonateButton/>
    </div>
  );
}