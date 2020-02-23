import React, { FC } from "react";
import { NavContentConclusion } from "../content__conclusion__nav/NavContentConclusion";
import { InformerContentConclusion } from "../content__conclusion__informer/InformerContentConclusion";

interface IConclusionContentProps {
}

export const ConclusionContent: FC<IConclusionContentProps> = ( {} ) => {
  return (
    <aside className="content__section content__conclusion">
      <InformerContentConclusion/>
      <NavContentConclusion/>
    </aside>
  );
};