import React, { FC } from "react";
import { NavContentConclusion } from "../content__conclusion__nav/NavContentConclusion";
import { InformerContentConclusion } from "../content__conclusion__informer/InformerContentConclusion";

interface IConclusionContentProps {
}

export const ConclusionContent: FC<IConclusionContentProps> = ( {} ) => {
  return (
    <aside className="content__section content-conclusion">
      <div className="content-conclusion__item">
        <InformerContentConclusion/>
      </div>
      <div className="content-conclusion__item">
        <NavContentConclusion/>
      </div>
    </aside>
  );
};