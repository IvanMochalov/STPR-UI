import{r as W,j as o}from"./iframe-DsoVLqtF.js";import{B as f}from"./Button-zrte1TL4.js";import{I as y,E as k}from"./Icon-CcD0Smza.js";import{T as e}from"./Text-Da_aKhKS.js";import{E as i,T as a}from"./Tooltip-B9F4jJYp.js";import{c as s}from"./clsx-B-dksMZM.js";import"./preload-helper-DCNYn41m.js";import"./Spinner-D4Zhwk-k.js";import"./BaseTooltip-CyUiU66m.js";import"./Potral-7FViUbta.js";import"./index-Cz879DlY.js";import"./index-CMC9NNB4.js";const P="_defaultTooltipTrigger_g09az_1",R="_clickableTooltipTrigger_g09az_10",N="_toggleClickableTooltipTrigger_g09az_16",v="_iconTooltipWrapper_g09az_22",j="_iconTooltipTrigger_g09az_28",L="_allPositionTooltipWrapper_g09az_34",B="_allPositionTooltipWrapper__item_g09az_41",S="_allPositionTooltipTrigger_g09az_46",E="_richContentTooltipTextWrapper_g09az_52",z="_richContentTooltipTextWrapper__title_g09az_59",w="_richContentTooltipTextWrapper__subtitle_g09az_63",I="_richContentTooltipTextWrapper__list_g09az_66",A="_richContentTooltipTextWrapper__description_g09az_70",O="_noPaddingTooltipTextWrapper_g09az_75",V="_actionCallbacksTooltipWrapper_g09az_83",D="_actionCallbacksTooltipWrapper__logsWrapper_g09az_89",$="_actionCallbacksTooltipWrapper__logsWrapper__list_g09az_98",H="_actionCallbacksTooltipWrapper__logsWrapper__list__item_g09az_105",M="_actionCallbacksTooltipWrapper__logsWrapper__description_g09az_109",G="_stopPropagationTooltipWrapper_g09az_115",t={defaultTooltipTrigger:P,clickableTooltipTrigger:R,toggleClickableTooltipTrigger:N,iconTooltipWrapper:v,iconTooltipTrigger:j,allPositionTooltipWrapper:L,allPositionTooltipWrapper__item:B,allPositionTooltipTrigger:S,richContentTooltipTextWrapper:E,richContentTooltipTextWrapper__title:z,richContentTooltipTextWrapper__subtitle:w,richContentTooltipTextWrapper__list:I,richContentTooltipTextWrapper__description:A,noPaddingTooltipTextWrapper:O,actionCallbacksTooltipWrapper:V,actionCallbacksTooltipWrapper__logsWrapper:D,actionCallbacksTooltipWrapper__logsWrapper__list:$,actionCallbacksTooltipWrapper__logsWrapper__list__item:H,actionCallbacksTooltipWrapper__logsWrapper__description:M,stopPropagationTooltipWrapper:G},io={title:"Components/Tooltip",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
Компонент тултипа для отображения всплывающих подсказок с поддержкой различных режимов активации и позиционирования.

## Основные возможности

- **Два режима активации**: по наведению (\`hover\`) и по клику (\`click\`)
- **12 позиций отображения**: полная поддержка всех сторон и углов
- **Автоматическое позиционирование**: предотвращает выход за границы \`viewport\` (отключается параметром \`lockPosition\`)
- **Портальное отображение**: рендеринг вне DOM-иерархии для избежания \`overflow\`
- **Гибкая кастомизация**: поддержка кастомных триггеров и содержимого
- **Обработка кликов вне области**: автоматическое закрытие при клике вне тултипа

## Режимы работы

- **Hover режим** (по умолчанию) - тултип показывается при наведении на триггер
- **Click режим** - тултип показывается по клику на триггер
- **Toggle режим** - тултип переключается по клику (открывается/закрывается)

## Позиционирование

Поддерживаются 12 позиций относительно триггера:
- **Top**: сверху по центру
- **TopLeft**: сверху слева  
- **TopRight**: сверху справа
- **Bottom**: снизу по центру
- **BottomLeft**: снизу слева
- **BottomRight**: снизу справа
- **Left**: слева по центру
- **LeftTop**: слева сверху
- **LeftBottom**: слева снизу
- **Right**: справа по центру
- **RightTop**: справа сверху
- **RightBottom**: справа снизу

## Базовое использование
Тултип - это всего лишь обертка над вашим компонентом, который вы передаёте в параметр \`trigger\`, а в параметр \`text\` передаёте текст подсказки для оторбажения при наведении на \`trigger\`.

\`\`\`jsx
// Простой тултип по наведению
<Tooltip
  text="Это всплывающая подсказка"
  trigger={<Button>Наведи на меня</Button>}
/>

// Тултип по клику с кастомной позицией
<Tooltip
  text="Подсказка появляется по клику"
  hover={false}
  position={ETooltipPosition.Right}
  trigger={<Icon name={EIconName.Info} />}
/>

// Тултип с React-компонентом внутри
<Tooltip
  text={
    <div>
      <strong>Форматированное содержимое</strong>
      <br />
      <span>С поддержкой HTML-разметки</span>
    </div>
  }
  trigger={<span>Кастомный контент</span>}
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
`,control:{type:"select"},options:Object.values(i),table:{type:{summary:"ETooltipPosition"},defaultValue:{summary:'"bottom-left"'}}},lockPosition:{description:`Запрещает перерасчёт позиции. Если true, используется только переданная позиция без проверки viewport и подбора альтернатив. Полезно для выпадающих списков.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},text:{description:`Содержимое тултипа. Может быть строкой или React-компонентом. Поддерживает многострочный текст и HTML-разметку.
`,control:{type:"text"},table:{type:{summary:"string | ReactNode"}}},triggerTooltipGap:{description:`Расстояние между триггером и тултипом.
По умолчанию 6.`,control:{type:"number"},table:{type:{summary:"number"}}},noPadding:{description:`Убрать внутренние отступы у тултипа. Полезно для кастомного оформления контента.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},trigger:{description:`React-компонент, который активирует показ тултипа. Может быть любой кликабельный или hover-элемент.
`,control:!1,table:{type:{summary:"ReactNode"}}},triggerAction:{description:`Callback-функция, вызываемая при активации тултипа (открытии).
`,control:!1,table:{type:{summary:"() => void"}}},actionOnClose:{description:`Callback-функция, вызываемая при закрытии тултипа.
`,control:!1,table:{type:{summary:"() => void"}}},classNameTooltip:{description:`Дополнительный CSS-класс для родителя элемента триггера
`,control:!1,table:{type:{summary:"string"}}},classNameBaseTooltipRoot:{description:`Дополнительный CSS-класс для корневого элемента базового тултипа
`,control:!1,table:{type:{summary:"string"}}},classNameBaseTooltipContentRoot:{description:`Дополнительный CSS-класс для контентной области базового тултипа
`,control:!1,table:{type:{summary:"string"}}},styleTooltip:{description:`Инлайн-стили для кастомизации внешнего вида контейнера тултипа
`,control:{type:"object"},table:{type:{summary:"CSSProperties"}}}},args:{position:i.BottomLeft,isVisibleTooltip:!0,hover:!0,isStopPropagationClickOnTrigger:!1,noPadding:!1,isToggleClick:!1,lockPosition:!1,triggerTooltipGap:6}},p={name:"Default Hover Tooltip",args:{text:"Дефолтный тултип, который появляется при наведении на элемент",trigger:o.jsx(e,{classNameRoot:s(t.defaultTooltipTrigger),children:"Наведи на меня"})}},c={name:"Click Activated Tooltip",args:{hover:!1,text:"Этот тултип появляется только по клику и закрывается при клике вне области",trigger:o.jsx(e,{classNameRoot:s(t.clickableTooltipTrigger,t.defaultTooltipTrigger),children:"Кликни по мне"})}},T={name:"Toggle Click Tooltip",args:{isToggleClick:!0,hover:!1,text:"Этот тултип переключается по клику - открывается и закрывается при повторном клике на триггер",trigger:o.jsx(e,{classNameRoot:s(t.toggleClickableTooltipTrigger,t.defaultTooltipTrigger),children:"Кликай для переключения"})}},g={name:"Icon with Tooltip",args:{text:"Информационная иконка с подсказкой. Идеально для пояснения сложных элементов интерфейса.",trigger:o.jsx(y,{className:t.iconTooltipTrigger,name:k.Info})},render:r=>o.jsxs("div",{className:t.iconTooltipWrapper,children:[o.jsx(e,{children:"Статус операции"}),o.jsx(a,{...r})]})},m={name:"Button with Tooltip",args:{text:"Эта кнопка выполняет важное действие. Убедитесь, что все данные корректны перед нажатием.",trigger:o.jsx(f,{children:"Важное действие"})}},d={name:"All Tooltip Positions",render:()=>{const r=[{position:i.Top,label:"Top"},{position:i.TopLeft,label:"Top Left"},{position:i.TopRight,label:"Top Right"},{position:i.Bottom,label:"Bottom"},{position:i.BottomLeft,label:"Bottom Left"},{position:i.BottomRight,label:"Bottom Right"},{position:i.Left,label:"Left"},{position:i.LeftTop,label:"Left Top"},{position:i.LeftBottom,label:"Left Bottom"},{position:i.Right,label:"Right"},{position:i.RightTop,label:"Right Top"},{position:i.RightBottom,label:"Right Bottom"}];return o.jsx("div",{className:t.allPositionTooltipWrapper,children:r.map(({position:n,label:l})=>o.jsx("div",{className:t.allPositionTooltipWrapper__item,children:o.jsx(a,{position:n,text:`Позиция: ${l}`,trigger:o.jsx(e,{classNameRoot:s(t.defaultTooltipTrigger,t.allPositionTooltipTrigger),children:l})})},n))})}},_={name:"Tooltip with Rich Content",args:{text:o.jsxs("div",{className:t.richContentTooltipTextWrapper,children:[o.jsx(e,{classNameRoot:t.richContentTooltipTextWrapper__title,children:"Расширенная информация"}),o.jsx(e,{classNameRoot:t.richContentTooltipTextWrapper__subtitle,children:"Этот тултип содержит форматированный контент с:"}),o.jsxs("ul",{className:t.richContentTooltipTextWrapper__list,children:[o.jsx("li",{children:"Заголовком"}),o.jsx("li",{children:"Списком элементов"}),o.jsx("li",{children:"Разными стилями текста"})]}),o.jsx(e,{classNameRoot:t.richContentTooltipTextWrapper__description,children:"Поддержка любого React-контента"})]}),trigger:o.jsx(e,{classNameRoot:t.defaultTooltipTrigger,children:"Расширенный контент"})}},x={name:"Tooltip without Padding",args:{noPadding:!0,text:o.jsx(e,{classNameRoot:t.noPaddingTooltipTextWrapper,children:"Кастомный контент без стандартных отступов"}),trigger:o.jsx(e,{classNameRoot:t.defaultTooltipTrigger,children:"Без отступов"})}},u={name:"Tooltip with Action Callbacks",render:()=>{const[r,n]=W.useState([]),l=h=>{n(C=>[...C.slice(-4),`${new Date().toLocaleTimeString()}: ${h}`])};return o.jsxs("div",{className:t.actionCallbacksTooltipWrapper,children:[o.jsx(a,{hover:!1,position:i.TopLeft,text:"Этот тултип вызывает callback-функции при открытии и закрытии",triggerAction:()=>l("Тултип открыт"),actionOnClose:()=>l("Тултип закрыт"),trigger:o.jsx(e,{classNameRoot:t.defaultTooltipTrigger,children:"С callback-ами"})}),o.jsxs("div",{className:t.actionCallbacksTooltipWrapper__logsWrapper,children:[o.jsx(e,{type:"p1",children:"Лог событий:"}),r.length>0?o.jsx("ul",{className:t.actionCallbacksTooltipWrapper__logsWrapper__list,children:r.map((h,C)=>o.jsx(e,{classNameRoot:t.actionCallbacksTooltipWrapper__logsWrapper__list__item,children:h},C))}):o.jsx(e,{classNameRoot:t.actionCallbacksTooltipWrapper__logsWrapper__description,children:"События будут отображаться здесь..."})]})]})}},b={name:"Tooltip with Stop Propagation",render:()=>{const r=()=>{alert("Клик по родительскому элементу!")};return o.jsxs("div",{className:t.stopPropagationTooltipWrapper,onClick:r,children:[o.jsx(e,{type:"p1",children:"Кликабельная область (кликните здесь)"}),o.jsx(a,{hover:!1,isStopPropagationClickOnTrigger:!0,text:"Этот тултип останавливает всплытие события клика",trigger:o.jsx(e,{classNameRoot:s(t.toggleClickableTooltipTrigger,t.defaultTooltipTrigger),children:"Кликни (всплытие остановлено)"})}),o.jsx(e,{type:"description",children:"Обычный текст в той же области"})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Default Hover Tooltip",
  args: {
    text: "Дефолтный тултип, который появляется при наведении на элемент",
    trigger: <Text classNameRoot={cx(styles.defaultTooltipTrigger)}>Наведи на меня</Text>
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Click Activated Tooltip",
  args: {
    hover: false,
    text: "Этот тултип появляется только по клику и закрывается при клике вне области",
    trigger: <Text classNameRoot={cx(styles.clickableTooltipTrigger, styles.defaultTooltipTrigger)}>\r
        Кликни по мне\r
      </Text>
  }
}`,...c.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Toggle Click Tooltip",
  args: {
    isToggleClick: true,
    hover: false,
    text: "Этот тултип переключается по клику - открывается и закрывается при повторном клике на триггер",
    trigger: <Text classNameRoot={cx(styles.toggleClickableTooltipTrigger, styles.defaultTooltipTrigger)}>\r
        Кликай для переключения\r
      </Text>
  }
}`,...T.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Icon with Tooltip",
  args: {
    text: "Информационная иконка с подсказкой. Идеально для пояснения сложных элементов интерфейса.",
    trigger: <Icon className={styles.iconTooltipTrigger} name={EIconName.Info} />
  },
  render: args => {
    return <div className={styles.iconTooltipWrapper}>\r
        <Text>Статус операции</Text>\r
        <Tooltip {...args} />\r
      </div>;
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Button with Tooltip",
  args: {
    text: "Эта кнопка выполняет важное действие. Убедитесь, что все данные корректны перед нажатием.",
    trigger: <Button>Важное действие</Button>
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "All Tooltip Positions",
  render: () => {
    const positions = [{
      position: ETooltipPosition.Top,
      label: "Top"
    }, {
      position: ETooltipPosition.TopLeft,
      label: "Top Left"
    }, {
      position: ETooltipPosition.TopRight,
      label: "Top Right"
    }, {
      position: ETooltipPosition.Bottom,
      label: "Bottom"
    }, {
      position: ETooltipPosition.BottomLeft,
      label: "Bottom Left"
    }, {
      position: ETooltipPosition.BottomRight,
      label: "Bottom Right"
    }, {
      position: ETooltipPosition.Left,
      label: "Left"
    }, {
      position: ETooltipPosition.LeftTop,
      label: "Left Top"
    }, {
      position: ETooltipPosition.LeftBottom,
      label: "Left Bottom"
    }, {
      position: ETooltipPosition.Right,
      label: "Right"
    }, {
      position: ETooltipPosition.RightTop,
      label: "Right Top"
    }, {
      position: ETooltipPosition.RightBottom,
      label: "Right Bottom"
    }];
    return <div className={styles.allPositionTooltipWrapper}>\r
        {positions.map(({
        position,
        label
      }) => <div key={position} className={styles.allPositionTooltipWrapper__item}>\r
            <Tooltip position={position} text={\`Позиция: \${label}\`} trigger={<Text classNameRoot={cx(styles.defaultTooltipTrigger, styles.allPositionTooltipTrigger)}>\r
                  {label}\r
                </Text>} />\r
          </div>)}\r
      </div>;
  }
}`,...d.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Tooltip with Rich Content",
  args: {
    text: <div className={styles.richContentTooltipTextWrapper}>\r
        <Text classNameRoot={styles.richContentTooltipTextWrapper__title}>\r
          Расширенная информация\r
        </Text>\r
        <Text classNameRoot={styles.richContentTooltipTextWrapper__subtitle}>\r
          Этот тултип содержит форматированный контент с:\r
        </Text>\r
        <ul className={styles.richContentTooltipTextWrapper__list}>\r
          <li>Заголовком</li>\r
          <li>Списком элементов</li>\r
          <li>Разными стилями текста</li>\r
        </ul>\r
        <Text classNameRoot={styles.richContentTooltipTextWrapper__description}>\r
          Поддержка любого React-контента\r
        </Text>\r
      </div>,
    trigger: <Text classNameRoot={styles.defaultTooltipTrigger}>Расширенный контент</Text>
  }
}`,..._.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Tooltip without Padding",
  args: {
    noPadding: true,
    text: <Text classNameRoot={styles.noPaddingTooltipTextWrapper}>\r
        Кастомный контент без стандартных отступов\r
      </Text>,
    trigger: <Text classNameRoot={styles.defaultTooltipTrigger}>Без отступов</Text>
  }
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Tooltip with Action Callbacks",
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    const addLog = (message: string) => {
      setLog(prev => [...prev.slice(-4), \`\${new Date().toLocaleTimeString()}: \${message}\`]);
    };
    return <div className={styles.actionCallbacksTooltipWrapper}>\r
        <Tooltip hover={false} position={ETooltipPosition.TopLeft} text="Этот тултип вызывает callback-функции при открытии и закрытии" triggerAction={() => addLog("Тултип открыт")} actionOnClose={() => addLog("Тултип закрыт")} trigger={<Text classNameRoot={styles.defaultTooltipTrigger}>С callback-ами</Text>} />\r
        <div className={styles.actionCallbacksTooltipWrapper__logsWrapper}>\r
          <Text type={"p1"}>Лог событий:</Text>\r
          {log.length > 0 ? <ul className={styles.actionCallbacksTooltipWrapper__logsWrapper__list}>\r
              {log.map((entry, index) => <Text key={index} classNameRoot={styles.actionCallbacksTooltipWrapper__logsWrapper__list__item}>\r
                  {entry}\r
                </Text>)}\r
            </ul> : <Text classNameRoot={styles.actionCallbacksTooltipWrapper__logsWrapper__description}>\r
              События будут отображаться здесь...\r
            </Text>}\r
        </div>\r
      </div>;
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Tooltip with Stop Propagation",
  render: () => {
    const handleParentClick = () => {
      alert("Клик по родительскому элементу!");
    };
    return <div className={styles.stopPropagationTooltipWrapper} onClick={handleParentClick}>\r
        <Text type={"p1"}>Кликабельная область (кликните здесь)</Text>\r
        <Tooltip hover={false} isStopPropagationClickOnTrigger={true} text="Этот тултип останавливает всплытие события клика" trigger={<Text classNameRoot={cx(styles.toggleClickableTooltipTrigger, styles.defaultTooltipTrigger)}>\r
              Кликни (всплытие остановлено)\r
            </Text>} />\r
        <Text type={"description"}>Обычный текст в той же области</Text>\r
      </div>;
  }
}`,...b.parameters?.docs?.source}}};const ro=["Default","Clickable","ToggleClickable","IconTooltip","ButtonWithTooltip","AllPositions","RichContentTooltip","NoPaddingTooltip","ActionCallbacks","StopPropagationExample"];export{u as ActionCallbacks,d as AllPositions,m as ButtonWithTooltip,c as Clickable,p as Default,g as IconTooltip,x as NoPaddingTooltip,_ as RichContentTooltip,b as StopPropagationExample,T as ToggleClickable,ro as __namedExportsOrder,io as default};
