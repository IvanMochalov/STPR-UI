import{j as t}from"./iframe-DsoVLqtF.js";import{T as r}from"./Text-Da_aKhKS.js";import"./preload-helper-DCNYn41m.js";import"./clsx-B-dksMZM.js";const c="_typesColumn_6cnbu_1",d="_ellipsisBox_6cnbu_8",m="_allTypesColumn_6cnbu_14",a={typesColumn:c,ellipsisBox:d,allTypesColumn:m},T={title:"Components/Text",component:r,tags:["autodocs"],argTypes:{type:{description:`Типографический стиль текста. Определяет размер, шрифт и начертание:
- "h1" - заголовок первого уровня (28px на мобильных, 48px на планшетах+)
- "h3" - заголовок третьего уровня (24px на мобильных, 36px на планшетах+)
- "p1" - основной параграф (16px на мобильных, 20px на планшетах+)
- "p2" - вторичный параграф (16px на всех устройствах)
- "description" - описание (14px на мобильных, 16px на планшетах+)
- "link" - стиль ссылки (16px на мобильных, 18px на планшетах+)
`,control:{type:"select"},options:["h1","h3","p1","p2","description","link"],table:{type:{summary:"TTextType",detail:'"h1" | "h3" | "p1" | "p2" | "description" | "link"'}}},children:{description:`Содержимое текстового элемента. Может быть строкой или React-компонентом.
`,control:{type:"text"},table:{type:{summary:"string | ReactNode"}}},color:{description:`Кастомный цвет текста. Переопределяет стандартные цвета типографики.
`,control:{type:"color"},table:{type:{summary:"string"}}},title:{description:`Текст всплывающей подсказки при наведении (HTML-атрибут title).
`,control:{type:"text"},table:{type:{summary:"string"}}},classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента текста
`,control:!1,table:{type:{summary:"string"}}},style:{description:`Инлайн-стили для кастомизации внешнего вида текста
`,control:{type:"object"},table:{type:{summary:"React.CSSProperties"}}},onClick:{description:"Callback-функция, вызываемая при клике на текстовый элемент.\nАвтоматически добавляет курсор-указатель если `isCursorPointerByOnClick=true`\n",control:!1,table:{type:{summary:"(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void"}}},isEllipsis:{description:`Включить обрезку текста с многоточием при переполнении.
Активирует CSS-свойства: white-space: nowrap, overflow: hidden, text-overflow: ellipsis
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isCursorPointer:{description:"Принудительно установить курсор-указатель при наведении.\nИгнорируется если `onClick` установлен и `isCursorPointerByOnClick=true`\n",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},ref:{control:!1},isCursorPointerByOnClick:{description:"Автоматически добавлять курсор-указатель при наличии `onClick` обработчика.\n",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}},parameters:{docs:{description:{component:`
Базовый текстовый компонент для типографики с поддержкой различных стилей и адаптивным дизайном.

## Особенности:
- **Адаптивная типографика** - размеры шрифтов изменяются на разных \`breakpoints\`
- **Два шрифта** - основной \`(--spui-font-family-main)\` и заголовочный \`(--spui-font-family-title)\`
- **Автоматический \`cursor pointer\`** при наличии обработчика клика
- **Поддержка обрезки текста** с многоточием через \`isEllipsis\`

## Типографическая система:
- **Заголовки (h1, h3)** - используют шрифт заголовков с жирным начертанием
- **Параграфы (p1, p2)** - основной контент с адаптивными размерами
- **Описания (description)** - мелкий текст для дополнительной информации
- **Ссылки (link)** - стилизованные как кликабельные элементы

## Адаптивность:
Все типы текста адаптируются под разные разрешения устройств

## Рекомендации по использованию:
Используйте для всего текстового контента для обеспечения единообразия типографики.

### Базовое использование

\`\`\`jsx
<Text>Заголовок страницы</Text>
<Text type="h1">Заголовок страницы</Text>
<Text type="h3">Заголовок страницы</Text>
<Text type="p1">Основной текст контента</Text>
<Text type="p2">Основной текст контента</Text>
<Text type="link" onClick={handleClick}>Кликаемая ссылка</Text>
<Text type="description">Кликаемая ссылка</Text>
<Text isEllipsis>Длинный текст который будет обрезан если не поместится</Text>
\`\`\`
        `}}},args:{children:"Text",isCursorPointer:!1,isEllipsis:!1,isCursorPointerByOnClick:!0,title:"Text"},render:e=>t.jsxs("div",{className:a.typesColumn,children:[t.jsx(r,{...e,type:"h1",children:`${e.children} with type="h1"`}),t.jsx(r,{...e,type:"h3",children:`${e.children} with type="h1"`}),t.jsx(r,{...e,type:"p1",children:`${e.children} with type="p1"`}),t.jsx(r,{...e,type:"p2",children:`${e.children} with type="p2"`}),t.jsx(r,{...e,type:"description",children:`${e.children} with type="description"`}),t.jsx(r,{...e,type:"link",children:`${e.children} with type="link"`}),t.jsx(r,{...e,children:`${e.children} without parameter type`})]})},s={name:"Default Text"},n={name:"Text with Ellipsis",args:{children:"Очень длинный текст который не помещается в одну строку и будет обрезан с многоточием",isEllipsis:!0},render:e=>t.jsx("div",{className:a.ellipsisBox,children:t.jsx(r,{...e})})},i={args:{children:"Кликаемый текст (нажми меня)",onClick:()=>alert("Текст был кликнут!")},render:e=>t.jsx(r,{...e})},l={name:"Text with Custom Color",args:{children:"Текст с кастомным цветом",color:"#ff6b6b",type:"h3"},render:e=>t.jsx(r,{...e})},o={name:"Text with Title Attribute",args:{children:"Наведи курсор чтобы увидеть подсказку",title:"Это всплывающая подсказка с дополнительной информацией"},render:e=>t.jsx(r,{...e})},p={name:"All Text Types",args:{children:"Пример текста"},render:e=>t.jsxs("div",{className:a.allTypesColumn,children:[t.jsx(r,{...e,type:"h1",children:"Заголовок H1 - Главный заголовок"}),t.jsx(r,{...e,type:"h3",children:"Заголовок H3 - Подзаголовок"}),t.jsx(r,{...e,type:"p1",children:"Параграф P1 - Основной текст"}),t.jsx(r,{...e,type:"p2",children:"Параграф P2 - Второстепенный текст"}),t.jsx(r,{...e,type:"description",children:"Описание - Дополнительная информация"}),t.jsx(r,{...e,type:"link",children:"Ссылка - Кликаемый элемент"}),t.jsx(r,{...e,children:"Без типа - Стандартный текст"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Default Text"
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Text with Ellipsis",
  args: {
    children: "Очень длинный текст который не помещается в одну строку и будет обрезан с многоточием",
    isEllipsis: true
  },
  render: args => <div className={styles.ellipsisBox}>\r
      <Text {...args} />\r
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Кликаемый текст (нажми меня)",
    onClick: () => alert("Текст был кликнут!")
  },
  render: args => <Text {...args} />
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Text with Custom Color",
  args: {
    children: "Текст с кастомным цветом",
    color: "#ff6b6b",
    type: "h3"
  },
  render: args => <Text {...args} />
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Text with Title Attribute",
  args: {
    children: "Наведи курсор чтобы увидеть подсказку",
    title: "Это всплывающая подсказка с дополнительной информацией"
  },
  render: args => <Text {...args} />
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "All Text Types",
  args: {
    children: "Пример текста"
  },
  render: args => <div className={styles.allTypesColumn}>\r
      <Text {...args} type="h1">\r
        Заголовок H1 - Главный заголовок\r
      </Text>\r
      <Text {...args} type="h3">\r
        Заголовок H3 - Подзаголовок\r
      </Text>\r
      <Text {...args} type="p1">\r
        Параграф P1 - Основной текст\r
      </Text>\r
      <Text {...args} type="p2">\r
        Параграф P2 - Второстепенный текст\r
      </Text>\r
      <Text {...args} type="description">\r
        Описание - Дополнительная информация\r
      </Text>\r
      <Text {...args} type="link">\r
        Ссылка - Кликаемый элемент\r
      </Text>\r
      <Text {...args}>Без типа - Стандартный текст</Text>\r
    </div>
}`,...p.parameters?.docs?.source}}};const C=["Default","WithEllipsis","ClickableText","CustomColor","WithTitle","AllTypes"];export{p as AllTypes,i as ClickableText,l as CustomColor,s as Default,n as WithEllipsis,o as WithTitle,C as __namedExportsOrder,T as default};
