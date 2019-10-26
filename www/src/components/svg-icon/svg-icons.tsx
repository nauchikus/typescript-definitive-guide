import React, { FC } from "react";

import GithubNativeSvgIcon from '../../../assets/icon__svg/iconmonstr-github-1.svg';
import TelegramNativeSvgIcon from '../../../assets/icon__svg/telegram.svg';
import SearchNativeSvgIcon from '../../../assets/icon__svg/iconmonstr-magnifier-1.svg';
import DonateNativeSvgIcon from '../../../assets/icon__svg/donate.svg';
import PdfNativeSvgIcon from '../../../assets/icon__svg/pdf-file.svg';
import BrickwallNativeSvgIcon from '../../../assets/icon__svg/brickwall.svg';
import ForwardArrowNativeSvgIcon from '../../../assets/icon__svg/baseline-arrow_forward-24px.svg';

interface ISvgIconProps {
  className?:string;
}

export const GithubSvgIcon:FC<ISvgIconProps>=({className}) => (
    <svg className={`svg-icon ${className}`} width={24} height={24} viewBox="0 0 24 24">
        <use xlinkHref={ `#${ GithubNativeSvgIcon.id }` }/>
    </svg>
);
export const TelegramSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={`svg-icon ${className}`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ TelegramNativeSvgIcon.id }` }/>
  </svg>
);

export const DonateSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={`svg-icon ${className}`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ DonateNativeSvgIcon.id }` }/>
  </svg>
);


export const SearchSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={`svg-icon ${className}`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ SearchNativeSvgIcon.id }` }/>
  </svg>
);
export const PdfSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={`svg-icon ${className}`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ PdfNativeSvgIcon.id }` }/>
  </svg>
);
export const BrickwallSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={`svg-icon ${className}`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ BrickwallNativeSvgIcon.id }` }/>
  </svg>
);
export const ForwardArrowSvgIcon:FC<ISvgIconProps>=({className}) => (
  <svg className={`svg-icon ${className}`} width={24} height={24} viewBox="0 0 24 24">
    <use xlinkHref={ `#${ ForwardArrowNativeSvgIcon.id }` }/>
  </svg>
);