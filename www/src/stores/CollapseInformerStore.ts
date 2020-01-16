export enum CollapseInformerState {
  Visible='visible',
  VisibleShortBanner='visibleShortBanner',
  VisibleFullBanner='visibleFullBanner',
  Hidden='hidden',
}

export const createCollapseInformerStore=()=>{

  return({
    currentInformerId:'',
    state:'',
    isVisible(){
      return
    },
    isHidden(){
      return ''
    },
    isShortBanner(){
      return ''
    },
    isFullBanner(){
      return ''
    }
  })
}