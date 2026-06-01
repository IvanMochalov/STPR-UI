import{j as e}from"./iframe-CA4deTFl.js";import{c as g}from"./clsx-B-dksMZM.js";import{T as r}from"./Text-DSk7EiGw.js";import"./preload-helper-JD0jGv3q.js";const f="_skeleton_1h6ke_1",C="_skeleton_circle_1h6ke_23",v="_skeleton_customStart_1h6ke_26",w="_skeleton_customEnd_1h6ke_29",o={skeleton:f,skeleton_circle:C,skeleton_customStart:v,skeleton_customEnd:w},s=d=>{const{startColor:p,endColor:m,width:_="100%",height:S="1rem",circle:x=!1,classNameRoot:h,style:k={}}=d,u={width:_,height:S,...k},y=g({[o.skeleton]:!0,[o.skeleton_circle]:x,[o.skeleton_customStart]:p,[o.skeleton_customEnd]:m,...h&&{[h]:!0}});return e.jsx("div",{className:y,style:{...u,...p&&{"--custom-start-color":p},...m&&{"--custom-end-color":m}}})};s.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{startColor:{required:!1,tsType:{name:"string"},description:""},endColor:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},circle:{required:!1,tsType:{name:"boolean"},description:""},classNameRoot:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const N="_customStylesSkeletonWrapper_zvlhu_1",j="_customColorsSkeletonWrapper_zvlhu_8",T="_customStylesSkeleton_zvlhu_1",R="_circleSkeletons_zvlhu_20",W="_circleSkeletons__item_zvlhu_25",b="_circleSkeletons__item__description_zvlhu_31",z="_cardSkeleton_zvlhu_35",q="_cardSkeleton__header_zvlhu_41",E="_cardSkeleton__headerContent_zvlhu_47",L="_cardSkeleton__titleLine_zvlhu_50",V="_cardSkeleton__image_zvlhu_53",D="_cardSkeleton__lines_zvlhu_56",P="_cardSkeleton__footer_zvlhu_61",t={customStylesSkeletonWrapper:N,customColorsSkeletonWrapper:j,customStylesSkeleton:T,circleSkeletons:R,circleSkeletons__item:W,circleSkeletons__item__description:b,cardSkeleton:z,cardSkeleton__header:q,cardSkeleton__headerContent:E,cardSkeleton__titleLine:L,cardSkeleton__image:V,cardSkeleton__lines:D,cardSkeleton__footer:P},A={title:"Components/Skeleton",component:s,tags:["autodocs"],argTypes:{startColor:{description:`Начальный цвет градиента анимации. По умолчанию используется цвет из дизайн-системы.
`,control:{type:"color"},table:{type:{summary:"string"},defaultValue:{summary:'"#e6e6e6"'}}},endColor:{description:`Конечный цвет градиента анимации. По умолчанию используется белый цвет.
`,control:{type:"color"},table:{type:{summary:"string"},defaultValue:{summary:'"#ffffff"'}}},width:{description:`Ширина скелетона. Может быть задана в пикселях, процентах или других CSS-единицах.
`,control:{type:"text"},table:{type:{summary:"number | string"},defaultValue:{summary:'"100%"'}}},height:{description:`Высота скелетона. Может быть задана в пикселях, процентах или других CSS-единицах.
`,control:{type:"text"},table:{type:{summary:"number | string"},defaultValue:{summary:'"1rem"'}}},circle:{description:`Сделать скелетон круглым. Игнорирует стандартные скругления и создает идеальный круг.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента скелетона
`,control:!1,table:{type:{summary:"string"}}},style:{description:`Инлайн-стили для кастомизации внешнего вида скелетона.
`,control:{type:"object"},table:{type:{summary:"CSSProperties"}}}},parameters:{docs:{controls:{sort:"none"},description:{component:`
Компонент скелетона предназначен для отображения плейсхолдера контента во время загрузки.

## Особенности:
- **Анимированный шиммер** - плавная анимация с градиентным перемещением
- **Настраиваемые цвета** - кастомизация начального и конечного цвета градиента
- **Гибкие размеры** - поддержка любых CSS-единиц измерения
- **Круглая форма** - возможность создания круглых плейсхолдеров
- **Простая кастомизация** - базовые пропсы для быстрой настройки
- **Производительность** - легковесная реализация без лишних зависимостей

## Визуальные эффекты:
- **Градиентная анимация** - плавное перемещение светлой полосы по темному фону
- **Настраиваемые цвета** - возможность задать кастомные цвета для градиента
- **Настраиваемая скорость** - стандартная длительность анимации 2 секунды
- **Бесконечное повторение** - анимация продолжается пока отображается скелетон

## Цветовая схема:
- **startColor** - базовый цвет скелетона, определяет темную часть градиента
- **endColor** - цвет "свечения", определяет светлую движущуюся часть градиента
- По умолчанию используются цвета из дизайн-системы: \`#e6e6e6\` → \`#ffffff\`

## Рекомендации по использованию:
Используйте для улучшения пользовательского опыта во время загрузки контента.

### Базовое использование

\`\`\`jsx
// Простой прямоугольный скелетон
<Skeleton width="200px" height="20px" />

// Круглый скелетон для аватаров
<Skeleton width="40px" height="40px" circle={true} />

// Скелетон с кастомными стилями
<Skeleton 
  width="100%" 
  height="100px" 
  style={{ marginBottom: "16px" }}
/>

// Скелетон с кастомными цветами
<Skeleton 
  width="300px" 
  height="24px" 
  startColor="#d1d1d1" 
  endColor="#f0f0f0" 
/>

// Темная тема
<Skeleton 
  width="250px" 
  height="18px" 
  startColor="#333333" 
  endColor="#555555" 
/>
\`\`\`
        `}}},args:{width:"100%",height:"1rem",circle:!1,startColor:"#e6e6e6",endColor:"#ffffff"}},n={name:"Default Skeleton",args:{width:"400px",height:"100px"}},l={render:()=>e.jsxs("div",{className:t.circleSkeletons,children:[e.jsxs("div",{className:t.circleSkeletons__item,children:[e.jsx(s,{width:"40px",height:"40px",circle:!0}),e.jsx(r,{classNameRoot:t.circleSkeletons__item__description,children:"40px"})]}),e.jsxs("div",{className:t.circleSkeletons__item,children:[e.jsx(s,{width:"60px",height:"60px",circle:!0}),e.jsx(r,{classNameRoot:t.circleSkeletons__item__description,children:"60px"})]}),e.jsxs("div",{className:t.circleSkeletons__item,children:[e.jsx(s,{width:"80px",height:"80px",circle:!0}),e.jsx(r,{classNameRoot:t.circleSkeletons__item__description,children:"80px"})]}),e.jsxs("div",{className:t.circleSkeletons__item,children:[e.jsx(s,{width:"100px",height:"100px",circle:!0}),e.jsx(r,{classNameRoot:t.circleSkeletons__item__description,children:"100px"})]})]})},i={render:()=>e.jsxs("div",{className:t.cardSkeleton,children:[e.jsxs("div",{className:t.cardSkeleton__header,children:[e.jsx(s,{width:"48px",height:"48px",circle:!0}),e.jsxs("div",{className:t.cardSkeleton__headerContent,children:[e.jsx(s,{width:"80%",height:"16px",classNameRoot:t.cardSkeleton__titleLine}),e.jsx(s,{width:"60%",height:"12px"})]})]}),e.jsx(s,{width:"100%",height:"120px",classNameRoot:t.cardSkeleton__image}),e.jsxs("div",{className:t.cardSkeleton__lines,children:[e.jsx(s,{width:"100%",height:"14px"}),e.jsx(s,{width:"90%",height:"14px"}),e.jsx(s,{width:"95%",height:"14px"})]}),e.jsxs("div",{className:t.cardSkeleton__footer,children:[e.jsx(s,{width:"80px",height:"32px"}),e.jsx(s,{width:"60px",height:"32px"})]})]})},c={name:"Skeleton with Custom Styles",args:{width:"150px",height:"28px",classNameRoot:t.customStylesSkeleton},render:d=>e.jsxs("div",{className:t.customStylesSkeletonWrapper,children:[e.jsx(r,{type:"description",children:"Кастомизация"}),e.jsx(s,{...d})]})},a={name:"Skeleton with Custom Colors",render:()=>e.jsxs("div",{className:t.customColorsSkeletonWrapper,children:[e.jsxs("div",{className:t.customStylesSkeletonWrapper,children:[e.jsx(r,{type:"description",children:"Светлая тема"}),e.jsx(s,{width:"200px",height:"20px",startColor:"#e6e6e6",endColor:"#ffffff"})]}),e.jsxs("div",{className:t.customStylesSkeletonWrapper,children:[e.jsx(r,{type:"description",children:"Темная тема"}),e.jsx(s,{width:"200px",height:"20px",startColor:"#333333",endColor:"#555555"})]}),e.jsxs("div",{className:t.customStylesSkeletonWrapper,children:[e.jsx(r,{type:"description",children:"Синяя тема"}),e.jsx(s,{width:"200px",height:"20px",startColor:"#d1e3f8",endColor:"#e8f2ff"})]}),e.jsxs("div",{className:t.customStylesSkeletonWrapper,children:[e.jsx(r,{type:"description",children:"Зеленая тема"}),e.jsx(s,{width:"200px",height:"20px",startColor:"#d1f2eb",endColor:"#e8f9f5"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Default Skeleton",
  args: {
    width: "400px",
    height: "100px"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className={styles.circleSkeletons}>\r
        <div className={styles.circleSkeletons__item}>\r
          <Skeleton width="40px" height="40px" circle={true} />\r
          <Text classNameRoot={styles.circleSkeletons__item__description}>40px</Text>\r
        </div>\r
\r
        <div className={styles.circleSkeletons__item}>\r
          <Skeleton width="60px" height="60px" circle={true} />\r
          <Text classNameRoot={styles.circleSkeletons__item__description}>60px</Text>\r
        </div>\r
\r
        <div className={styles.circleSkeletons__item}>\r
          <Skeleton width="80px" height="80px" circle={true} />\r
          <Text classNameRoot={styles.circleSkeletons__item__description}>80px</Text>\r
        </div>\r
\r
        <div className={styles.circleSkeletons__item}>\r
          <Skeleton width="100px" height="100px" circle={true} />\r
          <Text classNameRoot={styles.circleSkeletons__item__description}>100px</Text>\r
        </div>\r
      </div>;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className={styles.cardSkeleton}>\r
        <div className={styles.cardSkeleton__header}>\r
          <Skeleton width="48px" height="48px" circle={true} />\r
          <div className={styles.cardSkeleton__headerContent}>\r
            <Skeleton width="80%" height="16px" classNameRoot={styles.cardSkeleton__titleLine} />\r
            <Skeleton width="60%" height="12px" />\r
          </div>\r
        </div>\r
\r
        <Skeleton width="100%" height="120px" classNameRoot={styles.cardSkeleton__image} />\r
\r
        <div className={styles.cardSkeleton__lines}>\r
          <Skeleton width="100%" height="14px" />\r
          <Skeleton width="90%" height="14px" />\r
          <Skeleton width="95%" height="14px" />\r
        </div>\r
\r
        <div className={styles.cardSkeleton__footer}>\r
          <Skeleton width="80px" height="32px" />\r
          <Skeleton width="60px" height="32px" />\r
        </div>\r
      </div>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Skeleton with Custom Styles",
  args: {
    width: "150px",
    height: "28px",
    classNameRoot: styles.customStylesSkeleton
  },
  render: args => {
    return <div className={styles.customStylesSkeletonWrapper}>\r
        <Text type={"description"}>Кастомизация</Text>\r
        <Skeleton {...args} />\r
      </div>;
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Skeleton with Custom Colors",
  render: () => {
    return <div className={styles.customColorsSkeletonWrapper}>\r
        <div className={styles.customStylesSkeletonWrapper}>\r
          <Text type={"description"}>Светлая тема</Text>\r
          <Skeleton width="200px" height="20px" startColor="#e6e6e6" endColor="#ffffff" />\r
        </div>\r
\r
        <div className={styles.customStylesSkeletonWrapper}>\r
          <Text type={"description"}>Темная тема</Text>\r
          <Skeleton width="200px" height="20px" startColor="#333333" endColor="#555555" />\r
        </div>\r
\r
        <div className={styles.customStylesSkeletonWrapper}>\r
          <Text type={"description"}>Синяя тема</Text>\r
          <Skeleton width="200px" height="20px" startColor="#d1e3f8" endColor="#e8f2ff" />\r
        </div>\r
\r
        <div className={styles.customStylesSkeletonWrapper}>\r
          <Text type={"description"}>Зеленая тема</Text>\r
          <Skeleton width="200px" height="20px" startColor="#d1f2eb" endColor="#e8f9f5" />\r
        </div>\r
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const F=["Default","CircleSkeletons","CardSkeleton","WithCustomStyles","CustomColors"];export{i as CardSkeleton,l as CircleSkeletons,a as CustomColors,n as Default,c as WithCustomStyles,F as __namedExportsOrder,A as default};
