import React, { FC } from "react";
import { useTranslator } from "../../react__hooks/translator.hook";
import { BookChapterGuiLocalization, LocalizationPaths } from "../../localization";
import { EditSvgIcon } from "../icon__svg-icon/svg-icons";
import { Tooltip, TooltipPosition } from "../tooltip/Tooltip";
import { useContentDataBookChapter } from "../../react__context/BookChapterPageContentDataContext";
import { LinkButton } from "../button__link-button/LinkButton";

interface IEditOnGithubButtonProps {
}

export const EditOnGithubButton: FC<IEditOnGithubButtonProps> = ( {} ) => {
  let [t] = useTranslator<[BookChapterGuiLocalization]>( LocalizationPaths.BookChapterPageGui );
  let bookChapterContent = useContentDataBookChapter();

  return (
    <LinkButton className="edit-on-github-link-button" href={bookChapterContent.fileOnGithubLink}>
      <EditSvgIcon className="edit-on-github-link-button__svg-icon"/>
      <Tooltip position={TooltipPosition.BottomCenter}>
        {t.secondaryContentBar.editOnGithubButton.tooltip}
      </Tooltip>
    </LinkButton>
  );
};