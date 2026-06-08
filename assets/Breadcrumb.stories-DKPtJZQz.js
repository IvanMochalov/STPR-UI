import{j as r,r as c}from"./iframe-DsoVLqtF.js";import{c as l}from"./clsx-B-dksMZM.js";import{I as v,E as P}from"./Icon-CcD0Smza.js";import{T as B}from"./Text-Da_aKhKS.js";import"./preload-helper-DCNYn41m.js";const k="_spBreadcrumb_10fj1_1",L="_spBreadcrumb__list_10fj1_17",h="_spBreadcrumb__listItem_10fj1_28",j="_spBreadcrumb__listItem__separator_10fj1_34",I="_spBreadcrumb__listItem__text_10fj1_43",f="_spBreadcrumb__listItem_active_10fj1_54",a={spBreadcrumb:k,spBreadcrumb__list:L,spBreadcrumb__listItem:h,spBreadcrumb__listItem__separator:j,spBreadcrumb__listItem__text:I,spBreadcrumb__listItem_active:f},i=s=>{const{classNameRoot:e,classNameListRoot:t,crumbsList:n=[]}=s,d=l({[a.spBreadcrumb]:!0,...e&&{[e]:!0}}),b=l({[a.spBreadcrumb__list]:!0,...t&&{[t]:!0}});return r.jsx("nav",{"aria-label":"breadcrumb",className:d,children:r.jsx("ol",{className:b,children:n.map(({text:p,onClick:g,active:_,visible:C},x)=>C===!1?null:r.jsxs("li",{className:l(a.spBreadcrumb__listItem,_&&a.spBreadcrumb__listItem_active),children:[r.jsx("span",{title:p,className:a.spBreadcrumb__listItem__text,onClick:g,children:p}),r.jsx(v,{name:P.SelectChevronDown,rotate:-90,className:a.spBreadcrumb__listItem__separator})]},x))})})};i.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{classNameRoot:{required:!1,tsType:{name:"string"},description:""},classNameListRoot:{required:!1,tsType:{name:"string"},description:""},crumbsList:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  text: string;\r
  onClick?: () => void;\r
  active?: boolean;\r
  visible?: boolean;\r
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"visible",value:{name:"boolean",required:!1}}]}}],raw:"TCrumbItem[]"},description:""}}};const y="_interactiveColumn_xzudr_1",N={interactiveColumn:y},D={title:"Components/Breadcrumb",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
Компонент "хлебных крошек" для навигации по иерархии страниц. 
Отображает текущее местоположение пользователя в структуре сайта и предоставляет быстрый доступ к родительским разделам.

## Основные возможности

- **Иерархическая навигация** - отображение пути от корня до текущей страницы
- **Интерактивные элементы** - кликабельные ссылки на родительские разделы
- **Активное состояние** - визуальное выделение текущей страницы
- **Адаптивный дизайн** - корректное отображение на мобильных и desktop устройствах
- **Автоматические разделители** - иконки-шевроны между элементами

## Особенности поведения

- **Последний элемент** - не является кликабельным и отображается без разделителя
- **Активный элемент** - выделяется цветом и не имеет обработчика клика
- **Разделители** - автоматически скрываются для последнего элемента
- **Доступность** - включает ARIA-атрибуты для скринридеров

## Базовое использование

\`\`\`jsx
const [currentPage, setCurrentPage] = useState("cart");

const crumbsList = [
  { text: "Главная", onClick: () => setCurrentPage("main") },
  { text: "Каталог", onClick: () => setCurrentPage("catalog") },
  { text: "Корзина", active: true }
];

return <Breadcrumb crumbsList={crumbsList} />;
\`\`\`

## Динамическое управление активным состоянием

Для реализации интерактивной навигации можно комбинировать с состоянием React:

\`\`\`jsx
const [currentPage, setCurrentPage] = useState("catalog");

const crumbsList = [
  { 
    text: "Главная", 
    active: currentPage === "main", 
    onClick: () => setCurrentPage("main") 
  },
  { 
    text: "Каталог", 
    active: currentPage === "catalog", 
    onClick: () => setCurrentPage("catalog") 
  },
  { 
    text: "Электроника", 
    active: currentPage === "electronics", 
    onClick: () => setCurrentPage("electronics") 
  }
];

return <Breadcrumb crumbsList={crumbsList} />;
\`\`\`
        `}}},argTypes:{crumbsList:{description:"Массив элементов навигации. Каждый элемент представляет собой шаг в иерархии.\n- `text`: отображаемый текст (обязательный)\n- `onClick`: обработчик клика (не используется для активного элемента)\n- `active`: флаг активного состояния (последний элемент обычно активный)\n",control:!1,table:{type:{summary:"TCrumbItem[]",detail:"TCrumbItem[] = { text: string; onClick?: () => void; active?: boolean; visible?: boolean; }[]"}}},classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента навигации
`,control:!1,table:{type:{summary:"string"}}},classNameListRoot:{description:`Дополнительный CSS-класс для списка элементов навигации
`,control:!1,table:{type:{summary:"string"}}}}},o={name:"Default Breadcrumb",render:s=>{const[e,t]=c.useState("lib"),n=c.useMemo(()=>[{text:"Главная",active:e==="main",onClick:()=>t("main")},{text:"Библиотека 3D-моделей для АГР",active:e==="lib",onClick:()=>t("lib")},{text:"Корзина",active:e==="cart",onClick:()=>t("cart")}],[e]);return r.jsx(i,{...s,crumbsList:n})}},u={name:"Breadcrumb with Long Path",render:s=>{const[e,t]=c.useState("product"),n=c.useMemo(()=>[{text:"Главная",active:e==="main",onClick:()=>t("main")},{text:"Магазин",active:e==="shop",onClick:()=>t("shop")},{text:"Электроника",active:e==="electronics",onClick:()=>t("electronics")},{text:"Смартфоны и гаджеты",active:e==="smartphones",onClick:()=>t("smartphones")},{text:"Apple iPhone 15 Pro Max 256GB Natural Titanium",active:e==="product"}],[e]);return r.jsx(i,{...s,crumbsList:n})}},m={render:s=>{const[e,t]=c.useState("settings"),n=c.useMemo(()=>[{text:"Рабочий стол",active:e==="dashboard",onClick:()=>t("dashboard")},{text:"Проекты",active:e==="projects",onClick:()=>t("projects")},{text:"Мой проект",active:e==="project",onClick:()=>t("project")},{text:"Настройки",active:e==="settings",onClick:()=>t("settings")}],[e]);return r.jsxs("div",{className:N.interactiveColumn,children:[r.jsx(i,{...s,crumbsList:n}),r.jsxs(B,{type:"description",color:"#666",children:["Текущая страница: ",e]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Default Breadcrumb",
  render: args => {
    const [currentPage, setCurrentPage] = useState("lib");
    const crumbList = useMemo<TCrumbItem[]>(() => {
      return [{
        text: "Главная",
        active: currentPage === "main",
        onClick: () => setCurrentPage("main")
      }, {
        text: "Библиотека 3D-моделей для АГР",
        active: currentPage === "lib",
        onClick: () => setCurrentPage("lib")
      }, {
        text: "Корзина",
        active: currentPage === "cart",
        onClick: () => setCurrentPage("cart")
      }];
    }, [currentPage]);
    return <Breadcrumb {...args} crumbsList={crumbList} />;
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Breadcrumb with Long Path",
  render: args => {
    const [currentPage, setCurrentPage] = useState("product");
    const crumbList = useMemo<TCrumbItem[]>(() => {
      return [{
        text: "Главная",
        active: currentPage === "main",
        onClick: () => setCurrentPage("main")
      }, {
        text: "Магазин",
        active: currentPage === "shop",
        onClick: () => setCurrentPage("shop")
      }, {
        text: "Электроника",
        active: currentPage === "electronics",
        onClick: () => setCurrentPage("electronics")
      }, {
        text: "Смартфоны и гаджеты",
        active: currentPage === "smartphones",
        onClick: () => setCurrentPage("smartphones")
      }, {
        text: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
        active: currentPage === "product"
      }];
    }, [currentPage]);
    return <Breadcrumb {...args} crumbsList={crumbList} />;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState("settings");
    const crumbList = useMemo<TCrumbItem[]>(() => {
      return [{
        text: "Рабочий стол",
        active: currentPage === "dashboard",
        onClick: () => setCurrentPage("dashboard")
      }, {
        text: "Проекты",
        active: currentPage === "projects",
        onClick: () => setCurrentPage("projects")
      }, {
        text: "Мой проект",
        active: currentPage === "project",
        onClick: () => setCurrentPage("project")
      }, {
        text: "Настройки",
        active: currentPage === "settings",
        onClick: () => setCurrentPage("settings")
      }];
    }, [currentPage]);
    return <div className={styles.interactiveColumn}>\r
        <Breadcrumb {...args} crumbsList={crumbList} />\r
        <Text type={"description"} color={"#666"}>\r
          Текущая страница: {currentPage}\r
        </Text>\r
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const w=["Default","WithLongPath","InteractiveBreadcrumb"];export{o as Default,m as InteractiveBreadcrumb,u as WithLongPath,w as __namedExportsOrder,D as default};
