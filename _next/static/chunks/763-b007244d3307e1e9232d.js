(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[763],{44545:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(1413),o=t(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},l=t(27029),u=function(e,n){return o.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};u.displayName="EllipsisOutlined";var a=o.forwardRef(u)},10985:function(e,n,t){"use strict";t.d(n,{iz:function(){return xe},ck:function(){return V},BW:function(){return we},sN:function(){return V},Wd:function(){return ie},ZP:function(){return Se},Xl:function(){return Ne}});var r=t(87462),o=t(4942),i=t(1413),l=t(93433),u=t(29439),a=t(44925),c=t(67294),s=t(94184),f=t.n(s),d=t(96774),v=t.n(d),p=t(21770),m=t(80334),h=t(19214),y=t(15671),b=t(43144),Z=t(79340),g=t(98557),C=t(15105),E=t(98423),K=t(56982),P=c.createContext(null);function M(e){var n=e.children,t=e.locked,r=(0,a.Z)(e,["children","locked"]),o=c.useContext(P),l=(0,K.Z)((function(){return function(e,n){var t=(0,i.Z)({},e);return Object.keys(n).forEach((function(e){var r=n[e];void 0!==r&&(t[e]=r)})),t}(o,r)}),[o,r],(function(e,n){return!t&&(e[0]!==n[0]||!v()(e[1],n[1]))}));return c.createElement(P.Provider,{value:l},n)}function k(e,n,t,r){var o=c.useContext(P),i=o.activeKey,l=o.onActive,u=o.onInactive,a={active:i===e};return n||(a.onMouseEnter=function(n){null===t||void 0===t||t({key:e,domEvent:n}),l(e)},a.onMouseLeave=function(n){null===r||void 0===r||r({key:e,domEvent:n}),u(e)}),a}function w(e){var n=e.item,t=(0,a.Z)(e,["item"]);return Object.defineProperty(t,"item",{get:function(){return(0,m.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),t}function x(e){var n=e.icon,t=e.props,r=e.children;return("function"===typeof n?c.createElement(n,(0,i.Z)({},t)):n)||r||null}function N(e){var n=c.useContext(P),t=n.mode,r=n.rtl,o=n.inlineIndent;if("inline"!==t)return null;return r?{paddingRight:e*o}:{paddingLeft:e*o}}var I=[],S=c.createContext(null);function R(){return c.useContext(S)}var O=c.createContext(I);function A(e){var n=c.useContext(O);return c.useMemo((function(){return void 0!==e?[].concat((0,l.Z)(n),[e]):n}),[n,e])}var D=c.createContext(null),T=c.createContext(null);function L(e,n){return void 0===e?null:"".concat(e,"-").concat(n)}function z(e){return L(c.useContext(T),e)}var _=function(e){(0,Z.Z)(t,e);var n=(0,g.Z)(t);function t(){return(0,y.Z)(this,t),n.apply(this,arguments)}return(0,b.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.title,t=e.attribute,o=e.elementRef,i=(0,a.Z)(e,["title","attribute","elementRef"]),l=(0,E.Z)(i,["eventKey"]);return(0,m.ZP)(!t,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),c.createElement(h.Z.Item,(0,r.Z)({},t,{title:"string"===typeof n?n:void 0},l,{ref:o}))}}]),t}(c.Component),j=function(e){var n,t=e.style,u=e.className,s=e.eventKey,d=(e.warnKey,e.disabled),v=e.itemIcon,p=e.children,m=e.role,h=e.onMouseEnter,y=e.onMouseLeave,b=e.onClick,Z=e.onKeyDown,g=e.onFocus,E=(0,a.Z)(e,["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),K=z(s),M=c.useContext(P),I=M.prefixCls,S=M.onItemClick,R=M.disabled,O=M.overflowDisabled,D=M.itemIcon,T=M.selectedKeys,L=M.onActive,j="".concat(I,"-item"),V=c.useRef(),F=c.useRef(),W=R||d,q=A(s);var B=function(e){return{key:s,keyPath:(0,l.Z)(q).reverse(),item:V.current,domEvent:e}},G=v||D,H=k(s,W,h,y),U=H.active,X=(0,a.Z)(H,["active"]),Y=T.includes(s),J=N(q.length),Q={};return"option"===e.role&&(Q["aria-selected"]=Y),c.createElement(_,(0,r.Z)({ref:V,elementRef:F,role:null===m?"none":m||"menuitem",tabIndex:d?null:-1,"data-menu-id":O&&K?null:K},E,X,Q,{component:"li","aria-disabled":d,style:(0,i.Z)((0,i.Z)({},J),t),className:f()(j,(n={},(0,o.Z)(n,"".concat(j,"-active"),U),(0,o.Z)(n,"".concat(j,"-selected"),Y),(0,o.Z)(n,"".concat(j,"-disabled"),W),n),u),onClick:function(e){if(!W){var n=B(e);null===b||void 0===b||b(w(n)),S(n)}},onKeyDown:function(e){if(null===Z||void 0===Z||Z(e),e.which===C.Z.ENTER){var n=B(e);null===b||void 0===b||b(w(n)),S(n)}},onFocus:function(e){L(s),null===g||void 0===g||g(e)}}),p,c.createElement(x,{props:(0,i.Z)((0,i.Z)({},e),{},{isSelected:Y}),icon:G}))};var V=function(e){var n=e.eventKey,t=R(),r=A(n);return c.useEffect((function(){if(t)return t.registerPath(n,r),function(){t.unregisterPath(n,r)}}),[r]),t?null:c.createElement(j,e)},F=t(50344);function W(e,n){return(0,F.Z)(e).map((function(e,t){if(c.isValidElement(e)){var r,o,i=e.key,u=null!==(r=null===(o=e.props)||void 0===o?void 0:o.eventKey)&&void 0!==r?r:i;(null===u||void 0===u)&&(u="tmp_key-".concat([].concat((0,l.Z)(n),[t]).join("-")));var a={key:u,eventKey:u};return c.cloneElement(e,a)}return e}))}function q(e){var n=c.useRef(e);n.current=e;var t=c.useCallback((function(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))}),[]);return e?t:void 0}var B=function(e,n){var t=e.className,o=e.children,i=(0,a.Z)(e,["className","children"]),l=c.useContext(P),u=l.prefixCls,s=l.mode;return c.createElement("ul",(0,r.Z)({className:f()(u,"".concat(u,"-sub"),"".concat(u,"-").concat("inline"===s?"inline":"vertical"),t)},i,{"data-menu-list":!0,ref:n}),o)},G=c.forwardRef(B);G.displayName="SubMenuList";var H=G,U=t(18481),X=t(75164),Y={adjustX:1,adjustY:1},J={topLeft:{points:["bl","tl"],overflow:Y,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Y,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Y,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Y,offset:[4,0]}},Q={topLeft:{points:["bl","tl"],overflow:Y,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Y,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Y,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Y,offset:[4,0]}};function $(e,n,t){return n||(t?t[e]||t.other:void 0)}var ee={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function ne(e){var n=e.prefixCls,t=e.visible,r=e.children,l=e.popup,a=e.popupClassName,s=e.popupOffset,d=e.disabled,v=e.mode,p=e.onVisibleChange,m=c.useContext(P),h=m.getPopupContainer,y=m.rtl,b=m.subMenuOpenDelay,Z=m.subMenuCloseDelay,g=m.builtinPlacements,C=m.triggerSubMenuAction,E=m.forceSubMenuRender,K=m.motion,M=m.defaultMotions,k=c.useState(!1),w=(0,u.Z)(k,2),x=w[0],N=w[1],I=y?(0,i.Z)((0,i.Z)({},Q),g):(0,i.Z)((0,i.Z)({},J),g),S=ee[v],R=$(v,K,M),O=(0,i.Z)((0,i.Z)({},R),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),A=c.useRef();return c.useEffect((function(){return A.current=(0,X.Z)((function(){N(t)})),function(){X.Z.cancel(A.current)}}),[t]),c.createElement(U.Z,{prefixCls:n,popupClassName:f()("".concat(n,"-popup"),(0,o.Z)({},"".concat(n,"-rtl"),y),a),stretch:"horizontal"===v?"minWidth":null,getPopupContainer:h,builtinPlacements:I,popupPlacement:S,popupVisible:x,popup:l,popupAlign:s&&{offset:s},action:d?[]:[C],mouseEnterDelay:b,mouseLeaveDelay:Z,onPopupVisibleChange:p,forceRender:E,popupMotion:O},r)}var te=t(60444);function re(e){var n=e.id,t=e.open,o=e.keyPath,l=e.children,a="inline",s=c.useContext(P),f=s.prefixCls,d=s.forceSubMenuRender,v=s.motion,p=s.defaultMotions,m=s.mode,h=c.useRef(!1);h.current=m===a;var y=c.useState(!h.current),b=(0,u.Z)(y,2),Z=b[0],g=b[1],C=!!h.current&&t;c.useEffect((function(){h.current&&g(!1)}),[m]);var E=(0,i.Z)({},$(a,v,p));o.length>1&&(E.motionAppear=!1);var K=E.onVisibleChanged;return E.onVisibleChanged=function(e){return h.current||e||g(!0),null===K||void 0===K?void 0:K(e)},Z?null:c.createElement(M,{mode:a,locked:!h.current},c.createElement(te.Z,(0,r.Z)({visible:C},E,{forceRender:d,removeOnLeave:!1,leavedClassName:"".concat(f,"-hidden")}),(function(e){var t=e.className,r=e.style;return c.createElement(H,{id:n,className:t,style:r},l)})))}var oe=function(e){var n,t=e.style,l=e.className,s=e.title,d=e.eventKey,v=(e.warnKey,e.disabled),p=e.internalPopupClose,m=e.children,y=e.itemIcon,b=e.expandIcon,Z=e.popupClassName,g=e.popupOffset,C=e.onClick,E=e.onMouseEnter,K=e.onMouseLeave,I=e.onTitleClick,S=e.onTitleMouseEnter,R=e.onTitleMouseLeave,O=(0,a.Z)(e,["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),T=z(d),L=c.useContext(P),_=L.prefixCls,j=L.mode,V=L.openKeys,F=L.disabled,W=L.overflowDisabled,B=L.activeKey,G=L.selectedKeys,U=L.itemIcon,X=L.expandIcon,Y=L.onItemClick,J=L.onOpenChange,Q=L.onActive,$=c.useContext(D).isSubPathKey,ee=A(),te="".concat(_,"-submenu"),oe=F||v,ie=c.useRef(),le=c.useRef();var ue=y||U,ae=b||X,ce=V.includes(d),se=!W&&ce,fe=$(G,d),de=k(d,oe,S,R),ve=de.active,pe=(0,a.Z)(de,["active"]),me=c.useState(!1),he=(0,u.Z)(me,2),ye=he[0],be=he[1],Ze=function(e){oe||be(e)},ge=c.useMemo((function(){return ve||"inline"!==j&&(ye||$([B],d))}),[j,ve,B,ye,d,$]),Ce=N(ee.length),Ee=q((function(e){null===C||void 0===C||C(w(e)),Y(e)})),Ke=T&&"".concat(T,"-popup"),Pe=c.createElement("div",(0,r.Z)({role:"menuitem",style:Ce,className:"".concat(te,"-title"),tabIndex:oe?null:-1,ref:ie,title:"string"===typeof s?s:null,"data-menu-id":W&&T?null:T,"aria-expanded":se,"aria-haspopup":!0,"aria-controls":Ke,"aria-disabled":oe,onClick:function(e){oe||(null===I||void 0===I||I({key:d,domEvent:e}),"inline"===j&&J(d,!ce))},onFocus:function(){Q(d)}},pe),s,c.createElement(x,{icon:"horizontal"!==j?ae:null,props:(0,i.Z)((0,i.Z)({},e),{},{isOpen:se,isSubMenu:!0})},c.createElement("i",{className:"".concat(te,"-arrow")}))),Me=c.useRef(j);if("inline"!==j&&(Me.current=ee.length>1?"vertical":j),!W){var ke=Me.current;Pe=c.createElement(ne,{mode:ke,prefixCls:te,visible:!p&&se&&"inline"!==j,popupClassName:Z,popupOffset:g,popup:c.createElement(M,{mode:"horizontal"===ke?"vertical":ke},c.createElement(H,{id:Ke,ref:le},m)),disabled:oe,onVisibleChange:function(e){"inline"!==j&&J(d,e)}},Pe)}return c.createElement(M,{onItemClick:Ee,mode:"horizontal"===j?"vertical":j,itemIcon:ue,expandIcon:ae},c.createElement(h.Z.Item,(0,r.Z)({role:"none"},O,{component:"li",style:t,className:f()(te,"".concat(te,"-").concat(j),l,(n={},(0,o.Z)(n,"".concat(te,"-open"),se),(0,o.Z)(n,"".concat(te,"-active"),ge),(0,o.Z)(n,"".concat(te,"-selected"),fe),(0,o.Z)(n,"".concat(te,"-disabled"),oe),n)),onMouseEnter:function(e){Ze(!0),null===E||void 0===E||E({key:d,domEvent:e})},onMouseLeave:function(e){Ze(!1),null===K||void 0===K||K({key:d,domEvent:e})}}),Pe,!W&&c.createElement(re,{id:Ke,open:se,keyPath:ee},m)))};function ie(e){var n,t=e.eventKey,r=e.children,o=A(t),i=W(r,o),l=R();return c.useEffect((function(){if(l)return l.registerPath(t,o),function(){l.unregisterPath(t,o)}}),[o]),n=l?i:c.createElement(oe,e,i),c.createElement(O.Provider,{value:o},n)}var le=t(5110);function ue(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,le.Z)(e)){var t=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(t)||e.isContentEditable||"a"===t&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),i=Number(o),l=null;return o&&!Number.isNaN(i)?l=i:r&&null===l&&(l=0),r&&e.disabled&&(l=null),null!==l&&(l>=0||n&&l<0)}return!1}function ae(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=(0,l.Z)(e.querySelectorAll("*")).filter((function(e){return ue(e,n)}));return ue(e,n)&&t.unshift(e),t}var ce=C.Z.LEFT,se=C.Z.RIGHT,fe=C.Z.UP,de=C.Z.DOWN,ve=C.Z.ENTER,pe=C.Z.ESC,me=[fe,de,ce,se];function he(e,n){return ae(e,!0).filter((function(e){return n.has(e)}))}function ye(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!e)return null;var o=he(e,n),i=o.length,l=o.findIndex((function(e){return t===e}));return r<0?-1===l?l=i-1:l-=1:r>0&&(l+=1),o[l=(l+i)%i]}function be(e,n,t,r,i,l,u,a,s,f){var d=c.useRef(),v=c.useRef();v.current=n;var p=function(){X.Z.cancel(d.current)};return c.useEffect((function(){return function(){p()}}),[]),function(c){var m=c.which;if([].concat(me,[ve,pe]).includes(m)){var h,y,b,Z=function(){return h=new Set,y=new Map,b=new Map,l().forEach((function(e){var n=document.querySelector("[data-menu-id='".concat(L(r,e),"']"));n&&(h.add(n),b.set(n,e),y.set(e,n))})),h};Z();var g=function(e,n){for(var t=e||document.activeElement;t;){if(n.has(t))return t;t=t.parentElement}return null}(y.get(n),h),C=b.get(g),E=function(e,n,t,r){var i,l,u,a,c="prev",s="next",f="children",d="parent";if("inline"===e&&r===ve)return{inlineTrigger:!0};var v=(i={},(0,o.Z)(i,fe,c),(0,o.Z)(i,de,s),i),p=(l={},(0,o.Z)(l,ce,t?s:c),(0,o.Z)(l,se,t?c:s),(0,o.Z)(l,de,f),(0,o.Z)(l,ve,f),l),m=(u={},(0,o.Z)(u,fe,c),(0,o.Z)(u,de,s),(0,o.Z)(u,ve,f),(0,o.Z)(u,pe,d),(0,o.Z)(u,ce,t?f:d),(0,o.Z)(u,se,t?d:f),u);switch(null===(a={inline:v,horizontal:p,vertical:m,inlineSub:v,horizontalSub:m,verticalSub:m}["".concat(e).concat(n?"":"Sub")])||void 0===a?void 0:a[r]){case c:return{offset:-1,sibling:!0};case s:return{offset:1,sibling:!0};case d:return{offset:-1,sibling:!1};case f:return{offset:1,sibling:!1};default:return null}}(e,1===u(C,!0).length,t,m);if(!E)return;me.includes(m)&&c.preventDefault();var K=function(e){if(e){var n=e,t=e.querySelector("a");(null===t||void 0===t?void 0:t.getAttribute("href"))&&(n=t);var r=b.get(e);a(r),p(),d.current=(0,X.Z)((function(){v.current===r&&n.focus()}))}};if(E.sibling||!g){var P=ye(g&&"inline"!==e?function(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}(g):i.current,h,g,E.offset);K(P)}else if(E.inlineTrigger)s(C);else if(E.offset>0)s(C,!0),p(),d.current=(0,X.Z)((function(){Z();var e=g.getAttribute("aria-controls"),n=ye(document.getElementById(e),h);K(n)}),5);else if(E.offset<0){var M=u(C,!0),k=M[M.length-2],w=y.get(k);s(k,!1),K(w)}}null===f||void 0===f||f(c)}}var Ze=Math.random().toFixed(5).toString().slice(2),ge=0;var Ce="__RC_UTIL_PATH_SPLIT__",Ee=function(e){return e.join(Ce)},Ke="rc-menu-more";function Pe(){var e=c.useState({}),n=(0,u.Z)(e,2)[1],t=(0,c.useRef)(new Map),r=(0,c.useRef)(new Map),o=c.useState([]),i=(0,u.Z)(o,2),a=i[0],s=i[1],f=(0,c.useRef)(0),d=(0,c.useRef)(!1),v=(0,c.useCallback)((function(e,o){var i=Ee(o);r.current.set(i,e),t.current.set(e,i),f.current+=1;var l,u=f.current;l=function(){u===f.current&&(d.current||n({}))},Promise.resolve().then(l)}),[]),p=(0,c.useCallback)((function(e,n){var o=Ee(n);r.current.delete(o),t.current.delete(e)}),[]),m=(0,c.useCallback)((function(e){s(e)}),[]),h=(0,c.useCallback)((function(e,n){var r=t.current.get(e)||"",o=r.split(Ce);return n&&a.includes(o[0])&&o.unshift(Ke),o}),[a]),y=(0,c.useCallback)((function(e,n){return e.some((function(e){return h(e,!0).includes(n)}))}),[h]),b=(0,c.useCallback)((function(e){var n="".concat(t.current.get(e)).concat(Ce),o=new Set;return(0,l.Z)(r.current.keys()).forEach((function(e){e.startsWith(n)&&o.add(r.current.get(e))})),o}),[]);return c.useEffect((function(){return function(){d.current=!0}}),[]),{registerPath:v,unregisterPath:p,refreshOverflowKeys:m,isSubPathKey:y,getKeyPath:h,getKeys:function(){var e=(0,l.Z)(t.current.keys());return a.length&&e.push(Ke),e},getSubPathKeys:b}}var Me=[],ke=function(e){var n=e.className,t=e.title,o=(e.eventKey,e.children),i=(0,a.Z)(e,["className","title","eventKey","children"]),l=c.useContext(P).prefixCls,u="".concat(l,"-item-group");return c.createElement("li",(0,r.Z)({},i,{onClick:function(e){return e.stopPropagation()},className:f()(u,n)}),c.createElement("div",{className:"".concat(u,"-title"),title:"string"===typeof t?t:void 0},t),c.createElement("ul",{className:"".concat(u,"-list")},o))};function we(e){var n=e.children,t=(0,a.Z)(e,["children"]),r=W(n,A(t.eventKey));return R()?r:c.createElement(ke,(0,E.Z)(t,["warnKey"]),r)}function xe(e){var n=e.className,t=e.style,r=c.useContext(P).prefixCls;return R()?null:c.createElement("li",{className:f()("".concat(r,"-item-divider"),n),style:t})}var Ne=A,Ie=function(e){var n,t,s=e.prefixCls,d=void 0===s?"rc-menu":s,m=e.style,y=e.className,b=e.tabIndex,Z=void 0===b?0:b,g=e.children,C=e.direction,E=e.id,K=e.mode,P=void 0===K?"vertical":K,k=e.inlineCollapsed,x=e.disabled,N=e.disabledOverflow,I=e.subMenuOpenDelay,R=void 0===I?.1:I,O=e.subMenuCloseDelay,A=void 0===O?.1:O,L=e.forceSubMenuRender,z=e.defaultOpenKeys,_=e.openKeys,j=e.activeKey,F=e.defaultActiveFirst,B=e.selectable,G=void 0===B||B,H=e.multiple,U=void 0!==H&&H,X=e.defaultSelectedKeys,Y=e.selectedKeys,J=e.onSelect,Q=e.onDeselect,$=e.inlineIndent,ee=void 0===$?24:$,ne=e.motion,te=e.defaultMotions,re=e.triggerSubMenuAction,oe=void 0===re?"hover":re,le=e.builtinPlacements,ue=e.itemIcon,ae=e.expandIcon,ce=e.overflowedIndicator,se=void 0===ce?"...":ce,fe=e.overflowedIndicatorPopupClassName,de=e.getPopupContainer,ve=e.onClick,pe=e.onOpenChange,me=e.onKeyDown,he=(e.openAnimation,e.openTransitionName,(0,a.Z)(e,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"])),ye=W(g,Me),Ce=c.useState(!1),Ee=(0,u.Z)(Ce,2),ke=Ee[0],we=Ee[1],xe=c.useRef(),Ne=function(e){var n=(0,p.Z)(e,{value:e}),t=(0,u.Z)(n,2),r=t[0],o=t[1];return c.useEffect((function(){ge+=1;var e="".concat(Ze,"-").concat(ge);o("rc-menu-uuid-".concat(e))}),[]),r}(E),Ie="rtl"===C;var Se=c.useMemo((function(){return"inline"!==P&&"vertical"!==P||!k?[P,!1]:["vertical",k]}),[P,k]),Re=(0,u.Z)(Se,2),Oe=Re[0],Ae=Re[1],De=c.useState(0),Te=(0,u.Z)(De,2),Le=Te[0],ze=Te[1],_e=Le>=ye.length-1||"horizontal"!==Oe||N,je=(0,p.Z)(z,{value:_,postState:function(e){return e||Me}}),Ve=(0,u.Z)(je,2),Fe=Ve[0],We=Ve[1],qe=function(e){We(e),null===pe||void 0===pe||pe(e)},Be=c.useState(Fe),Ge=(0,u.Z)(Be,2),He=Ge[0],Ue=Ge[1],Xe="inline"===Oe,Ye=c.useRef(!1);c.useEffect((function(){Xe&&Ue(Fe)}),[Fe]),c.useEffect((function(){Ye.current?Xe?We(He):qe(Me):Ye.current=!0}),[Xe]);var Je=Pe(),Qe=Je.registerPath,$e=Je.unregisterPath,en=Je.refreshOverflowKeys,nn=Je.isSubPathKey,tn=Je.getKeyPath,rn=Je.getKeys,on=Je.getSubPathKeys,ln=c.useMemo((function(){return{registerPath:Qe,unregisterPath:$e}}),[Qe,$e]),un=c.useMemo((function(){return{isSubPathKey:nn}}),[nn]);c.useEffect((function(){en(_e?Me:ye.slice(Le+1).map((function(e){return e.key})))}),[Le,_e]);var an=(0,p.Z)(j||F&&(null===(n=ye[0])||void 0===n?void 0:n.key),{value:j}),cn=(0,u.Z)(an,2),sn=cn[0],fn=cn[1],dn=q((function(e){fn(e)})),vn=q((function(){fn(void 0)})),pn=(0,p.Z)(X||[],{value:Y,postState:function(e){return Array.isArray(e)?e:null===e||void 0===e?Me:[e]}}),mn=(0,u.Z)(pn,2),hn=mn[0],yn=mn[1],bn=q((function(e){null===ve||void 0===ve||ve(w(e)),function(e){if(G){var n,t=e.key,r=hn.includes(t);n=U?r?hn.filter((function(e){return e!==t})):[].concat((0,l.Z)(hn),[t]):[t],yn(n);var o=(0,i.Z)((0,i.Z)({},e),{},{selectedKeys:n});r?null===Q||void 0===Q||Q(o):null===J||void 0===J||J(o)}!U&&Fe.length&&"inline"!==Oe&&qe(Me)}(e)})),Zn=q((function(e,n){var t=Fe.filter((function(n){return n!==e}));if(n)t.push(e);else if("inline"!==Oe){var r=on(e);t=t.filter((function(e){return!r.has(e)}))}v()(Fe,t)||qe(t)})),gn=q(de),Cn=be(Oe,sn,Ie,Ne,xe,rn,tn,fn,(function(e,n){var t=null!==n&&void 0!==n?n:!Fe.includes(e);Zn(e,t)}),me);c.useEffect((function(){we(!0)}),[]);var En="horizontal"!==Oe||N?ye:ye.map((function(e,n){return c.createElement(M,{key:e.key,overflowDisabled:n>Le},e)})),Kn=c.createElement(h.Z,(0,r.Z)({id:E,ref:xe,prefixCls:"".concat(d,"-overflow"),component:"ul",itemComponent:V,className:f()(d,"".concat(d,"-root"),"".concat(d,"-").concat(Oe),y,(t={},(0,o.Z)(t,"".concat(d,"-inline-collapsed"),Ae),(0,o.Z)(t,"".concat(d,"-rtl"),Ie),t)),dir:C,style:m,role:"menu",tabIndex:Z,data:En,renderRawItem:function(e){return e},renderRawRest:function(e){var n=e.length,t=n?ye.slice(-n):null;return c.createElement(ie,{eventKey:Ke,title:se,disabled:_e,internalPopupClose:0===n,popupClassName:fe},t)},maxCount:"horizontal"!==Oe||N?h.Z.INVALIDATE:h.Z.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(e){ze(e)},onKeyDown:Cn},he));return c.createElement(T.Provider,{value:Ne},c.createElement(M,{prefixCls:d,mode:Oe,openKeys:Fe,rtl:Ie,disabled:x,motion:ke?ne:null,defaultMotions:ke?te:null,activeKey:sn,onActive:dn,onInactive:vn,selectedKeys:hn,inlineIndent:ee,subMenuOpenDelay:R,subMenuCloseDelay:A,forceSubMenuRender:L,builtinPlacements:le,triggerSubMenuAction:oe,getPopupContainer:gn,itemIcon:ue,expandIcon:ae,onItemClick:bn,onOpenChange:Zn},c.createElement(D.Provider,{value:un},Kn),c.createElement("div",{style:{display:"none"},"aria-hidden":!0},c.createElement(S.Provider,{value:ln},ye))))};Ie.Item=V,Ie.SubMenu=ie,Ie.ItemGroup=we,Ie.Divider=xe;var Se=Ie},96774:function(e){e.exports=function(e,n,t,r){var o=t?t.call(r,e,n):void 0;if(void 0!==o)return!!o;if(e===n)return!0;if("object"!==typeof e||!e||"object"!==typeof n||!n)return!1;var i=Object.keys(e),l=Object.keys(n);if(i.length!==l.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),a=0;a<i.length;a++){var c=i[a];if(!u(c))return!1;var s=e[c],f=n[c];if(!1===(o=t?t.call(r,s,f,c):void 0)||void 0===o&&s!==f)return!1}return!0}}}]);