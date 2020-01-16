import { useTranslator } from "./translator.hook";
import { useBehaviorNotification } from "../stores/what-is-new-stores";
import { useRef } from "react";
import { NoticeType } from "../stores/PageNavStore";
import { BehaviorNotificationLocalization, LocalizationPaths } from "../localization";
import { generateStringId } from "../utils/string-utils";

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