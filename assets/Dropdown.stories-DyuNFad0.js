import{r as b,j as o}from"./iframe-DsoVLqtF.js";import{c as e}from"./clsx-B-dksMZM.js";import{I as f,E as h}from"./Icon-CcD0Smza.js";import{E as l,T as I}from"./Tooltip-B9F4jJYp.js";import"./preload-helper-DCNYn41m.js";import"./BaseTooltip-CyUiU66m.js";import"./Potral-7FViUbta.js";import"./index-Cz879DlY.js";import"./index-CMC9NNB4.js";const S="_spDropdown_139q7_1",P="_spDropdown__labelText_139q7_27",E="_spDropdown__tooltipContainer_139q7_39",q="_spDropdown__dropdownList_139q7_46",v="_spDropdown__dropdownListHeader_139q7_52",j="_spDropdown__dopdownListItem_139q7_58",R="_spDropdown__dopdownListItem_textCenter_139q7_73",V="_spDropdown__downloadListItemDescription_139q7_77",t={spDropdown:S,spDropdown__labelText:P,spDropdown__tooltipContainer:E,spDropdown__dropdownList:q,spDropdown__dropdownListHeader:v,spDropdown__dopdownListItem:j,spDropdown__dopdownListItem_textCenter:R,spDropdown__downloadListItemDescription:V},c=m=>{const{labelText:w="Выпадающий список",listName:a,dropdownList:_=[],dropdownPosition:u=l.BottomRight,classNameRoot:p}=m,D=e({[t.spDropdown]:!0,...p&&{[p]:!0}}),C=e({[t.spDropdown__labelText]:!0}),g=e({[t.spDropdown__tooltipContainer]:!0}),x=e({[t.spDropdown__dropdownList]:!0}),L=e({[t.spDropdown__dropdownListHeader]:!0}),k=e({[t.spDropdown__downloadListItemDescription]:!0}),[y,d]=b.useState(!1),T=()=>o.jsxs("div",{className:x,children:[a&&o.jsx("div",{className:L,children:a}),_.map((n,N)=>o.jsxs("div",{className:e({[t.spDropdown__dopdownListItem]:!0,[t.spDropdown__dopdownListItem_textCenter]:n.textCenter}),onClick:n.onClick,children:[n.name,n.description&&o.jsx("span",{className:k,children:n.description})]},N))]});return o.jsx(I,{hover:!1,triggerAction:()=>d(!0),actionOnClose:()=>d(!1),text:T(),position:u,lockPosition:!0,noPadding:!0,isToggleClick:!0,isStopPropagationClickOnTrigger:!0,trigger:o.jsxs("div",{className:D,children:[o.jsx("div",{className:C,children:w}),o.jsx("div",{className:g,children:o.jsx(f,{name:h.SelectChevronDown,rotate:y?180:void 0})})]})})};c.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{labelText:{required:!1,tsType:{name:"string"},description:""},listName:{required:!1,tsType:{name:"string"},description:""},classNameRoot:{required:!1,tsType:{name:"string"},description:""},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  name: string;\r
  onClick?: () => void;\r
  description?: string;\r
  textCenter?: boolean;\r
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"textCenter",value:{name:"boolean",required:!1}}]}}],raw:"TDropdownListItem[]"},description:""},dropdownPosition:{required:!1,tsType:{name:"ETooltipPosition"},description:""}}};const O="_customDropdown_1pzq1_1",Z={customDropdown:O},K={title:"Components/Dropdown",component:c,tags:["autodocs"],parameters:{docs:{description:{component:`
Выпадающий список с возможностью кастомизации дизайна и гибкими настройками позиционирования. 
Компонент использует Tooltip для отображения списка options и предоставляет различные варианты расположения.

## Основные возможности

- **Гибкое позиционирование**: 12 вариантов расположения выпадающего списка
- **Заголовок списка**: опциональное название группы элементов
- **Описания элементов**: дополнительная информация для каждого пункта
- **Центрирование текста**: возможность центрировать текст в элементах
- **Адаптивный дизайн**: автоматическая подстройка под контент
- **Кастомные обработчики**: индивидуальные callback'и для каждого пункта

## Базовое использование

\`\`\`jsx
<Dropdown
  labelText="Тип файла"
  listName="Форматы экспорта"
  dropdownList={[
    { name: "CSV", description: "12 мб", onClick: () => handleExport('csv') },
    { name: "Excel", description: "23 мб", onClick: () => handleExport('excel') },
    { name: "PDF", description: "8 мб", onClick: () => handleExport('pdf') },
  ]}
  dropdownPosition={ETooltipPosition.BottomRight}
/>
\`\`\`
        `}}},argTypes:{classNameRoot:{description:"Дополнительный CSS-класс для корневого элемента dropdown",control:!1,table:{type:{summary:"string"}}},labelText:{description:"Текст, отображаемый на кнопке dropdown",control:{type:"text"},table:{defaultValue:{summary:"Выпадающий список"},type:{summary:"string"}}},listName:{description:"Заголовок выпадающего списка. Отображается вверху списка элементов",control:{type:"text"}},dropdownList:{description:"Массив элементов для отображения в выпадающем списке",control:{type:"object"},table:{type:{summary:"TDropdownListItem[]",detail:`TDropdownListItem[] = {
  name: string;
  onClick?: () => void;
  description?: string;
  textCenter?: boolean;
 }[]`}}},dropdownPosition:{description:"Позиция выпадающего списка относительно триггера",options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom"],control:{type:"select"},table:{defaultValue:{summary:"bottom-right"},type:{summary:"ETooltipPosition"}}}},args:{dropdownPosition:l.BottomRight,labelText:"Выпадающий список"}},r={name:"Default Dropdown",args:{listName:"Тип файла",dropdownList:[{name:"CSV",description:"12 мб",onClick:()=>alert("click on CSV")},{name:"Excel",description:"23 мб",onClick:()=>alert("click on Excel")},{name:"Скачать ZIP-архив",textCenter:!0,onClick:()=>alert("click on ZIP")}]}},s={name:"Dropdown with Long Descriptions",args:{labelText:"Форматы экспорта",listName:"Доступные форматы",dropdownList:[{name:"CSV",description:"Табличный формат, подходит для Excel",onClick:()=>alert("CSV")},{name:"JSON",description:"Структурированный формат для разработчиков",onClick:()=>alert("JSON")},{name:"PDF",description:"Формат для печати и документооборота",onClick:()=>alert("PDF")},{name:"Экспортировать все",textCenter:!0,description:"Все форматы в ZIP-архиве",onClick:()=>alert("Все")}]}},i={name:"Dropdown with Custom Styling",args:{classNameRoot:Z.customDropdown,labelText:"Кастомный стиль",dropdownList:[{name:"Пункт меню 1",onClick:()=>alert("Пункт 1")},{name:"Пункт меню 2",onClick:()=>alert("Пункт 2")}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Default Dropdown",
  args: {
    listName: "Тип файла",
    dropdownList: [{
      name: "CSV",
      description: "12 мб",
      onClick: () => alert("click on CSV")
    }, {
      name: "Excel",
      description: "23 мб",
      onClick: () => alert("click on Excel")
    }, {
      name: "Скачать ZIP-архив",
      textCenter: true,
      onClick: () => alert("click on ZIP")
    }]
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Dropdown with Long Descriptions",
  args: {
    labelText: "Форматы экспорта",
    listName: "Доступные форматы",
    dropdownList: [{
      name: "CSV",
      description: "Табличный формат, подходит для Excel",
      onClick: () => alert("CSV")
    }, {
      name: "JSON",
      description: "Структурированный формат для разработчиков",
      onClick: () => alert("JSON")
    }, {
      name: "PDF",
      description: "Формат для печати и документооборота",
      onClick: () => alert("PDF")
    }, {
      name: "Экспортировать все",
      textCenter: true,
      description: "Все форматы в ZIP-архиве",
      onClick: () => alert("Все")
    }]
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Dropdown with Custom Styling",
  args: {
    classNameRoot: styles.customDropdown,
    labelText: "Кастомный стиль",
    dropdownList: [{
      name: "Пункт меню 1",
      onClick: () => alert("Пункт 1")
    }, {
      name: "Пункт меню 2",
      onClick: () => alert("Пункт 2")
    }]
  }
}`,...i.parameters?.docs?.source}}};const M=["Default","WithLongDescriptions","CustomStyling"];export{i as CustomStyling,r as Default,s as WithLongDescriptions,M as __namedExportsOrder,K as default};
