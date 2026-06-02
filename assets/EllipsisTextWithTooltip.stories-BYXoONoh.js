import{j as e}from"./iframe-DFzgFXfL.js";import{E as o}from"./EllipsisTextWithTooltip-Cfev_qnr.js";import"./preload-helper-DCNYn41m.js";import"./clsx-B-dksMZM.js";import"./Text-Cmw29Q9M.js";import"./Tooltip-CAn8cC1X.js";import"./BaseTooltip-70cfOlMv.js";import"./Icon-FLtHPxG2.js";import"./Potral-BSVlFBsR.js";import"./index-DP6wETD2.js";import"./index-sQF5gpHW.js";const m="_typesColumn_11hzi_1",c="_inheritFontWrapper_11hzi_9",x="_demoBox_11hzi_14",h="_demoBoxNarrow_11hzi_20",y="_demoBoxInheritFont_11hzi_26",u="_demoHint_11hzi_33",s={typesColumn:m,inheritFontWrapper:c,demoBox:x,demoBoxNarrow:h,demoBoxInheritFont:y,demoHint:u},F={title:"Components/EllipsisTextWithTooltip",component:o,tags:["autodocs"],argTypes:{text:{description:`Текст для отображения. При переполнении контейнера будет обрезан с многоточием и покажет тултип при наведении.
`,control:{type:"text"},table:{type:{summary:"string | ReactNode"}}},type:{description:`Типографический стиль текста. Определяет размер, шрифт и начертание:
- "h1" - заголовок первого уровня (28px на мобильных, 48px на планшетах+)
- "h3" - заголовок третьего уровня (24px на мобильных, 36px на планшетах+)
- "p1" - основной параграф (16px на мобильных, 20px на планшетах+)
- "p2" - вторичный параграф (16px на всех устройствах)
- "description" - описание (14px на мобильных, 16px на планшетах+)
- "link" - стиль ссылки (16px на мобильных, 18px на планшетах+)
`,control:{type:"select"},options:["h1","h3","p1","p2","description","link"],table:{type:{summary:"TTextType",detail:'"h1" | "h3" | "p1" | "p2" | "description" | "link"'}}},color:{description:`Кастомный цвет текста. Переопределяет стандартные цвета типографики.
`,control:{type:"color"},table:{type:{summary:"string"}}},title:{description:`Текст всплывающей подсказки при наведении (HTML-атрибут title).
`,control:{type:"text"},table:{type:{summary:"string"}}},classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента компонента
`,control:!1,table:{type:{summary:"string"}}},classNameTooltipRoot:{description:`Дополнительный CSS-класс для корневого элемента тултипа (триггера)
`,control:!1,table:{type:{summary:"string"}}},classNameBaseTooltipContentRoot:{description:`Дополнительный CSS-класс для контентной области базового тултипа
`,control:!1,table:{type:{summary:"string"}}},classNameBaseTooltipRoot:{description:`Дополнительный CSS-класс для корневого элемента базового тултипа
`,control:!1,table:{type:{summary:"string"}}},style:{description:`Инлайн-стили для кастомизации внешнего вида текста
`,control:{type:"object"},table:{type:{summary:"React.CSSProperties"}}},onClick:{description:"Callback-функция, вызываемая при клике на текстовый элемент.\nАвтоматически добавляет курсор-указатель если `isCursorPointerByOnClick=true`\n",control:!1,table:{type:{summary:"(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void"}}},isCursorPointer:{description:"Принудительно установить курсор-указатель при наведении.\nИгнорируется если `onClick` установлен и `isCursorPointerByOnClick=true`\n",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isCursorPointerByOnClick:{description:"Автоматически добавлять курсор-указатель при наличии `onClick` обработчика.\n",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},isWithFixedEnd:{description:`Показывать окончание текста (например, расширение файла) при обрезке.
Полезно для отображения имен файлов, где важно видеть расширение даже при обрезанном названии.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isInheritFontStyles:{description:`Наследовать стили шрифта от родительского элемента.
Если true, компонент будет использовать наследуемые значения font-size, font-weight, font-style и font-family вместо стандартных стилей.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultTooltipPosition:{description:`Позиция тултипа относительно текста. Определяет где будет отображаться тултип при наведении.
`,control:{type:"select"},options:["top","bottom","left","right"],table:{type:{summary:"ETooltipPosition"}}}},parameters:{docs:{description:{component:`
Компонент для отображения текста с автоматическим определением переполнения и показом тултипа с полным текстом при наведении.

## Особенности:
- **Автоматическое определение переполнения** - проверяет, обрезан ли текст через сравнение \`scrollWidth\` и \`clientWidth\`
- **Умный тултип** - показывается только когда текст действительно обрезан
- **Наследование всех свойств Text** - поддерживает все типографические стили и пропсы
- **Автоматическая обрезка** - всегда включает \`isEllipsis=true\` для текста
- **Производительность** - проверка переполнения происходит только при изменении текста
- **Фиксированный конец текста** - опция \`isWithFixedEnd\` позволяет отображать окончание текста (например, расширение файла) при обрезке
- **Наследование стилей шрифта** - опция \`isInheritFontStyles\` позволяет компоненту наследовать стили шрифта от родительского элемента

## Поведение:
- Компонент автоматически определяет, помещается ли текст в доступную ширину
- Если текст обрезан (появляется многоточие), при наведении показывается тултип с полным текстом
- Если текст полностью помещается, тултип не отображается даже при наведении
- При \`isWithFixedEnd=true\` окончание текста (последнее слово или расширение файла) отображается после многоточия
- Поддерживает все типографические стили родительского Text компонента
- При \`isInheritFontStyles=true\` компонент использует наследуемые значения родителя \`font-size\`, \`font-weight\`, \`font-style\` и \`font-family\`

## Рекомендации по использованию:
Идеально подходит для таблиц, карточек и любых контейнеров с ограниченной шириной, где текст может быть обрезан.

### Базовое использование

\`\`\`jsx
<div style={{ width: "200px" }}>
  <EllipsisTextWithTooltip 
    text="Очень длинный текст который может не поместиться в контейнер"
    type="h1"
  />
</div>
\`\`\`

### С фиксированным окончанием (для файлов)

\`\`\`jsx
<div style={{ width: "150px" }}>
  <EllipsisTextWithTooltip 
    text="очень-длинное-название-файла-с-расширением.pdf"
    isWithFixedEnd={true}
    type="p2"
  />
</div>
\`\`\`

### С наследуемыми стилями шрифта

\`\`\`jsx
<div style={{ width: "200px", fontSize: "18px", fontWeight: "bold" }}>
  <EllipsisTextWithTooltip 
    text="Текст с наследуемыми стилями шрифта"
    isInheritFontStyles={true}
  />
</div>
\`\`\`
        `}}},args:{text:"Ellipsis Text With Tooltip",title:"Ellipsis Text With Tooltip",isCursorPointer:!1,isCursorPointerByOnClick:!0,isWithFixedEnd:!1,isInheritFontStyles:!1},render:t=>e.jsxs("div",{className:s.typesColumn,children:[e.jsx(o,{...t,type:"h1",text:`${t.text} with type="h1"`}),e.jsx(o,{...t,type:"h3",text:`${t.text} with type="h1"`}),e.jsx(o,{...t,type:"p1",text:`${t.text} with type="p1"`}),e.jsx(o,{...t,type:"p2",text:`${t.text} with type="p2"`}),e.jsx(o,{...t,type:"description",text:`${t.text} with type="description"`}),e.jsx(o,{...t,type:"link",text:`${t.text} with type="link"`}),e.jsx(o,{...t,text:`${t.text} without parameter type`}),e.jsx(o,{...t,isWithFixedEnd:!0,text:`${t.text}, with long text and fixed end!`}),e.jsx("div",{className:s.inheritFontWrapper,children:e.jsx(o,{...t,isInheritFontStyles:!0,text:`${t.text} with inherited font styles`})})]})},i={name:"Default Ellipsis Text With Tooltip"},r={name:"Long Text with Tooltip",args:{text:"Очень длинный текст который точно не поместится в ограниченный контейнер и будет обрезан с многоточием"},render:t=>e.jsxs("div",{className:s.demoBox,children:[e.jsx(o,{...t}),e.jsx("div",{className:s.demoHint,children:"(Наведите на текст чтобы увидеть тултип)"})]})},n={name:"Text with fixed end",args:{isWithFixedEnd:!0,text:"SomeLongNameOfExampleFile.pdf"},render:t=>e.jsxs("div",{className:s.demoBox,children:[e.jsx(o,{...t}),e.jsx("div",{className:s.demoHint,children:"(Наведите на текст чтобы увидеть тултип)"})]})},l={name:"Short Text without Tooltip",args:{text:"Короткий текст"},render:t=>e.jsxs("div",{className:s.demoBox,children:[e.jsx(o,{...t}),e.jsx("div",{className:s.demoHint,children:"(Тултип не покажется - текст помещается)"})]})},a={name:"Clickable Text with Tooltip",args:{text:"Кликаемый текст с тултипом при обрезке",onClick:()=>alert("Текст был кликнут!")},render:t=>e.jsx("div",{className:s.demoBoxNarrow,children:e.jsx(o,{...t})})},p={name:"Custom color",args:{text:"Текст с кастомным цветом",color:"#ff0000"},render:t=>e.jsx("div",{className:s.demoBox,children:e.jsx(o,{...t})})},d={name:"Inherit font styles",args:{text:"Текст с наследуемыми стилями шрифта",isInheritFontStyles:!0},render:t=>e.jsx("div",{className:s.demoBoxInheritFont,children:e.jsx(o,{...t})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Default Ellipsis Text With Tooltip"
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Long Text with Tooltip",
  args: {
    text: "Очень длинный текст который точно не поместится в ограниченный контейнер и будет обрезан с многоточием"
  },
  render: args => <div className={styles.demoBox}>\r
      <EllipsisTextWithTooltip {...args} />\r
      <div className={styles.demoHint}>(Наведите на текст чтобы увидеть тултип)</div>\r
    </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Text with fixed end",
  args: {
    isWithFixedEnd: true,
    text: "SomeLongNameOfExampleFile.pdf"
  },
  render: args => <div className={styles.demoBox}>\r
      <EllipsisTextWithTooltip {...args} />\r
      <div className={styles.demoHint}>(Наведите на текст чтобы увидеть тултип)</div>\r
    </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Short Text without Tooltip",
  args: {
    text: "Короткий текст"
  },
  render: args => <div className={styles.demoBox}>\r
      <EllipsisTextWithTooltip {...args} />\r
      <div className={styles.demoHint}>(Тултип не покажется - текст помещается)</div>\r
    </div>
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Clickable Text with Tooltip",
  args: {
    text: "Кликаемый текст с тултипом при обрезке",
    onClick: () => alert("Текст был кликнут!")
  },
  render: args => <div className={styles.demoBoxNarrow}>\r
      <EllipsisTextWithTooltip {...args} />\r
    </div>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Custom color",
  args: {
    text: "Текст с кастомным цветом",
    color: "#ff0000"
  },
  render: args => <div className={styles.demoBox}>\r
      <EllipsisTextWithTooltip {...args} />\r
    </div>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Inherit font styles",
  args: {
    text: "Текст с наследуемыми стилями шрифта",
    isInheritFontStyles: true
  },
  render: args => <div className={styles.demoBoxInheritFont}>\r
      <EllipsisTextWithTooltip {...args} />\r
    </div>
}`,...d.parameters?.docs?.source}}};const w=["Default","WithLongText","TextWithFixEnd","WithShortText","ClickableWithTooltip","CustomColor","InheritFontStyles"];export{a as ClickableWithTooltip,p as CustomColor,i as Default,d as InheritFontStyles,n as TextWithFixEnd,r as WithLongText,l as WithShortText,w as __namedExportsOrder,F as default};
