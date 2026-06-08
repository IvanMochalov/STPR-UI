import{j as t}from"./iframe-DsoVLqtF.js";import{T as r}from"./TextWithLabel-rz9Z5UdS.js";import{c as m}from"./clsx-B-dksMZM.js";import"./preload-helper-DCNYn41m.js";import"./Label-BYw9CxA_.js";import"./Tooltip-B9F4jJYp.js";import"./BaseTooltip-CyUiU66m.js";import"./Icon-CcD0Smza.js";import"./Potral-7FViUbta.js";import"./index-Cz879DlY.js";import"./index-CMC9NNB4.js";import"./Text-Da_aKhKS.js";const b="_textList_jyml0_1",x="_textList_ellipsis_jyml0_7",u="_withEllipsis_jyml0_11",l={textList:b,textList_ellipsis:x,withEllipsis:u},w={title:"Components/TextWithLabel",component:r,tags:["autodocs"],argTypes:{type:{description:`Типографический стиль текста. Определяет размер, шрифт и начертание:
- "h1" - заголовок первого уровня (28px на мобильных, 48px на планшетах+)
- "h3" - заголовок третьего уровня (24px на мобильных, 36px на планшетах+)
- "p1" - основной параграф (16px на мобильных, 20px на планшетах+)
- "p2" - вторичный параграф (16px на всех устройствах)
- "description" - описание (14px на мобильных, 16px на планшетах+)
- "link" - стиль ссылки (16px на мобильных, 18px на планшетах+)
`,control:{type:"select"},options:["h1","h3","p1","p2","description","link"],table:{type:{summary:"TTextType",detail:'"h1" | "h3" | "p1" | "p2" | "description" | "link"'}}},children:{description:`Содержимое текстового элемента. Может быть строкой или React-компонентом.
`,control:{type:"text"},table:{type:{summary:"string | ReactNode"}}},label:{description:`Текст лейбла, отображаемый над основным текстом.
`,control:{type:"text"},table:{type:{summary:"string"}}},required:{description:`Отображает звездочку (*) для обозначения обязательного поля.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},infoTooltipText:{description:`Текст всплывающей подсказки для лейбла.
`,control:{type:"text"},table:{type:{summary:"string"}}},tooltipPosition:{description:`Позиция всплывающей подсказки относительно лейбла.
`,control:{type:"select"},options:["top","bottom","left","right"],table:{type:{summary:"ETooltipPosition"}}},classNameLabelRoot:{description:`Дополнительный CSS-класс для корневого элемента лейбла
`,control:!1,table:{type:{summary:"string"}}},classNameWrapperRoot:{description:"Дополнительный CSS-класс для обертки компонента.\nПри использовании `isEllipsis=true` автоматически добавляется модификатор `spTextWithLabel_ellipsis`\n",control:!1,table:{type:{summary:"string"}}},classNameBaseTooltipRoot:{description:`Дополнительный CSS-класс для тултипа лейбла
`,control:!1,table:{type:{summary:"string"}}},color:{description:`Кастомный цвет текста. Переопределяет стандартные цвета типографики.
`,control:{type:"color"},table:{type:{summary:"string"}}},title:{description:`Текст всплывающей подсказки при наведении (HTML-атрибут title).
`,control:{type:"text"},table:{type:{summary:"string"}}},classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента текста
`,control:!1,table:{type:{summary:"string"}}},style:{description:`Инлайн-стили для кастомизации внешнего вида
`,control:{type:"object"},table:{type:{summary:"React.CSSProperties"}}},onClick:{description:"Callback-функция, вызываемая при клике на текстовый элемент.\nАвтоматически добавляет курсор-указатель если `isCursorPointerByOnClick=true`\n",control:!1,table:{type:{summary:"(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void"}}},isEllipsis:{description:`Включить обрезку всего компонента с многоточием при переполнении.
Активирует CSS-свойство width: 100% для обертки и наследует обрезку текста от компонента Text
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isCursorPointer:{description:"Принудительно установить курсор-указатель при наведении.\nИгнорируется, если `onClick` установлен и `isCursorPointerByOnClick=true`\n",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},ref:{control:!1},isCursorPointerByOnClick:{description:"Автоматически добавлять курсор-указатель при наличии `onClick` обработчика.\n",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}},parameters:{docs:{description:{component:`
Компонент для отображения текста с лейблом. Сочетает в себе функциональность компонентов Text и Label.

## Особенности:
- **Композиция компонентов** - объединяет Text и Label в единый блок
- **Гибкая настройка лейбла** - поддержка обязательных полей, тултипов и кастомизации
- **Наследование всех свойств Text** - полная поддержка типографической системы
- **Адаптивный дизайн** - согласованное поведение на всех устройствах
- **Поддержка обрезки** - \`isEllipsis\` применяется ко всему компоненту, устанавливая ширину 100%

## Использование:
Идеально подходит для форм, карточек и любых интерфейсов, где требуется отображение данных с подписью.

### Базовое использование

\`\`\`jsx
<TextWithLabel 
  label="Имя пользователя"
  type="p1"
>
  Джон Доу
</TextWithLabel>
\`\`\`

### С дополнительными свойствами лейбла

\`\`\`jsx
<TextWithLabel 
  label="Email"
  required={true}
  infoTooltipText="Введите действующий email адрес"
  type="p1"
>
  john.doe@example.com
</TextWithLabel>
\`\`\`

### С обрезкой текста

\`\`\`jsx
<TextWithLabel 
  label="Длинное описание"
  isEllipsis={true}
>
  Очень длинный текст который будет обрезан, если не поместится в контейнер
</TextWithLabel>
\`\`\`
        `}}},args:{label:"Label",children:"Text With Label",isCursorPointer:!1,infoTooltipText:"",required:!1,isEllipsis:!1,isCursorPointerByOnClick:!0,title:"Text With Label"},render:e=>t.jsxs("div",{className:l.textList,children:[t.jsx(r,{...e,type:"h1",children:`${e.children} with type="h1"`}),t.jsx(r,{...e,type:"h3",children:`${e.children} with type="h3"`}),t.jsx(r,{...e,type:"p1",children:`${e.children} with type="p1"`}),t.jsx(r,{...e,type:"p2",children:`${e.children} with type="p2"`}),t.jsx(r,{...e,type:"description",children:`${e.children} with type="description"`}),t.jsx(r,{...e,type:"link",children:`${e.children} with type="link"`}),t.jsx(r,{...e,children:`${e.children} without parameter type`})]})},i={name:"Default Text With Label"},s={name:"Required Field",args:{label:"Обязательное поле",required:!0,children:"Значение поля",type:"p1"},render:e=>t.jsx(r,{...e})},a={args:{label:"Поле с подсказкой",infoTooltipText:"Это поле требует специального формата ввода",children:"Значение поля",type:"p1"},render:e=>t.jsx(r,{...e})},n={name:"Required Field with Tooltip",args:{label:"Обязательное поле с подсказкой",required:!0,infoTooltipText:"Это поле обязательно для заполнения и требует специального формата",children:"Значение поля",type:"p1"},render:e=>t.jsx(r,{...e})},o={name:"Text With Label with Ellipsis",args:{label:"Длинный текст с обрезкой",children:"Очень длинный текст который не помещается в одну строку и будет обрезан с многоточием",isEllipsis:!0},render:e=>t.jsx("div",{className:l.withEllipsis,children:t.jsx(r,{...e})})},p={name:"Clickable Text With Label",args:{label:"Кликаемый текст",children:"Нажми меня для действия",onClick:()=>alert("Текст был кликнут!")},render:e=>t.jsx(r,{...e})},c={name:"Text With Label with Custom Color",args:{label:"Цветной текст",children:"Текст с кастомным цветом",color:"#ff6b6b",type:"h3"},render:e=>t.jsx(r,{...e})},d={name:"All Types with Advanced Labels",args:{children:"Пример текста"},render:e=>t.jsxs("div",{className:l.textList,children:[t.jsx(r,{...e,label:"Заголовок H1 (обязательный)",required:!0,type:"h1",children:"Главный заголовок страницы"}),t.jsx(r,{...e,label:"Заголовок H3 с подсказкой",infoTooltipText:"Это подзаголовок раздела",type:"h3",children:"Подзаголовок раздела"}),t.jsx(r,{...e,label:"Основной текст",type:"p1",children:"Основной контент страницы с важной информацией"}),t.jsx(r,{...e,label:"Второстепенный текст",type:"p2",children:"Дополнительная информация меньшей важности"}),t.jsx(r,{...e,label:"Описание (обязательное)",required:!0,type:"description",children:"Подробное описание элемента или процесса"}),t.jsx(r,{...e,label:"Ссылка для перехода",type:"link",children:"Кликабельная ссылка на внешний ресурс"}),t.jsx(r,{...e,label:"Стандартный текст",children:"Текст без специального типа"})]})},h={args:{label:"Лейбл",children:"Текст содержимого"},render:e=>t.jsxs("div",{className:m(l.textList,l.textList_ellipsis),children:[t.jsx(r,{...e,label:"Обычный текст",isEllipsis:!1,children:"Этот текст не обрезается"}),t.jsx(r,{...e,label:"Текст с обрезкой",isEllipsis:!0,children:"Этот текст будет обрезан если не поместится"}),t.jsx(r,{...e,label:"Обязательное поле с обрезкой",required:!0,isEllipsis:!0,children:"Обязательное поле с длинным текстом который обрезается"}),t.jsx(r,{...e,label:"Поле с тултипом и обрезкой",infoTooltipText:"Это поле имеет обрезку текста",isEllipsis:!0,children:"Текст с подсказкой и обрезкой содержимого"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Default Text With Label"
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Required Field",
  args: {
    label: "Обязательное поле",
    required: true,
    children: "Значение поля",
    type: "p1"
  },
  render: args => <TextWithLabel {...args} />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Поле с подсказкой",
    infoTooltipText: "Это поле требует специального формата ввода",
    children: "Значение поля",
    type: "p1"
  },
  render: args => <TextWithLabel {...args} />
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Required Field with Tooltip",
  args: {
    label: "Обязательное поле с подсказкой",
    required: true,
    infoTooltipText: "Это поле обязательно для заполнения и требует специального формата",
    children: "Значение поля",
    type: "p1"
  },
  render: args => <TextWithLabel {...args} />
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Text With Label with Ellipsis",
  args: {
    label: "Длинный текст с обрезкой",
    children: "Очень длинный текст который не помещается в одну строку и будет обрезан с многоточием",
    isEllipsis: true
  },
  render: args => <div className={styles.withEllipsis}>\r
      <TextWithLabel {...args} />\r
    </div>
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Clickable Text With Label",
  args: {
    label: "Кликаемый текст",
    children: "Нажми меня для действия",
    onClick: () => alert("Текст был кликнут!")
  },
  render: args => <TextWithLabel {...args} />
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Text With Label with Custom Color",
  args: {
    label: "Цветной текст",
    children: "Текст с кастомным цветом",
    color: "#ff6b6b",
    type: "h3"
  },
  render: args => <TextWithLabel {...args} />
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "All Types with Advanced Labels",
  args: {
    children: "Пример текста"
  },
  render: args => <div className={styles.textList}>\r
      <TextWithLabel {...args} label="Заголовок H1 (обязательный)" required={true} type="h1">\r
        Главный заголовок страницы\r
      </TextWithLabel>\r
      <TextWithLabel {...args} label="Заголовок H3 с подсказкой" infoTooltipText="Это подзаголовок раздела" type="h3">\r
        Подзаголовок раздела\r
      </TextWithLabel>\r
      <TextWithLabel {...args} label="Основной текст" type="p1">\r
        Основной контент страницы с важной информацией\r
      </TextWithLabel>\r
      <TextWithLabel {...args} label="Второстепенный текст" type="p2">\r
        Дополнительная информация меньшей важности\r
      </TextWithLabel>\r
      <TextWithLabel {...args} label="Описание (обязательное)" required={true} type="description">\r
        Подробное описание элемента или процесса\r
      </TextWithLabel>\r
      <TextWithLabel {...args} label="Ссылка для перехода" type="link">\r
        Кликабельная ссылка на внешний ресурс\r
      </TextWithLabel>\r
      <TextWithLabel {...args} label="Стандартный текст">\r
        Текст без специального типа\r
      </TextWithLabel>\r
    </div>
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Лейбл",
    children: "Текст содержимого"
  },
  render: args => <div className={cx(styles.textList, styles.textList_ellipsis)}>\r
      <TextWithLabel {...args} label="Обычный текст" isEllipsis={false}>\r
        Этот текст не обрезается\r
      </TextWithLabel>\r
      <TextWithLabel {...args} label="Текст с обрезкой" isEllipsis={true}>\r
        Этот текст будет обрезан если не поместится\r
      </TextWithLabel>\r
      <TextWithLabel {...args} label="Обязательное поле с обрезкой" required={true} isEllipsis={true}>\r
        Обязательное поле с длинным текстом который обрезается\r
      </TextWithLabel>\r
      <TextWithLabel {...args} label="Поле с тултипом и обрезкой" infoTooltipText="Это поле имеет обрезку текста" isEllipsis={true}>\r
        Текст с подсказкой и обрезкой содержимого\r
      </TextWithLabel>\r
    </div>
}`,...h.parameters?.docs?.source}}};const v=["Default","WithRequiredField","WithTooltip","WithRequiredAndTooltip","WithEllipsis","ClickableText","CustomColor","AllTypesWithAdvancedLabels","EllipsisCombinations"];export{d as AllTypesWithAdvancedLabels,p as ClickableText,c as CustomColor,i as Default,h as EllipsisCombinations,o as WithEllipsis,n as WithRequiredAndTooltip,s as WithRequiredField,a as WithTooltip,v as __namedExportsOrder,w as default};
