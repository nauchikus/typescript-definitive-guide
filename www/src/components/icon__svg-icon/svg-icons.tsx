import React, { FC } from "react";

import GithubNativeSvgIcon from '../../../assets/icon__svg/iconmonstr-github-1.svg';
import TelegramNativeSvgIcon from '../../../assets/icon__svg/telegram.svg';
import SearchNativeSvgIcon from '../../../assets/icon__svg/iconmonstr-magnifier-1.svg';
import DonateNativeSvgIcon from '../../../assets/icon__svg/donate.svg';
import PdfNativeSvgIcon from '../../../assets/icon__svg/pdf-file.svg';
import BrickwallNativeSvgIcon from '../../../assets/icon__svg/brickwall.svg';
import ForwardArrowNativeSvgIcon from '../../../assets/icon__svg/baseline-arrow_forward-24px.svg';
import MagnifierNativeSvgIcon from '../../../assets/icon__svg/magnifier.svg';
import LinkNativeSvgIcon from '../../../assets/icon__svg/iconmonstr-link.svg';
import ArrowDownNativeSvgIcon from '../../../assets/icon__svg/baseline-keyboard_arrow_down-24px.svg';
import ArrowUpNativeSvgIcon from '../../../assets/icon__svg/baseline-keyboard_arrow_up-24px.svg';
import ArrowBeforeNativeSvgIcon from '../../../assets/icon__svg/baseline-navigate_before-24px.svg';
import ArrowNextNativeSvgIcon from '../../../assets/icon__svg/baseline-navigate_next-24px.svg';
import CloseNativeSvgIcon from '../../../assets/icon__svg/baseline-close-24px.svg';
import EditNativeSvgIcon from '../../../assets/icon__svg/iconmonstr-edit-9.svg';

interface ISvgIconProps {
  className?:string;
}

export const GithubSvgIcon:FC<ISvgIconProps>=({className}) => (
    <svg className={className?`svg-icon ${className}`:`svg-icon`} width={24} height={24} viewBox="0 0 24 24">
        <use xlinkHref={ `#${ GithubNativeSvgIcon.id }` }/>
    </svg>
);
export const TelegramSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={className?`svg-icon ${className}`:`svg-icon`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ TelegramNativeSvgIcon.id }` }/>
  </svg>
);

export const DonateSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={className?`svg-icon ${className}`:`svg-icon`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ DonateNativeSvgIcon.id }` }/>
  </svg>
);


export const SearchSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={className?`svg-icon ${className}`:`svg-icon`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ SearchNativeSvgIcon.id }` }/>
  </svg>
);
export const PdfSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={className?`svg-icon ${className}`:`svg-icon`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ PdfNativeSvgIcon.id }` }/>
  </svg>
);
export const BrickwallSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={className?`svg-icon ${className}`:`svg-icon`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ BrickwallNativeSvgIcon.id }` }/>
  </svg>
);
export const ForwardArrowSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={className?`svg-icon ${className}`:`svg-icon`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ ForwardArrowNativeSvgIcon.id }` }/>
  </svg>
);
export const MagnifierSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={className?`svg-icon ${className}`:`svg-icon`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ MagnifierNativeSvgIcon.id }` }/>
  </svg>
);
export const LinkSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={className?`svg-icon ${className}`:`svg-icon`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ LinkNativeSvgIcon.id }` }/>
  </svg>
);
export const ArrowDownSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={className?`svg-icon ${className}`:`svg-icon`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ ArrowDownNativeSvgIcon.id }` }/>
  </svg>
);
export const ArrowUpSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={className?`svg-icon ${className}`:`svg-icon`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ ArrowUpNativeSvgIcon.id }` }/>
  </svg>
);
export const ArrowBeforeSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={className?`svg-icon ${className}`:`svg-icon`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ ArrowBeforeNativeSvgIcon.id }` }/>
  </svg>
);
export const ArrowNextSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={className?`svg-icon ${className}`:`svg-icon`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ ArrowNextNativeSvgIcon.id }` }/>
  </svg>
);
export const CloseSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={className?`svg-icon ${className}`:`svg-icon`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ CloseNativeSvgIcon.id }` }/>
  </svg>
);
export const EditSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={className?`svg-icon ${className}`:`svg-icon`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ EditNativeSvgIcon.id }` }/>
  </svg>
);