import{j as t}from"./iframe-DsoVLqtF.js";import{B as i}from"./BaseTooltip-CyUiU66m.js";import{B as c}from"./Button-zrte1TL4.js";import"./preload-helper-DCNYn41m.js";import"./clsx-B-dksMZM.js";import"./Icon-CcD0Smza.js";import"./Spinner-D4Zhwk-k.js";const d="_decoratorWrapper_120tq_1",p="_hintMuted_120tq_7",s={decoratorWrapper:d,hintMuted:p},y={title:"Components/BaseTooltip",component:i,tags:["autodocs"],argTypes:{text:{description:"Содержимое тултипа. Может быть строкой или React-компонентом\nПоддерживает переносы строк через `white-space: pre-line`\n",control:{type:"text"},table:{type:{summary:"string | ReactNode"}}},noPadding:{description:`Убрать внутренние отступы (padding) тултипа
`,control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента тултипа
`,control:!1,table:{type:{summary:"string"}}},classNameContentRoot:{description:`Дополнительный CSS-класс для контентной области тултипа
`,control:!1,table:{type:{summary:"string"}}},style:{description:`Инлайн-стили для кастомизации позиционирования и внешнего вида
`,control:{type:"object"}}},parameters:{docs:{description:{component:`
Базовый компонент тултипа для отображения всплывающих подсказок.

## Особенности:
- Автоматическая ширина по содержимому (width: max-content)
- Адаптивная максимальная ширина:
  - Мобильные: 300px
  - Планшеты (sm): 450px  
  - Десктоп (xl): 600px
- Минимальная ширина 160px
- Адаптивные отступы:
  - Мобильные: 12px
  - Планшеты и выше: 20px
- Тень для визуального отделения от фона
- Кастомный скроллбар при переполнении
- Поддержка многострочного текста с переносами
- Плавная анимация появления/исчезновения

## Рекомендации по использованию:
Компонент обычно используется как часть составных компонентов тултипов.
Для прямого использования требуется ручное управление позиционированием.

### Базовое использование

\`\`\`jsx
<BaseTooltip
  text={"Текст для всплывающего сообщения"}
/>
\`\`\`
        `}}},decorators:[n=>t.jsx("div",{className:s.decoratorWrapper,children:t.jsx(n,{})})]},e={name:"Default Tooltip",args:{text:"Дефолтный тултип с базовыми стилями",noPadding:!1}},o={name:"Tooltip Without Padding",args:{text:"Тултип без внутренних отступов",noPadding:!0}},r={name:"Tooltip with Custom Styles",args:{text:"Тултип с кастомными стилями",style:{backgroundColor:"#f0f8ff",border:"2px solid #007bff",borderRadius:"8px"}}},a={name:"Tooltip with React Node",args:{text:t.jsxs("div",{children:[t.jsx("strong",{children:"Тултип с React-компонентом"}),t.jsx("br",{}),t.jsx("span",{className:s.hintMuted,children:"Может содержать любые React-элементы"}),t.jsx("br",{}),t.jsx(c,{onClick:()=>alert("Кнопка в тултипе!"),children:"Пример кнопки"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default Tooltip",
  args: {
    text: "Дефолтный тултип с базовыми стилями",
    noPadding: false
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Tooltip Without Padding",
  args: {
    text: "Тултип без внутренних отступов",
    noPadding: true
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Tooltip with Custom Styles",
  args: {
    text: "Тултип с кастомными стилями",
    style: {
      backgroundColor: "#f0f8ff",
      border: "2px solid #007bff",
      borderRadius: "8px"
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Tooltip with React Node",
  args: {
    text: <div>\r
        <strong>Тултип с React-компонентом</strong>\r
        <br />\r
        <span className={styles.hintMuted}>Может содержать любые React-элементы</span>\r
        <br />\r
        <Button onClick={() => alert("Кнопка в тултипе!")}>Пример кнопки</Button>\r
      </div>
  }
}`,...a.parameters?.docs?.source}}};const b=["Default","NoPadding","WithCustomStyles","WithReactNode"];export{e as Default,o as NoPadding,r as WithCustomStyles,a as WithReactNode,b as __namedExportsOrder,y as default};
