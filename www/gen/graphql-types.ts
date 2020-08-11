export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string. */
  GitHub_URI: any;
  /** An ISO-8601 encoded UTC date string. */
  GitHub_DateTime: any;
  /** A string containing HTML code. */
  GitHub_HTML: any;
  /** A Git object ID. */
  GitHub_GitObjectID: any;
  /** An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC. */
  GitHub_GitTimestamp: any;
  /** Git SSH string */
  GitHub_GitSSHRemote: any;
  /** An ISO-8601 encoded date string. */
  GitHub_Date: any;
  /** An ISO-8601 encoded UTC date string with millisecond precison. */
  GitHub_PreciseDateTime: any;
  /** A valid x509 certificate string */
  GitHub_X509Certificate: any;
};











export type AppLocalization = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  localization?: Maybe<AppLocalizationLocalization>;
  lang?: Maybe<Scalars['String']>;
};

export type AppLocalizationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AppLocalizationEdge>;
  nodes: Array<AppLocalization>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<AppLocalizationGroupConnection>;
};


export type AppLocalizationConnectionDistinctArgs = {
  field: AppLocalizationFieldsEnum;
};


export type AppLocalizationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AppLocalizationFieldsEnum;
};

export type AppLocalizationEdge = {
  next?: Maybe<AppLocalization>;
  node: AppLocalization;
  previous?: Maybe<AppLocalization>;
};

export type AppLocalizationFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'localization___lang'
  | 'localization___title'
  | 'localization___description'
  | 'localization___appNavigation'
  | 'localization___appNavigation___id'
  | 'localization___appNavigation___path'
  | 'localization___appNavigation___name'
  | 'localization___notification___behaviorNotification___copyLink'
  | 'lang';

export type AppLocalizationFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  localization?: Maybe<AppLocalizationLocalizationFilterInput>;
  lang?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AppLocalizationEdge>;
  nodes: Array<AppLocalization>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalization = {
  lang?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  appNavigation?: Maybe<Array<Maybe<AppLocalizationLocalizationAppNavigation>>>;
  notification?: Maybe<AppLocalizationLocalizationNotification>;
  layouts?: Maybe<AppLocalizationLocalizationLayouts>;
  pages?: Maybe<AppLocalizationLocalizationPages>;
};

export type AppLocalizationLocalizationAppNavigation = {
  id?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationAppNavigationFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationAppNavigationFilterListInput = {
  elemMatch?: Maybe<AppLocalizationLocalizationAppNavigationFilterInput>;
};

export type AppLocalizationLocalizationFilterInput = {
  lang?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  appNavigation?: Maybe<AppLocalizationLocalizationAppNavigationFilterListInput>;
  notification?: Maybe<AppLocalizationLocalizationNotificationFilterInput>;
  layouts?: Maybe<AppLocalizationLocalizationLayoutsFilterInput>;
  pages?: Maybe<AppLocalizationLocalizationPagesFilterInput>;
};

export type AppLocalizationLocalizationLayouts = {
  shared?: Maybe<AppLocalizationLocalizationLayoutsShared>;
};

export type AppLocalizationLocalizationLayoutsFilterInput = {
  shared?: Maybe<AppLocalizationLocalizationLayoutsSharedFilterInput>;
};

export type AppLocalizationLocalizationLayoutsShared = {
  informers?: Maybe<AppLocalizationLocalizationLayoutsSharedInformers>;
  links?: Maybe<AppLocalizationLocalizationLayoutsSharedLinks>;
  appContent?: Maybe<AppLocalizationLocalizationLayoutsSharedAppContent>;
  appHeader?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeader>;
};

export type AppLocalizationLocalizationLayoutsSharedAppContent = {
  contentNav?: Maybe<AppLocalizationLocalizationLayoutsSharedAppContentContentNav>;
};

export type AppLocalizationLocalizationLayoutsSharedAppContentContentNav = {
  prevButton?: Maybe<AppLocalizationLocalizationLayoutsSharedAppContentContentNavPrevButton>;
  nextButton?: Maybe<AppLocalizationLocalizationLayoutsSharedAppContentContentNavNextButton>;
};

export type AppLocalizationLocalizationLayoutsSharedAppContentContentNavFilterInput = {
  prevButton?: Maybe<AppLocalizationLocalizationLayoutsSharedAppContentContentNavPrevButtonFilterInput>;
  nextButton?: Maybe<AppLocalizationLocalizationLayoutsSharedAppContentContentNavNextButtonFilterInput>;
};

export type AppLocalizationLocalizationLayoutsSharedAppContentContentNavNextButton = {
  label?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationLayoutsSharedAppContentContentNavNextButtonFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationLayoutsSharedAppContentContentNavPrevButton = {
  label?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationLayoutsSharedAppContentContentNavPrevButtonFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationLayoutsSharedAppContentFilterInput = {
  contentNav?: Maybe<AppLocalizationLocalizationLayoutsSharedAppContentContentNavFilterInput>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeader = {
  navToggleButton?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderNavToggleButton>;
  appMenu?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderAppMenu>;
  donateDropdown?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderDonateDropdown>;
  appSearch?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderAppSearch>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderAppMenu = {
  pdfButton?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderAppMenuPdfButton>;
  telegramButton?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderAppMenuTelegramButton>;
  githubButton?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderAppMenuGithubButton>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderAppMenuFilterInput = {
  pdfButton?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderAppMenuPdfButtonFilterInput>;
  telegramButton?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderAppMenuTelegramButtonFilterInput>;
  githubButton?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderAppMenuGithubButtonFilterInput>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderAppMenuGithubButton = {
  href?: Maybe<Scalars['String']>;
  tooltip?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderAppMenuGithubButtonFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  tooltip?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderAppMenuPdfButton = {
  href?: Maybe<Scalars['String']>;
  tooltip?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderAppMenuPdfButtonFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  tooltip?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderAppMenuTelegramButton = {
  href?: Maybe<Scalars['String']>;
  tooltip?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderAppMenuTelegramButtonFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  tooltip?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderAppSearch = {
  inputPlaceholder?: Maybe<Scalars['String']>;
  submitButton?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderAppSearchSubmitButton>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderAppSearchFilterInput = {
  inputPlaceholder?: Maybe<StringQueryOperatorInput>;
  submitButton?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderAppSearchSubmitButtonFilterInput>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderAppSearchSubmitButton = {
  ariaLabel?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderAppSearchSubmitButtonFilterInput = {
  ariaLabel?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderDonateDropdown = {
  href?: Maybe<Scalars['String']>;
  toggleButton?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderDonateDropdownToggleButton>;
  content?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderDonateDropdownContent>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderDonateDropdownContent = {
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderDonateDropdownContentSubtitle>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderDonateDropdownContentFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderDonateDropdownContentSubtitleFilterInput>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderDonateDropdownContentSubtitle = {
  _xhtml?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderDonateDropdownContentSubtitleFilterInput = {
  _xhtml?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderDonateDropdownFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  toggleButton?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderDonateDropdownToggleButtonFilterInput>;
  content?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderDonateDropdownContentFilterInput>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderDonateDropdownToggleButton = {
  label?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderDonateDropdownToggleButtonFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderFilterInput = {
  navToggleButton?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderNavToggleButtonFilterInput>;
  appMenu?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderAppMenuFilterInput>;
  donateDropdown?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderDonateDropdownFilterInput>;
  appSearch?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderAppSearchFilterInput>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderNavToggleButton = {
  tooltips?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderNavToggleButtonTooltips>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderNavToggleButtonFilterInput = {
  tooltips?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderNavToggleButtonTooltipsFilterInput>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderNavToggleButtonTooltips = {
  open?: Maybe<Array<Maybe<Scalars['String']>>>;
  close?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppLocalizationLocalizationLayoutsSharedAppHeaderNavToggleButtonTooltipsFilterInput = {
  open?: Maybe<StringQueryOperatorInput>;
  close?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationLayoutsSharedFilterInput = {
  informers?: Maybe<AppLocalizationLocalizationLayoutsSharedInformersFilterInput>;
  links?: Maybe<AppLocalizationLocalizationLayoutsSharedLinksFilterInput>;
  appContent?: Maybe<AppLocalizationLocalizationLayoutsSharedAppContentFilterInput>;
  appHeader?: Maybe<AppLocalizationLocalizationLayoutsSharedAppHeaderFilterInput>;
};

export type AppLocalizationLocalizationLayoutsSharedInformers = {
  donateInformer?: Maybe<AppLocalizationLocalizationLayoutsSharedInformersDonateInformer>;
  watchWithTelegramInformer?: Maybe<AppLocalizationLocalizationLayoutsSharedInformersWatchWithTelegramInformer>;
};

export type AppLocalizationLocalizationLayoutsSharedInformersDonateInformer = {
  minBanner?: Maybe<AppLocalizationLocalizationLayoutsSharedInformersDonateInformerMinBanner>;
  maxBanner?: Maybe<AppLocalizationLocalizationLayoutsSharedInformersDonateInformerMaxBanner>;
};

export type AppLocalizationLocalizationLayoutsSharedInformersDonateInformerFilterInput = {
  minBanner?: Maybe<AppLocalizationLocalizationLayoutsSharedInformersDonateInformerMinBannerFilterInput>;
  maxBanner?: Maybe<AppLocalizationLocalizationLayoutsSharedInformersDonateInformerMaxBannerFilterInput>;
};

export type AppLocalizationLocalizationLayoutsSharedInformersDonateInformerMaxBanner = {
  html?: Maybe<AppLocalizationLocalizationLayoutsSharedInformersDonateInformerMaxBannerHtml>;
  href?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationLayoutsSharedInformersDonateInformerMaxBannerFilterInput = {
  html?: Maybe<AppLocalizationLocalizationLayoutsSharedInformersDonateInformerMaxBannerHtmlFilterInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationLayoutsSharedInformersDonateInformerMaxBannerHtml = {
  _xhtml?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationLayoutsSharedInformersDonateInformerMaxBannerHtmlFilterInput = {
  _xhtml?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationLayoutsSharedInformersDonateInformerMinBanner = {
  label?: Maybe<Scalars['String']>;
  buttons?: Maybe<AppLocalizationLocalizationLayoutsSharedInformersDonateInformerMinBannerButtons>;
};

export type AppLocalizationLocalizationLayoutsSharedInformersDonateInformerMinBannerButtons = {
  yes?: Maybe<Scalars['String']>;
  no?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationLayoutsSharedInformersDonateInformerMinBannerButtonsFilterInput = {
  yes?: Maybe<StringQueryOperatorInput>;
  no?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationLayoutsSharedInformersDonateInformerMinBannerFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  buttons?: Maybe<AppLocalizationLocalizationLayoutsSharedInformersDonateInformerMinBannerButtonsFilterInput>;
};

export type AppLocalizationLocalizationLayoutsSharedInformersFilterInput = {
  donateInformer?: Maybe<AppLocalizationLocalizationLayoutsSharedInformersDonateInformerFilterInput>;
  watchWithTelegramInformer?: Maybe<AppLocalizationLocalizationLayoutsSharedInformersWatchWithTelegramInformerFilterInput>;
};

export type AppLocalizationLocalizationLayoutsSharedInformersWatchWithTelegramInformer = {
  text?: Maybe<Array<Maybe<Scalars['String']>>>;
  subscribeButton?: Maybe<AppLocalizationLocalizationLayoutsSharedInformersWatchWithTelegramInformerSubscribeButton>;
};

export type AppLocalizationLocalizationLayoutsSharedInformersWatchWithTelegramInformerFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  subscribeButton?: Maybe<AppLocalizationLocalizationLayoutsSharedInformersWatchWithTelegramInformerSubscribeButtonFilterInput>;
};

export type AppLocalizationLocalizationLayoutsSharedInformersWatchWithTelegramInformerSubscribeButton = {
  label?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationLayoutsSharedInformersWatchWithTelegramInformerSubscribeButtonFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationLayoutsSharedLinks = {
  telegram?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationLayoutsSharedLinksFilterInput = {
  telegram?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationNotification = {
  behaviorNotification?: Maybe<AppLocalizationLocalizationNotificationBehaviorNotification>;
};

export type AppLocalizationLocalizationNotificationBehaviorNotification = {
  copyLink?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationNotificationBehaviorNotificationFilterInput = {
  copyLink?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationNotificationFilterInput = {
  behaviorNotification?: Maybe<AppLocalizationLocalizationNotificationBehaviorNotificationFilterInput>;
};

export type AppLocalizationLocalizationPages = {
  index?: Maybe<AppLocalizationLocalizationPagesIndex>;
  book__chapters?: Maybe<AppLocalizationLocalizationPagesBook__Chapters>;
  book__chapter?: Maybe<AppLocalizationLocalizationPagesBook__Chapter>;
  what_is_new__toc?: Maybe<AppLocalizationLocalizationPagesWhat_Is_New__Toc>;
  not_found?: Maybe<AppLocalizationLocalizationPagesNot_Found>;
};

export type AppLocalizationLocalizationPagesBook__Chapter = {
  metadata?: Maybe<AppLocalizationLocalizationPagesBook__ChapterMetadata>;
  gui?: Maybe<AppLocalizationLocalizationPagesBook__ChapterGui>;
};

export type AppLocalizationLocalizationPagesBook__ChapterFilterInput = {
  metadata?: Maybe<AppLocalizationLocalizationPagesBook__ChapterMetadataFilterInput>;
  gui?: Maybe<AppLocalizationLocalizationPagesBook__ChapterGuiFilterInput>;
};

export type AppLocalizationLocalizationPagesBook__ChapterGui = {
  secondaryContentBar?: Maybe<AppLocalizationLocalizationPagesBook__ChapterGuiSecondaryContentBar>;
};

export type AppLocalizationLocalizationPagesBook__ChapterGuiFilterInput = {
  secondaryContentBar?: Maybe<AppLocalizationLocalizationPagesBook__ChapterGuiSecondaryContentBarFilterInput>;
};

export type AppLocalizationLocalizationPagesBook__ChapterGuiSecondaryContentBar = {
  editOnGithubButton?: Maybe<AppLocalizationLocalizationPagesBook__ChapterGuiSecondaryContentBarEditOnGithubButton>;
};

export type AppLocalizationLocalizationPagesBook__ChapterGuiSecondaryContentBarEditOnGithubButton = {
  tooltip?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationPagesBook__ChapterGuiSecondaryContentBarEditOnGithubButtonFilterInput = {
  tooltip?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationPagesBook__ChapterGuiSecondaryContentBarFilterInput = {
  editOnGithubButton?: Maybe<AppLocalizationLocalizationPagesBook__ChapterGuiSecondaryContentBarEditOnGithubButtonFilterInput>;
};

export type AppLocalizationLocalizationPagesBook__ChapterMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationPagesBook__ChapterMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationPagesBook__Chapters = {
  metadata?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersMetadata>;
  gui?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGui>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersFilterInput = {
  metadata?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersMetadataFilterInput>;
  gui?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiFilterInput>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGui = {
  tocItem?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiTocItem>;
  secondaryContentBar?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiSecondaryContentBar>;
  asideLayout?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiAsideLayout>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiAsideLayout = {
  tagBarLabel?: Maybe<Scalars['String']>;
  tagBar?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiAsideLayoutTagBar>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiAsideLayoutFilterInput = {
  tagBarLabel?: Maybe<StringQueryOperatorInput>;
  tagBar?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiAsideLayoutTagBarFilterInput>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiAsideLayoutTagBar = {
  cleanFilterButton?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiAsideLayoutTagBarFilterInput = {
  cleanFilterButton?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiFilterInput = {
  tocItem?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiTocItemFilterInput>;
  secondaryContentBar?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiSecondaryContentBarFilterInput>;
  asideLayout?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiAsideLayoutFilterInput>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiSecondaryContentBar = {
  label?: Maybe<Scalars['String']>;
  tocFilterButton?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocFilterButton>;
  tocCollapseAllButton?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocCollapseAllButton>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiSecondaryContentBarFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  tocFilterButton?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocFilterButtonFilterInput>;
  tocCollapseAllButton?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocCollapseAllButtonFilterInput>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocCollapseAllButton = {
  tooltip?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocCollapseAllButtonTooltip>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocCollapseAllButtonFilterInput = {
  tooltip?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocCollapseAllButtonTooltipFilterInput>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocCollapseAllButtonTooltip = {
  openState?: Maybe<Scalars['String']>;
  closeState?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocCollapseAllButtonTooltipFilterInput = {
  openState?: Maybe<StringQueryOperatorInput>;
  closeState?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocFilterButton = {
  tooltip?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocFilterButtonFilterInput = {
  tooltip?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiTocItem = {
  copyLinkToBufferButton?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiTocItemCopyLinkToBufferButton>;
  collapseTocButton?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiTocItemCollapseTocButton>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiTocItemCollapseTocButton = {
  tooltip?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiTocItemCollapseTocButtonTooltip>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiTocItemCollapseTocButtonFilterInput = {
  tooltip?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiTocItemCollapseTocButtonTooltipFilterInput>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiTocItemCollapseTocButtonTooltip = {
  openState?: Maybe<Scalars['String']>;
  closeState?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiTocItemCollapseTocButtonTooltipFilterInput = {
  openState?: Maybe<StringQueryOperatorInput>;
  closeState?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiTocItemCopyLinkToBufferButton = {
  tooltip?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiTocItemCopyLinkToBufferButtonFilterInput = {
  tooltip?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersGuiTocItemFilterInput = {
  copyLinkToBufferButton?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiTocItemCopyLinkToBufferButtonFilterInput>;
  collapseTocButton?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersGuiTocItemCollapseTocButtonFilterInput>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationPagesBook__ChaptersMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationPagesFilterInput = {
  index?: Maybe<AppLocalizationLocalizationPagesIndexFilterInput>;
  book__chapters?: Maybe<AppLocalizationLocalizationPagesBook__ChaptersFilterInput>;
  book__chapter?: Maybe<AppLocalizationLocalizationPagesBook__ChapterFilterInput>;
  what_is_new__toc?: Maybe<AppLocalizationLocalizationPagesWhat_Is_New__TocFilterInput>;
  not_found?: Maybe<AppLocalizationLocalizationPagesNot_FoundFilterInput>;
};

export type AppLocalizationLocalizationPagesIndex = {
  metadata?: Maybe<AppLocalizationLocalizationPagesIndexMetadata>;
  gui?: Maybe<AppLocalizationLocalizationPagesIndexGui>;
};

export type AppLocalizationLocalizationPagesIndexFilterInput = {
  metadata?: Maybe<AppLocalizationLocalizationPagesIndexMetadataFilterInput>;
  gui?: Maybe<AppLocalizationLocalizationPagesIndexGuiFilterInput>;
};

export type AppLocalizationLocalizationPagesIndexGui = {
  subtitleAll?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppLocalizationLocalizationPagesIndexGuiFilterInput = {
  subtitleAll?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationPagesIndexMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationPagesIndexMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationPagesNot_Found = {
  metadata?: Maybe<AppLocalizationLocalizationPagesNot_FoundMetadata>;
  gui?: Maybe<AppLocalizationLocalizationPagesNot_FoundGui>;
};

export type AppLocalizationLocalizationPagesNot_FoundFilterInput = {
  metadata?: Maybe<AppLocalizationLocalizationPagesNot_FoundMetadataFilterInput>;
  gui?: Maybe<AppLocalizationLocalizationPagesNot_FoundGuiFilterInput>;
};

export type AppLocalizationLocalizationPagesNot_FoundGui = {
  notFound_404?: Maybe<AppLocalizationLocalizationPagesNot_FoundGuiNotFound_404>;
};

export type AppLocalizationLocalizationPagesNot_FoundGuiFilterInput = {
  notFound_404?: Maybe<AppLocalizationLocalizationPagesNot_FoundGuiNotFound_404FilterInput>;
};

export type AppLocalizationLocalizationPagesNot_FoundGuiNotFound_404 = {
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationPagesNot_FoundGuiNotFound_404FilterInput = {
  status?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationPagesNot_FoundMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationPagesNot_FoundMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationPagesWhat_Is_New__Toc = {
  metadata?: Maybe<AppLocalizationLocalizationPagesWhat_Is_New__TocMetadata>;
  gui?: Maybe<AppLocalizationLocalizationPagesWhat_Is_New__TocGui>;
};

export type AppLocalizationLocalizationPagesWhat_Is_New__TocFilterInput = {
  metadata?: Maybe<AppLocalizationLocalizationPagesWhat_Is_New__TocMetadataFilterInput>;
  gui?: Maybe<AppLocalizationLocalizationPagesWhat_Is_New__TocGuiFilterInput>;
};

export type AppLocalizationLocalizationPagesWhat_Is_New__TocGui = {
  primaryContentBar?: Maybe<AppLocalizationLocalizationPagesWhat_Is_New__TocGuiPrimaryContentBar>;
  tocItem?: Maybe<AppLocalizationLocalizationPagesWhat_Is_New__TocGuiTocItem>;
};

export type AppLocalizationLocalizationPagesWhat_Is_New__TocGuiFilterInput = {
  primaryContentBar?: Maybe<AppLocalizationLocalizationPagesWhat_Is_New__TocGuiPrimaryContentBarFilterInput>;
  tocItem?: Maybe<AppLocalizationLocalizationPagesWhat_Is_New__TocGuiTocItemFilterInput>;
};

export type AppLocalizationLocalizationPagesWhat_Is_New__TocGuiPrimaryContentBar = {
  label?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationPagesWhat_Is_New__TocGuiPrimaryContentBarFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationPagesWhat_Is_New__TocGuiTocItem = {
  copyLinkToBufferButton?: Maybe<AppLocalizationLocalizationPagesWhat_Is_New__TocGuiTocItemCopyLinkToBufferButton>;
};

export type AppLocalizationLocalizationPagesWhat_Is_New__TocGuiTocItemCopyLinkToBufferButton = {
  tooltip?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationPagesWhat_Is_New__TocGuiTocItemCopyLinkToBufferButtonFilterInput = {
  tooltip?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationLocalizationPagesWhat_Is_New__TocGuiTocItemFilterInput = {
  copyLinkToBufferButton?: Maybe<AppLocalizationLocalizationPagesWhat_Is_New__TocGuiTocItemCopyLinkToBufferButtonFilterInput>;
};

export type AppLocalizationLocalizationPagesWhat_Is_New__TocMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AppLocalizationLocalizationPagesWhat_Is_New__TocMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type AppLocalizationSortInput = {
  fields?: Maybe<Array<Maybe<AppLocalizationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type BookTocSource = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  toc?: Maybe<Array<Maybe<BookTocSourceToc>>>;
  locale?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};

export type BookTocSourceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<BookTocSourceEdge>;
  nodes: Array<BookTocSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<BookTocSourceGroupConnection>;
};


export type BookTocSourceConnectionDistinctArgs = {
  field: BookTocSourceFieldsEnum;
};


export type BookTocSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: BookTocSourceFieldsEnum;
};

export type BookTocSourceEdge = {
  next?: Maybe<BookTocSource>;
  node: BookTocSource;
  previous?: Maybe<BookTocSource>;
};

export type BookTocSourceFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'toc'
  | 'toc___section'
  | 'toc___title'
  | 'toc___subtitles'
  | 'locale'
  | 'lang';

export type BookTocSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  toc?: Maybe<BookTocSourceTocFilterListInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
};

export type BookTocSourceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<BookTocSourceEdge>;
  nodes: Array<BookTocSource>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type BookTocSourceSortInput = {
  fields?: Maybe<Array<Maybe<BookTocSourceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type BookTocSourceToc = {
  section?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BookTocSourceTocFilterInput = {
  section?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subtitles?: Maybe<StringQueryOperatorInput>;
};

export type BookTocSourceTocFilterListInput = {
  elemMatch?: Maybe<BookTocSourceTocFilterInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

/** The query root of GitHub's GraphQL interface. */
export type GitHub = {
  /** Look up a code of conduct by its key */
  codeOfConduct?: Maybe<GitHub_CodeOfConduct>;
  /** Look up a code of conduct by its key */
  codesOfConduct?: Maybe<Array<Maybe<GitHub_CodeOfConduct>>>;
  /** Look up an enterprise by URL slug. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** Look up a pending enterprise administrator invitation by invitee, enterprise and role. */
  enterpriseAdministratorInvitation?: Maybe<GitHub_EnterpriseAdministratorInvitation>;
  /** Look up a pending enterprise administrator invitation by invitation token. */
  enterpriseAdministratorInvitationByToken?: Maybe<GitHub_EnterpriseAdministratorInvitation>;
  /** Look up an open source license by its key */
  license?: Maybe<GitHub_License>;
  /** Return a list of known open source licenses */
  licenses: Array<Maybe<GitHub_License>>;
  /** Get alphabetically sorted list of Marketplace categories */
  marketplaceCategories: Array<GitHub_MarketplaceCategory>;
  /** Look up a Marketplace category by its slug. */
  marketplaceCategory?: Maybe<GitHub_MarketplaceCategory>;
  /** Look up a single Marketplace listing */
  marketplaceListing?: Maybe<GitHub_MarketplaceListing>;
  /** Look up Marketplace listings */
  marketplaceListings: GitHub_MarketplaceListingConnection;
  /** Return information about the GitHub instance */
  meta: GitHub_GitHubMetadata;
  /** Fetches an object given its ID. */
  node?: Maybe<GitHub_Node>;
  /** Lookup nodes by a list of IDs. */
  nodes: Array<Maybe<GitHub_Node>>;
  /** Lookup a organization by login. */
  organization?: Maybe<GitHub_Organization>;
  /** The client's rate limit information. */
  rateLimit?: Maybe<GitHub_RateLimit>;
  /** Hack to workaround https://github.com/facebook/relay/issues/112 re-exposing the root query object */
  relay: Query;
  /** Lookup a given repository by the owner and repository name. */
  repository?: Maybe<GitHub_Repository>;
  /** Lookup a repository owner (ie. either a User or an Organization) by login. */
  repositoryOwner?: Maybe<GitHub_RepositoryOwner>;
  /** Lookup resource by a URL. */
  resource?: Maybe<GitHub_UniformResourceLocatable>;
  /** Perform a search across resources. */
  search: GitHub_SearchResultItemConnection;
  /** GitHub Security Advisories */
  securityAdvisories: GitHub_SecurityAdvisoryConnection;
  /** Fetch a Security Advisory by its GHSA ID */
  securityAdvisory?: Maybe<GitHub_SecurityAdvisory>;
  /** Software Vulnerabilities documented by GitHub Security Advisories */
  securityVulnerabilities: GitHub_SecurityVulnerabilityConnection;
  /**
   * Look up a single Sponsors Listing
   * @deprecated `Query.sponsorsListing` will be removed. Use `Sponsorable.sponsorsListing` instead. Removal on 2020-04-01 UTC.
   */
  sponsorsListing?: Maybe<GitHub_SponsorsListing>;
  /** Look up a topic by name. */
  topic?: Maybe<GitHub_Topic>;
  /** Lookup a user by login. */
  user?: Maybe<GitHub_User>;
  /** The currently authenticated user. */
  viewer: GitHub_User;
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubCodeOfConductArgs = {
  key: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubEnterpriseArgs = {
  slug: Scalars['String'];
  invitationToken?: Maybe<Scalars['String']>;
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubEnterpriseAdministratorInvitationArgs = {
  userLogin: Scalars['String'];
  enterpriseSlug: Scalars['String'];
  role: GitHub_EnterpriseAdministratorRole;
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubEnterpriseAdministratorInvitationByTokenArgs = {
  invitationToken: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubLicenseArgs = {
  key: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubMarketplaceCategoriesArgs = {
  includeCategories?: Maybe<Array<Scalars['String']>>;
  excludeEmpty?: Maybe<Scalars['Boolean']>;
  excludeSubcategories?: Maybe<Scalars['Boolean']>;
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubMarketplaceCategoryArgs = {
  slug: Scalars['String'];
  useTopicAliases?: Maybe<Scalars['Boolean']>;
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubMarketplaceListingArgs = {
  slug: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubMarketplaceListingsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categorySlug?: Maybe<Scalars['String']>;
  useTopicAliases?: Maybe<Scalars['Boolean']>;
  viewerCanAdmin?: Maybe<Scalars['Boolean']>;
  adminId?: Maybe<Scalars['ID']>;
  organizationId?: Maybe<Scalars['ID']>;
  allStates?: Maybe<Scalars['Boolean']>;
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryCategoryOnly?: Maybe<Scalars['Boolean']>;
  withFreeTrialsOnly?: Maybe<Scalars['Boolean']>;
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubNodeArgs = {
  id: Scalars['ID'];
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubNodesArgs = {
  ids: Array<Scalars['ID']>;
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubOrganizationArgs = {
  login: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubRateLimitArgs = {
  dryRun?: Maybe<Scalars['Boolean']>;
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubRepositoryArgs = {
  owner: Scalars['String'];
  name: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubRepositoryOwnerArgs = {
  login: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubResourceArgs = {
  url: Scalars['GitHub_URI'];
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubSearchArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
  type: GitHub_SearchType;
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubSecurityAdvisoriesArgs = {
  orderBy?: Maybe<GitHub_SecurityAdvisoryOrder>;
  identifier?: Maybe<GitHub_SecurityAdvisoryIdentifierFilter>;
  publishedSince?: Maybe<Scalars['GitHub_DateTime']>;
  updatedSince?: Maybe<Scalars['GitHub_DateTime']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubSecurityAdvisoryArgs = {
  ghsaId: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubSecurityVulnerabilitiesArgs = {
  orderBy?: Maybe<GitHub_SecurityVulnerabilityOrder>;
  ecosystem?: Maybe<GitHub_SecurityAdvisoryEcosystem>;
  package?: Maybe<Scalars['String']>;
  severities?: Maybe<Array<GitHub_SecurityAdvisorySeverity>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubSponsorsListingArgs = {
  slug: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubTopicArgs = {
  name: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
export type GitHubUserArgs = {
  login: Scalars['String'];
};

/** Autogenerated input type of AcceptEnterpriseAdministratorInvitation */
export type GitHub_AcceptEnterpriseAdministratorInvitationInput = {
  /** The id of the invitation being accepted */
  invitationId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AcceptEnterpriseAdministratorInvitation */
export type GitHub_AcceptEnterpriseAdministratorInvitationPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The invitation that was accepted. */
  invitation?: Maybe<GitHub_EnterpriseAdministratorInvitation>;
  /** A message confirming the result of accepting an administrator invitation. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of AcceptTopicSuggestion */
export type GitHub_AcceptTopicSuggestionInput = {
  /** The Node ID of the repository. */
  repositoryId: Scalars['ID'];
  /** The name of the suggested topic. */
  name: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AcceptTopicSuggestion */
export type GitHub_AcceptTopicSuggestionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The accepted topic. */
  topic?: Maybe<GitHub_Topic>;
};

/** The possible capabilities for action executions setting. */
export type GitHub_ActionExecutionCapabilitySetting = 
  /** All action executions are disabled. */
  | 'DISABLED'
  /** All action executions are enabled. */
  | 'ALL_ACTIONS'
  /** Only actions defined within the repo are allowed. */
  | 'LOCAL_ACTIONS_ONLY'
  /** Organization administrators action execution capabilities. */
  | 'NO_POLICY';

/** Represents an object which can take actions on GitHub. Typically a User or Bot. */
export type GitHub_Actor = {
  /** A URL pointing to the actor's public avatar. */
  avatarUrl: Scalars['GitHub_URI'];
  /** The username of the actor. */
  login: Scalars['String'];
  /** The HTTP path for this actor. */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this actor. */
  url: Scalars['GitHub_URI'];
};


/** Represents an object which can take actions on GitHub. Typically a User or Bot. */
export type GitHub_ActorAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

/** Location information for an actor */
export type GitHub_ActorLocation = {
  /** City */
  city?: Maybe<Scalars['String']>;
  /** Country name */
  country?: Maybe<Scalars['String']>;
  /** Country code */
  countryCode?: Maybe<Scalars['String']>;
  /** Region name */
  region?: Maybe<Scalars['String']>;
  /** Region or state code */
  regionCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of AddAssigneesToAssignable */
export type GitHub_AddAssigneesToAssignableInput = {
  /** The id of the assignable object to add assignees to. */
  assignableId: Scalars['ID'];
  /** The id of users to add as assignees. */
  assigneeIds: Array<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddAssigneesToAssignable */
export type GitHub_AddAssigneesToAssignablePayload = {
  /** The item that was assigned. */
  assignable?: Maybe<GitHub_Assignable>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of AddComment */
export type GitHub_AddCommentInput = {
  /** The Node ID of the subject to modify. */
  subjectId: Scalars['ID'];
  /** The contents of the comment. */
  body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddComment */
export type GitHub_AddCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The edge from the subject's comment connection. */
  commentEdge?: Maybe<GitHub_IssueCommentEdge>;
  /** The subject */
  subject?: Maybe<GitHub_Node>;
  /** The edge from the subject's timeline connection. */
  timelineEdge?: Maybe<GitHub_IssueTimelineItemEdge>;
};

/** Represents a 'added_to_project' event on a given issue or pull request. */
export type GitHub_AddedToProjectEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

/** Autogenerated input type of AddLabelsToLabelable */
export type GitHub_AddLabelsToLabelableInput = {
  /** The id of the labelable object to add labels to. */
  labelableId: Scalars['ID'];
  /** The ids of the labels to add. */
  labelIds: Array<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddLabelsToLabelable */
export type GitHub_AddLabelsToLabelablePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The item that was labeled. */
  labelable?: Maybe<GitHub_Labelable>;
};

/** Autogenerated input type of AddProjectCard */
export type GitHub_AddProjectCardInput = {
  /** The Node ID of the ProjectColumn. */
  projectColumnId: Scalars['ID'];
  /** The content of the card. Must be a member of the ProjectCardItem union */
  contentId?: Maybe<Scalars['ID']>;
  /** The note on the card. */
  note?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddProjectCard */
export type GitHub_AddProjectCardPayload = {
  /** The edge from the ProjectColumn's card connection. */
  cardEdge?: Maybe<GitHub_ProjectCardEdge>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ProjectColumn */
  projectColumn?: Maybe<GitHub_ProjectColumn>;
};

/** Autogenerated input type of AddProjectColumn */
export type GitHub_AddProjectColumnInput = {
  /** The Node ID of the project. */
  projectId: Scalars['ID'];
  /** The name of the column. */
  name: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddProjectColumn */
export type GitHub_AddProjectColumnPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The edge from the project's column connection. */
  columnEdge?: Maybe<GitHub_ProjectColumnEdge>;
  /** The project */
  project?: Maybe<GitHub_Project>;
};

/** Autogenerated input type of AddPullRequestReviewComment */
export type GitHub_AddPullRequestReviewCommentInput = {
  /** The node ID of the pull request reviewing */
  pullRequestId?: Maybe<Scalars['ID']>;
  /** The Node ID of the review to modify. */
  pullRequestReviewId?: Maybe<Scalars['ID']>;
  /** The SHA of the commit to comment on. */
  commitOID?: Maybe<Scalars['GitHub_GitObjectID']>;
  /** The text of the comment. */
  body: Scalars['String'];
  /** The relative path of the file to comment on. */
  path?: Maybe<Scalars['String']>;
  /** The line index in the diff to comment on. */
  position?: Maybe<Scalars['Int']>;
  /** The comment id to reply to. */
  inReplyTo?: Maybe<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddPullRequestReviewComment */
export type GitHub_AddPullRequestReviewCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The newly created comment. */
  comment?: Maybe<GitHub_PullRequestReviewComment>;
  /** The edge from the review's comment connection. */
  commentEdge?: Maybe<GitHub_PullRequestReviewCommentEdge>;
};

/** Autogenerated input type of AddPullRequestReview */
export type GitHub_AddPullRequestReviewInput = {
  /** The Node ID of the pull request to modify. */
  pullRequestId: Scalars['ID'];
  /** The commit OID the review pertains to. */
  commitOID?: Maybe<Scalars['GitHub_GitObjectID']>;
  /** The contents of the review body comment. */
  body?: Maybe<Scalars['String']>;
  /** The event to perform on the pull request review. */
  event?: Maybe<GitHub_PullRequestReviewEvent>;
  /** The review line comments. */
  comments?: Maybe<Array<Maybe<GitHub_DraftPullRequestReviewComment>>>;
  /** The review line comment threads. */
  threads?: Maybe<Array<Maybe<GitHub_DraftPullRequestReviewThread>>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddPullRequestReview */
export type GitHub_AddPullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The newly created pull request review. */
  pullRequestReview?: Maybe<GitHub_PullRequestReview>;
  /** The edge from the pull request's review connection. */
  reviewEdge?: Maybe<GitHub_PullRequestReviewEdge>;
};

/** Autogenerated input type of AddPullRequestReviewThread */
export type GitHub_AddPullRequestReviewThreadInput = {
  /** Path to the file being commented on. */
  path: Scalars['String'];
  /** Body of the thread's first comment. */
  body: Scalars['String'];
  /** The node ID of the pull request reviewing */
  pullRequestId?: Maybe<Scalars['ID']>;
  /** The Node ID of the review to modify. */
  pullRequestReviewId?: Maybe<Scalars['ID']>;
  /** The line of the blob to which the thread refers. The end of the line range for multi-line comments. */
  line: Scalars['Int'];
  /** The side of the diff on which the line resides. For multi-line comments, this is the side for the end of the line range. */
  side?: Maybe<GitHub_DiffSide>;
  /** The first line of the range to which the comment refers. */
  startLine?: Maybe<Scalars['Int']>;
  /** The side of the diff on which the start line resides. */
  startSide?: Maybe<GitHub_DiffSide>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddPullRequestReviewThread */
export type GitHub_AddPullRequestReviewThreadPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The newly created thread. */
  thread?: Maybe<GitHub_PullRequestReviewThread>;
};

/** Autogenerated input type of AddReaction */
export type GitHub_AddReactionInput = {
  /** The Node ID of the subject to modify. */
  subjectId: Scalars['ID'];
  /** The name of the emoji to react with. */
  content: GitHub_ReactionContent;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddReaction */
export type GitHub_AddReactionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The reaction object. */
  reaction?: Maybe<GitHub_Reaction>;
  /** The reactable subject. */
  subject?: Maybe<GitHub_Reactable>;
};

/** Autogenerated input type of AddStar */
export type GitHub_AddStarInput = {
  /** The Starrable ID to star. */
  starrableId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddStar */
export type GitHub_AddStarPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The starrable. */
  starrable?: Maybe<GitHub_Starrable>;
};

/** A GitHub App. */
export type GitHub_App = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The description of the app. */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The hex color code, without the leading '#', for the logo background. */
  logoBackgroundColor: Scalars['String'];
  /** A URL pointing to the app's logo. */
  logoUrl: Scalars['GitHub_URI'];
  /** The name of the app. */
  name: Scalars['String'];
  /** A slug based on the name of the app for use in URLs. */
  slug: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The URL to the app's homepage. */
  url: Scalars['GitHub_URI'];
};


/** A GitHub App. */
export type GitHub_AppLogoUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

/** Autogenerated input type of ArchiveRepository */
export type GitHub_ArchiveRepositoryInput = {
  /** The ID of the repository to mark as archived. */
  repositoryId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ArchiveRepository */
export type GitHub_ArchiveRepositoryPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The repository that was marked as archived. */
  repository?: Maybe<GitHub_Repository>;
};

/** An object that can have users assigned to it. */
export type GitHub_Assignable = {
  /** A list of Users assigned to this object. */
  assignees: GitHub_UserConnection;
};


/** An object that can have users assigned to it. */
export type GitHub_AssignableAssigneesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Represents an 'assigned' event on any assignable object. */
export type GitHub_AssignedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the assignable associated with the event. */
  assignable: GitHub_Assignable;
  /** Identifies the user or mannequin that was assigned. */
  assignee?: Maybe<GitHub_Assignee>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /**
   * Identifies the user who was assigned.
   * @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC.
   */
  user?: Maybe<GitHub_User>;
};

/** Types that can be assigned to issues. */
export type GitHub_Assignee = GitHub_Bot | GitHub_Mannequin | GitHub_Organization | GitHub_User;

/** An entry in the audit log. */
export type GitHub_AuditEntry = {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Types that can initiate an audit log event. */
export type GitHub_AuditEntryActor = GitHub_Bot | GitHub_Organization | GitHub_User;

/** Ordering options for Audit Log connections. */
export type GitHub_AuditLogOrder = {
  /** The field to order Audit Logs by. */
  field?: Maybe<GitHub_AuditLogOrderField>;
  /** The ordering direction. */
  direction?: Maybe<GitHub_OrderDirection>;
};

/** Properties by which Audit Log connections can be ordered. */
export type GitHub_AuditLogOrderField = 
  /** Order audit log entries by timestamp */
  | 'CREATED_AT';

/** Represents a 'automatic_base_change_failed' event on a given pull request. */
export type GitHub_AutomaticBaseChangeFailedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** The new base for this PR */
  newBase: Scalars['String'];
  /** The old base for this PR */
  oldBase: Scalars['String'];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
};

/** Represents a 'automatic_base_change_succeeded' event on a given pull request. */
export type GitHub_AutomaticBaseChangeSucceededEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** The new base for this PR */
  newBase: Scalars['String'];
  /** The old base for this PR */
  oldBase: Scalars['String'];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
};

/** Represents a 'base_ref_changed' event on a given issue or pull request. */
export type GitHub_BaseRefChangedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

/** Represents a 'base_ref_force_pushed' event on a given pull request. */
export type GitHub_BaseRefForcePushedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the after commit SHA for the 'base_ref_force_pushed' event. */
  afterCommit?: Maybe<GitHub_Commit>;
  /** Identifies the before commit SHA for the 'base_ref_force_pushed' event. */
  beforeCommit?: Maybe<GitHub_Commit>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
  /** Identifies the fully qualified ref name for the 'base_ref_force_pushed' event. */
  ref?: Maybe<GitHub_Ref>;
};

/** Represents a Git blame. */
export type GitHub_Blame = {
  /** The list of ranges from a Git blame. */
  ranges: Array<GitHub_BlameRange>;
};

/** Represents a range of information from a Git blame. */
export type GitHub_BlameRange = {
  /**
   * Identifies the recency of the change, from 1 (new) to 10 (old). This is
   * calculated as a 2-quantile and determines the length of distance between the
   * median age of all the changes in the file and the recency of the current
   * range's change.
   */
  age: Scalars['Int'];
  /** Identifies the line author */
  commit: GitHub_Commit;
  /** The ending line for the range */
  endingLine: Scalars['Int'];
  /** The starting line for the range */
  startingLine: Scalars['Int'];
};

/** Represents a Git blob. */
export type GitHub_Blob = GitHub_Node & GitHub_GitObject & {
  /** An abbreviated version of the Git object ID */
  abbreviatedOid: Scalars['String'];
  /** Byte size of Blob object */
  byteSize: Scalars['Int'];
  /** The HTTP path for this Git object */
  commitResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this Git object */
  commitUrl: Scalars['GitHub_URI'];
  id: Scalars['ID'];
  /** Indicates whether the Blob is binary or text. Returns null if unable to determine the encoding. */
  isBinary?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the contents is truncated */
  isTruncated: Scalars['Boolean'];
  /** The Git object ID */
  oid: Scalars['GitHub_GitObjectID'];
  /** The Repository the Git object belongs to */
  repository: GitHub_Repository;
  /** UTF8 text data or null if the Blob is binary */
  text?: Maybe<Scalars['String']>;
};

/** A special type of user which takes actions on behalf of GitHub Apps. */
export type GitHub_Bot = GitHub_Node & GitHub_Actor & GitHub_UniformResourceLocatable & {
  /** A URL pointing to the GitHub App's public avatar. */
  avatarUrl: Scalars['GitHub_URI'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  /** The username of the actor. */
  login: Scalars['String'];
  /** The HTTP path for this bot */
  resourcePath: Scalars['GitHub_URI'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this bot */
  url: Scalars['GitHub_URI'];
};


/** A special type of user which takes actions on behalf of GitHub Apps. */
export type GitHub_BotAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

/** A branch protection rule. */
export type GitHub_BranchProtectionRule = GitHub_Node & {
  /** A list of conflicts matching branches protection rule and other branch protection rules */
  branchProtectionRuleConflicts: GitHub_BranchProtectionRuleConflictConnection;
  /** The actor who created this branch protection rule. */
  creator?: Maybe<GitHub_Actor>;
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews: Scalars['Boolean'];
  id: Scalars['ID'];
  /** Can admins overwrite branch protection. */
  isAdminEnforced: Scalars['Boolean'];
  /** Repository refs that are protected by this rule */
  matchingRefs: GitHub_RefConnection;
  /** Identifies the protection rule pattern. */
  pattern: Scalars['String'];
  /** A list push allowances for this branch protection rule. */
  pushAllowances: GitHub_PushAllowanceConnection;
  /** The repository associated with this branch protection rule. */
  repository?: Maybe<GitHub_Repository>;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<Scalars['Int']>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews: Scalars['Boolean'];
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews: Scalars['Boolean'];
  /** Are commits required to be signed. */
  requiresCommitSignatures: Scalars['Boolean'];
  /** Are status checks required to update matching branches. */
  requiresStatusChecks: Scalars['Boolean'];
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks: Scalars['Boolean'];
  /** Is pushing to matching branches restricted. */
  restrictsPushes: Scalars['Boolean'];
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals: Scalars['Boolean'];
  /** A list review dismissal allowances for this branch protection rule. */
  reviewDismissalAllowances: GitHub_ReviewDismissalAllowanceConnection;
};


/** A branch protection rule. */
export type GitHub_BranchProtectionRuleBranchProtectionRuleConflictsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A branch protection rule. */
export type GitHub_BranchProtectionRuleMatchingRefsArgs = {
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A branch protection rule. */
export type GitHub_BranchProtectionRulePushAllowancesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A branch protection rule. */
export type GitHub_BranchProtectionRuleReviewDismissalAllowancesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A conflict between two branch protection rules. */
export type GitHub_BranchProtectionRuleConflict = {
  /** Identifies the branch protection rule. */
  branchProtectionRule?: Maybe<GitHub_BranchProtectionRule>;
  /** Identifies the conflicting branch protection rule. */
  conflictingBranchProtectionRule?: Maybe<GitHub_BranchProtectionRule>;
  /** Identifies the branch ref that has conflicting rules */
  ref?: Maybe<GitHub_Ref>;
};

/** The connection type for BranchProtectionRuleConflict. */
export type GitHub_BranchProtectionRuleConflictConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_BranchProtectionRuleConflictEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_BranchProtectionRuleConflict>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_BranchProtectionRuleConflictEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_BranchProtectionRuleConflict>;
};

/** The connection type for BranchProtectionRule. */
export type GitHub_BranchProtectionRuleConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_BranchProtectionRuleEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_BranchProtectionRule>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_BranchProtectionRuleEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_BranchProtectionRule>;
};

/** Autogenerated input type of CancelEnterpriseAdminInvitation */
export type GitHub_CancelEnterpriseAdminInvitationInput = {
  /** The Node ID of the pending enterprise administrator invitation. */
  invitationId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CancelEnterpriseAdminInvitation */
export type GitHub_CancelEnterpriseAdminInvitationPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The invitation that was canceled. */
  invitation?: Maybe<GitHub_EnterpriseAdministratorInvitation>;
  /** A message confirming the result of canceling an administrator invitation. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of ChangeUserStatus */
export type GitHub_ChangeUserStatusInput = {
  /** The emoji to represent your status. Can either be a native Unicode emoji or an emoji name with colons, e.g., :grinning:. */
  emoji?: Maybe<Scalars['String']>;
  /** A short description of your current status. */
  message?: Maybe<Scalars['String']>;
  /**
   * The ID of the organization whose members will be allowed to see the status. If
   * omitted, the status will be publicly visible.
   */
  organizationId?: Maybe<Scalars['ID']>;
  /** Whether this status should indicate you are not fully available on GitHub, e.g., you are away. */
  limitedAvailability?: Maybe<Scalars['Boolean']>;
  /** If set, the user status will not be shown after this date. */
  expiresAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ChangeUserStatus */
export type GitHub_ChangeUserStatusPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Your updated status. */
  status?: Maybe<GitHub_UserStatus>;
};

/** Autogenerated input type of ClearLabelsFromLabelable */
export type GitHub_ClearLabelsFromLabelableInput = {
  /** The id of the labelable object to clear the labels from. */
  labelableId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ClearLabelsFromLabelable */
export type GitHub_ClearLabelsFromLabelablePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The item that was unlabeled. */
  labelable?: Maybe<GitHub_Labelable>;
};

/** Autogenerated input type of CloneProject */
export type GitHub_CloneProjectInput = {
  /** The owner ID to create the project under. */
  targetOwnerId: Scalars['ID'];
  /** The source project to clone. */
  sourceId: Scalars['ID'];
  /** Whether or not to clone the source project's workflows. */
  includeWorkflows: Scalars['Boolean'];
  /** The name of the project. */
  name: Scalars['String'];
  /** The description of the project. */
  body?: Maybe<Scalars['String']>;
  /** The visibility of the project, defaults to false (private). */
  public?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CloneProject */
export type GitHub_CloneProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The id of the JobStatus for populating cloned fields. */
  jobStatusId?: Maybe<Scalars['String']>;
  /** The new cloned project. */
  project?: Maybe<GitHub_Project>;
};

/** Autogenerated input type of CloneTemplateRepository */
export type GitHub_CloneTemplateRepositoryInput = {
  /** The Node ID of the template repository. */
  repositoryId: Scalars['ID'];
  /** The name of the new repository. */
  name: Scalars['String'];
  /** The ID of the owner for the new repository. */
  ownerId: Scalars['ID'];
  /** A short description of the new repository. */
  description?: Maybe<Scalars['String']>;
  /** Indicates the repository's visibility level. */
  visibility: GitHub_RepositoryVisibility;
  /**
   * Whether to copy all branches from the template to the new repository. Defaults
   * to copying only the default branch of the template.
   */
  includeAllBranches?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CloneTemplateRepository */
export type GitHub_CloneTemplateRepositoryPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The new repository. */
  repository?: Maybe<GitHub_Repository>;
};

/** An object that can be closed */
export type GitHub_Closable = {
  /** `true` if the object is closed (definition of closed may depend on type) */
  closed: Scalars['Boolean'];
  /** Identifies the date and time when the object was closed. */
  closedAt?: Maybe<Scalars['GitHub_DateTime']>;
};

/** Represents a 'closed' event on any `Closable`. */
export type GitHub_ClosedEvent = GitHub_Node & GitHub_UniformResourceLocatable & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Object that was closed. */
  closable: GitHub_Closable;
  /** Object which triggered the creation of this event. */
  closer?: Maybe<GitHub_Closer>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** The HTTP path for this closed event. */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this closed event. */
  url: Scalars['GitHub_URI'];
};

/** Autogenerated input type of CloseIssue */
export type GitHub_CloseIssueInput = {
  /** ID of the issue to be closed. */
  issueId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CloseIssue */
export type GitHub_CloseIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The issue that was closed. */
  issue?: Maybe<GitHub_Issue>;
};

/** Autogenerated input type of ClosePullRequest */
export type GitHub_ClosePullRequestInput = {
  /** ID of the pull request to be closed. */
  pullRequestId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ClosePullRequest */
export type GitHub_ClosePullRequestPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The pull request that was closed. */
  pullRequest?: Maybe<GitHub_PullRequest>;
};

/** The object which triggered a `ClosedEvent`. */
export type GitHub_Closer = GitHub_Commit | GitHub_PullRequest;

/** The Code of Conduct for a repository */
export type GitHub_CodeOfConduct = GitHub_Node & {
  /** The body of the Code of Conduct */
  body?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The key for the Code of Conduct */
  key: Scalars['String'];
  /** The formal name of the Code of Conduct */
  name: Scalars['String'];
  /** The HTTP path for this Code of Conduct */
  resourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for this Code of Conduct */
  url?: Maybe<Scalars['GitHub_URI']>;
};

/** Collaborators affiliation level with a subject. */
export type GitHub_CollaboratorAffiliation = 
  /** All outside collaborators of an organization-owned subject. */
  | 'OUTSIDE'
  /** All collaborators with permissions to an organization-owned subject, regardless of organization membership status. */
  | 'DIRECT'
  /** All collaborators the authenticated user can see. */
  | 'ALL';

/** Represents a comment. */
export type GitHub_Comment = {
  /** The actor who authored the comment. */
  author?: Maybe<GitHub_Actor>;
  /** Author's association with the subject of the comment. */
  authorAssociation: GitHub_CommentAuthorAssociation;
  /** The body as Markdown. */
  body: Scalars['String'];
  /** The body rendered to HTML. */
  bodyHTML: Scalars['GitHub_HTML'];
  /** The body rendered to text. */
  bodyText: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Check if this comment was created via an email reply. */
  createdViaEmail: Scalars['Boolean'];
  /** The actor who edited the comment. */
  editor?: Maybe<GitHub_Actor>;
  id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: Scalars['Boolean'];
  /** The moment the editor made the last edit */
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** Identifies when the comment was published at. */
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** A list of edits to this content. */
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
  /** Did the viewer author this comment. */
  viewerDidAuthor: Scalars['Boolean'];
};


/** Represents a comment. */
export type GitHub_CommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A comment author association with repository. */
export type GitHub_CommentAuthorAssociation = 
  /** Author is a member of the organization that owns the repository. */
  | 'MEMBER'
  /** Author is the owner of the repository. */
  | 'OWNER'
  /** Author has been invited to collaborate on the repository. */
  | 'COLLABORATOR'
  /** Author has previously committed to the repository. */
  | 'CONTRIBUTOR'
  /** Author has not previously committed to the repository. */
  | 'FIRST_TIME_CONTRIBUTOR'
  /** Author has not previously committed to GitHub. */
  | 'FIRST_TIMER'
  /** Author has no association with the repository. */
  | 'NONE';

/** The possible errors that will prevent a user from updating a comment. */
export type GitHub_CommentCannotUpdateReason = 
  /** Unable to create comment because repository is archived. */
  | 'ARCHIVED'
  /** You must be the author or have write access to this repository to update this comment. */
  | 'INSUFFICIENT_ACCESS'
  /** Unable to create comment because issue is locked. */
  | 'LOCKED'
  /** You must be logged in to update this comment. */
  | 'LOGIN_REQUIRED'
  /** Repository is under maintenance. */
  | 'MAINTENANCE'
  /** At least one email address must be verified to update this comment. */
  | 'VERIFIED_EMAIL_REQUIRED'
  /** You cannot update this comment */
  | 'DENIED';

/** Represents a 'comment_deleted' event on a given issue or pull request. */
export type GitHub_CommentDeletedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

/** Represents a Git commit. */
export type GitHub_Commit = GitHub_Node & GitHub_GitObject & GitHub_Subscribable & GitHub_UniformResourceLocatable & {
  /** An abbreviated version of the Git object ID */
  abbreviatedOid: Scalars['String'];
  /** The number of additions in this commit. */
  additions: Scalars['Int'];
  /** The pull requests associated with a commit */
  associatedPullRequests?: Maybe<GitHub_PullRequestConnection>;
  /** Authorship details of the commit. */
  author?: Maybe<GitHub_GitActor>;
  /** Check if the committer and the author match. */
  authoredByCommitter: Scalars['Boolean'];
  /** The datetime when this commit was authored. */
  authoredDate: Scalars['GitHub_DateTime'];
  /** Fetches `git blame` information. */
  blame: GitHub_Blame;
  /** The number of changed files in this commit. */
  changedFiles: Scalars['Int'];
  /** Comments made on the commit. */
  comments: GitHub_CommitCommentConnection;
  /** The HTTP path for this Git object */
  commitResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this Git object */
  commitUrl: Scalars['GitHub_URI'];
  /** The datetime when this commit was committed. */
  committedDate: Scalars['GitHub_DateTime'];
  /** Check if commited via GitHub web UI. */
  committedViaWeb: Scalars['Boolean'];
  /** Committership details of the commit. */
  committer?: Maybe<GitHub_GitActor>;
  /** The number of deletions in this commit. */
  deletions: Scalars['Int'];
  /** The deployments associated with a commit. */
  deployments?: Maybe<GitHub_DeploymentConnection>;
  /** The linear commit history starting from (and including) this commit, in the same order as `git log`. */
  history: GitHub_CommitHistoryConnection;
  id: Scalars['ID'];
  /** The Git commit message */
  message: Scalars['String'];
  /** The Git commit message body */
  messageBody: Scalars['String'];
  /** The commit message body rendered to HTML. */
  messageBodyHTML: Scalars['GitHub_HTML'];
  /** The Git commit message headline */
  messageHeadline: Scalars['String'];
  /** The commit message headline rendered to HTML. */
  messageHeadlineHTML: Scalars['GitHub_HTML'];
  /** The Git object ID */
  oid: Scalars['GitHub_GitObjectID'];
  /** The organization this commit was made on behalf of. */
  onBehalfOf?: Maybe<GitHub_Organization>;
  /** The parents of a commit. */
  parents: GitHub_CommitConnection;
  /** The datetime when this commit was pushed. */
  pushedDate?: Maybe<Scalars['GitHub_DateTime']>;
  /** The Repository this commit belongs to */
  repository: GitHub_Repository;
  /** The HTTP path for this commit */
  resourcePath: Scalars['GitHub_URI'];
  /** Commit signing information, if present. */
  signature?: Maybe<GitHub_GitSignature>;
  /** Status information for this commit */
  status?: Maybe<GitHub_Status>;
  /** Check and Status rollup information for this commit. */
  statusCheckRollup?: Maybe<GitHub_StatusCheckRollup>;
  /** Returns a list of all submodules in this repository as of this Commit parsed from the .gitmodules file. */
  submodules: GitHub_SubmoduleConnection;
  /**
   * Returns a URL to download a tarball archive for a repository.
   * Note: For private repositories, these links are temporary and expire after five minutes.
   */
  tarballUrl: Scalars['GitHub_URI'];
  /** Commit's root Tree */
  tree: GitHub_Tree;
  /** The HTTP path for the tree of this commit */
  treeResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for the tree of this commit */
  treeUrl: Scalars['GitHub_URI'];
  /** The HTTP URL for this commit */
  url: Scalars['GitHub_URI'];
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: Scalars['Boolean'];
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: Maybe<GitHub_SubscriptionState>;
  /**
   * Returns a URL to download a zipball archive for a repository.
   * Note: For private repositories, these links are temporary and expire after five minutes.
   */
  zipballUrl: Scalars['GitHub_URI'];
};


/** Represents a Git commit. */
export type GitHub_CommitAssociatedPullRequestsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_PullRequestOrder>;
};


/** Represents a Git commit. */
export type GitHub_CommitBlameArgs = {
  path: Scalars['String'];
};


/** Represents a Git commit. */
export type GitHub_CommitCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a Git commit. */
export type GitHub_CommitDeploymentsArgs = {
  environments?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<GitHub_DeploymentOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a Git commit. */
export type GitHub_CommitHistoryArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  author?: Maybe<GitHub_CommitAuthor>;
  since?: Maybe<Scalars['GitHub_GitTimestamp']>;
  until?: Maybe<Scalars['GitHub_GitTimestamp']>;
};


/** Represents a Git commit. */
export type GitHub_CommitParentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a Git commit. */
export type GitHub_CommitSubmodulesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Specifies an author for filtering Git commits. */
export type GitHub_CommitAuthor = {
  /**
   * ID of a User to filter by. If non-null, only commits authored by this user
   * will be returned. This field takes precedence over emails.
   */
  id?: Maybe<Scalars['ID']>;
  /** Email addresses to filter by. Commits authored by any of the specified email addresses will be returned. */
  emails?: Maybe<Array<Scalars['String']>>;
};

/** Represents a comment on a given Commit. */
export type GitHub_CommitComment = GitHub_Node & GitHub_Comment & GitHub_Deletable & GitHub_Minimizable & GitHub_Updatable & GitHub_UpdatableComment & GitHub_Reactable & GitHub_RepositoryNode & {
  /** The actor who authored the comment. */
  author?: Maybe<GitHub_Actor>;
  /** Author's association with the subject of the comment. */
  authorAssociation: GitHub_CommentAuthorAssociation;
  /** Identifies the comment body. */
  body: Scalars['String'];
  /** The body rendered to HTML. */
  bodyHTML: Scalars['GitHub_HTML'];
  /** The body rendered to text. */
  bodyText: Scalars['String'];
  /** Identifies the commit associated with the comment, if the commit exists. */
  commit?: Maybe<GitHub_Commit>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Check if this comment was created via an email reply. */
  createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The actor who edited the comment. */
  editor?: Maybe<GitHub_Actor>;
  id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: Scalars['Boolean'];
  /** Returns whether or not a comment has been minimized. */
  isMinimized: Scalars['Boolean'];
  /** The moment the editor made the last edit */
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** Returns why the comment was minimized. */
  minimizedReason?: Maybe<Scalars['String']>;
  /** Identifies the file path associated with the comment. */
  path?: Maybe<Scalars['String']>;
  /** Identifies the line position associated with the comment. */
  position?: Maybe<Scalars['Int']>;
  /** Identifies when the comment was published at. */
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  reactions: GitHub_ReactionConnection;
  /** The repository associated with this node. */
  repository: GitHub_Repository;
  /** The HTTP path permalink for this commit comment. */
  resourcePath: Scalars['GitHub_URI'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL permalink for this commit comment. */
  url: Scalars['GitHub_URI'];
  /** A list of edits to this content. */
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: Scalars['Boolean'];
  /** Check if the current viewer can minimize this object. */
  viewerCanMinimize: Scalars['Boolean'];
  /** Can user react to this subject */
  viewerCanReact: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  viewerDidAuthor: Scalars['Boolean'];
};


/** Represents a comment on a given Commit. */
export type GitHub_CommitCommentReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<GitHub_ReactionContent>;
  orderBy?: Maybe<GitHub_ReactionOrder>;
};


/** Represents a comment on a given Commit. */
export type GitHub_CommitCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for CommitComment. */
export type GitHub_CommitCommentConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_CommitCommentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_CommitComment>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_CommitCommentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_CommitComment>;
};

/** A thread of comments on a commit. */
export type GitHub_CommitCommentThread = GitHub_Node & GitHub_RepositoryNode & {
  /** The comments that exist in this thread. */
  comments: GitHub_CommitCommentConnection;
  /** The commit the comments were made on. */
  commit?: Maybe<GitHub_Commit>;
  id: Scalars['ID'];
  /** The file the comments were made on. */
  path?: Maybe<Scalars['String']>;
  /** The position in the diff for the commit that the comment was made on. */
  position?: Maybe<Scalars['Int']>;
  /** The repository associated with this node. */
  repository: GitHub_Repository;
};


/** A thread of comments on a commit. */
export type GitHub_CommitCommentThreadCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for Commit. */
export type GitHub_CommitConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_CommitEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Commit>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** Ordering options for commit contribution connections. */
export type GitHub_CommitContributionOrder = {
  /** The field by which to order commit contributions. */
  field: GitHub_CommitContributionOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which commit contribution connections can be ordered. */
export type GitHub_CommitContributionOrderField = 
  /** Order commit contributions by when they were made. */
  | 'OCCURRED_AT'
  /** Order commit contributions by how many commits they represent. */
  | 'COMMIT_COUNT';

/** This aggregates commits made by a user within one repository. */
export type GitHub_CommitContributionsByRepository = {
  /** The commit contributions, each representing a day. */
  contributions: GitHub_CreatedCommitContributionConnection;
  /** The repository in which the commits were made. */
  repository: GitHub_Repository;
  /** The HTTP path for the user's commits to the repository in this time range. */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for the user's commits to the repository in this time range. */
  url: Scalars['GitHub_URI'];
};


/** This aggregates commits made by a user within one repository. */
export type GitHub_CommitContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_CommitContributionOrder>;
};

/** An edge in a connection. */
export type GitHub_CommitEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Commit>;
};

/** The connection type for Commit. */
export type GitHub_CommitHistoryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_CommitEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Commit>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** Represents a 'connected' event on a given issue or pull request. */
export type GitHub_ConnectedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** Reference originated in a different repository. */
  isCrossRepository: Scalars['Boolean'];
  /** Issue or pull request that made the reference. */
  source: GitHub_ReferencedSubject;
  /** Issue or pull request which was connected. */
  subject: GitHub_ReferencedSubject;
};

/** Represents a contribution a user made on GitHub, such as opening an issue. */
export type GitHub_Contribution = {
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars['Boolean'];
  /** When this contribution was made. */
  occurredAt: Scalars['GitHub_DateTime'];
  /** The HTTP path for this contribution. */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this contribution. */
  url: Scalars['GitHub_URI'];
  /** The user who made this contribution. */
  user: GitHub_User;
};

/** A calendar of contributions made on GitHub by a user. */
export type GitHub_ContributionCalendar = {
  /** A list of hex color codes used in this calendar. The darker the color, the more contributions it represents. */
  colors: Array<Scalars['String']>;
  /** Determine if the color set was chosen because it's currently Halloween. */
  isHalloween: Scalars['Boolean'];
  /** A list of the months of contributions in this calendar. */
  months: Array<GitHub_ContributionCalendarMonth>;
  /** The count of total contributions in the calendar. */
  totalContributions: Scalars['Int'];
  /** A list of the weeks of contributions in this calendar. */
  weeks: Array<GitHub_ContributionCalendarWeek>;
};

/** Represents a single day of contributions on GitHub by a user. */
export type GitHub_ContributionCalendarDay = {
  /** The hex color code that represents how many contributions were made on this day compared to others in the calendar. */
  color: Scalars['String'];
  /** How many contributions were made by the user on this day. */
  contributionCount: Scalars['Int'];
  /** The day this square represents. */
  date: Scalars['GitHub_Date'];
  /** A number representing which day of the week this square represents, e.g., 1 is Monday. */
  weekday: Scalars['Int'];
};

/** A month of contributions in a user's contribution graph. */
export type GitHub_ContributionCalendarMonth = {
  /** The date of the first day of this month. */
  firstDay: Scalars['GitHub_Date'];
  /** The name of the month. */
  name: Scalars['String'];
  /** How many weeks started in this month. */
  totalWeeks: Scalars['Int'];
  /** The year the month occurred in. */
  year: Scalars['Int'];
};

/** A week of contributions in a user's contribution graph. */
export type GitHub_ContributionCalendarWeek = {
  /** The days of contributions in this week. */
  contributionDays: Array<GitHub_ContributionCalendarDay>;
  /** The date of the earliest square in this week. */
  firstDay: Scalars['GitHub_Date'];
};

/** Ordering options for contribution connections. */
export type GitHub_ContributionOrder = {
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollection = {
  /** Commit contributions made by the user, grouped by repository. */
  commitContributionsByRepository: Array<GitHub_CommitContributionsByRepository>;
  /** A calendar of this user's contributions on GitHub. */
  contributionCalendar: GitHub_ContributionCalendar;
  /** The years the user has been making contributions with the most recent year first. */
  contributionYears: Array<Scalars['Int']>;
  /** Determine if this collection's time span ends in the current month. */
  doesEndInCurrentMonth: Scalars['Boolean'];
  /**
   * The date of the first restricted contribution the user made in this time
   * period. Can only be non-null when the user has enabled private contribution counts.
   */
  earliestRestrictedContributionDate?: Maybe<Scalars['GitHub_Date']>;
  /** The ending date and time of this collection. */
  endedAt: Scalars['GitHub_DateTime'];
  /**
   * The first issue the user opened on GitHub. This will be null if that issue was
   * opened outside the collection's time range and ignoreTimeRange is false. If
   * the issue is not visible but the user has opted to show private contributions,
   * a RestrictedContribution will be returned.
   */
  firstIssueContribution?: Maybe<GitHub_CreatedIssueOrRestrictedContribution>;
  /**
   * The first pull request the user opened on GitHub. This will be null if that
   * pull request was opened outside the collection's time range and
   * ignoreTimeRange is not true. If the pull request is not visible but the user
   * has opted to show private contributions, a RestrictedContribution will be returned.
   */
  firstPullRequestContribution?: Maybe<GitHub_CreatedPullRequestOrRestrictedContribution>;
  /**
   * The first repository the user created on GitHub. This will be null if that
   * first repository was created outside the collection's time range and
   * ignoreTimeRange is false. If the repository is not visible, then a
   * RestrictedContribution is returned.
   */
  firstRepositoryContribution?: Maybe<GitHub_CreatedRepositoryOrRestrictedContribution>;
  /** Does the user have any more activity in the timeline that occurred prior to the collection's time range? */
  hasActivityInThePast: Scalars['Boolean'];
  /** Determine if there are any contributions in this collection. */
  hasAnyContributions: Scalars['Boolean'];
  /**
   * Determine if the user made any contributions in this time frame whose details
   * are not visible because they were made in a private repository. Can only be
   * true if the user enabled private contribution counts.
   */
  hasAnyRestrictedContributions: Scalars['Boolean'];
  /** Whether or not the collector's time span is all within the same day. */
  isSingleDay: Scalars['Boolean'];
  /** A list of issues the user opened. */
  issueContributions: GitHub_CreatedIssueContributionConnection;
  /** Issue contributions made by the user, grouped by repository. */
  issueContributionsByRepository: Array<GitHub_IssueContributionsByRepository>;
  /**
   * When the user signed up for GitHub. This will be null if that sign up date
   * falls outside the collection's time range and ignoreTimeRange is false.
   */
  joinedGitHubContribution?: Maybe<GitHub_JoinedGitHubContribution>;
  /**
   * The date of the most recent restricted contribution the user made in this time
   * period. Can only be non-null when the user has enabled private contribution counts.
   */
  latestRestrictedContributionDate?: Maybe<Scalars['GitHub_Date']>;
  /**
   * When this collection's time range does not include any activity from the user, use this
   * to get a different collection from an earlier time range that does have activity.
   */
  mostRecentCollectionWithActivity?: Maybe<GitHub_ContributionsCollection>;
  /**
   * Returns a different contributions collection from an earlier time range than this one
   * that does not have any contributions.
   */
  mostRecentCollectionWithoutActivity?: Maybe<GitHub_ContributionsCollection>;
  /**
   * The issue the user opened on GitHub that received the most comments in the specified
   * time frame.
   */
  popularIssueContribution?: Maybe<GitHub_CreatedIssueContribution>;
  /**
   * The pull request the user opened on GitHub that received the most comments in the
   * specified time frame.
   */
  popularPullRequestContribution?: Maybe<GitHub_CreatedPullRequestContribution>;
  /** Pull request contributions made by the user. */
  pullRequestContributions: GitHub_CreatedPullRequestContributionConnection;
  /** Pull request contributions made by the user, grouped by repository. */
  pullRequestContributionsByRepository: Array<GitHub_PullRequestContributionsByRepository>;
  /** Pull request review contributions made by the user. */
  pullRequestReviewContributions: GitHub_CreatedPullRequestReviewContributionConnection;
  /** Pull request review contributions made by the user, grouped by repository. */
  pullRequestReviewContributionsByRepository: Array<GitHub_PullRequestReviewContributionsByRepository>;
  /** A list of repositories owned by the user that the user created in this time range. */
  repositoryContributions: GitHub_CreatedRepositoryContributionConnection;
  /**
   * A count of contributions made by the user that the viewer cannot access. Only
   * non-zero when the user has chosen to share their private contribution counts.
   */
  restrictedContributionsCount: Scalars['Int'];
  /** The beginning date and time of this collection. */
  startedAt: Scalars['GitHub_DateTime'];
  /** How many commits were made by the user in this time span. */
  totalCommitContributions: Scalars['Int'];
  /** How many issues the user opened. */
  totalIssueContributions: Scalars['Int'];
  /** How many pull requests the user opened. */
  totalPullRequestContributions: Scalars['Int'];
  /** How many pull request reviews the user left. */
  totalPullRequestReviewContributions: Scalars['Int'];
  /** How many different repositories the user committed to. */
  totalRepositoriesWithContributedCommits: Scalars['Int'];
  /** How many different repositories the user opened issues in. */
  totalRepositoriesWithContributedIssues: Scalars['Int'];
  /** How many different repositories the user left pull request reviews in. */
  totalRepositoriesWithContributedPullRequestReviews: Scalars['Int'];
  /** How many different repositories the user opened pull requests in. */
  totalRepositoriesWithContributedPullRequests: Scalars['Int'];
  /** How many repositories the user created. */
  totalRepositoryContributions: Scalars['Int'];
  /** The user who made the contributions in this collection. */
  user: GitHub_User;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionCommitContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionIssueContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<GitHub_ContributionOrder>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionIssueContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionPullRequestContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<GitHub_ContributionOrder>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionPullRequestContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionPullRequestReviewContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_ContributionOrder>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionPullRequestReviewContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<GitHub_ContributionOrder>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionTotalIssueContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionTotalPullRequestContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionTotalRepositoriesWithContributedIssuesArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionTotalRepositoriesWithContributedPullRequestsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionTotalRepositoryContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
};

/** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
export type GitHub_ConvertedNoteToIssueEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

/** Autogenerated input type of ConvertProjectCardNoteToIssue */
export type GitHub_ConvertProjectCardNoteToIssueInput = {
  /** The ProjectCard ID to convert. */
  projectCardId: Scalars['ID'];
  /** The ID of the repository to create the issue in. */
  repositoryId: Scalars['ID'];
  /** The title of the newly created issue. Defaults to the card's note text. */
  title?: Maybe<Scalars['String']>;
  /** The body of the newly created issue. */
  body?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ConvertProjectCardNoteToIssue */
export type GitHub_ConvertProjectCardNoteToIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The updated ProjectCard. */
  projectCard?: Maybe<GitHub_ProjectCard>;
};

/** Represents a 'convert_to_draft' event on a given pull request. */
export type GitHub_ConvertToDraftEvent = GitHub_Node & GitHub_UniformResourceLocatable & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
  /** The HTTP path for this convert to draft event. */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this convert to draft event. */
  url: Scalars['GitHub_URI'];
};

/** Autogenerated input type of CreateBranchProtectionRule */
export type GitHub_CreateBranchProtectionRuleInput = {
  /** The global relay id of the repository in which a new branch protection rule should be created in. */
  repositoryId: Scalars['ID'];
  /** The glob-like pattern used to determine matching branches. */
  pattern: Scalars['String'];
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews?: Maybe<Scalars['Boolean']>;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<Scalars['Int']>;
  /** Are commits required to be signed. */
  requiresCommitSignatures?: Maybe<Scalars['Boolean']>;
  /** Can admins overwrite branch protection. */
  isAdminEnforced?: Maybe<Scalars['Boolean']>;
  /** Are status checks required to update matching branches. */
  requiresStatusChecks?: Maybe<Scalars['Boolean']>;
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks?: Maybe<Scalars['Boolean']>;
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews?: Maybe<Scalars['Boolean']>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews?: Maybe<Scalars['Boolean']>;
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals?: Maybe<Scalars['Boolean']>;
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  reviewDismissalActorIds?: Maybe<Array<Scalars['ID']>>;
  /** Is pushing to matching branches restricted. */
  restrictsPushes?: Maybe<Scalars['Boolean']>;
  /** A list of User, Team or App IDs allowed to push to matching branches. */
  pushActorIds?: Maybe<Array<Scalars['ID']>>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<Array<Scalars['String']>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateBranchProtectionRule */
export type GitHub_CreateBranchProtectionRulePayload = {
  /** The newly created BranchProtectionRule. */
  branchProtectionRule?: Maybe<GitHub_BranchProtectionRule>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Represents the contribution a user made by committing to a repository. */
export type GitHub_CreatedCommitContribution = GitHub_Contribution & {
  /** How many commits were made on this day to this repository by the user. */
  commitCount: Scalars['Int'];
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars['Boolean'];
  /** When this contribution was made. */
  occurredAt: Scalars['GitHub_DateTime'];
  /** The repository the user made a commit in. */
  repository: GitHub_Repository;
  /** The HTTP path for this contribution. */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this contribution. */
  url: Scalars['GitHub_URI'];
  /** The user who made this contribution. */
  user: GitHub_User;
};

/** The connection type for CreatedCommitContribution. */
export type GitHub_CreatedCommitContributionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_CreatedCommitContributionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_CreatedCommitContribution>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of commits across days and repositories in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_CreatedCommitContributionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_CreatedCommitContribution>;
};

/** Represents the contribution a user made on GitHub by opening an issue. */
export type GitHub_CreatedIssueContribution = GitHub_Contribution & {
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars['Boolean'];
  /** The issue that was opened. */
  issue: GitHub_Issue;
  /** When this contribution was made. */
  occurredAt: Scalars['GitHub_DateTime'];
  /** The HTTP path for this contribution. */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this contribution. */
  url: Scalars['GitHub_URI'];
  /** The user who made this contribution. */
  user: GitHub_User;
};

/** The connection type for CreatedIssueContribution. */
export type GitHub_CreatedIssueContributionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_CreatedIssueContributionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_CreatedIssueContribution>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_CreatedIssueContributionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_CreatedIssueContribution>;
};

/** Represents either a issue the viewer can access or a restricted contribution. */
export type GitHub_CreatedIssueOrRestrictedContribution = GitHub_CreatedIssueContribution | GitHub_RestrictedContribution;

/** Represents the contribution a user made on GitHub by opening a pull request. */
export type GitHub_CreatedPullRequestContribution = GitHub_Contribution & {
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars['Boolean'];
  /** When this contribution was made. */
  occurredAt: Scalars['GitHub_DateTime'];
  /** The pull request that was opened. */
  pullRequest: GitHub_PullRequest;
  /** The HTTP path for this contribution. */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this contribution. */
  url: Scalars['GitHub_URI'];
  /** The user who made this contribution. */
  user: GitHub_User;
};

/** The connection type for CreatedPullRequestContribution. */
export type GitHub_CreatedPullRequestContributionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_CreatedPullRequestContributionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_CreatedPullRequestContribution>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_CreatedPullRequestContributionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_CreatedPullRequestContribution>;
};

/** Represents either a pull request the viewer can access or a restricted contribution. */
export type GitHub_CreatedPullRequestOrRestrictedContribution = GitHub_CreatedPullRequestContribution | GitHub_RestrictedContribution;

/** Represents the contribution a user made by leaving a review on a pull request. */
export type GitHub_CreatedPullRequestReviewContribution = GitHub_Contribution & {
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars['Boolean'];
  /** When this contribution was made. */
  occurredAt: Scalars['GitHub_DateTime'];
  /** The pull request the user reviewed. */
  pullRequest: GitHub_PullRequest;
  /** The review the user left on the pull request. */
  pullRequestReview: GitHub_PullRequestReview;
  /** The repository containing the pull request that the user reviewed. */
  repository: GitHub_Repository;
  /** The HTTP path for this contribution. */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this contribution. */
  url: Scalars['GitHub_URI'];
  /** The user who made this contribution. */
  user: GitHub_User;
};

/** The connection type for CreatedPullRequestReviewContribution. */
export type GitHub_CreatedPullRequestReviewContributionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_CreatedPullRequestReviewContributionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_CreatedPullRequestReviewContribution>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_CreatedPullRequestReviewContributionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_CreatedPullRequestReviewContribution>;
};

/** Represents the contribution a user made on GitHub by creating a repository. */
export type GitHub_CreatedRepositoryContribution = GitHub_Contribution & {
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars['Boolean'];
  /** When this contribution was made. */
  occurredAt: Scalars['GitHub_DateTime'];
  /** The repository that was created. */
  repository: GitHub_Repository;
  /** The HTTP path for this contribution. */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this contribution. */
  url: Scalars['GitHub_URI'];
  /** The user who made this contribution. */
  user: GitHub_User;
};

/** The connection type for CreatedRepositoryContribution. */
export type GitHub_CreatedRepositoryContributionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_CreatedRepositoryContributionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_CreatedRepositoryContribution>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_CreatedRepositoryContributionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_CreatedRepositoryContribution>;
};

/** Represents either a repository the viewer can access or a restricted contribution. */
export type GitHub_CreatedRepositoryOrRestrictedContribution = GitHub_CreatedRepositoryContribution | GitHub_RestrictedContribution;

/** Autogenerated input type of CreateEnterpriseOrganization */
export type GitHub_CreateEnterpriseOrganizationInput = {
  /** The ID of the enterprise owning the new organization. */
  enterpriseId: Scalars['ID'];
  /** The login of the new organization. */
  login: Scalars['String'];
  /** The profile name of the new organization. */
  profileName: Scalars['String'];
  /** The email used for sending billing receipts. */
  billingEmail: Scalars['String'];
  /** The logins for the administrators of the new organization. */
  adminLogins: Array<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateEnterpriseOrganization */
export type GitHub_CreateEnterpriseOrganizationPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The enterprise that owns the created organization. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** The organization that was created. */
  organization?: Maybe<GitHub_Organization>;
};

/** Autogenerated input type of CreateIpAllowListEntry */
export type GitHub_CreateIpAllowListEntryInput = {
  /** The ID of the owner for which to create the new IP allow list entry. */
  ownerId: Scalars['ID'];
  /** An IP address or range of addresses in CIDR notation. */
  allowListValue: Scalars['String'];
  /** An optional name for the IP allow list entry. */
  name?: Maybe<Scalars['String']>;
  /** Whether the IP allow list entry is active when an IP allow list is enabled. */
  isActive: Scalars['Boolean'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateIpAllowListEntry */
export type GitHub_CreateIpAllowListEntryPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The IP allow list entry that was created. */
  ipAllowListEntry?: Maybe<GitHub_IpAllowListEntry>;
};

/** Autogenerated input type of CreateIssue */
export type GitHub_CreateIssueInput = {
  /** The Node ID of the repository. */
  repositoryId: Scalars['ID'];
  /** The title for the issue. */
  title: Scalars['String'];
  /** The body for the issue description. */
  body?: Maybe<Scalars['String']>;
  /** The Node ID for the user assignee for this issue. */
  assigneeIds?: Maybe<Array<Scalars['ID']>>;
  /** The Node ID of the milestone for this issue. */
  milestoneId?: Maybe<Scalars['ID']>;
  /** An array of Node IDs of labels for this issue. */
  labelIds?: Maybe<Array<Scalars['ID']>>;
  /** An array of Node IDs for projects associated with this issue. */
  projectIds?: Maybe<Array<Scalars['ID']>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateIssue */
export type GitHub_CreateIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The new issue. */
  issue?: Maybe<GitHub_Issue>;
};

/** Autogenerated input type of CreateProject */
export type GitHub_CreateProjectInput = {
  /** The owner ID to create the project under. */
  ownerId: Scalars['ID'];
  /** The name of project. */
  name: Scalars['String'];
  /** The description of project. */
  body?: Maybe<Scalars['String']>;
  /** The name of the GitHub-provided template. */
  template?: Maybe<GitHub_ProjectTemplate>;
  /** A list of repository IDs to create as linked repositories for the project */
  repositoryIds?: Maybe<Array<Scalars['ID']>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateProject */
export type GitHub_CreateProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The new project. */
  project?: Maybe<GitHub_Project>;
};

/** Autogenerated input type of CreatePullRequest */
export type GitHub_CreatePullRequestInput = {
  /** The Node ID of the repository. */
  repositoryId: Scalars['ID'];
  /**
   * The name of the branch you want your changes pulled into. This should be an existing branch
   * on the current repository. You cannot update the base branch on a pull request to point
   * to another repository.
   */
  baseRefName: Scalars['String'];
  /**
   * The name of the branch where your changes are implemented. For cross-repository pull requests
   * in the same network, namespace `head_ref_name` with a user like this: `username:branch`.
   */
  headRefName: Scalars['String'];
  /** The title of the pull request. */
  title: Scalars['String'];
  /** The contents of the pull request. */
  body?: Maybe<Scalars['String']>;
  /** Indicates whether maintainers can modify the pull request. */
  maintainerCanModify?: Maybe<Scalars['Boolean']>;
  /** Indicates whether this pull request should be a draft. */
  draft?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreatePullRequest */
export type GitHub_CreatePullRequestPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The new pull request. */
  pullRequest?: Maybe<GitHub_PullRequest>;
};

/** Autogenerated input type of CreateRef */
export type GitHub_CreateRefInput = {
  /** The Node ID of the Repository to create the Ref in. */
  repositoryId: Scalars['ID'];
  /** The fully qualified name of the new Ref (ie: `refs/heads/my_new_branch`). */
  name: Scalars['String'];
  /** The GitObjectID that the new Ref shall target. Must point to a commit. */
  oid: Scalars['GitHub_GitObjectID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateRef */
export type GitHub_CreateRefPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The newly created ref. */
  ref?: Maybe<GitHub_Ref>;
};

/** Autogenerated input type of CreateRepository */
export type GitHub_CreateRepositoryInput = {
  /** The name of the new repository. */
  name: Scalars['String'];
  /** The ID of the owner for the new repository. */
  ownerId?: Maybe<Scalars['ID']>;
  /** A short description of the new repository. */
  description?: Maybe<Scalars['String']>;
  /** Indicates the repository's visibility level. */
  visibility: GitHub_RepositoryVisibility;
  /**
   * Whether this repository should be marked as a template such that anyone who
   * can access it can create new repositories with the same files and directory structure.
   */
  template?: Maybe<Scalars['Boolean']>;
  /** The URL for a web page about this repository. */
  homepageUrl?: Maybe<Scalars['GitHub_URI']>;
  /** Indicates if the repository should have the wiki feature enabled. */
  hasWikiEnabled?: Maybe<Scalars['Boolean']>;
  /** Indicates if the repository should have the issues feature enabled. */
  hasIssuesEnabled?: Maybe<Scalars['Boolean']>;
  /**
   * When an organization is specified as the owner, this ID identifies the team
   * that should be granted access to the new repository.
   */
  teamId?: Maybe<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateRepository */
export type GitHub_CreateRepositoryPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The new repository. */
  repository?: Maybe<GitHub_Repository>;
};

/** Autogenerated input type of CreateTeamDiscussionComment */
export type GitHub_CreateTeamDiscussionCommentInput = {
  /** The ID of the discussion to which the comment belongs. */
  discussionId: Scalars['ID'];
  /** The content of the comment. */
  body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateTeamDiscussionComment */
export type GitHub_CreateTeamDiscussionCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The new comment. */
  teamDiscussionComment?: Maybe<GitHub_TeamDiscussionComment>;
};

/** Autogenerated input type of CreateTeamDiscussion */
export type GitHub_CreateTeamDiscussionInput = {
  /** The ID of the team to which the discussion belongs. */
  teamId: Scalars['ID'];
  /** The title of the discussion. */
  title: Scalars['String'];
  /** The content of the discussion. */
  body: Scalars['String'];
  /**
   * If true, restricts the visiblity of this discussion to team members and
   * organization admins. If false or not specified, allows any organization member
   * to view this discussion.
   */
  private?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateTeamDiscussion */
export type GitHub_CreateTeamDiscussionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The new discussion. */
  teamDiscussion?: Maybe<GitHub_TeamDiscussion>;
};

/** Represents a mention made by one issue or pull request to another. */
export type GitHub_CrossReferencedEvent = GitHub_Node & GitHub_UniformResourceLocatable & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** Reference originated in a different repository. */
  isCrossRepository: Scalars['Boolean'];
  /** Identifies when the reference was made. */
  referencedAt: Scalars['GitHub_DateTime'];
  /** The HTTP path for this pull request. */
  resourcePath: Scalars['GitHub_URI'];
  /** Issue or pull request that made the reference. */
  source: GitHub_ReferencedSubject;
  /** Issue or pull request to which the reference was made. */
  target: GitHub_ReferencedSubject;
  /** The HTTP URL for this pull request. */
  url: Scalars['GitHub_URI'];
  /** Checks if the target will be closed when the source is merged. */
  willCloseTarget: Scalars['Boolean'];
};



/** Autogenerated input type of DeclineTopicSuggestion */
export type GitHub_DeclineTopicSuggestionInput = {
  /** The Node ID of the repository. */
  repositoryId: Scalars['ID'];
  /** The name of the suggested topic. */
  name: Scalars['String'];
  /** The reason why the suggested topic is declined. */
  reason: GitHub_TopicSuggestionDeclineReason;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeclineTopicSuggestion */
export type GitHub_DeclineTopicSuggestionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The declined topic. */
  topic?: Maybe<GitHub_Topic>;
};

/** The possible default permissions for repositories. */
export type GitHub_DefaultRepositoryPermissionField = 
  /** No access */
  | 'NONE'
  /** Can read repos by default */
  | 'READ'
  /** Can read and write repos by default */
  | 'WRITE'
  /** Can read, write, and administrate repos by default */
  | 'ADMIN';

/** Entities that can be deleted. */
export type GitHub_Deletable = {
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: Scalars['Boolean'];
};

/** Autogenerated input type of DeleteBranchProtectionRule */
export type GitHub_DeleteBranchProtectionRuleInput = {
  /** The global relay id of the branch protection rule to be deleted. */
  branchProtectionRuleId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteBranchProtectionRule */
export type GitHub_DeleteBranchProtectionRulePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DeleteDeployment */
export type GitHub_DeleteDeploymentInput = {
  /** The Node ID of the deployment to be deleted. */
  id: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteDeployment */
export type GitHub_DeleteDeploymentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DeleteIpAllowListEntry */
export type GitHub_DeleteIpAllowListEntryInput = {
  /** The ID of the IP allow list entry to delete. */
  ipAllowListEntryId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteIpAllowListEntry */
export type GitHub_DeleteIpAllowListEntryPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The IP allow list entry that was deleted. */
  ipAllowListEntry?: Maybe<GitHub_IpAllowListEntry>;
};

/** Autogenerated input type of DeleteIssueComment */
export type GitHub_DeleteIssueCommentInput = {
  /** The ID of the comment to delete. */
  id: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteIssueComment */
export type GitHub_DeleteIssueCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DeleteIssue */
export type GitHub_DeleteIssueInput = {
  /** The ID of the issue to delete. */
  issueId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteIssue */
export type GitHub_DeleteIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The repository the issue belonged to */
  repository?: Maybe<GitHub_Repository>;
};

/** Autogenerated input type of DeleteProjectCard */
export type GitHub_DeleteProjectCardInput = {
  /** The id of the card to delete. */
  cardId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteProjectCard */
export type GitHub_DeleteProjectCardPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The column the deleted card was in. */
  column?: Maybe<GitHub_ProjectColumn>;
  /** The deleted card ID. */
  deletedCardId?: Maybe<Scalars['ID']>;
};

/** Autogenerated input type of DeleteProjectColumn */
export type GitHub_DeleteProjectColumnInput = {
  /** The id of the column to delete. */
  columnId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteProjectColumn */
export type GitHub_DeleteProjectColumnPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The deleted column ID. */
  deletedColumnId?: Maybe<Scalars['ID']>;
  /** The project the deleted column was in. */
  project?: Maybe<GitHub_Project>;
};

/** Autogenerated input type of DeleteProject */
export type GitHub_DeleteProjectInput = {
  /** The Project ID to update. */
  projectId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteProject */
export type GitHub_DeleteProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The repository or organization the project was removed from. */
  owner?: Maybe<GitHub_ProjectOwner>;
};

/** Autogenerated input type of DeletePullRequestReviewComment */
export type GitHub_DeletePullRequestReviewCommentInput = {
  /** The ID of the comment to delete. */
  id: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeletePullRequestReviewComment */
export type GitHub_DeletePullRequestReviewCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The pull request review the deleted comment belonged to. */
  pullRequestReview?: Maybe<GitHub_PullRequestReview>;
};

/** Autogenerated input type of DeletePullRequestReview */
export type GitHub_DeletePullRequestReviewInput = {
  /** The Node ID of the pull request review to delete. */
  pullRequestReviewId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeletePullRequestReview */
export type GitHub_DeletePullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The deleted pull request review. */
  pullRequestReview?: Maybe<GitHub_PullRequestReview>;
};

/** Autogenerated input type of DeleteRef */
export type GitHub_DeleteRefInput = {
  /** The Node ID of the Ref to be deleted. */
  refId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteRef */
export type GitHub_DeleteRefPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DeleteTeamDiscussionComment */
export type GitHub_DeleteTeamDiscussionCommentInput = {
  /** The ID of the comment to delete. */
  id: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteTeamDiscussionComment */
export type GitHub_DeleteTeamDiscussionCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DeleteTeamDiscussion */
export type GitHub_DeleteTeamDiscussionInput = {
  /** The discussion ID to delete. */
  id: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteTeamDiscussion */
export type GitHub_DeleteTeamDiscussionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Represents a 'demilestoned' event on a given issue or pull request. */
export type GitHub_DemilestonedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** Identifies the milestone title associated with the 'demilestoned' event. */
  milestoneTitle: Scalars['String'];
  /** Object referenced by event. */
  subject: GitHub_MilestoneItem;
};

/** Represents a 'deployed' event on a given pull request. */
export type GitHub_DeployedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The deployment associated with the 'deployed' event. */
  deployment: GitHub_Deployment;
  id: Scalars['ID'];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
  /** The ref associated with the 'deployed' event. */
  ref?: Maybe<GitHub_Ref>;
};

/** A repository deploy key. */
export type GitHub_DeployKey = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** The deploy key. */
  key: Scalars['String'];
  /** Whether or not the deploy key is read only. */
  readOnly: Scalars['Boolean'];
  /** The deploy key title. */
  title: Scalars['String'];
  /** Whether or not the deploy key has been verified. */
  verified: Scalars['Boolean'];
};

/** The connection type for DeployKey. */
export type GitHub_DeployKeyConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_DeployKeyEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_DeployKey>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_DeployKeyEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_DeployKey>;
};

/** Represents triggered deployment instance. */
export type GitHub_Deployment = GitHub_Node & {
  /** Identifies the commit sha of the deployment. */
  commit?: Maybe<GitHub_Commit>;
  /** Identifies the oid of the deployment commit, even if the commit has been deleted. */
  commitOid: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the actor who triggered the deployment. */
  creator: GitHub_Actor;
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The deployment description. */
  description?: Maybe<Scalars['String']>;
  /** The latest environment to which this deployment was made. */
  environment?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The latest environment to which this deployment was made. */
  latestEnvironment?: Maybe<Scalars['String']>;
  /** The latest status of this deployment. */
  latestStatus?: Maybe<GitHub_DeploymentStatus>;
  /** The original environment to which this deployment was made. */
  originalEnvironment?: Maybe<Scalars['String']>;
  /** Extra information that a deployment system might need. */
  payload?: Maybe<Scalars['String']>;
  /** Identifies the Ref of the deployment, if the deployment was created by ref. */
  ref?: Maybe<GitHub_Ref>;
  /** Identifies the repository associated with the deployment. */
  repository: GitHub_Repository;
  /** The current state of the deployment. */
  state?: Maybe<GitHub_DeploymentState>;
  /** A list of statuses associated with the deployment. */
  statuses?: Maybe<GitHub_DeploymentStatusConnection>;
  /** The deployment task. */
  task?: Maybe<Scalars['String']>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
};


/** Represents triggered deployment instance. */
export type GitHub_DeploymentStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for Deployment. */
export type GitHub_DeploymentConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_DeploymentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Deployment>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_DeploymentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Deployment>;
};

/** Represents a 'deployment_environment_changed' event on a given pull request. */
export type GitHub_DeploymentEnvironmentChangedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The deployment status that updated the deployment environment. */
  deploymentStatus: GitHub_DeploymentStatus;
  id: Scalars['ID'];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
};

/** Ordering options for deployment connections */
export type GitHub_DeploymentOrder = {
  /** The field to order deployments by. */
  field: GitHub_DeploymentOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which deployment connections can be ordered. */
export type GitHub_DeploymentOrderField = 
  /** Order collection by creation time */
  | 'CREATED_AT';

/** The possible states in which a deployment can be. */
export type GitHub_DeploymentState = 
  /** The pending deployment was not updated after 30 minutes. */
  | 'ABANDONED'
  /** The deployment is currently active. */
  | 'ACTIVE'
  /** An inactive transient deployment. */
  | 'DESTROYED'
  /** The deployment experienced an error. */
  | 'ERROR'
  /** The deployment has failed. */
  | 'FAILURE'
  /** The deployment is inactive. */
  | 'INACTIVE'
  /** The deployment is pending. */
  | 'PENDING'
  /** The deployment has queued */
  | 'QUEUED'
  /** The deployment is in progress. */
  | 'IN_PROGRESS';

/** Describes the status of a given deployment attempt. */
export type GitHub_DeploymentStatus = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the actor who triggered the deployment. */
  creator: GitHub_Actor;
  /** Identifies the deployment associated with status. */
  deployment: GitHub_Deployment;
  /** Identifies the description of the deployment. */
  description?: Maybe<Scalars['String']>;
  /** Identifies the environment URL of the deployment. */
  environmentUrl?: Maybe<Scalars['GitHub_URI']>;
  id: Scalars['ID'];
  /** Identifies the log URL of the deployment. */
  logUrl?: Maybe<Scalars['GitHub_URI']>;
  /** Identifies the current state of the deployment. */
  state: GitHub_DeploymentStatusState;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
};

/** The connection type for DeploymentStatus. */
export type GitHub_DeploymentStatusConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_DeploymentStatusEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_DeploymentStatus>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_DeploymentStatusEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_DeploymentStatus>;
};

/** The possible states for a deployment status. */
export type GitHub_DeploymentStatusState = 
  /** The deployment is pending. */
  | 'PENDING'
  /** The deployment was successful. */
  | 'SUCCESS'
  /** The deployment has failed. */
  | 'FAILURE'
  /** The deployment is inactive. */
  | 'INACTIVE'
  /** The deployment experienced an error. */
  | 'ERROR'
  /** The deployment is queued */
  | 'QUEUED'
  /** The deployment is in progress. */
  | 'IN_PROGRESS';

/** The possible sides of a diff. */
export type GitHub_DiffSide = 
  /** The left side of the diff. */
  | 'LEFT'
  /** The right side of the diff. */
  | 'RIGHT';

/** Represents a 'disconnected' event on a given issue or pull request. */
export type GitHub_DisconnectedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** Reference originated in a different repository. */
  isCrossRepository: Scalars['Boolean'];
  /** Issue or pull request from which the issue was disconnected. */
  source: GitHub_ReferencedSubject;
  /** Issue or pull request which was disconnected. */
  subject: GitHub_ReferencedSubject;
};

/** Autogenerated input type of DismissPullRequestReview */
export type GitHub_DismissPullRequestReviewInput = {
  /** The Node ID of the pull request review to modify. */
  pullRequestReviewId: Scalars['ID'];
  /** The contents of the pull request review dismissal message. */
  message: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DismissPullRequestReview */
export type GitHub_DismissPullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The dismissed pull request review. */
  pullRequestReview?: Maybe<GitHub_PullRequestReview>;
};

/** Specifies a review comment to be left with a Pull Request Review. */
export type GitHub_DraftPullRequestReviewComment = {
  /** Path to the file being commented on. */
  path: Scalars['String'];
  /** Position in the file to leave a comment on. */
  position: Scalars['Int'];
  /** Body of the comment to leave. */
  body: Scalars['String'];
};

/** Specifies a review comment thread to be left with a Pull Request Review. */
export type GitHub_DraftPullRequestReviewThread = {
  /** Path to the file being commented on. */
  path: Scalars['String'];
  /** The line of the blob to which the thread refers. The end of the line range for multi-line comments. */
  line: Scalars['Int'];
  /** The side of the diff on which the line resides. For multi-line comments, this is the side for the end of the line range. */
  side?: Maybe<GitHub_DiffSide>;
  /** The first line of the range to which the comment refers. */
  startLine?: Maybe<Scalars['Int']>;
  /** The side of the diff on which the start line resides. */
  startSide?: Maybe<GitHub_DiffSide>;
  /** Body of the comment to leave. */
  body: Scalars['String'];
};

/** An account to manage multiple organizations with consolidated policy and billing. */
export type GitHub_Enterprise = GitHub_Node & {
  /** A URL pointing to the enterprise's public avatar. */
  avatarUrl: Scalars['GitHub_URI'];
  /** Enterprise billing information visible to enterprise billing managers. */
  billingInfo?: Maybe<GitHub_EnterpriseBillingInfo>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The description of the enterprise. */
  description?: Maybe<Scalars['String']>;
  /** The description of the enterprise as HTML. */
  descriptionHTML: Scalars['GitHub_HTML'];
  id: Scalars['ID'];
  /** The location of the enterprise. */
  location?: Maybe<Scalars['String']>;
  /** A list of users who are members of this enterprise. */
  members: GitHub_EnterpriseMemberConnection;
  /** The name of the enterprise. */
  name: Scalars['String'];
  /** A list of organizations that belong to this enterprise. */
  organizations: GitHub_OrganizationConnection;
  /** Enterprise information only visible to enterprise owners. */
  ownerInfo?: Maybe<GitHub_EnterpriseOwnerInfo>;
  /** The HTTP path for this enterprise. */
  resourcePath: Scalars['GitHub_URI'];
  /** The URL-friendly identifier for the enterprise. */
  slug: Scalars['String'];
  /** The HTTP URL for this enterprise. */
  url: Scalars['GitHub_URI'];
  /** A list of user accounts on this enterprise. */
  userAccounts: GitHub_EnterpriseUserAccountConnection;
  /** Is the current viewer an admin of this enterprise? */
  viewerIsAdmin: Scalars['Boolean'];
  /** The URL of the enterprise website. */
  websiteUrl?: Maybe<Scalars['GitHub_URI']>;
};


/** An account to manage multiple organizations with consolidated policy and billing. */
export type GitHub_EnterpriseAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


/** An account to manage multiple organizations with consolidated policy and billing. */
export type GitHub_EnterpriseMembersArgs = {
  organizationLogins?: Maybe<Array<Scalars['String']>>;
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<GitHub_EnterpriseMemberOrder>;
  role?: Maybe<GitHub_EnterpriseUserAccountMembershipRole>;
  deployment?: Maybe<GitHub_EnterpriseUserDeployment>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An account to manage multiple organizations with consolidated policy and billing. */
export type GitHub_EnterpriseOrganizationsArgs = {
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<GitHub_OrganizationOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An account to manage multiple organizations with consolidated policy and billing. */
export type GitHub_EnterpriseUserAccountsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for User. */
export type GitHub_EnterpriseAdministratorConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseAdministratorEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** A User who is an administrator of an enterprise. */
export type GitHub_EnterpriseAdministratorEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_User>;
  /** The role of the administrator. */
  role: GitHub_EnterpriseAdministratorRole;
};

/** An invitation for a user to become an owner or billing manager of an enterprise. */
export type GitHub_EnterpriseAdministratorInvitation = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The email of the person who was invited to the enterprise. */
  email?: Maybe<Scalars['String']>;
  /** The enterprise the invitation is for. */
  enterprise: GitHub_Enterprise;
  id: Scalars['ID'];
  /** The user who was invited to the enterprise. */
  invitee?: Maybe<GitHub_User>;
  /** The user who created the invitation. */
  inviter?: Maybe<GitHub_User>;
  /** The invitee's pending role in the enterprise (owner or billing_manager). */
  role: GitHub_EnterpriseAdministratorRole;
};

/** The connection type for EnterpriseAdministratorInvitation. */
export type GitHub_EnterpriseAdministratorInvitationConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseAdministratorInvitationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_EnterpriseAdministratorInvitation>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_EnterpriseAdministratorInvitationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_EnterpriseAdministratorInvitation>;
};

/** Ordering options for enterprise administrator invitation connections */
export type GitHub_EnterpriseAdministratorInvitationOrder = {
  /** The field to order enterprise administrator invitations by. */
  field: GitHub_EnterpriseAdministratorInvitationOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which enterprise administrator invitation connections can be ordered. */
export type GitHub_EnterpriseAdministratorInvitationOrderField = 
  /** Order enterprise administrator member invitations by creation time */
  | 'CREATED_AT';

/** The possible administrator roles in an enterprise account. */
export type GitHub_EnterpriseAdministratorRole = 
  /** Represents an owner of the enterprise account. */
  | 'OWNER'
  /** Represents a billing manager of the enterprise account. */
  | 'BILLING_MANAGER';

/** Metadata for an audit entry containing enterprise account information. */
export type GitHub_EnterpriseAuditEntryData = {
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The slug of the enterprise. */
  enterpriseSlug?: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Enterprise billing information visible to enterprise billing managers and owners. */
export type GitHub_EnterpriseBillingInfo = {
  /** The number of licenseable users/emails across the enterprise. */
  allLicensableUsersCount: Scalars['Int'];
  /** The number of data packs used by all organizations owned by the enterprise. */
  assetPacks: Scalars['Int'];
  /**
   * The number of available seats across all owned organizations based on the unique number of billable users.
   * @deprecated `availableSeats` will be replaced with `totalAvailableLicenses` to provide more clarity on the value being returned Use EnterpriseBillingInfo.totalAvailableLicenses instead. Removal on 2020-01-01 UTC.
   */
  availableSeats: Scalars['Int'];
  /** The bandwidth quota in GB for all organizations owned by the enterprise. */
  bandwidthQuota: Scalars['Float'];
  /** The bandwidth usage in GB for all organizations owned by the enterprise. */
  bandwidthUsage: Scalars['Float'];
  /** The bandwidth usage as a percentage of the bandwidth quota. */
  bandwidthUsagePercentage: Scalars['Int'];
  /**
   * The total seats across all organizations owned by the enterprise.
   * @deprecated `seats` will be replaced with `totalLicenses` to provide more clarity on the value being returned Use EnterpriseBillingInfo.totalLicenses instead. Removal on 2020-01-01 UTC.
   */
  seats: Scalars['Int'];
  /** The storage quota in GB for all organizations owned by the enterprise. */
  storageQuota: Scalars['Float'];
  /** The storage usage in GB for all organizations owned by the enterprise. */
  storageUsage: Scalars['Float'];
  /** The storage usage as a percentage of the storage quota. */
  storageUsagePercentage: Scalars['Int'];
  /** The number of available licenses across all owned organizations based on the unique number of billable users. */
  totalAvailableLicenses: Scalars['Int'];
  /** The total number of licenses allocated. */
  totalLicenses: Scalars['Int'];
};

/** The possible values for the enterprise default repository permission setting. */
export type GitHub_EnterpriseDefaultRepositoryPermissionSettingValue = 
  /** Organizations in the enterprise choose default repository permissions for their members. */
  | 'NO_POLICY'
  /** Organization members will be able to clone, pull, push, and add new collaborators to all organization repositories. */
  | 'ADMIN'
  /** Organization members will be able to clone, pull, and push all organization repositories. */
  | 'WRITE'
  /** Organization members will be able to clone and pull all organization repositories. */
  | 'READ'
  /** Organization members will only be able to clone and pull public repositories. */
  | 'NONE';

/** The possible values for an enabled/disabled enterprise setting. */
export type GitHub_EnterpriseEnabledDisabledSettingValue = 
  /** The setting is enabled for organizations in the enterprise. */
  | 'ENABLED'
  /** The setting is disabled for organizations in the enterprise. */
  | 'DISABLED'
  /** There is no policy set for organizations in the enterprise. */
  | 'NO_POLICY';

/** The possible values for an enabled/no policy enterprise setting. */
export type GitHub_EnterpriseEnabledSettingValue = 
  /** The setting is enabled for organizations in the enterprise. */
  | 'ENABLED'
  /** There is no policy set for organizations in the enterprise. */
  | 'NO_POLICY';

/** An identity provider configured to provision identities for an enterprise. */
export type GitHub_EnterpriseIdentityProvider = GitHub_Node & {
  /** The digest algorithm used to sign SAML requests for the identity provider. */
  digestMethod?: Maybe<GitHub_SamlDigestAlgorithm>;
  /** The enterprise this identity provider belongs to. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** ExternalIdentities provisioned by this identity provider. */
  externalIdentities: GitHub_ExternalIdentityConnection;
  id: Scalars['ID'];
  /** The x509 certificate used by the identity provider to sign assertions and responses. */
  idpCertificate?: Maybe<Scalars['GitHub_X509Certificate']>;
  /** The Issuer Entity ID for the SAML identity provider. */
  issuer?: Maybe<Scalars['String']>;
  /** Recovery codes that can be used by admins to access the enterprise if the identity provider is unavailable. */
  recoveryCodes?: Maybe<Array<Scalars['String']>>;
  /** The signature algorithm used to sign SAML requests for the identity provider. */
  signatureMethod?: Maybe<GitHub_SamlSignatureAlgorithm>;
  /** The URL endpoint for the identity provider's SAML SSO. */
  ssoUrl?: Maybe<Scalars['GitHub_URI']>;
};


/** An identity provider configured to provision identities for an enterprise. */
export type GitHub_EnterpriseIdentityProviderExternalIdentitiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** An object that is a member of an enterprise. */
export type GitHub_EnterpriseMember = GitHub_EnterpriseUserAccount | GitHub_User;

/** The connection type for EnterpriseMember. */
export type GitHub_EnterpriseMemberConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseMemberEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_EnterpriseMember>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** A User who is a member of an enterprise through one or more organizations. */
export type GitHub_EnterpriseMemberEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /**
   * Whether the user does not have a license for the enterprise.
   * @deprecated All members consume a license Removal on 2021-01-01 UTC.
   */
  isUnlicensed: Scalars['Boolean'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_EnterpriseMember>;
};

/** Ordering options for enterprise member connections. */
export type GitHub_EnterpriseMemberOrder = {
  /** The field to order enterprise members by. */
  field: GitHub_EnterpriseMemberOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which enterprise member connections can be ordered. */
export type GitHub_EnterpriseMemberOrderField = 
  /** Order enterprise members by login */
  | 'LOGIN'
  /** Order enterprise members by creation time */
  | 'CREATED_AT';

/** The possible values for the enterprise members can create repositories setting. */
export type GitHub_EnterpriseMembersCanCreateRepositoriesSettingValue = 
  /** Organization administrators choose whether to allow members to create repositories. */
  | 'NO_POLICY'
  /** Members will be able to create public and private repositories. */
  | 'ALL'
  /** Members will be able to create only public repositories. */
  | 'PUBLIC'
  /** Members will be able to create only private repositories. */
  | 'PRIVATE'
  /** Members will not be able to create public or private repositories. */
  | 'DISABLED';

/** The possible values for the members can make purchases setting. */
export type GitHub_EnterpriseMembersCanMakePurchasesSettingValue = 
  /** The setting is enabled for organizations in the enterprise. */
  | 'ENABLED'
  /** The setting is disabled for organizations in the enterprise. */
  | 'DISABLED';

/** The connection type for Organization. */
export type GitHub_EnterpriseOrganizationMembershipConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseOrganizationMembershipEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Organization>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An enterprise organization that a user is a member of. */
export type GitHub_EnterpriseOrganizationMembershipEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Organization>;
  /** The role of the user in the enterprise membership. */
  role: GitHub_EnterpriseUserAccountMembershipRole;
};

/** The connection type for User. */
export type GitHub_EnterpriseOutsideCollaboratorConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseOutsideCollaboratorEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** A User who is an outside collaborator of an enterprise through one or more organizations. */
export type GitHub_EnterpriseOutsideCollaboratorEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /**
   * Whether the outside collaborator does not have a license for the enterprise.
   * @deprecated All outside collaborators consume a license Removal on 2021-01-01 UTC.
   */
  isUnlicensed: Scalars['Boolean'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_User>;
  /** The enterprise organization repositories this user is a member of. */
  repositories: GitHub_EnterpriseRepositoryInfoConnection;
};


/** A User who is an outside collaborator of an enterprise through one or more organizations. */
export type GitHub_EnterpriseOutsideCollaboratorEdgeRepositoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
};

/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfo = {
  /** A list of enterprise organizations configured with the provided action execution capabilities setting value. */
  actionExecutionCapabilitySettingOrganizations: GitHub_OrganizationConnection;
  /** A list of all of the administrators for this enterprise. */
  admins: GitHub_EnterpriseAdministratorConnection;
  /** A list of users in the enterprise who currently have two-factor authentication disabled. */
  affiliatedUsersWithTwoFactorDisabled: GitHub_UserConnection;
  /** Whether or not affiliated users with two-factor authentication disabled exist in the enterprise. */
  affiliatedUsersWithTwoFactorDisabledExist: Scalars['Boolean'];
  /** The setting value for whether private repository forking is enabled for repositories in organizations in this enterprise. */
  allowPrivateRepositoryForkingSetting: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided private repository forking setting value. */
  allowPrivateRepositoryForkingSettingOrganizations: GitHub_OrganizationConnection;
  /** The setting value for base repository permissions for organizations in this enterprise. */
  defaultRepositoryPermissionSetting: GitHub_EnterpriseDefaultRepositoryPermissionSettingValue;
  /** A list of enterprise organizations configured with the provided default repository permission. */
  defaultRepositoryPermissionSettingOrganizations: GitHub_OrganizationConnection;
  /** Enterprise Server installations owned by the enterprise. */
  enterpriseServerInstallations: GitHub_EnterpriseServerInstallationConnection;
  /** The setting value for whether the enterprise has an IP allow list enabled. */
  ipAllowListEnabledSetting: GitHub_IpAllowListEnabledSettingValue;
  /** The IP addresses that are allowed to access resources owned by the enterprise. */
  ipAllowListEntries: GitHub_IpAllowListEntryConnection;
  /** Whether or not the default repository permission is currently being updated. */
  isUpdatingDefaultRepositoryPermission: Scalars['Boolean'];
  /** Whether the two-factor authentication requirement is currently being enforced. */
  isUpdatingTwoFactorRequirement: Scalars['Boolean'];
  /**
   * The setting value for whether organization members with admin permissions on a
   * repository can change repository visibility.
   */
  membersCanChangeRepositoryVisibilitySetting: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided can change repository visibility setting value. */
  membersCanChangeRepositoryVisibilitySettingOrganizations: GitHub_OrganizationConnection;
  /** The setting value for whether members of organizations in the enterprise can create internal repositories. */
  membersCanCreateInternalRepositoriesSetting?: Maybe<Scalars['Boolean']>;
  /** The setting value for whether members of organizations in the enterprise can create private repositories. */
  membersCanCreatePrivateRepositoriesSetting?: Maybe<Scalars['Boolean']>;
  /** The setting value for whether members of organizations in the enterprise can create public repositories. */
  membersCanCreatePublicRepositoriesSetting?: Maybe<Scalars['Boolean']>;
  /** The setting value for whether members of organizations in the enterprise can create repositories. */
  membersCanCreateRepositoriesSetting?: Maybe<GitHub_EnterpriseMembersCanCreateRepositoriesSettingValue>;
  /** A list of enterprise organizations configured with the provided repository creation setting value. */
  membersCanCreateRepositoriesSettingOrganizations: GitHub_OrganizationConnection;
  /** The setting value for whether members with admin permissions for repositories can delete issues. */
  membersCanDeleteIssuesSetting: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided members can delete issues setting value. */
  membersCanDeleteIssuesSettingOrganizations: GitHub_OrganizationConnection;
  /** The setting value for whether members with admin permissions for repositories can delete or transfer repositories. */
  membersCanDeleteRepositoriesSetting: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided members can delete repositories setting value. */
  membersCanDeleteRepositoriesSettingOrganizations: GitHub_OrganizationConnection;
  /** The setting value for whether members of organizations in the enterprise can invite outside collaborators. */
  membersCanInviteCollaboratorsSetting: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided members can invite collaborators setting value. */
  membersCanInviteCollaboratorsSettingOrganizations: GitHub_OrganizationConnection;
  /** Indicates whether members of this enterprise's organizations can purchase additional services for those organizations. */
  membersCanMakePurchasesSetting: GitHub_EnterpriseMembersCanMakePurchasesSettingValue;
  /** The setting value for whether members with admin permissions for repositories can update protected branches. */
  membersCanUpdateProtectedBranchesSetting: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided members can update protected branches setting value. */
  membersCanUpdateProtectedBranchesSettingOrganizations: GitHub_OrganizationConnection;
  /** The setting value for whether members can view dependency insights. */
  membersCanViewDependencyInsightsSetting: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided members can view dependency insights setting value. */
  membersCanViewDependencyInsightsSettingOrganizations: GitHub_OrganizationConnection;
  /** The setting value for whether organization projects are enabled for organizations in this enterprise. */
  organizationProjectsSetting: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided organization projects setting value. */
  organizationProjectsSettingOrganizations: GitHub_OrganizationConnection;
  /** A list of outside collaborators across the repositories in the enterprise. */
  outsideCollaborators: GitHub_EnterpriseOutsideCollaboratorConnection;
  /** A list of pending administrator invitations for the enterprise. */
  pendingAdminInvitations: GitHub_EnterpriseAdministratorInvitationConnection;
  /** A list of pending collaborator invitations across the repositories in the enterprise. */
  pendingCollaboratorInvitations: GitHub_RepositoryInvitationConnection;
  /**
   * A list of pending collaborators across the repositories in the enterprise.
   * @deprecated Repository invitations can now be associated with an email, not only an invitee. Use the `pendingCollaboratorInvitations` field instead. Removal on 2020-10-01 UTC.
   */
  pendingCollaborators: GitHub_EnterprisePendingCollaboratorConnection;
  /** A list of pending member invitations for organizations in the enterprise. */
  pendingMemberInvitations: GitHub_EnterprisePendingMemberInvitationConnection;
  /** The setting value for whether repository projects are enabled in this enterprise. */
  repositoryProjectsSetting: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided repository projects setting value. */
  repositoryProjectsSettingOrganizations: GitHub_OrganizationConnection;
  /** The SAML Identity Provider for the enterprise. */
  samlIdentityProvider?: Maybe<GitHub_EnterpriseIdentityProvider>;
  /** A list of enterprise organizations configured with the SAML single sign-on setting value. */
  samlIdentityProviderSettingOrganizations: GitHub_OrganizationConnection;
  /** The setting value for whether team discussions are enabled for organizations in this enterprise. */
  teamDiscussionsSetting: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided team discussions setting value. */
  teamDiscussionsSettingOrganizations: GitHub_OrganizationConnection;
  /** The setting value for whether the enterprise requires two-factor authentication for its organizations and users. */
  twoFactorRequiredSetting: GitHub_EnterpriseEnabledSettingValue;
  /** A list of enterprise organizations configured with the two-factor authentication setting value. */
  twoFactorRequiredSettingOrganizations: GitHub_OrganizationConnection;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoActionExecutionCapabilitySettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoAdminsArgs = {
  query?: Maybe<Scalars['String']>;
  role?: Maybe<GitHub_EnterpriseAdministratorRole>;
  orderBy?: Maybe<GitHub_EnterpriseMemberOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoAffiliatedUsersWithTwoFactorDisabledArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoAllowPrivateRepositoryForkingSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<GitHub_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoDefaultRepositoryPermissionSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: GitHub_DefaultRepositoryPermissionField;
  orderBy?: Maybe<GitHub_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoEnterpriseServerInstallationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  connectedOnly?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<GitHub_EnterpriseServerInstallationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoIpAllowListEntriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_IpAllowListEntryOrder>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoMembersCanChangeRepositoryVisibilitySettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<GitHub_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoMembersCanCreateRepositoriesSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: GitHub_OrganizationMembersCanCreateRepositoriesSettingValue;
  orderBy?: Maybe<GitHub_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoMembersCanDeleteIssuesSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<GitHub_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoMembersCanDeleteRepositoriesSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<GitHub_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoMembersCanInviteCollaboratorsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<GitHub_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoMembersCanUpdateProtectedBranchesSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<GitHub_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoMembersCanViewDependencyInsightsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<GitHub_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoOrganizationProjectsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<GitHub_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoOutsideCollaboratorsArgs = {
  login?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<GitHub_EnterpriseMemberOrder>;
  visibility?: Maybe<GitHub_RepositoryVisibility>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoPendingAdminInvitationsArgs = {
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<GitHub_EnterpriseAdministratorInvitationOrder>;
  role?: Maybe<GitHub_EnterpriseAdministratorRole>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoPendingCollaboratorInvitationsArgs = {
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<GitHub_RepositoryInvitationOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoPendingCollaboratorsArgs = {
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<GitHub_RepositoryInvitationOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoPendingMemberInvitationsArgs = {
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoRepositoryProjectsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<GitHub_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoSamlIdentityProviderSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: GitHub_IdentityProviderConfigurationState;
  orderBy?: Maybe<GitHub_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoTeamDiscussionsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<GitHub_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
export type GitHub_EnterpriseOwnerInfoTwoFactorRequiredSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<GitHub_OrganizationOrder>;
};

/** The connection type for User. */
export type GitHub_EnterprisePendingCollaboratorConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_EnterprisePendingCollaboratorEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** A user with an invitation to be a collaborator on a repository owned by an organization in an enterprise. */
export type GitHub_EnterprisePendingCollaboratorEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /**
   * Whether the invited collaborator does not have a license for the enterprise.
   * @deprecated All pending collaborators consume a license Removal on 2021-01-01 UTC.
   */
  isUnlicensed: Scalars['Boolean'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_User>;
  /** The enterprise organization repositories this user is a member of. */
  repositories: GitHub_EnterpriseRepositoryInfoConnection;
};


/** A user with an invitation to be a collaborator on a repository owned by an organization in an enterprise. */
export type GitHub_EnterprisePendingCollaboratorEdgeRepositoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
};

/** The connection type for OrganizationInvitation. */
export type GitHub_EnterprisePendingMemberInvitationConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_EnterprisePendingMemberInvitationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_OrganizationInvitation>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
  /** Identifies the total count of unique users in the connection. */
  totalUniqueUserCount: Scalars['Int'];
};

/** An invitation to be a member in an enterprise organization. */
export type GitHub_EnterprisePendingMemberInvitationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /**
   * Whether the invitation has a license for the enterprise.
   * @deprecated All pending members consume a license Removal on 2020-07-01 UTC.
   */
  isUnlicensed: Scalars['Boolean'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_OrganizationInvitation>;
};

/** A subset of repository information queryable from an enterprise. */
export type GitHub_EnterpriseRepositoryInfo = GitHub_Node & {
  id: Scalars['ID'];
  /** Identifies if the repository is private. */
  isPrivate: Scalars['Boolean'];
  /** The repository's name. */
  name: Scalars['String'];
  /** The repository's name with owner. */
  nameWithOwner: Scalars['String'];
};

/** The connection type for EnterpriseRepositoryInfo. */
export type GitHub_EnterpriseRepositoryInfoConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseRepositoryInfoEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_EnterpriseRepositoryInfo>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_EnterpriseRepositoryInfoEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_EnterpriseRepositoryInfo>;
};

/** An Enterprise Server installation. */
export type GitHub_EnterpriseServerInstallation = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The customer name to which the Enterprise Server installation belongs. */
  customerName: Scalars['String'];
  /** The host name of the Enterprise Server installation. */
  hostName: Scalars['String'];
  id: Scalars['ID'];
  /** Whether or not the installation is connected to an Enterprise Server installation via GitHub Connect. */
  isConnected: Scalars['Boolean'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** User accounts on this Enterprise Server installation. */
  userAccounts: GitHub_EnterpriseServerUserAccountConnection;
  /** User accounts uploads for the Enterprise Server installation. */
  userAccountsUploads: GitHub_EnterpriseServerUserAccountsUploadConnection;
};


/** An Enterprise Server installation. */
export type GitHub_EnterpriseServerInstallationUserAccountsArgs = {
  orderBy?: Maybe<GitHub_EnterpriseServerUserAccountOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An Enterprise Server installation. */
export type GitHub_EnterpriseServerInstallationUserAccountsUploadsArgs = {
  orderBy?: Maybe<GitHub_EnterpriseServerUserAccountsUploadOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for EnterpriseServerInstallation. */
export type GitHub_EnterpriseServerInstallationConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseServerInstallationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_EnterpriseServerInstallation>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_EnterpriseServerInstallationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_EnterpriseServerInstallation>;
};

/** Ordering options for Enterprise Server installation connections. */
export type GitHub_EnterpriseServerInstallationOrder = {
  /** The field to order Enterprise Server installations by. */
  field: GitHub_EnterpriseServerInstallationOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which Enterprise Server installation connections can be ordered. */
export type GitHub_EnterpriseServerInstallationOrderField = 
  /** Order Enterprise Server installations by host name */
  | 'HOST_NAME'
  /** Order Enterprise Server installations by customer name */
  | 'CUSTOMER_NAME'
  /** Order Enterprise Server installations by creation time */
  | 'CREATED_AT';

/** A user account on an Enterprise Server installation. */
export type GitHub_EnterpriseServerUserAccount = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** User emails belonging to this user account. */
  emails: GitHub_EnterpriseServerUserAccountEmailConnection;
  /** The Enterprise Server installation on which this user account exists. */
  enterpriseServerInstallation: GitHub_EnterpriseServerInstallation;
  id: Scalars['ID'];
  /** Whether the user account is a site administrator on the Enterprise Server installation. */
  isSiteAdmin: Scalars['Boolean'];
  /** The login of the user account on the Enterprise Server installation. */
  login: Scalars['String'];
  /** The profile name of the user account on the Enterprise Server installation. */
  profileName?: Maybe<Scalars['String']>;
  /** The date and time when the user account was created on the Enterprise Server installation. */
  remoteCreatedAt: Scalars['GitHub_DateTime'];
  /** The ID of the user account on the Enterprise Server installation. */
  remoteUserId: Scalars['Int'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
};


/** A user account on an Enterprise Server installation. */
export type GitHub_EnterpriseServerUserAccountEmailsArgs = {
  orderBy?: Maybe<GitHub_EnterpriseServerUserAccountEmailOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for EnterpriseServerUserAccount. */
export type GitHub_EnterpriseServerUserAccountConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseServerUserAccountEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_EnterpriseServerUserAccount>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_EnterpriseServerUserAccountEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_EnterpriseServerUserAccount>;
};

/** An email belonging to a user account on an Enterprise Server installation. */
export type GitHub_EnterpriseServerUserAccountEmail = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The email address. */
  email: Scalars['String'];
  id: Scalars['ID'];
  /** Indicates whether this is the primary email of the associated user account. */
  isPrimary: Scalars['Boolean'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The user account to which the email belongs. */
  userAccount: GitHub_EnterpriseServerUserAccount;
};

/** The connection type for EnterpriseServerUserAccountEmail. */
export type GitHub_EnterpriseServerUserAccountEmailConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseServerUserAccountEmailEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_EnterpriseServerUserAccountEmail>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_EnterpriseServerUserAccountEmailEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_EnterpriseServerUserAccountEmail>;
};

/** Ordering options for Enterprise Server user account email connections. */
export type GitHub_EnterpriseServerUserAccountEmailOrder = {
  /** The field to order emails by. */
  field: GitHub_EnterpriseServerUserAccountEmailOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which Enterprise Server user account email connections can be ordered. */
export type GitHub_EnterpriseServerUserAccountEmailOrderField = 
  /** Order emails by email */
  | 'EMAIL';

/** Ordering options for Enterprise Server user account connections. */
export type GitHub_EnterpriseServerUserAccountOrder = {
  /** The field to order user accounts by. */
  field: GitHub_EnterpriseServerUserAccountOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which Enterprise Server user account connections can be ordered. */
export type GitHub_EnterpriseServerUserAccountOrderField = 
  /** Order user accounts by login */
  | 'LOGIN'
  /** Order user accounts by creation time on the Enterprise Server installation */
  | 'REMOTE_CREATED_AT';

/** A user accounts upload from an Enterprise Server installation. */
export type GitHub_EnterpriseServerUserAccountsUpload = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The enterprise to which this upload belongs. */
  enterprise: GitHub_Enterprise;
  /** The Enterprise Server installation for which this upload was generated. */
  enterpriseServerInstallation: GitHub_EnterpriseServerInstallation;
  id: Scalars['ID'];
  /** The name of the file uploaded. */
  name: Scalars['String'];
  /** The synchronization state of the upload */
  syncState: GitHub_EnterpriseServerUserAccountsUploadSyncState;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
};

/** The connection type for EnterpriseServerUserAccountsUpload. */
export type GitHub_EnterpriseServerUserAccountsUploadConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseServerUserAccountsUploadEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_EnterpriseServerUserAccountsUpload>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_EnterpriseServerUserAccountsUploadEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_EnterpriseServerUserAccountsUpload>;
};

/** Ordering options for Enterprise Server user accounts upload connections. */
export type GitHub_EnterpriseServerUserAccountsUploadOrder = {
  /** The field to order user accounts uploads by. */
  field: GitHub_EnterpriseServerUserAccountsUploadOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which Enterprise Server user accounts upload connections can be ordered. */
export type GitHub_EnterpriseServerUserAccountsUploadOrderField = 
  /** Order user accounts uploads by creation time */
  | 'CREATED_AT';

/** Synchronization state of the Enterprise Server user accounts upload */
export type GitHub_EnterpriseServerUserAccountsUploadSyncState = 
  /** The synchronization of the upload is pending. */
  | 'PENDING'
  /** The synchronization of the upload succeeded. */
  | 'SUCCESS'
  /** The synchronization of the upload failed. */
  | 'FAILURE';

/** An account for a user who is an admin of an enterprise or a member of an enterprise through one or more organizations. */
export type GitHub_EnterpriseUserAccount = GitHub_Node & GitHub_Actor & {
  /** A URL pointing to the enterprise user account's public avatar. */
  avatarUrl: Scalars['GitHub_URI'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The enterprise in which this user account exists. */
  enterprise: GitHub_Enterprise;
  id: Scalars['ID'];
  /** An identifier for the enterprise user account, a login or email address */
  login: Scalars['String'];
  /** The name of the enterprise user account */
  name?: Maybe<Scalars['String']>;
  /** A list of enterprise organizations this user is a member of. */
  organizations: GitHub_EnterpriseOrganizationMembershipConnection;
  /** The HTTP path for this user. */
  resourcePath: Scalars['GitHub_URI'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this user. */
  url: Scalars['GitHub_URI'];
  /** The user within the enterprise. */
  user?: Maybe<GitHub_User>;
};


/** An account for a user who is an admin of an enterprise or a member of an enterprise through one or more organizations. */
export type GitHub_EnterpriseUserAccountAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


/** An account for a user who is an admin of an enterprise or a member of an enterprise through one or more organizations. */
export type GitHub_EnterpriseUserAccountOrganizationsArgs = {
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<GitHub_OrganizationOrder>;
  role?: Maybe<GitHub_EnterpriseUserAccountMembershipRole>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for EnterpriseUserAccount. */
export type GitHub_EnterpriseUserAccountConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseUserAccountEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_EnterpriseUserAccount>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_EnterpriseUserAccountEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_EnterpriseUserAccount>;
};

/** The possible roles for enterprise membership. */
export type GitHub_EnterpriseUserAccountMembershipRole = 
  /** The user is a member of the enterprise membership. */
  | 'MEMBER'
  /** The user is an owner of the enterprise membership. */
  | 'OWNER';

/** The possible GitHub Enterprise deployments where this user can exist. */
export type GitHub_EnterpriseUserDeployment = 
  /** The user is part of a GitHub Enterprise Cloud deployment. */
  | 'CLOUD'
  /** The user is part of a GitHub Enterprise Server deployment. */
  | 'SERVER';

/** An external identity provisioned by SAML SSO or SCIM. */
export type GitHub_ExternalIdentity = GitHub_Node & {
  /** The GUID for this identity */
  guid: Scalars['String'];
  id: Scalars['ID'];
  /** Organization invitation for this SCIM-provisioned external identity */
  organizationInvitation?: Maybe<GitHub_OrganizationInvitation>;
  /** SAML Identity attributes */
  samlIdentity?: Maybe<GitHub_ExternalIdentitySamlAttributes>;
  /** SCIM Identity attributes */
  scimIdentity?: Maybe<GitHub_ExternalIdentityScimAttributes>;
  /** User linked to this external identity. Will be NULL if this identity has not been claimed by an organization member. */
  user?: Maybe<GitHub_User>;
};

/** The connection type for ExternalIdentity. */
export type GitHub_ExternalIdentityConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ExternalIdentityEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_ExternalIdentity>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_ExternalIdentityEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_ExternalIdentity>;
};

/** SAML attributes for the External Identity */
export type GitHub_ExternalIdentitySamlAttributes = {
  /** The emails associated with the SAML identity */
  emails?: Maybe<Array<GitHub_UserEmailMetadata>>;
  /** Family name of the SAML identity */
  familyName?: Maybe<Scalars['String']>;
  /** Given name of the SAML identity */
  givenName?: Maybe<Scalars['String']>;
  /** The groups linked to this identity in IDP */
  groups?: Maybe<Array<Scalars['String']>>;
  /** The NameID of the SAML identity */
  nameId?: Maybe<Scalars['String']>;
  /** The userName of the SAML identity */
  username?: Maybe<Scalars['String']>;
};

/** SCIM attributes for the External Identity */
export type GitHub_ExternalIdentityScimAttributes = {
  /** The emails associated with the SCIM identity */
  emails?: Maybe<Array<GitHub_UserEmailMetadata>>;
  /** Family name of the SCIM identity */
  familyName?: Maybe<Scalars['String']>;
  /** Given name of the SCIM identity */
  givenName?: Maybe<Scalars['String']>;
  /** The groups linked to this identity in IDP */
  groups?: Maybe<Array<Scalars['String']>>;
  /** The userName of the SCIM identity */
  username?: Maybe<Scalars['String']>;
};

/** The connection type for User. */
export type GitHub_FollowerConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** The connection type for User. */
export type GitHub_FollowingConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** Autogenerated input type of FollowUser */
export type GitHub_FollowUserInput = {
  /** ID of the user to follow. */
  userId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of FollowUser */
export type GitHub_FollowUserPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The user that was followed. */
  user?: Maybe<GitHub_User>;
};

/** A funding platform link for a repository. */
export type GitHub_FundingLink = {
  /** The funding platform this link is for. */
  platform: GitHub_FundingPlatform;
  /** The configured URL for this funding link. */
  url: Scalars['GitHub_URI'];
};

/** The possible funding platforms for repository funding links. */
export type GitHub_FundingPlatform = 
  /** GitHub funding platform. */
  | 'GITHUB'
  /** Patreon funding platform. */
  | 'PATREON'
  /** Open Collective funding platform. */
  | 'OPEN_COLLECTIVE'
  /** Ko-fi funding platform. */
  | 'KO_FI'
  /** Tidelift funding platform. */
  | 'TIDELIFT'
  /** Community Bridge funding platform. */
  | 'COMMUNITY_BRIDGE'
  /** Liberapay funding platform. */
  | 'LIBERAPAY'
  /** IssueHunt funding platform. */
  | 'ISSUEHUNT'
  /** Otechie funding platform. */
  | 'OTECHIE'
  /** Custom funding platform. */
  | 'CUSTOM';

/** A generic hovercard context with a message and icon */
export type GitHub_GenericHovercardContext = GitHub_HovercardContext & {
  /** A string describing this context */
  message: Scalars['String'];
  /** An octicon to accompany this context */
  octicon: Scalars['String'];
};

/** A Gist. */
export type GitHub_Gist = GitHub_Node & GitHub_Starrable & GitHub_UniformResourceLocatable & {
  /** A list of comments associated with the gist */
  comments: GitHub_GistCommentConnection;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The gist description. */
  description?: Maybe<Scalars['String']>;
  /** The files in this gist. */
  files?: Maybe<Array<Maybe<GitHub_GistFile>>>;
  /** A list of forks associated with the gist */
  forks: GitHub_GistConnection;
  id: Scalars['ID'];
  /** Identifies if the gist is a fork. */
  isFork: Scalars['Boolean'];
  /** Whether the gist is public or not. */
  isPublic: Scalars['Boolean'];
  /** The gist name. */
  name: Scalars['String'];
  /** The gist owner. */
  owner?: Maybe<GitHub_RepositoryOwner>;
  /** Identifies when the gist was last pushed to. */
  pushedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** The HTML path to this resource. */
  resourcePath: Scalars['GitHub_URI'];
  /** A list of users who have starred this starrable. */
  stargazers: GitHub_StargazerConnection;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this Gist. */
  url: Scalars['GitHub_URI'];
  /** Returns a boolean indicating whether the viewing user has starred this starrable. */
  viewerHasStarred: Scalars['Boolean'];
};


/** A Gist. */
export type GitHub_GistCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A Gist. */
export type GitHub_GistFilesArgs = {
  limit?: Maybe<Scalars['Int']>;
  oid?: Maybe<Scalars['GitHub_GitObjectID']>;
};


/** A Gist. */
export type GitHub_GistForksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_GistOrder>;
};


/** A Gist. */
export type GitHub_GistStargazersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_StarOrder>;
};

/** Represents a comment on an Gist. */
export type GitHub_GistComment = GitHub_Node & GitHub_Comment & GitHub_Deletable & GitHub_Minimizable & GitHub_Updatable & GitHub_UpdatableComment & {
  /** The actor who authored the comment. */
  author?: Maybe<GitHub_Actor>;
  /** Author's association with the gist. */
  authorAssociation: GitHub_CommentAuthorAssociation;
  /** Identifies the comment body. */
  body: Scalars['String'];
  /** The body rendered to HTML. */
  bodyHTML: Scalars['GitHub_HTML'];
  /** The body rendered to text. */
  bodyText: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Check if this comment was created via an email reply. */
  createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The actor who edited the comment. */
  editor?: Maybe<GitHub_Actor>;
  /** The associated gist. */
  gist: GitHub_Gist;
  id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: Scalars['Boolean'];
  /** Returns whether or not a comment has been minimized. */
  isMinimized: Scalars['Boolean'];
  /** The moment the editor made the last edit */
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** Returns why the comment was minimized. */
  minimizedReason?: Maybe<Scalars['String']>;
  /** Identifies when the comment was published at. */
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** A list of edits to this content. */
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: Scalars['Boolean'];
  /** Check if the current viewer can minimize this object. */
  viewerCanMinimize: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  viewerDidAuthor: Scalars['Boolean'];
};


/** Represents a comment on an Gist. */
export type GitHub_GistCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for GistComment. */
export type GitHub_GistCommentConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_GistCommentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_GistComment>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_GistCommentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_GistComment>;
};

/** The connection type for Gist. */
export type GitHub_GistConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_GistEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Gist>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_GistEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Gist>;
};

/** A file in a gist. */
export type GitHub_GistFile = {
  /** The file name encoded to remove characters that are invalid in URL paths. */
  encodedName?: Maybe<Scalars['String']>;
  /** The gist file encoding. */
  encoding?: Maybe<Scalars['String']>;
  /** The file extension from the file name. */
  extension?: Maybe<Scalars['String']>;
  /** Indicates if this file is an image. */
  isImage: Scalars['Boolean'];
  /** Whether the file's contents were truncated. */
  isTruncated: Scalars['Boolean'];
  /** The programming language this file is written in. */
  language?: Maybe<GitHub_Language>;
  /** The gist file name. */
  name?: Maybe<Scalars['String']>;
  /** The gist file size in bytes. */
  size?: Maybe<Scalars['Int']>;
  /** UTF8 text data or null if the file is binary */
  text?: Maybe<Scalars['String']>;
};


/** A file in a gist. */
export type GitHub_GistFileTextArgs = {
  truncate?: Maybe<Scalars['Int']>;
};

/** Ordering options for gist connections */
export type GitHub_GistOrder = {
  /** The field to order repositories by. */
  field: GitHub_GistOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which gist connections can be ordered. */
export type GitHub_GistOrderField = 
  /** Order gists by creation time */
  | 'CREATED_AT'
  /** Order gists by update time */
  | 'UPDATED_AT'
  /** Order gists by push time */
  | 'PUSHED_AT';

/** The privacy of a Gist */
export type GitHub_GistPrivacy = 
  /** Public */
  | 'PUBLIC'
  /** Secret */
  | 'SECRET'
  /** Gists that are public and secret */
  | 'ALL';

/** Represents an actor in a Git commit (ie. an author or committer). */
export type GitHub_GitActor = {
  /** A URL pointing to the author's public avatar. */
  avatarUrl: Scalars['GitHub_URI'];
  /** The timestamp of the Git action (authoring or committing). */
  date?: Maybe<Scalars['GitHub_GitTimestamp']>;
  /** The email in the Git commit. */
  email?: Maybe<Scalars['String']>;
  /** The name in the Git commit. */
  name?: Maybe<Scalars['String']>;
  /** The GitHub user corresponding to the email field. Null if no such user exists. */
  user?: Maybe<GitHub_User>;
};


/** Represents an actor in a Git commit (ie. an author or committer). */
export type GitHub_GitActorAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

/** Represents information about the GitHub instance. */
export type GitHub_GitHubMetadata = {
  /** Returns a String that's a SHA of `github-services` */
  gitHubServicesSha: Scalars['GitHub_GitObjectID'];
  /** IP addresses that users connect to for git operations */
  gitIpAddresses?: Maybe<Array<Scalars['String']>>;
  /** IP addresses that service hooks are sent from */
  hookIpAddresses?: Maybe<Array<Scalars['String']>>;
  /** IP addresses that the importer connects from */
  importerIpAddresses?: Maybe<Array<Scalars['String']>>;
  /** Whether or not users are verified */
  isPasswordAuthenticationVerifiable: Scalars['Boolean'];
  /** IP addresses for GitHub Pages' A records */
  pagesIpAddresses?: Maybe<Array<Scalars['String']>>;
};

/** Represents a Git object. */
export type GitHub_GitObject = {
  /** An abbreviated version of the Git object ID */
  abbreviatedOid: Scalars['String'];
  /** The HTTP path for this Git object */
  commitResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this Git object */
  commitUrl: Scalars['GitHub_URI'];
  id: Scalars['ID'];
  /** The Git object ID */
  oid: Scalars['GitHub_GitObjectID'];
  /** The Repository the Git object belongs to */
  repository: GitHub_Repository;
};


/** Information about a signature (GPG or S/MIME) on a Commit or Tag. */
export type GitHub_GitSignature = {
  /** Email used to sign this object. */
  email: Scalars['String'];
  /** True if the signature is valid and verified by GitHub. */
  isValid: Scalars['Boolean'];
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: Scalars['String'];
  /** ASCII-armored signature header from object. */
  signature: Scalars['String'];
  /** GitHub user corresponding to the email signing this commit. */
  signer?: Maybe<GitHub_User>;
  /**
   * The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  state: GitHub_GitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: Scalars['Boolean'];
};

/** The state of a Git signature. */
export type GitHub_GitSignatureState = 
  /** Valid signature and verified by GitHub */
  | 'VALID'
  /** Invalid signature */
  | 'INVALID'
  /** Malformed signature */
  | 'MALFORMED_SIG'
  /** Key used for signing not known to GitHub */
  | 'UNKNOWN_KEY'
  /** Invalid email used for signing */
  | 'BAD_EMAIL'
  /** Email used for signing unverified on GitHub */
  | 'UNVERIFIED_EMAIL'
  /** Email used for signing not known to GitHub */
  | 'NO_USER'
  /** Unknown signature type */
  | 'UNKNOWN_SIG_TYPE'
  /** Unsigned */
  | 'UNSIGNED'
  /** Internal error - the GPG verification service is unavailable at the moment */
  | 'GPGVERIFY_UNAVAILABLE'
  /** Internal error - the GPG verification service misbehaved */
  | 'GPGVERIFY_ERROR'
  /** The usage flags for the key that signed this don't allow signing */
  | 'NOT_SIGNING_KEY'
  /** Signing key expired */
  | 'EXPIRED_KEY'
  /** Valid signature, pending certificate revocation checking */
  | 'OCSP_PENDING'
  /** Valid siganture, though certificate revocation check failed */
  | 'OCSP_ERROR'
  /** The signing certificate or its chain could not be verified */
  | 'BAD_CERT'
  /** One or more certificates in chain has been revoked */
  | 'OCSP_REVOKED';



/** Represents a GPG signature on a Commit or Tag. */
export type GitHub_GpgSignature = GitHub_GitSignature & {
  /** Email used to sign this object. */
  email: Scalars['String'];
  /** True if the signature is valid and verified by GitHub. */
  isValid: Scalars['Boolean'];
  /** Hex-encoded ID of the key that signed this object. */
  keyId?: Maybe<Scalars['String']>;
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: Scalars['String'];
  /** ASCII-armored signature header from object. */
  signature: Scalars['String'];
  /** GitHub user corresponding to the email signing this commit. */
  signer?: Maybe<GitHub_User>;
  /**
   * The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  state: GitHub_GitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: Scalars['Boolean'];
};

/** Represents a 'head_ref_deleted' event on a given pull request. */
export type GitHub_HeadRefDeletedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the Ref associated with the `head_ref_deleted` event. */
  headRef?: Maybe<GitHub_Ref>;
  /** Identifies the name of the Ref associated with the `head_ref_deleted` event. */
  headRefName: Scalars['String'];
  id: Scalars['ID'];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
};

/** Represents a 'head_ref_force_pushed' event on a given pull request. */
export type GitHub_HeadRefForcePushedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the after commit SHA for the 'head_ref_force_pushed' event. */
  afterCommit?: Maybe<GitHub_Commit>;
  /** Identifies the before commit SHA for the 'head_ref_force_pushed' event. */
  beforeCommit?: Maybe<GitHub_Commit>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
  /** Identifies the fully qualified ref name for the 'head_ref_force_pushed' event. */
  ref?: Maybe<GitHub_Ref>;
};

/** Represents a 'head_ref_restored' event on a given pull request. */
export type GitHub_HeadRefRestoredEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
};

/** Detail needed to display a hovercard for a user */
export type GitHub_Hovercard = {
  /** Each of the contexts for this hovercard */
  contexts: Array<GitHub_HovercardContext>;
};

/** An individual line of a hovercard */
export type GitHub_HovercardContext = {
  /** A string describing this context */
  message: Scalars['String'];
  /** An octicon to accompany this context */
  octicon: Scalars['String'];
};


/** The possible states in which authentication can be configured with an identity provider. */
export type GitHub_IdentityProviderConfigurationState = 
  /** Authentication with an identity provider is configured and enforced. */
  | 'ENFORCED'
  /** Authentication with an identity provider is configured but not enforced. */
  | 'CONFIGURED'
  /** Authentication with an identity provider is not configured. */
  | 'UNCONFIGURED';

/** Autogenerated input type of InviteEnterpriseAdmin */
export type GitHub_InviteEnterpriseAdminInput = {
  /** The ID of the enterprise to which you want to invite an administrator. */
  enterpriseId: Scalars['ID'];
  /** The login of a user to invite as an administrator. */
  invitee?: Maybe<Scalars['String']>;
  /** The email of the person to invite as an administrator. */
  email?: Maybe<Scalars['String']>;
  /** The role of the administrator. */
  role?: Maybe<GitHub_EnterpriseAdministratorRole>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of InviteEnterpriseAdmin */
export type GitHub_InviteEnterpriseAdminPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created enterprise administrator invitation. */
  invitation?: Maybe<GitHub_EnterpriseAdministratorInvitation>;
};

/** The possible values for the IP allow list enabled setting. */
export type GitHub_IpAllowListEnabledSettingValue = 
  /** The setting is enabled for the owner. */
  | 'ENABLED'
  /** The setting is disabled for the owner. */
  | 'DISABLED';

/** An IP address or range of addresses that is allowed to access an owner's resources. */
export type GitHub_IpAllowListEntry = GitHub_Node & {
  /** A single IP address or range of IP addresses in CIDR notation. */
  allowListValue: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** Whether the entry is currently active. */
  isActive: Scalars['Boolean'];
  /** The name of the IP allow list entry. */
  name?: Maybe<Scalars['String']>;
  /** The owner of the IP allow list entry. */
  owner: GitHub_IpAllowListOwner;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
};

/** The connection type for IpAllowListEntry. */
export type GitHub_IpAllowListEntryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_IpAllowListEntryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_IpAllowListEntry>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_IpAllowListEntryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_IpAllowListEntry>;
};

/** Ordering options for IP allow list entry connections. */
export type GitHub_IpAllowListEntryOrder = {
  /** The field to order IP allow list entries by. */
  field: GitHub_IpAllowListEntryOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which IP allow list entry connections can be ordered. */
export type GitHub_IpAllowListEntryOrderField = 
  /** Order IP allow list entries by creation time. */
  | 'CREATED_AT'
  /** Order IP allow list entries by the allow list value. */
  | 'ALLOW_LIST_VALUE';

/** Types that can own an IP allow list. */
export type GitHub_IpAllowListOwner = GitHub_Enterprise | GitHub_Organization;

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_Issue = GitHub_Node & GitHub_Assignable & GitHub_Closable & GitHub_Comment & GitHub_Updatable & GitHub_UpdatableComment & GitHub_Labelable & GitHub_Lockable & GitHub_Reactable & GitHub_RepositoryNode & GitHub_Subscribable & GitHub_UniformResourceLocatable & {
  /** Reason that the conversation was locked. */
  activeLockReason?: Maybe<GitHub_LockReason>;
  /** A list of Users assigned to this object. */
  assignees: GitHub_UserConnection;
  /** The actor who authored the comment. */
  author?: Maybe<GitHub_Actor>;
  /** Author's association with the subject of the comment. */
  authorAssociation: GitHub_CommentAuthorAssociation;
  /** Identifies the body of the issue. */
  body: Scalars['String'];
  /** The body rendered to HTML. */
  bodyHTML: Scalars['GitHub_HTML'];
  /** Identifies the body of the issue rendered to text. */
  bodyText: Scalars['String'];
  /** `true` if the object is closed (definition of closed may depend on type) */
  closed: Scalars['Boolean'];
  /** Identifies the date and time when the object was closed. */
  closedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** A list of comments associated with the Issue. */
  comments: GitHub_IssueCommentConnection;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Check if this comment was created via an email reply. */
  createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The actor who edited the comment. */
  editor?: Maybe<GitHub_Actor>;
  /** The hovercard information for this issue */
  hovercard: GitHub_Hovercard;
  id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: Scalars['Boolean'];
  /** A list of labels associated with the object. */
  labels?: Maybe<GitHub_LabelConnection>;
  /** The moment the editor made the last edit */
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** `true` if the object is locked */
  locked: Scalars['Boolean'];
  /** Identifies the milestone associated with the issue. */
  milestone?: Maybe<GitHub_Milestone>;
  /** Identifies the issue number. */
  number: Scalars['Int'];
  /** A list of Users that are participating in the Issue conversation. */
  participants: GitHub_UserConnection;
  /** List of project cards associated with this issue. */
  projectCards: GitHub_ProjectCardConnection;
  /** Identifies when the comment was published at. */
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  reactions: GitHub_ReactionConnection;
  /** The repository associated with this node. */
  repository: GitHub_Repository;
  /** The HTTP path for this issue */
  resourcePath: Scalars['GitHub_URI'];
  /** Identifies the state of the issue. */
  state: GitHub_IssueState;
  /**
   * A list of events, comments, commits, etc. associated with the issue.
   * @deprecated `timeline` will be removed Use Issue.timelineItems instead. Removal on 2020-10-01 UTC.
   */
  timeline: GitHub_IssueTimelineConnection;
  /** A list of events, comments, commits, etc. associated with the issue. */
  timelineItems: GitHub_IssueTimelineItemsConnection;
  /** Identifies the issue title. */
  title: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this issue */
  url: Scalars['GitHub_URI'];
  /** A list of edits to this content. */
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
  /** Can user react to this subject */
  viewerCanReact: Scalars['Boolean'];
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  viewerDidAuthor: Scalars['Boolean'];
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: Maybe<GitHub_SubscriptionState>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueAssigneesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueHovercardArgs = {
  includeNotificationContexts?: Maybe<Scalars['Boolean']>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueLabelsArgs = {
  orderBy?: Maybe<GitHub_LabelOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueParticipantsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueProjectCardsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<Array<Maybe<GitHub_ProjectCardArchivedState>>>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<GitHub_ReactionContent>;
  orderBy?: Maybe<GitHub_ReactionOrder>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueTimelineArgs = {
  since?: Maybe<Scalars['GitHub_DateTime']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueTimelineItemsArgs = {
  since?: Maybe<Scalars['GitHub_DateTime']>;
  skip?: Maybe<Scalars['Int']>;
  itemTypes?: Maybe<Array<GitHub_IssueTimelineItemsItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Represents a comment on an Issue. */
export type GitHub_IssueComment = GitHub_Node & GitHub_Comment & GitHub_Deletable & GitHub_Minimizable & GitHub_Updatable & GitHub_UpdatableComment & GitHub_Reactable & GitHub_RepositoryNode & {
  /** The actor who authored the comment. */
  author?: Maybe<GitHub_Actor>;
  /** Author's association with the subject of the comment. */
  authorAssociation: GitHub_CommentAuthorAssociation;
  /** The body as Markdown. */
  body: Scalars['String'];
  /** The body rendered to HTML. */
  bodyHTML: Scalars['GitHub_HTML'];
  /** The body rendered to text. */
  bodyText: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Check if this comment was created via an email reply. */
  createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The actor who edited the comment. */
  editor?: Maybe<GitHub_Actor>;
  id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: Scalars['Boolean'];
  /** Returns whether or not a comment has been minimized. */
  isMinimized: Scalars['Boolean'];
  /** Identifies the issue associated with the comment. */
  issue: GitHub_Issue;
  /** The moment the editor made the last edit */
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** Returns why the comment was minimized. */
  minimizedReason?: Maybe<Scalars['String']>;
  /** Identifies when the comment was published at. */
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /**
   * Returns the pull request associated with the comment, if this comment was made on a
   * pull request.
   */
  pullRequest?: Maybe<GitHub_PullRequest>;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  reactions: GitHub_ReactionConnection;
  /** The repository associated with this node. */
  repository: GitHub_Repository;
  /** The HTTP path for this issue comment */
  resourcePath: Scalars['GitHub_URI'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this issue comment */
  url: Scalars['GitHub_URI'];
  /** A list of edits to this content. */
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: Scalars['Boolean'];
  /** Check if the current viewer can minimize this object. */
  viewerCanMinimize: Scalars['Boolean'];
  /** Can user react to this subject */
  viewerCanReact: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  viewerDidAuthor: Scalars['Boolean'];
};


/** Represents a comment on an Issue. */
export type GitHub_IssueCommentReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<GitHub_ReactionContent>;
  orderBy?: Maybe<GitHub_ReactionOrder>;
};


/** Represents a comment on an Issue. */
export type GitHub_IssueCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for IssueComment. */
export type GitHub_IssueCommentConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_IssueCommentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_IssueComment>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_IssueCommentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_IssueComment>;
};

/** The connection type for Issue. */
export type GitHub_IssueConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_IssueEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Issue>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** This aggregates issues opened by a user within one repository. */
export type GitHub_IssueContributionsByRepository = {
  /** The issue contributions. */
  contributions: GitHub_CreatedIssueContributionConnection;
  /** The repository in which the issues were opened. */
  repository: GitHub_Repository;
};


/** This aggregates issues opened by a user within one repository. */
export type GitHub_IssueContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_ContributionOrder>;
};

/** An edge in a connection. */
export type GitHub_IssueEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Issue>;
};

/** Ways in which to filter lists of issues. */
export type GitHub_IssueFilters = {
  /**
   * List issues assigned to given name. Pass in `null` for issues with no assigned
   * user, and `*` for issues assigned to any user.
   */
  assignee?: Maybe<Scalars['String']>;
  /** List issues created by given name. */
  createdBy?: Maybe<Scalars['String']>;
  /** List issues where the list of label names exist on the issue. */
  labels?: Maybe<Array<Scalars['String']>>;
  /** List issues where the given name is mentioned in the issue. */
  mentioned?: Maybe<Scalars['String']>;
  /**
   * List issues by given milestone argument. If an string representation of an
   * integer is passed, it should refer to a milestone by its number field. Pass in
   * `null` for issues with no milestone, and `*` for issues that are assigned to any milestone.
   */
  milestone?: Maybe<Scalars['String']>;
  /** List issues that have been updated at or after the given date. */
  since?: Maybe<Scalars['GitHub_DateTime']>;
  /** List issues filtered by the list of states given. */
  states?: Maybe<Array<GitHub_IssueState>>;
  /** List issues subscribed to by viewer. */
  viewerSubscribed?: Maybe<Scalars['Boolean']>;
};

/** Ways in which lists of issues can be ordered upon return. */
export type GitHub_IssueOrder = {
  /** The field in which to order issues by. */
  field: GitHub_IssueOrderField;
  /** The direction in which to order issues by the specified field. */
  direction: GitHub_OrderDirection;
};

/** Properties by which issue connections can be ordered. */
export type GitHub_IssueOrderField = 
  /** Order issues by creation time */
  | 'CREATED_AT'
  /** Order issues by update time */
  | 'UPDATED_AT'
  /** Order issues by comment count */
  | 'COMMENTS';

/** Used for return value of Repository.issueOrPullRequest. */
export type GitHub_IssueOrPullRequest = GitHub_Issue | GitHub_PullRequest;

/** The possible states of an issue. */
export type GitHub_IssueState = 
  /** An issue that is still open */
  | 'OPEN'
  /** An issue that has been closed */
  | 'CLOSED';

/** The connection type for IssueTimelineItem. */
export type GitHub_IssueTimelineConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_IssueTimelineItemEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_IssueTimelineItem>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An item in an issue timeline */
export type GitHub_IssueTimelineItem = GitHub_AssignedEvent | GitHub_ClosedEvent | GitHub_Commit | GitHub_CrossReferencedEvent | GitHub_DemilestonedEvent | GitHub_IssueComment | GitHub_LabeledEvent | GitHub_LockedEvent | GitHub_MilestonedEvent | GitHub_ReferencedEvent | GitHub_RenamedTitleEvent | GitHub_ReopenedEvent | GitHub_SubscribedEvent | GitHub_TransferredEvent | GitHub_UnassignedEvent | GitHub_UnlabeledEvent | GitHub_UnlockedEvent | GitHub_UnsubscribedEvent | GitHub_UserBlockedEvent;

/** An edge in a connection. */
export type GitHub_IssueTimelineItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_IssueTimelineItem>;
};

/** An item in an issue timeline */
export type GitHub_IssueTimelineItems = GitHub_AddedToProjectEvent | GitHub_AssignedEvent | GitHub_ClosedEvent | GitHub_CommentDeletedEvent | GitHub_ConnectedEvent | GitHub_ConvertedNoteToIssueEvent | GitHub_CrossReferencedEvent | GitHub_DemilestonedEvent | GitHub_DisconnectedEvent | GitHub_IssueComment | GitHub_LabeledEvent | GitHub_LockedEvent | GitHub_MarkedAsDuplicateEvent | GitHub_MentionedEvent | GitHub_MilestonedEvent | GitHub_MovedColumnsInProjectEvent | GitHub_PinnedEvent | GitHub_ReferencedEvent | GitHub_RemovedFromProjectEvent | GitHub_RenamedTitleEvent | GitHub_ReopenedEvent | GitHub_SubscribedEvent | GitHub_TransferredEvent | GitHub_UnassignedEvent | GitHub_UnlabeledEvent | GitHub_UnlockedEvent | GitHub_UnmarkedAsDuplicateEvent | GitHub_UnpinnedEvent | GitHub_UnsubscribedEvent | GitHub_UserBlockedEvent;

/** The connection type for IssueTimelineItems. */
export type GitHub_IssueTimelineItemsConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_IssueTimelineItemsEdge>>>;
  /** Identifies the count of items after applying `before` and `after` filters. */
  filteredCount: Scalars['Int'];
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_IssueTimelineItems>>>;
  /** Identifies the count of items after applying `before`/`after` filters and `first`/`last`/`skip` slicing. */
  pageCount: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
  /** Identifies the date and time when the timeline was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
};

/** An edge in a connection. */
export type GitHub_IssueTimelineItemsEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_IssueTimelineItems>;
};

/** The possible item types found in a timeline. */
export type GitHub_IssueTimelineItemsItemType = 
  /** Represents a comment on an Issue. */
  | 'ISSUE_COMMENT'
  /** Represents a mention made by one issue or pull request to another. */
  | 'CROSS_REFERENCED_EVENT'
  /** Represents a 'added_to_project' event on a given issue or pull request. */
  | 'ADDED_TO_PROJECT_EVENT'
  /** Represents an 'assigned' event on any assignable object. */
  | 'ASSIGNED_EVENT'
  /** Represents a 'closed' event on any `Closable`. */
  | 'CLOSED_EVENT'
  /** Represents a 'comment_deleted' event on a given issue or pull request. */
  | 'COMMENT_DELETED_EVENT'
  /** Represents a 'connected' event on a given issue or pull request. */
  | 'CONNECTED_EVENT'
  /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
  | 'CONVERTED_NOTE_TO_ISSUE_EVENT'
  /** Represents a 'demilestoned' event on a given issue or pull request. */
  | 'DEMILESTONED_EVENT'
  /** Represents a 'disconnected' event on a given issue or pull request. */
  | 'DISCONNECTED_EVENT'
  /** Represents a 'labeled' event on a given issue or pull request. */
  | 'LABELED_EVENT'
  /** Represents a 'locked' event on a given issue or pull request. */
  | 'LOCKED_EVENT'
  /** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
  | 'MARKED_AS_DUPLICATE_EVENT'
  /** Represents a 'mentioned' event on a given issue or pull request. */
  | 'MENTIONED_EVENT'
  /** Represents a 'milestoned' event on a given issue or pull request. */
  | 'MILESTONED_EVENT'
  /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
  | 'MOVED_COLUMNS_IN_PROJECT_EVENT'
  /** Represents a 'pinned' event on a given issue or pull request. */
  | 'PINNED_EVENT'
  /** Represents a 'referenced' event on a given `ReferencedSubject`. */
  | 'REFERENCED_EVENT'
  /** Represents a 'removed_from_project' event on a given issue or pull request. */
  | 'REMOVED_FROM_PROJECT_EVENT'
  /** Represents a 'renamed' event on a given issue or pull request */
  | 'RENAMED_TITLE_EVENT'
  /** Represents a 'reopened' event on any `Closable`. */
  | 'REOPENED_EVENT'
  /** Represents a 'subscribed' event on a given `Subscribable`. */
  | 'SUBSCRIBED_EVENT'
  /** Represents a 'transferred' event on a given issue or pull request. */
  | 'TRANSFERRED_EVENT'
  /** Represents an 'unassigned' event on any assignable object. */
  | 'UNASSIGNED_EVENT'
  /** Represents an 'unlabeled' event on a given issue or pull request. */
  | 'UNLABELED_EVENT'
  /** Represents an 'unlocked' event on a given issue or pull request. */
  | 'UNLOCKED_EVENT'
  /** Represents a 'user_blocked' event on a given user. */
  | 'USER_BLOCKED_EVENT'
  /** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
  | 'UNMARKED_AS_DUPLICATE_EVENT'
  /** Represents an 'unpinned' event on a given issue or pull request. */
  | 'UNPINNED_EVENT'
  /** Represents an 'unsubscribed' event on a given `Subscribable`. */
  | 'UNSUBSCRIBED_EVENT';

/** Represents a user signing up for a GitHub account. */
export type GitHub_JoinedGitHubContribution = GitHub_Contribution & {
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars['Boolean'];
  /** When this contribution was made. */
  occurredAt: Scalars['GitHub_DateTime'];
  /** The HTTP path for this contribution. */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this contribution. */
  url: Scalars['GitHub_URI'];
  /** The user who made this contribution. */
  user: GitHub_User;
};

/** A label for categorizing Issues or Milestones with a given Repository. */
export type GitHub_Label = GitHub_Node & {
  /** Identifies the label color. */
  color: Scalars['String'];
  /** Identifies the date and time when the label was created. */
  createdAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** A brief description of this label. */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Indicates whether or not this is a default label. */
  isDefault: Scalars['Boolean'];
  /** A list of issues associated with this label. */
  issues: GitHub_IssueConnection;
  /** Identifies the label name. */
  name: Scalars['String'];
  /** A list of pull requests associated with this label. */
  pullRequests: GitHub_PullRequestConnection;
  /** The repository associated with this label. */
  repository: GitHub_Repository;
  /** The HTTP path for this label. */
  resourcePath: Scalars['GitHub_URI'];
  /** Identifies the date and time when the label was last updated. */
  updatedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** The HTTP URL for this label. */
  url: Scalars['GitHub_URI'];
};


/** A label for categorizing Issues or Milestones with a given Repository. */
export type GitHub_LabelIssuesArgs = {
  orderBy?: Maybe<GitHub_IssueOrder>;
  labels?: Maybe<Array<Scalars['String']>>;
  states?: Maybe<Array<GitHub_IssueState>>;
  filterBy?: Maybe<GitHub_IssueFilters>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A label for categorizing Issues or Milestones with a given Repository. */
export type GitHub_LabelPullRequestsArgs = {
  states?: Maybe<Array<GitHub_PullRequestState>>;
  labels?: Maybe<Array<Scalars['String']>>;
  headRefName?: Maybe<Scalars['String']>;
  baseRefName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<GitHub_IssueOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** An object that can have labels assigned to it. */
export type GitHub_Labelable = {
  /** A list of labels associated with the object. */
  labels?: Maybe<GitHub_LabelConnection>;
};


/** An object that can have labels assigned to it. */
export type GitHub_LabelableLabelsArgs = {
  orderBy?: Maybe<GitHub_LabelOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for Label. */
export type GitHub_LabelConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_LabelEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Label>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** Represents a 'labeled' event on a given issue or pull request. */
export type GitHub_LabeledEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** Identifies the label associated with the 'labeled' event. */
  label: GitHub_Label;
  /** Identifies the `Labelable` associated with the event. */
  labelable: GitHub_Labelable;
};

/** An edge in a connection. */
export type GitHub_LabelEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Label>;
};

/** Ways in which lists of labels can be ordered upon return. */
export type GitHub_LabelOrder = {
  /** The field in which to order labels by. */
  field: GitHub_LabelOrderField;
  /** The direction in which to order labels by the specified field. */
  direction: GitHub_OrderDirection;
};

/** Properties by which label connections can be ordered. */
export type GitHub_LabelOrderField = 
  /** Order labels by name  */
  | 'NAME'
  /** Order labels by creation time */
  | 'CREATED_AT';

/** Represents a given language found in repositories. */
export type GitHub_Language = GitHub_Node & {
  /** The color defined for the current language. */
  color?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The name of the current language. */
  name: Scalars['String'];
};

/** A list of languages associated with the parent. */
export type GitHub_LanguageConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_LanguageEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Language>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
  /** The total size in bytes of files written in that language. */
  totalSize: Scalars['Int'];
};

/** Represents the language of a repository. */
export type GitHub_LanguageEdge = {
  cursor: Scalars['String'];
  node: GitHub_Language;
  /** The number of bytes of code written in the language. */
  size: Scalars['Int'];
};

/** Ordering options for language connections. */
export type GitHub_LanguageOrder = {
  /** The field to order languages by. */
  field: GitHub_LanguageOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which language connections can be ordered. */
export type GitHub_LanguageOrderField = 
  /** Order languages by the size of all files containing the language */
  | 'SIZE';

/** A repository's open source license */
export type GitHub_License = GitHub_Node & {
  /** The full text of the license */
  body: Scalars['String'];
  /** The conditions set by the license */
  conditions: Array<Maybe<GitHub_LicenseRule>>;
  /** A human-readable description of the license */
  description?: Maybe<Scalars['String']>;
  /** Whether the license should be featured */
  featured: Scalars['Boolean'];
  /** Whether the license should be displayed in license pickers */
  hidden: Scalars['Boolean'];
  id: Scalars['ID'];
  /** Instructions on how to implement the license */
  implementation?: Maybe<Scalars['String']>;
  /** The lowercased SPDX ID of the license */
  key: Scalars['String'];
  /** The limitations set by the license */
  limitations: Array<Maybe<GitHub_LicenseRule>>;
  /** The license full name specified by <https://spdx.org/licenses> */
  name: Scalars['String'];
  /** Customary short name if applicable (e.g, GPLv3) */
  nickname?: Maybe<Scalars['String']>;
  /** The permissions set by the license */
  permissions: Array<Maybe<GitHub_LicenseRule>>;
  /** Whether the license is a pseudo-license placeholder (e.g., other, no-license) */
  pseudoLicense: Scalars['Boolean'];
  /** Short identifier specified by <https://spdx.org/licenses> */
  spdxId?: Maybe<Scalars['String']>;
  /** URL to the license on <https://choosealicense.com> */
  url?: Maybe<Scalars['GitHub_URI']>;
};

/** Describes a License's conditions, permissions, and limitations */
export type GitHub_LicenseRule = {
  /** A description of the rule */
  description: Scalars['String'];
  /** The machine-readable rule key */
  key: Scalars['String'];
  /** The human-readable rule label */
  label: Scalars['String'];
};

/** Autogenerated input type of LinkRepositoryToProject */
export type GitHub_LinkRepositoryToProjectInput = {
  /** The ID of the Project to link to a Repository */
  projectId: Scalars['ID'];
  /** The ID of the Repository to link to a Project. */
  repositoryId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of LinkRepositoryToProject */
export type GitHub_LinkRepositoryToProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The linked Project. */
  project?: Maybe<GitHub_Project>;
  /** The linked Repository. */
  repository?: Maybe<GitHub_Repository>;
};

/** An object that can be locked. */
export type GitHub_Lockable = {
  /** Reason that the conversation was locked. */
  activeLockReason?: Maybe<GitHub_LockReason>;
  /** `true` if the object is locked */
  locked: Scalars['Boolean'];
};

/** Represents a 'locked' event on a given issue or pull request. */
export type GitHub_LockedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** Reason that the conversation was locked (optional). */
  lockReason?: Maybe<GitHub_LockReason>;
  /** Object that was locked. */
  lockable: GitHub_Lockable;
};

/** Autogenerated input type of LockLockable */
export type GitHub_LockLockableInput = {
  /** ID of the issue or pull request to be locked. */
  lockableId: Scalars['ID'];
  /** A reason for why the issue or pull request will be locked. */
  lockReason?: Maybe<GitHub_LockReason>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of LockLockable */
export type GitHub_LockLockablePayload = {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The item that was locked. */
  lockedRecord?: Maybe<GitHub_Lockable>;
};

/** The possible reasons that an issue or pull request was locked. */
export type GitHub_LockReason = 
  /** The issue or pull request was locked because the conversation was off-topic. */
  | 'OFF_TOPIC'
  /** The issue or pull request was locked because the conversation was too heated. */
  | 'TOO_HEATED'
  /** The issue or pull request was locked because the conversation was resolved. */
  | 'RESOLVED'
  /** The issue or pull request was locked because the conversation was spam. */
  | 'SPAM';

/** A placeholder user for attribution of imported data on GitHub. */
export type GitHub_Mannequin = GitHub_Node & GitHub_Actor & GitHub_UniformResourceLocatable & {
  /** A URL pointing to the GitHub App's public avatar. */
  avatarUrl: Scalars['GitHub_URI'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The mannequin's email on the source instance. */
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The username of the actor. */
  login: Scalars['String'];
  /** The HTML path to this resource. */
  resourcePath: Scalars['GitHub_URI'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The URL to this resource. */
  url: Scalars['GitHub_URI'];
};


/** A placeholder user for attribution of imported data on GitHub. */
export type GitHub_MannequinAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

/** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
export type GitHub_MarkedAsDuplicateEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
};

/** A public description of a Marketplace category. */
export type GitHub_MarketplaceCategory = GitHub_Node & {
  /** The category's description. */
  description?: Maybe<Scalars['String']>;
  /** The technical description of how apps listed in this category work with GitHub. */
  howItWorks?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The category's name. */
  name: Scalars['String'];
  /** How many Marketplace listings have this as their primary category. */
  primaryListingCount: Scalars['Int'];
  /** The HTTP path for this Marketplace category. */
  resourcePath: Scalars['GitHub_URI'];
  /** How many Marketplace listings have this as their secondary category. */
  secondaryListingCount: Scalars['Int'];
  /** The short name of the category used in its URL. */
  slug: Scalars['String'];
  /** The HTTP URL for this Marketplace category. */
  url: Scalars['GitHub_URI'];
};

/** A listing in the GitHub integration marketplace. */
export type GitHub_MarketplaceListing = GitHub_Node & {
  /** The GitHub App this listing represents. */
  app?: Maybe<GitHub_App>;
  /** URL to the listing owner's company site. */
  companyUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP path for configuring access to the listing's integration or OAuth app */
  configurationResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for configuring access to the listing's integration or OAuth app */
  configurationUrl: Scalars['GitHub_URI'];
  /** URL to the listing's documentation. */
  documentationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The listing's detailed description. */
  extendedDescription?: Maybe<Scalars['String']>;
  /** The listing's detailed description rendered to HTML. */
  extendedDescriptionHTML: Scalars['GitHub_HTML'];
  /** The listing's introductory description. */
  fullDescription: Scalars['String'];
  /** The listing's introductory description rendered to HTML. */
  fullDescriptionHTML: Scalars['GitHub_HTML'];
  /** Does this listing have any plans with a free trial? */
  hasPublishedFreeTrialPlans: Scalars['Boolean'];
  /** Does this listing have a terms of service link? */
  hasTermsOfService: Scalars['Boolean'];
  /** A technical description of how this app works with GitHub. */
  howItWorks?: Maybe<Scalars['String']>;
  /** The listing's technical description rendered to HTML. */
  howItWorksHTML: Scalars['GitHub_HTML'];
  id: Scalars['ID'];
  /** URL to install the product to the viewer's account or organization. */
  installationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** Whether this listing's app has been installed for the current viewer */
  installedForViewer: Scalars['Boolean'];
  /** Whether this listing has been removed from the Marketplace. */
  isArchived: Scalars['Boolean'];
  /**
   * Whether this listing is still an editable draft that has not been submitted
   * for review and is not publicly visible in the Marketplace.
   */
  isDraft: Scalars['Boolean'];
  /** Whether the product this listing represents is available as part of a paid plan. */
  isPaid: Scalars['Boolean'];
  /** Whether this listing has been approved for display in the Marketplace. */
  isPublic: Scalars['Boolean'];
  /** Whether this listing has been rejected by GitHub for display in the Marketplace. */
  isRejected: Scalars['Boolean'];
  /** Whether this listing has been approved for unverified display in the Marketplace. */
  isUnverified: Scalars['Boolean'];
  /** Whether this draft listing has been submitted for review for approval to be unverified in the Marketplace. */
  isUnverifiedPending: Scalars['Boolean'];
  /** Whether this draft listing has been submitted for review from GitHub for approval to be verified in the Marketplace. */
  isVerificationPendingFromDraft: Scalars['Boolean'];
  /** Whether this unverified listing has been submitted for review from GitHub for approval to be verified in the Marketplace. */
  isVerificationPendingFromUnverified: Scalars['Boolean'];
  /** Whether this listing has been approved for verified display in the Marketplace. */
  isVerified: Scalars['Boolean'];
  /** The hex color code, without the leading '#', for the logo background. */
  logoBackgroundColor: Scalars['String'];
  /** URL for the listing's logo image. */
  logoUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The listing's full name. */
  name: Scalars['String'];
  /** The listing's very short description without a trailing period or ampersands. */
  normalizedShortDescription: Scalars['String'];
  /** URL to the listing's detailed pricing. */
  pricingUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The category that best describes the listing. */
  primaryCategory: GitHub_MarketplaceCategory;
  /** URL to the listing's privacy policy, may return an empty string for listings that do not require a privacy policy URL. */
  privacyPolicyUrl: Scalars['GitHub_URI'];
  /** The HTTP path for the Marketplace listing. */
  resourcePath: Scalars['GitHub_URI'];
  /** The URLs for the listing's screenshots. */
  screenshotUrls: Array<Maybe<Scalars['String']>>;
  /** An alternate category that describes the listing. */
  secondaryCategory?: Maybe<GitHub_MarketplaceCategory>;
  /** The listing's very short description. */
  shortDescription: Scalars['String'];
  /** The short name of the listing used in its URL. */
  slug: Scalars['String'];
  /** URL to the listing's status page. */
  statusUrl?: Maybe<Scalars['GitHub_URI']>;
  /** An email address for support for this listing's app. */
  supportEmail?: Maybe<Scalars['String']>;
  /**
   * Either a URL or an email address for support for this listing's app, may
   * return an empty string for listings that do not require a support URL.
   */
  supportUrl: Scalars['GitHub_URI'];
  /** URL to the listing's terms of service. */
  termsOfServiceUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the Marketplace listing. */
  url: Scalars['GitHub_URI'];
  /** Can the current viewer add plans for this Marketplace listing. */
  viewerCanAddPlans: Scalars['Boolean'];
  /** Can the current viewer approve this Marketplace listing. */
  viewerCanApprove: Scalars['Boolean'];
  /** Can the current viewer delist this Marketplace listing. */
  viewerCanDelist: Scalars['Boolean'];
  /** Can the current viewer edit this Marketplace listing. */
  viewerCanEdit: Scalars['Boolean'];
  /**
   * Can the current viewer edit the primary and secondary category of this
   * Marketplace listing.
   */
  viewerCanEditCategories: Scalars['Boolean'];
  /** Can the current viewer edit the plans for this Marketplace listing. */
  viewerCanEditPlans: Scalars['Boolean'];
  /**
   * Can the current viewer return this Marketplace listing to draft state
   * so it becomes editable again.
   */
  viewerCanRedraft: Scalars['Boolean'];
  /**
   * Can the current viewer reject this Marketplace listing by returning it to
   * an editable draft state or rejecting it entirely.
   */
  viewerCanReject: Scalars['Boolean'];
  /**
   * Can the current viewer request this listing be reviewed for display in
   * the Marketplace as verified.
   */
  viewerCanRequestApproval: Scalars['Boolean'];
  /** Indicates whether the current user has an active subscription to this Marketplace listing. */
  viewerHasPurchased: Scalars['Boolean'];
  /**
   * Indicates if the current user has purchased a subscription to this Marketplace listing
   * for all of the organizations the user owns.
   */
  viewerHasPurchasedForAllOrganizations: Scalars['Boolean'];
  /** Does the current viewer role allow them to administer this Marketplace listing. */
  viewerIsListingAdmin: Scalars['Boolean'];
};


/** A listing in the GitHub integration marketplace. */
export type GitHub_MarketplaceListingLogoUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

/** Look up Marketplace Listings */
export type GitHub_MarketplaceListingConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_MarketplaceListingEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_MarketplaceListing>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_MarketplaceListingEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_MarketplaceListing>;
};

/** Autogenerated input type of MarkPullRequestReadyForReview */
export type GitHub_MarkPullRequestReadyForReviewInput = {
  /** ID of the pull request to be marked as ready for review. */
  pullRequestId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of MarkPullRequestReadyForReview */
export type GitHub_MarkPullRequestReadyForReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The pull request that is ready for review. */
  pullRequest?: Maybe<GitHub_PullRequest>;
};

/** Audit log entry for a members_can_delete_repos.clear event. */
export type GitHub_MembersCanDeleteReposClearAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_EnterpriseAuditEntryData & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The slug of the enterprise. */
  enterpriseSlug?: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>;
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a members_can_delete_repos.disable event. */
export type GitHub_MembersCanDeleteReposDisableAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_EnterpriseAuditEntryData & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The slug of the enterprise. */
  enterpriseSlug?: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>;
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a members_can_delete_repos.enable event. */
export type GitHub_MembersCanDeleteReposEnableAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_EnterpriseAuditEntryData & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The slug of the enterprise. */
  enterpriseSlug?: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>;
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Entities that have members who can set status messages. */
export type GitHub_MemberStatusable = {
  /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
  memberStatuses: GitHub_UserStatusConnection;
};


/** Entities that have members who can set status messages. */
export type GitHub_MemberStatusableMemberStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_UserStatusOrder>;
};

/** Represents a 'mentioned' event on a given issue or pull request. */
export type GitHub_MentionedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

/** Whether or not a PullRequest can be merged. */
export type GitHub_MergeableState = 
  /** The pull request can be merged. */
  | 'MERGEABLE'
  /** The pull request cannot be merged due to merge conflicts. */
  | 'CONFLICTING'
  /** The mergeability of the pull request is still being calculated. */
  | 'UNKNOWN';

/** Autogenerated input type of MergeBranch */
export type GitHub_MergeBranchInput = {
  /** The Node ID of the Repository containing the base branch that will be modified. */
  repositoryId: Scalars['ID'];
  /** The name of the base branch that the provided head will be merged into. */
  base: Scalars['String'];
  /** The head to merge into the base branch. This can be a branch name or a commit GitObjectID. */
  head: Scalars['String'];
  /** Message to use for the merge commit. If omitted, a default will be used. */
  commitMessage?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of MergeBranch */
export type GitHub_MergeBranchPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The resulting merge Commit. */
  mergeCommit?: Maybe<GitHub_Commit>;
};

/** Represents a 'merged' event on a given pull request. */
export type GitHub_MergedEvent = GitHub_Node & GitHub_UniformResourceLocatable & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the commit associated with the `merge` event. */
  commit?: Maybe<GitHub_Commit>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** Identifies the Ref associated with the `merge` event. */
  mergeRef?: Maybe<GitHub_Ref>;
  /** Identifies the name of the Ref associated with the `merge` event. */
  mergeRefName: Scalars['String'];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
  /** The HTTP path for this merged event. */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this merged event. */
  url: Scalars['GitHub_URI'];
};

/** Autogenerated input type of MergePullRequest */
export type GitHub_MergePullRequestInput = {
  /** ID of the pull request to be merged. */
  pullRequestId: Scalars['ID'];
  /** Commit headline to use for the merge commit; if omitted, a default message will be used. */
  commitHeadline?: Maybe<Scalars['String']>;
  /** Commit body to use for the merge commit; if omitted, a default message will be used */
  commitBody?: Maybe<Scalars['String']>;
  /** OID that the pull request head ref must match to allow merge; if omitted, no check is performed. */
  expectedHeadOid?: Maybe<Scalars['GitHub_GitObjectID']>;
  /** The merge method to use. If omitted, defaults to 'MERGE' */
  mergeMethod?: Maybe<GitHub_PullRequestMergeMethod>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of MergePullRequest */
export type GitHub_MergePullRequestPayload = {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The pull request that was merged. */
  pullRequest?: Maybe<GitHub_PullRequest>;
};

/** Represents a Milestone object on a given repository. */
export type GitHub_Milestone = GitHub_Node & GitHub_Closable & GitHub_UniformResourceLocatable & {
  /** `true` if the object is closed (definition of closed may depend on type) */
  closed: Scalars['Boolean'];
  /** Identifies the date and time when the object was closed. */
  closedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the actor who created the milestone. */
  creator?: Maybe<GitHub_Actor>;
  /** Identifies the description of the milestone. */
  description?: Maybe<Scalars['String']>;
  /** Identifies the due date of the milestone. */
  dueOn?: Maybe<Scalars['GitHub_DateTime']>;
  id: Scalars['ID'];
  /** Just for debugging on review-lab */
  issuePrioritiesDebug: Scalars['String'];
  /** A list of issues associated with the milestone. */
  issues: GitHub_IssueConnection;
  /** Identifies the number of the milestone. */
  number: Scalars['Int'];
  /** A list of pull requests associated with the milestone. */
  pullRequests: GitHub_PullRequestConnection;
  /** The repository associated with this milestone. */
  repository: GitHub_Repository;
  /** The HTTP path for this milestone */
  resourcePath: Scalars['GitHub_URI'];
  /** Identifies the state of the milestone. */
  state: GitHub_MilestoneState;
  /** Identifies the title of the milestone. */
  title: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this milestone */
  url: Scalars['GitHub_URI'];
};


/** Represents a Milestone object on a given repository. */
export type GitHub_MilestoneIssuesArgs = {
  orderBy?: Maybe<GitHub_IssueOrder>;
  labels?: Maybe<Array<Scalars['String']>>;
  states?: Maybe<Array<GitHub_IssueState>>;
  filterBy?: Maybe<GitHub_IssueFilters>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a Milestone object on a given repository. */
export type GitHub_MilestonePullRequestsArgs = {
  states?: Maybe<Array<GitHub_PullRequestState>>;
  labels?: Maybe<Array<Scalars['String']>>;
  headRefName?: Maybe<Scalars['String']>;
  baseRefName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<GitHub_IssueOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for Milestone. */
export type GitHub_MilestoneConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_MilestoneEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Milestone>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** Represents a 'milestoned' event on a given issue or pull request. */
export type GitHub_MilestonedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** Identifies the milestone title associated with the 'milestoned' event. */
  milestoneTitle: Scalars['String'];
  /** Object referenced by event. */
  subject: GitHub_MilestoneItem;
};

/** An edge in a connection. */
export type GitHub_MilestoneEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Milestone>;
};

/** Types that can be inside a Milestone. */
export type GitHub_MilestoneItem = GitHub_Issue | GitHub_PullRequest;

/** Ordering options for milestone connections. */
export type GitHub_MilestoneOrder = {
  /** The field to order milestones by. */
  field: GitHub_MilestoneOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which milestone connections can be ordered. */
export type GitHub_MilestoneOrderField = 
  /** Order milestones by when they are due. */
  | 'DUE_DATE'
  /** Order milestones by when they were created. */
  | 'CREATED_AT'
  /** Order milestones by when they were last updated. */
  | 'UPDATED_AT'
  /** Order milestones by their number. */
  | 'NUMBER';

/** The possible states of a milestone. */
export type GitHub_MilestoneState = 
  /** A milestone that is still open. */
  | 'OPEN'
  /** A milestone that has been closed. */
  | 'CLOSED';

/** Entities that can be minimized. */
export type GitHub_Minimizable = {
  /** Returns whether or not a comment has been minimized. */
  isMinimized: Scalars['Boolean'];
  /** Returns why the comment was minimized. */
  minimizedReason?: Maybe<Scalars['String']>;
  /** Check if the current viewer can minimize this object. */
  viewerCanMinimize: Scalars['Boolean'];
};

/** Autogenerated input type of MinimizeComment */
export type GitHub_MinimizeCommentInput = {
  /** The Node ID of the subject to modify. */
  subjectId: Scalars['ID'];
  /** The classification of comment */
  classifier: GitHub_ReportedContentClassifiers;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of MinimizeComment */
export type GitHub_MinimizeCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment that was minimized. */
  minimizedComment?: Maybe<GitHub_Minimizable>;
};

/** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
export type GitHub_MovedColumnsInProjectEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

/** Autogenerated input type of MoveProjectCard */
export type GitHub_MoveProjectCardInput = {
  /** The id of the card to move. */
  cardId: Scalars['ID'];
  /** The id of the column to move it into. */
  columnId: Scalars['ID'];
  /** Place the new card after the card with this id. Pass null to place it at the top. */
  afterCardId?: Maybe<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of MoveProjectCard */
export type GitHub_MoveProjectCardPayload = {
  /** The new edge of the moved card. */
  cardEdge?: Maybe<GitHub_ProjectCardEdge>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of MoveProjectColumn */
export type GitHub_MoveProjectColumnInput = {
  /** The id of the column to move. */
  columnId: Scalars['ID'];
  /** Place the new column after the column with this id. Pass null to place it at the front. */
  afterColumnId?: Maybe<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of MoveProjectColumn */
export type GitHub_MoveProjectColumnPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The new edge of the moved column. */
  columnEdge?: Maybe<GitHub_ProjectColumnEdge>;
};

/** An object with an ID. */
export type GitHub_Node = {
  /** ID of the object. */
  id: Scalars['ID'];
};

/** Metadata for an audit entry with action oauth_application.* */
export type GitHub_OauthApplicationAuditEntryData = {
  /** The name of the OAuth Application. */
  oauthApplicationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the OAuth Application */
  oauthApplicationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the OAuth Application */
  oauthApplicationUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a oauth_application.create event. */
export type GitHub_OauthApplicationCreateAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OauthApplicationAuditEntryData & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The application URL of the OAuth Application. */
  applicationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The callback URL of the OAuth Application. */
  callbackUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The name of the OAuth Application. */
  oauthApplicationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the OAuth Application */
  oauthApplicationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the OAuth Application */
  oauthApplicationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The rate limit of the OAuth Application. */
  rateLimit?: Maybe<Scalars['Int']>;
  /** The state of the OAuth Application. */
  state?: Maybe<GitHub_OauthApplicationCreateAuditEntryState>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** The state of an OAuth Application when it was created. */
export type GitHub_OauthApplicationCreateAuditEntryState = 
  /** The OAuth Application was active and allowed to have OAuth Accesses. */
  | 'ACTIVE'
  /** The OAuth Application was suspended from generating OAuth Accesses due to abuse or security concerns. */
  | 'SUSPENDED'
  /** The OAuth Application was in the process of being deleted. */
  | 'PENDING_DELETION';

/** The corresponding operation type for the action */
export type GitHub_OperationType = 
  /** An existing resource was accessed */
  | 'ACCESS'
  /** A resource performed an authentication event */
  | 'AUTHENTICATION'
  /** A new resource was created */
  | 'CREATE'
  /** An existing resource was modified */
  | 'MODIFY'
  /** An existing resource was removed */
  | 'REMOVE'
  /** An existing resource was restored */
  | 'RESTORE'
  /** An existing resource was transferred between multiple resources */
  | 'TRANSFER';

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export type GitHub_OrderDirection = 
  /** Specifies an ascending order for a given `orderBy` argument. */
  | 'ASC'
  /** Specifies a descending order for a given `orderBy` argument. */
  | 'DESC';

/** Audit log entry for a org.add_billing_manager */
export type GitHub_OrgAddBillingManagerAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The email address used to invite a billing manager for the organization. */
  invitationEmail?: Maybe<Scalars['String']>;
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.add_member */
export type GitHub_OrgAddMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The permission level of the member added to the organization. */
  permission?: Maybe<GitHub_OrgAddMemberAuditEntryPermission>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** The permissions available to members on an Organization. */
export type GitHub_OrgAddMemberAuditEntryPermission = 
  /** Can read and clone repositories. */
  | 'READ'
  /** Can read, clone, push, and add collaborators to repositories. */
  | 'ADMIN';

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_Organization = GitHub_Node & GitHub_Actor & GitHub_PackageOwner & GitHub_ProjectOwner & GitHub_RepositoryOwner & GitHub_UniformResourceLocatable & GitHub_MemberStatusable & GitHub_ProfileOwner & GitHub_Sponsorable & {
  /** Determine if this repository owner has any items that can be pinned to their profile. */
  anyPinnableItems: Scalars['Boolean'];
  /** Audit log entries of the organization */
  auditLog: GitHub_OrganizationAuditEntryConnection;
  /** A URL pointing to the organization's public avatar. */
  avatarUrl: Scalars['GitHub_URI'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The organization's public profile description. */
  description?: Maybe<Scalars['String']>;
  /** The organization's public profile description rendered to HTML. */
  descriptionHTML?: Maybe<Scalars['String']>;
  /** The organization's public email. */
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The setting value for whether the organization has an IP allow list enabled. */
  ipAllowListEnabledSetting: GitHub_IpAllowListEnabledSettingValue;
  /** The IP addresses that are allowed to access resources owned by the organization. */
  ipAllowListEntries: GitHub_IpAllowListEntryConnection;
  /** Whether the organization has verified its profile email and website. */
  isVerified: Scalars['Boolean'];
  /**
   * Showcases a selection of repositories and gists that the profile owner has
   * either curated or that have been selected automatically based on popularity.
   */
  itemShowcase: GitHub_ProfileItemShowcase;
  /** The organization's public profile location. */
  location?: Maybe<Scalars['String']>;
  /** The organization's login name. */
  login: Scalars['String'];
  /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
  memberStatuses: GitHub_UserStatusConnection;
  /** A list of users who are members of this organization. */
  membersWithRole: GitHub_OrganizationMemberConnection;
  /** The organization's public profile name. */
  name?: Maybe<Scalars['String']>;
  /** The HTTP path creating a new team */
  newTeamResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL creating a new team */
  newTeamUrl: Scalars['GitHub_URI'];
  /** The billing email for the organization. */
  organizationBillingEmail?: Maybe<Scalars['String']>;
  /** A list of packages under the owner. */
  packages: GitHub_PackageConnection;
  /** A list of users who have been invited to join this organization. */
  pendingMembers: GitHub_UserConnection;
  /** A list of repositories and gists this profile owner can pin to their profile. */
  pinnableItems: GitHub_PinnableItemConnection;
  /** A list of repositories and gists this profile owner has pinned to their profile */
  pinnedItems: GitHub_PinnableItemConnection;
  /** Returns how many more items this profile owner can pin to their profile. */
  pinnedItemsRemaining: Scalars['Int'];
  /** Find project by number. */
  project?: Maybe<GitHub_Project>;
  /** A list of projects under the owner. */
  projects: GitHub_ProjectConnection;
  /** The HTTP path listing organization's projects */
  projectsResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL listing organization's projects */
  projectsUrl: Scalars['GitHub_URI'];
  /** A list of repositories that the user owns. */
  repositories: GitHub_RepositoryConnection;
  /** Find Repository. */
  repository?: Maybe<GitHub_Repository>;
  /**
   * When true the organization requires all members, billing managers, and outside
   * collaborators to enable two-factor authentication.
   */
  requiresTwoFactorAuthentication?: Maybe<Scalars['Boolean']>;
  /** The HTTP path for this organization. */
  resourcePath: Scalars['GitHub_URI'];
  /** The Organization's SAML identity providers */
  samlIdentityProvider?: Maybe<GitHub_OrganizationIdentityProvider>;
  /** The GitHub Sponsors listing for this user. */
  sponsorsListing?: Maybe<GitHub_SponsorsListing>;
  /** This object's sponsorships as the maintainer. */
  sponsorshipsAsMaintainer: GitHub_SponsorshipConnection;
  /** This object's sponsorships as the sponsor. */
  sponsorshipsAsSponsor: GitHub_SponsorshipConnection;
  /** Find an organization's team by its slug. */
  team?: Maybe<GitHub_Team>;
  /** A list of teams in this organization. */
  teams: GitHub_TeamConnection;
  /** The HTTP path listing organization's teams */
  teamsResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL listing organization's teams */
  teamsUrl: Scalars['GitHub_URI'];
  /** The organization's Twitter username. */
  twitterUsername?: Maybe<Scalars['String']>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this organization. */
  url: Scalars['GitHub_URI'];
  /** Organization is adminable by the viewer. */
  viewerCanAdminister: Scalars['Boolean'];
  /** Can the viewer pin repositories and gists to the profile? */
  viewerCanChangePinnedItems: Scalars['Boolean'];
  /** Can the current viewer create new projects on this owner. */
  viewerCanCreateProjects: Scalars['Boolean'];
  /** Viewer can create repositories on this organization */
  viewerCanCreateRepositories: Scalars['Boolean'];
  /** Viewer can create teams on this organization. */
  viewerCanCreateTeams: Scalars['Boolean'];
  /** Viewer is an active member of this organization. */
  viewerIsAMember: Scalars['Boolean'];
  /** The organization's public profile URL. */
  websiteUrl?: Maybe<Scalars['GitHub_URI']>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationAnyPinnableItemsArgs = {
  type?: Maybe<GitHub_PinnableItemType>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationAuditLogArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<GitHub_AuditLogOrder>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationIpAllowListEntriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_IpAllowListEntryOrder>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationMemberStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_UserStatusOrder>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationMembersWithRoleArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationPackagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  repositoryId?: Maybe<Scalars['ID']>;
  packageType?: Maybe<GitHub_PackageType>;
  orderBy?: Maybe<GitHub_PackageOrder>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationPendingMembersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationPinnableItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationPinnedItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationProjectArgs = {
  number: Scalars['Int'];
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationProjectsArgs = {
  orderBy?: Maybe<GitHub_ProjectOrder>;
  search?: Maybe<Scalars['String']>;
  states?: Maybe<Array<GitHub_ProjectState>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationRepositoriesArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  isFork?: Maybe<Scalars['Boolean']>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationRepositoryArgs = {
  name: Scalars['String'];
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationSponsorshipsAsMaintainerArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<GitHub_SponsorshipOrder>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationSponsorshipsAsSponsorArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_SponsorshipOrder>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationTeamArgs = {
  slug: Scalars['String'];
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationTeamsArgs = {
  privacy?: Maybe<GitHub_TeamPrivacy>;
  role?: Maybe<GitHub_TeamRole>;
  query?: Maybe<Scalars['String']>;
  userLogins?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<GitHub_TeamOrder>;
  ldapMapped?: Maybe<Scalars['Boolean']>;
  rootTeamsOnly?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** An audit entry in an organization audit log. */
export type GitHub_OrganizationAuditEntry = GitHub_MembersCanDeleteReposClearAuditEntry | GitHub_MembersCanDeleteReposDisableAuditEntry | GitHub_MembersCanDeleteReposEnableAuditEntry | GitHub_OauthApplicationCreateAuditEntry | GitHub_OrgAddBillingManagerAuditEntry | GitHub_OrgAddMemberAuditEntry | GitHub_OrgBlockUserAuditEntry | GitHub_OrgConfigDisableCollaboratorsOnlyAuditEntry | GitHub_OrgConfigEnableCollaboratorsOnlyAuditEntry | GitHub_OrgCreateAuditEntry | GitHub_OrgDisableOauthAppRestrictionsAuditEntry | GitHub_OrgDisableSamlAuditEntry | GitHub_OrgDisableTwoFactorRequirementAuditEntry | GitHub_OrgEnableOauthAppRestrictionsAuditEntry | GitHub_OrgEnableSamlAuditEntry | GitHub_OrgEnableTwoFactorRequirementAuditEntry | GitHub_OrgInviteMemberAuditEntry | GitHub_OrgInviteToBusinessAuditEntry | GitHub_OrgOauthAppAccessApprovedAuditEntry | GitHub_OrgOauthAppAccessDeniedAuditEntry | GitHub_OrgOauthAppAccessRequestedAuditEntry | GitHub_OrgRemoveBillingManagerAuditEntry | GitHub_OrgRemoveMemberAuditEntry | GitHub_OrgRemoveOutsideCollaboratorAuditEntry | GitHub_OrgRestoreMemberAuditEntry | GitHub_OrgUnblockUserAuditEntry | GitHub_OrgUpdateDefaultRepositoryPermissionAuditEntry | GitHub_OrgUpdateMemberAuditEntry | GitHub_OrgUpdateMemberRepositoryCreationPermissionAuditEntry | GitHub_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry | GitHub_PrivateRepositoryForkingDisableAuditEntry | GitHub_PrivateRepositoryForkingEnableAuditEntry | GitHub_RepoAccessAuditEntry | GitHub_RepoAddMemberAuditEntry | GitHub_RepoAddTopicAuditEntry | GitHub_RepoArchivedAuditEntry | GitHub_RepoChangeMergeSettingAuditEntry | GitHub_RepoConfigDisableAnonymousGitAccessAuditEntry | GitHub_RepoConfigDisableCollaboratorsOnlyAuditEntry | GitHub_RepoConfigDisableContributorsOnlyAuditEntry | GitHub_RepoConfigDisableSockpuppetDisallowedAuditEntry | GitHub_RepoConfigEnableAnonymousGitAccessAuditEntry | GitHub_RepoConfigEnableCollaboratorsOnlyAuditEntry | GitHub_RepoConfigEnableContributorsOnlyAuditEntry | GitHub_RepoConfigEnableSockpuppetDisallowedAuditEntry | GitHub_RepoConfigLockAnonymousGitAccessAuditEntry | GitHub_RepoConfigUnlockAnonymousGitAccessAuditEntry | GitHub_RepoCreateAuditEntry | GitHub_RepoDestroyAuditEntry | GitHub_RepoRemoveMemberAuditEntry | GitHub_RepoRemoveTopicAuditEntry | GitHub_RepositoryVisibilityChangeDisableAuditEntry | GitHub_RepositoryVisibilityChangeEnableAuditEntry | GitHub_TeamAddMemberAuditEntry | GitHub_TeamAddRepositoryAuditEntry | GitHub_TeamChangeParentTeamAuditEntry | GitHub_TeamRemoveMemberAuditEntry | GitHub_TeamRemoveRepositoryAuditEntry;

/** The connection type for OrganizationAuditEntry. */
export type GitHub_OrganizationAuditEntryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_OrganizationAuditEntryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_OrganizationAuditEntry>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** Metadata for an audit entry with action org.* */
export type GitHub_OrganizationAuditEntryData = {
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** An edge in a connection. */
export type GitHub_OrganizationAuditEntryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_OrganizationAuditEntry>;
};

/** The connection type for Organization. */
export type GitHub_OrganizationConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_OrganizationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Organization>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_OrganizationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Organization>;
};

/** An Identity Provider configured to provision SAML and SCIM identities for Organizations */
export type GitHub_OrganizationIdentityProvider = GitHub_Node & {
  /** The digest algorithm used to sign SAML requests for the Identity Provider. */
  digestMethod?: Maybe<Scalars['GitHub_URI']>;
  /** External Identities provisioned by this Identity Provider */
  externalIdentities: GitHub_ExternalIdentityConnection;
  id: Scalars['ID'];
  /** The x509 certificate used by the Identity Provder to sign assertions and responses. */
  idpCertificate?: Maybe<Scalars['GitHub_X509Certificate']>;
  /** The Issuer Entity ID for the SAML Identity Provider */
  issuer?: Maybe<Scalars['String']>;
  /** Organization this Identity Provider belongs to */
  organization?: Maybe<GitHub_Organization>;
  /** The signature algorithm used to sign SAML requests for the Identity Provider. */
  signatureMethod?: Maybe<Scalars['GitHub_URI']>;
  /** The URL endpoint for the Identity Provider's SAML SSO. */
  ssoUrl?: Maybe<Scalars['GitHub_URI']>;
};


/** An Identity Provider configured to provision SAML and SCIM identities for Organizations */
export type GitHub_OrganizationIdentityProviderExternalIdentitiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** An Invitation for a user to an organization. */
export type GitHub_OrganizationInvitation = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The email address of the user invited to the organization. */
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The type of invitation that was sent (e.g. email, user). */
  invitationType: GitHub_OrganizationInvitationType;
  /** The user who was invited to the organization. */
  invitee?: Maybe<GitHub_User>;
  /** The user who created the invitation. */
  inviter: GitHub_User;
  /** The organization the invite is for */
  organization: GitHub_Organization;
  /** The user's pending role in the organization (e.g. member, owner). */
  role: GitHub_OrganizationInvitationRole;
};

/** The connection type for OrganizationInvitation. */
export type GitHub_OrganizationInvitationConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_OrganizationInvitationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_OrganizationInvitation>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_OrganizationInvitationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_OrganizationInvitation>;
};

/** The possible organization invitation roles. */
export type GitHub_OrganizationInvitationRole = 
  /** The user is invited to be a direct member of the organization. */
  | 'DIRECT_MEMBER'
  /** The user is invited to be an admin of the organization. */
  | 'ADMIN'
  /** The user is invited to be a billing manager of the organization. */
  | 'BILLING_MANAGER'
  /** The user's previous role will be reinstated. */
  | 'REINSTATE';

/** The possible organization invitation types. */
export type GitHub_OrganizationInvitationType = 
  /** The invitation was to an existing user. */
  | 'USER'
  /** The invitation was to an email address. */
  | 'EMAIL';

/** The connection type for User. */
export type GitHub_OrganizationMemberConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_OrganizationMemberEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** Represents a user within an organization. */
export type GitHub_OrganizationMemberEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** Whether the organization member has two factor enabled or not. Returns null if information is not available to viewer. */
  hasTwoFactorEnabled?: Maybe<Scalars['Boolean']>;
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_User>;
  /** The role this user has in the organization. */
  role?: Maybe<GitHub_OrganizationMemberRole>;
};

/** The possible roles within an organization for its members. */
export type GitHub_OrganizationMemberRole = 
  /** The user is a member of the organization. */
  | 'MEMBER'
  /** The user is an administrator of the organization. */
  | 'ADMIN';

/** The possible values for the members can create repositories setting on an organization. */
export type GitHub_OrganizationMembersCanCreateRepositoriesSettingValue = 
  /** Members will be able to create public and private repositories. */
  | 'ALL'
  /** Members will be able to create only private repositories. */
  | 'PRIVATE'
  /** Members will not be able to create public or private repositories. */
  | 'DISABLED';

/** Ordering options for organization connections. */
export type GitHub_OrganizationOrder = {
  /** The field to order organizations by. */
  field: GitHub_OrganizationOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which organization connections can be ordered. */
export type GitHub_OrganizationOrderField = 
  /** Order organizations by creation time */
  | 'CREATED_AT'
  /** Order organizations by login */
  | 'LOGIN';

/** An organization list hovercard context */
export type GitHub_OrganizationsHovercardContext = GitHub_HovercardContext & {
  /** A string describing this context */
  message: Scalars['String'];
  /** An octicon to accompany this context */
  octicon: Scalars['String'];
  /** Organizations this user is a member of that are relevant */
  relevantOrganizations: GitHub_OrganizationConnection;
  /** The total number of organizations this user is in */
  totalOrganizationCount: Scalars['Int'];
};


/** An organization list hovercard context */
export type GitHub_OrganizationsHovercardContextRelevantOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** An organization teams hovercard context */
export type GitHub_OrganizationTeamsHovercardContext = GitHub_HovercardContext & {
  /** A string describing this context */
  message: Scalars['String'];
  /** An octicon to accompany this context */
  octicon: Scalars['String'];
  /** Teams in this organization the user is a member of that are relevant */
  relevantTeams: GitHub_TeamConnection;
  /** The path for the full team list for this user */
  teamsResourcePath: Scalars['GitHub_URI'];
  /** The URL for the full team list for this user */
  teamsUrl: Scalars['GitHub_URI'];
  /** The total number of teams the user is on in the organization */
  totalTeamCount: Scalars['Int'];
};


/** An organization teams hovercard context */
export type GitHub_OrganizationTeamsHovercardContextRelevantTeamsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Audit log entry for a org.block_user */
export type GitHub_OrgBlockUserAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The blocked user. */
  blockedUser?: Maybe<GitHub_User>;
  /** The username of the blocked user. */
  blockedUserName?: Maybe<Scalars['String']>;
  /** The HTTP path for the blocked user. */
  blockedUserResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the blocked user. */
  blockedUserUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.config.disable_collaborators_only event. */
export type GitHub_OrgConfigDisableCollaboratorsOnlyAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.config.enable_collaborators_only event. */
export type GitHub_OrgConfigEnableCollaboratorsOnlyAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.create event. */
export type GitHub_OrgCreateAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The billing plan for the Organization. */
  billingPlan?: Maybe<GitHub_OrgCreateAuditEntryBillingPlan>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** The billing plans available for organizations. */
export type GitHub_OrgCreateAuditEntryBillingPlan = 
  /** Free Plan */
  | 'FREE'
  /** Team Plan */
  | 'BUSINESS'
  /** Enterprise Cloud Plan */
  | 'BUSINESS_PLUS'
  /** Legacy Unlimited Plan */
  | 'UNLIMITED'
  /** Tiered Per Seat Plan */
  | 'TIERED_PER_SEAT';

/** Audit log entry for a org.disable_oauth_app_restrictions event. */
export type GitHub_OrgDisableOauthAppRestrictionsAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.disable_saml event. */
export type GitHub_OrgDisableSamlAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  /** The SAML provider's digest algorithm URL. */
  digestMethodUrl?: Maybe<Scalars['GitHub_URI']>;
  id: Scalars['ID'];
  /** The SAML provider's issuer URL. */
  issuerUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The SAML provider's signature algorithm URL. */
  signatureMethodUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The SAML provider's single sign-on URL. */
  singleSignOnUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.disable_two_factor_requirement event. */
export type GitHub_OrgDisableTwoFactorRequirementAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.enable_oauth_app_restrictions event. */
export type GitHub_OrgEnableOauthAppRestrictionsAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.enable_saml event. */
export type GitHub_OrgEnableSamlAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  /** The SAML provider's digest algorithm URL. */
  digestMethodUrl?: Maybe<Scalars['GitHub_URI']>;
  id: Scalars['ID'];
  /** The SAML provider's issuer URL. */
  issuerUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The SAML provider's signature algorithm URL. */
  signatureMethodUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The SAML provider's single sign-on URL. */
  singleSignOnUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.enable_two_factor_requirement event. */
export type GitHub_OrgEnableTwoFactorRequirementAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.invite_member event. */
export type GitHub_OrgInviteMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  /** The email address of the organization invitation. */
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The organization invitation. */
  organizationInvitation?: Maybe<GitHub_OrganizationInvitation>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.invite_to_business event. */
export type GitHub_OrgInviteToBusinessAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_EnterpriseAuditEntryData & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The slug of the enterprise. */
  enterpriseSlug?: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>;
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.oauth_app_access_approved event. */
export type GitHub_OrgOauthAppAccessApprovedAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OauthApplicationAuditEntryData & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The name of the OAuth Application. */
  oauthApplicationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the OAuth Application */
  oauthApplicationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the OAuth Application */
  oauthApplicationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.oauth_app_access_denied event. */
export type GitHub_OrgOauthAppAccessDeniedAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OauthApplicationAuditEntryData & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The name of the OAuth Application. */
  oauthApplicationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the OAuth Application */
  oauthApplicationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the OAuth Application */
  oauthApplicationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.oauth_app_access_requested event. */
export type GitHub_OrgOauthAppAccessRequestedAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OauthApplicationAuditEntryData & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The name of the OAuth Application. */
  oauthApplicationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the OAuth Application */
  oauthApplicationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the OAuth Application */
  oauthApplicationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.remove_billing_manager event. */
export type GitHub_OrgRemoveBillingManagerAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The reason for the billing manager being removed. */
  reason?: Maybe<GitHub_OrgRemoveBillingManagerAuditEntryReason>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** The reason a billing manager was removed from an Organization. */
export type GitHub_OrgRemoveBillingManagerAuditEntryReason = 
  /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
  | 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
  /** SAML external identity missing */
  | 'SAML_EXTERNAL_IDENTITY_MISSING'
  /** SAML SSO enforcement requires an external identity */
  | 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY';

/** Audit log entry for a org.remove_member event. */
export type GitHub_OrgRemoveMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The types of membership the member has with the organization. */
  membershipTypes?: Maybe<Array<GitHub_OrgRemoveMemberAuditEntryMembershipType>>;
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The reason for the member being removed. */
  reason?: Maybe<GitHub_OrgRemoveMemberAuditEntryReason>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** The type of membership a user has with an Organization. */
export type GitHub_OrgRemoveMemberAuditEntryMembershipType = 
  /** A direct member is a user that is a member of the Organization. */
  | 'DIRECT_MEMBER'
  /**
   * Organization administrators have full access and can change several settings,
   * including the names of repositories that belong to the Organization and Owners
   * team membership. In addition, organization admins can delete the organization
   * and all of its repositories.
   */
  | 'ADMIN'
  /** A billing manager is a user who manages the billing settings for the Organization, such as updating payment information. */
  | 'BILLING_MANAGER'
  /**
   * An unaffiliated collaborator is a person who is not a member of the
   * Organization and does not have access to any repositories in the Organization.
   */
  | 'UNAFFILIATED'
  /**
   * An outside collaborator is a person who isn't explicitly a member of the
   * Organization, but who has Read, Write, or Admin permissions to one or more
   * repositories in the organization.
   */
  | 'OUTSIDE_COLLABORATOR';

/** The reason a member was removed from an Organization. */
export type GitHub_OrgRemoveMemberAuditEntryReason = 
  /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
  | 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
  /** SAML external identity missing */
  | 'SAML_EXTERNAL_IDENTITY_MISSING'
  /** SAML SSO enforcement requires an external identity */
  | 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
  /** User account has been deleted */
  | 'USER_ACCOUNT_DELETED'
  /** User was removed from organization during account recovery */
  | 'TWO_FACTOR_ACCOUNT_RECOVERY';

/** Audit log entry for a org.remove_outside_collaborator event. */
export type GitHub_OrgRemoveOutsideCollaboratorAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The types of membership the outside collaborator has with the organization. */
  membershipTypes?: Maybe<Array<GitHub_OrgRemoveOutsideCollaboratorAuditEntryMembershipType>>;
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The reason for the outside collaborator being removed from the Organization. */
  reason?: Maybe<GitHub_OrgRemoveOutsideCollaboratorAuditEntryReason>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** The type of membership a user has with an Organization. */
export type GitHub_OrgRemoveOutsideCollaboratorAuditEntryMembershipType = 
  /**
   * An outside collaborator is a person who isn't explicitly a member of the
   * Organization, but who has Read, Write, or Admin permissions to one or more
   * repositories in the organization.
   */
  | 'OUTSIDE_COLLABORATOR'
  /**
   * An unaffiliated collaborator is a person who is not a member of the
   * Organization and does not have access to any repositories in the organization.
   */
  | 'UNAFFILIATED'
  /** A billing manager is a user who manages the billing settings for the Organization, such as updating payment information. */
  | 'BILLING_MANAGER';

/** The reason an outside collaborator was removed from an Organization. */
export type GitHub_OrgRemoveOutsideCollaboratorAuditEntryReason = 
  /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
  | 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
  /** SAML external identity missing */
  | 'SAML_EXTERNAL_IDENTITY_MISSING';

/** Audit log entry for a org.restore_member event. */
export type GitHub_OrgRestoreMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The number of custom email routings for the restored member. */
  restoredCustomEmailRoutingsCount?: Maybe<Scalars['Int']>;
  /** The number of issue assignemnts for the restored member. */
  restoredIssueAssignmentsCount?: Maybe<Scalars['Int']>;
  /** Restored organization membership objects. */
  restoredMemberships?: Maybe<Array<GitHub_OrgRestoreMemberAuditEntryMembership>>;
  /** The number of restored memberships. */
  restoredMembershipsCount?: Maybe<Scalars['Int']>;
  /** The number of repositories of the restored member. */
  restoredRepositoriesCount?: Maybe<Scalars['Int']>;
  /** The number of starred repositories for the restored member. */
  restoredRepositoryStarsCount?: Maybe<Scalars['Int']>;
  /** The number of watched repositories for the restored member. */
  restoredRepositoryWatchesCount?: Maybe<Scalars['Int']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Types of memberships that can be restored for an Organization member. */
export type GitHub_OrgRestoreMemberAuditEntryMembership = GitHub_OrgRestoreMemberMembershipOrganizationAuditEntryData | GitHub_OrgRestoreMemberMembershipRepositoryAuditEntryData | GitHub_OrgRestoreMemberMembershipTeamAuditEntryData;

/** Metadata for an organization membership for org.restore_member actions */
export type GitHub_OrgRestoreMemberMembershipOrganizationAuditEntryData = GitHub_OrganizationAuditEntryData & {
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Metadata for a repository membership for org.restore_member actions */
export type GitHub_OrgRestoreMemberMembershipRepositoryAuditEntryData = GitHub_RepositoryAuditEntryData & {
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Metadata for a team membership for org.restore_member actions */
export type GitHub_OrgRestoreMemberMembershipTeamAuditEntryData = GitHub_TeamAuditEntryData & {
  /** The team associated with the action */
  team?: Maybe<GitHub_Team>;
  /** The name of the team */
  teamName?: Maybe<Scalars['String']>;
  /** The HTTP path for this team */
  teamResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for this team */
  teamUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.unblock_user */
export type GitHub_OrgUnblockUserAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user being unblocked by the organization. */
  blockedUser?: Maybe<GitHub_User>;
  /** The username of the blocked user. */
  blockedUserName?: Maybe<Scalars['String']>;
  /** The HTTP path for the blocked user. */
  blockedUserResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the blocked user. */
  blockedUserUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a org.update_default_repository_permission */
export type GitHub_OrgUpdateDefaultRepositoryPermissionAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The new default repository permission level for the organization. */
  permission?: Maybe<GitHub_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
  /** The former default repository permission level for the organization. */
  permissionWas?: Maybe<GitHub_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** The default permission a repository can have in an Organization. */
export type GitHub_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = 
  /** Can read and clone repositories. */
  | 'READ'
  /** Can read, clone and push to repositories. */
  | 'WRITE'
  /** Can read, clone, push, and add collaborators to repositories. */
  | 'ADMIN'
  /** No default permission value. */
  | 'NONE';

/** Audit log entry for a org.update_member event. */
export type GitHub_OrgUpdateMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The new member permission level for the organization. */
  permission?: Maybe<GitHub_OrgUpdateMemberAuditEntryPermission>;
  /** The former member permission level for the organization. */
  permissionWas?: Maybe<GitHub_OrgUpdateMemberAuditEntryPermission>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** The permissions available to members on an Organization. */
export type GitHub_OrgUpdateMemberAuditEntryPermission = 
  /** Can read and clone repositories. */
  | 'READ'
  /** Can read, clone, push, and add collaborators to repositories. */
  | 'ADMIN';

/** Audit log entry for a org.update_member_repository_creation_permission event. */
export type GitHub_OrgUpdateMemberRepositoryCreationPermissionAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** Can members create repositories in the organization. */
  canCreateRepositories?: Maybe<Scalars['Boolean']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The permission for visibility level of repositories for this organization. */
  visibility?: Maybe<GitHub_OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility>;
};

/** The permissions available for repository creation on an Organization. */
export type GitHub_OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = 
  /** All organization members are restricted from creating any repositories. */
  | 'ALL'
  /** All organization members are restricted from creating public repositories. */
  | 'PUBLIC'
  /** All organization members are allowed to create any repositories. */
  | 'NONE'
  /** All organization members are restricted from creating private repositories. */
  | 'PRIVATE'
  /** All organization members are restricted from creating internal repositories. */
  | 'INTERNAL'
  /** All organization members are restricted from creating public or internal repositories. */
  | 'PUBLIC_INTERNAL'
  /** All organization members are restricted from creating private or internal repositories. */
  | 'PRIVATE_INTERNAL'
  /** All organization members are restricted from creating public or private repositories. */
  | 'PUBLIC_PRIVATE';

/** Audit log entry for a org.update_member_repository_invitation_permission event. */
export type GitHub_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** Can outside collaborators be invited to repositories in the organization. */
  canInviteOutsideCollaboratorsToRepositories?: Maybe<Scalars['Boolean']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Information for an uploaded package. */
export type GitHub_Package = GitHub_Node & {
  id: Scalars['ID'];
  /** Find the latest version for the package. */
  latestVersion?: Maybe<GitHub_PackageVersion>;
  /** Identifies the name of the package. */
  name: Scalars['String'];
  /** Identifies the type of the package. */
  packageType: GitHub_PackageType;
  /** The repository this package belongs to. */
  repository?: Maybe<GitHub_Repository>;
  /** Statistics about package activity. */
  statistics?: Maybe<GitHub_PackageStatistics>;
  /** Find package version by version string. */
  version?: Maybe<GitHub_PackageVersion>;
  /** list of versions for this package */
  versions: GitHub_PackageVersionConnection;
};


/** Information for an uploaded package. */
export type GitHub_PackageVersionArgs = {
  version: Scalars['String'];
};


/** Information for an uploaded package. */
export type GitHub_PackageVersionsArgs = {
  orderBy?: Maybe<GitHub_PackageVersionOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for Package. */
export type GitHub_PackageConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PackageEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Package>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_PackageEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Package>;
};

/** A file in a package version. */
export type GitHub_PackageFile = GitHub_Node & {
  id: Scalars['ID'];
  /** MD5 hash of the file. */
  md5?: Maybe<Scalars['String']>;
  /** Name of the file. */
  name: Scalars['String'];
  /** The package version this file belongs to. */
  packageVersion?: Maybe<GitHub_PackageVersion>;
  /** SHA1 hash of the file. */
  sha1?: Maybe<Scalars['String']>;
  /** SHA256 hash of the file. */
  sha256?: Maybe<Scalars['String']>;
  /** Size of the file in bytes. */
  size?: Maybe<Scalars['Int']>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** URL to download the asset. */
  url?: Maybe<Scalars['GitHub_URI']>;
};

/** The connection type for PackageFile. */
export type GitHub_PackageFileConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PackageFileEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PackageFile>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_PackageFileEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PackageFile>;
};

/** Ways in which lists of package files can be ordered upon return. */
export type GitHub_PackageFileOrder = {
  /** The field in which to order package files by. */
  field?: Maybe<GitHub_PackageFileOrderField>;
  /** The direction in which to order package files by the specified field. */
  direction?: Maybe<GitHub_OrderDirection>;
};

/** Properties by which package file connections can be ordered. */
export type GitHub_PackageFileOrderField = 
  /** Order package files by creation time */
  | 'CREATED_AT';

/** Ways in which lists of packages can be ordered upon return. */
export type GitHub_PackageOrder = {
  /** The field in which to order packages by. */
  field?: Maybe<GitHub_PackageOrderField>;
  /** The direction in which to order packages by the specified field. */
  direction?: Maybe<GitHub_OrderDirection>;
};

/** Properties by which package connections can be ordered. */
export type GitHub_PackageOrderField = 
  /** Order packages by creation time */
  | 'CREATED_AT';

/** Represents an owner of a package. */
export type GitHub_PackageOwner = {
  id: Scalars['ID'];
  /** A list of packages under the owner. */
  packages: GitHub_PackageConnection;
};


/** Represents an owner of a package. */
export type GitHub_PackageOwnerPackagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  repositoryId?: Maybe<Scalars['ID']>;
  packageType?: Maybe<GitHub_PackageType>;
  orderBy?: Maybe<GitHub_PackageOrder>;
};

/** Represents a object that contains package activity statistics such as downloads. */
export type GitHub_PackageStatistics = {
  /** Number of times the package was downloaded since it was created. */
  downloadsTotalCount: Scalars['Int'];
};

/** A version tag contains the mapping between a tag name and a version. */
export type GitHub_PackageTag = GitHub_Node & {
  id: Scalars['ID'];
  /** Identifies the tag name of the version. */
  name: Scalars['String'];
  /** Version that the tag is associated with. */
  version?: Maybe<GitHub_PackageVersion>;
};

/** The possible types of a package. */
export type GitHub_PackageType = 
  /** An npm package. */
  | 'NPM'
  /** A rubygems package. */
  | 'RUBYGEMS'
  /** A maven package. */
  | 'MAVEN'
  /** A docker image. */
  | 'DOCKER'
  /** A debian package. */
  | 'DEBIAN'
  /** A nuget package. */
  | 'NUGET'
  /** A python package. */
  | 'PYPI';

/** Information about a specific package version. */
export type GitHub_PackageVersion = GitHub_Node & {
  /** List of files associated with this package version */
  files: GitHub_PackageFileConnection;
  id: Scalars['ID'];
  /** The package associated with this version. */
  package?: Maybe<GitHub_Package>;
  /** The platform this version was built for. */
  platform?: Maybe<Scalars['String']>;
  /** Whether or not this version is a pre-release. */
  preRelease: Scalars['Boolean'];
  /** The README of this package version. */
  readme?: Maybe<Scalars['String']>;
  /** The release associated with this package version. */
  release?: Maybe<GitHub_Release>;
  /** Statistics about package activity. */
  statistics?: Maybe<GitHub_PackageVersionStatistics>;
  /** The package version summary. */
  summary?: Maybe<Scalars['String']>;
  /** The version string. */
  version: Scalars['String'];
};


/** Information about a specific package version. */
export type GitHub_PackageVersionFilesArgs = {
  orderBy?: Maybe<GitHub_PackageFileOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for PackageVersion. */
export type GitHub_PackageVersionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PackageVersionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PackageVersion>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_PackageVersionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PackageVersion>;
};

/** Ways in which lists of package versions can be ordered upon return. */
export type GitHub_PackageVersionOrder = {
  /** The field in which to order package versions by. */
  field?: Maybe<GitHub_PackageVersionOrderField>;
  /** The direction in which to order package versions by the specified field. */
  direction?: Maybe<GitHub_OrderDirection>;
};

/** Properties by which package version connections can be ordered. */
export type GitHub_PackageVersionOrderField = 
  /** Order package versions by creation time */
  | 'CREATED_AT';

/** Represents a object that contains package version activity statistics such as downloads. */
export type GitHub_PackageVersionStatistics = {
  /** Number of times the package was downloaded since it was created. */
  downloadsTotalCount: Scalars['Int'];
};

/** Information about pagination in a connection. */
export type GitHub_PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Types that can grant permissions on a repository to a user */
export type GitHub_PermissionGranter = GitHub_Organization | GitHub_Repository | GitHub_Team;

/** A level of permission and source for a user's access to a repository. */
export type GitHub_PermissionSource = {
  /** The organization the repository belongs to. */
  organization: GitHub_Organization;
  /** The level of access this source has granted to the user. */
  permission: GitHub_DefaultRepositoryPermissionField;
  /** The source of this permission. */
  source: GitHub_PermissionGranter;
};

/** Types that can be pinned to a profile page. */
export type GitHub_PinnableItem = GitHub_Gist | GitHub_Repository;

/** The connection type for PinnableItem. */
export type GitHub_PinnableItemConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PinnableItemEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PinnableItem>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_PinnableItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PinnableItem>;
};

/** Represents items that can be pinned to a profile page or dashboard. */
export type GitHub_PinnableItemType = 
  /** A repository. */
  | 'REPOSITORY'
  /** A gist. */
  | 'GIST'
  /** An issue. */
  | 'ISSUE'
  /** A project. */
  | 'PROJECT'
  /** A pull request. */
  | 'PULL_REQUEST'
  /** A user. */
  | 'USER'
  /** An organization. */
  | 'ORGANIZATION'
  /** A team. */
  | 'TEAM';

/** Represents a 'pinned' event on a given issue or pull request. */
export type GitHub_PinnedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** Identifies the issue associated with the event. */
  issue: GitHub_Issue;
};


/** Audit log entry for a private_repository_forking.disable event. */
export type GitHub_PrivateRepositoryForkingDisableAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_EnterpriseAuditEntryData & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The slug of the enterprise. */
  enterpriseSlug?: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>;
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a private_repository_forking.enable event. */
export type GitHub_PrivateRepositoryForkingEnableAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_EnterpriseAuditEntryData & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The slug of the enterprise. */
  enterpriseSlug?: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>;
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/**
 * A curatable list of repositories relating to a repository owner, which defaults
 * to showing the most popular repositories they own.
 */
export type GitHub_ProfileItemShowcase = {
  /** Whether or not the owner has pinned any repositories or gists. */
  hasPinnedItems: Scalars['Boolean'];
  /**
   * The repositories and gists in the showcase. If the profile owner has any
   * pinned items, those will be returned. Otherwise, the profile owner's popular
   * repositories will be returned.
   */
  items: GitHub_PinnableItemConnection;
};


/**
 * A curatable list of repositories relating to a repository owner, which defaults
 * to showing the most popular repositories they own.
 */
export type GitHub_ProfileItemShowcaseItemsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Represents any entity on GitHub that has a profile page. */
export type GitHub_ProfileOwner = {
  /** Determine if this repository owner has any items that can be pinned to their profile. */
  anyPinnableItems: Scalars['Boolean'];
  /** The public profile email. */
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /**
   * Showcases a selection of repositories and gists that the profile owner has
   * either curated or that have been selected automatically based on popularity.
   */
  itemShowcase: GitHub_ProfileItemShowcase;
  /** The public profile location. */
  location?: Maybe<Scalars['String']>;
  /** The username used to login. */
  login: Scalars['String'];
  /** The public profile name. */
  name?: Maybe<Scalars['String']>;
  /** A list of repositories and gists this profile owner can pin to their profile. */
  pinnableItems: GitHub_PinnableItemConnection;
  /** A list of repositories and gists this profile owner has pinned to their profile */
  pinnedItems: GitHub_PinnableItemConnection;
  /** Returns how many more items this profile owner can pin to their profile. */
  pinnedItemsRemaining: Scalars['Int'];
  /** Can the viewer pin repositories and gists to the profile? */
  viewerCanChangePinnedItems: Scalars['Boolean'];
  /** The public profile website URL. */
  websiteUrl?: Maybe<Scalars['GitHub_URI']>;
};


/** Represents any entity on GitHub that has a profile page. */
export type GitHub_ProfileOwnerAnyPinnableItemsArgs = {
  type?: Maybe<GitHub_PinnableItemType>;
};


/** Represents any entity on GitHub that has a profile page. */
export type GitHub_ProfileOwnerPinnableItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents any entity on GitHub that has a profile page. */
export type GitHub_ProfileOwnerPinnedItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Projects manage issues, pull requests and notes within a project owner. */
export type GitHub_Project = GitHub_Node & GitHub_Closable & GitHub_Updatable & {
  /** The project's description body. */
  body?: Maybe<Scalars['String']>;
  /** The projects description body rendered to HTML. */
  bodyHTML: Scalars['GitHub_HTML'];
  /** `true` if the object is closed (definition of closed may depend on type) */
  closed: Scalars['Boolean'];
  /** Identifies the date and time when the object was closed. */
  closedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** List of columns in the project */
  columns: GitHub_ProjectColumnConnection;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The actor who originally created the project. */
  creator?: Maybe<GitHub_Actor>;
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  /** The project's name. */
  name: Scalars['String'];
  /** The project's number. */
  number: Scalars['Int'];
  /** The project's owner. Currently limited to repositories, organizations, and users. */
  owner: GitHub_ProjectOwner;
  /** List of pending cards in this project */
  pendingCards: GitHub_ProjectCardConnection;
  /** The HTTP path for this project */
  resourcePath: Scalars['GitHub_URI'];
  /** Whether the project is open or closed. */
  state: GitHub_ProjectState;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this project */
  url: Scalars['GitHub_URI'];
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: Scalars['Boolean'];
};


/** Projects manage issues, pull requests and notes within a project owner. */
export type GitHub_ProjectColumnsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Projects manage issues, pull requests and notes within a project owner. */
export type GitHub_ProjectPendingCardsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<Array<Maybe<GitHub_ProjectCardArchivedState>>>;
};

/** A card in a project. */
export type GitHub_ProjectCard = GitHub_Node & {
  /**
   * The project column this card is associated under. A card may only belong to one
   * project column at a time. The column field will be null if the card is created
   * in a pending state and has yet to be associated with a column. Once cards are
   * associated with a column, they will not become pending in the future.
   */
  column?: Maybe<GitHub_ProjectColumn>;
  /** The card content item */
  content?: Maybe<GitHub_ProjectCardItem>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The actor who created this card */
  creator?: Maybe<GitHub_Actor>;
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  /** Whether the card is archived */
  isArchived: Scalars['Boolean'];
  /** The card note */
  note?: Maybe<Scalars['String']>;
  /** The project that contains this card. */
  project: GitHub_Project;
  /** The HTTP path for this card */
  resourcePath: Scalars['GitHub_URI'];
  /** The state of ProjectCard */
  state?: Maybe<GitHub_ProjectCardState>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this card */
  url: Scalars['GitHub_URI'];
};

/** The possible archived states of a project card. */
export type GitHub_ProjectCardArchivedState = 
  /** A project card that is archived */
  | 'ARCHIVED'
  /** A project card that is not archived */
  | 'NOT_ARCHIVED';

/** The connection type for ProjectCard. */
export type GitHub_ProjectCardConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ProjectCardEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_ProjectCard>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_ProjectCardEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_ProjectCard>;
};

/** Types that can be inside Project Cards. */
export type GitHub_ProjectCardItem = GitHub_Issue | GitHub_PullRequest;

/** Various content states of a ProjectCard */
export type GitHub_ProjectCardState = 
  /** The card has content only. */
  | 'CONTENT_ONLY'
  /** The card has a note only. */
  | 'NOTE_ONLY'
  /** The card is redacted. */
  | 'REDACTED';

/** A column inside a project. */
export type GitHub_ProjectColumn = GitHub_Node & {
  /** List of cards in the column */
  cards: GitHub_ProjectCardConnection;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  /** The project column's name. */
  name: Scalars['String'];
  /** The project that contains this column. */
  project: GitHub_Project;
  /** The semantic purpose of the column */
  purpose?: Maybe<GitHub_ProjectColumnPurpose>;
  /** The HTTP path for this project column */
  resourcePath: Scalars['GitHub_URI'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this project column */
  url: Scalars['GitHub_URI'];
};


/** A column inside a project. */
export type GitHub_ProjectColumnCardsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<Array<Maybe<GitHub_ProjectCardArchivedState>>>;
};

/** The connection type for ProjectColumn. */
export type GitHub_ProjectColumnConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ProjectColumnEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_ProjectColumn>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_ProjectColumnEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_ProjectColumn>;
};

/** The semantic purpose of the column - todo, in progress, or done. */
export type GitHub_ProjectColumnPurpose = 
  /** The column contains cards still to be worked on */
  | 'TODO'
  /** The column contains cards which are currently being worked on */
  | 'IN_PROGRESS'
  /** The column contains cards which are complete */
  | 'DONE';

/** A list of projects associated with the owner. */
export type GitHub_ProjectConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ProjectEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Project>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_ProjectEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Project>;
};

/** Ways in which lists of projects can be ordered upon return. */
export type GitHub_ProjectOrder = {
  /** The field in which to order projects by. */
  field: GitHub_ProjectOrderField;
  /** The direction in which to order projects by the specified field. */
  direction: GitHub_OrderDirection;
};

/** Properties by which project connections can be ordered. */
export type GitHub_ProjectOrderField = 
  /** Order projects by creation time */
  | 'CREATED_AT'
  /** Order projects by update time */
  | 'UPDATED_AT'
  /** Order projects by name */
  | 'NAME';

/** Represents an owner of a Project. */
export type GitHub_ProjectOwner = {
  id: Scalars['ID'];
  /** Find project by number. */
  project?: Maybe<GitHub_Project>;
  /** A list of projects under the owner. */
  projects: GitHub_ProjectConnection;
  /** The HTTP path listing owners projects */
  projectsResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL listing owners projects */
  projectsUrl: Scalars['GitHub_URI'];
  /** Can the current viewer create new projects on this owner. */
  viewerCanCreateProjects: Scalars['Boolean'];
};


/** Represents an owner of a Project. */
export type GitHub_ProjectOwnerProjectArgs = {
  number: Scalars['Int'];
};


/** Represents an owner of a Project. */
export type GitHub_ProjectOwnerProjectsArgs = {
  orderBy?: Maybe<GitHub_ProjectOrder>;
  search?: Maybe<Scalars['String']>;
  states?: Maybe<Array<GitHub_ProjectState>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** State of the project; either 'open' or 'closed' */
export type GitHub_ProjectState = 
  /** The project is open. */
  | 'OPEN'
  /** The project is closed. */
  | 'CLOSED';

/** GitHub-provided templates for Projects */
export type GitHub_ProjectTemplate = 
  /** Create a board with columns for To do, In progress and Done. */
  | 'BASIC_KANBAN'
  /** Create a board with v2 triggers to automatically move cards across To do, In progress and Done columns. */
  | 'AUTOMATED_KANBAN_V2'
  /** Create a board with triggers to automatically move cards across columns with review automation. */
  | 'AUTOMATED_REVIEWS_KANBAN'
  /** Create a board to triage and prioritize bugs with To do, priority, and Done columns. */
  | 'BUG_TRIAGE';

/** A user's public key. */
export type GitHub_PublicKey = GitHub_Node & {
  /** The last time this authorization was used to perform an action. Values will be null for keys not owned by the user. */
  accessedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /**
   * Identifies the date and time when the key was created. Keys created before
   * March 5th, 2014 have inaccurate values. Values will be null for keys not owned by the user.
   */
  createdAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** The fingerprint for this PublicKey. */
  fingerprint: Scalars['String'];
  id: Scalars['ID'];
  /** Whether this PublicKey is read-only or not. Values will be null for keys not owned by the user. */
  isReadOnly?: Maybe<Scalars['Boolean']>;
  /** The public key string. */
  key: Scalars['String'];
  /**
   * Identifies the date and time when the key was updated. Keys created before
   * March 5th, 2014 may have inaccurate values. Values will be null for keys not
   * owned by the user.
   */
  updatedAt?: Maybe<Scalars['GitHub_DateTime']>;
};

/** The connection type for PublicKey. */
export type GitHub_PublicKeyConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PublicKeyEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PublicKey>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_PublicKeyEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PublicKey>;
};

/** A repository pull request. */
export type GitHub_PullRequest = GitHub_Node & GitHub_Assignable & GitHub_Closable & GitHub_Comment & GitHub_Updatable & GitHub_UpdatableComment & GitHub_Labelable & GitHub_Lockable & GitHub_Reactable & GitHub_RepositoryNode & GitHub_Subscribable & GitHub_UniformResourceLocatable & {
  /** Reason that the conversation was locked. */
  activeLockReason?: Maybe<GitHub_LockReason>;
  /** The number of additions in this pull request. */
  additions: Scalars['Int'];
  /** A list of Users assigned to this object. */
  assignees: GitHub_UserConnection;
  /** The actor who authored the comment. */
  author?: Maybe<GitHub_Actor>;
  /** Author's association with the subject of the comment. */
  authorAssociation: GitHub_CommentAuthorAssociation;
  /** Identifies the base Ref associated with the pull request. */
  baseRef?: Maybe<GitHub_Ref>;
  /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
  baseRefName: Scalars['String'];
  /** Identifies the oid of the base ref associated with the pull request, even if the ref has been deleted. */
  baseRefOid: Scalars['GitHub_GitObjectID'];
  /** The repository associated with this pull request's base Ref. */
  baseRepository?: Maybe<GitHub_Repository>;
  /** The body as Markdown. */
  body: Scalars['String'];
  /** The body rendered to HTML. */
  bodyHTML: Scalars['GitHub_HTML'];
  /** The body rendered to text. */
  bodyText: Scalars['String'];
  /** The number of changed files in this pull request. */
  changedFiles: Scalars['Int'];
  /** The HTTP path for the checks of this pull request. */
  checksResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for the checks of this pull request. */
  checksUrl: Scalars['GitHub_URI'];
  /** `true` if the pull request is closed */
  closed: Scalars['Boolean'];
  /** Identifies the date and time when the object was closed. */
  closedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** A list of comments associated with the pull request. */
  comments: GitHub_IssueCommentConnection;
  /** A list of commits present in this pull request's head branch not present in the base branch. */
  commits: GitHub_PullRequestCommitConnection;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Check if this comment was created via an email reply. */
  createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The number of deletions in this pull request. */
  deletions: Scalars['Int'];
  /** The actor who edited this pull request's body. */
  editor?: Maybe<GitHub_Actor>;
  /** Lists the files changed within this pull request. */
  files?: Maybe<GitHub_PullRequestChangedFileConnection>;
  /** Identifies the head Ref associated with the pull request. */
  headRef?: Maybe<GitHub_Ref>;
  /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
  headRefName: Scalars['String'];
  /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */
  headRefOid: Scalars['GitHub_GitObjectID'];
  /** The repository associated with this pull request's head Ref. */
  headRepository?: Maybe<GitHub_Repository>;
  /** The owner of the repository associated with this pull request's head Ref. */
  headRepositoryOwner?: Maybe<GitHub_RepositoryOwner>;
  /** The hovercard information for this issue */
  hovercard: GitHub_Hovercard;
  id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: Scalars['Boolean'];
  /** The head and base repositories are different. */
  isCrossRepository: Scalars['Boolean'];
  /** Identifies if the pull request is a draft. */
  isDraft: Scalars['Boolean'];
  /** A list of labels associated with the object. */
  labels?: Maybe<GitHub_LabelConnection>;
  /** The moment the editor made the last edit */
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** `true` if the pull request is locked */
  locked: Scalars['Boolean'];
  /** Indicates whether maintainers can modify the pull request. */
  maintainerCanModify: Scalars['Boolean'];
  /** The commit that was created when this pull request was merged. */
  mergeCommit?: Maybe<GitHub_Commit>;
  /** Whether or not the pull request can be merged based on the existence of merge conflicts. */
  mergeable: GitHub_MergeableState;
  /** Whether or not the pull request was merged. */
  merged: Scalars['Boolean'];
  /** The date and time that the pull request was merged. */
  mergedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** The actor who merged the pull request. */
  mergedBy?: Maybe<GitHub_Actor>;
  /** Identifies the milestone associated with the pull request. */
  milestone?: Maybe<GitHub_Milestone>;
  /** Identifies the pull request number. */
  number: Scalars['Int'];
  /** A list of Users that are participating in the Pull Request conversation. */
  participants: GitHub_UserConnection;
  /** The permalink to the pull request. */
  permalink: Scalars['GitHub_URI'];
  /**
   * The commit that GitHub automatically generated to test if this pull request
   * could be merged. This field will not return a value if the pull request is
   * merged, or if the test merge commit is still being generated. See the
   * `mergeable` field for more details on the mergeability of the pull request.
   */
  potentialMergeCommit?: Maybe<GitHub_Commit>;
  /** List of project cards associated with this pull request. */
  projectCards: GitHub_ProjectCardConnection;
  /** Identifies when the comment was published at. */
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  reactions: GitHub_ReactionConnection;
  /** The repository associated with this node. */
  repository: GitHub_Repository;
  /** The HTTP path for this pull request. */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP path for reverting this pull request. */
  revertResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for reverting this pull request. */
  revertUrl: Scalars['GitHub_URI'];
  /** The current status of this pull request with respect to code review. */
  reviewDecision?: Maybe<GitHub_PullRequestReviewDecision>;
  /** A list of review requests associated with the pull request. */
  reviewRequests?: Maybe<GitHub_ReviewRequestConnection>;
  /** The list of all review threads for this pull request. */
  reviewThreads: GitHub_PullRequestReviewThreadConnection;
  /** A list of reviews associated with the pull request. */
  reviews?: Maybe<GitHub_PullRequestReviewConnection>;
  /** Identifies the state of the pull request. */
  state: GitHub_PullRequestState;
  /** A list of reviewer suggestions based on commit history and past review comments. */
  suggestedReviewers: Array<Maybe<GitHub_SuggestedReviewer>>;
  /**
   * A list of events, comments, commits, etc. associated with the pull request.
   * @deprecated `timeline` will be removed Use PullRequest.timelineItems instead. Removal on 2020-10-01 UTC.
   */
  timeline: GitHub_PullRequestTimelineConnection;
  /** A list of events, comments, commits, etc. associated with the pull request. */
  timelineItems: GitHub_PullRequestTimelineItemsConnection;
  /** Identifies the pull request title. */
  title: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this pull request. */
  url: Scalars['GitHub_URI'];
  /** A list of edits to this content. */
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
  /** Whether or not the viewer can apply suggestion. */
  viewerCanApplySuggestion: Scalars['Boolean'];
  /** Can user react to this subject */
  viewerCanReact: Scalars['Boolean'];
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  viewerDidAuthor: Scalars['Boolean'];
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: Maybe<GitHub_SubscriptionState>;
};


/** A repository pull request. */
export type GitHub_PullRequestAssigneesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
export type GitHub_PullRequestCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
export type GitHub_PullRequestCommitsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
export type GitHub_PullRequestFilesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
export type GitHub_PullRequestHovercardArgs = {
  includeNotificationContexts?: Maybe<Scalars['Boolean']>;
};


/** A repository pull request. */
export type GitHub_PullRequestLabelsArgs = {
  orderBy?: Maybe<GitHub_LabelOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
export type GitHub_PullRequestParticipantsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
export type GitHub_PullRequestProjectCardsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<Array<Maybe<GitHub_ProjectCardArchivedState>>>;
};


/** A repository pull request. */
export type GitHub_PullRequestReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<GitHub_ReactionContent>;
  orderBy?: Maybe<GitHub_ReactionOrder>;
};


/** A repository pull request. */
export type GitHub_PullRequestReviewRequestsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
export type GitHub_PullRequestReviewThreadsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
export type GitHub_PullRequestReviewsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  states?: Maybe<Array<GitHub_PullRequestReviewState>>;
  author?: Maybe<Scalars['String']>;
};


/** A repository pull request. */
export type GitHub_PullRequestTimelineArgs = {
  since?: Maybe<Scalars['GitHub_DateTime']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
export type GitHub_PullRequestTimelineItemsArgs = {
  since?: Maybe<Scalars['GitHub_DateTime']>;
  skip?: Maybe<Scalars['Int']>;
  itemTypes?: Maybe<Array<GitHub_PullRequestTimelineItemsItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
export type GitHub_PullRequestUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A file changed in a pull request. */
export type GitHub_PullRequestChangedFile = {
  /** The number of additions to the file. */
  additions: Scalars['Int'];
  /** The number of deletions to the file. */
  deletions: Scalars['Int'];
  /** The path of the file. */
  path: Scalars['String'];
};

/** The connection type for PullRequestChangedFile. */
export type GitHub_PullRequestChangedFileConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PullRequestChangedFileEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestChangedFile>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_PullRequestChangedFileEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PullRequestChangedFile>;
};

/** Represents a Git commit part of a pull request. */
export type GitHub_PullRequestCommit = GitHub_Node & GitHub_UniformResourceLocatable & {
  /** The Git commit object */
  commit: GitHub_Commit;
  id: Scalars['ID'];
  /** The pull request this commit belongs to */
  pullRequest: GitHub_PullRequest;
  /** The HTTP path for this pull request commit */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this pull request commit */
  url: Scalars['GitHub_URI'];
};

/** Represents a commit comment thread part of a pull request. */
export type GitHub_PullRequestCommitCommentThread = GitHub_Node & GitHub_RepositoryNode & {
  /** The comments that exist in this thread. */
  comments: GitHub_CommitCommentConnection;
  /** The commit the comments were made on. */
  commit: GitHub_Commit;
  id: Scalars['ID'];
  /** The file the comments were made on. */
  path?: Maybe<Scalars['String']>;
  /** The position in the diff for the commit that the comment was made on. */
  position?: Maybe<Scalars['Int']>;
  /** The pull request this commit comment thread belongs to */
  pullRequest: GitHub_PullRequest;
  /** The repository associated with this node. */
  repository: GitHub_Repository;
};


/** Represents a commit comment thread part of a pull request. */
export type GitHub_PullRequestCommitCommentThreadCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for PullRequestCommit. */
export type GitHub_PullRequestCommitConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PullRequestCommitEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestCommit>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_PullRequestCommitEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PullRequestCommit>;
};

/** The connection type for PullRequest. */
export type GitHub_PullRequestConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PullRequestEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PullRequest>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** This aggregates pull requests opened by a user within one repository. */
export type GitHub_PullRequestContributionsByRepository = {
  /** The pull request contributions. */
  contributions: GitHub_CreatedPullRequestContributionConnection;
  /** The repository in which the pull requests were opened. */
  repository: GitHub_Repository;
};


/** This aggregates pull requests opened by a user within one repository. */
export type GitHub_PullRequestContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_ContributionOrder>;
};

/** An edge in a connection. */
export type GitHub_PullRequestEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PullRequest>;
};

/** Represents available types of methods to use when merging a pull request. */
export type GitHub_PullRequestMergeMethod = 
  /** Add all commits from the head branch to the base branch with a merge commit. */
  | 'MERGE'
  /** Combine all commits from the head branch into a single commit in the base branch. */
  | 'SQUASH'
  /** Add all commits from the head branch onto the base branch individually. */
  | 'REBASE';

/** Ways in which lists of issues can be ordered upon return. */
export type GitHub_PullRequestOrder = {
  /** The field in which to order pull requests by. */
  field: GitHub_PullRequestOrderField;
  /** The direction in which to order pull requests by the specified field. */
  direction: GitHub_OrderDirection;
};

/** Properties by which pull_requests connections can be ordered. */
export type GitHub_PullRequestOrderField = 
  /** Order pull_requests by creation time */
  | 'CREATED_AT'
  /** Order pull_requests by update time */
  | 'UPDATED_AT';

/** A review object for a given pull request. */
export type GitHub_PullRequestReview = GitHub_Node & GitHub_Comment & GitHub_Deletable & GitHub_Updatable & GitHub_UpdatableComment & GitHub_Reactable & GitHub_RepositoryNode & {
  /** The actor who authored the comment. */
  author?: Maybe<GitHub_Actor>;
  /** Author's association with the subject of the comment. */
  authorAssociation: GitHub_CommentAuthorAssociation;
  /** Identifies the pull request review body. */
  body: Scalars['String'];
  /** The body rendered to HTML. */
  bodyHTML: Scalars['GitHub_HTML'];
  /** The body of this review rendered as plain text. */
  bodyText: Scalars['String'];
  /** A list of review comments for the current pull request review. */
  comments: GitHub_PullRequestReviewCommentConnection;
  /** Identifies the commit associated with this pull request review. */
  commit?: Maybe<GitHub_Commit>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Check if this comment was created via an email reply. */
  createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The actor who edited the comment. */
  editor?: Maybe<GitHub_Actor>;
  id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: Scalars['Boolean'];
  /** The moment the editor made the last edit */
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** A list of teams that this review was made on behalf of. */
  onBehalfOf: GitHub_TeamConnection;
  /** Identifies when the comment was published at. */
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** Identifies the pull request associated with this pull request review. */
  pullRequest: GitHub_PullRequest;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  reactions: GitHub_ReactionConnection;
  /** The repository associated with this node. */
  repository: GitHub_Repository;
  /** The HTTP path permalink for this PullRequestReview. */
  resourcePath: Scalars['GitHub_URI'];
  /** Identifies the current state of the pull request review. */
  state: GitHub_PullRequestReviewState;
  /** Identifies when the Pull Request Review was submitted */
  submittedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL permalink for this PullRequestReview. */
  url: Scalars['GitHub_URI'];
  /** A list of edits to this content. */
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: Scalars['Boolean'];
  /** Can user react to this subject */
  viewerCanReact: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  viewerDidAuthor: Scalars['Boolean'];
};


/** A review object for a given pull request. */
export type GitHub_PullRequestReviewCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A review object for a given pull request. */
export type GitHub_PullRequestReviewOnBehalfOfArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A review object for a given pull request. */
export type GitHub_PullRequestReviewReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<GitHub_ReactionContent>;
  orderBy?: Maybe<GitHub_ReactionOrder>;
};


/** A review object for a given pull request. */
export type GitHub_PullRequestReviewUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A review comment associated with a given repository pull request. */
export type GitHub_PullRequestReviewComment = GitHub_Node & GitHub_Comment & GitHub_Deletable & GitHub_Minimizable & GitHub_Updatable & GitHub_UpdatableComment & GitHub_Reactable & GitHub_RepositoryNode & {
  /** The actor who authored the comment. */
  author?: Maybe<GitHub_Actor>;
  /** Author's association with the subject of the comment. */
  authorAssociation: GitHub_CommentAuthorAssociation;
  /** The comment body of this review comment. */
  body: Scalars['String'];
  /** The body rendered to HTML. */
  bodyHTML: Scalars['GitHub_HTML'];
  /** The comment body of this review comment rendered as plain text. */
  bodyText: Scalars['String'];
  /** Identifies the commit associated with the comment. */
  commit?: Maybe<GitHub_Commit>;
  /** Identifies when the comment was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Check if this comment was created via an email reply. */
  createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The diff hunk to which the comment applies. */
  diffHunk: Scalars['String'];
  /** Identifies when the comment was created in a draft state. */
  draftedAt: Scalars['GitHub_DateTime'];
  /** The actor who edited the comment. */
  editor?: Maybe<GitHub_Actor>;
  id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: Scalars['Boolean'];
  /** Returns whether or not a comment has been minimized. */
  isMinimized: Scalars['Boolean'];
  /** The moment the editor made the last edit */
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** Returns why the comment was minimized. */
  minimizedReason?: Maybe<Scalars['String']>;
  /** Identifies the original commit associated with the comment. */
  originalCommit?: Maybe<GitHub_Commit>;
  /** The original line index in the diff to which the comment applies. */
  originalPosition: Scalars['Int'];
  /** Identifies when the comment body is outdated */
  outdated: Scalars['Boolean'];
  /** The path to which the comment applies. */
  path: Scalars['String'];
  /** The line index in the diff to which the comment applies. */
  position?: Maybe<Scalars['Int']>;
  /** Identifies when the comment was published at. */
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** The pull request associated with this review comment. */
  pullRequest: GitHub_PullRequest;
  /** The pull request review associated with this review comment. */
  pullRequestReview?: Maybe<GitHub_PullRequestReview>;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  reactions: GitHub_ReactionConnection;
  /** The comment this is a reply to. */
  replyTo?: Maybe<GitHub_PullRequestReviewComment>;
  /** The repository associated with this node. */
  repository: GitHub_Repository;
  /** The HTTP path permalink for this review comment. */
  resourcePath: Scalars['GitHub_URI'];
  /** Identifies the state of the comment. */
  state: GitHub_PullRequestReviewCommentState;
  /** Identifies when the comment was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL permalink for this review comment. */
  url: Scalars['GitHub_URI'];
  /** A list of edits to this content. */
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: Scalars['Boolean'];
  /** Check if the current viewer can minimize this object. */
  viewerCanMinimize: Scalars['Boolean'];
  /** Can user react to this subject */
  viewerCanReact: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  viewerDidAuthor: Scalars['Boolean'];
};


/** A review comment associated with a given repository pull request. */
export type GitHub_PullRequestReviewCommentReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<GitHub_ReactionContent>;
  orderBy?: Maybe<GitHub_ReactionOrder>;
};


/** A review comment associated with a given repository pull request. */
export type GitHub_PullRequestReviewCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for PullRequestReviewComment. */
export type GitHub_PullRequestReviewCommentConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PullRequestReviewCommentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestReviewComment>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_PullRequestReviewCommentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PullRequestReviewComment>;
};

/** The possible states of a pull request review comment. */
export type GitHub_PullRequestReviewCommentState = 
  /** A comment that is part of a pending review */
  | 'PENDING'
  /** A comment that is part of a submitted review */
  | 'SUBMITTED';

/** The connection type for PullRequestReview. */
export type GitHub_PullRequestReviewConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PullRequestReviewEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestReview>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** This aggregates pull request reviews made by a user within one repository. */
export type GitHub_PullRequestReviewContributionsByRepository = {
  /** The pull request review contributions. */
  contributions: GitHub_CreatedPullRequestReviewContributionConnection;
  /** The repository in which the pull request reviews were made. */
  repository: GitHub_Repository;
};


/** This aggregates pull request reviews made by a user within one repository. */
export type GitHub_PullRequestReviewContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_ContributionOrder>;
};

/** The review status of a pull request. */
export type GitHub_PullRequestReviewDecision = 
  /** Changes have been requested on the pull request. */
  | 'CHANGES_REQUESTED'
  /** The pull request has received an approving review. */
  | 'APPROVED'
  /** A review is required before the pull request can be merged. */
  | 'REVIEW_REQUIRED';

/** An edge in a connection. */
export type GitHub_PullRequestReviewEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PullRequestReview>;
};

/** The possible events to perform on a pull request review. */
export type GitHub_PullRequestReviewEvent = 
  /** Submit general feedback without explicit approval. */
  | 'COMMENT'
  /** Submit feedback and approve merging these changes. */
  | 'APPROVE'
  /** Submit feedback that must be addressed before merging. */
  | 'REQUEST_CHANGES'
  /** Dismiss review so it now longer effects merging. */
  | 'DISMISS';

/** The possible states of a pull request review. */
export type GitHub_PullRequestReviewState = 
  /** A review that has not yet been submitted. */
  | 'PENDING'
  /** An informational review. */
  | 'COMMENTED'
  /** A review allowing the pull request to merge. */
  | 'APPROVED'
  /** A review blocking the pull request from merging. */
  | 'CHANGES_REQUESTED'
  /** A review that has been dismissed. */
  | 'DISMISSED';

/** A threaded list of comments for a given pull request. */
export type GitHub_PullRequestReviewThread = GitHub_Node & {
  /** A list of pull request comments associated with the thread. */
  comments: GitHub_PullRequestReviewCommentConnection;
  /** The side of the diff on which this thread was placed. */
  diffSide: GitHub_DiffSide;
  id: Scalars['ID'];
  /** Whether this thread has been resolved */
  isResolved: Scalars['Boolean'];
  /** The line in the file to which this thread refers */
  line?: Maybe<Scalars['Int']>;
  /** The original line in the file to which this thread refers. */
  originalLine?: Maybe<Scalars['Int']>;
  /** The original start line in the file to which this thread refers (multi-line only). */
  originalStartLine?: Maybe<Scalars['Int']>;
  /** Identifies the pull request associated with this thread. */
  pullRequest: GitHub_PullRequest;
  /** Identifies the repository associated with this thread. */
  repository: GitHub_Repository;
  /** The user who resolved this thread */
  resolvedBy?: Maybe<GitHub_User>;
  /** The side of the diff that the first line of the thread starts on (multi-line only) */
  startDiffSide?: Maybe<GitHub_DiffSide>;
  /** The start line in the file to which this thread refers (multi-line only) */
  startLine?: Maybe<Scalars['Int']>;
  /** Whether or not the viewer can resolve this thread */
  viewerCanResolve: Scalars['Boolean'];
  /** Whether or not the viewer can unresolve this thread */
  viewerCanUnresolve: Scalars['Boolean'];
};


/** A threaded list of comments for a given pull request. */
export type GitHub_PullRequestReviewThreadCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

/** Review comment threads for a pull request review. */
export type GitHub_PullRequestReviewThreadConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PullRequestReviewThreadEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestReviewThread>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_PullRequestReviewThreadEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PullRequestReviewThread>;
};

/** Represents the latest point in the pull request timeline for which the viewer has seen the pull request's commits. */
export type GitHub_PullRequestRevisionMarker = {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The last commit the viewer has seen. */
  lastSeenCommit: GitHub_Commit;
  /** The pull request to which the marker belongs. */
  pullRequest: GitHub_PullRequest;
};

/** The possible states of a pull request. */
export type GitHub_PullRequestState = 
  /** A pull request that is still open. */
  | 'OPEN'
  /** A pull request that has been closed without being merged. */
  | 'CLOSED'
  /** A pull request that has been closed by being merged. */
  | 'MERGED';

/** The connection type for PullRequestTimelineItem. */
export type GitHub_PullRequestTimelineConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PullRequestTimelineItemEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestTimelineItem>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An item in an pull request timeline */
export type GitHub_PullRequestTimelineItem = GitHub_AssignedEvent | GitHub_BaseRefForcePushedEvent | GitHub_ClosedEvent | GitHub_Commit | GitHub_CommitCommentThread | GitHub_CrossReferencedEvent | GitHub_DemilestonedEvent | GitHub_DeployedEvent | GitHub_DeploymentEnvironmentChangedEvent | GitHub_HeadRefDeletedEvent | GitHub_HeadRefForcePushedEvent | GitHub_HeadRefRestoredEvent | GitHub_IssueComment | GitHub_LabeledEvent | GitHub_LockedEvent | GitHub_MergedEvent | GitHub_MilestonedEvent | GitHub_PullRequestReview | GitHub_PullRequestReviewComment | GitHub_PullRequestReviewThread | GitHub_ReferencedEvent | GitHub_RenamedTitleEvent | GitHub_ReopenedEvent | GitHub_ReviewDismissedEvent | GitHub_ReviewRequestRemovedEvent | GitHub_ReviewRequestedEvent | GitHub_SubscribedEvent | GitHub_UnassignedEvent | GitHub_UnlabeledEvent | GitHub_UnlockedEvent | GitHub_UnsubscribedEvent | GitHub_UserBlockedEvent;

/** An edge in a connection. */
export type GitHub_PullRequestTimelineItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PullRequestTimelineItem>;
};

/** An item in a pull request timeline */
export type GitHub_PullRequestTimelineItems = GitHub_AddedToProjectEvent | GitHub_AssignedEvent | GitHub_AutomaticBaseChangeFailedEvent | GitHub_AutomaticBaseChangeSucceededEvent | GitHub_BaseRefChangedEvent | GitHub_BaseRefForcePushedEvent | GitHub_ClosedEvent | GitHub_CommentDeletedEvent | GitHub_ConnectedEvent | GitHub_ConvertToDraftEvent | GitHub_ConvertedNoteToIssueEvent | GitHub_CrossReferencedEvent | GitHub_DemilestonedEvent | GitHub_DeployedEvent | GitHub_DeploymentEnvironmentChangedEvent | GitHub_DisconnectedEvent | GitHub_HeadRefDeletedEvent | GitHub_HeadRefForcePushedEvent | GitHub_HeadRefRestoredEvent | GitHub_IssueComment | GitHub_LabeledEvent | GitHub_LockedEvent | GitHub_MarkedAsDuplicateEvent | GitHub_MentionedEvent | GitHub_MergedEvent | GitHub_MilestonedEvent | GitHub_MovedColumnsInProjectEvent | GitHub_PinnedEvent | GitHub_PullRequestCommit | GitHub_PullRequestCommitCommentThread | GitHub_PullRequestReview | GitHub_PullRequestReviewThread | GitHub_PullRequestRevisionMarker | GitHub_ReadyForReviewEvent | GitHub_ReferencedEvent | GitHub_RemovedFromProjectEvent | GitHub_RenamedTitleEvent | GitHub_ReopenedEvent | GitHub_ReviewDismissedEvent | GitHub_ReviewRequestRemovedEvent | GitHub_ReviewRequestedEvent | GitHub_SubscribedEvent | GitHub_TransferredEvent | GitHub_UnassignedEvent | GitHub_UnlabeledEvent | GitHub_UnlockedEvent | GitHub_UnmarkedAsDuplicateEvent | GitHub_UnpinnedEvent | GitHub_UnsubscribedEvent | GitHub_UserBlockedEvent;

/** The connection type for PullRequestTimelineItems. */
export type GitHub_PullRequestTimelineItemsConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PullRequestTimelineItemsEdge>>>;
  /** Identifies the count of items after applying `before` and `after` filters. */
  filteredCount: Scalars['Int'];
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestTimelineItems>>>;
  /** Identifies the count of items after applying `before`/`after` filters and `first`/`last`/`skip` slicing. */
  pageCount: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
  /** Identifies the date and time when the timeline was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
};

/** An edge in a connection. */
export type GitHub_PullRequestTimelineItemsEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PullRequestTimelineItems>;
};

/** The possible item types found in a timeline. */
export type GitHub_PullRequestTimelineItemsItemType = 
  /** Represents a Git commit part of a pull request. */
  | 'PULL_REQUEST_COMMIT'
  /** Represents a commit comment thread part of a pull request. */
  | 'PULL_REQUEST_COMMIT_COMMENT_THREAD'
  /** A review object for a given pull request. */
  | 'PULL_REQUEST_REVIEW'
  /** A threaded list of comments for a given pull request. */
  | 'PULL_REQUEST_REVIEW_THREAD'
  /** Represents the latest point in the pull request timeline for which the viewer has seen the pull request's commits. */
  | 'PULL_REQUEST_REVISION_MARKER'
  /** Represents a 'automatic_base_change_failed' event on a given pull request. */
  | 'AUTOMATIC_BASE_CHANGE_FAILED_EVENT'
  /** Represents a 'automatic_base_change_succeeded' event on a given pull request. */
  | 'AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT'
  /** Represents a 'base_ref_changed' event on a given issue or pull request. */
  | 'BASE_REF_CHANGED_EVENT'
  /** Represents a 'base_ref_force_pushed' event on a given pull request. */
  | 'BASE_REF_FORCE_PUSHED_EVENT'
  /** Represents a 'deployed' event on a given pull request. */
  | 'DEPLOYED_EVENT'
  /** Represents a 'deployment_environment_changed' event on a given pull request. */
  | 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT'
  /** Represents a 'head_ref_deleted' event on a given pull request. */
  | 'HEAD_REF_DELETED_EVENT'
  /** Represents a 'head_ref_force_pushed' event on a given pull request. */
  | 'HEAD_REF_FORCE_PUSHED_EVENT'
  /** Represents a 'head_ref_restored' event on a given pull request. */
  | 'HEAD_REF_RESTORED_EVENT'
  /** Represents a 'merged' event on a given pull request. */
  | 'MERGED_EVENT'
  /** Represents a 'review_dismissed' event on a given issue or pull request. */
  | 'REVIEW_DISMISSED_EVENT'
  /** Represents an 'review_requested' event on a given pull request. */
  | 'REVIEW_REQUESTED_EVENT'
  /** Represents an 'review_request_removed' event on a given pull request. */
  | 'REVIEW_REQUEST_REMOVED_EVENT'
  /** Represents a 'ready_for_review' event on a given pull request. */
  | 'READY_FOR_REVIEW_EVENT'
  /** Represents a 'convert_to_draft' event on a given pull request. */
  | 'CONVERT_TO_DRAFT_EVENT'
  /** Represents a comment on an Issue. */
  | 'ISSUE_COMMENT'
  /** Represents a mention made by one issue or pull request to another. */
  | 'CROSS_REFERENCED_EVENT'
  /** Represents a 'added_to_project' event on a given issue or pull request. */
  | 'ADDED_TO_PROJECT_EVENT'
  /** Represents an 'assigned' event on any assignable object. */
  | 'ASSIGNED_EVENT'
  /** Represents a 'closed' event on any `Closable`. */
  | 'CLOSED_EVENT'
  /** Represents a 'comment_deleted' event on a given issue or pull request. */
  | 'COMMENT_DELETED_EVENT'
  /** Represents a 'connected' event on a given issue or pull request. */
  | 'CONNECTED_EVENT'
  /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
  | 'CONVERTED_NOTE_TO_ISSUE_EVENT'
  /** Represents a 'demilestoned' event on a given issue or pull request. */
  | 'DEMILESTONED_EVENT'
  /** Represents a 'disconnected' event on a given issue or pull request. */
  | 'DISCONNECTED_EVENT'
  /** Represents a 'labeled' event on a given issue or pull request. */
  | 'LABELED_EVENT'
  /** Represents a 'locked' event on a given issue or pull request. */
  | 'LOCKED_EVENT'
  /** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
  | 'MARKED_AS_DUPLICATE_EVENT'
  /** Represents a 'mentioned' event on a given issue or pull request. */
  | 'MENTIONED_EVENT'
  /** Represents a 'milestoned' event on a given issue or pull request. */
  | 'MILESTONED_EVENT'
  /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
  | 'MOVED_COLUMNS_IN_PROJECT_EVENT'
  /** Represents a 'pinned' event on a given issue or pull request. */
  | 'PINNED_EVENT'
  /** Represents a 'referenced' event on a given `ReferencedSubject`. */
  | 'REFERENCED_EVENT'
  /** Represents a 'removed_from_project' event on a given issue or pull request. */
  | 'REMOVED_FROM_PROJECT_EVENT'
  /** Represents a 'renamed' event on a given issue or pull request */
  | 'RENAMED_TITLE_EVENT'
  /** Represents a 'reopened' event on any `Closable`. */
  | 'REOPENED_EVENT'
  /** Represents a 'subscribed' event on a given `Subscribable`. */
  | 'SUBSCRIBED_EVENT'
  /** Represents a 'transferred' event on a given issue or pull request. */
  | 'TRANSFERRED_EVENT'
  /** Represents an 'unassigned' event on any assignable object. */
  | 'UNASSIGNED_EVENT'
  /** Represents an 'unlabeled' event on a given issue or pull request. */
  | 'UNLABELED_EVENT'
  /** Represents an 'unlocked' event on a given issue or pull request. */
  | 'UNLOCKED_EVENT'
  /** Represents a 'user_blocked' event on a given user. */
  | 'USER_BLOCKED_EVENT'
  /** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
  | 'UNMARKED_AS_DUPLICATE_EVENT'
  /** Represents an 'unpinned' event on a given issue or pull request. */
  | 'UNPINNED_EVENT'
  /** Represents an 'unsubscribed' event on a given `Subscribable`. */
  | 'UNSUBSCRIBED_EVENT';

/** The possible target states when updating a pull request. */
export type GitHub_PullRequestUpdateState = 
  /** A pull request that is still open. */
  | 'OPEN'
  /** A pull request that has been closed without being merged. */
  | 'CLOSED';

/** A team, user or app who has the ability to push to a protected branch. */
export type GitHub_PushAllowance = GitHub_Node & {
  /** The actor that can push. */
  actor?: Maybe<GitHub_PushAllowanceActor>;
  /** Identifies the branch protection rule associated with the allowed user or team. */
  branchProtectionRule?: Maybe<GitHub_BranchProtectionRule>;
  id: Scalars['ID'];
};

/** Types that can be an actor. */
export type GitHub_PushAllowanceActor = GitHub_App | GitHub_Team | GitHub_User;

/** The connection type for PushAllowance. */
export type GitHub_PushAllowanceConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PushAllowanceEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PushAllowance>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_PushAllowanceEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PushAllowance>;
};

/** Represents the client's rate limit. */
export type GitHub_RateLimit = {
  /** The point cost for the current query counting against the rate limit. */
  cost: Scalars['Int'];
  /** The maximum number of points the client is permitted to consume in a 60 minute window. */
  limit: Scalars['Int'];
  /** The maximum number of nodes this query may return */
  nodeCount: Scalars['Int'];
  /** The number of points remaining in the current rate limit window. */
  remaining: Scalars['Int'];
  /** The time at which the current rate limit window resets in UTC epoch seconds. */
  resetAt: Scalars['GitHub_DateTime'];
};

/** Represents a subject that can be reacted on. */
export type GitHub_Reactable = {
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  reactions: GitHub_ReactionConnection;
  /** Can user react to this subject */
  viewerCanReact: Scalars['Boolean'];
};


/** Represents a subject that can be reacted on. */
export type GitHub_ReactableReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<GitHub_ReactionContent>;
  orderBy?: Maybe<GitHub_ReactionOrder>;
};

/** The connection type for User. */
export type GitHub_ReactingUserConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ReactingUserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** Represents a user that's made a reaction. */
export type GitHub_ReactingUserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  node: GitHub_User;
  /** The moment when the user made the reaction. */
  reactedAt: Scalars['GitHub_DateTime'];
};

/** An emoji reaction to a particular piece of content. */
export type GitHub_Reaction = GitHub_Node & {
  /** Identifies the emoji reaction. */
  content: GitHub_ReactionContent;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  /** The reactable piece of content */
  reactable: GitHub_Reactable;
  /** Identifies the user who created this reaction. */
  user?: Maybe<GitHub_User>;
};

/** A list of reactions that have been left on the subject. */
export type GitHub_ReactionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ReactionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Reaction>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
  /** Whether or not the authenticated user has left a reaction on the subject. */
  viewerHasReacted: Scalars['Boolean'];
};

/** Emojis that can be attached to Issues, Pull Requests and Comments. */
export type GitHub_ReactionContent = 
  /** Represents the `:+1:` emoji. */
  | 'THUMBS_UP'
  /** Represents the `:-1:` emoji. */
  | 'THUMBS_DOWN'
  /** Represents the `:laugh:` emoji. */
  | 'LAUGH'
  /** Represents the `:hooray:` emoji. */
  | 'HOORAY'
  /** Represents the `:confused:` emoji. */
  | 'CONFUSED'
  /** Represents the `:heart:` emoji. */
  | 'HEART'
  /** Represents the `:rocket:` emoji. */
  | 'ROCKET'
  /** Represents the `:eyes:` emoji. */
  | 'EYES';

/** An edge in a connection. */
export type GitHub_ReactionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Reaction>;
};

/** A group of emoji reactions to a particular piece of content. */
export type GitHub_ReactionGroup = {
  /** Identifies the emoji reaction. */
  content: GitHub_ReactionContent;
  /** Identifies when the reaction was created. */
  createdAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** The subject that was reacted to. */
  subject: GitHub_Reactable;
  /** Users who have reacted to the reaction subject with the emotion represented by this reaction group */
  users: GitHub_ReactingUserConnection;
  /** Whether or not the authenticated user has left a reaction on the subject. */
  viewerHasReacted: Scalars['Boolean'];
};


/** A group of emoji reactions to a particular piece of content. */
export type GitHub_ReactionGroupUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Ways in which lists of reactions can be ordered upon return. */
export type GitHub_ReactionOrder = {
  /** The field in which to order reactions by. */
  field: GitHub_ReactionOrderField;
  /** The direction in which to order reactions by the specified field. */
  direction: GitHub_OrderDirection;
};

/** A list of fields that reactions can be ordered by. */
export type GitHub_ReactionOrderField = 
  /** Allows ordering a list of reactions by when they were created. */
  | 'CREATED_AT';

/** Represents a 'ready_for_review' event on a given pull request. */
export type GitHub_ReadyForReviewEvent = GitHub_Node & GitHub_UniformResourceLocatable & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
  /** The HTTP path for this ready for review event. */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this ready for review event. */
  url: Scalars['GitHub_URI'];
};

/** Represents a Git reference. */
export type GitHub_Ref = GitHub_Node & {
  /** A list of pull requests with this ref as the head ref. */
  associatedPullRequests: GitHub_PullRequestConnection;
  id: Scalars['ID'];
  /** The ref name. */
  name: Scalars['String'];
  /** The ref's prefix, such as `refs/heads/` or `refs/tags/`. */
  prefix: Scalars['String'];
  /** The repository the ref belongs to. */
  repository: GitHub_Repository;
  /** The object the ref points to. Returns null when object does not exist. */
  target?: Maybe<GitHub_GitObject>;
};


/** Represents a Git reference. */
export type GitHub_RefAssociatedPullRequestsArgs = {
  states?: Maybe<Array<GitHub_PullRequestState>>;
  labels?: Maybe<Array<Scalars['String']>>;
  headRefName?: Maybe<Scalars['String']>;
  baseRefName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<GitHub_IssueOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for Ref. */
export type GitHub_RefConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_RefEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Ref>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_RefEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Ref>;
};

/** Represents a 'referenced' event on a given `ReferencedSubject`. */
export type GitHub_ReferencedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the commit associated with the 'referenced' event. */
  commit?: Maybe<GitHub_Commit>;
  /** Identifies the repository associated with the 'referenced' event. */
  commitRepository: GitHub_Repository;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** Reference originated in a different repository. */
  isCrossRepository: Scalars['Boolean'];
  /** Checks if the commit message itself references the subject. Can be false in the case of a commit comment reference. */
  isDirectReference: Scalars['Boolean'];
  /** Object referenced by event. */
  subject: GitHub_ReferencedSubject;
};

/** Any referencable object */
export type GitHub_ReferencedSubject = GitHub_Issue | GitHub_PullRequest;

/** Ways in which lists of git refs can be ordered upon return. */
export type GitHub_RefOrder = {
  /** The field in which to order refs by. */
  field: GitHub_RefOrderField;
  /** The direction in which to order refs by the specified field. */
  direction: GitHub_OrderDirection;
};

/** Properties by which ref connections can be ordered. */
export type GitHub_RefOrderField = 
  /** Order refs by underlying commit date if the ref prefix is refs/tags/ */
  | 'TAG_COMMIT_DATE'
  /** Order refs by their alphanumeric name */
  | 'ALPHABETICAL';

/** Autogenerated input type of RegenerateEnterpriseIdentityProviderRecoveryCodes */
export type GitHub_RegenerateEnterpriseIdentityProviderRecoveryCodesInput = {
  /** The ID of the enterprise on which to set an identity provider. */
  enterpriseId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RegenerateEnterpriseIdentityProviderRecoveryCodes */
export type GitHub_RegenerateEnterpriseIdentityProviderRecoveryCodesPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The identity provider for the enterprise. */
  identityProvider?: Maybe<GitHub_EnterpriseIdentityProvider>;
};

/** A release contains the content for a release. */
export type GitHub_Release = GitHub_Node & GitHub_UniformResourceLocatable & {
  /** The author of the release */
  author?: Maybe<GitHub_User>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The description of the release. */
  description?: Maybe<Scalars['String']>;
  /** The description of this release rendered to HTML. */
  descriptionHTML?: Maybe<Scalars['GitHub_HTML']>;
  id: Scalars['ID'];
  /** Whether or not the release is a draft */
  isDraft: Scalars['Boolean'];
  /** Whether or not the release is a prerelease */
  isPrerelease: Scalars['Boolean'];
  /** The title of the release. */
  name?: Maybe<Scalars['String']>;
  /** Identifies the date and time when the release was created. */
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** List of releases assets which are dependent on this release. */
  releaseAssets: GitHub_ReleaseAssetConnection;
  /** The HTTP path for this issue */
  resourcePath: Scalars['GitHub_URI'];
  /** A description of the release, rendered to HTML without any links in it. */
  shortDescriptionHTML?: Maybe<Scalars['GitHub_HTML']>;
  /** The Git tag the release points to */
  tag?: Maybe<GitHub_Ref>;
  /** The name of the release's Git tag */
  tagName: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this issue */
  url: Scalars['GitHub_URI'];
};


/** A release contains the content for a release. */
export type GitHub_ReleaseReleaseAssetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


/** A release contains the content for a release. */
export type GitHub_ReleaseShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars['Int']>;
};

/** A release asset contains the content for a release asset. */
export type GitHub_ReleaseAsset = GitHub_Node & {
  /** The asset's content-type */
  contentType: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The number of times this asset was downloaded */
  downloadCount: Scalars['Int'];
  /** Identifies the URL where you can download the release asset via the browser. */
  downloadUrl: Scalars['GitHub_URI'];
  id: Scalars['ID'];
  /** Identifies the title of the release asset. */
  name: Scalars['String'];
  /** Release that the asset is associated with */
  release?: Maybe<GitHub_Release>;
  /** The size (in bytes) of the asset */
  size: Scalars['Int'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The user that performed the upload */
  uploadedBy: GitHub_User;
  /** Identifies the URL of the release asset. */
  url: Scalars['GitHub_URI'];
};

/** The connection type for ReleaseAsset. */
export type GitHub_ReleaseAssetConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ReleaseAssetEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_ReleaseAsset>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_ReleaseAssetEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_ReleaseAsset>;
};

/** The connection type for Release. */
export type GitHub_ReleaseConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ReleaseEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Release>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_ReleaseEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Release>;
};

/** Ways in which lists of releases can be ordered upon return. */
export type GitHub_ReleaseOrder = {
  /** The field in which to order releases by. */
  field: GitHub_ReleaseOrderField;
  /** The direction in which to order releases by the specified field. */
  direction: GitHub_OrderDirection;
};

/** Properties by which release connections can be ordered. */
export type GitHub_ReleaseOrderField = 
  /** Order releases by creation time */
  | 'CREATED_AT'
  /** Order releases alphabetically by name */
  | 'NAME';

/** Autogenerated input type of RemoveAssigneesFromAssignable */
export type GitHub_RemoveAssigneesFromAssignableInput = {
  /** The id of the assignable object to remove assignees from. */
  assignableId: Scalars['ID'];
  /** The id of users to remove as assignees. */
  assigneeIds: Array<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RemoveAssigneesFromAssignable */
export type GitHub_RemoveAssigneesFromAssignablePayload = {
  /** The item that was unassigned. */
  assignable?: Maybe<GitHub_Assignable>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Represents a 'removed_from_project' event on a given issue or pull request. */
export type GitHub_RemovedFromProjectEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

/** Autogenerated input type of RemoveEnterpriseAdmin */
export type GitHub_RemoveEnterpriseAdminInput = {
  /** The Enterprise ID from which to remove the administrator. */
  enterpriseId: Scalars['ID'];
  /** The login of the user to remove as an administrator. */
  login: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RemoveEnterpriseAdmin */
export type GitHub_RemoveEnterpriseAdminPayload = {
  /** The user who was removed as an administrator. */
  admin?: Maybe<GitHub_User>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The updated enterprise. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** A message confirming the result of removing an administrator. */
  message?: Maybe<Scalars['String']>;
  /** The viewer performing the mutation. */
  viewer?: Maybe<GitHub_User>;
};

/** Autogenerated input type of RemoveEnterpriseIdentityProvider */
export type GitHub_RemoveEnterpriseIdentityProviderInput = {
  /** The ID of the enterprise from which to remove the identity provider. */
  enterpriseId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RemoveEnterpriseIdentityProvider */
export type GitHub_RemoveEnterpriseIdentityProviderPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The identity provider that was removed from the enterprise. */
  identityProvider?: Maybe<GitHub_EnterpriseIdentityProvider>;
};

/** Autogenerated input type of RemoveEnterpriseOrganization */
export type GitHub_RemoveEnterpriseOrganizationInput = {
  /** The ID of the enterprise from which the organization should be removed. */
  enterpriseId: Scalars['ID'];
  /** The ID of the organization to remove from the enterprise. */
  organizationId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RemoveEnterpriseOrganization */
export type GitHub_RemoveEnterpriseOrganizationPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The updated enterprise. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** The organization that was removed from the enterprise. */
  organization?: Maybe<GitHub_Organization>;
  /** The viewer performing the mutation. */
  viewer?: Maybe<GitHub_User>;
};

/** Autogenerated input type of RemoveLabelsFromLabelable */
export type GitHub_RemoveLabelsFromLabelableInput = {
  /** The id of the Labelable to remove labels from. */
  labelableId: Scalars['ID'];
  /** The ids of labels to remove. */
  labelIds: Array<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RemoveLabelsFromLabelable */
export type GitHub_RemoveLabelsFromLabelablePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Labelable the labels were removed from. */
  labelable?: Maybe<GitHub_Labelable>;
};

/** Autogenerated input type of RemoveOutsideCollaborator */
export type GitHub_RemoveOutsideCollaboratorInput = {
  /** The ID of the outside collaborator to remove. */
  userId: Scalars['ID'];
  /** The ID of the organization to remove the outside collaborator from. */
  organizationId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RemoveOutsideCollaborator */
export type GitHub_RemoveOutsideCollaboratorPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The user that was removed as an outside collaborator. */
  removedUser?: Maybe<GitHub_User>;
};

/** Autogenerated input type of RemoveReaction */
export type GitHub_RemoveReactionInput = {
  /** The Node ID of the subject to modify. */
  subjectId: Scalars['ID'];
  /** The name of the emoji reaction to remove. */
  content: GitHub_ReactionContent;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RemoveReaction */
export type GitHub_RemoveReactionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The reaction object. */
  reaction?: Maybe<GitHub_Reaction>;
  /** The reactable subject. */
  subject?: Maybe<GitHub_Reactable>;
};

/** Autogenerated input type of RemoveStar */
export type GitHub_RemoveStarInput = {
  /** The Starrable ID to unstar. */
  starrableId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RemoveStar */
export type GitHub_RemoveStarPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The starrable. */
  starrable?: Maybe<GitHub_Starrable>;
};

/** Represents a 'renamed' event on a given issue or pull request */
export type GitHub_RenamedTitleEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the current title of the issue or pull request. */
  currentTitle: Scalars['String'];
  id: Scalars['ID'];
  /** Identifies the previous title of the issue or pull request. */
  previousTitle: Scalars['String'];
  /** Subject that was renamed. */
  subject: GitHub_RenamedTitleSubject;
};

/** An object which has a renamable title */
export type GitHub_RenamedTitleSubject = GitHub_Issue | GitHub_PullRequest;

/** Represents a 'reopened' event on any `Closable`. */
export type GitHub_ReopenedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Object that was reopened. */
  closable: GitHub_Closable;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
};

/** Autogenerated input type of ReopenIssue */
export type GitHub_ReopenIssueInput = {
  /** ID of the issue to be opened. */
  issueId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ReopenIssue */
export type GitHub_ReopenIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The issue that was opened. */
  issue?: Maybe<GitHub_Issue>;
};

/** Autogenerated input type of ReopenPullRequest */
export type GitHub_ReopenPullRequestInput = {
  /** ID of the pull request to be reopened. */
  pullRequestId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ReopenPullRequest */
export type GitHub_ReopenPullRequestPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The pull request that was reopened. */
  pullRequest?: Maybe<GitHub_PullRequest>;
};

/** Audit log entry for a repo.access event. */
export type GitHub_RepoAccessAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The visibility of the repository */
  visibility?: Maybe<GitHub_RepoAccessAuditEntryVisibility>;
};

/** The privacy of a repository */
export type GitHub_RepoAccessAuditEntryVisibility = 
  /** The repository is visible only to users in the same business. */
  | 'INTERNAL'
  /** The repository is visible only to those with explicit access. */
  | 'PRIVATE'
  /** The repository is visible to everyone. */
  | 'PUBLIC';

/** Audit log entry for a repo.add_member event. */
export type GitHub_RepoAddMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The visibility of the repository */
  visibility?: Maybe<GitHub_RepoAddMemberAuditEntryVisibility>;
};

/** The privacy of a repository */
export type GitHub_RepoAddMemberAuditEntryVisibility = 
  /** The repository is visible only to users in the same business. */
  | 'INTERNAL'
  /** The repository is visible only to those with explicit access. */
  | 'PRIVATE'
  /** The repository is visible to everyone. */
  | 'PUBLIC';

/** Audit log entry for a repo.add_topic event. */
export type GitHub_RepoAddTopicAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_RepositoryAuditEntryData & GitHub_OrganizationAuditEntryData & GitHub_TopicAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The name of the topic added to the repository */
  topic?: Maybe<GitHub_Topic>;
  /** The name of the topic added to the repository */
  topicName?: Maybe<Scalars['String']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a repo.archived event. */
export type GitHub_RepoArchivedAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_RepositoryAuditEntryData & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The visibility of the repository */
  visibility?: Maybe<GitHub_RepoArchivedAuditEntryVisibility>;
};

/** The privacy of a repository */
export type GitHub_RepoArchivedAuditEntryVisibility = 
  /** The repository is visible only to users in the same business. */
  | 'INTERNAL'
  /** The repository is visible only to those with explicit access. */
  | 'PRIVATE'
  /** The repository is visible to everyone. */
  | 'PUBLIC';

/** Audit log entry for a repo.change_merge_setting event. */
export type GitHub_RepoChangeMergeSettingAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_RepositoryAuditEntryData & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** Whether the change was to enable (true) or disable (false) the merge type */
  isEnabled?: Maybe<Scalars['Boolean']>;
  /** The merge method affected by the change */
  mergeType?: Maybe<GitHub_RepoChangeMergeSettingAuditEntryMergeType>;
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** The merge options available for pull requests to this repository. */
export type GitHub_RepoChangeMergeSettingAuditEntryMergeType = 
  /** The pull request is added to the base branch in a merge commit. */
  | 'MERGE'
  /** Commits from the pull request are added onto the base branch individually without a merge commit. */
  | 'REBASE'
  /** The pull request's commits are squashed into a single commit before they are merged to the base branch. */
  | 'SQUASH';

/** Audit log entry for a repo.config.disable_anonymous_git_access event. */
export type GitHub_RepoConfigDisableAnonymousGitAccessAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a repo.config.disable_collaborators_only event. */
export type GitHub_RepoConfigDisableCollaboratorsOnlyAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a repo.config.disable_contributors_only event. */
export type GitHub_RepoConfigDisableContributorsOnlyAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a repo.config.disable_sockpuppet_disallowed event. */
export type GitHub_RepoConfigDisableSockpuppetDisallowedAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a repo.config.enable_anonymous_git_access event. */
export type GitHub_RepoConfigEnableAnonymousGitAccessAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a repo.config.enable_collaborators_only event. */
export type GitHub_RepoConfigEnableCollaboratorsOnlyAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a repo.config.enable_contributors_only event. */
export type GitHub_RepoConfigEnableContributorsOnlyAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a repo.config.enable_sockpuppet_disallowed event. */
export type GitHub_RepoConfigEnableSockpuppetDisallowedAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a repo.config.lock_anonymous_git_access event. */
export type GitHub_RepoConfigLockAnonymousGitAccessAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a repo.config.unlock_anonymous_git_access event. */
export type GitHub_RepoConfigUnlockAnonymousGitAccessAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a repo.create event. */
export type GitHub_RepoCreateAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_RepositoryAuditEntryData & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  /** The name of the parent repository for this forked repository. */
  forkParentName?: Maybe<Scalars['String']>;
  /** The name of the root repository for this netork. */
  forkSourceName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The visibility of the repository */
  visibility?: Maybe<GitHub_RepoCreateAuditEntryVisibility>;
};

/** The privacy of a repository */
export type GitHub_RepoCreateAuditEntryVisibility = 
  /** The repository is visible only to users in the same business. */
  | 'INTERNAL'
  /** The repository is visible only to those with explicit access. */
  | 'PRIVATE'
  /** The repository is visible to everyone. */
  | 'PUBLIC';

/** Audit log entry for a repo.destroy event. */
export type GitHub_RepoDestroyAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_RepositoryAuditEntryData & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The visibility of the repository */
  visibility?: Maybe<GitHub_RepoDestroyAuditEntryVisibility>;
};

/** The privacy of a repository */
export type GitHub_RepoDestroyAuditEntryVisibility = 
  /** The repository is visible only to users in the same business. */
  | 'INTERNAL'
  /** The repository is visible only to those with explicit access. */
  | 'PRIVATE'
  /** The repository is visible to everyone. */
  | 'PUBLIC';

/** Audit log entry for a repo.remove_member event. */
export type GitHub_RepoRemoveMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The visibility of the repository */
  visibility?: Maybe<GitHub_RepoRemoveMemberAuditEntryVisibility>;
};

/** The privacy of a repository */
export type GitHub_RepoRemoveMemberAuditEntryVisibility = 
  /** The repository is visible only to users in the same business. */
  | 'INTERNAL'
  /** The repository is visible only to those with explicit access. */
  | 'PRIVATE'
  /** The repository is visible to everyone. */
  | 'PUBLIC';

/** Audit log entry for a repo.remove_topic event. */
export type GitHub_RepoRemoveTopicAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_RepositoryAuditEntryData & GitHub_OrganizationAuditEntryData & GitHub_TopicAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The name of the topic added to the repository */
  topic?: Maybe<GitHub_Topic>;
  /** The name of the topic added to the repository */
  topicName?: Maybe<Scalars['String']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** The reasons a piece of content can be reported or minimized. */
export type GitHub_ReportedContentClassifiers = 
  /** A spammy piece of content */
  | 'SPAM'
  /** An abusive or harassing piece of content */
  | 'ABUSE'
  /** An irrelevant piece of content */
  | 'OFF_TOPIC'
  /** An outdated piece of content */
  | 'OUTDATED'
  /** A duplicated piece of content */
  | 'DUPLICATE'
  /** The content has been resolved */
  | 'RESOLVED';

/** A repository contains the content for a project. */
export type GitHub_Repository = GitHub_Node & GitHub_ProjectOwner & GitHub_PackageOwner & GitHub_Subscribable & GitHub_Starrable & GitHub_UniformResourceLocatable & GitHub_RepositoryInfo & {
  /** A list of users that can be assigned to issues in this repository. */
  assignableUsers: GitHub_UserConnection;
  /** A list of branch protection rules for this repository. */
  branchProtectionRules: GitHub_BranchProtectionRuleConnection;
  /** Returns the code of conduct for this repository */
  codeOfConduct?: Maybe<GitHub_CodeOfConduct>;
  /** A list of collaborators associated with the repository. */
  collaborators?: Maybe<GitHub_RepositoryCollaboratorConnection>;
  /** A list of commit comments associated with the repository. */
  commitComments: GitHub_CommitCommentConnection;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The Ref associated with the repository's default branch. */
  defaultBranchRef?: Maybe<GitHub_Ref>;
  /** Whether or not branches are automatically deleted when merged in this repository. */
  deleteBranchOnMerge: Scalars['Boolean'];
  /** A list of deploy keys that are on this repository. */
  deployKeys: GitHub_DeployKeyConnection;
  /** Deployments associated with the repository */
  deployments: GitHub_DeploymentConnection;
  /** The description of the repository. */
  description?: Maybe<Scalars['String']>;
  /** The description of the repository rendered to HTML. */
  descriptionHTML: Scalars['GitHub_HTML'];
  /** The number of kilobytes this repository occupies on disk. */
  diskUsage?: Maybe<Scalars['Int']>;
  /** Returns how many forks there are of this repository in the whole network. */
  forkCount: Scalars['Int'];
  /** A list of direct forked repositories. */
  forks: GitHub_RepositoryConnection;
  /** The funding links for this repository */
  fundingLinks: Array<GitHub_FundingLink>;
  /** Indicates if the repository has issues feature enabled. */
  hasIssuesEnabled: Scalars['Boolean'];
  /** Indicates if the repository has the Projects feature enabled. */
  hasProjectsEnabled: Scalars['Boolean'];
  /** Indicates if the repository has wiki feature enabled. */
  hasWikiEnabled: Scalars['Boolean'];
  /** The repository's URL. */
  homepageUrl?: Maybe<Scalars['GitHub_URI']>;
  id: Scalars['ID'];
  /** Indicates if the repository is unmaintained. */
  isArchived: Scalars['Boolean'];
  /** Returns whether or not this repository disabled. */
  isDisabled: Scalars['Boolean'];
  /** Returns whether or not this repository is empty. */
  isEmpty: Scalars['Boolean'];
  /** Identifies if the repository is a fork. */
  isFork: Scalars['Boolean'];
  /** Indicates if the repository has been locked or not. */
  isLocked: Scalars['Boolean'];
  /** Identifies if the repository is a mirror. */
  isMirror: Scalars['Boolean'];
  /** Identifies if the repository is private. */
  isPrivate: Scalars['Boolean'];
  /** Identifies if the repository is a template that can be used to generate new repositories. */
  isTemplate: Scalars['Boolean'];
  /** Returns a single issue from the current repository by number. */
  issue?: Maybe<GitHub_Issue>;
  /** Returns a single issue-like object from the current repository by number. */
  issueOrPullRequest?: Maybe<GitHub_IssueOrPullRequest>;
  /** A list of issues that have been opened in the repository. */
  issues: GitHub_IssueConnection;
  /** Returns a single label by name */
  label?: Maybe<GitHub_Label>;
  /** A list of labels associated with the repository. */
  labels?: Maybe<GitHub_LabelConnection>;
  /** A list containing a breakdown of the language composition of the repository. */
  languages?: Maybe<GitHub_LanguageConnection>;
  /** The license associated with the repository */
  licenseInfo?: Maybe<GitHub_License>;
  /** The reason the repository has been locked. */
  lockReason?: Maybe<GitHub_RepositoryLockReason>;
  /** A list of Users that can be mentioned in the context of the repository. */
  mentionableUsers: GitHub_UserConnection;
  /** Whether or not PRs are merged with a merge commit on this repository. */
  mergeCommitAllowed: Scalars['Boolean'];
  /** Returns a single milestone from the current repository by number. */
  milestone?: Maybe<GitHub_Milestone>;
  /** A list of milestones associated with the repository. */
  milestones?: Maybe<GitHub_MilestoneConnection>;
  /** The repository's original mirror URL. */
  mirrorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The name of the repository. */
  name: Scalars['String'];
  /** The repository's name with owner. */
  nameWithOwner: Scalars['String'];
  /** A Git object in the repository */
  object?: Maybe<GitHub_GitObject>;
  /** The image used to represent this repository in Open Graph data. */
  openGraphImageUrl: Scalars['GitHub_URI'];
  /** The User owner of the repository. */
  owner: GitHub_RepositoryOwner;
  /** A list of packages under the owner. */
  packages: GitHub_PackageConnection;
  /** The repository parent, if this is a fork. */
  parent?: Maybe<GitHub_Repository>;
  /** The primary language of the repository's code. */
  primaryLanguage?: Maybe<GitHub_Language>;
  /** Find project by number. */
  project?: Maybe<GitHub_Project>;
  /** A list of projects under the owner. */
  projects: GitHub_ProjectConnection;
  /** The HTTP path listing the repository's projects */
  projectsResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL listing the repository's projects */
  projectsUrl: Scalars['GitHub_URI'];
  /** Returns a single pull request from the current repository by number. */
  pullRequest?: Maybe<GitHub_PullRequest>;
  /** A list of pull requests that have been opened in the repository. */
  pullRequests: GitHub_PullRequestConnection;
  /** Identifies when the repository was last pushed to. */
  pushedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** Whether or not rebase-merging is enabled on this repository. */
  rebaseMergeAllowed: Scalars['Boolean'];
  /** Fetch a given ref from the repository */
  ref?: Maybe<GitHub_Ref>;
  /** Fetch a list of refs from the repository */
  refs?: Maybe<GitHub_RefConnection>;
  /** Lookup a single release given various criteria. */
  release?: Maybe<GitHub_Release>;
  /** List of releases which are dependent on this repository. */
  releases: GitHub_ReleaseConnection;
  /** A list of applied repository-topic associations for this repository. */
  repositoryTopics: GitHub_RepositoryTopicConnection;
  /** The HTTP path for this repository */
  resourcePath: Scalars['GitHub_URI'];
  /** A description of the repository, rendered to HTML without any links in it. */
  shortDescriptionHTML: Scalars['GitHub_HTML'];
  /** Whether or not squash-merging is enabled on this repository. */
  squashMergeAllowed: Scalars['Boolean'];
  /** The SSH URL to clone this repository */
  sshUrl: Scalars['GitHub_GitSSHRemote'];
  /** A list of users who have starred this starrable. */
  stargazers: GitHub_StargazerConnection;
  /**
   * Returns a list of all submodules in this repository parsed from the
   * .gitmodules file as of the default branch's HEAD commit.
   */
  submodules: GitHub_SubmoduleConnection;
  /** Temporary authentication token for cloning this repository. */
  tempCloneToken?: Maybe<Scalars['String']>;
  /** The repository from which this repository was generated, if any. */
  templateRepository?: Maybe<GitHub_Repository>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this repository */
  url: Scalars['GitHub_URI'];
  /** Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner's avatar. */
  usesCustomOpenGraphImage: Scalars['Boolean'];
  /** Indicates whether the viewer has admin permissions on this repository. */
  viewerCanAdminister: Scalars['Boolean'];
  /** Can the current viewer create new projects on this owner. */
  viewerCanCreateProjects: Scalars['Boolean'];
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: Scalars['Boolean'];
  /** Indicates whether the viewer can update the topics of this repository. */
  viewerCanUpdateTopics: Scalars['Boolean'];
  /** Returns a boolean indicating whether the viewing user has starred this starrable. */
  viewerHasStarred: Scalars['Boolean'];
  /** The users permission level on the repository. Will return null if authenticated as an GitHub App. */
  viewerPermission?: Maybe<GitHub_RepositoryPermission>;
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: Maybe<GitHub_SubscriptionState>;
  /** A list of vulnerability alerts that are on this repository. */
  vulnerabilityAlerts?: Maybe<GitHub_RepositoryVulnerabilityAlertConnection>;
  /** A list of users watching the repository. */
  watchers: GitHub_UserConnection;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryAssignableUsersArgs = {
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryBranchProtectionRulesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryCollaboratorsArgs = {
  affiliation?: Maybe<GitHub_CollaboratorAffiliation>;
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryCommitCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryDeployKeysArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryDeploymentsArgs = {
  environments?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<GitHub_DeploymentOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryForksArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryIssueArgs = {
  number: Scalars['Int'];
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryIssueOrPullRequestArgs = {
  number: Scalars['Int'];
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryIssuesArgs = {
  orderBy?: Maybe<GitHub_IssueOrder>;
  labels?: Maybe<Array<Scalars['String']>>;
  states?: Maybe<Array<GitHub_IssueState>>;
  filterBy?: Maybe<GitHub_IssueFilters>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryLabelArgs = {
  name: Scalars['String'];
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryLabelsArgs = {
  orderBy?: Maybe<GitHub_LabelOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryLanguagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_LanguageOrder>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryMentionableUsersArgs = {
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryMilestoneArgs = {
  number: Scalars['Int'];
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryMilestonesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  states?: Maybe<Array<GitHub_MilestoneState>>;
  orderBy?: Maybe<GitHub_MilestoneOrder>;
  query?: Maybe<Scalars['String']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryObjectArgs = {
  oid?: Maybe<Scalars['GitHub_GitObjectID']>;
  expression?: Maybe<Scalars['String']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryPackagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  repositoryId?: Maybe<Scalars['ID']>;
  packageType?: Maybe<GitHub_PackageType>;
  orderBy?: Maybe<GitHub_PackageOrder>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryProjectArgs = {
  number: Scalars['Int'];
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryProjectsArgs = {
  orderBy?: Maybe<GitHub_ProjectOrder>;
  search?: Maybe<Scalars['String']>;
  states?: Maybe<Array<GitHub_ProjectState>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryPullRequestArgs = {
  number: Scalars['Int'];
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryPullRequestsArgs = {
  states?: Maybe<Array<GitHub_PullRequestState>>;
  labels?: Maybe<Array<Scalars['String']>>;
  headRefName?: Maybe<Scalars['String']>;
  baseRefName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<GitHub_IssueOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryRefArgs = {
  qualifiedName: Scalars['String'];
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryRefsArgs = {
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  refPrefix: Scalars['String'];
  direction?: Maybe<GitHub_OrderDirection>;
  orderBy?: Maybe<GitHub_RefOrder>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryReleaseArgs = {
  tagName: Scalars['String'];
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryReleasesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_ReleaseOrder>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryRepositoryTopicsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryStargazersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_StarOrder>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositorySubmodulesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryVulnerabilityAlertsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
export type GitHub_RepositoryWatchersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The affiliation of a user to a repository */
export type GitHub_RepositoryAffiliation = 
  /** Repositories that are owned by the authenticated user. */
  | 'OWNER'
  /** Repositories that the user has been added to as a collaborator. */
  | 'COLLABORATOR'
  /**
   * Repositories that the user has access to through being a member of an
   * organization. This includes every repository on every team that the user is on.
   */
  | 'ORGANIZATION_MEMBER';

/** Metadata for an audit entry with action repo.* */
export type GitHub_RepositoryAuditEntryData = {
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** The connection type for User. */
export type GitHub_RepositoryCollaboratorConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_RepositoryCollaboratorEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** Represents a user who is a collaborator of a repository. */
export type GitHub_RepositoryCollaboratorEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  node: GitHub_User;
  /**
   * The permission the user has on the repository.
   * 
   * **Upcoming Change on 2020-10-01 UTC**
   * **Description:** Type for `permission` will change from `RepositoryPermission!` to `String`.
   * **Reason:** This field may return additional values
   */
  permission: GitHub_RepositoryPermission;
  /** A list of sources for the user's access to the repository. */
  permissionSources?: Maybe<Array<GitHub_PermissionSource>>;
};

/** A list of repositories owned by the subject. */
export type GitHub_RepositoryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_RepositoryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Repository>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
  /** The total size in kilobytes of all repositories in the connection. */
  totalDiskUsage: Scalars['Int'];
};

/** The reason a repository is listed as 'contributed'. */
export type GitHub_RepositoryContributionType = 
  /** Created a commit */
  | 'COMMIT'
  /** Created an issue */
  | 'ISSUE'
  /** Created a pull request */
  | 'PULL_REQUEST'
  /** Created the repository */
  | 'REPOSITORY'
  /** Reviewed a pull request */
  | 'PULL_REQUEST_REVIEW';

/** An edge in a connection. */
export type GitHub_RepositoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Repository>;
};

/** A subset of repository info. */
export type GitHub_RepositoryInfo = {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The description of the repository. */
  description?: Maybe<Scalars['String']>;
  /** The description of the repository rendered to HTML. */
  descriptionHTML: Scalars['GitHub_HTML'];
  /** Returns how many forks there are of this repository in the whole network. */
  forkCount: Scalars['Int'];
  /** Indicates if the repository has issues feature enabled. */
  hasIssuesEnabled: Scalars['Boolean'];
  /** Indicates if the repository has the Projects feature enabled. */
  hasProjectsEnabled: Scalars['Boolean'];
  /** Indicates if the repository has wiki feature enabled. */
  hasWikiEnabled: Scalars['Boolean'];
  /** The repository's URL. */
  homepageUrl?: Maybe<Scalars['GitHub_URI']>;
  /** Indicates if the repository is unmaintained. */
  isArchived: Scalars['Boolean'];
  /** Identifies if the repository is a fork. */
  isFork: Scalars['Boolean'];
  /** Indicates if the repository has been locked or not. */
  isLocked: Scalars['Boolean'];
  /** Identifies if the repository is a mirror. */
  isMirror: Scalars['Boolean'];
  /** Identifies if the repository is private. */
  isPrivate: Scalars['Boolean'];
  /** Identifies if the repository is a template that can be used to generate new repositories. */
  isTemplate: Scalars['Boolean'];
  /** The license associated with the repository */
  licenseInfo?: Maybe<GitHub_License>;
  /** The reason the repository has been locked. */
  lockReason?: Maybe<GitHub_RepositoryLockReason>;
  /** The repository's original mirror URL. */
  mirrorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The name of the repository. */
  name: Scalars['String'];
  /** The repository's name with owner. */
  nameWithOwner: Scalars['String'];
  /** The image used to represent this repository in Open Graph data. */
  openGraphImageUrl: Scalars['GitHub_URI'];
  /** The User owner of the repository. */
  owner: GitHub_RepositoryOwner;
  /** Identifies when the repository was last pushed to. */
  pushedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** The HTTP path for this repository */
  resourcePath: Scalars['GitHub_URI'];
  /** A description of the repository, rendered to HTML without any links in it. */
  shortDescriptionHTML: Scalars['GitHub_HTML'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this repository */
  url: Scalars['GitHub_URI'];
  /** Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner's avatar. */
  usesCustomOpenGraphImage: Scalars['Boolean'];
};


/** A subset of repository info. */
export type GitHub_RepositoryInfoShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars['Int']>;
};

/** An invitation for a user to be added to a repository. */
export type GitHub_RepositoryInvitation = GitHub_Node & {
  /** The email address that received the invitation. */
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The user who received the invitation. */
  invitee?: Maybe<GitHub_User>;
  /** The user who created the invitation. */
  inviter: GitHub_User;
  /**
   * The permission granted on this repository by this invitation.
   * 
   * **Upcoming Change on 2020-10-01 UTC**
   * **Description:** Type for `permission` will change from `RepositoryPermission!` to `String`.
   * **Reason:** This field may return additional values
   */
  permission: GitHub_RepositoryPermission;
  /** The Repository the user is invited to. */
  repository?: Maybe<GitHub_RepositoryInfo>;
};

/** The connection type for RepositoryInvitation. */
export type GitHub_RepositoryInvitationConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_RepositoryInvitationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_RepositoryInvitation>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_RepositoryInvitationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_RepositoryInvitation>;
};

/** Ordering options for repository invitation connections. */
export type GitHub_RepositoryInvitationOrder = {
  /** The field to order repository invitations by. */
  field: GitHub_RepositoryInvitationOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which repository invitation connections can be ordered. */
export type GitHub_RepositoryInvitationOrderField = 
  /** Order repository invitations by creation time */
  | 'CREATED_AT'
  /** Order repository invitations by invitee login */
  | 'INVITEE_LOGIN';

/** The possible reasons a given repository could be in a locked state. */
export type GitHub_RepositoryLockReason = 
  /** The repository is locked due to a move. */
  | 'MOVING'
  /** The repository is locked due to a billing related reason. */
  | 'BILLING'
  /** The repository is locked due to a rename. */
  | 'RENAME'
  /** The repository is locked due to a migration. */
  | 'MIGRATING';

/** Represents a object that belongs to a repository. */
export type GitHub_RepositoryNode = {
  /** The repository associated with this node. */
  repository: GitHub_Repository;
};

/** Ordering options for repository connections */
export type GitHub_RepositoryOrder = {
  /** The field to order repositories by. */
  field: GitHub_RepositoryOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which repository connections can be ordered. */
export type GitHub_RepositoryOrderField = 
  /** Order repositories by creation time */
  | 'CREATED_AT'
  /** Order repositories by update time */
  | 'UPDATED_AT'
  /** Order repositories by push time */
  | 'PUSHED_AT'
  /** Order repositories by name */
  | 'NAME'
  /** Order repositories by number of stargazers */
  | 'STARGAZERS';

/** Represents an owner of a Repository. */
export type GitHub_RepositoryOwner = {
  /** A URL pointing to the owner's public avatar. */
  avatarUrl: Scalars['GitHub_URI'];
  id: Scalars['ID'];
  /** The username used to login. */
  login: Scalars['String'];
  /** A list of repositories that the user owns. */
  repositories: GitHub_RepositoryConnection;
  /** Find Repository. */
  repository?: Maybe<GitHub_Repository>;
  /** The HTTP URL for the owner. */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for the owner. */
  url: Scalars['GitHub_URI'];
};


/** Represents an owner of a Repository. */
export type GitHub_RepositoryOwnerAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


/** Represents an owner of a Repository. */
export type GitHub_RepositoryOwnerRepositoriesArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  isFork?: Maybe<Scalars['Boolean']>;
};


/** Represents an owner of a Repository. */
export type GitHub_RepositoryOwnerRepositoryArgs = {
  name: Scalars['String'];
};

/** The access level to a repository */
export type GitHub_RepositoryPermission = 
  /**
   * Can read, clone, and push to this repository. Can also manage issues, pull
   * requests, and repository settings, including adding collaborators
   */
  | 'ADMIN'
  /** Can read, clone, and push to this repository. They can also manage issues, pull requests, and some repository settings */
  | 'MAINTAIN'
  /** Can read, clone, and push to this repository. Can also manage issues and pull requests */
  | 'WRITE'
  /** Can read and clone this repository. Can also manage issues and pull requests */
  | 'TRIAGE'
  /** Can read and clone this repository. Can also open and comment on issues and pull requests */
  | 'READ';

/** The privacy of a repository */
export type GitHub_RepositoryPrivacy = 
  /** Public */
  | 'PUBLIC'
  /** Private */
  | 'PRIVATE';

/** A repository-topic connects a repository to a topic. */
export type GitHub_RepositoryTopic = GitHub_Node & GitHub_UniformResourceLocatable & {
  id: Scalars['ID'];
  /** The HTTP path for this repository-topic. */
  resourcePath: Scalars['GitHub_URI'];
  /** The topic. */
  topic: GitHub_Topic;
  /** The HTTP URL for this repository-topic. */
  url: Scalars['GitHub_URI'];
};

/** The connection type for RepositoryTopic. */
export type GitHub_RepositoryTopicConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_RepositoryTopicEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_RepositoryTopic>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_RepositoryTopicEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_RepositoryTopic>;
};

/** The repository's visibility level. */
export type GitHub_RepositoryVisibility = 
  /** The repository is visible only to those with explicit access. */
  | 'PRIVATE'
  /** The repository is visible to everyone. */
  | 'PUBLIC'
  /** The repository is visible only to users in the same business. */
  | 'INTERNAL';

/** Audit log entry for a repository_visibility_change.disable event. */
export type GitHub_RepositoryVisibilityChangeDisableAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_EnterpriseAuditEntryData & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The slug of the enterprise. */
  enterpriseSlug?: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>;
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a repository_visibility_change.enable event. */
export type GitHub_RepositoryVisibilityChangeEnableAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_EnterpriseAuditEntryData & GitHub_OrganizationAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The slug of the enterprise. */
  enterpriseSlug?: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>;
  id: Scalars['ID'];
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** A alert for a repository with an affected vulnerability. */
export type GitHub_RepositoryVulnerabilityAlert = GitHub_Node & GitHub_RepositoryNode & {
  /** When was the alert created? */
  createdAt: Scalars['GitHub_DateTime'];
  /** The reason the alert was dismissed */
  dismissReason?: Maybe<Scalars['String']>;
  /** When was the alert dimissed? */
  dismissedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** The user who dismissed the alert */
  dismisser?: Maybe<GitHub_User>;
  id: Scalars['ID'];
  /** The associated repository */
  repository: GitHub_Repository;
  /** The associated security advisory */
  securityAdvisory?: Maybe<GitHub_SecurityAdvisory>;
  /** The associated security vulnerablity */
  securityVulnerability?: Maybe<GitHub_SecurityVulnerability>;
  /** The vulnerable manifest filename */
  vulnerableManifestFilename: Scalars['String'];
  /** The vulnerable manifest path */
  vulnerableManifestPath: Scalars['String'];
  /** The vulnerable requirements */
  vulnerableRequirements?: Maybe<Scalars['String']>;
};

/** The connection type for RepositoryVulnerabilityAlert. */
export type GitHub_RepositoryVulnerabilityAlertConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_RepositoryVulnerabilityAlertEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_RepositoryVulnerabilityAlert>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_RepositoryVulnerabilityAlertEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_RepositoryVulnerabilityAlert>;
};

/** Types that can be requested reviewers. */
export type GitHub_RequestedReviewer = GitHub_Mannequin | GitHub_Team | GitHub_User;

/** Autogenerated input type of RequestReviews */
export type GitHub_RequestReviewsInput = {
  /** The Node ID of the pull request to modify. */
  pullRequestId: Scalars['ID'];
  /** The Node IDs of the user to request. */
  userIds?: Maybe<Array<Scalars['ID']>>;
  /** The Node IDs of the team to request. */
  teamIds?: Maybe<Array<Scalars['ID']>>;
  /** Add users to the set rather than replace. */
  union?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RequestReviews */
export type GitHub_RequestReviewsPayload = {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The pull request that is getting requests. */
  pullRequest?: Maybe<GitHub_PullRequest>;
  /** The edge from the pull request to the requested reviewers. */
  requestedReviewersEdge?: Maybe<GitHub_UserEdge>;
};

/** Autogenerated input type of ResolveReviewThread */
export type GitHub_ResolveReviewThreadInput = {
  /** The ID of the thread to resolve */
  threadId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ResolveReviewThread */
export type GitHub_ResolveReviewThreadPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The thread to resolve. */
  thread?: Maybe<GitHub_PullRequestReviewThread>;
};

/** Represents a private contribution a user made on GitHub. */
export type GitHub_RestrictedContribution = GitHub_Contribution & {
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars['Boolean'];
  /** When this contribution was made. */
  occurredAt: Scalars['GitHub_DateTime'];
  /** The HTTP path for this contribution. */
  resourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this contribution. */
  url: Scalars['GitHub_URI'];
  /** The user who made this contribution. */
  user: GitHub_User;
};

/** A team or user who has the ability to dismiss a review on a protected branch. */
export type GitHub_ReviewDismissalAllowance = GitHub_Node & {
  /** The actor that can dismiss. */
  actor?: Maybe<GitHub_ReviewDismissalAllowanceActor>;
  /** Identifies the branch protection rule associated with the allowed user or team. */
  branchProtectionRule?: Maybe<GitHub_BranchProtectionRule>;
  id: Scalars['ID'];
};

/** Types that can be an actor. */
export type GitHub_ReviewDismissalAllowanceActor = GitHub_Team | GitHub_User;

/** The connection type for ReviewDismissalAllowance. */
export type GitHub_ReviewDismissalAllowanceConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ReviewDismissalAllowanceEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_ReviewDismissalAllowance>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_ReviewDismissalAllowanceEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_ReviewDismissalAllowance>;
};

/** Represents a 'review_dismissed' event on a given issue or pull request. */
export type GitHub_ReviewDismissedEvent = GitHub_Node & GitHub_UniformResourceLocatable & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** Identifies the optional message associated with the 'review_dismissed' event. */
  dismissalMessage?: Maybe<Scalars['String']>;
  /** Identifies the optional message associated with the event, rendered to HTML. */
  dismissalMessageHTML?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Identifies the previous state of the review with the 'review_dismissed' event. */
  previousReviewState: GitHub_PullRequestReviewState;
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
  /** Identifies the commit which caused the review to become stale. */
  pullRequestCommit?: Maybe<GitHub_PullRequestCommit>;
  /** The HTTP path for this review dismissed event. */
  resourcePath: Scalars['GitHub_URI'];
  /** Identifies the review associated with the 'review_dismissed' event. */
  review?: Maybe<GitHub_PullRequestReview>;
  /** The HTTP URL for this review dismissed event. */
  url: Scalars['GitHub_URI'];
};

/** A request for a user to review a pull request. */
export type GitHub_ReviewRequest = GitHub_Node & {
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  /** Identifies the pull request associated with this review request. */
  pullRequest: GitHub_PullRequest;
  /** The reviewer that is requested. */
  requestedReviewer?: Maybe<GitHub_RequestedReviewer>;
};

/** The connection type for ReviewRequest. */
export type GitHub_ReviewRequestConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ReviewRequestEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_ReviewRequest>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** Represents an 'review_requested' event on a given pull request. */
export type GitHub_ReviewRequestedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
  /** Identifies the reviewer whose review was requested. */
  requestedReviewer?: Maybe<GitHub_RequestedReviewer>;
};

/** An edge in a connection. */
export type GitHub_ReviewRequestEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_ReviewRequest>;
};

/** Represents an 'review_request_removed' event on a given pull request. */
export type GitHub_ReviewRequestRemovedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
  /** Identifies the reviewer whose review request was removed. */
  requestedReviewer?: Maybe<GitHub_RequestedReviewer>;
};

/**
 * A hovercard context with a message describing the current code review state of the pull
 * request.
 */
export type GitHub_ReviewStatusHovercardContext = GitHub_HovercardContext & {
  /** A string describing this context */
  message: Scalars['String'];
  /** An octicon to accompany this context */
  octicon: Scalars['String'];
  /** The current status of the pull request with respect to code review. */
  reviewDecision?: Maybe<GitHub_PullRequestReviewDecision>;
};

/** The possible digest algorithms used to sign SAML requests for an identity provider. */
export type GitHub_SamlDigestAlgorithm = 
  /** SHA1 */
  | 'SHA1'
  /** SHA256 */
  | 'SHA256'
  /** SHA384 */
  | 'SHA384'
  /** SHA512 */
  | 'SHA512';

/** The possible signature algorithms used to sign SAML requests for a Identity Provider. */
export type GitHub_SamlSignatureAlgorithm = 
  /** RSA-SHA1 */
  | 'RSA_SHA1'
  /** RSA-SHA256 */
  | 'RSA_SHA256'
  /** RSA-SHA384 */
  | 'RSA_SHA384'
  /** RSA-SHA512 */
  | 'RSA_SHA512';

/** A Saved Reply is text a user can use to reply quickly. */
export type GitHub_SavedReply = GitHub_Node & {
  /** The body of the saved reply. */
  body: Scalars['String'];
  /** The saved reply body rendered to HTML. */
  bodyHTML: Scalars['GitHub_HTML'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  /** The title of the saved reply. */
  title: Scalars['String'];
  /** The user that saved this reply. */
  user?: Maybe<GitHub_Actor>;
};

/** The connection type for SavedReply. */
export type GitHub_SavedReplyConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_SavedReplyEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_SavedReply>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_SavedReplyEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_SavedReply>;
};

/** Ordering options for saved reply connections. */
export type GitHub_SavedReplyOrder = {
  /** The field to order saved replies by. */
  field: GitHub_SavedReplyOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which saved reply connections can be ordered. */
export type GitHub_SavedReplyOrderField = 
  /** Order saved reply by when they were updated. */
  | 'UPDATED_AT';

/** The results of a search. */
export type GitHub_SearchResultItem = GitHub_App | GitHub_Issue | GitHub_MarketplaceListing | GitHub_Organization | GitHub_PullRequest | GitHub_Repository | GitHub_User;

/** A list of results that matched against a search query. */
export type GitHub_SearchResultItemConnection = {
  /** The number of pieces of code that matched the search query. */
  codeCount: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_SearchResultItemEdge>>>;
  /** The number of issues that matched the search query. */
  issueCount: Scalars['Int'];
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_SearchResultItem>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** The number of repositories that matched the search query. */
  repositoryCount: Scalars['Int'];
  /** The number of users that matched the search query. */
  userCount: Scalars['Int'];
  /** The number of wiki pages that matched the search query. */
  wikiCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_SearchResultItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_SearchResultItem>;
  /** Text matches on the result found. */
  textMatches?: Maybe<Array<Maybe<GitHub_TextMatch>>>;
};

/** Represents the individual results of a search. */
export type GitHub_SearchType = 
  /** Returns results matching issues in repositories. */
  | 'ISSUE'
  /** Returns results matching repositories. */
  | 'REPOSITORY'
  /** Returns results matching users and organizations on GitHub. */
  | 'USER';

/** A GitHub Security Advisory */
export type GitHub_SecurityAdvisory = GitHub_Node & {
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** This is a long plaintext description of the advisory */
  description: Scalars['String'];
  /** The GitHub Security Advisory ID */
  ghsaId: Scalars['String'];
  id: Scalars['ID'];
  /** A list of identifiers for this advisory */
  identifiers: Array<GitHub_SecurityAdvisoryIdentifier>;
  /** The organization that originated the advisory */
  origin: Scalars['String'];
  /** The permalink for the advisory */
  permalink?: Maybe<Scalars['GitHub_URI']>;
  /** When the advisory was published */
  publishedAt: Scalars['GitHub_DateTime'];
  /** A list of references for this advisory */
  references: Array<GitHub_SecurityAdvisoryReference>;
  /** The severity of the advisory */
  severity: GitHub_SecurityAdvisorySeverity;
  /** A short plaintext summary of the advisory */
  summary: Scalars['String'];
  /** When the advisory was last updated */
  updatedAt: Scalars['GitHub_DateTime'];
  /** Vulnerabilities associated with this Advisory */
  vulnerabilities: GitHub_SecurityVulnerabilityConnection;
  /** When the advisory was withdrawn, if it has been withdrawn */
  withdrawnAt?: Maybe<Scalars['GitHub_DateTime']>;
};


/** A GitHub Security Advisory */
export type GitHub_SecurityAdvisoryVulnerabilitiesArgs = {
  orderBy?: Maybe<GitHub_SecurityVulnerabilityOrder>;
  ecosystem?: Maybe<GitHub_SecurityAdvisoryEcosystem>;
  package?: Maybe<Scalars['String']>;
  severities?: Maybe<Array<GitHub_SecurityAdvisorySeverity>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for SecurityAdvisory. */
export type GitHub_SecurityAdvisoryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_SecurityAdvisoryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_SecurityAdvisory>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** The possible ecosystems of a security vulnerability's package. */
export type GitHub_SecurityAdvisoryEcosystem = 
  /** Ruby gems hosted at RubyGems.org */
  | 'RUBYGEMS'
  /** JavaScript packages hosted at npmjs.com */
  | 'NPM'
  /** Python packages hosted at PyPI.org */
  | 'PIP'
  /** Java artifacts hosted at the Maven central repository */
  | 'MAVEN'
  /** .NET packages hosted at the NuGet Gallery */
  | 'NUGET'
  /** PHP packages hosted at packagist.org */
  | 'COMPOSER';

/** An edge in a connection. */
export type GitHub_SecurityAdvisoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_SecurityAdvisory>;
};

/** A GitHub Security Advisory Identifier */
export type GitHub_SecurityAdvisoryIdentifier = {
  /** The identifier type, e.g. GHSA, CVE */
  type: Scalars['String'];
  /** The identifier */
  value: Scalars['String'];
};

/** An advisory identifier to filter results on. */
export type GitHub_SecurityAdvisoryIdentifierFilter = {
  /** The identifier type. */
  type: GitHub_SecurityAdvisoryIdentifierType;
  /** The identifier string. Supports exact or partial matching. */
  value: Scalars['String'];
};

/** Identifier formats available for advisories. */
export type GitHub_SecurityAdvisoryIdentifierType = 
  /** Common Vulnerabilities and Exposures Identifier. */
  | 'CVE'
  /** GitHub Security Advisory ID. */
  | 'GHSA';

/** Ordering options for security advisory connections */
export type GitHub_SecurityAdvisoryOrder = {
  /** The field to order security advisories by. */
  field: GitHub_SecurityAdvisoryOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which security advisory connections can be ordered. */
export type GitHub_SecurityAdvisoryOrderField = 
  /** Order advisories by publication time */
  | 'PUBLISHED_AT'
  /** Order advisories by update time */
  | 'UPDATED_AT';

/** An individual package */
export type GitHub_SecurityAdvisoryPackage = {
  /** The ecosystem the package belongs to, e.g. RUBYGEMS, NPM */
  ecosystem: GitHub_SecurityAdvisoryEcosystem;
  /** The package name */
  name: Scalars['String'];
};

/** An individual package version */
export type GitHub_SecurityAdvisoryPackageVersion = {
  /** The package name or version */
  identifier: Scalars['String'];
};

/** A GitHub Security Advisory Reference */
export type GitHub_SecurityAdvisoryReference = {
  /** A publicly accessible reference */
  url: Scalars['GitHub_URI'];
};

/** Severity of the vulnerability. */
export type GitHub_SecurityAdvisorySeverity = 
  /** Low. */
  | 'LOW'
  /** Moderate. */
  | 'MODERATE'
  /** High. */
  | 'HIGH'
  /** Critical. */
  | 'CRITICAL';

/** An individual vulnerability within an Advisory */
export type GitHub_SecurityVulnerability = {
  /** The Advisory associated with this Vulnerability */
  advisory: GitHub_SecurityAdvisory;
  /** The first version containing a fix for the vulnerability */
  firstPatchedVersion?: Maybe<GitHub_SecurityAdvisoryPackageVersion>;
  /** A description of the vulnerable package */
  package: GitHub_SecurityAdvisoryPackage;
  /** The severity of the vulnerability within this package */
  severity: GitHub_SecurityAdvisorySeverity;
  /** When the vulnerability was last updated */
  updatedAt: Scalars['GitHub_DateTime'];
  /**
   * A string that describes the vulnerable package versions.
   * This string follows a basic syntax with a few forms.
   * + `= 0.2.0` denotes a single vulnerable version.
   * + `<= 1.0.8` denotes a version range up to and including the specified version
   * + `< 0.1.11` denotes a version range up to, but excluding, the specified version
   * + `>= 4.3.0, < 4.3.5` denotes a version range with a known minimum and maximum version.
   * + `>= 0.0.1` denotes a version range with a known minimum, but no known maximum
   */
  vulnerableVersionRange: Scalars['String'];
};

/** The connection type for SecurityVulnerability. */
export type GitHub_SecurityVulnerabilityConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_SecurityVulnerabilityEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_SecurityVulnerability>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_SecurityVulnerabilityEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_SecurityVulnerability>;
};

/** Ordering options for security vulnerability connections */
export type GitHub_SecurityVulnerabilityOrder = {
  /** The field to order security vulnerabilities by. */
  field: GitHub_SecurityVulnerabilityOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which security vulnerability connections can be ordered. */
export type GitHub_SecurityVulnerabilityOrderField = 
  /** Order vulnerability by update time */
  | 'UPDATED_AT';

/** Autogenerated input type of SetEnterpriseIdentityProvider */
export type GitHub_SetEnterpriseIdentityProviderInput = {
  /** The ID of the enterprise on which to set an identity provider. */
  enterpriseId: Scalars['ID'];
  /** The URL endpoint for the identity provider's SAML SSO. */
  ssoUrl: Scalars['GitHub_URI'];
  /** The Issuer Entity ID for the SAML identity provider */
  issuer?: Maybe<Scalars['String']>;
  /** The x509 certificate used by the identity provider to sign assertions and responses. */
  idpCertificate: Scalars['String'];
  /** The signature algorithm used to sign SAML requests for the identity provider. */
  signatureMethod: GitHub_SamlSignatureAlgorithm;
  /** The digest algorithm used to sign SAML requests for the identity provider. */
  digestMethod: GitHub_SamlDigestAlgorithm;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of SetEnterpriseIdentityProvider */
export type GitHub_SetEnterpriseIdentityProviderPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The identity provider for the enterprise. */
  identityProvider?: Maybe<GitHub_EnterpriseIdentityProvider>;
};

/** Represents an S/MIME signature on a Commit or Tag. */
export type GitHub_SmimeSignature = GitHub_GitSignature & {
  /** Email used to sign this object. */
  email: Scalars['String'];
  /** True if the signature is valid and verified by GitHub. */
  isValid: Scalars['Boolean'];
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: Scalars['String'];
  /** ASCII-armored signature header from object. */
  signature: Scalars['String'];
  /** GitHub user corresponding to the email signing this commit. */
  signer?: Maybe<GitHub_User>;
  /**
   * The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  state: GitHub_GitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: Scalars['Boolean'];
};

/** Entites that can sponsor others via GitHub Sponsors */
export type GitHub_Sponsor = GitHub_Organization | GitHub_User;

/** Entities that can be sponsored through GitHub Sponsors */
export type GitHub_Sponsorable = {
  /** The GitHub Sponsors listing for this user. */
  sponsorsListing?: Maybe<GitHub_SponsorsListing>;
  /** This object's sponsorships as the maintainer. */
  sponsorshipsAsMaintainer: GitHub_SponsorshipConnection;
  /** This object's sponsorships as the sponsor. */
  sponsorshipsAsSponsor: GitHub_SponsorshipConnection;
};


/** Entities that can be sponsored through GitHub Sponsors */
export type GitHub_SponsorableSponsorshipsAsMaintainerArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<GitHub_SponsorshipOrder>;
};


/** Entities that can be sponsored through GitHub Sponsors */
export type GitHub_SponsorableSponsorshipsAsSponsorArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_SponsorshipOrder>;
};

/** A sponsorship relationship between a sponsor and a maintainer */
export type GitHub_Sponsorship = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /**
   * The entity that is being sponsored
   * @deprecated `Sponsorship.maintainer` will be removed. Use `Sponsorship.sponsorable` instead. Removal on 2020-04-01 UTC.
   */
  maintainer: GitHub_User;
  /** The privacy level for this sponsorship. */
  privacyLevel: GitHub_SponsorshipPrivacy;
  /**
   * The user that is sponsoring. Returns null if the sponsorship is private or if sponsor is not a user.
   * @deprecated `Sponsorship.sponsor` will be removed. Use `Sponsorship.sponsorEntity` instead. Removal on 2020-10-01 UTC.
   */
  sponsor?: Maybe<GitHub_User>;
  /** The user or organization that is sponsoring. Returns null if the sponsorship is private. */
  sponsorEntity?: Maybe<GitHub_Sponsor>;
  /** The entity that is being sponsored */
  sponsorable: GitHub_Sponsorable;
  /** The associated sponsorship tier */
  tier?: Maybe<GitHub_SponsorsTier>;
};

/** The connection type for Sponsorship. */
export type GitHub_SponsorshipConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_SponsorshipEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Sponsorship>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_SponsorshipEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Sponsorship>;
};

/** Ordering options for sponsorship connections. */
export type GitHub_SponsorshipOrder = {
  /** The field to order sponsorship by. */
  field: GitHub_SponsorshipOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which sponsorship connections can be ordered. */
export type GitHub_SponsorshipOrderField = 
  /** Order sponsorship by creation time. */
  | 'CREATED_AT';

/** The privacy of a sponsorship */
export type GitHub_SponsorshipPrivacy = 
  /** Public */
  | 'PUBLIC'
  /** Private */
  | 'PRIVATE';

/** A GitHub Sponsors listing. */
export type GitHub_SponsorsListing = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The full description of the listing. */
  fullDescription: Scalars['String'];
  /** The full description of the listing rendered to HTML. */
  fullDescriptionHTML: Scalars['GitHub_HTML'];
  id: Scalars['ID'];
  /** The listing's full name. */
  name: Scalars['String'];
  /** The short description of the listing. */
  shortDescription: Scalars['String'];
  /** The short name of the listing. */
  slug: Scalars['String'];
  /** The published tiers for this GitHub Sponsors listing. */
  tiers?: Maybe<GitHub_SponsorsTierConnection>;
};


/** A GitHub Sponsors listing. */
export type GitHub_SponsorsListingTiersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_SponsorsTierOrder>;
};

/** A GitHub Sponsors tier associated with a GitHub Sponsors listing. */
export type GitHub_SponsorsTier = GitHub_Node & {
  /** SponsorsTier information only visible to users that can administer the associated Sponsors listing. */
  adminInfo?: Maybe<GitHub_SponsorsTierAdminInfo>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The description of the tier. */
  description: Scalars['String'];
  /** The tier description rendered to HTML */
  descriptionHTML: Scalars['GitHub_HTML'];
  id: Scalars['ID'];
  /** How much this tier costs per month in cents. */
  monthlyPriceInCents: Scalars['Int'];
  /** How much this tier costs per month in dollars. */
  monthlyPriceInDollars: Scalars['Int'];
  /** The name of the tier. */
  name: Scalars['String'];
  /** The sponsors listing that this tier belongs to. */
  sponsorsListing: GitHub_SponsorsListing;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
};

/** SponsorsTier information only visible to users that can administer the associated Sponsors listing. */
export type GitHub_SponsorsTierAdminInfo = {
  /** The sponsorships associated with this tier. */
  sponsorships: GitHub_SponsorshipConnection;
};


/** SponsorsTier information only visible to users that can administer the associated Sponsors listing. */
export type GitHub_SponsorsTierAdminInfoSponsorshipsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<GitHub_SponsorshipOrder>;
};

/** The connection type for SponsorsTier. */
export type GitHub_SponsorsTierConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_SponsorsTierEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_SponsorsTier>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_SponsorsTierEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_SponsorsTier>;
};

/** Ordering options for Sponsors tiers connections. */
export type GitHub_SponsorsTierOrder = {
  /** The field to order tiers by. */
  field: GitHub_SponsorsTierOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which Sponsors tiers connections can be ordered. */
export type GitHub_SponsorsTierOrderField = 
  /** Order tiers by creation time. */
  | 'CREATED_AT'
  /** Order tiers by their monthly price in cents */
  | 'MONTHLY_PRICE_IN_CENTS';

/** The connection type for User. */
export type GitHub_StargazerConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_StargazerEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** Represents a user that's starred a repository. */
export type GitHub_StargazerEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  node: GitHub_User;
  /** Identifies when the item was starred. */
  starredAt: Scalars['GitHub_DateTime'];
};

/** Ways in which star connections can be ordered. */
export type GitHub_StarOrder = {
  /** The field in which to order nodes by. */
  field: GitHub_StarOrderField;
  /** The direction in which to order nodes. */
  direction: GitHub_OrderDirection;
};

/** Properties by which star connections can be ordered. */
export type GitHub_StarOrderField = 
  /** Allows ordering a list of stars by when they were created. */
  | 'STARRED_AT';

/** Things that can be starred. */
export type GitHub_Starrable = {
  id: Scalars['ID'];
  /** A list of users who have starred this starrable. */
  stargazers: GitHub_StargazerConnection;
  /** Returns a boolean indicating whether the viewing user has starred this starrable. */
  viewerHasStarred: Scalars['Boolean'];
};


/** Things that can be starred. */
export type GitHub_StarrableStargazersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_StarOrder>;
};

/** The connection type for Repository. */
export type GitHub_StarredRepositoryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_StarredRepositoryEdge>>>;
  /** Is the list of stars for this user truncated? This is true for users that have many stars. */
  isOverLimit: Scalars['Boolean'];
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Repository>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** Represents a starred repository. */
export type GitHub_StarredRepositoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  node: GitHub_Repository;
  /** Identifies when the item was starred. */
  starredAt: Scalars['GitHub_DateTime'];
};

/** Represents a commit status. */
export type GitHub_Status = GitHub_Node & {
  /** The commit this status is attached to. */
  commit?: Maybe<GitHub_Commit>;
  /** Looks up an individual status context by context name. */
  context?: Maybe<GitHub_StatusContext>;
  /** The individual status contexts for this commit. */
  contexts: Array<GitHub_StatusContext>;
  id: Scalars['ID'];
  /** The combined commit status. */
  state: GitHub_StatusState;
};


/** Represents a commit status. */
export type GitHub_StatusContextArgs = {
  name: Scalars['String'];
};

/** Represents the rollup for both the check runs and status for a commit. */
export type GitHub_StatusCheckRollup = GitHub_Node & {
  /** The commit the status and check runs are attached to. */
  commit?: Maybe<GitHub_Commit>;
  /** A list of status contexts and check runs for this commit. */
  contexts: GitHub_StatusCheckRollupContextConnection;
  id: Scalars['ID'];
  /** The combined status for the commit. */
  state: GitHub_StatusState;
};


/** Represents the rollup for both the check runs and status for a commit. */
export type GitHub_StatusCheckRollupContextsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Types that can be inside a StatusCheckRollup context. */
export type GitHub_StatusCheckRollupContext = GitHub_StatusContext;

/** The connection type for StatusCheckRollupContext. */
export type GitHub_StatusCheckRollupContextConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_StatusCheckRollupContextEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_StatusCheckRollupContext>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_StatusCheckRollupContextEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_StatusCheckRollupContext>;
};

/** Represents an individual commit status context */
export type GitHub_StatusContext = GitHub_Node & {
  /** The avatar of the OAuth application or the user that created the status */
  avatarUrl?: Maybe<Scalars['GitHub_URI']>;
  /** This commit this status context is attached to. */
  commit?: Maybe<GitHub_Commit>;
  /** The name of this status context. */
  context: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The actor who created this status context. */
  creator?: Maybe<GitHub_Actor>;
  /** The description for this status context. */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The state of this status context. */
  state: GitHub_StatusState;
  /** The URL for this status context. */
  targetUrl?: Maybe<Scalars['GitHub_URI']>;
};


/** Represents an individual commit status context */
export type GitHub_StatusContextAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

/** The possible commit status states. */
export type GitHub_StatusState = 
  /** Status is expected. */
  | 'EXPECTED'
  /** Status is errored. */
  | 'ERROR'
  /** Status is failing. */
  | 'FAILURE'
  /** Status is pending. */
  | 'PENDING'
  /** Status is successful. */
  | 'SUCCESS';

/** Autogenerated input type of SubmitPullRequestReview */
export type GitHub_SubmitPullRequestReviewInput = {
  /** The Pull Request ID to submit any pending reviews. */
  pullRequestId?: Maybe<Scalars['ID']>;
  /** The Pull Request Review ID to submit. */
  pullRequestReviewId?: Maybe<Scalars['ID']>;
  /** The event to send to the Pull Request Review. */
  event: GitHub_PullRequestReviewEvent;
  /** The text field to set on the Pull Request Review. */
  body?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of SubmitPullRequestReview */
export type GitHub_SubmitPullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The submitted pull request review. */
  pullRequestReview?: Maybe<GitHub_PullRequestReview>;
};

/** A pointer to a repository at a specific revision embedded inside another repository. */
export type GitHub_Submodule = {
  /** The branch of the upstream submodule for tracking updates */
  branch?: Maybe<Scalars['String']>;
  /** The git URL of the submodule repository */
  gitUrl: Scalars['GitHub_URI'];
  /** The name of the submodule in .gitmodules */
  name: Scalars['String'];
  /** The path in the superproject that this submodule is located in */
  path: Scalars['String'];
  /** The commit revision of the subproject repository being tracked by the submodule */
  subprojectCommitOid?: Maybe<Scalars['GitHub_GitObjectID']>;
};

/** The connection type for Submodule. */
export type GitHub_SubmoduleConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_SubmoduleEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Submodule>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_SubmoduleEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Submodule>;
};

/** Entities that can be subscribed to for web and email notifications. */
export type GitHub_Subscribable = {
  id: Scalars['ID'];
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: Scalars['Boolean'];
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: Maybe<GitHub_SubscriptionState>;
};

/** Represents a 'subscribed' event on a given `Subscribable`. */
export type GitHub_SubscribedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** Object referenced by event. */
  subscribable: GitHub_Subscribable;
};

/** The possible states of a subscription. */
export type GitHub_SubscriptionState = 
  /** The User is only notified when participating or @mentioned. */
  | 'UNSUBSCRIBED'
  /** The User is notified of all conversations. */
  | 'SUBSCRIBED'
  /** The User is never notified. */
  | 'IGNORED';

/** A suggestion to review a pull request based on a user's commit history and review comments. */
export type GitHub_SuggestedReviewer = {
  /** Is this suggestion based on past commits? */
  isAuthor: Scalars['Boolean'];
  /** Is this suggestion based on past review comments? */
  isCommenter: Scalars['Boolean'];
  /** Identifies the user suggested to review the pull request. */
  reviewer: GitHub_User;
};

/** Represents a Git tag. */
export type GitHub_Tag = GitHub_Node & GitHub_GitObject & {
  /** An abbreviated version of the Git object ID */
  abbreviatedOid: Scalars['String'];
  /** The HTTP path for this Git object */
  commitResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this Git object */
  commitUrl: Scalars['GitHub_URI'];
  id: Scalars['ID'];
  /** The Git tag message. */
  message?: Maybe<Scalars['String']>;
  /** The Git tag name. */
  name: Scalars['String'];
  /** The Git object ID */
  oid: Scalars['GitHub_GitObjectID'];
  /** The Repository the Git object belongs to */
  repository: GitHub_Repository;
  /** Details about the tag author. */
  tagger?: Maybe<GitHub_GitActor>;
  /** The Git object the tag points to. */
  target: GitHub_GitObject;
};

/** A team of users in an organization. */
export type GitHub_Team = GitHub_Node & GitHub_Subscribable & GitHub_MemberStatusable & {
  /** A list of teams that are ancestors of this team. */
  ancestors: GitHub_TeamConnection;
  /** A URL pointing to the team's avatar. */
  avatarUrl?: Maybe<Scalars['GitHub_URI']>;
  /** List of child teams belonging to this team */
  childTeams: GitHub_TeamConnection;
  /** The slug corresponding to the organization and team. */
  combinedSlug: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The description of the team. */
  description?: Maybe<Scalars['String']>;
  /** Find a team discussion by its number. */
  discussion?: Maybe<GitHub_TeamDiscussion>;
  /** A list of team discussions. */
  discussions: GitHub_TeamDiscussionConnection;
  /** The HTTP path for team discussions */
  discussionsResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for team discussions */
  discussionsUrl: Scalars['GitHub_URI'];
  /** The HTTP path for editing this team */
  editTeamResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for editing this team */
  editTeamUrl: Scalars['GitHub_URI'];
  id: Scalars['ID'];
  /** A list of pending invitations for users to this team */
  invitations?: Maybe<GitHub_OrganizationInvitationConnection>;
  /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
  memberStatuses: GitHub_UserStatusConnection;
  /** A list of users who are members of this team. */
  members: GitHub_TeamMemberConnection;
  /** The HTTP path for the team' members */
  membersResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for the team' members */
  membersUrl: Scalars['GitHub_URI'];
  /** The name of the team. */
  name: Scalars['String'];
  /** The HTTP path creating a new team */
  newTeamResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL creating a new team */
  newTeamUrl: Scalars['GitHub_URI'];
  /** The organization that owns this team. */
  organization: GitHub_Organization;
  /** The parent team of the team. */
  parentTeam?: Maybe<GitHub_Team>;
  /** The level of privacy the team has. */
  privacy: GitHub_TeamPrivacy;
  /** A list of repositories this team has access to. */
  repositories: GitHub_TeamRepositoryConnection;
  /** The HTTP path for this team's repositories */
  repositoriesResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this team's repositories */
  repositoriesUrl: Scalars['GitHub_URI'];
  /** The HTTP path for this team */
  resourcePath: Scalars['GitHub_URI'];
  /** The slug corresponding to the team. */
  slug: Scalars['String'];
  /** The HTTP path for this team's teams */
  teamsResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this team's teams */
  teamsUrl: Scalars['GitHub_URI'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this team */
  url: Scalars['GitHub_URI'];
  /** Team is adminable by the viewer. */
  viewerCanAdminister: Scalars['Boolean'];
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: Scalars['Boolean'];
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: Maybe<GitHub_SubscriptionState>;
};


/** A team of users in an organization. */
export type GitHub_TeamAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A team of users in an organization. */
export type GitHub_TeamAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


/** A team of users in an organization. */
export type GitHub_TeamChildTeamsArgs = {
  orderBy?: Maybe<GitHub_TeamOrder>;
  userLogins?: Maybe<Array<Scalars['String']>>;
  immediateOnly?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A team of users in an organization. */
export type GitHub_TeamDiscussionArgs = {
  number: Scalars['Int'];
};


/** A team of users in an organization. */
export type GitHub_TeamDiscussionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  isPinned?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<GitHub_TeamDiscussionOrder>;
};


/** A team of users in an organization. */
export type GitHub_TeamInvitationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A team of users in an organization. */
export type GitHub_TeamMemberStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_UserStatusOrder>;
};


/** A team of users in an organization. */
export type GitHub_TeamMembersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  membership?: Maybe<GitHub_TeamMembershipType>;
  role?: Maybe<GitHub_TeamMemberRole>;
  orderBy?: Maybe<GitHub_TeamMemberOrder>;
};


/** A team of users in an organization. */
export type GitHub_TeamRepositoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<GitHub_TeamRepositoryOrder>;
};

/** Audit log entry for a team.add_member event. */
export type GitHub_TeamAddMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_TeamAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** Whether the team was mapped to an LDAP Group. */
  isLdapMapped?: Maybe<Scalars['Boolean']>;
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The team associated with the action */
  team?: Maybe<GitHub_Team>;
  /** The name of the team */
  teamName?: Maybe<Scalars['String']>;
  /** The HTTP path for this team */
  teamResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for this team */
  teamUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a team.add_repository event. */
export type GitHub_TeamAddRepositoryAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & GitHub_TeamAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** Whether the team was mapped to an LDAP Group. */
  isLdapMapped?: Maybe<Scalars['Boolean']>;
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The team associated with the action */
  team?: Maybe<GitHub_Team>;
  /** The name of the team */
  teamName?: Maybe<Scalars['String']>;
  /** The HTTP path for this team */
  teamResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for this team */
  teamUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Metadata for an audit entry with action team.* */
export type GitHub_TeamAuditEntryData = {
  /** The team associated with the action */
  team?: Maybe<GitHub_Team>;
  /** The name of the team */
  teamName?: Maybe<Scalars['String']>;
  /** The HTTP path for this team */
  teamResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for this team */
  teamUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a team.change_parent_team event. */
export type GitHub_TeamChangeParentTeamAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_TeamAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** Whether the team was mapped to an LDAP Group. */
  isLdapMapped?: Maybe<Scalars['Boolean']>;
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The new parent team. */
  parentTeam?: Maybe<GitHub_Team>;
  /** The name of the new parent team */
  parentTeamName?: Maybe<Scalars['String']>;
  /** The name of the former parent team */
  parentTeamNameWas?: Maybe<Scalars['String']>;
  /** The HTTP path for the parent team */
  parentTeamResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the parent team */
  parentTeamUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The former parent team. */
  parentTeamWas?: Maybe<GitHub_Team>;
  /** The HTTP path for the previous parent team */
  parentTeamWasResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the previous parent team */
  parentTeamWasUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The team associated with the action */
  team?: Maybe<GitHub_Team>;
  /** The name of the team */
  teamName?: Maybe<Scalars['String']>;
  /** The HTTP path for this team */
  teamResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for this team */
  teamUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** The connection type for Team. */
export type GitHub_TeamConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_TeamEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Team>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** A team discussion. */
export type GitHub_TeamDiscussion = GitHub_Node & GitHub_Comment & GitHub_Deletable & GitHub_Reactable & GitHub_Subscribable & GitHub_UniformResourceLocatable & GitHub_Updatable & GitHub_UpdatableComment & {
  /** The actor who authored the comment. */
  author?: Maybe<GitHub_Actor>;
  /** Author's association with the discussion's team. */
  authorAssociation: GitHub_CommentAuthorAssociation;
  /** The body as Markdown. */
  body: Scalars['String'];
  /** The body rendered to HTML. */
  bodyHTML: Scalars['GitHub_HTML'];
  /** The body rendered to text. */
  bodyText: Scalars['String'];
  /** Identifies the discussion body hash. */
  bodyVersion: Scalars['String'];
  /** A list of comments on this discussion. */
  comments: GitHub_TeamDiscussionCommentConnection;
  /** The HTTP path for discussion comments */
  commentsResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for discussion comments */
  commentsUrl: Scalars['GitHub_URI'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Check if this comment was created via an email reply. */
  createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The actor who edited the comment. */
  editor?: Maybe<GitHub_Actor>;
  id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: Scalars['Boolean'];
  /** Whether or not the discussion is pinned. */
  isPinned: Scalars['Boolean'];
  /** Whether or not the discussion is only visible to team members and org admins. */
  isPrivate: Scalars['Boolean'];
  /** The moment the editor made the last edit */
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** Identifies the discussion within its team. */
  number: Scalars['Int'];
  /** Identifies when the comment was published at. */
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  reactions: GitHub_ReactionConnection;
  /** The HTTP path for this discussion */
  resourcePath: Scalars['GitHub_URI'];
  /** The team that defines the context of this discussion. */
  team: GitHub_Team;
  /** The title of the discussion */
  title: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this discussion */
  url: Scalars['GitHub_URI'];
  /** A list of edits to this content. */
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: Scalars['Boolean'];
  /** Whether or not the current viewer can pin this discussion. */
  viewerCanPin: Scalars['Boolean'];
  /** Can user react to this subject */
  viewerCanReact: Scalars['Boolean'];
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  viewerDidAuthor: Scalars['Boolean'];
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: Maybe<GitHub_SubscriptionState>;
};


/** A team discussion. */
export type GitHub_TeamDiscussionCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_TeamDiscussionCommentOrder>;
  fromComment?: Maybe<Scalars['Int']>;
};


/** A team discussion. */
export type GitHub_TeamDiscussionReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<GitHub_ReactionContent>;
  orderBy?: Maybe<GitHub_ReactionOrder>;
};


/** A team discussion. */
export type GitHub_TeamDiscussionUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A comment on a team discussion. */
export type GitHub_TeamDiscussionComment = GitHub_Node & GitHub_Comment & GitHub_Deletable & GitHub_Reactable & GitHub_UniformResourceLocatable & GitHub_Updatable & GitHub_UpdatableComment & {
  /** The actor who authored the comment. */
  author?: Maybe<GitHub_Actor>;
  /** Author's association with the comment's team. */
  authorAssociation: GitHub_CommentAuthorAssociation;
  /** The body as Markdown. */
  body: Scalars['String'];
  /** The body rendered to HTML. */
  bodyHTML: Scalars['GitHub_HTML'];
  /** The body rendered to text. */
  bodyText: Scalars['String'];
  /** The current version of the body content. */
  bodyVersion: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Check if this comment was created via an email reply. */
  createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The discussion this comment is about. */
  discussion: GitHub_TeamDiscussion;
  /** The actor who edited the comment. */
  editor?: Maybe<GitHub_Actor>;
  id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: Scalars['Boolean'];
  /** The moment the editor made the last edit */
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** Identifies the comment number. */
  number: Scalars['Int'];
  /** Identifies when the comment was published at. */
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  reactions: GitHub_ReactionConnection;
  /** The HTTP path for this comment */
  resourcePath: Scalars['GitHub_URI'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this comment */
  url: Scalars['GitHub_URI'];
  /** A list of edits to this content. */
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: Scalars['Boolean'];
  /** Can user react to this subject */
  viewerCanReact: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  viewerDidAuthor: Scalars['Boolean'];
};


/** A comment on a team discussion. */
export type GitHub_TeamDiscussionCommentReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<GitHub_ReactionContent>;
  orderBy?: Maybe<GitHub_ReactionOrder>;
};


/** A comment on a team discussion. */
export type GitHub_TeamDiscussionCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for TeamDiscussionComment. */
export type GitHub_TeamDiscussionCommentConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_TeamDiscussionCommentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_TeamDiscussionComment>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_TeamDiscussionCommentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_TeamDiscussionComment>;
};

/** Ways in which team discussion comment connections can be ordered. */
export type GitHub_TeamDiscussionCommentOrder = {
  /** The field by which to order nodes. */
  field: GitHub_TeamDiscussionCommentOrderField;
  /** The direction in which to order nodes. */
  direction: GitHub_OrderDirection;
};

/** Properties by which team discussion comment connections can be ordered. */
export type GitHub_TeamDiscussionCommentOrderField = 
  /** Allows sequential ordering of team discussion comments (which is equivalent to chronological ordering). */
  | 'NUMBER';

/** The connection type for TeamDiscussion. */
export type GitHub_TeamDiscussionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_TeamDiscussionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_TeamDiscussion>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_TeamDiscussionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_TeamDiscussion>;
};

/** Ways in which team discussion connections can be ordered. */
export type GitHub_TeamDiscussionOrder = {
  /** The field by which to order nodes. */
  field: GitHub_TeamDiscussionOrderField;
  /** The direction in which to order nodes. */
  direction: GitHub_OrderDirection;
};

/** Properties by which team discussion connections can be ordered. */
export type GitHub_TeamDiscussionOrderField = 
  /** Allows chronological ordering of team discussions. */
  | 'CREATED_AT';

/** An edge in a connection. */
export type GitHub_TeamEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Team>;
};

/** The connection type for User. */
export type GitHub_TeamMemberConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_TeamMemberEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** Represents a user who is a member of a team. */
export type GitHub_TeamMemberEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The HTTP path to the organization's member access page. */
  memberAccessResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL to the organization's member access page. */
  memberAccessUrl: Scalars['GitHub_URI'];
  node: GitHub_User;
  /** The role the member has on the team. */
  role: GitHub_TeamMemberRole;
};

/** Ordering options for team member connections */
export type GitHub_TeamMemberOrder = {
  /** The field to order team members by. */
  field: GitHub_TeamMemberOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which team member connections can be ordered. */
export type GitHub_TeamMemberOrderField = 
  /** Order team members by login */
  | 'LOGIN'
  /** Order team members by creation time */
  | 'CREATED_AT';

/** The possible team member roles; either 'maintainer' or 'member'. */
export type GitHub_TeamMemberRole = 
  /** A team maintainer has permission to add and remove team members. */
  | 'MAINTAINER'
  /** A team member has no administrative permissions on the team. */
  | 'MEMBER';

/** Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL. */
export type GitHub_TeamMembershipType = 
  /** Includes only immediate members of the team. */
  | 'IMMEDIATE'
  /** Includes only child team members for the team. */
  | 'CHILD_TEAM'
  /** Includes immediate and child team members for the team. */
  | 'ALL';

/** Ways in which team connections can be ordered. */
export type GitHub_TeamOrder = {
  /** The field in which to order nodes by. */
  field: GitHub_TeamOrderField;
  /** The direction in which to order nodes. */
  direction: GitHub_OrderDirection;
};

/** Properties by which team connections can be ordered. */
export type GitHub_TeamOrderField = 
  /** Allows ordering a list of teams by name. */
  | 'NAME';

/** The possible team privacy values. */
export type GitHub_TeamPrivacy = 
  /** A secret team can only be seen by its members. */
  | 'SECRET'
  /** A visible team can be seen and @mentioned by every member of the organization. */
  | 'VISIBLE';

/** Audit log entry for a team.remove_member event. */
export type GitHub_TeamRemoveMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_TeamAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** Whether the team was mapped to an LDAP Group. */
  isLdapMapped?: Maybe<Scalars['Boolean']>;
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The team associated with the action */
  team?: Maybe<GitHub_Team>;
  /** The name of the team */
  teamName?: Maybe<Scalars['String']>;
  /** The HTTP path for this team */
  teamResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for this team */
  teamUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** Audit log entry for a team.remove_repository event. */
export type GitHub_TeamRemoveRepositoryAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & GitHub_TeamAuditEntryData & {
  /** The action name */
  action: Scalars['String'];
  /** The user who initiated the action */
  actor?: Maybe<GitHub_AuditEntryActor>;
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<GitHub_ActorLocation>;
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The time the action was initiated */
  createdAt: Scalars['GitHub_PreciseDateTime'];
  id: Scalars['ID'];
  /** Whether the team was mapped to an LDAP Group. */
  isLdapMapped?: Maybe<Scalars['Boolean']>;
  /** The corresponding operation type for the action */
  operationType?: Maybe<GitHub_OperationType>;
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<GitHub_Organization>;
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The repository associated with the action */
  repository?: Maybe<GitHub_Repository>;
  /** The name of the repository */
  repositoryName?: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The team associated with the action */
  team?: Maybe<GitHub_Team>;
  /** The name of the team */
  teamName?: Maybe<Scalars['String']>;
  /** The HTTP path for this team */
  teamResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for this team */
  teamUrl?: Maybe<Scalars['GitHub_URI']>;
  /** The user affected by the action */
  user?: Maybe<GitHub_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars['GitHub_URI']>;
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars['GitHub_URI']>;
};

/** The connection type for Repository. */
export type GitHub_TeamRepositoryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_TeamRepositoryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Repository>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** Represents a team repository. */
export type GitHub_TeamRepositoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  node: GitHub_Repository;
  /**
   * The permission level the team has on the repository
   * 
   * **Upcoming Change on 2020-10-01 UTC**
   * **Description:** Type for `permission` will change from `RepositoryPermission!` to `String`.
   * **Reason:** This field may return additional values
   */
  permission: GitHub_RepositoryPermission;
};

/** Ordering options for team repository connections */
export type GitHub_TeamRepositoryOrder = {
  /** The field to order repositories by. */
  field: GitHub_TeamRepositoryOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which team repository connections can be ordered. */
export type GitHub_TeamRepositoryOrderField = 
  /** Order repositories by creation time */
  | 'CREATED_AT'
  /** Order repositories by update time */
  | 'UPDATED_AT'
  /** Order repositories by push time */
  | 'PUSHED_AT'
  /** Order repositories by name */
  | 'NAME'
  /** Order repositories by permission */
  | 'PERMISSION'
  /** Order repositories by number of stargazers */
  | 'STARGAZERS';

/** The role of a user on a team. */
export type GitHub_TeamRole = 
  /** User has admin rights on the team. */
  | 'ADMIN'
  /** User is a member of the team. */
  | 'MEMBER';

/** A text match within a search result. */
export type GitHub_TextMatch = {
  /** The specific text fragment within the property matched on. */
  fragment: Scalars['String'];
  /** Highlights within the matched fragment. */
  highlights: Array<GitHub_TextMatchHighlight>;
  /** The property matched on. */
  property: Scalars['String'];
};

/** Represents a single highlight in a search result match. */
export type GitHub_TextMatchHighlight = {
  /** The indice in the fragment where the matched text begins. */
  beginIndice: Scalars['Int'];
  /** The indice in the fragment where the matched text ends. */
  endIndice: Scalars['Int'];
  /** The text matched. */
  text: Scalars['String'];
};

/** A topic aggregates entities that are related to a subject. */
export type GitHub_Topic = GitHub_Node & GitHub_Starrable & {
  id: Scalars['ID'];
  /** The topic's name. */
  name: Scalars['String'];
  /**
   * A list of related topics, including aliases of this topic, sorted with the most relevant
   * first. Returns up to 10 Topics.
   */
  relatedTopics: Array<GitHub_Topic>;
  /** A list of users who have starred this starrable. */
  stargazers: GitHub_StargazerConnection;
  /** Returns a boolean indicating whether the viewing user has starred this starrable. */
  viewerHasStarred: Scalars['Boolean'];
};


/** A topic aggregates entities that are related to a subject. */
export type GitHub_TopicRelatedTopicsArgs = {
  first?: Maybe<Scalars['Int']>;
};


/** A topic aggregates entities that are related to a subject. */
export type GitHub_TopicStargazersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_StarOrder>;
};

/** Metadata for an audit entry with a topic. */
export type GitHub_TopicAuditEntryData = {
  /** The name of the topic added to the repository */
  topic?: Maybe<GitHub_Topic>;
  /** The name of the topic added to the repository */
  topicName?: Maybe<Scalars['String']>;
};

/** Reason that the suggested topic is declined. */
export type GitHub_TopicSuggestionDeclineReason = 
  /** The suggested topic is not relevant to the repository. */
  | 'NOT_RELEVANT'
  /** The suggested topic is too specific for the repository (e.g. #ruby-on-rails-version-4-2-1). */
  | 'TOO_SPECIFIC'
  /** The viewer does not like the suggested topic. */
  | 'PERSONAL_PREFERENCE'
  /** The suggested topic is too general for the repository. */
  | 'TOO_GENERAL';

/** Autogenerated input type of TransferIssue */
export type GitHub_TransferIssueInput = {
  /** The Node ID of the issue to be transferred */
  issueId: Scalars['ID'];
  /** The Node ID of the repository the issue should be transferred to */
  repositoryId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of TransferIssue */
export type GitHub_TransferIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The issue that was transferred */
  issue?: Maybe<GitHub_Issue>;
};

/** Represents a 'transferred' event on a given issue or pull request. */
export type GitHub_TransferredEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** The repository this came from */
  fromRepository?: Maybe<GitHub_Repository>;
  id: Scalars['ID'];
  /** Identifies the issue associated with the event. */
  issue: GitHub_Issue;
};

/** Represents a Git tree. */
export type GitHub_Tree = GitHub_Node & GitHub_GitObject & {
  /** An abbreviated version of the Git object ID */
  abbreviatedOid: Scalars['String'];
  /** The HTTP path for this Git object */
  commitResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL for this Git object */
  commitUrl: Scalars['GitHub_URI'];
  /** A list of tree entries. */
  entries?: Maybe<Array<GitHub_TreeEntry>>;
  id: Scalars['ID'];
  /** The Git object ID */
  oid: Scalars['GitHub_GitObjectID'];
  /** The Repository the Git object belongs to */
  repository: GitHub_Repository;
};

/** Represents a Git tree entry. */
export type GitHub_TreeEntry = {
  /** Entry file mode. */
  mode: Scalars['Int'];
  /** Entry file name. */
  name: Scalars['String'];
  /** Entry file object. */
  object?: Maybe<GitHub_GitObject>;
  /** Entry file Git object ID. */
  oid: Scalars['GitHub_GitObjectID'];
  /** The Repository the tree entry belongs to */
  repository: GitHub_Repository;
  /** If the TreeEntry is for a directory occupied by a submodule project, this returns the corresponding submodule */
  submodule?: Maybe<GitHub_Submodule>;
  /** Entry file type. */
  type: Scalars['String'];
};

/** Autogenerated input type of UnarchiveRepository */
export type GitHub_UnarchiveRepositoryInput = {
  /** The ID of the repository to unarchive. */
  repositoryId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UnarchiveRepository */
export type GitHub_UnarchiveRepositoryPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The repository that was unarchived. */
  repository?: Maybe<GitHub_Repository>;
};

/** Represents an 'unassigned' event on any assignable object. */
export type GitHub_UnassignedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the assignable associated with the event. */
  assignable: GitHub_Assignable;
  /** Identifies the user or mannequin that was unassigned. */
  assignee?: Maybe<GitHub_Assignee>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /**
   * Identifies the subject (user) who was unassigned.
   * @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC.
   */
  user?: Maybe<GitHub_User>;
};

/** Autogenerated input type of UnfollowUser */
export type GitHub_UnfollowUserInput = {
  /** ID of the user to unfollow. */
  userId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UnfollowUser */
export type GitHub_UnfollowUserPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The user that was unfollowed. */
  user?: Maybe<GitHub_User>;
};

/** Represents a type that can be retrieved by a URL. */
export type GitHub_UniformResourceLocatable = {
  /** The HTML path to this resource. */
  resourcePath: Scalars['GitHub_URI'];
  /** The URL to this resource. */
  url: Scalars['GitHub_URI'];
};

/** Represents an unknown signature on a Commit or Tag. */
export type GitHub_UnknownSignature = GitHub_GitSignature & {
  /** Email used to sign this object. */
  email: Scalars['String'];
  /** True if the signature is valid and verified by GitHub. */
  isValid: Scalars['Boolean'];
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: Scalars['String'];
  /** ASCII-armored signature header from object. */
  signature: Scalars['String'];
  /** GitHub user corresponding to the email signing this commit. */
  signer?: Maybe<GitHub_User>;
  /**
   * The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  state: GitHub_GitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: Scalars['Boolean'];
};

/** Represents an 'unlabeled' event on a given issue or pull request. */
export type GitHub_UnlabeledEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** Identifies the label associated with the 'unlabeled' event. */
  label: GitHub_Label;
  /** Identifies the `Labelable` associated with the event. */
  labelable: GitHub_Labelable;
};

/** Autogenerated input type of UnlinkRepositoryFromProject */
export type GitHub_UnlinkRepositoryFromProjectInput = {
  /** The ID of the Project linked to the Repository. */
  projectId: Scalars['ID'];
  /** The ID of the Repository linked to the Project. */
  repositoryId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UnlinkRepositoryFromProject */
export type GitHub_UnlinkRepositoryFromProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The linked Project. */
  project?: Maybe<GitHub_Project>;
  /** The linked Repository. */
  repository?: Maybe<GitHub_Repository>;
};

/** Represents an 'unlocked' event on a given issue or pull request. */
export type GitHub_UnlockedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** Object that was unlocked. */
  lockable: GitHub_Lockable;
};

/** Autogenerated input type of UnlockLockable */
export type GitHub_UnlockLockableInput = {
  /** ID of the issue or pull request to be unlocked. */
  lockableId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UnlockLockable */
export type GitHub_UnlockLockablePayload = {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The item that was unlocked. */
  unlockedRecord?: Maybe<GitHub_Lockable>;
};

/** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
export type GitHub_UnmarkedAsDuplicateEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
};

/** Autogenerated input type of UnmarkIssueAsDuplicate */
export type GitHub_UnmarkIssueAsDuplicateInput = {
  /** ID of the issue or pull request currently marked as a duplicate. */
  duplicateId: Scalars['ID'];
  /** ID of the issue or pull request currently considered canonical/authoritative/original. */
  canonicalId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UnmarkIssueAsDuplicate */
export type GitHub_UnmarkIssueAsDuplicatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The issue or pull request that was marked as a duplicate. */
  duplicate?: Maybe<GitHub_IssueOrPullRequest>;
};

/** Autogenerated input type of UnminimizeComment */
export type GitHub_UnminimizeCommentInput = {
  /** The Node ID of the subject to modify. */
  subjectId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UnminimizeComment */
export type GitHub_UnminimizeCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment that was unminimized. */
  unminimizedComment?: Maybe<GitHub_Minimizable>;
};

/** Represents an 'unpinned' event on a given issue or pull request. */
export type GitHub_UnpinnedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** Identifies the issue associated with the event. */
  issue: GitHub_Issue;
};

/** Autogenerated input type of UnresolveReviewThread */
export type GitHub_UnresolveReviewThreadInput = {
  /** The ID of the thread to unresolve */
  threadId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UnresolveReviewThread */
export type GitHub_UnresolveReviewThreadPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The thread to resolve. */
  thread?: Maybe<GitHub_PullRequestReviewThread>;
};

/** Represents an 'unsubscribed' event on a given `Subscribable`. */
export type GitHub_UnsubscribedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** Object referenced by event. */
  subscribable: GitHub_Subscribable;
};

/** Entities that can be updated. */
export type GitHub_Updatable = {
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: Scalars['Boolean'];
};

/** Comments that can be updated. */
export type GitHub_UpdatableComment = {
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
};

/** Autogenerated input type of UpdateBranchProtectionRule */
export type GitHub_UpdateBranchProtectionRuleInput = {
  /** The global relay id of the branch protection rule to be updated. */
  branchProtectionRuleId: Scalars['ID'];
  /** The glob-like pattern used to determine matching branches. */
  pattern?: Maybe<Scalars['String']>;
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews?: Maybe<Scalars['Boolean']>;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<Scalars['Int']>;
  /** Are commits required to be signed. */
  requiresCommitSignatures?: Maybe<Scalars['Boolean']>;
  /** Can admins overwrite branch protection. */
  isAdminEnforced?: Maybe<Scalars['Boolean']>;
  /** Are status checks required to update matching branches. */
  requiresStatusChecks?: Maybe<Scalars['Boolean']>;
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks?: Maybe<Scalars['Boolean']>;
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews?: Maybe<Scalars['Boolean']>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews?: Maybe<Scalars['Boolean']>;
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals?: Maybe<Scalars['Boolean']>;
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  reviewDismissalActorIds?: Maybe<Array<Scalars['ID']>>;
  /** Is pushing to matching branches restricted. */
  restrictsPushes?: Maybe<Scalars['Boolean']>;
  /** A list of User, Team or App IDs allowed to push to matching branches. */
  pushActorIds?: Maybe<Array<Scalars['ID']>>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<Array<Scalars['String']>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateBranchProtectionRule */
export type GitHub_UpdateBranchProtectionRulePayload = {
  /** The newly created BranchProtectionRule. */
  branchProtectionRule?: Maybe<GitHub_BranchProtectionRule>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseActionExecutionCapabilitySetting */
export type GitHub_UpdateEnterpriseActionExecutionCapabilitySettingInput = {
  /** The ID of the enterprise on which to set the members can create repositories setting. */
  enterpriseId: Scalars['ID'];
  /** The value for the action execution capability setting on the enterprise. */
  capability: GitHub_ActionExecutionCapabilitySetting;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseActionExecutionCapabilitySetting */
export type GitHub_UpdateEnterpriseActionExecutionCapabilitySettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The enterprise with the updated action execution capability setting. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** A message confirming the result of updating the action execution capability setting. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseAdministratorRole */
export type GitHub_UpdateEnterpriseAdministratorRoleInput = {
  /** The ID of the Enterprise which the admin belongs to. */
  enterpriseId: Scalars['ID'];
  /** The login of a administrator whose role is being changed. */
  login: Scalars['String'];
  /** The new role for the Enterprise administrator. */
  role: GitHub_EnterpriseAdministratorRole;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseAdministratorRole */
export type GitHub_UpdateEnterpriseAdministratorRolePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A message confirming the result of changing the administrator's role. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseAllowPrivateRepositoryForkingSetting */
export type GitHub_UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = {
  /** The ID of the enterprise on which to set the allow private repository forking setting. */
  enterpriseId: Scalars['ID'];
  /** The value for the allow private repository forking setting on the enterprise. */
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseAllowPrivateRepositoryForkingSetting */
export type GitHub_UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The enterprise with the updated allow private repository forking setting. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** A message confirming the result of updating the allow private repository forking setting. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseDefaultRepositoryPermissionSetting */
export type GitHub_UpdateEnterpriseDefaultRepositoryPermissionSettingInput = {
  /** The ID of the enterprise on which to set the default repository permission setting. */
  enterpriseId: Scalars['ID'];
  /** The value for the default repository permission setting on the enterprise. */
  settingValue: GitHub_EnterpriseDefaultRepositoryPermissionSettingValue;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseDefaultRepositoryPermissionSetting */
export type GitHub_UpdateEnterpriseDefaultRepositoryPermissionSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The enterprise with the updated default repository permission setting. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** A message confirming the result of updating the default repository permission setting. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseMembersCanChangeRepositoryVisibilitySetting */
export type GitHub_UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = {
  /** The ID of the enterprise on which to set the members can change repository visibility setting. */
  enterpriseId: Scalars['ID'];
  /** The value for the members can change repository visibility setting on the enterprise. */
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseMembersCanChangeRepositoryVisibilitySetting */
export type GitHub_UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The enterprise with the updated members can change repository visibility setting. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** A message confirming the result of updating the members can change repository visibility setting. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseMembersCanCreateRepositoriesSetting */
export type GitHub_UpdateEnterpriseMembersCanCreateRepositoriesSettingInput = {
  /** The ID of the enterprise on which to set the members can create repositories setting. */
  enterpriseId: Scalars['ID'];
  /**
   * Value for the members can create repositories setting on the enterprise. This
   * or the granular public/private/internal allowed fields (but not both) must be provided.
   */
  settingValue?: Maybe<GitHub_EnterpriseMembersCanCreateRepositoriesSettingValue>;
  /** When false, allow member organizations to set their own repository creation member privileges. */
  membersCanCreateRepositoriesPolicyEnabled?: Maybe<Scalars['Boolean']>;
  /** Allow members to create public repositories. Defaults to current value. */
  membersCanCreatePublicRepositories?: Maybe<Scalars['Boolean']>;
  /** Allow members to create private repositories. Defaults to current value. */
  membersCanCreatePrivateRepositories?: Maybe<Scalars['Boolean']>;
  /** Allow members to create internal repositories. Defaults to current value. */
  membersCanCreateInternalRepositories?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseMembersCanCreateRepositoriesSetting */
export type GitHub_UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The enterprise with the updated members can create repositories setting. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** A message confirming the result of updating the members can create repositories setting. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseMembersCanDeleteIssuesSetting */
export type GitHub_UpdateEnterpriseMembersCanDeleteIssuesSettingInput = {
  /** The ID of the enterprise on which to set the members can delete issues setting. */
  enterpriseId: Scalars['ID'];
  /** The value for the members can delete issues setting on the enterprise. */
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseMembersCanDeleteIssuesSetting */
export type GitHub_UpdateEnterpriseMembersCanDeleteIssuesSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The enterprise with the updated members can delete issues setting. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** A message confirming the result of updating the members can delete issues setting. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseMembersCanDeleteRepositoriesSetting */
export type GitHub_UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = {
  /** The ID of the enterprise on which to set the members can delete repositories setting. */
  enterpriseId: Scalars['ID'];
  /** The value for the members can delete repositories setting on the enterprise. */
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseMembersCanDeleteRepositoriesSetting */
export type GitHub_UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The enterprise with the updated members can delete repositories setting. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** A message confirming the result of updating the members can delete repositories setting. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseMembersCanInviteCollaboratorsSetting */
export type GitHub_UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = {
  /** The ID of the enterprise on which to set the members can invite collaborators setting. */
  enterpriseId: Scalars['ID'];
  /** The value for the members can invite collaborators setting on the enterprise. */
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseMembersCanInviteCollaboratorsSetting */
export type GitHub_UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The enterprise with the updated members can invite collaborators setting. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** A message confirming the result of updating the members can invite collaborators setting. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseMembersCanMakePurchasesSetting */
export type GitHub_UpdateEnterpriseMembersCanMakePurchasesSettingInput = {
  /** The ID of the enterprise on which to set the members can make purchases setting. */
  enterpriseId: Scalars['ID'];
  /** The value for the members can make purchases setting on the enterprise. */
  settingValue: GitHub_EnterpriseMembersCanMakePurchasesSettingValue;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseMembersCanMakePurchasesSetting */
export type GitHub_UpdateEnterpriseMembersCanMakePurchasesSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The enterprise with the updated members can make purchases setting. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** A message confirming the result of updating the members can make purchases setting. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseMembersCanUpdateProtectedBranchesSetting */
export type GitHub_UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = {
  /** The ID of the enterprise on which to set the members can update protected branches setting. */
  enterpriseId: Scalars['ID'];
  /** The value for the members can update protected branches setting on the enterprise. */
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseMembersCanUpdateProtectedBranchesSetting */
export type GitHub_UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The enterprise with the updated members can update protected branches setting. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** A message confirming the result of updating the members can update protected branches setting. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseMembersCanViewDependencyInsightsSetting */
export type GitHub_UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = {
  /** The ID of the enterprise on which to set the members can view dependency insights setting. */
  enterpriseId: Scalars['ID'];
  /** The value for the members can view dependency insights setting on the enterprise. */
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseMembersCanViewDependencyInsightsSetting */
export type GitHub_UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The enterprise with the updated members can view dependency insights setting. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** A message confirming the result of updating the members can view dependency insights setting. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseOrganizationProjectsSetting */
export type GitHub_UpdateEnterpriseOrganizationProjectsSettingInput = {
  /** The ID of the enterprise on which to set the organization projects setting. */
  enterpriseId: Scalars['ID'];
  /** The value for the organization projects setting on the enterprise. */
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseOrganizationProjectsSetting */
export type GitHub_UpdateEnterpriseOrganizationProjectsSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The enterprise with the updated organization projects setting. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** A message confirming the result of updating the organization projects setting. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseProfile */
export type GitHub_UpdateEnterpriseProfileInput = {
  /** The Enterprise ID to update. */
  enterpriseId: Scalars['ID'];
  /** The name of the enterprise. */
  name?: Maybe<Scalars['String']>;
  /** The description of the enterprise. */
  description?: Maybe<Scalars['String']>;
  /** The URL of the enterprise's website. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** The location of the enterprise. */
  location?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseProfile */
export type GitHub_UpdateEnterpriseProfilePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The updated enterprise. */
  enterprise?: Maybe<GitHub_Enterprise>;
};

/** Autogenerated input type of UpdateEnterpriseRepositoryProjectsSetting */
export type GitHub_UpdateEnterpriseRepositoryProjectsSettingInput = {
  /** The ID of the enterprise on which to set the repository projects setting. */
  enterpriseId: Scalars['ID'];
  /** The value for the repository projects setting on the enterprise. */
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseRepositoryProjectsSetting */
export type GitHub_UpdateEnterpriseRepositoryProjectsSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The enterprise with the updated repository projects setting. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** A message confirming the result of updating the repository projects setting. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseTeamDiscussionsSetting */
export type GitHub_UpdateEnterpriseTeamDiscussionsSettingInput = {
  /** The ID of the enterprise on which to set the team discussions setting. */
  enterpriseId: Scalars['ID'];
  /** The value for the team discussions setting on the enterprise. */
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseTeamDiscussionsSetting */
export type GitHub_UpdateEnterpriseTeamDiscussionsSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The enterprise with the updated team discussions setting. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** A message confirming the result of updating the team discussions setting. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseTwoFactorAuthenticationRequiredSetting */
export type GitHub_UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = {
  /** The ID of the enterprise on which to set the two factor authentication required setting. */
  enterpriseId: Scalars['ID'];
  /** The value for the two factor authentication required setting on the enterprise. */
  settingValue: GitHub_EnterpriseEnabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseTwoFactorAuthenticationRequiredSetting */
export type GitHub_UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The enterprise with the updated two factor authentication required setting. */
  enterprise?: Maybe<GitHub_Enterprise>;
  /** A message confirming the result of updating the two factor authentication required setting. */
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateIpAllowListEnabledSetting */
export type GitHub_UpdateIpAllowListEnabledSettingInput = {
  /** The ID of the owner on which to set the IP allow list enabled setting. */
  ownerId: Scalars['ID'];
  /** The value for the IP allow list enabled setting. */
  settingValue: GitHub_IpAllowListEnabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateIpAllowListEnabledSetting */
export type GitHub_UpdateIpAllowListEnabledSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The IP allow list owner on which the setting was updated. */
  owner?: Maybe<GitHub_IpAllowListOwner>;
};

/** Autogenerated input type of UpdateIpAllowListEntry */
export type GitHub_UpdateIpAllowListEntryInput = {
  /** The ID of the IP allow list entry to update. */
  ipAllowListEntryId: Scalars['ID'];
  /** An IP address or range of addresses in CIDR notation. */
  allowListValue: Scalars['String'];
  /** An optional name for the IP allow list entry. */
  name?: Maybe<Scalars['String']>;
  /** Whether the IP allow list entry is active when an IP allow list is enabled. */
  isActive: Scalars['Boolean'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateIpAllowListEntry */
export type GitHub_UpdateIpAllowListEntryPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The IP allow list entry that was updated. */
  ipAllowListEntry?: Maybe<GitHub_IpAllowListEntry>;
};

/** Autogenerated input type of UpdateIssueComment */
export type GitHub_UpdateIssueCommentInput = {
  /** The ID of the IssueComment to modify. */
  id: Scalars['ID'];
  /** The updated text of the comment. */
  body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateIssueComment */
export type GitHub_UpdateIssueCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The updated comment. */
  issueComment?: Maybe<GitHub_IssueComment>;
};

/** Autogenerated input type of UpdateIssue */
export type GitHub_UpdateIssueInput = {
  /** The ID of the Issue to modify. */
  id: Scalars['ID'];
  /** The title for the issue. */
  title?: Maybe<Scalars['String']>;
  /** The body for the issue description. */
  body?: Maybe<Scalars['String']>;
  /** An array of Node IDs of users for this issue. */
  assigneeIds?: Maybe<Array<Scalars['ID']>>;
  /** The Node ID of the milestone for this issue. */
  milestoneId?: Maybe<Scalars['ID']>;
  /** An array of Node IDs of labels for this issue. */
  labelIds?: Maybe<Array<Scalars['ID']>>;
  /** The desired issue state. */
  state?: Maybe<GitHub_IssueState>;
  /** An array of Node IDs for projects associated with this issue. */
  projectIds?: Maybe<Array<Scalars['ID']>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateIssue */
export type GitHub_UpdateIssuePayload = {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The issue. */
  issue?: Maybe<GitHub_Issue>;
};

/** Autogenerated input type of UpdateProjectCard */
export type GitHub_UpdateProjectCardInput = {
  /** The ProjectCard ID to update. */
  projectCardId: Scalars['ID'];
  /** Whether or not the ProjectCard should be archived */
  isArchived?: Maybe<Scalars['Boolean']>;
  /** The note of ProjectCard. */
  note?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateProjectCard */
export type GitHub_UpdateProjectCardPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The updated ProjectCard. */
  projectCard?: Maybe<GitHub_ProjectCard>;
};

/** Autogenerated input type of UpdateProjectColumn */
export type GitHub_UpdateProjectColumnInput = {
  /** The ProjectColumn ID to update. */
  projectColumnId: Scalars['ID'];
  /** The name of project column. */
  name: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateProjectColumn */
export type GitHub_UpdateProjectColumnPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The updated project column. */
  projectColumn?: Maybe<GitHub_ProjectColumn>;
};

/** Autogenerated input type of UpdateProject */
export type GitHub_UpdateProjectInput = {
  /** The Project ID to update. */
  projectId: Scalars['ID'];
  /** The name of project. */
  name?: Maybe<Scalars['String']>;
  /** The description of project. */
  body?: Maybe<Scalars['String']>;
  /** Whether the project is open or closed. */
  state?: Maybe<GitHub_ProjectState>;
  /** Whether the project is public or not. */
  public?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateProject */
export type GitHub_UpdateProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The updated project. */
  project?: Maybe<GitHub_Project>;
};

/** Autogenerated input type of UpdatePullRequest */
export type GitHub_UpdatePullRequestInput = {
  /** The Node ID of the pull request. */
  pullRequestId: Scalars['ID'];
  /**
   * The name of the branch you want your changes pulled into. This should be an existing branch
   * on the current repository.
   */
  baseRefName?: Maybe<Scalars['String']>;
  /** The title of the pull request. */
  title?: Maybe<Scalars['String']>;
  /** The contents of the pull request. */
  body?: Maybe<Scalars['String']>;
  /** The target state of the pull request. */
  state?: Maybe<GitHub_PullRequestUpdateState>;
  /** Indicates whether maintainers can modify the pull request. */
  maintainerCanModify?: Maybe<Scalars['Boolean']>;
  /** An array of Node IDs of users for this pull request. */
  assigneeIds?: Maybe<Array<Scalars['ID']>>;
  /** The Node ID of the milestone for this pull request. */
  milestoneId?: Maybe<Scalars['ID']>;
  /** An array of Node IDs of labels for this pull request. */
  labelIds?: Maybe<Array<Scalars['ID']>>;
  /** An array of Node IDs for projects associated with this pull request. */
  projectIds?: Maybe<Array<Scalars['ID']>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdatePullRequest */
export type GitHub_UpdatePullRequestPayload = {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The updated pull request. */
  pullRequest?: Maybe<GitHub_PullRequest>;
};

/** Autogenerated input type of UpdatePullRequestReviewComment */
export type GitHub_UpdatePullRequestReviewCommentInput = {
  /** The Node ID of the comment to modify. */
  pullRequestReviewCommentId: Scalars['ID'];
  /** The text of the comment. */
  body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdatePullRequestReviewComment */
export type GitHub_UpdatePullRequestReviewCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The updated comment. */
  pullRequestReviewComment?: Maybe<GitHub_PullRequestReviewComment>;
};

/** Autogenerated input type of UpdatePullRequestReview */
export type GitHub_UpdatePullRequestReviewInput = {
  /** The Node ID of the pull request review to modify. */
  pullRequestReviewId: Scalars['ID'];
  /** The contents of the pull request review body. */
  body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdatePullRequestReview */
export type GitHub_UpdatePullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The updated pull request review. */
  pullRequestReview?: Maybe<GitHub_PullRequestReview>;
};

/** Autogenerated input type of UpdateRef */
export type GitHub_UpdateRefInput = {
  /** The Node ID of the Ref to be updated. */
  refId: Scalars['ID'];
  /** The GitObjectID that the Ref shall be updated to target. */
  oid: Scalars['GitHub_GitObjectID'];
  /** Permit updates of branch Refs that are not fast-forwards? */
  force?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateRef */
export type GitHub_UpdateRefPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The updated Ref. */
  ref?: Maybe<GitHub_Ref>;
};

/** Autogenerated input type of UpdateRepository */
export type GitHub_UpdateRepositoryInput = {
  /** The ID of the repository to update. */
  repositoryId: Scalars['ID'];
  /** The new name of the repository. */
  name?: Maybe<Scalars['String']>;
  /** A new description for the repository. Pass an empty string to erase the existing description. */
  description?: Maybe<Scalars['String']>;
  /**
   * Whether this repository should be marked as a template such that anyone who
   * can access it can create new repositories with the same files and directory structure.
   */
  template?: Maybe<Scalars['Boolean']>;
  /** The URL for a web page about this repository. Pass an empty string to erase the existing URL. */
  homepageUrl?: Maybe<Scalars['GitHub_URI']>;
  /** Indicates if the repository should have the wiki feature enabled. */
  hasWikiEnabled?: Maybe<Scalars['Boolean']>;
  /** Indicates if the repository should have the issues feature enabled. */
  hasIssuesEnabled?: Maybe<Scalars['Boolean']>;
  /** Indicates if the repository should have the project boards feature enabled. */
  hasProjectsEnabled?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateRepository */
export type GitHub_UpdateRepositoryPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The updated repository. */
  repository?: Maybe<GitHub_Repository>;
};

/** Autogenerated input type of UpdateSubscription */
export type GitHub_UpdateSubscriptionInput = {
  /** The Node ID of the subscribable object to modify. */
  subscribableId: Scalars['ID'];
  /** The new state of the subscription. */
  state: GitHub_SubscriptionState;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateSubscription */
export type GitHub_UpdateSubscriptionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The input subscribable entity. */
  subscribable?: Maybe<GitHub_Subscribable>;
};

/** Autogenerated input type of UpdateTeamDiscussionComment */
export type GitHub_UpdateTeamDiscussionCommentInput = {
  /** The ID of the comment to modify. */
  id: Scalars['ID'];
  /** The updated text of the comment. */
  body: Scalars['String'];
  /** The current version of the body content. */
  bodyVersion?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateTeamDiscussionComment */
export type GitHub_UpdateTeamDiscussionCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The updated comment. */
  teamDiscussionComment?: Maybe<GitHub_TeamDiscussionComment>;
};

/** Autogenerated input type of UpdateTeamDiscussion */
export type GitHub_UpdateTeamDiscussionInput = {
  /** The Node ID of the discussion to modify. */
  id: Scalars['ID'];
  /** The updated title of the discussion. */
  title?: Maybe<Scalars['String']>;
  /** The updated text of the discussion. */
  body?: Maybe<Scalars['String']>;
  /**
   * The current version of the body content. If provided, this update operation
   * will be rejected if the given version does not match the latest version on the server.
   */
  bodyVersion?: Maybe<Scalars['String']>;
  /** If provided, sets the pinned state of the updated discussion. */
  pinned?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateTeamDiscussion */
export type GitHub_UpdateTeamDiscussionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The updated discussion. */
  teamDiscussion?: Maybe<GitHub_TeamDiscussion>;
};

/** Autogenerated input type of UpdateTopics */
export type GitHub_UpdateTopicsInput = {
  /** The Node ID of the repository. */
  repositoryId: Scalars['ID'];
  /** An array of topic names. */
  topicNames: Array<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateTopics */
export type GitHub_UpdateTopicsPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Names of the provided topics that are not valid. */
  invalidTopicNames?: Maybe<Array<Scalars['String']>>;
  /** The updated repository. */
  repository?: Maybe<GitHub_Repository>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_User = GitHub_Node & GitHub_Actor & GitHub_PackageOwner & GitHub_ProjectOwner & GitHub_RepositoryOwner & GitHub_UniformResourceLocatable & GitHub_ProfileOwner & GitHub_Sponsorable & {
  /** Determine if this repository owner has any items that can be pinned to their profile. */
  anyPinnableItems: Scalars['Boolean'];
  /** A URL pointing to the user's public avatar. */
  avatarUrl: Scalars['GitHub_URI'];
  /** The user's public profile bio. */
  bio?: Maybe<Scalars['String']>;
  /** The user's public profile bio as HTML. */
  bioHTML: Scalars['GitHub_HTML'];
  /** A list of commit comments made by this user. */
  commitComments: GitHub_CommitCommentConnection;
  /** The user's public profile company. */
  company?: Maybe<Scalars['String']>;
  /** The user's public profile company as HTML. */
  companyHTML: Scalars['GitHub_HTML'];
  /** The collection of contributions this user has made to different repositories. */
  contributionsCollection: GitHub_ContributionsCollection;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The user's publicly visible profile email. */
  email: Scalars['String'];
  /** A list of users the given user is followed by. */
  followers: GitHub_FollowerConnection;
  /** A list of users the given user is following. */
  following: GitHub_FollowingConnection;
  /** Find gist by repo name. */
  gist?: Maybe<GitHub_Gist>;
  /** A list of gist comments made by this user. */
  gistComments: GitHub_GistCommentConnection;
  /** A list of the Gists the user has created. */
  gists: GitHub_GistConnection;
  /** The hovercard information for this user in a given context */
  hovercard: GitHub_Hovercard;
  id: Scalars['ID'];
  /** Whether or not this user is a participant in the GitHub Security Bug Bounty. */
  isBountyHunter: Scalars['Boolean'];
  /** Whether or not this user is a participant in the GitHub Campus Experts Program. */
  isCampusExpert: Scalars['Boolean'];
  /** Whether or not this user is a GitHub Developer Program member. */
  isDeveloperProgramMember: Scalars['Boolean'];
  /** Whether or not this user is a GitHub employee. */
  isEmployee: Scalars['Boolean'];
  /** Whether or not the user has marked themselves as for hire. */
  isHireable: Scalars['Boolean'];
  /** Whether or not this user is a site administrator. */
  isSiteAdmin: Scalars['Boolean'];
  /** Whether or not this user is the viewing user. */
  isViewer: Scalars['Boolean'];
  /** A list of issue comments made by this user. */
  issueComments: GitHub_IssueCommentConnection;
  /** A list of issues associated with this user. */
  issues: GitHub_IssueConnection;
  /**
   * Showcases a selection of repositories and gists that the profile owner has
   * either curated or that have been selected automatically based on popularity.
   */
  itemShowcase: GitHub_ProfileItemShowcase;
  /** The user's public profile location. */
  location?: Maybe<Scalars['String']>;
  /** The username used to login. */
  login: Scalars['String'];
  /** The user's public profile name. */
  name?: Maybe<Scalars['String']>;
  /** Find an organization by its login that the user belongs to. */
  organization?: Maybe<GitHub_Organization>;
  /** Verified email addresses that match verified domains for a specified organization the user is a member of. */
  organizationVerifiedDomainEmails: Array<Scalars['String']>;
  /** A list of organizations the user belongs to. */
  organizations: GitHub_OrganizationConnection;
  /** A list of packages under the owner. */
  packages: GitHub_PackageConnection;
  /** A list of repositories and gists this profile owner can pin to their profile. */
  pinnableItems: GitHub_PinnableItemConnection;
  /** A list of repositories and gists this profile owner has pinned to their profile */
  pinnedItems: GitHub_PinnableItemConnection;
  /** Returns how many more items this profile owner can pin to their profile. */
  pinnedItemsRemaining: Scalars['Int'];
  /** Find project by number. */
  project?: Maybe<GitHub_Project>;
  /** A list of projects under the owner. */
  projects: GitHub_ProjectConnection;
  /** The HTTP path listing user's projects */
  projectsResourcePath: Scalars['GitHub_URI'];
  /** The HTTP URL listing user's projects */
  projectsUrl: Scalars['GitHub_URI'];
  /** A list of public keys associated with this user. */
  publicKeys: GitHub_PublicKeyConnection;
  /** A list of pull requests associated with this user. */
  pullRequests: GitHub_PullRequestConnection;
  /** A list of repositories that the user owns. */
  repositories: GitHub_RepositoryConnection;
  /** A list of repositories that the user recently contributed to. */
  repositoriesContributedTo: GitHub_RepositoryConnection;
  /** Find Repository. */
  repository?: Maybe<GitHub_Repository>;
  /** The HTTP path for this user */
  resourcePath: Scalars['GitHub_URI'];
  /** Replies this user has saved */
  savedReplies?: Maybe<GitHub_SavedReplyConnection>;
  /** The GitHub Sponsors listing for this user. */
  sponsorsListing?: Maybe<GitHub_SponsorsListing>;
  /** This object's sponsorships as the maintainer. */
  sponsorshipsAsMaintainer: GitHub_SponsorshipConnection;
  /** This object's sponsorships as the sponsor. */
  sponsorshipsAsSponsor: GitHub_SponsorshipConnection;
  /** Repositories the user has starred. */
  starredRepositories: GitHub_StarredRepositoryConnection;
  /** The user's description of what they're currently doing. */
  status?: Maybe<GitHub_UserStatus>;
  /** Repositories the user has contributed to, ordered by contribution rank, plus repositories the user has created */
  topRepositories: GitHub_RepositoryConnection;
  /** The user's Twitter username. */
  twitterUsername?: Maybe<Scalars['String']>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The HTTP URL for this user */
  url: Scalars['GitHub_URI'];
  /** Can the viewer pin repositories and gists to the profile? */
  viewerCanChangePinnedItems: Scalars['Boolean'];
  /** Can the current viewer create new projects on this owner. */
  viewerCanCreateProjects: Scalars['Boolean'];
  /** Whether or not the viewer is able to follow the user. */
  viewerCanFollow: Scalars['Boolean'];
  /** Whether or not this user is followed by the viewer. */
  viewerIsFollowing: Scalars['Boolean'];
  /** A list of repositories the given user is watching. */
  watching: GitHub_RepositoryConnection;
  /** A URL pointing to the user's public website/blog. */
  websiteUrl?: Maybe<Scalars['GitHub_URI']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserAnyPinnableItemsArgs = {
  type?: Maybe<GitHub_PinnableItemType>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserCommitCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserContributionsCollectionArgs = {
  organizationID?: Maybe<Scalars['ID']>;
  from?: Maybe<Scalars['GitHub_DateTime']>;
  to?: Maybe<Scalars['GitHub_DateTime']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserFollowersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserFollowingArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserGistArgs = {
  name: Scalars['String'];
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserGistCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserGistsArgs = {
  privacy?: Maybe<GitHub_GistPrivacy>;
  orderBy?: Maybe<GitHub_GistOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserHovercardArgs = {
  primarySubjectId?: Maybe<Scalars['ID']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserIssueCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserIssuesArgs = {
  orderBy?: Maybe<GitHub_IssueOrder>;
  labels?: Maybe<Array<Scalars['String']>>;
  states?: Maybe<Array<GitHub_IssueState>>;
  filterBy?: Maybe<GitHub_IssueFilters>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserOrganizationArgs = {
  login: Scalars['String'];
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserOrganizationVerifiedDomainEmailsArgs = {
  login: Scalars['String'];
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserPackagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  repositoryId?: Maybe<Scalars['ID']>;
  packageType?: Maybe<GitHub_PackageType>;
  orderBy?: Maybe<GitHub_PackageOrder>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserPinnableItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserPinnedItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserProjectArgs = {
  number: Scalars['Int'];
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserProjectsArgs = {
  orderBy?: Maybe<GitHub_ProjectOrder>;
  search?: Maybe<Scalars['String']>;
  states?: Maybe<Array<GitHub_ProjectState>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserPublicKeysArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserPullRequestsArgs = {
  states?: Maybe<Array<GitHub_PullRequestState>>;
  labels?: Maybe<Array<Scalars['String']>>;
  headRefName?: Maybe<Scalars['String']>;
  baseRefName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<GitHub_IssueOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserRepositoriesArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  isFork?: Maybe<Scalars['Boolean']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserRepositoriesContributedToArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
  isLocked?: Maybe<Scalars['Boolean']>;
  includeUserRepositories?: Maybe<Scalars['Boolean']>;
  contributionTypes?: Maybe<Array<Maybe<GitHub_RepositoryContributionType>>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserRepositoryArgs = {
  name: Scalars['String'];
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserSavedRepliesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_SavedReplyOrder>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserSponsorshipsAsMaintainerArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<GitHub_SponsorshipOrder>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserSponsorshipsAsSponsorArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GitHub_SponsorshipOrder>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserStarredRepositoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  ownedByViewer?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<GitHub_StarOrder>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserTopRepositoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy: GitHub_RepositoryOrder;
  since?: Maybe<Scalars['GitHub_DateTime']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserWatchingArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The possible durations that a user can be blocked for. */
export type GitHub_UserBlockDuration = 
  /** The user was blocked for 1 day */
  | 'ONE_DAY'
  /** The user was blocked for 3 days */
  | 'THREE_DAYS'
  /** The user was blocked for 7 days */
  | 'ONE_WEEK'
  /** The user was blocked for 30 days */
  | 'ONE_MONTH'
  /** The user was blocked permanently */
  | 'PERMANENT';

/** Represents a 'user_blocked' event on a given user. */
export type GitHub_UserBlockedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Number of days that the user was blocked for. */
  blockDuration: GitHub_UserBlockDuration;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  id: Scalars['ID'];
  /** The user who was blocked. */
  subject?: Maybe<GitHub_User>;
};

/** The connection type for User. */
export type GitHub_UserConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edit on user content */
export type GitHub_UserContentEdit = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** Identifies the date and time when the object was deleted. */
  deletedAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** The actor who deleted this content */
  deletedBy?: Maybe<GitHub_Actor>;
  /** A summary of the changes for this edit */
  diff?: Maybe<Scalars['String']>;
  /** When this content was edited */
  editedAt: Scalars['GitHub_DateTime'];
  /** The actor who edited this content */
  editor?: Maybe<GitHub_Actor>;
  id: Scalars['ID'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
};

/** A list of edits to content. */
export type GitHub_UserContentEditConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_UserContentEditEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_UserContentEdit>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_UserContentEditEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_UserContentEdit>;
};

/** Represents a user. */
export type GitHub_UserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_User>;
};

/** Email attributes from External Identity */
export type GitHub_UserEmailMetadata = {
  /** Boolean to identify primary emails */
  primary?: Maybe<Scalars['Boolean']>;
  /** Type of email */
  type?: Maybe<Scalars['String']>;
  /** Email id */
  value: Scalars['String'];
};

/** The user's description of what they're currently doing. */
export type GitHub_UserStatus = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['GitHub_DateTime'];
  /** An emoji summarizing the user's status. */
  emoji?: Maybe<Scalars['String']>;
  /** The status emoji as HTML. */
  emojiHTML?: Maybe<Scalars['GitHub_HTML']>;
  /** If set, the status will not be shown after this date. */
  expiresAt?: Maybe<Scalars['GitHub_DateTime']>;
  /** ID of the object. */
  id: Scalars['ID'];
  /** Whether this status indicates the user is not fully available on GitHub. */
  indicatesLimitedAvailability: Scalars['Boolean'];
  /** A brief message describing what the user is doing. */
  message?: Maybe<Scalars['String']>;
  /** The organization whose members can see this status. If null, this status is publicly visible. */
  organization?: Maybe<GitHub_Organization>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['GitHub_DateTime'];
  /** The user who has this status. */
  user: GitHub_User;
};

/** The connection type for UserStatus. */
export type GitHub_UserStatusConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_UserStatusEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_UserStatus>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type GitHub_UserStatusEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_UserStatus>;
};

/** Ordering options for user status connections. */
export type GitHub_UserStatusOrder = {
  /** The field to order user statuses by. */
  field: GitHub_UserStatusOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which user status connections can be ordered. */
export type GitHub_UserStatusOrderField = 
  /** Order user statuses by when they were updated. */
  | 'UPDATED_AT';

/** A hovercard context with a message describing how the viewer is related. */
export type GitHub_ViewerHovercardContext = GitHub_HovercardContext & {
  /** A string describing this context */
  message: Scalars['String'];
  /** An octicon to accompany this context */
  octicon: Scalars['String'];
  /** Identifies the user who is related to this context. */
  viewer: GitHub_User;
};


export type GraphQlSource = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
};

export type GraphQlSourceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphQlSourceGroupConnection>;
};


export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum;
};


export type GraphQlSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceEdge = {
  next?: Maybe<GraphQlSource>;
  node: GraphQlSource;
  previous?: Maybe<GraphQlSource>;
};

export type GraphQlSourceFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'typeName'
  | 'fieldName';

export type GraphQlSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};

export type GraphQlSourceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphQlSourceSortInput = {
  fields?: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownExcerptFormats = 
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum = 
  | 'id'
  | 'frontmatter___title'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  graphQlSource?: Maybe<GraphQlSource>;
  allGraphQlSource: GraphQlSourceConnection;
  whatIsNewToc?: Maybe<WhatIsNewToc>;
  allWhatIsNewToc: WhatIsNewTocConnection;
  bookTocSource?: Maybe<BookTocSource>;
  allBookTocSource: BookTocSourceConnection;
  appLocalization?: Maybe<AppLocalization>;
  allAppLocalization: AppLocalizationConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  github: GitHub;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphQlSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>;
  sort?: Maybe<GraphQlSourceSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWhatIsNewTocArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  toc?: Maybe<WhatIsNewTocTocFilterListInput>;
};


export type QueryAllWhatIsNewTocArgs = {
  filter?: Maybe<WhatIsNewTocFilterInput>;
  sort?: Maybe<WhatIsNewTocSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryBookTocSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  toc?: Maybe<BookTocSourceTocFilterListInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllBookTocSourceArgs = {
  filter?: Maybe<BookTocSourceFilterInput>;
  sort?: Maybe<BookTocSourceSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAppLocalizationArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  localization?: Maybe<AppLocalizationLocalizationFilterInput>;
  lang?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllAppLocalizationArgs = {
  filter?: Maybe<AppLocalizationFilterInput>;
  sort?: Maybe<AppLocalizationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___repository___owner'
  | 'siteMetadata___repository___branch'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  locale?: Maybe<Scalars['String']>;
  localization?: Maybe<SitePageContextLocalization>;
  pageContentData?: Maybe<SitePageContextPageContentData>;
  pageNavDataAll?: Maybe<Array<Maybe<SitePageContextPageNavDataAll>>>;
  bookTocTree?: Maybe<Array<Maybe<SitePageContextBookTocTree>>>;
  innovationData?: Maybe<SitePageContextInnovationData>;
  winTocTree?: Maybe<Array<Maybe<SitePageContextWinTocTree>>>;
};

export type SitePageContextBookTocTree = {
  id?: Maybe<Scalars['String']>;
  isCollapse?: Maybe<Scalars['Boolean']>;
  index?: Maybe<Scalars['Int']>;
  data?: Maybe<SitePageContextBookTocTreeData>;
};

export type SitePageContextBookTocTreeData = {
  title?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  subtitles?: Maybe<Array<Maybe<SitePageContextBookTocTreeDataSubtitles>>>;
};

export type SitePageContextBookTocTreeDataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  section?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  subtitles?: Maybe<SitePageContextBookTocTreeDataSubtitlesFilterListInput>;
};

export type SitePageContextBookTocTreeDataSubtitles = {
  subtitle?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type SitePageContextBookTocTreeDataSubtitlesFilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextBookTocTreeDataSubtitlesFilterListInput = {
  elemMatch?: Maybe<SitePageContextBookTocTreeDataSubtitlesFilterInput>;
};

export type SitePageContextBookTocTreeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  isCollapse?: Maybe<BooleanQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  data?: Maybe<SitePageContextBookTocTreeDataFilterInput>;
};

export type SitePageContextBookTocTreeFilterListInput = {
  elemMatch?: Maybe<SitePageContextBookTocTreeFilterInput>;
};

export type SitePageContextFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
  localization?: Maybe<SitePageContextLocalizationFilterInput>;
  pageContentData?: Maybe<SitePageContextPageContentDataFilterInput>;
  pageNavDataAll?: Maybe<SitePageContextPageNavDataAllFilterListInput>;
  bookTocTree?: Maybe<SitePageContextBookTocTreeFilterListInput>;
  innovationData?: Maybe<SitePageContextInnovationDataFilterInput>;
  winTocTree?: Maybe<SitePageContextWinTocTreeFilterListInput>;
};

export type SitePageContextInnovationData = {
  releaseHistory?: Maybe<Array<Maybe<SitePageContextInnovationDataReleaseHistory>>>;
  lastVersionStatus?: Maybe<SitePageContextInnovationDataLastVersionStatus>;
  mmp?: Maybe<Scalars['String']>;
  innovations?: Maybe<Array<Maybe<SitePageContextInnovationDataInnovations>>>;
};

export type SitePageContextInnovationDataFilterInput = {
  releaseHistory?: Maybe<SitePageContextInnovationDataReleaseHistoryFilterListInput>;
  lastVersionStatus?: Maybe<SitePageContextInnovationDataLastVersionStatusFilterInput>;
  mmp?: Maybe<StringQueryOperatorInput>;
  innovations?: Maybe<SitePageContextInnovationDataInnovationsFilterListInput>;
};

export type SitePageContextInnovationDataInnovations = {
  id?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  innovationName?: Maybe<Scalars['String']>;
  dateRelease?: Maybe<Scalars['String']>;
  datePublication?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  commitInfoAll?: Maybe<Array<Maybe<SitePageContextInnovationDataInnovationsCommitInfoAll>>>;
  fileOnGithubLink?: Maybe<Scalars['String']>;
};

export type SitePageContextInnovationDataInnovationsCommitInfoAll = {
  committedDate?: Maybe<Scalars['Date']>;
  message?: Maybe<Scalars['String']>;
  messageHeadline?: Maybe<Scalars['String']>;
  pushedDate?: Maybe<Scalars['Date']>;
  authoredByCommitter?: Maybe<Scalars['Boolean']>;
  committer?: Maybe<SitePageContextInnovationDataInnovationsCommitInfoAllCommitter>;
};

export type SitePageContextInnovationDataInnovationsCommitInfoAllCommitter = {
  name?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
};

export type SitePageContextInnovationDataInnovationsCommitInfoAllCommitterFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  avatarUrl?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextInnovationDataInnovationsCommitInfoAllFilterInput = {
  committedDate?: Maybe<DateQueryOperatorInput>;
  message?: Maybe<StringQueryOperatorInput>;
  messageHeadline?: Maybe<StringQueryOperatorInput>;
  pushedDate?: Maybe<DateQueryOperatorInput>;
  authoredByCommitter?: Maybe<BooleanQueryOperatorInput>;
  committer?: Maybe<SitePageContextInnovationDataInnovationsCommitInfoAllCommitterFilterInput>;
};

export type SitePageContextInnovationDataInnovationsCommitInfoAllFilterListInput = {
  elemMatch?: Maybe<SitePageContextInnovationDataInnovationsCommitInfoAllFilterInput>;
};

export type SitePageContextInnovationDataInnovationsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  innovationName?: Maybe<StringQueryOperatorInput>;
  dateRelease?: Maybe<StringQueryOperatorInput>;
  datePublication?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  commitInfoAll?: Maybe<SitePageContextInnovationDataInnovationsCommitInfoAllFilterListInput>;
  fileOnGithubLink?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextInnovationDataInnovationsFilterListInput = {
  elemMatch?: Maybe<SitePageContextInnovationDataInnovationsFilterInput>;
};

export type SitePageContextInnovationDataLastVersionStatus = {
  version?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type SitePageContextInnovationDataLastVersionStatusFilterInput = {
  version?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextInnovationDataReleaseHistory = {
  version?: Maybe<Scalars['String']>;
  dateRelease?: Maybe<Scalars['String']>;
};

export type SitePageContextInnovationDataReleaseHistoryFilterInput = {
  version?: Maybe<StringQueryOperatorInput>;
  dateRelease?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextInnovationDataReleaseHistoryFilterListInput = {
  elemMatch?: Maybe<SitePageContextInnovationDataReleaseHistoryFilterInput>;
};

export type SitePageContextLocalization = {
  lang?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  appNavigation?: Maybe<Array<Maybe<SitePageContextLocalizationAppNavigation>>>;
  notification?: Maybe<SitePageContextLocalizationNotification>;
  layouts?: Maybe<SitePageContextLocalizationLayouts>;
  pages?: Maybe<SitePageContextLocalizationPages>;
};

export type SitePageContextLocalizationAppNavigation = {
  id?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationAppNavigationFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationAppNavigationFilterListInput = {
  elemMatch?: Maybe<SitePageContextLocalizationAppNavigationFilterInput>;
};

export type SitePageContextLocalizationFilterInput = {
  lang?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  appNavigation?: Maybe<SitePageContextLocalizationAppNavigationFilterListInput>;
  notification?: Maybe<SitePageContextLocalizationNotificationFilterInput>;
  layouts?: Maybe<SitePageContextLocalizationLayoutsFilterInput>;
  pages?: Maybe<SitePageContextLocalizationPagesFilterInput>;
};

export type SitePageContextLocalizationLayouts = {
  shared?: Maybe<SitePageContextLocalizationLayoutsShared>;
};

export type SitePageContextLocalizationLayoutsFilterInput = {
  shared?: Maybe<SitePageContextLocalizationLayoutsSharedFilterInput>;
};

export type SitePageContextLocalizationLayoutsShared = {
  informers?: Maybe<SitePageContextLocalizationLayoutsSharedInformers>;
  links?: Maybe<SitePageContextLocalizationLayoutsSharedLinks>;
  appContent?: Maybe<SitePageContextLocalizationLayoutsSharedAppContent>;
  appHeader?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeader>;
};

export type SitePageContextLocalizationLayoutsSharedAppContent = {
  contentNav?: Maybe<SitePageContextLocalizationLayoutsSharedAppContentContentNav>;
};

export type SitePageContextLocalizationLayoutsSharedAppContentContentNav = {
  prevButton?: Maybe<SitePageContextLocalizationLayoutsSharedAppContentContentNavPrevButton>;
  nextButton?: Maybe<SitePageContextLocalizationLayoutsSharedAppContentContentNavNextButton>;
};

export type SitePageContextLocalizationLayoutsSharedAppContentContentNavFilterInput = {
  prevButton?: Maybe<SitePageContextLocalizationLayoutsSharedAppContentContentNavPrevButtonFilterInput>;
  nextButton?: Maybe<SitePageContextLocalizationLayoutsSharedAppContentContentNavNextButtonFilterInput>;
};

export type SitePageContextLocalizationLayoutsSharedAppContentContentNavNextButton = {
  label?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationLayoutsSharedAppContentContentNavNextButtonFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationLayoutsSharedAppContentContentNavPrevButton = {
  label?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationLayoutsSharedAppContentContentNavPrevButtonFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationLayoutsSharedAppContentFilterInput = {
  contentNav?: Maybe<SitePageContextLocalizationLayoutsSharedAppContentContentNavFilterInput>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeader = {
  navToggleButton?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderNavToggleButton>;
  appMenu?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderAppMenu>;
  donateDropdown?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderDonateDropdown>;
  appSearch?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderAppSearch>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderAppMenu = {
  pdfButton?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderAppMenuPdfButton>;
  telegramButton?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderAppMenuTelegramButton>;
  githubButton?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderAppMenuGithubButton>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderAppMenuFilterInput = {
  pdfButton?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderAppMenuPdfButtonFilterInput>;
  telegramButton?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderAppMenuTelegramButtonFilterInput>;
  githubButton?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderAppMenuGithubButtonFilterInput>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderAppMenuGithubButton = {
  href?: Maybe<Scalars['String']>;
  tooltip?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderAppMenuGithubButtonFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  tooltip?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderAppMenuPdfButton = {
  href?: Maybe<Scalars['String']>;
  tooltip?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderAppMenuPdfButtonFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  tooltip?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderAppMenuTelegramButton = {
  href?: Maybe<Scalars['String']>;
  tooltip?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderAppMenuTelegramButtonFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  tooltip?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderAppSearch = {
  inputPlaceholder?: Maybe<Scalars['String']>;
  submitButton?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderAppSearchSubmitButton>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderAppSearchFilterInput = {
  inputPlaceholder?: Maybe<StringQueryOperatorInput>;
  submitButton?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderAppSearchSubmitButtonFilterInput>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderAppSearchSubmitButton = {
  ariaLabel?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderAppSearchSubmitButtonFilterInput = {
  ariaLabel?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderDonateDropdown = {
  href?: Maybe<Scalars['String']>;
  toggleButton?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderDonateDropdownToggleButton>;
  content?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderDonateDropdownContent>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderDonateDropdownContent = {
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderDonateDropdownContentSubtitle>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderDonateDropdownContentFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderDonateDropdownContentSubtitleFilterInput>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderDonateDropdownContentSubtitle = {
  _xhtml?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderDonateDropdownContentSubtitleFilterInput = {
  _xhtml?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderDonateDropdownFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  toggleButton?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderDonateDropdownToggleButtonFilterInput>;
  content?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderDonateDropdownContentFilterInput>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderDonateDropdownToggleButton = {
  label?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderDonateDropdownToggleButtonFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderFilterInput = {
  navToggleButton?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderNavToggleButtonFilterInput>;
  appMenu?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderAppMenuFilterInput>;
  donateDropdown?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderDonateDropdownFilterInput>;
  appSearch?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderAppSearchFilterInput>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderNavToggleButton = {
  tooltips?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderNavToggleButtonTooltips>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderNavToggleButtonFilterInput = {
  tooltips?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderNavToggleButtonTooltipsFilterInput>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderNavToggleButtonTooltips = {
  open?: Maybe<Array<Maybe<Scalars['String']>>>;
  close?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageContextLocalizationLayoutsSharedAppHeaderNavToggleButtonTooltipsFilterInput = {
  open?: Maybe<StringQueryOperatorInput>;
  close?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationLayoutsSharedFilterInput = {
  informers?: Maybe<SitePageContextLocalizationLayoutsSharedInformersFilterInput>;
  links?: Maybe<SitePageContextLocalizationLayoutsSharedLinksFilterInput>;
  appContent?: Maybe<SitePageContextLocalizationLayoutsSharedAppContentFilterInput>;
  appHeader?: Maybe<SitePageContextLocalizationLayoutsSharedAppHeaderFilterInput>;
};

export type SitePageContextLocalizationLayoutsSharedInformers = {
  donateInformer?: Maybe<SitePageContextLocalizationLayoutsSharedInformersDonateInformer>;
  watchWithTelegramInformer?: Maybe<SitePageContextLocalizationLayoutsSharedInformersWatchWithTelegramInformer>;
};

export type SitePageContextLocalizationLayoutsSharedInformersDonateInformer = {
  minBanner?: Maybe<SitePageContextLocalizationLayoutsSharedInformersDonateInformerMinBanner>;
  maxBanner?: Maybe<SitePageContextLocalizationLayoutsSharedInformersDonateInformerMaxBanner>;
};

export type SitePageContextLocalizationLayoutsSharedInformersDonateInformerFilterInput = {
  minBanner?: Maybe<SitePageContextLocalizationLayoutsSharedInformersDonateInformerMinBannerFilterInput>;
  maxBanner?: Maybe<SitePageContextLocalizationLayoutsSharedInformersDonateInformerMaxBannerFilterInput>;
};

export type SitePageContextLocalizationLayoutsSharedInformersDonateInformerMaxBanner = {
  html?: Maybe<SitePageContextLocalizationLayoutsSharedInformersDonateInformerMaxBannerHtml>;
  href?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationLayoutsSharedInformersDonateInformerMaxBannerFilterInput = {
  html?: Maybe<SitePageContextLocalizationLayoutsSharedInformersDonateInformerMaxBannerHtmlFilterInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationLayoutsSharedInformersDonateInformerMaxBannerHtml = {
  _xhtml?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationLayoutsSharedInformersDonateInformerMaxBannerHtmlFilterInput = {
  _xhtml?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationLayoutsSharedInformersDonateInformerMinBanner = {
  label?: Maybe<Scalars['String']>;
  buttons?: Maybe<SitePageContextLocalizationLayoutsSharedInformersDonateInformerMinBannerButtons>;
};

export type SitePageContextLocalizationLayoutsSharedInformersDonateInformerMinBannerButtons = {
  yes?: Maybe<Scalars['String']>;
  no?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationLayoutsSharedInformersDonateInformerMinBannerButtonsFilterInput = {
  yes?: Maybe<StringQueryOperatorInput>;
  no?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationLayoutsSharedInformersDonateInformerMinBannerFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  buttons?: Maybe<SitePageContextLocalizationLayoutsSharedInformersDonateInformerMinBannerButtonsFilterInput>;
};

export type SitePageContextLocalizationLayoutsSharedInformersFilterInput = {
  donateInformer?: Maybe<SitePageContextLocalizationLayoutsSharedInformersDonateInformerFilterInput>;
  watchWithTelegramInformer?: Maybe<SitePageContextLocalizationLayoutsSharedInformersWatchWithTelegramInformerFilterInput>;
};

export type SitePageContextLocalizationLayoutsSharedInformersWatchWithTelegramInformer = {
  text?: Maybe<Array<Maybe<Scalars['String']>>>;
  subscribeButton?: Maybe<SitePageContextLocalizationLayoutsSharedInformersWatchWithTelegramInformerSubscribeButton>;
};

export type SitePageContextLocalizationLayoutsSharedInformersWatchWithTelegramInformerFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  subscribeButton?: Maybe<SitePageContextLocalizationLayoutsSharedInformersWatchWithTelegramInformerSubscribeButtonFilterInput>;
};

export type SitePageContextLocalizationLayoutsSharedInformersWatchWithTelegramInformerSubscribeButton = {
  label?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationLayoutsSharedInformersWatchWithTelegramInformerSubscribeButtonFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationLayoutsSharedLinks = {
  telegram?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationLayoutsSharedLinksFilterInput = {
  telegram?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationNotification = {
  behaviorNotification?: Maybe<SitePageContextLocalizationNotificationBehaviorNotification>;
};

export type SitePageContextLocalizationNotificationBehaviorNotification = {
  copyLink?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationNotificationBehaviorNotificationFilterInput = {
  copyLink?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationNotificationFilterInput = {
  behaviorNotification?: Maybe<SitePageContextLocalizationNotificationBehaviorNotificationFilterInput>;
};

export type SitePageContextLocalizationPages = {
  index?: Maybe<SitePageContextLocalizationPagesIndex>;
  book__chapters?: Maybe<SitePageContextLocalizationPagesBook__Chapters>;
  book__chapter?: Maybe<SitePageContextLocalizationPagesBook__Chapter>;
  what_is_new__toc?: Maybe<SitePageContextLocalizationPagesWhat_Is_New__Toc>;
  not_found?: Maybe<SitePageContextLocalizationPagesNot_Found>;
};

export type SitePageContextLocalizationPagesBook__Chapter = {
  metadata?: Maybe<SitePageContextLocalizationPagesBook__ChapterMetadata>;
  gui?: Maybe<SitePageContextLocalizationPagesBook__ChapterGui>;
};

export type SitePageContextLocalizationPagesBook__ChapterFilterInput = {
  metadata?: Maybe<SitePageContextLocalizationPagesBook__ChapterMetadataFilterInput>;
  gui?: Maybe<SitePageContextLocalizationPagesBook__ChapterGuiFilterInput>;
};

export type SitePageContextLocalizationPagesBook__ChapterGui = {
  secondaryContentBar?: Maybe<SitePageContextLocalizationPagesBook__ChapterGuiSecondaryContentBar>;
};

export type SitePageContextLocalizationPagesBook__ChapterGuiFilterInput = {
  secondaryContentBar?: Maybe<SitePageContextLocalizationPagesBook__ChapterGuiSecondaryContentBarFilterInput>;
};

export type SitePageContextLocalizationPagesBook__ChapterGuiSecondaryContentBar = {
  editOnGithubButton?: Maybe<SitePageContextLocalizationPagesBook__ChapterGuiSecondaryContentBarEditOnGithubButton>;
};

export type SitePageContextLocalizationPagesBook__ChapterGuiSecondaryContentBarEditOnGithubButton = {
  tooltip?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationPagesBook__ChapterGuiSecondaryContentBarEditOnGithubButtonFilterInput = {
  tooltip?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationPagesBook__ChapterGuiSecondaryContentBarFilterInput = {
  editOnGithubButton?: Maybe<SitePageContextLocalizationPagesBook__ChapterGuiSecondaryContentBarEditOnGithubButtonFilterInput>;
};

export type SitePageContextLocalizationPagesBook__ChapterMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationPagesBook__ChapterMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationPagesBook__Chapters = {
  metadata?: Maybe<SitePageContextLocalizationPagesBook__ChaptersMetadata>;
  gui?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGui>;
};

export type SitePageContextLocalizationPagesBook__ChaptersFilterInput = {
  metadata?: Maybe<SitePageContextLocalizationPagesBook__ChaptersMetadataFilterInput>;
  gui?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiFilterInput>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGui = {
  tocItem?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiTocItem>;
  secondaryContentBar?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiSecondaryContentBar>;
  asideLayout?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiAsideLayout>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiAsideLayout = {
  tagBarLabel?: Maybe<Scalars['String']>;
  tagBar?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiAsideLayoutTagBar>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiAsideLayoutFilterInput = {
  tagBarLabel?: Maybe<StringQueryOperatorInput>;
  tagBar?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiAsideLayoutTagBarFilterInput>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiAsideLayoutTagBar = {
  cleanFilterButton?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiAsideLayoutTagBarFilterInput = {
  cleanFilterButton?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiFilterInput = {
  tocItem?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiTocItemFilterInput>;
  secondaryContentBar?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiSecondaryContentBarFilterInput>;
  asideLayout?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiAsideLayoutFilterInput>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiSecondaryContentBar = {
  label?: Maybe<Scalars['String']>;
  tocFilterButton?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocFilterButton>;
  tocCollapseAllButton?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocCollapseAllButton>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiSecondaryContentBarFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  tocFilterButton?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocFilterButtonFilterInput>;
  tocCollapseAllButton?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocCollapseAllButtonFilterInput>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocCollapseAllButton = {
  tooltip?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocCollapseAllButtonTooltip>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocCollapseAllButtonFilterInput = {
  tooltip?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocCollapseAllButtonTooltipFilterInput>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocCollapseAllButtonTooltip = {
  openState?: Maybe<Scalars['String']>;
  closeState?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocCollapseAllButtonTooltipFilterInput = {
  openState?: Maybe<StringQueryOperatorInput>;
  closeState?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocFilterButton = {
  tooltip?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiSecondaryContentBarTocFilterButtonFilterInput = {
  tooltip?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiTocItem = {
  copyLinkToBufferButton?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiTocItemCopyLinkToBufferButton>;
  collapseTocButton?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiTocItemCollapseTocButton>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiTocItemCollapseTocButton = {
  tooltip?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiTocItemCollapseTocButtonTooltip>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiTocItemCollapseTocButtonFilterInput = {
  tooltip?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiTocItemCollapseTocButtonTooltipFilterInput>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiTocItemCollapseTocButtonTooltip = {
  openState?: Maybe<Scalars['String']>;
  closeState?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiTocItemCollapseTocButtonTooltipFilterInput = {
  openState?: Maybe<StringQueryOperatorInput>;
  closeState?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiTocItemCopyLinkToBufferButton = {
  tooltip?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiTocItemCopyLinkToBufferButtonFilterInput = {
  tooltip?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationPagesBook__ChaptersGuiTocItemFilterInput = {
  copyLinkToBufferButton?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiTocItemCopyLinkToBufferButtonFilterInput>;
  collapseTocButton?: Maybe<SitePageContextLocalizationPagesBook__ChaptersGuiTocItemCollapseTocButtonFilterInput>;
};

export type SitePageContextLocalizationPagesBook__ChaptersMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationPagesBook__ChaptersMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationPagesFilterInput = {
  index?: Maybe<SitePageContextLocalizationPagesIndexFilterInput>;
  book__chapters?: Maybe<SitePageContextLocalizationPagesBook__ChaptersFilterInput>;
  book__chapter?: Maybe<SitePageContextLocalizationPagesBook__ChapterFilterInput>;
  what_is_new__toc?: Maybe<SitePageContextLocalizationPagesWhat_Is_New__TocFilterInput>;
  not_found?: Maybe<SitePageContextLocalizationPagesNot_FoundFilterInput>;
};

export type SitePageContextLocalizationPagesIndex = {
  metadata?: Maybe<SitePageContextLocalizationPagesIndexMetadata>;
  gui?: Maybe<SitePageContextLocalizationPagesIndexGui>;
};

export type SitePageContextLocalizationPagesIndexFilterInput = {
  metadata?: Maybe<SitePageContextLocalizationPagesIndexMetadataFilterInput>;
  gui?: Maybe<SitePageContextLocalizationPagesIndexGuiFilterInput>;
};

export type SitePageContextLocalizationPagesIndexGui = {
  subtitleAll?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageContextLocalizationPagesIndexGuiFilterInput = {
  subtitleAll?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationPagesIndexMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationPagesIndexMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationPagesNot_Found = {
  metadata?: Maybe<SitePageContextLocalizationPagesNot_FoundMetadata>;
  gui?: Maybe<SitePageContextLocalizationPagesNot_FoundGui>;
};

export type SitePageContextLocalizationPagesNot_FoundFilterInput = {
  metadata?: Maybe<SitePageContextLocalizationPagesNot_FoundMetadataFilterInput>;
  gui?: Maybe<SitePageContextLocalizationPagesNot_FoundGuiFilterInput>;
};

export type SitePageContextLocalizationPagesNot_FoundGui = {
  notFound_404?: Maybe<SitePageContextLocalizationPagesNot_FoundGuiNotFound_404>;
};

export type SitePageContextLocalizationPagesNot_FoundGuiFilterInput = {
  notFound_404?: Maybe<SitePageContextLocalizationPagesNot_FoundGuiNotFound_404FilterInput>;
};

export type SitePageContextLocalizationPagesNot_FoundGuiNotFound_404 = {
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationPagesNot_FoundGuiNotFound_404FilterInput = {
  status?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationPagesNot_FoundMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationPagesNot_FoundMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationPagesWhat_Is_New__Toc = {
  metadata?: Maybe<SitePageContextLocalizationPagesWhat_Is_New__TocMetadata>;
  gui?: Maybe<SitePageContextLocalizationPagesWhat_Is_New__TocGui>;
};

export type SitePageContextLocalizationPagesWhat_Is_New__TocFilterInput = {
  metadata?: Maybe<SitePageContextLocalizationPagesWhat_Is_New__TocMetadataFilterInput>;
  gui?: Maybe<SitePageContextLocalizationPagesWhat_Is_New__TocGuiFilterInput>;
};

export type SitePageContextLocalizationPagesWhat_Is_New__TocGui = {
  primaryContentBar?: Maybe<SitePageContextLocalizationPagesWhat_Is_New__TocGuiPrimaryContentBar>;
  tocItem?: Maybe<SitePageContextLocalizationPagesWhat_Is_New__TocGuiTocItem>;
};

export type SitePageContextLocalizationPagesWhat_Is_New__TocGuiFilterInput = {
  primaryContentBar?: Maybe<SitePageContextLocalizationPagesWhat_Is_New__TocGuiPrimaryContentBarFilterInput>;
  tocItem?: Maybe<SitePageContextLocalizationPagesWhat_Is_New__TocGuiTocItemFilterInput>;
};

export type SitePageContextLocalizationPagesWhat_Is_New__TocGuiPrimaryContentBar = {
  label?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationPagesWhat_Is_New__TocGuiPrimaryContentBarFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationPagesWhat_Is_New__TocGuiTocItem = {
  copyLinkToBufferButton?: Maybe<SitePageContextLocalizationPagesWhat_Is_New__TocGuiTocItemCopyLinkToBufferButton>;
};

export type SitePageContextLocalizationPagesWhat_Is_New__TocGuiTocItemCopyLinkToBufferButton = {
  tooltip?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationPagesWhat_Is_New__TocGuiTocItemCopyLinkToBufferButtonFilterInput = {
  tooltip?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLocalizationPagesWhat_Is_New__TocGuiTocItemFilterInput = {
  copyLinkToBufferButton?: Maybe<SitePageContextLocalizationPagesWhat_Is_New__TocGuiTocItemCopyLinkToBufferButtonFilterInput>;
};

export type SitePageContextLocalizationPagesWhat_Is_New__TocMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextLocalizationPagesWhat_Is_New__TocMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPageContentData = {
  title?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  subtitles?: Maybe<Array<Maybe<SitePageContextPageContentDataSubtitles>>>;
  html?: Maybe<Scalars['String']>;
  commitInfoAll?: Maybe<Array<Maybe<SitePageContextPageContentDataCommitInfoAll>>>;
  fileOnGithubLink?: Maybe<Scalars['String']>;
};

export type SitePageContextPageContentDataCommitInfoAll = {
  committedDate?: Maybe<Scalars['Date']>;
  message?: Maybe<Scalars['String']>;
  messageHeadline?: Maybe<Scalars['String']>;
  pushedDate?: Maybe<Scalars['Date']>;
  authoredByCommitter?: Maybe<Scalars['Boolean']>;
  committer?: Maybe<SitePageContextPageContentDataCommitInfoAllCommitter>;
};

export type SitePageContextPageContentDataCommitInfoAllCommitter = {
  name?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
};

export type SitePageContextPageContentDataCommitInfoAllCommitterFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  avatarUrl?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPageContentDataCommitInfoAllFilterInput = {
  committedDate?: Maybe<DateQueryOperatorInput>;
  message?: Maybe<StringQueryOperatorInput>;
  messageHeadline?: Maybe<StringQueryOperatorInput>;
  pushedDate?: Maybe<DateQueryOperatorInput>;
  authoredByCommitter?: Maybe<BooleanQueryOperatorInput>;
  committer?: Maybe<SitePageContextPageContentDataCommitInfoAllCommitterFilterInput>;
};

export type SitePageContextPageContentDataCommitInfoAllFilterListInput = {
  elemMatch?: Maybe<SitePageContextPageContentDataCommitInfoAllFilterInput>;
};

export type SitePageContextPageContentDataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  section?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  subtitles?: Maybe<SitePageContextPageContentDataSubtitlesFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  commitInfoAll?: Maybe<SitePageContextPageContentDataCommitInfoAllFilterListInput>;
  fileOnGithubLink?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPageContentDataSubtitles = {
  subtitle?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type SitePageContextPageContentDataSubtitlesFilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPageContentDataSubtitlesFilterListInput = {
  elemMatch?: Maybe<SitePageContextPageContentDataSubtitlesFilterInput>;
};

export type SitePageContextPageNavDataAll = {
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<SitePageContextPageNavDataAllSections>>>;
};

export type SitePageContextPageNavDataAllFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  sections?: Maybe<SitePageContextPageNavDataAllSectionsFilterListInput>;
};

export type SitePageContextPageNavDataAllFilterListInput = {
  elemMatch?: Maybe<SitePageContextPageNavDataAllFilterInput>;
};

export type SitePageContextPageNavDataAllSections = {
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  data?: Maybe<SitePageContextPageNavDataAllSectionsData>;
};

export type SitePageContextPageNavDataAllSectionsData = {
  version?: Maybe<Scalars['String']>;
};

export type SitePageContextPageNavDataAllSectionsDataFilterInput = {
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPageNavDataAllSectionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<SitePageContextPageNavDataAllSectionsDataFilterInput>;
};

export type SitePageContextPageNavDataAllSectionsFilterListInput = {
  elemMatch?: Maybe<SitePageContextPageNavDataAllSectionsFilterInput>;
};

export type SitePageContextWinTocTree = {
  id?: Maybe<Scalars['String']>;
  isCollapse?: Maybe<Scalars['Boolean']>;
  index?: Maybe<Scalars['Int']>;
  data?: Maybe<SitePageContextWinTocTreeData>;
};

export type SitePageContextWinTocTreeData = {
  releaseHistory?: Maybe<Array<Maybe<SitePageContextWinTocTreeDataReleaseHistory>>>;
  lastVersionStatus?: Maybe<SitePageContextWinTocTreeDataLastVersionStatus>;
  mmp?: Maybe<Scalars['String']>;
  innovations?: Maybe<Array<Maybe<SitePageContextWinTocTreeDataInnovations>>>;
};

export type SitePageContextWinTocTreeDataFilterInput = {
  releaseHistory?: Maybe<SitePageContextWinTocTreeDataReleaseHistoryFilterListInput>;
  lastVersionStatus?: Maybe<SitePageContextWinTocTreeDataLastVersionStatusFilterInput>;
  mmp?: Maybe<StringQueryOperatorInput>;
  innovations?: Maybe<SitePageContextWinTocTreeDataInnovationsFilterListInput>;
};

export type SitePageContextWinTocTreeDataInnovations = {
  id?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  innovationName?: Maybe<Scalars['String']>;
  dateRelease?: Maybe<Scalars['String']>;
  datePublication?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
};

export type SitePageContextWinTocTreeDataInnovationsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  innovationName?: Maybe<StringQueryOperatorInput>;
  dateRelease?: Maybe<StringQueryOperatorInput>;
  datePublication?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextWinTocTreeDataInnovationsFilterListInput = {
  elemMatch?: Maybe<SitePageContextWinTocTreeDataInnovationsFilterInput>;
};

export type SitePageContextWinTocTreeDataLastVersionStatus = {
  version?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type SitePageContextWinTocTreeDataLastVersionStatusFilterInput = {
  version?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextWinTocTreeDataReleaseHistory = {
  version?: Maybe<Scalars['String']>;
  dateRelease?: Maybe<Scalars['String']>;
};

export type SitePageContextWinTocTreeDataReleaseHistoryFilterInput = {
  version?: Maybe<StringQueryOperatorInput>;
  dateRelease?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextWinTocTreeDataReleaseHistoryFilterListInput = {
  elemMatch?: Maybe<SitePageContextWinTocTreeDataReleaseHistoryFilterInput>;
};

export type SitePageContextWinTocTreeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  isCollapse?: Maybe<BooleanQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  data?: Maybe<SitePageContextWinTocTreeDataFilterInput>;
};

export type SitePageContextWinTocTreeFilterListInput = {
  elemMatch?: Maybe<SitePageContextWinTocTreeFilterInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___locale'
  | 'context___localization___lang'
  | 'context___localization___title'
  | 'context___localization___description'
  | 'context___localization___appNavigation'
  | 'context___localization___appNavigation___id'
  | 'context___localization___appNavigation___path'
  | 'context___localization___appNavigation___name'
  | 'context___pageContentData___title'
  | 'context___pageContentData___section'
  | 'context___pageContentData___path'
  | 'context___pageContentData___subtitles'
  | 'context___pageContentData___subtitles___subtitle'
  | 'context___pageContentData___subtitles___path'
  | 'context___pageContentData___html'
  | 'context___pageContentData___commitInfoAll'
  | 'context___pageContentData___commitInfoAll___committedDate'
  | 'context___pageContentData___commitInfoAll___message'
  | 'context___pageContentData___commitInfoAll___messageHeadline'
  | 'context___pageContentData___commitInfoAll___pushedDate'
  | 'context___pageContentData___commitInfoAll___authoredByCommitter'
  | 'context___pageContentData___fileOnGithubLink'
  | 'context___pageNavDataAll'
  | 'context___pageNavDataAll___name'
  | 'context___pageNavDataAll___path'
  | 'context___pageNavDataAll___sections'
  | 'context___pageNavDataAll___sections___name'
  | 'context___pageNavDataAll___sections___path'
  | 'context___bookTocTree'
  | 'context___bookTocTree___id'
  | 'context___bookTocTree___isCollapse'
  | 'context___bookTocTree___index'
  | 'context___bookTocTree___data___title'
  | 'context___bookTocTree___data___section'
  | 'context___bookTocTree___data___path'
  | 'context___bookTocTree___data___subtitles'
  | 'context___innovationData___releaseHistory'
  | 'context___innovationData___releaseHistory___version'
  | 'context___innovationData___releaseHistory___dateRelease'
  | 'context___innovationData___lastVersionStatus___version'
  | 'context___innovationData___lastVersionStatus___date'
  | 'context___innovationData___mmp'
  | 'context___innovationData___innovations'
  | 'context___innovationData___innovations___id'
  | 'context___innovationData___innovations___version'
  | 'context___innovationData___innovations___innovationName'
  | 'context___innovationData___innovations___dateRelease'
  | 'context___innovationData___innovations___datePublication'
  | 'context___innovationData___innovations___tags'
  | 'context___innovationData___innovations___path'
  | 'context___innovationData___innovations___html'
  | 'context___innovationData___innovations___commitInfoAll'
  | 'context___innovationData___innovations___fileOnGithubLink'
  | 'context___winTocTree'
  | 'context___winTocTree___id'
  | 'context___winTocTree___isCollapse'
  | 'context___winTocTree___index'
  | 'context___winTocTree___data___releaseHistory'
  | 'context___winTocTree___data___mmp'
  | 'context___winTocTree___data___innovations'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___plugins'
  | 'pluginCreator___pluginOptions___plugins___resolve'
  | 'pluginCreator___pluginOptions___plugins___id'
  | 'pluginCreator___pluginOptions___plugins___name'
  | 'pluginCreator___pluginOptions___plugins___version'
  | 'pluginCreator___pluginOptions___plugins___browserAPIs'
  | 'pluginCreator___pluginOptions___plugins___pluginFilepath'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___checkSupportedExtensions'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___typeName'
  | 'pluginCreator___pluginOptions___fieldName'
  | 'pluginCreator___pluginOptions___url'
  | 'pluginCreator___pluginOptions___headers___Authorization'
  | 'pluginCreator___pluginOptions___commonmark'
  | 'pluginCreator___pluginOptions___footnotes'
  | 'pluginCreator___pluginOptions___pedantic'
  | 'pluginCreator___pluginOptions___gfm'
  | 'pluginCreator___pluginOptions___maxWidth'
  | 'pluginCreator___pluginOptions___classPrefix'
  | 'pluginCreator___pluginOptions___showLineNumbers'
  | 'pluginCreator___pluginOptions___noInlineHighlight'
  | 'pluginCreator___pluginOptions___locale'
  | 'pluginCreator___pluginOptions___lang'
  | 'pluginCreator___pluginOptions___nodeId'
  | 'pluginCreator___pluginOptions___nodeType'
  | 'pluginCreator___pluginOptions___contentId'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___plugins'
  | 'pluginOptions___plugins___resolve'
  | 'pluginOptions___plugins___id'
  | 'pluginOptions___plugins___name'
  | 'pluginOptions___plugins___version'
  | 'pluginOptions___plugins___pluginOptions___maxWidth'
  | 'pluginOptions___plugins___pluginOptions___classPrefix'
  | 'pluginOptions___plugins___pluginOptions___showLineNumbers'
  | 'pluginOptions___plugins___pluginOptions___noInlineHighlight'
  | 'pluginOptions___plugins___pluginOptions___locale'
  | 'pluginOptions___plugins___pluginOptions___lang'
  | 'pluginOptions___plugins___browserAPIs'
  | 'pluginOptions___plugins___pluginFilepath'
  | 'pluginOptions___fileName'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___checkSupportedExtensions'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___typeName'
  | 'pluginOptions___fieldName'
  | 'pluginOptions___url'
  | 'pluginOptions___headers___Authorization'
  | 'pluginOptions___commonmark'
  | 'pluginOptions___footnotes'
  | 'pluginOptions___pedantic'
  | 'pluginOptions___gfm'
  | 'pluginOptions___maxWidth'
  | 'pluginOptions___classPrefix'
  | 'pluginOptions___showLineNumbers'
  | 'pluginOptions___noInlineHighlight'
  | 'pluginOptions___locale'
  | 'pluginOptions___lang'
  | 'pluginOptions___nodeId'
  | 'pluginOptions___nodeType'
  | 'pluginOptions___contentId'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  fileName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  checkSupportedExtensions?: Maybe<Scalars['Boolean']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  commonmark?: Maybe<Scalars['Boolean']>;
  footnotes?: Maybe<Scalars['Boolean']>;
  pedantic?: Maybe<Scalars['Boolean']>;
  gfm?: Maybe<Scalars['Boolean']>;
  maxWidth?: Maybe<Scalars['Int']>;
  classPrefix?: Maybe<Scalars['String']>;
  showLineNumbers?: Maybe<Scalars['Boolean']>;
  noInlineHighlight?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  nodeId?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  contentId?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  checkSupportedExtensions?: Maybe<BooleanQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  commonmark?: Maybe<BooleanQueryOperatorInput>;
  footnotes?: Maybe<BooleanQueryOperatorInput>;
  pedantic?: Maybe<BooleanQueryOperatorInput>;
  gfm?: Maybe<BooleanQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  classPrefix?: Maybe<StringQueryOperatorInput>;
  showLineNumbers?: Maybe<BooleanQueryOperatorInput>;
  noInlineHighlight?: Maybe<BooleanQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  nodeId?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  contentId?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsHeaders = {
  Authorization?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  Authorization?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  maxWidth?: Maybe<Scalars['Int']>;
  classPrefix?: Maybe<Scalars['String']>;
  showLineNumbers?: Maybe<Scalars['Boolean']>;
  noInlineHighlight?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
  classPrefix?: Maybe<StringQueryOperatorInput>;
  showLineNumbers?: Maybe<BooleanQueryOperatorInput>;
  noInlineHighlight?: Maybe<BooleanQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  repository?: Maybe<SiteSiteMetadataRepository>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  repository?: Maybe<SiteSiteMetadataRepositoryFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataRepository = {
  owner?: Maybe<Scalars['String']>;
  branch?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataRepositoryFilterInput = {
  owner?: Maybe<StringQueryOperatorInput>;
  branch?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type WhatIsNewToc = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  toc?: Maybe<Array<Maybe<WhatIsNewTocToc>>>;
};

export type WhatIsNewTocConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WhatIsNewTocEdge>;
  nodes: Array<WhatIsNewToc>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WhatIsNewTocGroupConnection>;
};


export type WhatIsNewTocConnectionDistinctArgs = {
  field: WhatIsNewTocFieldsEnum;
};


export type WhatIsNewTocConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WhatIsNewTocFieldsEnum;
};

export type WhatIsNewTocEdge = {
  next?: Maybe<WhatIsNewToc>;
  node: WhatIsNewToc;
  previous?: Maybe<WhatIsNewToc>;
};

export type WhatIsNewTocFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'toc'
  | 'toc___releaseHistory'
  | 'toc___releaseHistory___version'
  | 'toc___releaseHistory___dateRelease'
  | 'toc___lastVersionStatus___version'
  | 'toc___lastVersionStatus___date'
  | 'toc___mmp'
  | 'toc___innovations'
  | 'toc___innovations___id'
  | 'toc___innovations___version'
  | 'toc___innovations___innovationName'
  | 'toc___innovations___dateRelease'
  | 'toc___innovations___datePublication'
  | 'toc___innovations___tags'
  | 'toc___innovations___path';

export type WhatIsNewTocFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  toc?: Maybe<WhatIsNewTocTocFilterListInput>;
};

export type WhatIsNewTocGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WhatIsNewTocEdge>;
  nodes: Array<WhatIsNewToc>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WhatIsNewTocSortInput = {
  fields?: Maybe<Array<Maybe<WhatIsNewTocFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WhatIsNewTocToc = {
  releaseHistory?: Maybe<Array<Maybe<WhatIsNewTocTocReleaseHistory>>>;
  lastVersionStatus?: Maybe<WhatIsNewTocTocLastVersionStatus>;
  mmp?: Maybe<Scalars['String']>;
  innovations?: Maybe<Array<Maybe<WhatIsNewTocTocInnovations>>>;
};

export type WhatIsNewTocTocFilterInput = {
  releaseHistory?: Maybe<WhatIsNewTocTocReleaseHistoryFilterListInput>;
  lastVersionStatus?: Maybe<WhatIsNewTocTocLastVersionStatusFilterInput>;
  mmp?: Maybe<StringQueryOperatorInput>;
  innovations?: Maybe<WhatIsNewTocTocInnovationsFilterListInput>;
};

export type WhatIsNewTocTocFilterListInput = {
  elemMatch?: Maybe<WhatIsNewTocTocFilterInput>;
};

export type WhatIsNewTocTocInnovations = {
  id?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  innovationName?: Maybe<Scalars['String']>;
  dateRelease?: Maybe<Scalars['String']>;
  datePublication?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
};

export type WhatIsNewTocTocInnovationsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  innovationName?: Maybe<StringQueryOperatorInput>;
  dateRelease?: Maybe<StringQueryOperatorInput>;
  datePublication?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type WhatIsNewTocTocInnovationsFilterListInput = {
  elemMatch?: Maybe<WhatIsNewTocTocInnovationsFilterInput>;
};

export type WhatIsNewTocTocLastVersionStatus = {
  version?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type WhatIsNewTocTocLastVersionStatusFilterInput = {
  version?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<StringQueryOperatorInput>;
};

export type WhatIsNewTocTocReleaseHistory = {
  version?: Maybe<Scalars['String']>;
  dateRelease?: Maybe<Scalars['String']>;
};

export type WhatIsNewTocTocReleaseHistoryFilterInput = {
  version?: Maybe<StringQueryOperatorInput>;
  dateRelease?: Maybe<StringQueryOperatorInput>;
};

export type WhatIsNewTocTocReleaseHistoryFilterListInput = {
  elemMatch?: Maybe<WhatIsNewTocTocReleaseHistoryFilterInput>;
};

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
