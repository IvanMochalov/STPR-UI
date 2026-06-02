import{j as r}from"./iframe-DFzgFXfL.js";import{c}from"./clsx-B-dksMZM.js";import{I as _,E as n}from"./Icon-FLtHPxG2.js";import"./preload-helper-DCNYn41m.js";const k="_spContextMenu_qdudd_1",C="_spContextMenu__item_qdudd_25",N="_spContextMenu__item__icon_qdudd_38",x="_spContextMenu__item__icon_delete_qdudd_43",t={spContextMenu:k,spContextMenu__item:C,spContextMenu__item__icon:N,spContextMenu__item__icon_delete:x},m=u=>{const{onClickItem:i,options:p,classNameRoot:l}=u,d=c({[t.spContextMenu]:!0,...l&&{[l]:!0}});return r.jsx("ul",{className:d,children:p?.map(e=>{const y=e.key==="delete";return r.jsxs("li",{className:t.spContextMenu__item,onClick:()=>{i&&i(e)},children:[e?.iconName&&r.jsx(_,{name:e.iconName,className:c({[t.spContextMenu__item__icon]:!0,[t.spContextMenu__item__icon_delete]:y})}),e.label]},e.key)})})};m.__docgenInfo={description:"",methods:[],displayName:"ContextMenu",props:{classNameRoot:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"union",raw:"Array<TContextMenuOption> | []",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  key?: string;\r
  value?: string;\r
  label?: string;\r
  iconName?: EIconName;\r
}`,signature:{properties:[{key:"key",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"iconName",value:{name:"EIconName",required:!1}}]}}],raw:"Array<TContextMenuOption>"},{name:"tuple",raw:"[]",elements:[]}]},description:""},onClickItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: TContextMenuOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
  key?: string;\r
  value?: string;\r
  label?: string;\r
  iconName?: EIconName;\r
}`,signature:{properties:[{key:"key",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"iconName",value:{name:"EIconName",required:!1}}]}},name:"option"}],return:{name:"void"}}},description:""}}};const f={title:"Components/ContextMenu",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`
Контекстное меню для отображения списка действий с поддержкой иконок.

## Особенности:
- Автоматическое определение опции "Удалить" по ключу "delete"
- Подсветка иконки удаления красным цветом
- Гибкая система иконок через компонент Icon
- Адаптивный дизайн с hover-эффектами
- Семантическая HTML-разметка (ul/li)

## Базовое использование

\`\`\`jsx
<ContextMenu
  options={[
    { key: "edit", label: "Редактировать", iconName: EIconName.Edit },
    { key: "delete", label: "Удалить", iconName: EIconName.Trash },
  ]}
  onClickItem={(option) => console.log(option)}
/>
\`\`\`
        `}}},argTypes:{classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента контекстного меню
`,control:!1,table:{type:{summary:"string"}}},options:{description:`Массив опций меню. Каждая опция должна содержать:
- key: уникальный идентификатор (обязательно для React key)
- label: текст опции
- iconName: имя иконки из EIconName (опционально)
- value: дополнительное значение (опционально)

Особенности:
- Опция с key="delete" автоматически получает красный цвет иконки
- Поддерживаются любые иконки из библиотеки EIconName
`,control:{type:"object"},table:{type:{summary:"TContextMenuOption[]",detail:"TContextMenuOption[] = { key?: string; value?: string; label?: string; iconName?: EIconName; }[]"}}},onClickItem:{description:"Callback-функция, вызываемая при клике на опцию меню. Получает объект выбранной опции в качестве параметра.",control:!1,table:{type:{summary:"(option: TContextMenuOption) => void",detail:`onClickItem={(option) => {
  console.log('Выбрана опция:', option.key, option.label);
}}`}}}}},o={name:"Default Context Menu",args:{options:[{key:"history",label:"История проверок",iconName:n.HistoryClock},{key:"delete",label:"Удалить",iconName:n.Trash}]}},a={name:"Context Menu with Various Icons",args:{options:[{key:"plus",label:"Добавить",iconName:n.Plus},{key:"copy",label:"Копировать",iconName:n.Copy},{key:"download",label:"Скачать",iconName:n.Upload},{key:"delete",label:"Удалить",iconName:n.Trash}]}},s={name:"Context Menu without Icons",args:{options:[{key:"view",label:"Просмотреть"},{key:"edit",label:"Редактировать"},{key:"delete",label:"Удалить"}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Default Context Menu",
  args: {
    options: [{
      key: "history",
      label: "История проверок",
      iconName: EIconName.HistoryClock
    }, {
      key: "delete",
      label: "Удалить",
      iconName: EIconName.Trash
    }]
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Context Menu with Various Icons",
  args: {
    options: [{
      key: "plus",
      label: "Добавить",
      iconName: EIconName.Plus
    }, {
      key: "copy",
      label: "Копировать",
      iconName: EIconName.Copy
    }, {
      key: "download",
      label: "Скачать",
      iconName: EIconName.Upload
    }, {
      key: "delete",
      label: "Удалить",
      iconName: EIconName.Trash
    }]
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Context Menu without Icons",
  args: {
    options: [{
      key: "view",
      label: "Просмотреть"
    }, {
      key: "edit",
      label: "Редактировать"
    }, {
      key: "delete",
      label: "Удалить"
    }]
  }
}`,...s.parameters?.docs?.source}}};const v=["Default","WithIcons","WithoutIcons"];export{o as Default,a as WithIcons,s as WithoutIcons,v as __namedExportsOrder,f as default};
