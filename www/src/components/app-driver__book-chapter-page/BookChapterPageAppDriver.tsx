import React, { FC, ReactNode } from "react";
import { AppDriver } from "../app-driver/AppDriver";
import { NavSectionAppDriver } from "../app-driver__nav-section/NavSectionAppDriver";

interface IBookChapterPageAppDriverProps {
}


export const BookChapterPageAppDriver: FC<IBookChapterPageAppDriverProps> = ( {  } ) => {
  return (
    <AppDriver>
      <NavSectionAppDriver itemLabel={"Подразделы"}
                           itemIndex={0}>
        {null}
      </NavSectionAppDriver>
      <NavSectionAppDriver itemLabel={"Подразделы"}
                           itemIndex={1}>
        {null}
      </NavSectionAppDriver>
    </AppDriver>
  );
};
