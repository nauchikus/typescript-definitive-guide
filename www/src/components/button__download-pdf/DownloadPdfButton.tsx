import React, { FC } from "react";
import { PdfSvgIcon } from "../icon__svg-icon/svg-icons";
import { useTranslator } from "../../react__hooks/translator.hook";
import { LocalizationPaths, PdfSharedLocalization } from "../../localization";

interface IDownloadPdfButtonProps {
}



export const DownloadPdfButton:FC<IDownloadPdfButtonProps>=({})=>{
  let [pdfShared] = useTranslator<[
    PdfSharedLocalization,
  ]>( LocalizationPaths.PdfShared );;



  return(
    <a id="download-pdf-button" className="download-pdf-button" href={pdfShared.downloadPdfBookButton.href}
       download={true}>
      <PdfSvgIcon className="download-pdf-button__svg-icon"/>
      <span className="download-pdf-button__label">{pdfShared.downloadPdfBookButton.title}</span>

    </a>
  );
}
