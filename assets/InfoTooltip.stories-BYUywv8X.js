import{j as e}from"./iframe-DsoVLqtF.js";import{T as a}from"./Text-Da_aKhKS.js";import{I as r,E as s}from"./Tooltip-B9F4jJYp.js";import"./preload-helper-DCNYn41m.js";import"./clsx-B-dksMZM.js";import"./BaseTooltip-CyUiU66m.js";import"./Icon-CcD0Smza.js";import"./Potral-7FViUbta.js";import"./index-Cz879DlY.js";import"./index-CMC9NNB4.js";const i="_infoTooltipTextWrapper_1cvfo_1",n={infoTooltipTextWrapper:i},b={title:"Components/InfoTooltip",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
Упрощенная версия компонента Tooltip с предустановленной иконкой информации \`EIconName.Info\` в качестве триггера.

## Особенности

- **Предопределенный триггер** - всегда использует иконку \`EIconName.Info\`
- **Hover режим по умолчанию** - активация при наведении
- **Наследует все свойства Tooltip** - поддерживает все позиции, кастомизацию и callback-и
- **Идеален для подсказок** - семантически правильное использование иконки информации

## Отличие от базового Tooltip

В отличие от \`Tooltip\`, где нужно передавать \`trigger\`, 
\`InfoTooltip\` уже настроен для самых распространенных сценариев использования подсказок.

## Базовое использование
Передайте текст подсказки в параметр \`text\` и уже всё готово!

\`\`\`jsx
// Простая подсказка
<InfoTooltip text="Поясняющая информация о поле" />

// С кастомной позицией
<InfoTooltip 
  text="Дополнительная информация" 
  position={ETooltipPosition.Right}
/>

// С расширенным контентом
<InfoTooltip 
  text={
    <div>
      <strong>Важная информация</strong>
      <br />
      <span>Подробное описание элемента</span>
    </div>
  } 
/>
\`\`\`
        `}}},argTypes:{hover:{description:`Режим активации тултипа:
- true: показывать при наведении (по умолчанию)
- false: показывать по клику
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},isToggleClick:{description:`Режим переключения для клика:
- true: тултип переключается по клику (открывается/закрывается)
- false: тултип открывается по клику, закрывается по клику вне области
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isVisibleTooltip:{description:`Видимость тултипа. Если false, тултип не будет отображаться даже при активации.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},isStopPropagationClickOnTrigger:{description:`Останавливать всплытие события клика на триггере. Полезно когда тултип находится внутри другого кликабельного элемента.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},position:{description:`Позиция тултипа относительно триггера. Автоматически корректируется при выходе за границы viewport.
`,control:{type:"select"},options:Object.values(s),table:{type:{summary:"ETooltipPosition"},defaultValue:{summary:'"bottom-left"'}}},text:{description:`Содержимое тултипа. Может быть строкой или React-компонентом. Поддерживает многострочный текст и HTML-разметку.
`,control:{type:"text"},table:{type:{summary:"string | ReactNode"}}},noPadding:{description:`Убрать внутренние отступы у тултипа. Полезно для кастомного оформления контента.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},triggerAction:{description:`Callback-функция, вызываемая при активации тултипа (открытии).
`,control:!1,table:{type:{summary:"() => void"}}},actionOnClose:{description:`Callback-функция, вызываемая при закрытии тултипа.
`,control:!1,table:{type:{summary:"() => void"}}},classNameTriggerIcon:{description:`Дополнительный CSS-класс для кастомной стилизации иконки
`,control:!1,table:{type:{summary:"string"}}},classNameTooltip:{description:`Дополнительный CSS-класс для родителя элемента триггера
`,control:!1,table:{type:{summary:"string"}}},classNameBaseTooltipRoot:{description:`Дополнительный CSS-класс для корневого элемента базового тултипа
`,control:!1,table:{type:{summary:"string"}}},classNameBaseTooltipContentRoot:{description:`Дополнительный CSS-класс для контентной области базового тултипа
`,control:!1,table:{type:{summary:"string"}}},styleTooltip:{description:`Инлайн-стили для кастомизации внешнего вида контейнера тултипа
`,control:{type:"object"},table:{type:{summary:"CSSProperties"}}}},args:{text:"Поясняющая информация о элементе интерфейса",isVisibleTooltip:!0,hover:!0,isStopPropagationClickOnTrigger:!1,noPadding:!1,isToggleClick:!1}},t={name:"Default InfoTooltip",args:{text:"Базовая подсказка с иконкой информации"}},o={args:{noPadding:!0,text:e.jsxs("div",{className:n.infoTooltipTextWrapper,children:[e.jsx(a,{type:"p1",children:"Важная информация"}),e.jsx(a,{type:"description",children:"Это расширенная подсказка с форматированным содержимым и переносами строк"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Default InfoTooltip",
  args: {
    text: "Базовая подсказка с иконкой информации"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    noPadding: true,
    text: <div className={styles.infoTooltipTextWrapper}>\r
        <Text type={"p1"}>Важная информация</Text>\r
        <Text type={"description"}>\r
          Это расширенная подсказка с форматированным содержимым и переносами строк\r
        </Text>\r
      </div>
  }
}`,...o.parameters?.docs?.source}}};const x=["Default","WithFormattedContent"];export{t as Default,o as WithFormattedContent,x as __namedExportsOrder,b as default};
