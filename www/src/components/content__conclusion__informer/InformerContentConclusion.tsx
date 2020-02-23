import React, { FC } from "react";
import { WatchWithTelegramInformer } from "../informer__conclusion__watch-with-telegram-informer/WatchWithTelegramInformer";

interface IInformerContentConclusionProps {
}

export const InformerContentConclusion:FC<IInformerContentConclusionProps>=()=>{
  return(
    <div className="content-conclusion__informer">
      <WatchWithTelegramInformer/>
    </div>
  );
}