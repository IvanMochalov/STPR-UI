import{j as a}from"./iframe-DsoVLqtF.js";import{B as n}from"./Button-zrte1TL4.js";import{E as t}from"./Icon-CcD0Smza.js";import"./preload-helper-DCNYn41m.js";import"./clsx-B-dksMZM.js";import"./Spinner-D4Zhwk-k.js";const g="_allVariants_167rb_1",h="_section_167rb_8",x="_sectionTitle_167rb_14",b="_itemsRow_167rb_20",B="_itemsRowAligned_167rb_26",e={allVariants:g,section:h,sectionTitle:x,itemsRow:b,itemsRowAligned:B},E={title:"Components/Button",component:n,tags:["autodocs"],parameters:{docs:{description:{component:'\nУниверсальная кнопка с вариантами `primary`, `secondary`, `text`, `link` и размерами `md`/ `xl`.\n\n## Основные возможности\n\n- **Четыре варианта стилей**: `primary`, `secondary`, `text`, `link`\n- **Размеры**: `md` и `xl`\n- **Поддержка иконок**: иконки задаются только через `startIconName` и `endIconName` (для `isOnlyIcon` используется только `startIconName`).\n- **Состояния**: `disabled`, `loading`, `full width`\n- **Типы кнопок**: `button`, `submit`, `reset`\n\n## Базовое использование\n\n```jsx\n<Button variant="primary" startIconName={EIconName.Plus}>\n  Кликни меня\n</Button>\n```\n        '}}},argTypes:{variant:{description:`Вариант кнопки:
- 'primary': акцентная
- 'secondary': вторичная
- 'text': текстовая с фоном в hover/focus
- 'link': прозрачная ссылка`,control:{type:"radio"},options:["primary","secondary","text","link"],table:{defaultValue:{summary:"primary"},type:{summary:"TButtonVariant",detail:"'primary' | 'secondary' | 'text' | 'link'"}}},size:{description:"Размер кнопки",control:{type:"radio"},options:["md","xl"],table:{defaultValue:{summary:"xl"},type:{summary:"TButtonSize",detail:"'md' | 'xl'"}}},children:{description:"Текст кнопки. Отображается если isOnlyIcon=false",control:{type:"text"},table:{type:{summary:"ReactNode"}}},disabled:{description:"Блокирует кнопку",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},loading:{description:"Показывает индикатор загрузки вместо иконки. Автоматически блокирует кнопку",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isFullWidth:{description:"Растягивает кнопку на всю ширину родительского контейнера",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isOnlyIcon:{description:"Скрывает текст, отображает только иконку. Убирает лишние отступы",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},noPadding:{description:"Убирает все внутренние отступы. Используется для кастомных размеров",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},type:{description:`HTML-тип кнопки:
- 'button': обычная кнопка
- 'submit': для отправки форм
- 'reset': для сброса форм`,control:{type:"radio"},options:["button","submit","reset"],table:{defaultValue:{summary:"button"},type:{summary:"TButtonType",detail:"'button' | 'submit' | 'reset'"}}},form:{description:"ID формы для кнопок типа submit/reset. Позволяет управлять формой извне",control:!1,table:{type:{summary:"string"}}},startIconName:{description:"Иконка в начале",control:{type:"select"},options:[...Object.values(t),void 0]},endIconName:{description:"Иконка в конце",control:{type:"select"},options:[...Object.values(t),void 0]},startIconRotate:{description:"Угол поворота стартовой иконки в градусах. Полезно для анимаций",control:{type:"range",min:0,max:360},table:{defaultValue:{summary:"0"}}},endIconRotate:{description:"Угол поворота конечной иконки в градусах. Полезно для анимаций",control:{type:"range",min:0,max:360},table:{defaultValue:{summary:"0"}}},onClick:{description:"Callback-функция при клике на кнопку. Не вызывается если disabled=true",control:!1,table:{type:{detail:`onClose={(event) => {
  // логика обработки клика по кнопке;
}}`}}},style:{description:"Инлайн-стили для кастомизации внешнего вида",control:{type:"object"}},classNameRoot:{description:"Дополнительный CSS-класс для корневого элемента кнопки",control:!1,table:{type:{summary:"string"}}},classNameTextRoot:{description:"Дополнительный CSS-класс для корневого элемента содержимого кнопки",control:!1,table:{type:{summary:"string"}}}}},r={args:{variant:"primary",size:"xl",children:"Default Button",type:"button",disabled:!1,isFullWidth:!1,noPadding:!1,isOnlyIcon:!1,startIconName:void 0,endIconName:void 0,loading:!1,style:{}}},s={args:{variant:"secondary",children:"Secondary Button"}},o={args:{variant:"text",children:"Text Button"}},i={args:{variant:"link",children:"Link Button"}},c={name:"With Start Icon",args:{variant:"primary",startIconName:t.Plus,children:"Add Item"}},l={name:"With Start And End Icon",args:{variant:"primary",startIconName:t.Plus,endIconName:t.Plus,children:"Primary"}},d={name:"Only Icon",args:{variant:"primary",startIconName:t.Plus,endIconName:t.Trash,isOnlyIcon:!0}},m={name:"Loading",args:{variant:"primary",loading:!0,children:"Saving..."}},u={name:"Disabled",args:{variant:"primary",disabled:!0,children:"Disabled Button"}},p={name:"Full Width",args:{variant:"primary",isFullWidth:!0,children:"Full Width Button"}},y={name:"No Padding",args:{variant:"primary",noPadding:!0,children:"No Padding"}},I={args:{variant:"primary",type:"submit",children:"Submit Form"}},v={name:"With Rotated Icon",args:{variant:"primary",startIconName:t.Trash,startIconRotate:45,children:"Delete"}},N={name:"All Variants Overview",render:()=>a.jsxs("div",{className:e.allVariants,children:[a.jsxs("div",{className:e.section,children:[a.jsx("p",{className:e.sectionTitle,children:"Variants"}),a.jsxs("div",{className:e.itemsRow,children:[a.jsx(n,{variant:"primary",children:"Primary"}),a.jsx(n,{variant:"secondary",children:"Secondary"}),a.jsx(n,{variant:"text",children:"Text"}),a.jsx(n,{variant:"link",children:"Link"})]})]}),a.jsxs("div",{className:e.section,children:[a.jsx("span",{className:e.sectionTitle,children:"Sizes"}),a.jsxs("div",{className:e.itemsRowAligned,children:[a.jsx(n,{size:"md",children:'size = "md"'}),a.jsx(n,{size:"xl",children:'size = "xl'})]})]}),a.jsxs("div",{className:e.section,children:[a.jsx("span",{className:e.sectionTitle,children:"Icons"}),a.jsxs("div",{className:e.itemsRow,children:[a.jsx(n,{variant:"primary",startIconName:t.Plus,children:"Start Icon"}),a.jsx(n,{variant:"primary",endIconName:t.Trash,children:"End Icon"}),a.jsx(n,{variant:"primary",startIconName:t.Plus,endIconName:t.Trash,children:"Both Icons"}),a.jsx(n,{variant:"primary",startIconName:t.Trash,startIconRotate:45,children:"Rotated Icon"}),a.jsx(n,{variant:"secondary",startIconName:t.Plus,isOnlyIcon:!0}),a.jsx(n,{variant:"secondary",startIconName:t.Plus,isOnlyIcon:!0,size:"md"}),a.jsx(n,{variant:"secondary",startIconName:t.Plus,isOnlyIcon:!0,noPadding:!0})]})]}),a.jsxs("div",{className:e.section,children:[a.jsx("span",{className:e.sectionTitle,children:"States"}),a.jsxs("div",{className:e.itemsRow,children:[a.jsx(n,{variant:"primary",loading:!0,children:"Loading"}),a.jsx(n,{variant:"primary",disabled:!0,children:"Disabled"}),a.jsx(n,{variant:"primary",noPadding:!0,startIconName:t.Plus,children:"No Padding"}),a.jsx(n,{variant:"text",startIconName:t.Plus,loading:!0,children:"Loading Text"})]})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "xl",
    children: "Default Button",
    type: "button",
    disabled: false,
    isFullWidth: false,
    noPadding: false,
    isOnlyIcon: false,
    startIconName: undefined,
    endIconName: undefined,
    loading: false,
    style: {}
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary Button"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    children: "Text Button"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "link",
    children: "Link Button"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "With Start Icon",
  args: {
    variant: "primary",
    startIconName: EIconName.Plus,
    children: "Add Item"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "With Start And End Icon",
  args: {
    variant: "primary",
    startIconName: EIconName.Plus,
    endIconName: EIconName.Plus,
    children: "Primary"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Only Icon",
  args: {
    variant: "primary",
    startIconName: EIconName.Plus,
    endIconName: EIconName.Trash,
    isOnlyIcon: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Loading",
  args: {
    variant: "primary",
    loading: true,
    children: "Saving..."
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    variant: "primary",
    disabled: true,
    children: "Disabled Button"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Full Width",
  args: {
    variant: "primary",
    isFullWidth: true,
    children: "Full Width Button"
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "No Padding",
  args: {
    variant: "primary",
    noPadding: true,
    children: "No Padding"
  }
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    type: "submit",
    children: "Submit Form"
  }
}`,...I.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "With Rotated Icon",
  args: {
    variant: "primary",
    startIconName: EIconName.Trash,
    startIconRotate: 45,
    children: "Delete"
  }
}`,...v.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "All Variants Overview",
  render: () => <div className={styles.allVariants}>\r
      <div className={styles.section}>\r
        <p className={styles.sectionTitle}>Variants</p>\r
        <div className={styles.itemsRow}>\r
          <Button variant="primary">Primary</Button>\r
          <Button variant="secondary">Secondary</Button>\r
          <Button variant="text">Text</Button>\r
          <Button variant="link">Link</Button>\r
        </div>\r
      </div>\r
\r
      <div className={styles.section}>\r
        <span className={styles.sectionTitle}>Sizes</span>\r
        <div className={styles.itemsRowAligned}>\r
          <Button size="md">{\`size = "md"\`}</Button>\r
          <Button size="xl">{\`size = "xl\`}</Button>\r
        </div>\r
      </div>\r
\r
      <div className={styles.section}>\r
        <span className={styles.sectionTitle}>Icons</span>\r
        <div className={styles.itemsRow}>\r
          <Button variant="primary" startIconName={EIconName.Plus}>\r
            Start Icon\r
          </Button>\r
          <Button variant="primary" endIconName={EIconName.Trash}>\r
            End Icon\r
          </Button>\r
          <Button variant="primary" startIconName={EIconName.Plus} endIconName={EIconName.Trash}>\r
            Both Icons\r
          </Button>\r
          <Button variant="primary" startIconName={EIconName.Trash} startIconRotate={45}>\r
            Rotated Icon\r
          </Button>\r
          <Button variant="secondary" startIconName={EIconName.Plus} isOnlyIcon />\r
          <Button variant="secondary" startIconName={EIconName.Plus} isOnlyIcon size={"md"} />\r
          <Button variant="secondary" startIconName={EIconName.Plus} isOnlyIcon noPadding />\r
        </div>\r
      </div>\r
\r
      <div className={styles.section}>\r
        <span className={styles.sectionTitle}>States</span>\r
        <div className={styles.itemsRow}>\r
          <Button variant="primary" loading>\r
            Loading\r
          </Button>\r
          <Button variant="primary" disabled>\r
            Disabled\r
          </Button>\r
          <Button variant="primary" noPadding startIconName={EIconName.Plus}>\r
            No Padding\r
          </Button>\r
          <Button variant="text" startIconName={EIconName.Plus} loading>\r
            Loading Text\r
          </Button>\r
        </div>\r
      </div>\r
    </div>
}`,...N.parameters?.docs?.source}}};const O=["Default","Secondary","Text","Link","WithStartIcon","WithStartAndEndIcon","IconOnly","LoadingState","DisabledState","FullWidth","NoPadding","SubmitButton","RotatedIcon","AllVariants"];export{N as AllVariants,r as Default,u as DisabledState,p as FullWidth,d as IconOnly,i as Link,m as LoadingState,y as NoPadding,v as RotatedIcon,s as Secondary,I as SubmitButton,o as Text,l as WithStartAndEndIcon,c as WithStartIcon,O as __namedExportsOrder,E as default};
