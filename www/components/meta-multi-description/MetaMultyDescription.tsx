import React, { FC } from "react";
import { appConfig } from "../../app-config";

export type MetaMultiDescriptionProps = {
    title?: string;
    description: string;
};

export const MetaMultiDescription: FC<MetaMultiDescriptionProps> = ({title = appConfig.title, description}) => {
    return (
      <>
          <meta name="description" content={description}/>

          <meta name="og:title" content={title}/>
          <meta name="og:description" content={description}/>
          <meta name="og:type" content="website"/>

          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:creator" content="nauchikus"/>
          <meta name="twitter:title" content={title}/>
          <meta name="twitter:description" content={description}/>
      </>
    );
}
