import{j as e}from"./iframe-DsoVLqtF.js";import{B as c}from"./Button-zrte1TL4.js";import{S as s}from"./Spinner-D4Zhwk-k.js";import{T as t}from"./Text-Da_aKhKS.js";import"./preload-helper-DCNYn41m.js";import"./clsx-B-dksMZM.js";import"./Icon-CcD0Smza.js";const d="_allSizesSpinnerWrapper_1j5bk_1",m="_listItemWrapper_1j5bk_14",x="_listItemWrapper__description_1j5bk_20",u="_customLoadingText_1j5bk_24",S="_customColorsGrid_1j5bk_29",r={allSizesSpinnerWrapper:d,listItemWrapper:m,listItemWrapper__description:x,customLoadingText:u,customColorsGrid:S},j={title:"Components/Spinner",component:s,tags:["autodocs"],argTypes:{size:{description:`Размер спиннера. Доступные варианты:
- "sm" - маленький (16px)
- "md" - средний (24px, по умолчанию)
- "lg" - большой (32px)
- "xl" - очень большой (48px)
`,control:{type:"select"},options:["sm","md","lg","xl"],table:{type:{summary:"SpinnerSize",detail:"'sm' | 'md' | 'lg' | 'xl'"},defaultValue:{summary:'"md"'}}},color:{description:`Цвет спиннера. Может быть задан в любом CSS-формате (hex, rgb, hsl, имя цвета).
`,control:{type:"color"},table:{type:{summary:"string"},defaultValue:{summary:'"#036bfd"'}}},classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента спиннера
`,control:!1,table:{type:{summary:"string"}}},loadingText:{description:`Текст под спиннером. В конце строки автоматически отображаются четыре точки с волновой анимацией (поочерёдное поднятие и опускание). Шрифт точек совпадает с текстом.
`,control:{type:"text"},table:{type:{summary:"string"}}},classNameSpinnerTextLine:{description:`Дополнительный CSS-класс для строки с текстом загрузки (блок с loadingText и анимированными точками). Применяется только при переданном loadingText. Позволяет переопределить шрифт, цвет, размер и другие стили строки.
`,control:!1,table:{type:{summary:"string"}}}},parameters:{docs:{description:{component:`
Компонент спиннера для отображения индикатора загрузки с плавной анимацией.

## Особенности:
- **Плавная анимация** - двойная анимация вращения и клиппинга для визуально приятного эффекта
- **Четыре размера** - от маленького до очень большого для разных контекстов использования
- **Настраиваемый цвет** - поддержка любых CSS-цветов через свойство color
- **Доступность** - встроенные ARIA-атрибуты для screen readers
- **CSS-переменные** - гибкая настройка через CSS Custom Properties
- **Производительность** - оптимизированная анимация с использованием CSS transforms
- **Текст загрузки (loadingText)** - опциональная строка под спиннером; в конце отображаются четыре точки с волновой анимацией (поочерёдное поднятие и опускание, как волна на трибунах). Текст переносится по строкам, точки остаются в конце последней строки.

## Визуальные эффекты:
- **Вращение** - непрерывное вращение внешнего контейнера
- **Клиппинг-анимация** - плавное раскрытие и закрытие сегментов круга
- **Адаптивная толщина** - толщина линии увеличивается с размером спиннера
- **Плавность** - анимации используют ease-in-out для естественного движения
- **Текст загрузки** - при переданном \`loadingText\` под спиннером показывается строка с текстом и четырьмя точками в конце
- **Волна точек** - четыре точки в конце строки анимированы поочерёдным подъёмом и опусканием (как волна на трибунах); шрифт точек совпадает с текстом

## Размеры и толщина:
- **sm**: диаметр 16px - толщина 2px
- **md**: диаметр 24px - толщина 3px
- **lg**: диаметр 32px - толщина 4px
- **xl**: диаметр 48px - толщина 5px

## Рекомендации по использованию:
Используйте для индикации процессов загрузки, обработки данных или ожидания действий.

Компонент \`Spinner\` уже используется в компоненте \`Button\` с параметром \`loading={true}\`)

### Базовое использование

\`\`\`jsx
// Стандартный спиннер
<Spinner />

// Спиннер определенного размера
<Spinner size="lg" />

// Спиннер с кастомным цветом
<Spinner color="#ff6b6b" />

// Спиннер с дополнительными классами
<Spinner 
  size="xl" 
  color="var(--accent-color)" 
  classNameRoot="custom-spinner"
/>

// Спиннер с текстом загрузки (четыре точки в конце анимированы волной)
<Spinner loadingText="Загрузка" />
<Spinner size="lg" color="#036bfd" loadingText="Подождите" />
\`\`\`
        `}}},args:{size:"md",color:"#036bfd",loadingText:""}},n={name:"Default Spinner",args:{size:"md",color:"#036bfd"}},i={name:"All Spinner Sizes",render:()=>e.jsxs("div",{className:r.allSizesSpinnerWrapper,children:[e.jsxs("div",{className:r.listItemWrapper,children:[e.jsx(s,{size:"sm"}),e.jsx(t,{type:"description",classNameRoot:r.listItemWrapper__description,children:"Small (16px)"})]}),e.jsxs("div",{className:r.listItemWrapper,children:[e.jsx(s,{size:"md"}),e.jsx(t,{type:"description",classNameRoot:r.listItemWrapper__description,children:"Medium (24px)"})]}),e.jsxs("div",{className:r.listItemWrapper,children:[e.jsx(s,{size:"lg"}),e.jsx(t,{type:"description",classNameRoot:r.listItemWrapper__description,children:"Large (32px)"})]}),e.jsxs("div",{className:r.listItemWrapper,children:[e.jsx(s,{size:"xl"}),e.jsx(t,{type:"description",classNameRoot:r.listItemWrapper__description,children:"X-Large (48px)"})]})]})},o={name:"Spinner with Custom Colors",render:()=>e.jsxs("div",{className:r.customColorsGrid,children:[e.jsxs("div",{className:r.listItemWrapper,children:[e.jsx(s,{color:"#036bfd"}),e.jsx(t,{type:"description",classNameRoot:r.listItemWrapper__description,children:"Primary Blue"})]}),e.jsxs("div",{className:r.listItemWrapper,children:[e.jsx(s,{color:"#28a745"}),e.jsx(t,{type:"description",classNameRoot:r.listItemWrapper__description,children:"Success Green"})]}),e.jsxs("div",{className:r.listItemWrapper,children:[e.jsx(s,{color:"#dc3545"}),e.jsx(t,{type:"description",classNameRoot:r.listItemWrapper__description,children:"Error Red"})]}),e.jsxs("div",{className:r.listItemWrapper,children:[e.jsx(s,{color:"#ffc107"}),e.jsx(t,{type:"description",classNameRoot:r.listItemWrapper__description,children:"Warning Yellow"})]}),e.jsxs("div",{className:r.listItemWrapper,children:[e.jsx(s,{color:"#6f42c1"}),e.jsx(t,{type:"description",classNameRoot:r.listItemWrapper__description,children:"Purple"})]}),e.jsxs("div",{className:r.listItemWrapper,children:[e.jsx(s,{color:"#fd7e14"}),e.jsx(t,{type:"description",classNameRoot:r.listItemWrapper__description,children:"Orange"})]})]})},a={name:"Spinner in Button Loading State",render:()=>e.jsx(c,{loading:!0,children:"Загрузка..."})},p={name:"Spinner with loadingText",args:{loadingText:"Загружаем данные о пользователе",size:"lg",color:"#036bfd"},parameters:{docs:{description:{story:"Текст под спиннером. В конце строки четыре точки с волновой анимацией — поочерёдное поднятие и опускание (как волна на трибунах)."}}}},l={name:"Spinner with long loadingText",args:{loadingText:"Пожалуйста, подождите",size:"md",classNameSpinnerTextLine:r.customLoadingText}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Default Spinner",
  args: {
    size: "md",
    color: "#036bfd"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "All Spinner Sizes",
  render: () => {
    return <div className={styles.allSizesSpinnerWrapper}>\r
        <div className={styles.listItemWrapper}>\r
          <Spinner size="sm" />\r
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>\r
            Small (16px)\r
          </Text>\r
        </div>\r
        <div className={styles.listItemWrapper}>\r
          <Spinner size="md" />\r
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>\r
            Medium (24px)\r
          </Text>\r
        </div>\r
        <div className={styles.listItemWrapper}>\r
          <Spinner size="lg" />\r
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>\r
            Large (32px)\r
          </Text>\r
        </div>\r
        <div className={styles.listItemWrapper}>\r
          <Spinner size="xl" />\r
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>\r
            X-Large (48px)\r
          </Text>\r
        </div>\r
      </div>;
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Spinner with Custom Colors",
  render: () => {
    return <div className={styles.customColorsGrid}>\r
        <div className={styles.listItemWrapper}>\r
          <Spinner color="#036bfd" />\r
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>\r
            Primary Blue\r
          </Text>\r
        </div>\r
        <div className={styles.listItemWrapper}>\r
          <Spinner color="#28a745" />\r
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>\r
            Success Green\r
          </Text>\r
        </div>\r
        <div className={styles.listItemWrapper}>\r
          <Spinner color="#dc3545" />\r
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>\r
            Error Red\r
          </Text>\r
        </div>\r
        <div className={styles.listItemWrapper}>\r
          <Spinner color="#ffc107" />\r
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>\r
            Warning Yellow\r
          </Text>\r
        </div>\r
        <div className={styles.listItemWrapper}>\r
          <Spinner color="#6f42c1" />\r
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>\r
            Purple\r
          </Text>\r
        </div>\r
        <div className={styles.listItemWrapper}>\r
          <Spinner color="#fd7e14" />\r
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>\r
            Orange\r
          </Text>\r
        </div>\r
      </div>;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Spinner in Button Loading State",
  render: () => {
    return <Button loading={true}>Загрузка...</Button>;
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Spinner with loadingText",
  args: {
    loadingText: "Загружаем данные о пользователе",
    size: "lg",
    color: "#036bfd"
  },
  parameters: {
    docs: {
      description: {
        story: "Текст под спиннером. В конце строки четыре точки с волновой анимацией — поочерёдное поднятие и опускание (как волна на трибунах)."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Spinner with long loadingText",
  args: {
    loadingText: "Пожалуйста, подождите",
    size: "md",
    classNameSpinnerTextLine: styles.customLoadingText
  }
}`,...l.parameters?.docs?.source}}};const v=["Default","AllSizes","CustomColors","ButtonLoading","WithLoadingText","WithLoadingTextLong"];export{i as AllSizes,a as ButtonLoading,o as CustomColors,n as Default,p as WithLoadingText,l as WithLoadingTextLong,v as __namedExportsOrder,j as default};
