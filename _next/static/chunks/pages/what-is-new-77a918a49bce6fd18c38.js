(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[228],{27077:function(e,n,r){"use strict";r.d(n,{e:function(){return s}});r(67294);var t=r(94184),i=r.n(t),a=r(85893),s=function(e){var n=e.className,r=e.children,t=i()("a4-layer",n);return(0,a.jsx)("div",{className:"a4-layer_base",children:(0,a.jsx)("div",{className:t,children:r})})}},61101:function(e,n,r){"use strict";r.d(n,{mJ:function(){return c},Bk:function(){return l},w4:function(){return f},mh:function(){return v}});r(67294);var t=r(94184),i=r.n(t),a=r(77348),s=r(52766),o=r(85893),c=function(e){var n=e.children;return(0,o.jsx)("div",{className:"slide-layer__driver",children:(0,o.jsx)("div",{className:"slide-layer__fixed-driver",children:n})})},l=function(e){var n=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"slide-layer__first-empty"}),(0,o.jsx)("div",{className:"slide-layer__content",children:n}),(0,o.jsx)("div",{className:"slide-layer__last-empty"})]})},u=function(e){var n=e.children;return(0,o.jsx)("div",{className:"slide-layer__content_fill-layer",children:n})},d=function(e){var n=e.children;return(0,o.jsx)("div",{className:"slide-layer__content_centred-layer",children:n})},f=(0,s.Pi)((function(e){var n=e.className,r=e.children,t=(0,a.ex)(),s=i()("layer","slide-layer",n);return(0,o.jsx)("div",{className:s,toggle:t.appDriverToggle.isToggle.toString(),children:r})})),v=function(e){var n=e.className,r=e.children,t=i()("layer",n);return(0,o.jsx)("div",{className:t,children:(0,o.jsx)(u,{children:(0,o.jsx)(d,{children:r})})})}},37917:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return j},default:function(){return y}});r(67294);var t=r(41664),i=r(76895),a=r(37636),s=r(61101),o=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return 1===n.length?n[0]:n.reduce((function(e,n){return function(){return n(e.apply(void 0,arguments))}}))},c=r(15671),l=r(4942),u=r(93433);function d(e){var n={"\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0451":"e","\u0436":"j","\u0437":"z","\u0438":"i","\u043a":"k","\u043b":"l","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"shch","\u044b":"y","\u044d":"e","\u044e":"u","\u044f":"ya"},r=[];e=e.replace(/[\u044a\u044c]+/g,"").replace(/\u0439/g,"i");for(var t=0;t<e.length;++t)r.push(n[e[t]]||void 0==n[e[t].toLowerCase()]&&e[t]||n[e[t].toLowerCase()].replace(/^(.)/,(function(e){return e.toUpperCase()})));return r.join("")}var f=o((function(e){return e.replace(/(\s+(?=(?:,)))/g,"").replace(/,\s+/g,",").replace(/,(?=,+)/g,"")}),(function(e){return e.replace(/(.*?)\s{2,}(-)/g,"$1 $2").replace(/(-)\s{2,}(.*?)/g,"$1 $2")}),(function(e){return e.replace(/\s{2,}/g," ")}),(function(e){return e.replace(/([\[\(<])\s*(.*?)\s([\]\)>])/g,"$1$2$3")}));o(d,(function(e){return e.trim().toLowerCase()})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1}();var v=function e(n){var r=this;(0,c.Z)(this,e),this.matrix=n,(0,l.Z)(this,"generate",(function(e){return r.matrix[e]++,r.matrix.join(".")})),(0,l.Z)(this,"toMatrix",(function(){return(0,u.Z)(r.matrix)}))};(0,l.Z)(v,"create",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return new v(new Array(e).fill(0))})),(0,l.Z)(v,"createWithMatrix",(function(e){return new v(e)}));var h=o(d,f,(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return e.replace(/\s/g,n)}));o(h);var p=r(78338),m=r(46354),_=r(27077),g=r(85893),j=!0,y=function(e){var n=e.innovationAll,r=(e.children,n.map((function(e){var n=new m.r(e.version.toString());return(0,g.jsxs)(a.Z.Item,{dot:(0,g.jsx)(p.Z,{className:"timeline-clock-icon"}),children:[(0,g.jsx)(t.default,{href:"/what-is-new/".concat(n.mmp),children:(0,g.jsxs)("a",{className:"innovation__link_main",children:[(0,g.jsx)("span",{className:"innovation__link__label_last-version",children:e.version}),(0,g.jsx)("span",{className:"innovation__link__label_date_release",children:e.dateRelease})]})}),(0,g.jsx)(i.ZP,{size:"small",split:!1,dataSource:e.innovations,renderItem:function(e,r){return function(e,n,r){var a;return(0,g.jsx)(i.ZP.Item,{children:(0,g.jsx)(t.default,{href:(a=h(e.innovationName),"/what-is-new/".concat(n).concat(a.length?"#".concat(a):"")),children:e.innovationName})},"".concat(n,"_").concat(r))}(e,n.mmp,r)}})]},e.version.toString())})));return(0,g.jsx)(s.mh,{children:(0,g.jsxs)(_.e,{className:"toc__layer",children:[(0,g.jsx)("div",{className:"toc__header",children:(0,g.jsx)("h1",{className:"toc__title",children:"\u0427\u0442\u043e \u043d\u043e\u0432\u043e\u0433\u043e?"})}),(0,g.jsx)(a.Z,{children:r})]})})}},46354:function(e,n,r){"use strict";r.d(n,{r:function(){return c}});var t=r(29439),i=r(15671),a=r(43144),s=r(4942);function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}var c=function(){function e(n){(0,i.Z)(this,e),(0,s.Z)(this,"versionInfo",void 0),this.versionInfo=e.parse(n)}return(0,a.Z)(e,[{key:"version",get:function(){return this.versionInfo.version}},{key:"major",get:function(){return this.versionInfo.major}},{key:"minor",get:function(){return this.versionInfo.minor}},{key:"patch",get:function(){return this.versionInfo.patch}},{key:"mmp",get:function(){return this.versionInfo.mmp}},{key:"preReleaseName",get:function(){return this.versionInfo.preReleaseName}},{key:"preReleaseVersion",get:function(){return this.versionInfo.preReleaseVersion}},{key:"updateVersion",get:function(){return this.versionInfo.updateVersion}},{key:"toInfo",value:function(){return function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){(0,s.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},this.versionInfo)}}],[{key:"parse",value:function(e){var n=/([\w|.]*)(?:-?)?(.*)/gi.exec(e)||[],r=(0,t.Z)(n,3),i=r[1],a=void 0===i?"":i,s=r[2],o=void 0===s?"":s,c=a.split("."),l=(0,t.Z)(c,3),u=l[0],d=l[1],f=void 0===d?"":d,v=l[2],h=void 0===v?"":v,p=o.split("_").filter(Boolean),m=(0,t.Z)(p,2),_=m[0],g=void 0===_?"":_,j=m[1],y=void 0===j?"":j;g=g.length?g.substring(1):g;var x=/([^\d]+)(\d+)?/gi.exec(g)||[void 0,"release",""],N=(0,t.Z)(x,3),w=N[1],b=void 0===w?"":w,k=N[2];return{major:u,minor:f,patch:h,mmp:a,preReleaseName:b,preReleaseVersion:void 0===k?"":k,updateVersion:y,version:e}}}]),e}()},70259:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/what-is-new",function(){return r(37917)}])}},function(e){e.O(0,[452,950,460,815,523,774,888,179],(function(){return n=70259,e(e.s=n);var n}));var n=e.O();_N_E=n}]);