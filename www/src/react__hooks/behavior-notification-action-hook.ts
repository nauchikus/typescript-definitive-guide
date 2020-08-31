import { useTranslator } from "./translator.hook";
import { useRef } from "react";
import { BehaviorNotificationLocalization, LocalizationPaths } from "../localization";
import { generateStringId } from "../utils/string-utils";
import { useBehaviorNotification } from "../react__context/BehaviorNotificationContext";
import { NoticeType } from "../stores/behavior-notificaion-store";

export const useBehaviorNotificationAction = () => {
  let [t] = useTranslator<[BehaviorNotificationLocalization]>(LocalizationPaths.BehaviorNotification);
  let behaviorNotification = useBehaviorNotification();


  let actionsRef = useRef( {
    copyLink: () => behaviorNotification.send( {
      type: NoticeType.CopyLinkDefaultNotice,
      id: generateStringId(),
      message: t.copyLink
    } )
  } );


  return actionsRef.current;
};