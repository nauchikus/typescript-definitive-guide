import React, { FC } from "react";
import { default as cn } from "classnames";
import { ICommitInfo } from "../../../plugins/gatsby-pages/graphql-querys";
import * as DateUtils from "../../utils/date-utils";
import { Tooltip, TooltipPosition } from "../tooltip/Tooltip";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownToggle } from "../dropdown/DropdownToggle";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { If } from "../if-operator/If";
import { LinkButton } from "../button__link-button/LinkButton";
import { EditSvgIcon } from "../icon__svg-icon/svg-icons";

interface ISectionInformerContentProps {
  commitInfoAll: ICommitInfo[];
  contentOnGithubLink:string;
}

const MAX_CONTRIBUTOR_CARD = 5;

export const SectionInformerContent: FC<ISectionInformerContentProps> = ( { commitInfoAll,contentOnGithubLink } ) => {
  let classes = cn( "content__section-informer" );

  let contributorClasses = ( isCreator: boolean ) => cn(
    `section-informer__contributor`, {
      [ `section-informer__contributor_is-creator` ]: isCreator
    }
  );

  let contributorAll = commitInfoAll.slice( 0, MAX_CONTRIBUTOR_CARD + 1 ).map( ( info, index ) => (
    <Dropdown key={ index } className={ contributorClasses( info.authoredByCommitter ) }>
      <DropdownToggle>
        <button className={ contributorClasses( info.authoredByCommitter ) }>
          <img className="contributor__avatar" src={ info.committer.avatarUrl } alt="аватар пользователя"/>
        </button>
      </DropdownToggle>
      <DropdownMenu className="contributor-dropdown__menu"
                    openClassName="contributor-dropdown__menu_open-state"
                    closeClassName="contributor-dropdown__menu_close-state">
        <div className="contributor__card">
          <div className="card__section card__section_avatar">
            <img src={ info.committer.avatarUrl } alt="аватар пользователя" className="card__avatar"/>
          </div>

          <div className="card__section card__section_info">
            <If condition={ info.authoredByCommitter }>
                <span className="contributor__label_creator">
                  создатель
                </span>
            </If>
          </div>

          <div className="card__section">
            <span className="contributor__label_username">
              { info.committer.name }
            </span>
          </div>

          <div className="card__section">
            <span className="contributor__label_bio">
              { info.committer.bio }
            </span>
          </div>

          <div className="card__section card__section_control">
            <a className="contributor__link_github-profile"
               href={ `https://github.com/${ info.committer.name }` }
               target="__blank">
              { `Github профиль`.toUpperCase() }
            </a>
          </div>
        </div>
      </DropdownMenu>

    </Dropdown>

  ) );




  let [lastUpdateDateInfo] = commitInfoAll;
  let lastUpdateDate = lastUpdateDateInfo.committedDate;
  let lastUpdateDateFormated = DateUtils.toAppDateFormat( lastUpdateDate );

  return (
    <aside className={classes}>
      <section className="section-informer__section section-informer__section_contributor">
        <header className="section-informer__header">
          <span className="section-informer__label">Контрибьютеры</span>
        </header>
        <div className="section-informer__body">
          {contributorAll}
        </div>
      </section>
      <section className="section-informer__section section-informer__section_contributor">
        <header className="section-informer__he/*<a href={}></a>*/}ader section-informer__header_section-contributer">
          <span className="section-informer__label">Обнавлено:</span>
        </header>
        <div className="section-informer__body">
          <time className="section-informer__last-update-date" dateTime={lastUpdateDate}>{lastUpdateDateFormated}</time>
        </div>
      </section>
      {/*<section className="section-informer__section section-informer__section_control">
        <nav>
          <LinkButton className="section-control__link-button" href={contentOnGithubLink}>
            <EditSvgIcon/>
            <span className="section-control__link-button_label">
              <span>Редактировать</span>
              <span>на Github</span>
            </span>
          </LinkButton>
        </nav>
      </section>*/}
    </aside>
  );
};