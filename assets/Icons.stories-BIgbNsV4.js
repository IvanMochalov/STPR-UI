import{j as e}from"./iframe-CA4deTFl.js";import{E as b}from"./EllipsisTextWithTooltip-ySti2ov_.js";import{E as o,I as s}from"./Icon-DndJayG8.js";import{T as t}from"./Text-DSk7EiGw.js";import"./preload-helper-JD0jGv3q.js";import"./clsx-B-dksMZM.js";import"./Tooltip-DOi7Oqjo.js";import"./BaseTooltip-CuZNMgt3.js";import"./Potral-CkHkY5OB.js";import"./index-SbPXkCt7.js";import"./index-DESwEi8l.js";const y="_iconCard_ckeez_1",h="_iconCard__iconName_ckeez_23",g="_iconCard__colorCode_ckeez_29",u="_gallery_ckeez_34",r={iconCard:y,iconCard__iconName:h,iconCard__colorCode:g,gallery:u},E={title:"Components/Icon",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
Компонент иконки для отображения SVG-графики с поддержкой различных стилей и возможностей кастомизации.

## Основные возможности

- **Библиотека иконок**: готовые SVG-иконок для различных сценариев использования
- **Поворот иконок**: возможность вращения на заданный угол
- **Кастомизация цвета**: изменение цвета через стандартные SVG-пропсы
- **Размеры и стили**: полная поддержка всех SVG-атрибутов (width, height, style и т.д.)
- **TypeScript поддержка**: строгая типизация всех доступных иконок

## Базовое использование

\`\`\`jsx
// Простая иконка
<Icon name={EIconName.Trash} />

// Иконка с кастомным цветом
<Icon name={EIconName.Info} color="#007bff" />

// Повернутая иконка
<Icon name={EIconName.ChevronDown} rotate={90} />

// Иконка с измененным размером
<Icon name={EIconName.Plus} width={24} height={24} />
\`\`\`

## Рекомендации по использованию

- Используйте семантически подходящие иконки для действий
- Сохраняйте единообразие размеров иконок в рамках одного интерфейса
- Для интерактивных элементов добавляйте hover-эффекты через CSS
- Используйте rotate для анимации переходов (например, стрелки аккордеона)
        `}}},argTypes:{name:{description:`Название иконки из доступной библиотеки. Определяет какой SVG будет отображен.
`,control:{type:"select"},options:Object.values(o),table:{type:{summary:"EIconName"}}},rotate:{description:`Угол поворота иконки в градусах. Полезно для анимации стрелок и индикаторов состояния.
`,control:{type:"range",min:0,max:360},table:{type:{summary:"number"}}},color:{description:`Цвет иконки. Переопределяет цвет fill/stroke в SVG. Поддерживает любые CSS-цвета.
`,control:{type:"color"},table:{type:{summary:"string"}}},width:{description:`Ширина иконки. Если не указана, используется размер по умолчанию из SVG.
`,control:{type:"number"},table:{type:{summary:"number"}}},height:{description:`Высота иконки. Если не указана, используется размер по умолчанию из SVG.
`,control:{type:"number"},table:{type:{summary:"number"}}},style:{description:`Инлайн-стили для кастомизации внешнего вида иконки.
`,control:{type:"object"},table:{type:{summary:"CSSProperties"}}},className:{description:`CSS-класс для дополнительной стилизации иконки.
`,control:!1,table:{type:{summary:"string"}}}}},l={name:"Single Icon",args:{name:o.Trash,color:"#131313",width:24,height:24},argTypes:{name:{control:"select",options:Object.values(o)}},render:n=>e.jsxs("div",{className:r.iconCard,children:[e.jsx(s,{...n}),e.jsx(t,{classNameRoot:r.iconCard__iconName,children:n.name})]},n.name)},c={name:"Icon Gallery",args:{color:"#131313",width:24,height:24},argTypes:{name:{table:{disable:!0}},color:{table:{disable:!0}},rotate:{table:{disable:!0}},width:{table:{disable:!0}},height:{table:{disable:!0}}},render:n=>e.jsx("div",{className:r.gallery,children:Object.values(o).map(a=>e.jsxs("div",{className:r.iconCard,children:[e.jsx(s,{...n,name:a}),e.jsx(b,{classNameRoot:r.iconCard__iconName,text:a})]},a))})},i={args:{name:o.Info,width:32,height:32},render:n=>e.jsx("div",{className:r.gallery,children:[{color:"#007bff",label:"Primary Blue"},{color:"#28a745",label:"Success Green"},{color:"#dc3545",label:"Error Red"},{color:"#ffc107",label:"Warning Yellow"},{color:"#6c757d",label:"Gray"},{color:"#6610f2",label:"Purple"}].map(({color:a,label:p})=>e.jsxs("div",{className:r.iconCard,children:[e.jsx(s,{...n,color:a}),e.jsx(t,{classNameRoot:r.iconCard__iconName,children:p}),e.jsx(t,{classNameRoot:r.iconCard__colorCode,children:a})]},a))})},m={args:{color:"#131313",width:24,height:24},render:n=>e.jsx("div",{className:r.gallery,children:[{rotate:0,label:"0°"},{rotate:45,label:"45°"},{rotate:90,label:"90°"},{rotate:180,label:"180°"},{rotate:270,label:"270°"},{rotate:360,label:"360°"}].map(({rotate:a,label:p})=>e.jsxs("div",{className:r.iconCard,children:[e.jsx(s,{...n,name:o.ChevronDown,rotate:a}),e.jsx(t,{classNameRoot:r.iconCard__iconName,children:p})]},a))})},d={args:{name:o.PlusCircle,color:"#131313"},render:n=>e.jsx("div",{className:r.gallery,children:[16,20,24,32,40,48,64].map(a=>e.jsxs("div",{className:r.iconCard,children:[e.jsx(s,{...n,width:a,height:a}),e.jsxs(t,{classNameRoot:r.iconCard__iconName,children:[a,"px"]})]},a))})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Single Icon",
  args: {
    name: EIconName.Trash,
    color: "#131313",
    width: 24,
    height: 24
  },
  argTypes: {
    name: {
      control: "select",
      options: Object.values(EIconName)
    }
  },
  render: args => {
    return <div key={args.name} className={styles.iconCard}>\r
        <Icon {...args} />\r
        <Text classNameRoot={styles.iconCard__iconName}>{args.name}</Text>\r
      </div>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Icon Gallery",
  args: {
    color: "#131313",
    width: 24,
    height: 24
  },
  argTypes: {
    name: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    rotate: {
      table: {
        disable: true
      }
    },
    width: {
      table: {
        disable: true
      }
    },
    height: {
      table: {
        disable: true
      }
    }
  },
  render: args => <div className={styles.gallery}>\r
      {Object.values(EIconName).map(name => <div key={name} className={styles.iconCard}>\r
          <Icon {...args} name={name} />\r
          <EllipsisTextWithTooltip classNameRoot={styles.iconCard__iconName} text={name} />\r
        </div>)}\r
    </div>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: EIconName.Info,
    width: 32,
    height: 32
  },
  render: args => <div className={styles.gallery}>\r
      {[{
      color: "#007bff",
      label: "Primary Blue"
    }, {
      color: "#28a745",
      label: "Success Green"
    }, {
      color: "#dc3545",
      label: "Error Red"
    }, {
      color: "#ffc107",
      label: "Warning Yellow"
    }, {
      color: "#6c757d",
      label: "Gray"
    }, {
      color: "#6610f2",
      label: "Purple"
    }].map(({
      color,
      label
    }) => <div key={color} className={styles.iconCard}>\r
          <Icon {...args} color={color} />\r
          <Text classNameRoot={styles.iconCard__iconName}>{label}</Text>\r
          <Text classNameRoot={styles.iconCard__colorCode}>{color}</Text>\r
        </div>)}\r
    </div>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: "#131313",
    width: 24,
    height: 24
  },
  render: args => <div className={styles.gallery}>\r
      {[{
      rotate: 0,
      label: "0°"
    }, {
      rotate: 45,
      label: "45°"
    }, {
      rotate: 90,
      label: "90°"
    }, {
      rotate: 180,
      label: "180°"
    }, {
      rotate: 270,
      label: "270°"
    }, {
      rotate: 360,
      label: "360°"
    }].map(({
      rotate,
      label
    }) => <div key={rotate} className={styles.iconCard}>\r
          <Icon {...args} name={EIconName.ChevronDown} rotate={rotate} />\r
          <Text classNameRoot={styles.iconCard__iconName}>{label}</Text>\r
        </div>)}\r
    </div>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: EIconName.PlusCircle,
    color: "#131313"
  },
  render: args => <div className={styles.gallery}>\r
      {[16, 20, 24, 32, 40, 48, 64].map(size => <div key={size} className={styles.iconCard}>\r
          <Icon {...args} width={size} height={size} />\r
          <Text classNameRoot={styles.iconCard__iconName}>{size}px</Text>\r
        </div>)}\r
    </div>
}`,...d.parameters?.docs?.source}}};const R=["Default","Gallery","CustomColors","RotatedIcons","DifferentSizes"];export{i as CustomColors,l as Default,d as DifferentSizes,c as Gallery,m as RotatedIcons,R as __namedExportsOrder,E as default};
