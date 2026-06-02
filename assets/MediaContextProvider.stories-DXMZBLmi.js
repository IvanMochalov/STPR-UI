import{r as u,g as Q,j as v}from"./iframe-DFzgFXfL.js";import{P as n}from"./index-CHomF7-x.js";import"./preload-helper-DCNYn41m.js";const N=u.createContext({device:{isDesktop:!1,isMobile:!1,isTablet:!1}});var C={},j;function H(){if(j)return C;j=1,C.match=o,C.parse=c;var e=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,t=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,r=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function o(h,a){return c(h).some(function(d){var f=d.inverse,k=d.type==="all"||a.type===d.type;if(k&&f||!(k||f))return!1;var g=d.expressions.every(function(y){var W=y.feature,w=y.modifier,m=y.value,b=a[W];if(!b)return!1;switch(W){case"orientation":case"scan":return b.toLowerCase()===m.toLowerCase();case"width":case"height":case"device-width":case"device-height":m=_(m),b=_(b);break;case"resolution":m=p(m),b=p(b);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":m=M(m),b=M(b);break;case"grid":case"color":case"color-index":case"monochrome":m=parseInt(m,10)||1,b=parseInt(b,10)||0;break}switch(w){case"min":return b>=m;case"max":return b<=m;default:return b===m}});return g&&!f||!g&&f})}function c(h){return h.split(",").map(function(a){a=a.trim();var d=a.match(e),f=d[1],k=d[2],g=d[3]||"",y={};return y.inverse=!!f&&f.toLowerCase()==="not",y.type=k?k.toLowerCase():"all",g=g.match(/\([^\)]+\)/g)||[],y.expressions=g.map(function(W){var w=W.match(t),m=w[1].toLowerCase().match(r);return{modifier:m[1],feature:m[2],value:w[2]}}),y})}function M(h){var a=Number(h),d;return a||(d=h.match(/^(\d+)\s*\/\s*(\d+)$/),a=d[1]/d[2]),a}function p(h){var a=parseFloat(h),d=String(h).match(s)[1];switch(d){case"dpcm":return a/2.54;case"dppx":return a*96;default:return a}}function _(h){var a=parseFloat(h),d=String(h).match(i)[1];switch(d){case"em":return a*16;case"rem":return a*16;case"cm":return a*96/2.54;case"mm":return a*96/2.54/10;case"in":return a*96;case"pt":return a*72;case"pc":return a*72/12;default:return a}}return C}var E,T;function U(){if(T)return E;T=1;var e=H().match,t=typeof window<"u"?window.matchMedia:null;function r(s,o,c){var M=this,p;t&&!c&&(p=t.call(window,s)),p?(this.matches=p.matches,this.media=p.media,p.addListener(a)):(this.matches=e(s,o),this.media=s),this.addListener=_,this.removeListener=h,this.dispose=d;function _(f){p&&p.addListener(f)}function h(f){p&&p.removeListener(f)}function a(f){M.matches=f.matches,M.media=f.media}function d(){p&&p.removeListener(a)}}function i(s,o,c){return new r(s,o,c)}return E=i,E}var A=U();const F=Q(A);var K=/[A-Z]/g,V=/^ms-/,R={};function G(e){return"-"+e.toLowerCase()}function O(e){if(R.hasOwnProperty(e))return R[e];var t=e.replace(K,G);return R[e]=V.test(t)?"-"+t:t}function X(e,t){if(e===t)return!0;if(!e||!t)return!1;const r=Object.keys(e),i=Object.keys(t),s=r.length;if(i.length!==s)return!1;for(let o=0;o<s;o++){const c=r[o];if(e[c]!==t[c]||!Object.prototype.hasOwnProperty.call(t,c))return!1}return!0}const l=n.oneOfType([n.string,n.number]),P={all:n.bool,grid:n.bool,aural:n.bool,braille:n.bool,handheld:n.bool,print:n.bool,projection:n.bool,screen:n.bool,tty:n.bool,tv:n.bool,embossed:n.bool},Y={orientation:n.oneOf(["portrait","landscape"]),scan:n.oneOf(["progressive","interlace"]),aspectRatio:n.string,deviceAspectRatio:n.string,height:l,deviceHeight:l,width:l,deviceWidth:l,color:n.bool,colorIndex:n.bool,monochrome:n.bool,resolution:l,type:Object.keys(P)},{type:ge,...Z}=Y,z={minAspectRatio:n.string,maxAspectRatio:n.string,minDeviceAspectRatio:n.string,maxDeviceAspectRatio:n.string,minHeight:l,maxHeight:l,minDeviceHeight:l,maxDeviceHeight:l,minWidth:l,maxWidth:l,minDeviceWidth:l,maxDeviceWidth:l,minColor:n.number,maxColor:n.number,minColorIndex:n.number,maxColorIndex:n.number,minMonochrome:n.number,maxMonochrome:n.number,minResolution:l,maxResolution:l,...Z},J={...P,...z};var B={all:J};const ee=e=>`not ${e}`,te=(e,t)=>{const r=O(e);return typeof t=="number"&&(t=`${t}px`),t===!0?r:t===!1?ee(r):`(${r}: ${t})`},re=e=>e.join(" and "),ne=e=>{const t=[];return Object.keys(B.all).forEach(r=>{const i=e[r];i!=null&&t.push(te(r,i))}),re(t)},ie=u.createContext(void 0),ae=e=>e.query||ne(e),L=e=>e?Object.keys(e).reduce((r,i)=>(r[O(i)]=e[i],r),{}):void 0,I=()=>{const e=u.useRef(!1);return u.useEffect(()=>{e.current=!0},[]),e.current},se=e=>{const t=u.useContext(ie),r=()=>L(e)||L(t),[i,s]=u.useState(r);return u.useEffect(()=>{const o=r();X(i,o)||s(o)},[e,t]),i},oe=e=>{const t=()=>ae(e),[r,i]=u.useState(t);return u.useEffect(()=>{const s=t();r!==s&&i(s)},[e]),r},ce=(e,t)=>{const r=()=>F(e,t||{},!!t),[i,s]=u.useState(r),o=I();return u.useEffect(()=>{if(o){const c=r();return s(c),()=>{c&&c.dispose()}}},[e,t]),i},de=e=>{const[t,r]=u.useState(e.matches);return u.useEffect(()=>{const i=s=>{r(s.matches)};return e.addListener(i),r(e.matches),()=>{e.removeListener(i)}},[e]),t},D=(e,t,r)=>{const i=se(t),s=oe(e);if(!s)throw new Error("Invalid or missing MediaQuery!");const o=ce(s,i),c=de(o);return I(),u.useEffect(()=>{},[c]),u.useEffect(()=>()=>{o&&o.dispose()},[]),c},ue=e=>{const{desktop:t,tablet:r,mobile:i}=e,s=D(t),o=D(r),c=D(i);return{device:{isDesktop:s,isTablet:o,isMobile:c}}},$=e=>{const{breakpoints:t={desktop:{minWidth:1440},tablet:{minWidth:768,maxWidth:1439},mobile:{maxWidth:767}},children:r}=e,{device:i}=ue(t);return v.jsx(N.Provider,{value:{device:i},children:r})};$.__docgenInfo={description:"",methods:[],displayName:"MediaContextProvider",props:{breakpoints:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  desktop: {\r
    minWidth: number;\r
  };\r
  tablet: {\r
    minWidth: number;\r
    maxWidth: number;\r
  };\r
  mobile: {\r
    maxWidth: number;\r
  };\r
}`,signature:{properties:[{key:"desktop",value:{name:"signature",type:"object",raw:`{\r
  minWidth: number;\r
}`,signature:{properties:[{key:"minWidth",value:{name:"number",required:!0}}]},required:!0}},{key:"tablet",value:{name:"signature",type:"object",raw:`{\r
  minWidth: number;\r
  maxWidth: number;\r
}`,signature:{properties:[{key:"minWidth",value:{name:"number",required:!0}},{key:"maxWidth",value:{name:"number",required:!0}}]},required:!0}},{key:"mobile",value:{name:"signature",type:"object",raw:`{\r
  maxWidth: number;\r
}`,signature:{properties:[{key:"maxWidth",value:{name:"number",required:!0}}]},required:!0}}]}},description:""}}};const me="_root_qp6gg_1",le="_deviceRow_qp6gg_8",pe="_indicator_qp6gg_14",he="_indicator_activeDesktop_qp6gg_20",fe="_indicator_activeTablet_qp6gg_23",be="_indicator_activeMobile_qp6gg_26",x={root:me,deviceRow:le,indicator:pe,indicator_activeDesktop:he,indicator_activeTablet:fe,indicator_activeMobile:be},S=()=>{const{device:e}=u.useContext(N);return v.jsxs("div",{className:x.root,children:[v.jsxs("div",{className:x.deviceRow,children:[v.jsx("div",{className:`${x.indicator} ${e.isDesktop?x.indicator_activeDesktop:""}`}),v.jsx("span",{children:"Desktop"})]}),v.jsxs("div",{className:x.deviceRow,children:[v.jsx("div",{className:`${x.indicator} ${e.isTablet?x.indicator_activeTablet:""}`}),v.jsx("span",{children:"Tablet"})]}),v.jsxs("div",{className:x.deviceRow,children:[v.jsx("div",{className:`${x.indicator} ${e.isMobile?x.indicator_activeMobile:""}`}),v.jsx("span",{children:"Mobile"})]})]})};S.__docgenInfo={description:"",methods:[],displayName:"MediaContent"};const Me={title:"Providers/MediaContextProvider",component:$,tags:["autodocs"],parameters:{docs:{description:{component:`
\`MediaContextProvider\` - это провайдер контекста для отслеживания текущего разрешения экрана.
### Особенности:
- Автоматически определяет тип устройства (desktop/tablet/mobile) на основе переданных breakpoints
- Предоставляет контекст с текущим состоянием устройства
- Должен оборачивать корневой компонент приложения (или ту часть, где нужен доступ к данным об устройстве)

### Рекомендации по использованию:
1. Оберните корневой компонент приложения, передав в параметр breakpoints объект типа \`TBreakpoints\` с нужными значениями точек перехода:

\`\`\`jsx
<MediaContextProvider breakpoints={{
  desktop: { minWidth: 1440 },
  tablet: { minWidth: 768, maxWidth: 1439 },
  mobile: { maxWidth: 767 }
}}>
    <App />
</MediaContextProvider>
\`\`\`
2. Получайте данные об устройстве в компонентах, импортировав \`MediaContext\` из "test-stpr-ui-kit"

\`\`\`jsx
const { device:
    {
        isDesktop,
        isTablet,
        isMobile
    }
} = useContext(MediaContext);
\`\`\`
`}}},argTypes:{children:{control:!1,description:"Дочерние компоненты, которые будут иметь доступ к медиа-контексту",table:{type:{summary:"ReactNode"}}},breakpoints:{description:"Объект с настройками breakpoints для разных устройств",table:{type:{summary:"TBreakpoints",detail:`{
  desktop: { minWidth: number },
  tablet: { minWidth: number, maxWidth: number },
  mobile: { maxWidth: number }
}`},defaultValue:{summary:`{
  desktop: { minWidth: 1440 },
  tablet: { minWidth: 768, maxWidth: 1439 },
  mobile: { maxWidth: 767 }
}`}}}}},q={name:"Default presentation",args:{breakpoints:{desktop:{minWidth:1440},tablet:{minWidth:768,maxWidth:1439},mobile:{maxWidth:767}},children:v.jsx(S,{})}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Default presentation",
  args: {
    breakpoints: {
      desktop: {
        minWidth: 1440
      },
      tablet: {
        minWidth: 768,
        maxWidth: 1439
      },
      mobile: {
        maxWidth: 767
      }
    },
    children: <MediaContent />
  }
}`,...q.parameters?.docs?.source}}};const ke=["Default"];export{q as Default,ke as __namedExportsOrder,Me as default};
