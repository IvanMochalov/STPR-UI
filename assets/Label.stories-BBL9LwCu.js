import{j as e}from"./iframe-CA4deTFl.js";import{L as t}from"./Label-Br7vcJEe.js";import{T as r}from"./Text-DSk7EiGw.js";import{E as l}from"./Tooltip-DOi7Oqjo.js";import"./preload-helper-JD0jGv3q.js";import"./clsx-B-dksMZM.js";import"./BaseTooltip-CuZNMgt3.js";import"./Icon-DndJayG8.js";import"./Potral-CkHkY5OB.js";import"./index-SbPXkCt7.js";import"./index-DESwEi8l.js";const m="_labelsWrapper_1xkdk_1",o={labelsWrapper:m},j={title:"Components/Label",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
Компонент лейбла для подписи полей формы, любых других компонентов с поддержкой обязательных полей и вспомогательных подсказок.

Данный компонент используется в компонентах (устанавливается через параметр \`label\`):
- **\`Input\`**
- **\`Select\`**
- **\`Textarea\`**
- **\`UploadFiles\`**
- **\`DatePickerInput\`**
- **\`DatePicker\`**
- **\`TextWithLabel\`**

## Особенности:
- **Семантическая разметка** - использует нативный HTML элемент \`<label>\`
- **Обязательные поля** - визуальное обозначение звездочкой для required полей
- **Встроенные подсказки** - интеграция с \`InfoTooltip\` для поясняющей информации
- **Адаптивный дизайн** - разные размеры шрифта на мобильных и desktop устройствах
- **Гибкое позиционирование** - поддержка различных позиций тултипа

## Визуальные состояния:
- **Обычный лейбл** - стандартный серый текст
- **Обязательное поле** - текст с красной звездочкой (*)
- **С подсказкой** - текст с иконкой информации для дополнительных пояснений

## Адаптивность:
Размер шрифта адаптируется под разные разрешения устройств:
- Мобильные: 12px
- Планшеты и выше \`(sm breakpoint)\`: 14px

## Рекомендации по использованию:
Используйте для семантической разметки форм и улучшения пользовательского опыта через подсказки.

### Базовое использование

\`\`\`jsx
// Простой лейбл
<Label label="Имя пользователя" />

// Обязательное поле
<Label label="Email" required={true} />

// Лейбл с подсказкой
<Label 
  label="Сложный параметр" 
  infoTooltipText="Этот параметр влияет на важные настройки системы" 
/>

// Комбинированный вариант
<Label 
  label="Критический параметр" 
  required={true}
  infoTooltipText="Это поле обязательно для корректной работы системы"
  tooltipPosition={ETooltipPosition.BottomLeft}
/>
\`\`\`
        `}}},argTypes:{label:{description:`Текст лейбла. Отображается как подпись для связанного элемента формы.
`,control:{type:"text"},table:{type:{summary:"string"}}},required:{description:`Пометить поле как обязательное для заполнения. Добавляет красную звездочку (*) после текста лейбла.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},infoTooltipText:{description:`Текст всплывающей подсказки. Показывает иконку информации с тултипом при наведении.
`,control:{type:"text"},table:{type:{summary:"string"}}},tooltipPosition:{description:`Позиция тултипа относительно иконки информации. По умолчанию bottom-left.
`,control:{type:"select"},options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom"],table:{type:{summary:"ETooltipPosition"},defaultValue:{summary:'"bottom-left"'}}},classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента лейбла
`,control:!1,table:{type:{summary:"string"}}},classNameBaseTooltipRoot:{description:`Дополнительный CSS-класс для корневого элемента тултипа
`,control:!1,table:{type:{summary:"string"}}}},args:{label:"Лейбл поля",required:!1,infoTooltipText:""}},i={name:"Default Label",args:{infoTooltipText:"sds",required:!0,label:"Обычный лейбл поля"}},a={name:"Required Label",args:{label:"Обязательное поле",required:!0}},s={name:"Label with Tooltip",args:{label:"Поле с подсказкой",infoTooltipText:"Это вспомогательная подсказка с пояснениями по заполнению поля"}},n={name:"All Label Variants",render:()=>e.jsxs("div",{className:o.labelsWrapper,children:[e.jsxs("div",{className:o.allLabelsWrapper__item,children:[e.jsx(r,{type:"description",children:"Обычный лейбл"}),e.jsx(t,{label:"Базовая информация"})]}),e.jsxs("div",{className:o.allLabelsWrapper__item,children:[e.jsx(r,{type:"description",children:"Обязательное поле"}),e.jsx(t,{label:"Критический параметр",required:!0})]}),e.jsxs("div",{className:o.allLabelsWrapper__item,children:[e.jsx(r,{type:"description",children:"Лейбл с подсказкой"}),e.jsx(t,{label:"Сложный параметр",infoTooltipText:"Этот параметр требует особого внимания при настройке"})]}),e.jsxs("div",{className:o.allLabelsWrapper__item,children:[e.jsx(r,{type:"description",children:"Комбинированный вариант"}),e.jsx(t,{label:"Важный параметр системы",required:!0,infoTooltipText:"Это поле обязательно для корректной работы системы. Подробности в документации."})]})]})},p={render:()=>e.jsxs("div",{className:o.labelsWrapper,children:[e.jsx(t,{label:"Подсказка справа",infoTooltipText:"Тултип отображается справа от иконки",tooltipPosition:l.Right}),e.jsx(t,{label:"Подсказка сверху",infoTooltipText:"Тултип отображается сверху от иконки",tooltipPosition:l.Top}),e.jsx(t,{label:"Подсказка слева",infoTooltipText:"Тултип отображается слева от иконки",tooltipPosition:l.Left}),e.jsx(t,{label:"Подсказка снизу (по умолчанию)",infoTooltipText:"Тултип отображается снизу от иконки",tooltipPosition:l.Bottom}),e.jsx(t,{label:"Подсказка по умолчанию)",infoTooltipText:"Тултип отображается снизу от иконки"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Default Label",
  args: {
    infoTooltipText: "sds",
    required: true,
    label: "Обычный лейбл поля"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Required Label",
  args: {
    label: "Обязательное поле",
    required: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Label with Tooltip",
  args: {
    label: "Поле с подсказкой",
    infoTooltipText: "Это вспомогательная подсказка с пояснениями по заполнению поля"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "All Label Variants",
  render: () => {
    return <div className={styles.labelsWrapper}>\r
        <div className={styles.allLabelsWrapper__item}>\r
          <Text type={"description"}>Обычный лейбл</Text>\r
          <Label label="Базовая информация" />\r
        </div>\r
\r
        <div className={styles.allLabelsWrapper__item}>\r
          <Text type={"description"}>Обязательное поле</Text>\r
          <Label label="Критический параметр" required={true} />\r
        </div>\r
\r
        <div className={styles.allLabelsWrapper__item}>\r
          <Text type={"description"}>Лейбл с подсказкой</Text>\r
          <Label label="Сложный параметр" infoTooltipText="Этот параметр требует особого внимания при настройке" />\r
        </div>\r
\r
        <div className={styles.allLabelsWrapper__item}>\r
          <Text type={"description"}>Комбинированный вариант</Text>\r
          <Label label="Важный параметр системы" required={true} infoTooltipText="Это поле обязательно для корректной работы системы. Подробности в документации." />\r
        </div>\r
      </div>;
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className={styles.labelsWrapper}>\r
        <Label label="Подсказка справа" infoTooltipText="Тултип отображается справа от иконки" tooltipPosition={ETooltipPosition.Right} />\r
        <Label label="Подсказка сверху" infoTooltipText="Тултип отображается сверху от иконки" tooltipPosition={ETooltipPosition.Top} />\r
        <Label label="Подсказка слева" infoTooltipText="Тултип отображается слева от иконки" tooltipPosition={ETooltipPosition.Left} />\r
        <Label label="Подсказка снизу (по умолчанию)" infoTooltipText="Тултип отображается снизу от иконки" tooltipPosition={ETooltipPosition.Bottom} />\r
        <Label label="Подсказка по умолчанию)" infoTooltipText="Тултип отображается снизу от иконки" />\r
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const P=["Default","Required","WithTooltip","AllVariants","DifferentTooltipPositions"];export{n as AllVariants,i as Default,p as DifferentTooltipPositions,a as Required,s as WithTooltip,P as __namedExportsOrder,j as default};
