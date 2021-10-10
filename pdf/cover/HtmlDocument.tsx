import React, { FC } from "react";
import CoverSvg from "./cover-original.svg";


export const HtmlDocument: FC = () => {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <title>Cover</title>
    </head>
    <body>
      <CoverSvg />
    </body>
    </html>
  )
}