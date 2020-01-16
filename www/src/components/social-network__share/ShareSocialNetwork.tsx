import React, { FC } from "react";


interface IShareScialNetworkProps {
}

export const ShareSocialNetwork:FC<IShareScialNetworkProps>=({})=>{
  return (
    <div className="social-network__share ya-share2" data-services="vkontakte,facebook,twitter,whatsapp,telegram"></div>
  )
}