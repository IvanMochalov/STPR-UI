import{r,j as l}from"./iframe-DFzgFXfL.js";import{A as B}from"./Accordion-K4oKHFt-.js";import{c as C}from"./clsx-B-dksMZM.js";import{T as E}from"./Text-Cmw29Q9M.js";import{T as x}from"./TextWithLabel-r0YmcfM8.js";import"./preload-helper-DCNYn41m.js";import"./Icon-FLtHPxG2.js";import"./Tooltip-CAn8cC1X.js";import"./BaseTooltip-70cfOlMv.js";import"./Potral-BSVlFBsR.js";import"./index-DP6wETD2.js";import"./index-sQF5gpHW.js";import"./Label-5pjt2kXZ.js";const M=2e3,w=500;function q(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}const $=t=>{const{targetValue:e,duration:s=M,doneValue:n,onSuccessLoaded:a}=t,[i,p]=r.useState(e),[c,d]=r.useState(e!==n),o=r.useRef(),u=r.useRef(e),g=r.useRef(0),f=r.useRef(e),m=r.useRef(i),P=r.useRef(),v=r.useRef(!1);return m.current=i,r.useEffect(()=>{if(f.current=e,e===u.current)return;if(o.current&&(cancelAnimationFrame(o.current),o.current=void 0),e===n&&u.current===n){p(n);return}u.current=m.current,g.current=performance.now();const h=k=>{const D=g.current;if(D===void 0)return;const N=k-D,R=Math.min(N/s,1),A=q(R),T=u.current,L=f.current,j=Math.max(0,Math.floor(T+(L-T)*A));p(j),R<1?o.current=requestAnimationFrame(h):(u.current=L,o.current=void 0)};return o.current=requestAnimationFrame(h),()=>{o.current&&(cancelAnimationFrame(o.current),o.current=void 0)}},[e,s,n]),r.useEffect(()=>{if(i===n)return v.current?void 0:(P.current=setTimeout(()=>{P.current=void 0,v.current=!0,a?.(),d(!1)},w),()=>{P.current&&(clearTimeout(P.current),P.current=void 0)});v.current=!1,P.current&&(clearTimeout(P.current),P.current=void 0),d(!0)},[i,n,a]),{animatedValue:i,isLoading:c}},F="_progressWrapper_iry74_2",O="_progressWrapper_loading_iry74_21",H="_pulse_iry74_1",U="_progressWrapper__progressBadge_iry74_32",Y="_progressWrapper__progressBadge_loading_iry74_45",y={progressWrapper:F,progressWrapper_loading:O,"progressWrapper--animated-pulse":"_progressWrapper--animated-pulse_iry74_26",pulse:H,"progressWrapper--animated-backgroundProgress":"_progressWrapper--animated-backgroundProgress_iry74_29",progressWrapper__progressBadge:U,progressWrapper__progressBadge_loading:Y},_=t=>{const{value:e,classNameRoot:s,classNameProgressBadgeRoot:n,duration:a=2e3,children:i,doneValue:p=100,animationVariant:c="backgroundProgress",onSuccessLoaded:d}=t,{animatedValue:o,isLoading:u}=$({targetValue:e,duration:a,doneValue:p,onSuccessLoaded:d}),g=C({[y.progressWrapper]:!0,[y[`progressWrapper--animated-${c}`]]:c,[y.progressWrapper_loading]:u,...s&&{[s]:!0}}),f=C({[y.progressWrapper__progressBadge]:!0,[y.progressWrapper__progressBadge_loading]:u,...n&&{[n]:!0}}),m={"--progress":`${o/p*100}%`};return l.jsxs("div",{className:g,style:c==="backgroundProgress"?m:void 0,children:[i,u&&l.jsxs(E,{classNameRoot:f,children:[o,"%"]})]})};_.__docgenInfo={description:"",methods:[],displayName:"ProgressWrapper",props:{value:{required:!0,tsType:{name:"number"},description:""},classNameRoot:{required:!1,tsType:{name:"string"},description:""},classNameProgressBadgeRoot:{required:!1,tsType:{name:"string"},description:""},duration:{required:!1,tsType:{name:"number"},description:""},doneValue:{required:!1,tsType:{name:"number"},description:""},animationVariant:{required:!1,tsType:{name:"union",raw:'"pulse" | "backgroundProgress"',elements:[{name:"literal",value:'"pulse"'},{name:"literal",value:'"backgroundProgress"'}]},description:""},onSuccessLoaded:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["PropsWithChildren"]};const I=(t,e)=>{const s=r.useRef();r.useEffect(()=>{s.current=t},[t]),r.useEffect(()=>{const n=()=>{s.current&&s.current()};if(e!==null){const a=setInterval(n,e);return()=>clearInterval(a)}},[e])},z="_customProgressContent_1dtr3_1",G="_progressList_1dtr3_7",S={customProgressContent:z,progressList:G},ie={title:"Components/ProgressWrapper",component:_,tags:["autodocs"],argTypes:{value:{control:{type:"number"},description:`Текущее значение прогресса (от 0 до doneValue).
Анимация плавно доводит отображаемое значение до этого числа за указанную длительность.
`,table:{type:{summary:"number"}}},classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента ProgressWrapper
`,control:!1,table:{type:{summary:"string"}}},classNameProgressBadgeRoot:{description:`Дополнительный CSS-класс для элемента с процентами прогресса
`,control:!1,table:{type:{summary:"string"}}},duration:{description:`Время в миллисекундах, за которое анимация прогресса обновит отображаемое значение до актуального.
Рекомендуется устанавливать равным интервалу обновления данных с бэкенда.
`,control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:"2000"}}},doneValue:{description:`Максимальное значение, соответствующее 100% завершению.
Когда value достигает этого значения, индикатор прогресса скрывается.
`,control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:"100"}}},animationVariant:{description:`Вариант визуального отображения прогресса:
- "backgroundProgress" - заполнение фона градиентом слева направо
- "pulse" - пульсирующая анимация прозрачности содержимого
`,control:{type:"select"},options:["pulse","backgroundProgress"],table:{type:{summary:"TProgressWrapperAnimationVariant",detail:"'pulse' | 'backgroundProgress'"},defaultValue:{summary:'"backgroundProgress"'}}},onSuccessLoaded:{description:`Callback-функция вызываемая после визуальной загрузки компонента
`,control:!1,table:{type:{detail:`onSuccessLoaded={() => {
  // логика обработки завершения загрузки;
}}`}}},children:{description:`Контент, который оборачивается индикатором прогресса.
Может быть любым React-компонентом или элементом.
`,control:!1,table:{type:{summary:"ReactNode"}}}},parameters:{docs:{description:{component:`
Компонент-обертка для отображения индикатора прогресса поверх любого контента.

## Особенности:
- **Плавная анимация значений** с easing-функцией для естественного движения
- **Автоматическое скрытие** при достижении 100% прогресса
- **Два варианта анимации** - заполнение фона или пульсация
- **Адаптивный дизайн** с изменением размеров для мобильных устройств
- **CSS-переменные** для кастомизации отображения прогресса
- **Табличные цифры** (tabular-nums) для стабильного отображения процентов

## Визуальные эффекты:
- **Progress Badge** - абсолютно позиционированный индикатор с процентами
- **Заполнение фона** - градиентное заполнение слева направо при \`variant="backgroundProgress"\`
- **Пульсация** - плавное изменение прозрачности при \`variant="pulse"\`
- **Состояние загрузки** - снижение \`opacity\` и блокировка взаимодействия

## Поведение:
- При изменении \`value\` запускается плавная анимация к новому значению
- Когда \`value\` достигает \`doneValue\`, индикатор скрывается через \`500мс\`
- Во время анимации контент становится полупрозрачным и недоступным для взаимодействия

## Рекомендации по использованию:
Как правило компонент \`ProgressWrapper\` используется в случаях, когда данные о состоянии загрузки меняются в интервале времени

Для выполнении какой-то логики (актуализации данных о состоянии загрузки через API) в интервале времени рекомендовано использовать хук \`useInterval\`, который принимает два аргумента:
- \`callback\` с логикой актуализации данных о состоянии загрузки
- интервал времени

Хук \`useInterval\` экспортируется также из "test-stpr-ui-kit"

### Базовое использование
\`\`\`jsx
import { useInterval } from "test-stpr-ui-kit";

...
const doneValue = 100;
const duration = 2000;
const [progress, setProgress] = useState(0);
const [delay, setDelay] = useState<number | null>(duration);

useInterval(() => {
  if (progress === doneValue) {
    setDelay(null);
    return;
  }
  setProgress((prev) => prev + 25);
}, delay);

return (
  <ProgressWrapper
    value={progress}
    duration={duration}
    doneValue={doneValue}
    animationVariant={animationVariant}
  >
    <TextWithLabel label={"Шифр модели раздела WIP"}>К01_АР_П_R19</TextWithLabel>
  </ProgressWrapper>
)
\`\`\`
        `}}}},V={name:"Default ProgressWrapper",args:{value:0,doneValue:100,duration:2e3,animationVariant:"backgroundProgress"},render:({animationVariant:t,duration:e=2e3,doneValue:s,value:n})=>{const[a,i]=r.useState(n),[p,c]=r.useState(e);return I(()=>{if(a===s){c(null);return}i(d=>d+25)},p),l.jsx(_,{value:a,duration:e,doneValue:s,animationVariant:t,children:l.jsx("div",{className:S.customProgressContent,children:l.jsx(x,{label:"Шифр модели раздела WIP",children:"К01_АР_П_R19"})})})}},W={name:"Pulse Animation Variant",args:{value:0,doneValue:100,duration:1500,animationVariant:"pulse"},render:({animationVariant:t,duration:e=1500,doneValue:s,value:n})=>{const[a,i]=r.useState(n),[p,c]=r.useState(e);return I(()=>{if(a===s){c(null);return}i(d=>d+20)},p),l.jsx(_,{value:a,duration:e,doneValue:s,animationVariant:t,children:l.jsx("div",{className:S.customProgressContent,children:l.jsx(x,{label:"Пульсирующая анимация",children:"Я пульсирую"})})})}},b={name:"Multiple Components Progress Wrappers",args:{value:0,doneValue:100,duration:2e3,animationVariant:"backgroundProgress"},render:({animationVariant:t,duration:e=2e3,doneValue:s=100,value:n})=>{const[a,i]=r.useState([{id:0,progress:n,text:"ProgressWrapper это просто обертка над компонентом"},{id:1,progress:n,text:"Можно абсолютно любой компонент обернуть в ProgressWrapper"},{id:2,progress:100,text:"ProgressWrapper при этом просто добавит абсолютно-позиционированный индикатор загрузки к вашему компоненту"}]),[p,c]=r.useState(e),[d,o]=r.useState(0);return I(()=>{i(u=>{const g=[...u],f=g[d];return f.progress=Math.min(f.progress+25,s),f.progress>=s&&d<g.length-1&&o(m=>m+1),g.every(m=>m.progress>=s)&&c(null),g})},p),l.jsx("ul",{className:S.progressList,children:a.map(({progress:u,id:g,text:f},m)=>{const[P,v]=r.useState(u===s);return l.jsx(_,{value:u,duration:e,doneValue:s,animationVariant:t,onSuccessLoaded:()=>{v(!0),console.log(`подсказка номер ${++m} успешно загружена`)},children:l.jsx(B,{name:`${++m}. `+(P?"Компонент загружен":"Загружаемый компонент"),isHiddenExpandIcon:!P,children:l.jsx(x,{label:"Описание ProgressWrapper",children:f})})},g)})})}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Default ProgressWrapper",
  args: {
    value: 0,
    doneValue: 100,
    duration: 2000,
    animationVariant: "backgroundProgress"
  },
  render: ({
    animationVariant,
    duration = 2000,
    doneValue,
    value
  }) => {
    const [progress, setProgress] = useState(value);
    const [delay, setDelay] = useState<number | null>(duration);
    useInterval(() => {
      if (progress === doneValue) {
        setDelay(null);
        return;
      }
      setProgress(prev => prev + 25);
    }, delay);
    return <ProgressWrapper value={progress} duration={duration} doneValue={doneValue} animationVariant={animationVariant}>\r
        <div className={styles.customProgressContent}>\r
          <TextWithLabel label={"Шифр модели раздела WIP"}>К01_АР_П_R19</TextWithLabel>\r
        </div>\r
      </ProgressWrapper>;
  }
}`,...V.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Pulse Animation Variant",
  args: {
    value: 0,
    doneValue: 100,
    duration: 1500,
    animationVariant: "pulse"
  },
  render: ({
    animationVariant,
    duration = 1500,
    doneValue,
    value
  }) => {
    const [progress, setProgress] = useState(value);
    const [delay, setDelay] = useState<number | null>(duration);
    useInterval(() => {
      if (progress === doneValue) {
        setDelay(null);
        return;
      }
      setProgress(prev => prev + 20);
    }, delay);
    return <ProgressWrapper value={progress} duration={duration} doneValue={doneValue} animationVariant={animationVariant}>\r
        <div className={styles.customProgressContent}>\r
          <TextWithLabel label={"Пульсирующая анимация"}>Я пульсирую</TextWithLabel>\r
        </div>\r
      </ProgressWrapper>;
  }
}`,...W.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Multiple Components Progress Wrappers",
  args: {
    value: 0,
    doneValue: 100,
    duration: 2000,
    animationVariant: "backgroundProgress"
  },
  render: ({
    animationVariant,
    duration = 2000,
    doneValue = 100,
    value
  }) => {
    const [dataProgress, setDataProgress] = useState([{
      id: 0,
      progress: value,
      text: "ProgressWrapper это просто обертка над компонентом"
    }, {
      id: 1,
      progress: value,
      text: "Можно абсолютно любой компонент обернуть в ProgressWrapper"
    }, {
      id: 2,
      progress: 100,
      text: "ProgressWrapper при этом просто добавит абсолютно-позиционированный индикатор загрузки к вашему компоненту"
    }]);
    const [delay, setDelay] = useState<number | null>(duration);
    const [currentIndex, setCurrentIndex] = useState(0);
    useInterval(() => {
      setDataProgress(prev => {
        const newData = [...prev];
        const currentItem = newData[currentIndex];

        // Увеличиваем progress текущего элемента
        currentItem.progress = Math.min(currentItem.progress + 25, doneValue);

        // Если текущий элемент завершен, переходим к следующему
        if (currentItem.progress >= doneValue && currentIndex < newData.length - 1) {
          setCurrentIndex(prevIndex => prevIndex + 1);
        }

        // Если все элементы завершены, останавливаем интервал
        if (newData.every(item => item.progress >= doneValue)) {
          setDelay(null);
        }
        return newData;
      });
    }, delay);
    return <ul className={styles.progressList}>\r
        {dataProgress.map(({
        progress,
        id,
        text
      }, index) => {
        const [isDone, setIsDone] = useState(progress === doneValue);
        return <ProgressWrapper key={id} value={progress} duration={duration} doneValue={doneValue} animationVariant={animationVariant} onSuccessLoaded={() => {
          setIsDone(true);
          console.log(\`подсказка номер \${++index} успешно загружена\`);
        }}>\r
              <Accordion name={\`\${++index}. \` + (isDone ? "Компонент загружен" : "Загружаемый компонент")} isHiddenExpandIcon={!isDone}>\r
                <TextWithLabel label={"Описание ProgressWrapper"}>{text}</TextWithLabel>\r
              </Accordion>\r
            </ProgressWrapper>;
      })}\r
      </ul>;
  }
}`,...b.parameters?.docs?.source}}};const le=["Default","PulseAnimation","MultiComponents"];export{V as Default,b as MultiComponents,W as PulseAnimation,le as __namedExportsOrder,ie as default};
