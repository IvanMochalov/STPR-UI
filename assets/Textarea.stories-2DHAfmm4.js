import{r as m,R as V,j as n}from"./iframe-DFzgFXfL.js";import{F as B}from"./Form-WfnlPbHH.js";import{T as C}from"./Text-Cmw29Q9M.js";import{c as F}from"./clsx-B-dksMZM.js";import{L as Te}from"./Label-5pjt2kXZ.js";import"./preload-helper-DCNYn41m.js";import"./Tooltip-CAn8cC1X.js";import"./BaseTooltip-70cfOlMv.js";import"./Icon-FLtHPxG2.js";import"./Potral-BSVlFBsR.js";import"./index-DP6wETD2.js";import"./index-sQF5gpHW.js";function k(){return k=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)({}).hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r},k.apply(null,arguments)}function ge(r,e){if(r==null)return{};var a={};for(var t in r)if({}.hasOwnProperty.call(r,t)){if(e.indexOf(t)!==-1)continue;a[t]=r[t]}return a}var ye=m.useLayoutEffect,_e=function(e){var a=V.useRef(e);return ye(function(){a.current=e}),a},ie=function(e,a){if(typeof e=="function"){e(a);return}e.current=a},be=function(e,a){var t=V.useRef();return V.useCallback(function(i){e.current=i,t.current&&ie(t.current,null),t.current=a,a&&ie(a,i)},[a])},oe={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0",display:"block"},ze=function(e){Object.keys(oe).forEach(function(a){e.style.setProperty(a,oe[a],"important")})},se=ze,c=null,le=function(e,a){var t=e.scrollHeight;return a.sizingStyle.boxSizing==="border-box"?t+a.borderSize:t-a.paddingSize};function we(r,e,a,t){a===void 0&&(a=1),t===void 0&&(t=1/0),c||(c=document.createElement("textarea"),c.setAttribute("tabindex","-1"),c.setAttribute("aria-hidden","true"),se(c)),c.parentNode===null&&document.body.appendChild(c);var i=r.paddingSize,l=r.borderSize,o=r.sizingStyle,u=o.boxSizing;Object.keys(o).forEach(function(T){var z=T;c.style[z]=o[z]}),se(c),c.value=e;var p=le(c,r);c.value=e,p=le(c,r),c.value="x";var f=c.scrollHeight-i,g=f*a;u==="border-box"&&(g=g+i+l),p=Math.max(g,p);var v=f*t;return u==="border-box"&&(v=v+i+l),p=Math.min(v,p),[p,f]}var de=function(){},Se=function(e,a){return e.reduce(function(t,i){return t[i]=a[i],t},{})},Ce=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak","wordSpacing","scrollbarGutter"],Re=!!document.documentElement.currentStyle,Le=function(e){var a=window.getComputedStyle(e);if(a===null)return null;var t=Se(Ce,a),i=t.boxSizing;if(i==="")return null;Re&&i==="border-box"&&(t.width=parseFloat(t.width)+parseFloat(t.borderRightWidth)+parseFloat(t.borderLeftWidth)+parseFloat(t.paddingRight)+parseFloat(t.paddingLeft)+"px");var l=parseFloat(t.paddingBottom)+parseFloat(t.paddingTop),o=parseFloat(t.borderBottomWidth)+parseFloat(t.borderTopWidth);return{sizingStyle:t,paddingSize:l,borderSize:o}},He=Le;function $(r,e,a){var t=_e(a);m.useLayoutEffect(function(){var i=function(o){return t.current(o)};if(r)return r.addEventListener(e,i),function(){return r.removeEventListener(e,i)}},[])}var Ne=function(e,a){$(document.body,"reset",function(t){e.current.form===t.target&&a(t)})},Fe=function(e){$(window,"resize",e)},De=function(e){$(document.fonts,"loadingdone",e)},Ee=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],je=function(e,a){var t=e.cacheMeasurements,i=e.maxRows,l=e.minRows,o=e.onChange,u=o===void 0?de:o,p=e.onHeightChange,f=p===void 0?de:p,g=ge(e,Ee),v=g.value!==void 0,T=m.useRef(null),z=be(T,a),R=m.useRef(0),L=m.useRef(),y=function(){var x=T.current,S=t&&L.current?L.current:He(x);if(S){L.current=S;var N=we(S,x.value||x.placeholder||"x",l,i),_=N[0],D=N[1];R.current!==_&&(R.current=_,x.style.setProperty("height",_+"px","important"),f(_,{rowHeight:D}))}},H=function(x){v||y(),u(x)};return m.useLayoutEffect(y),Ne(T,function(){if(!v){var w=T.current.value;requestAnimationFrame(function(){var x=T.current;x&&w!==x.value&&y()})}}),Fe(y),De(y),m.createElement("textarea",k({},g,{onChange:H,ref:z}))},qe=m.forwardRef(je);const Ie="_spTextarea_ysm0w_1",We="_spTextarea_fluidHeight_ysm0w_18",Ae="_spTextarea__container_ysm0w_22",Pe="_spTextarea__control_ysm0w_22",Me="_spTextarea_absolutePositionError_ysm0w_25",Oe="_spTextarea_error_ysm0w_28",Ve="_spTextarea__control_filled_ysm0w_68",ke="_spTextarea__control_outlined_ysm0w_72",Be="_spTextarea__control_resize_none_ysm0w_76",$e="_spTextarea__control_resize_both_ysm0w_79",Ge="_spTextarea__control_resize_horizontal_ysm0w_82",Ye="_spTextarea__control_resize_vertical_ysm0w_85",Ue="_spTextarea__control_disabled_ysm0w_88",Xe="_spTextarea__error_ysm0w_110",Ze="_spTextarea__error_absolutePosition_ysm0w_117",h={spTextarea:Ie,spTextarea_fluidHeight:We,spTextarea__container:Ae,spTextarea__control:Pe,spTextarea_absolutePositionError:Me,spTextarea_error:Oe,spTextarea__control_filled:Ve,spTextarea__control_outlined:ke,spTextarea__control_resize_none:Be,spTextarea__control_resize_both:$e,spTextarea__control_resize_horizontal:Ge,spTextarea__control_resize_vertical:Ye,spTextarea__control_disabled:Ue,spTextarea__error:Xe,spTextarea__error_absolutePosition:Ze},d=V.forwardRef((r,e)=>{const{value:a,onChange:t,label:i,variant:l="outlined",disabled:o=!1,autoSize:u=!0,isAbsolutePositionError:p=!1,error:f,required:g,name:v,onMouseEnter:T,tooltipPosition:z,isVisibleDefaultTitle:R=!0,infoTooltipText:L,placeholder:y="Введите...",fluidHeight:H,rows:w=1,maxRows:x,cols:S=20,maxLength:N,minLength:_,readOnly:D=!1,autoFocus:G=!1,autoComplete:Y="off",spellCheck:U=!0,wrap:X="soft",resize:Z="both",onBlur:J,onFocus:K,classNameRoot:Q,classNameError:ee,classNameLabel:te,classNameBaseTooltipRoot:ue}=r,ce=F({[h.spTextarea]:!0,[h.spTextarea_fluidHeight]:H,[h.spTextarea_error]:!!f,[h.spTextarea_absolutePositionError]:p,...Q&&{[Q]:!0}}),me=F({[h.spTextarea__container]:!0}),ae=F({[h.spTextarea__control]:!0,[h[`spTextarea__control_${l}`]]:l,[h.spTextarea__control_disabled]:o,[h.spTextarea__control_fluidHeight]:H,[h[`spTextarea__control_resize_${Z}`]]:Z}),pe=F({...te&&{[te]:!0}}),he=F({[h.spTextarea__error]:!0,[h.spTextarea__error_absolutePosition]:p,...ee&&{[ee]:!0}}),re=ne=>{const{value:fe,name:ve}=ne.target;t(ne,{value:fe,name:ve})},xe=()=>u&&!H?n.jsx(qe,{placeholder:y,disabled:o,readOnly:D,autoFocus:G,rows:w,cols:S,maxLength:N,minLength:_,autoComplete:Y,spellCheck:U,wrap:X,onChange:re,onBlur:J,onFocus:K,title:R?a:void 0,value:a,name:v,className:ae,ref:e,maxRows:x}):n.jsx("textarea",{placeholder:y,disabled:o,readOnly:D,autoFocus:G,rows:w,cols:S,maxLength:N,minLength:_,autoComplete:Y,spellCheck:U,wrap:X,onChange:re,onBlur:J,onFocus:K,title:R?a:void 0,value:a,name:v,className:ae,ref:e});return n.jsxs("div",{className:ce,children:[i&&n.jsx(Te,{classNameRoot:pe,tooltipPosition:z,required:g,label:i,infoTooltipText:L,classNameBaseTooltipRoot:ue}),n.jsx("div",{onMouseEnter:T,className:me,children:xe()}),f&&n.jsx("div",{className:he,children:f})]})});d.displayName="Textarea";d.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{name:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"outlined" | "filled"',elements:[{name:"literal",value:'"outlined"'},{name:"literal",value:'"filled"'}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(\r
  event: React.ChangeEvent<HTMLTextAreaElement>,\r
  data: {\r
    name: string;\r
    value: string | null;\r
  },\r
) => void`,signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"},{type:{name:"signature",type:"object",raw:`{\r
  name: string;\r
  value: string | null;\r
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},isAbsolutePositionError:{required:!1,tsType:{name:"boolean"},description:""},onMouseEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},infoTooltipText:{required:!1,tsType:{name:"string"},description:""},tooltipPosition:{required:!1,tsType:{name:"ETooltipPosition"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},autoSize:{required:!1,tsType:{name:"boolean"},description:""},isVisibleDefaultTitle:{required:!1,tsType:{name:"boolean"},description:""},fluidHeight:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},classNameError:{required:!1,tsType:{name:"string"},description:""},classNameLabel:{required:!1,tsType:{name:"string"},description:""},classNameRoot:{required:!1,tsType:{name:"string"},description:""},classNameBaseTooltipRoot:{required:!1,tsType:{name:"string"},description:""},ref:{required:!1,tsType:{name:"ForwardedRef",elements:[{name:"HTMLTextAreaElement"}],raw:"ForwardedRef<HTMLTextAreaElement>"},description:""},resize:{required:!1,tsType:{name:"union",raw:'"none" | "both" | "horizontal" | "vertical"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"both"'},{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""},rows:{required:!1,tsType:{name:"number"},description:""},maxRows:{required:!1,tsType:{name:"number"},description:""},cols:{required:!1,tsType:{name:"number"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:""},autoComplete:{required:!1,tsType:{name:"string"},description:""},spellCheck:{required:!1,tsType:{name:"boolean"},description:""},wrap:{required:!1,tsType:{name:"union",raw:'"hard" | "soft" | "off"',elements:[{name:"literal",value:'"hard"'},{name:"literal",value:'"soft"'},{name:"literal",value:'"off"'}]},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const Je="_storiesWrapper_b1rwk_1",Ke="_viewTextareaList_b1rwk_8",Qe="_viewTextareaListItem_b1rwk_14",et="_viewTextareaListItem__description_b1rwk_19",tt="_fluidHeightWrapper_b1rwk_24",at="_fluidHeightDemoContainer_b1rwk_30",s={storiesWrapper:Je,viewTextareaList:Ke,viewTextareaListItem:Qe,viewTextareaListItem__description:et,fluidHeightWrapper:tt,fluidHeightDemoContainer:at},xt={title:"Components/Textarea",component:d,tags:["autodocs"],argTypes:{onChange:{description:`Callback-функция, вызываемая при изменении значения текстового поля.
Получает два параметра:
- event: стандартное React событие ChangeEvent&lt;HTMLTextAreaElement&gt;
- data: объект с именем поля и новым значением

Особенности:
- Значение всегда передается как \`string\`
- При очистке поля передается пустая строка
- Для работы с формами рекомендуется использовать вместе с состоянием React
`,control:!1,table:{type:{detail:`(event: React.ChangeEvent&lt;HTMLTextAreaElement&gt;,
data: {
  name: string;
  value: string | null;
}) => void`,summary:"TOnChangeTextarea"}}},variant:{description:`Вариант стиля текстового поля:
- "outlined" - с границей (по умолчанию)
- "filled" - с заполненным фоном
`,control:{type:"select"},options:["outlined","filled"],table:{type:{summary:"TTextareaVariant",detail:"'outlined' | 'filled'"},defaultValue:{summary:'"outlined"'}}},resize:{description:`Поведение изменения размера текстового поля:
- "none" - запретить изменение размера
- "both" - разрешить изменение по горизонтали и вертикали
- "horizontal" - разрешить только горизонтальное изменение
- "vertical" - разрешить только вертикальное изменение
`,control:{type:"select"},options:["none","both","horizontal","vertical"],table:{type:{summary:"TTextareaResize",detail:"'none' | 'both' | 'horizontal' | 'vertical'"},defaultValue:{summary:'"both"'}}},wrap:{description:`Поведение переноса текста:
- "hard" - перенос на новую строку с добавлением символов перевода
- "soft" - перенос только для отображения (по умолчанию)
- "off" - отключить перенос текста
`,control:{type:"select"},options:["hard","soft","off"],table:{type:{summary:"TTextareaWrap",detail:"'hard' | 'soft' | 'off'"},defaultValue:{summary:'"soft"'}}},autoSize:{description:`Автоматически подстраивать высоту поля под содержимое. Использует react-textarea-autosize.
      
**Взаимосвязь с fluidHeight:**
- При \`fluidHeight={true}\` автоматический размер отключается
- При \`fluidHeight={false}\` работает обычное автоизменение размера
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},disabled:{description:`Отключить текстовое поле. Заблокирует взаимодействие и изменит визуальный стиль.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isAbsolutePositionError:{description:`Позиционировать текст ошибки абсолютно. Полезно для компактных форм.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isVisibleDefaultTitle:{description:`Показывать стандартный title при наведении на поле с текстом значения.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},fluidHeight:{description:`Растянуть поле на всю доступную высоту контейнера. Полезно для больших текстовых областей.

**Взаимосвязь с autoSize:**
- При \`fluidHeight={true}\` автоматический размер (\`autoSize\`) отключается
- Поле занимает всю доступную высоту родительского контейнера
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{description:`Пометить поле как обязательное для заполнения. Добавляет звездочку к лейблу.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{description:`Сделать поле доступным только для чтения. Отличается от disabled более мягким визуальным стилем.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},autoFocus:{description:`Автоматически установить фокус на поле при монтировании компонента.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},spellCheck:{description:`Включить проверку орфографии в браузере.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},tooltipPosition:{description:`Позиция тултипа для подсказки лейбла.
`,control:{type:"select"},options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom"],table:{type:{summary:"ETooltipPosition"},defaultValue:{summary:'"bottom-left"'}}},label:{description:`Текст лейбла поля. Отображается над текстовым полем.
`,control:{type:"text"},table:{type:{summary:"string"}}},infoTooltipText:{description:`Текст подсказки для лейбла. Показывает иконку информации с тултипом.
`,control:{type:"text"},table:{type:{summary:"string"}}},error:{description:`Текст ошибки валидации. Подсвечивает поле красным и показывает сообщение об ошибке.
`,control:{type:"text"},table:{type:{summary:"string"}}},placeholder:{description:`Текст-подсказка внутри поля когда значение отсутствует.
`,control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:'"Введите..."'}}},rows:{description:`Начальное количество видимых строк текста. Минимальная высота поля.
`,control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:"1"}}},maxRows:{description:`Максимальное количество видимых строк при включенном autoSize. Ограничивает максимальную высоту.
`,control:{type:"number"},table:{type:{summary:"number"}}},cols:{description:`Ширина поля в символах. Рекомендуется использовать CSS для контроля ширины.
`,control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:"20"}}},maxLength:{description:`Максимальное количество символов, которое можно ввести в поле.
`,control:{type:"number"},table:{type:{summary:"number"}}},minLength:{description:`Минимальное количество символов, которое должно быть введено в поле.
`,control:{type:"number"},table:{type:{summary:"number"}}},autoComplete:{description:`Управление автозаполнением браузера. Может принимать значения "on", "off" или конкретные типы полей.
`,control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"off"}}},value:{description:`Значение текстового поля. Контролируемое свойство.
`,control:!1,table:{type:{summary:"string"}}},name:{description:`Имя поля для формы. Обязательный параметр.
`,control:!1,table:{type:{summary:"string"}}},onBlur:{description:`Callback-функция, вызываемая при потере фокуса полем.
`,control:!1,table:{type:{summary:"(event: React.FocusEvent<HTMLTextAreaElement>) => void"}}},onFocus:{description:`Callback-функция, вызываемая при получении фокуса полем.
`,control:!1,table:{type:{summary:"(event: React.FocusEvent<HTMLTextAreaElement>) => void"}}},classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента текстового поля
`,control:!1,table:{type:{summary:"string"}}},classNameLabel:{description:`Дополнительный CSS-класс для элемента лейбла
`,control:!1,table:{type:{summary:"string"}}},classNameError:{description:`Дополнительный CSS-класс для элемента ошибки
`,control:!1,table:{type:{summary:"string"}}},classNameBaseTooltipRoot:{description:`Дополнительный CSS-класс для корневого элемента тултипа лейбла
`,control:!1,table:{type:{summary:"string"}}},ref:{control:!1}},parameters:{docs:{description:{component:`
Компонент многострочного текстового поля с поддержкой автоматического изменения размера, валидации и различных состояний.

## Особенности:
- **Автоматический размер**: автоматическая подстройка высоты под содержимое (через \`react-textarea-autosize\`)
- **Fluid Height режим**: растягивание на всю высоту контейнера (отключает autoSize)
- **Два варианта стиля**: outlined (с границей) и filled (с заполненным фоном)
- **Контроль изменения размера**: гибкая настройка поведения resize
- **Валидация и ошибки**: подсветка ошибок и текстовые сообщения
- **Подсказки лейбла**: встроенная поддержка тултипов для пояснений
- **Адаптивный дизайн**: разные размеры и отступы на мобильных и desktop
- **Кастомный скроллбар**: стилизованный скроллбар через миксин \`custom-scrollbar\`
- **Доступность**: правильная семантика и поддержка screen readers

## Взаимосвязь autoSize и fluidHeight:
Компонент имеет два режима управления высотой, которые **взаимоисключают** друг друга:

### AutoSize режим (по умолчанию)
- Включен при \`autoSize={true}\` и \`fluidHeight={false}\`
- Поле автоматически подстраивает высоту под содержимое
- Использует \`react-textarea-autosize\`
- Контролируется параметрами \`rows\` (мин. строк) и \`maxRows\` (макс. строк)

### Fluid Height режим
- Активируется при \`fluidHeight={true}\`
- **Автоматически отключает autoSize**
- Поле растягивается на всю доступную высоту родительского контейнера
- Идеально для больших текстовых областей в ограниченном пространстве

## Состояния поля:
- **Обычное**: стандартное состояние
- **С ошибкой**: красная граница и текст ошибки
- **Отключенное**: серый цвет и блокировка взаимодействия
- **Только для чтения**: более мягкий стиль чем disabled
- **С фокусом**: синяя граница для указания активного состояния

## Рекомендации по использованию:

### Базовое использование с авторазмером
\`\`\`jsx
<Textarea
  name="description"
  value={value}
  onChange={onChange}
  label="Описание"
  autoSize={true}
  rows={2}
  maxRows={6}
/>
\`\`\`

### Fluid Height для больших областей
\`\`\`jsx
<div style={{ height: "300px" }}>
  <Textarea
    name="largeText"
    value={value}
    onChange={onChange}
    label="Большой текст"
    fluidHeight={true}
    // autoSize автоматически отключается
  />
</div>
\`\`\`

### Фиксированная высота
\`\`\`jsx
<Textarea
  name="fixedText"
  value={value}
  onChange={onChange}
  label="Фиксированная высота"
  autoSize={false}
  rows={5}
/>
\`\`\`
        `}}},args:{variant:"outlined",resize:"none",autoSize:!0,isAbsolutePositionError:!1,disabled:!1,required:!1,readOnly:!1,autoFocus:!1,infoTooltipText:"",label:"",error:"",isVisibleDefaultTitle:!0,fluidHeight:!1,placeholder:"Введите...",rows:1,cols:20,spellCheck:!0,autoComplete:"off"}},b={name:"Default Textarea",render:r=>{const[e,a]=m.useState({description:""}),t=(i,{name:l,value:o})=>{a(u=>({...u,[l]:o}))};return n.jsxs("div",{className:s.storiesWrapper,children:[n.jsx(d,{...r,error:e.description?void 0:r.error,name:"description",value:e.description,onChange:t}),n.jsxs("div",{className:s.viewTextareaList,children:[n.jsxs("div",{className:s.viewTextareaListItem,children:[n.jsx(C,{type:"description",classNameRoot:s.viewTextareaListItem__description,children:"Textarea with Error"}),n.jsx(d,{...r,name:"description",value:e.description,error:"Обязательное поле для заполнения",onChange:i=>i.stopPropagation()})]}),n.jsxs("div",{className:s.viewTextareaListItem,children:[n.jsx(C,{type:"description",classNameRoot:s.viewTextareaListItem__description,children:"Disabled Textarea"}),n.jsx(d,{...r,name:"description",value:e.description,disabled:!0,onChange:i=>i.stopPropagation()})]}),n.jsxs("div",{className:s.viewTextareaListItem,children:[n.jsx(C,{type:"description",classNameRoot:s.viewTextareaListItem__description,children:"ReadOnly Textarea"}),n.jsx(d,{...r,name:"description",value:"Это значение только для чтения и не может быть изменено пользователем",readOnly:!0,onChange:i=>i.stopPropagation()})]})]})]})}},E={name:"Textarea with Auto Size",render:r=>{const[e,a]=m.useState({autoSizeText:"",limitedSizeText:"",fixedSizeText:""}),t=(i,{name:l,value:o})=>{a(u=>({...u,[l]:o}))};return n.jsx("div",{className:s.storiesWrapper,children:n.jsxs(B,{addMargin:!0,size:"md",withSeparator:!0,children:[n.jsx("div",{className:s.viewTextareaListItem,children:n.jsx(d,{...r,name:"autoSizeText",value:e.autoSizeText,onChange:t,label:"Автоматический размер (без ограничений)",placeholder:"Начните вводить текст - поле будет расти автоматически...",autoSize:!0,rows:2})}),n.jsx("div",{className:s.viewTextareaListItem,children:n.jsx(d,{...r,name:"limitedSizeText",value:e.limitedSizeText,onChange:t,label:"Ограниченный рост (максимум 6 строк)",placeholder:"Введите текст - поле вырастет до 6 строк и появится скролл...",autoSize:!0,rows:2,maxRows:6})}),n.jsx("div",{className:s.viewTextareaListItem,children:n.jsx(d,{...r,name:"fixedSizeText",value:e.fixedSizeText,onChange:t,label:"Фиксированный размер (без autoSize)",placeholder:"Это поле имеет фиксированную высоту...",autoSize:!1,rows:4})})]})})}},j={name:"Textarea with Resize Options",render:r=>{const[e,a]=m.useState({noResize:"",horizontalResize:"",verticalResize:"",bothResize:""}),t=(i,{name:l,value:o})=>{a(u=>({...u,[l]:o}))};return n.jsx("div",{className:s.storiesWrapper,children:n.jsxs(B,{addMargin:!0,size:"md",withSeparator:!0,children:[n.jsx("div",{className:s.viewTextareaListItem,children:n.jsx(d,{...r,name:"noResize",value:e.noResize,onChange:t,label:"Без изменения размера (resize: none)",placeholder:"Это поле нельзя изменить...",resize:"none",rows:3})}),n.jsx("div",{className:s.viewTextareaListItem,children:n.jsx(d,{...r,name:"horizontalResize",value:e.horizontalResize,onChange:t,label:"Только горизонтальное изменение (resize: horizontal)",placeholder:"Можно изменить только ширину...",resize:"horizontal",rows:3})}),n.jsx("div",{className:s.viewTextareaListItem,children:n.jsx(d,{...r,name:"verticalResize",value:e.verticalResize,onChange:t,label:"Только вертикальное изменение (resize: vertical)",placeholder:"Можно изменить только высоту...",resize:"vertical",rows:3})}),n.jsx("div",{className:s.viewTextareaListItem,children:n.jsx(d,{...r,name:"bothResize",value:e.bothResize,onChange:t,label:"Изменение в обе стороны (resize: both)",placeholder:"Можно изменить и ширину и высоту...",resize:"both",rows:3})})]})})}},q={name:"Textarea with Label",render:b.render,args:{label:"Подробное описание",placeholder:"Начните вводить подробное описание...",rows:4}},I={name:"Textarea with Label and Tooltip",render:b.render,args:{label:"Техническое описание",infoTooltipText:"Подсказка для поля 'Техническое описание'. Введите детальное техническое описание объекта с указанием всех характеристик и особенностей.",placeholder:"Введите техническое описание объекта...",rows:4}},W={name:"Required Textarea Field",render:r=>{const[e,a]=m.useState({requiredDescription:""}),t=(i,{name:l,value:o})=>{a(u=>({...u,[l]:o}))};return n.jsx(d,{...r,name:"requiredDescription",value:e.requiredDescription,onChange:t,error:e.requiredDescription?void 0:"Это поле обязательно для заполнения"})},args:{label:"Обязательное поле",required:!0,placeholder:"Заполните это поле...",rows:3}},A={name:"Filled Variant Textarea",render:b.render,args:{label:"Поле с заполненным фоном",variant:"filled",placeholder:"Введите значение...",rows:3}},P={name:"Textarea with Absolute Position Error",render:r=>{const[e,a]=m.useState({fieldWithError:""}),t=(i,{name:l,value:o})=>{a(u=>({...u,[l]:o}))};return n.jsx("div",{className:s.storiesWrapper,children:n.jsx(d,{...r,name:"fieldWithError",value:e.fieldWithError,onChange:t,error:e.fieldWithError?void 0:"Ошибка с абсолютным позиционированием"})})},args:{label:"Поле с абсолютной ошибкой",isAbsolutePositionError:!0,placeholder:"Заполните поле...",rows:3}},M={name:"Textarea with Fluid Height",render:r=>{const[e,a]=m.useState({fluidText:""}),t=(i,{name:l,value:o})=>{a(u=>({...u,[l]:o}))};return n.jsx("div",{className:`${s.storiesWrapper} ${s.fluidHeightWrapper}`,children:n.jsx(d,{...r,name:"fluidText",value:e.fluidText,onChange:t,fluidHeight:!0})})},args:{label:"Поле с растягиваемой высотой",placeholder:"Это поле растягивается на всю доступную высоту контейнера (autoSize автоматически отключается)...",rows:3},parameters:{docs:{description:{story:`
Пример использования Textarea в режиме Fluid Height.

**Особенности:**
- При \`fluidHeight={true}\` автоматически отключается \`autoSize\`
- Поле занимает всю доступную высоту родительского контейнера
- Идеально для больших текстовых областей в фиксированных по высоте контейнерах

**Родительский контейнер должен иметь явно заданную высоту для правильной работы fluidHeight.**
        `}}}},O={name:"AutoSize vs Fluid Height Comparison",render:()=>{const[r,e]=m.useState({autoSizeText:"",fluidHeightText:"",fixedSizeText:""}),a=(t,{name:i,value:l})=>{e(o=>({...o,[i]:l}))};return n.jsx("div",{className:s.storiesWrapper,children:n.jsxs(B,{addMargin:!0,size:"md",withSeparator:!0,children:[n.jsxs("div",{className:s.viewTextareaListItem,children:[n.jsx(C,{type:"description",classNameRoot:s.viewTextareaListItem__description,children:"AutoSize режим (autoSize=true, fluidHeight=false)"}),n.jsx(d,{name:"autoSizeText",value:r.autoSizeText,onChange:a,label:"Автоматический размер",placeholder:"Поле растет автоматически по мере ввода текста...",autoSize:!0,fluidHeight:!1,rows:2,maxRows:6})]}),n.jsxs("div",{className:s.viewTextareaListItem,children:[n.jsx(C,{type:"description",classNameRoot:s.viewTextareaListItem__description,children:"Fluid Height режим (fluidHeight=true, autoSize автоматически отключается)"}),n.jsx("div",{className:s.fluidHeightDemoContainer,children:n.jsx(d,{name:"fluidHeightText",value:r.fluidHeightText,onChange:a,label:"Fluid Height",placeholder:"Поле занимает всю высоту контейнера...",fluidHeight:!0})})]}),n.jsxs("div",{className:s.viewTextareaListItem,children:[n.jsx(C,{type:"description",classNameRoot:s.viewTextareaListItem__description,children:"Фиксированная высота (autoSize=false, fluidHeight=false)"}),n.jsx(d,{name:"fixedSizeText",value:r.fixedSizeText,onChange:a,label:"Фиксированная высота",placeholder:"Поле имеет фиксированную высоту...",autoSize:!1,fluidHeight:!1,rows:4})]})]})})},parameters:{docs:{description:{story:`
Сравнение различных режимов управления высотой Textarea.

## Режимы работы:

### 1. AutoSize (рекомендуется для динамического контента)
- Поле автоматически подстраивается под содержимое
- Контролируется параметрами \`rows\` и \`maxRows\`
- Идеально для форм с переменным объемом текста

### 2. Fluid Height (для больших текстовых областей)
- **Автоматически отключает autoSize**
- Занимает всю высоту родительского контейнера
- Требует явно заданной высоты у родителя

### 3. Фиксированная высота (для статичного дизайна)
- Высота определяется параметром \`rows\`
- Никакого автоматического изменения размера
- Простой и предсказуемый вариант
        `}}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Default Textarea",
  render: args => {
    const [formData, setFormData] = useState({
      description: ""
    });
    const onChange: TOnChangeTextarea = (_event, {
      name,
      value
    }) => {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    return <div className={styles.storiesWrapper}>\r
        <Textarea {...args} error={!formData.description ? args.error : undefined} name={"description"} value={formData.description} onChange={onChange} />\r
        <div className={styles.viewTextareaList}>\r
          <div className={styles.viewTextareaListItem}>\r
            <Text type={"description"} classNameRoot={styles.viewTextareaListItem__description}>\r
              Textarea with Error\r
            </Text>\r
            <Textarea {...args} name={"description"} value={formData.description} error={"Обязательное поле для заполнения"} onChange={event => event.stopPropagation()} />\r
          </div>\r
          <div className={styles.viewTextareaListItem}>\r
            <Text type={"description"} classNameRoot={styles.viewTextareaListItem__description}>\r
              Disabled Textarea\r
            </Text>\r
            <Textarea {...args} name={"description"} value={formData.description} disabled={true} onChange={event => event.stopPropagation()} />\r
          </div>\r
          <div className={styles.viewTextareaListItem}>\r
            <Text type={"description"} classNameRoot={styles.viewTextareaListItem__description}>\r
              ReadOnly Textarea\r
            </Text>\r
            <Textarea {...args} name={"description"} value="Это значение только для чтения и не может быть изменено пользователем" readOnly={true} onChange={event => event.stopPropagation()} />\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...b.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Textarea with Auto Size",
  render: args => {
    const [formData, setFormData] = useState({
      autoSizeText: "",
      limitedSizeText: "",
      fixedSizeText: ""
    });
    const onChange: TOnChangeTextarea = (_event, {
      name,
      value
    }) => {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    return <div className={styles.storiesWrapper}>\r
        <Form addMargin={true} size={"md"} withSeparator={true}>\r
          <div className={styles.viewTextareaListItem}>\r
            <Textarea {...args} name={"autoSizeText"} value={formData.autoSizeText} onChange={onChange} label="Автоматический размер (без ограничений)" placeholder="Начните вводить текст - поле будет расти автоматически..." autoSize={true} rows={2} />\r
          </div>\r
          <div className={styles.viewTextareaListItem}>\r
            <Textarea {...args} name={"limitedSizeText"} value={formData.limitedSizeText} onChange={onChange} label="Ограниченный рост (максимум 6 строк)" placeholder="Введите текст - поле вырастет до 6 строк и появится скролл..." autoSize={true} rows={2} maxRows={6} />\r
          </div>\r
          <div className={styles.viewTextareaListItem}>\r
            <Textarea {...args} name={"fixedSizeText"} value={formData.fixedSizeText} onChange={onChange} label="Фиксированный размер (без autoSize)" placeholder="Это поле имеет фиксированную высоту..." autoSize={false} rows={4} />\r
          </div>\r
        </Form>\r
      </div>;
  }
}`,...E.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Textarea with Resize Options",
  render: args => {
    const [formData, setFormData] = useState({
      noResize: "",
      horizontalResize: "",
      verticalResize: "",
      bothResize: ""
    });
    const onChange: TOnChangeTextarea = (_event, {
      name,
      value
    }) => {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    return <div className={styles.storiesWrapper}>\r
        <Form addMargin={true} size={"md"} withSeparator={true}>\r
          <div className={styles.viewTextareaListItem}>\r
            <Textarea {...args} name={"noResize"} value={formData.noResize} onChange={onChange} label="Без изменения размера (resize: none)" placeholder="Это поле нельзя изменить..." resize="none" rows={3} />\r
          </div>\r
          <div className={styles.viewTextareaListItem}>\r
            <Textarea {...args} name={"horizontalResize"} value={formData.horizontalResize} onChange={onChange} label="Только горизонтальное изменение (resize: horizontal)" placeholder="Можно изменить только ширину..." resize="horizontal" rows={3} />\r
          </div>\r
          <div className={styles.viewTextareaListItem}>\r
            <Textarea {...args} name={"verticalResize"} value={formData.verticalResize} onChange={onChange} label="Только вертикальное изменение (resize: vertical)" placeholder="Можно изменить только высоту..." resize="vertical" rows={3} />\r
          </div>\r
          <div className={styles.viewTextareaListItem}>\r
            <Textarea {...args} name={"bothResize"} value={formData.bothResize} onChange={onChange} label="Изменение в обе стороны (resize: both)" placeholder="Можно изменить и ширину и высоту..." resize="both" rows={3} />\r
          </div>\r
        </Form>\r
      </div>;
  }
}`,...j.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Textarea with Label",
  render: Default.render,
  args: {
    label: "Подробное описание",
    placeholder: "Начните вводить подробное описание...",
    rows: 4
  }
}`,...q.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Textarea with Label and Tooltip",
  render: Default.render,
  args: {
    label: "Техническое описание",
    infoTooltipText: "Подсказка для поля 'Техническое описание'. Введите детальное техническое описание объекта с указанием всех характеристик и особенностей.",
    placeholder: "Введите техническое описание объекта...",
    rows: 4
  }
}`,...I.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Required Textarea Field",
  render: args => {
    const [formData, setFormData] = useState({
      requiredDescription: ""
    });
    const onChange: TOnChangeTextarea = (_event, {
      name,
      value
    }) => {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    return <Textarea {...args} name={"requiredDescription"} value={formData.requiredDescription} onChange={onChange} error={!formData.requiredDescription ? "Это поле обязательно для заполнения" : undefined} />;
  },
  args: {
    label: "Обязательное поле",
    required: true,
    placeholder: "Заполните это поле...",
    rows: 3
  }
}`,...W.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Filled Variant Textarea",
  render: Default.render,
  args: {
    label: "Поле с заполненным фоном",
    variant: "filled",
    placeholder: "Введите значение...",
    rows: 3
  }
}`,...A.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Textarea with Absolute Position Error",
  render: args => {
    const [formData, setFormData] = useState({
      fieldWithError: ""
    });
    const onChange: TOnChangeTextarea = (_event, {
      name,
      value
    }) => {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    return <div className={styles.storiesWrapper}>\r
        <Textarea {...args} name={"fieldWithError"} value={formData.fieldWithError} onChange={onChange} error={!formData.fieldWithError ? "Ошибка с абсолютным позиционированием" : undefined} />\r
      </div>;
  },
  args: {
    label: "Поле с абсолютной ошибкой",
    isAbsolutePositionError: true,
    placeholder: "Заполните поле...",
    rows: 3
  }
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Textarea with Fluid Height",
  render: args => {
    const [formData, setFormData] = useState({
      fluidText: ""
    });
    const onChange: TOnChangeTextarea = (_event, {
      name,
      value
    }) => {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    return <div className={\`\${styles.storiesWrapper} \${styles.fluidHeightWrapper}\`}>\r
        <Textarea {...args} name={"fluidText"} value={formData.fluidText} onChange={onChange} fluidHeight={true}
      // autoSize автоматически отключается при fluidHeight={true}
      />\r
      </div>;
  },
  args: {
    label: "Поле с растягиваемой высотой",
    placeholder: "Это поле растягивается на всю доступную высоту контейнера (autoSize автоматически отключается)...",
    rows: 3
  },
  parameters: {
    docs: {
      description: {
        story: \`
Пример использования Textarea в режиме Fluid Height.

**Особенности:**
- При \\\`fluidHeight={true}\\\` автоматически отключается \\\`autoSize\\\`
- Поле занимает всю доступную высоту родительского контейнера
- Идеально для больших текстовых областей в фиксированных по высоте контейнерах

**Родительский контейнер должен иметь явно заданную высоту для правильной работы fluidHeight.**
        \`
      }
    }
  }
}`,...M.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "AutoSize vs Fluid Height Comparison",
  render: () => {
    const [formData, setFormData] = useState({
      autoSizeText: "",
      fluidHeightText: "",
      fixedSizeText: ""
    });
    const onChange: TOnChangeTextarea = (_event, {
      name,
      value
    }) => {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    return <div className={styles.storiesWrapper}>\r
        <Form addMargin={true} size={"md"} withSeparator={true}>\r
          <div className={styles.viewTextareaListItem}>\r
            <Text type={"description"} classNameRoot={styles.viewTextareaListItem__description}>\r
              AutoSize режим (autoSize=true, fluidHeight=false)\r
            </Text>\r
            <Textarea name={"autoSizeText"} value={formData.autoSizeText} onChange={onChange} label="Автоматический размер" placeholder="Поле растет автоматически по мере ввода текста..." autoSize={true} fluidHeight={false} rows={2} maxRows={6} />\r
          </div>\r
\r
          <div className={styles.viewTextareaListItem}>\r
            <Text type={"description"} classNameRoot={styles.viewTextareaListItem__description}>\r
              Fluid Height режим (fluidHeight=true, autoSize автоматически отключается)\r
            </Text>\r
            <div className={styles.fluidHeightDemoContainer}>\r
              <Textarea name={"fluidHeightText"} value={formData.fluidHeightText} onChange={onChange} label="Fluid Height" placeholder="Поле занимает всю высоту контейнера..." fluidHeight={true}
            // autoSize автоматически отключается
            />\r
            </div>\r
          </div>\r
\r
          <div className={styles.viewTextareaListItem}>\r
            <Text type={"description"} classNameRoot={styles.viewTextareaListItem__description}>\r
              Фиксированная высота (autoSize=false, fluidHeight=false)\r
            </Text>\r
            <Textarea name={"fixedSizeText"} value={formData.fixedSizeText} onChange={onChange} label="Фиксированная высота" placeholder="Поле имеет фиксированную высоту..." autoSize={false} fluidHeight={false} rows={4} />\r
          </div>\r
        </Form>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
Сравнение различных режимов управления высотой Textarea.

## Режимы работы:

### 1. AutoSize (рекомендуется для динамического контента)
- Поле автоматически подстраивается под содержимое
- Контролируется параметрами \\\`rows\\\` и \\\`maxRows\\\`
- Идеально для форм с переменным объемом текста

### 2. Fluid Height (для больших текстовых областей)
- **Автоматически отключает autoSize**
- Занимает всю высоту родительского контейнера
- Требует явно заданной высоты у родителя

### 3. Фиксированная высота (для статичного дизайна)
- Высота определяется параметром \\\`rows\\\`
- Никакого автоматического изменения размера
- Простой и предсказуемый вариант
        \`
      }
    }
  }
}`,...O.parameters?.docs?.source}}};const ft=["Default","WithAutoSize","WithResizeOptions","WithLabel","WithLabelAndTooltip","RequiredField","FilledVariant","AbsolutePositionError","FluidHeight","AutoSizeVsFluidHeight"];export{P as AbsolutePositionError,O as AutoSizeVsFluidHeight,b as Default,A as FilledVariant,M as FluidHeight,W as RequiredField,E as WithAutoSize,q as WithLabel,I as WithLabelAndTooltip,j as WithResizeOptions,ft as __namedExportsOrder,xt as default};
