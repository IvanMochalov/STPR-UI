import{j as e,r as c}from"./iframe-CA4deTFl.js";import{I as U,E as m}from"./Icon-DndJayG8.js";import{c as v}from"./clsx-B-dksMZM.js";import{I as $}from"./Tooltip-DOi7Oqjo.js";import{T as o}from"./Text-DSk7EiGw.js";import"./preload-helper-JD0jGv3q.js";import"./BaseTooltip-CuZNMgt3.js";import"./Potral-CkHkY5OB.js";import"./index-SbPXkCt7.js";import"./index-DESwEi8l.js";const J="_spTabs_14g3q_1",K="_spTabs_separated_14g3q_18",Q="_spTabs__tabElement_14g3q_43",X="_spTabs__tabElement_active_14g3q_48",Y="_spTabs__tabContent_14g3q_48",Z="_spTabs__tooltip_14g3q_55",ee="_spTabs__iconContainer_14g3q_133",ae="_spTabs__tabText_14g3q_142",l={spTabs:J,spTabs_separated:K,"spTabs--size-md":"_spTabs--size-md_14g3q_23","spTabs--size-xl":"_spTabs--size-xl_14g3q_31","spTabs--variant-contained":"_spTabs--variant-contained_14g3q_39",spTabs__tabElement:Q,spTabs__tabElement_active:X,spTabs__tabContent:Y,spTabs__tooltip:Z,"spTabs--variant-outlined":"_spTabs--variant-outlined_14g3q_67","spTabs--variant-filled":"_spTabs--variant-filled_14g3q_86",spTabs__iconContainer:ee,spTabs__tabText:ae},r=t=>{const{panes:n,isSeparated:s=!1,classNameRoot:a,classNameTabElementRoot:h,classNameBaseTooltipRoot:w,variant:E="contained",size:j="xl"}=t,G=v({[l.spTabs]:!0,[l.spTabs_separated]:s,[l[`spTabs--variant-${E}`]]:E,[l[`spTabs--size-${j}`]]:j,...a&&{[a]:!0}}),O=v({[l.spTabs__iconContainer]:!0}),D=v({[l.spTabs__tooltip]:!0}),M=v({[l.spTabs__tabContent]:!0}),S=(d,b)=>d?e.jsx("div",{className:O,children:e.jsx(U,{name:d,rotate:b})}):null,z=(d,b)=>{const{name:R,active:P,onClick:F,infoTooltipText:W,isOnlyIcon:T=!1,startIconName:g,endIconName:A,startIconRotate:q=0,endIconRotate:V=0}=d,B=!T&&!!g,L=!T&&!!A,H=!T;return e.jsx("div",{"aria-label":T?R:void 0,className:v({[l.spTabs__tabElement]:!0,[l.spTabs__tabElement_active]:P,...h&&{[h]:!0}}),onClick:F,children:e.jsxs("div",{className:M,children:[T?S(g,q):e.jsxs(e.Fragment,{children:[S(B?g:void 0,q),H&&e.jsx("span",{className:l.spTabs__tabText,children:R}),S(L?A:void 0,V)]}),!!W&&e.jsx($,{hover:!0,classNameTooltip:D,text:W,classNameBaseTooltipRoot:w})]})},d.key||b)};return e.jsx("div",{className:G,children:n.map((d,b)=>z(d,b))})};r.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{size:{required:!1,tsType:{name:"union",raw:'"md" | "xl"',elements:[{name:"literal",value:'"md"'},{name:"literal",value:'"xl"'}]},description:""},panes:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  name: string;\r
  key?: string;\r
  active?: boolean;\r
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;\r
  infoTooltipText?: string;\r
  isOnlyIcon?: boolean;\r
  startIconName?: EIconName;\r
  endIconName?: EIconName;\r
  startIconRotate?: number;\r
  endIconRotate?: number;\r
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"key",value:{name:"string",required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}},required:!1}},{key:"infoTooltipText",value:{name:"string",required:!1}},{key:"isOnlyIcon",value:{name:"boolean",required:!1}},{key:"startIconName",value:{name:"EIconName",required:!1}},{key:"endIconName",value:{name:"EIconName",required:!1}},{key:"startIconRotate",value:{name:"number",required:!1}},{key:"endIconRotate",value:{name:"number",required:!1}}]}}],raw:"TPaneItem[]"},description:""},isSeparated:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"filled" | "contained" | "outlined"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'}]},description:""},classNameRoot:{required:!1,tsType:{name:"string"},description:""},classNameTabElementRoot:{required:!1,tsType:{name:"string"},description:""},classNameBaseTooltipRoot:{required:!1,tsType:{name:"string"},description:""}}};const ne="_complexTabsExample_opat4_1",te="_complexTabsExample__tabContentWrapper_opat4_6",se="_differentTabsWrapper_opat4_12",re="_differentTabsWrapper__tabsGroup_opat4_17",i={complexTabsExample:ne,complexTabsExample__tabContentWrapper:te,differentTabsWrapper:se,differentTabsWrapper__tabsGroup:re},ue={title:"Components/Tabs",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
Компонент табов для организации контента в связанные вкладки с поддержкой различных стилей и состояний.

## Особенности:
- **Три варианта стиля**: contained (в общем контейнере), filled (отдельные вкладки) и outlined (с активной нижней границей)
- **Два размер**: \`md\` и \`xl\`
- **Подсказки вкладок**: встроенная поддержка тултипов для пояснений
- **Разделенный режим**: возможность отображения вкладок с отступами
- **Иконки вкладок**: настраиваются отдельно для каждого элемента в \`panes\` (\`startIconName\`, \`endIconName\`, повороты) и поддерживают режим icon-only через \`isOnlyIcon\` в \`TPaneItem\`
- **Типографика**: автоматическая настройка размера текста в зависимости от размера табов

## Визуальные состояния:
- **Активная вкладка**: выделяется цветом и фоном в зависимости от варианта стиля
- **Неактивная вкладка**: стандартное состояние с hover-эффектом
- **С подсказкой**: отображает иконку информации с тултипом

## Варианты стилей:
- **Contained**: вкладки в общем контейнере с заливкой фона, активная вкладка имеет белый фон
- **Filled**: отдельные заполненные вкладки, активная вкладка выделяется акцентным цветом
- **Outlined**: прозрачные вкладки, активная вкладка подчеркивается border-bottom акцентного цвета

## Рекомендации по использованию:
Используйте для организации связанного контента по категориям или для переключения между разными представлениями данных.

### Базовое использование

\`\`\`jsx
const [activeTab, setActiveTab] = useState('tab1');

<Tabs
  panes={[
    {
      name: "Первая вкладка",
      active: activeTab === 'tab1',
      onClick: () => setActiveTab('tab1'),
    },
    {
      name: "Вторая вкладка", 
      active: activeTab === 'tab2',
      onClick: () => setActiveTab('tab2'),
    },
  ]}
  variant="contained"
  size="md"
/>
\`\`\`
        `}}},argTypes:{variant:{description:`Вариант стиля табов:
- "contained" - в контейнере с заливкой фона (по умолчанию)
- "filled" - отдельные заполненные вкладки
- "outlined" - прозрачные вкладки с нижней активной границей
`,control:{type:"select"},options:["contained","filled","outlined"],table:{type:{summary:"TTabsVariant",detail:"'contained' | 'filled' | 'outlined'"},defaultValue:{summary:'"contained"'}}},size:{description:`Размер табов:
- "md" - базовый размер
- "xl" - увеличенный размер
`,control:{type:"radio"},options:["md","xl"],table:{defaultValue:{summary:"xl"},type:{summary:"TTabsSize",detail:"'md' | 'xl'"}}},isSeparated:{description:`Разделить табы отступами вместо общего контейнера.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},panes:{description:`Массив вкладок. Каждая вкладка должна содержать name и может содержать дополнительные параметры.
`,control:!1,table:{type:{summary:"TPaneItem[]",detail:`TPaneItem[] = {
  name: string;
  key?: string;
  active?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  infoTooltipText?: string;
  isOnlyIcon?: boolean;
  startIconName?: EIconName;
  endIconName?: EIconName;
  startIconRotate?: number;
  endIconRotate?: number;
}[]`}}},classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента табов
`,control:!1,table:{type:{summary:"string"}}},classNameTabElementRoot:{description:`Дополнительный CSS-класс для корневого элемента вкладки
`,control:!1,table:{type:{summary:"string"}}},classNameBaseTooltipRoot:{description:`Дополнительный CSS-класс для корневого элемента тултипов вкладок
`,control:!1,table:{type:{summary:"string"}}}},args:{isSeparated:!1,variant:"contained",size:"xl"}},p={name:"Default Tabs",render:t=>{const[n,s]=c.useState("address"),a=c.useMemo(()=>[{name:"Адрес",key:"address",active:n==="address",onClick:()=>s("address")},{name:"Кадастровый номер",key:"cadastral",active:n==="cadastral",onClick:()=>s("cadastral"),infoTooltipText:"Кадастровый номер",startIconName:m.AddFile}],[n]);return e.jsx(r,{...t,panes:a})}},u={name:"Filled Tabs",render:p.render,args:{variant:"filled"}},y={name:"Outlined Tabs",render:p.render,args:{variant:"outlined"}},_={name:"Separated Tabs",render:p.render,args:{variant:"filled",isSeparated:!0}},f={name:"Tabs with Tooltips",render:t=>{const[n,s]=c.useState("address"),a=c.useMemo(()=>[{name:"Адрес",key:"address",active:n==="address",onClick:()=>s("address"),infoTooltipText:"Переменная согласно данным требованиям, обозначающая строительный (почтовый) адрес элементов АГР с дополнительной нумерации, при необходимости. Включает в себя следующие адресообразующие элементы, если они присутствуют: элементы улично-дорожной сети (аллея, бульвар, магистраль, переулок, площадь, проезд и т.д.), элементы объектов адресации (здание, земельный участок, владение и т.д.), типы зданий/сооружений (дом, корпус, строение и т.д.)."},{name:"Кадастровый номер",key:"cadastral",active:n==="cadastral",onClick:()=>s("cadastral"),infoTooltipText:`Если объект не имеет точного строительного/почтового адреса, например: деревня Внуково, то указывается кадастровый номер земельного участка. 

Пример: 77:01:0045002:4123`}],[n]);return e.jsx(r,{...t,panes:a})}},x={name:"Tabs with Per-item Icons",render:t=>{const[n,s]=c.useState("calendar"),a=c.useMemo(()=>[{name:"Календарь",key:"calendar",active:n==="calendar",onClick:()=>s("calendar"),startIconName:m.Calendar},{name:"Обновления",key:"updates",active:n==="updates",onClick:()=>s("updates"),startIconName:m.Update,startIconRotate:180},{name:"Действия",key:"actions",active:n==="actions",onClick:()=>s("actions"),endIconName:m.ChevronDown,endIconRotate:90}],[n]);return e.jsx(r,{...t,panes:a})}},k={name:"Mixed Tabs with Per-item isOnlyIcon",render:t=>{const[n,s]=c.useState("overview"),a=c.useMemo(()=>[{name:"Обзор",key:"overview",active:n==="overview",onClick:()=>s("overview"),startIconName:m.Calendar},{name:"Детали",key:"details",active:n==="details",onClick:()=>s("details")},{name:"Действия",key:"actions",active:n==="actions",onClick:()=>s("actions"),startIconName:m.Update,startIconRotate:180,endIconName:m.ChevronDown,endIconRotate:90,isOnlyIcon:!0}],[n]);return e.jsx(r,{...t,panes:a})},args:{variant:"filled"},parameters:{docs:{description:{story:"Edge-case: для элемента с isOnlyIcon=true endIconName/endIconRotate заданы намеренно и игнорируются в рендере."}}}},I={name:"All Tabs Variants",render:()=>{const[t,n]=c.useState("tab1"),s=[{name:"Профиль",key:"tab1"},{name:"Настройки",key:"tab2"},{name:"Безопасность",key:"tab3"}];return e.jsxs("div",{className:i.differentTabsWrapper,children:[e.jsxs("div",{className:i.differentTabsWrapper__tabsGroup,children:[e.jsx(o,{type:"p1",children:"Contained Variant (по умолчанию)"}),e.jsx(r,{panes:s.map(a=>({...a,active:t===a.key,onClick:()=>n(a.key||"")})),variant:"contained"})]}),e.jsxs("div",{className:i.differentTabsWrapper__tabsGroup,children:[e.jsx(o,{type:"p1",children:"Separated Tabs"}),e.jsx(r,{panes:s.map(a=>({...a,active:t===a.key,onClick:()=>n(a.key||"")})),isSeparated:!0,variant:"contained"})]}),e.jsxs("div",{className:i.differentTabsWrapper__tabsGroup,children:[e.jsx(o,{type:"p1",children:"Filled Variant"}),e.jsx(r,{panes:s.map(a=>({...a,active:t===a.key,onClick:()=>n(a.key||"")})),variant:"filled"})]}),e.jsxs("div",{className:i.differentTabsWrapper__tabsGroup,children:[e.jsx(o,{type:"p1",children:"Separated Tabs"}),e.jsx(r,{panes:s.map(a=>({...a,active:t===a.key,onClick:()=>n(a.key||"")})),isSeparated:!0,variant:"filled"})]}),e.jsxs("div",{className:i.differentTabsWrapper__tabsGroup,children:[e.jsx(o,{type:"p1",children:"Outlined Variant"}),e.jsx(r,{panes:s.map(a=>({...a,active:t===a.key,onClick:()=>n(a.key||"")})),variant:"outlined"})]})]})}},C={name:"Different Tabs Sizes",render:()=>{const[t,n]=c.useState("tab1"),s=[{name:"Профиль",key:"tab1"},{name:"Настройки",key:"tab2"},{name:"Безопасность",key:"tab3"}];return e.jsxs("div",{className:i.differentTabsWrapper,children:[e.jsxs("div",{className:i.differentTabsWrapper__tabsGroup,children:[e.jsx(o,{type:"p1",children:"Contained, md"}),e.jsx(r,{panes:s.map(a=>({...a,active:t===a.key,onClick:()=>n(a.key)})),variant:"contained",size:"md"})]}),e.jsxs("div",{className:i.differentTabsWrapper__tabsGroup,children:[e.jsx(o,{type:"p1",children:"Contained, xl"}),e.jsx(r,{panes:s.map(a=>({...a,active:t===a.key,onClick:()=>n(a.key)})),variant:"contained"})]}),e.jsxs("div",{className:i.differentTabsWrapper__tabsGroup,children:[e.jsx(o,{type:"p1",children:"Filled, md"}),e.jsx(r,{panes:s.map(a=>({...a,active:t===a.key,onClick:()=>n(a.key)})),variant:"filled",size:"md"})]}),e.jsxs("div",{className:i.differentTabsWrapper__tabsGroup,children:[e.jsx(o,{type:"p1",children:"Filled, xl"}),e.jsx(r,{panes:s.map(a=>({...a,active:t===a.key,onClick:()=>n(a.key)})),variant:"filled"})]})]})}},N={name:"Complex Tabs Example",render:()=>{const[t,n]=c.useState("info"),s=[{name:"Основная информация",key:"info",active:t==="info",onClick:()=>n("info"),infoTooltipText:"Основные данные об объекте недвижимости"},{name:"Характеристики",key:"properties",active:t==="properties",onClick:()=>n("properties"),infoTooltipText:"Технические характеристики и параметры объекта"},{name:"Документы",key:"documents",active:t==="documents",onClick:()=>n("documents"),infoTooltipText:"Прикрепленные документы и сертификаты"},{name:"История изменений",key:"history",active:t==="history",onClick:()=>n("history"),infoTooltipText:"Журнал изменений и версий объекта"}];return e.jsxs("div",{className:i.complexTabsExample,children:[e.jsx(o,{type:"h3",children:"Управление объектом недвижимости"}),e.jsx(r,{panes:s,variant:"filled",isSeparated:!1}),e.jsxs("div",{className:i.complexTabsExample__tabContentWrapper,children:[t==="info"&&e.jsx(o,{children:"Содержимое основной информации..."}),t==="properties"&&e.jsx(o,{children:"Содержимое характеристик..."}),t==="documents"&&e.jsx(o,{children:"Содержимое документов..."}),t==="history"&&e.jsx(o,{children:"Содержимое истории изменений..."})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Default Tabs",
  render: args => {
    const [activeTab, setActiveTab] = useState("address");
    const tabs = useMemo<TPaneItem[]>(() => {
      return [{
        name: "Адрес",
        key: "address",
        active: activeTab === "address",
        onClick: () => setActiveTab("address")
      }, {
        name: "Кадастровый номер",
        key: "cadastral",
        active: activeTab === "cadastral",
        onClick: () => setActiveTab("cadastral"),
        infoTooltipText: "Кадастровый номер",
        startIconName: EIconName.AddFile
      }];
    }, [activeTab]);
    return <Tabs {...args} panes={tabs} />;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Filled Tabs",
  render: Default.render,
  args: {
    variant: "filled"
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Outlined Tabs",
  render: Default.render,
  args: {
    variant: "outlined"
  }
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Separated Tabs",
  render: Default.render,
  args: {
    variant: "filled",
    isSeparated: true
  }
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Tabs with Tooltips",
  render: args => {
    const [activeTab, setActiveTab] = useState("address");
    const tabs = useMemo<TPaneItem[]>(() => {
      return [{
        name: "Адрес",
        key: "address",
        active: activeTab === "address",
        onClick: () => setActiveTab("address"),
        infoTooltipText: "Переменная согласно данным требованиям, обозначающая строительный (почтовый) адрес элементов АГР с дополнительной нумерации, при необходимости. Включает в себя следующие адресообразующие элементы, если они присутствуют: элементы улично-дорожной сети (аллея, бульвар, магистраль, переулок, площадь, проезд и т.д.), элементы объектов адресации (здание, земельный участок, владение и т.д.), типы зданий/сооружений (дом, корпус, строение и т.д.)."
      }, {
        name: "Кадастровый номер",
        key: "cadastral",
        active: activeTab === "cadastral",
        onClick: () => setActiveTab("cadastral"),
        infoTooltipText: "Если объект не имеет точного строительного/почтового адреса, например: деревня Внуково, то указывается кадастровый номер земельного участка. \\n" + "\\nПример: 77:01:0045002:4123"
      }];
    }, [activeTab]);
    return <Tabs {...args} panes={tabs} />;
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Tabs with Per-item Icons",
  render: args => {
    const [activeTab, setActiveTab] = useState("calendar");
    const tabs = useMemo<TPaneItem[]>(() => {
      return [{
        name: "Календарь",
        key: "calendar",
        active: activeTab === "calendar",
        onClick: () => setActiveTab("calendar"),
        startIconName: EIconName.Calendar
      }, {
        name: "Обновления",
        key: "updates",
        active: activeTab === "updates",
        onClick: () => setActiveTab("updates"),
        startIconName: EIconName.Update,
        startIconRotate: 180
      }, {
        name: "Действия",
        key: "actions",
        active: activeTab === "actions",
        onClick: () => setActiveTab("actions"),
        endIconName: EIconName.ChevronDown,
        endIconRotate: 90
      }];
    }, [activeTab]);
    return <Tabs {...args} panes={tabs} />;
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Mixed Tabs with Per-item isOnlyIcon",
  render: args => {
    const [activeTab, setActiveTab] = useState("overview");
    const tabs = useMemo<TPaneItem[]>(() => {
      return [{
        name: "Обзор",
        key: "overview",
        active: activeTab === "overview",
        onClick: () => setActiveTab("overview"),
        startIconName: EIconName.Calendar
      }, {
        name: "Детали",
        key: "details",
        active: activeTab === "details",
        onClick: () => setActiveTab("details")
      }, {
        name: "Действия",
        key: "actions",
        active: activeTab === "actions",
        onClick: () => setActiveTab("actions"),
        startIconName: EIconName.Update,
        startIconRotate: 180,
        endIconName: EIconName.ChevronDown,
        endIconRotate: 90,
        isOnlyIcon: true
      }];
    }, [activeTab]);
    return <Tabs {...args} panes={tabs} />;
  },
  args: {
    variant: "filled"
  },
  parameters: {
    docs: {
      description: {
        story: "Edge-case: для элемента с isOnlyIcon=true endIconName/endIconRotate заданы намеренно и игнорируются в рендере."
      }
    }
  }
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "All Tabs Variants",
  render: () => {
    const [tabState, setTabState] = useState("tab1");
    const commonTabs: TPaneItem[] = [{
      name: "Профиль",
      key: "tab1"
    }, {
      name: "Настройки",
      key: "tab2"
    }, {
      name: "Безопасность",
      key: "tab3"
    }];
    return <div className={styles.differentTabsWrapper}>\r
        <div className={styles.differentTabsWrapper__tabsGroup}>\r
          <Text type="p1">Contained Variant (по умолчанию)</Text>\r
          <Tabs panes={commonTabs.map(tab => ({
          ...tab,
          active: tabState === tab.key,
          onClick: () => setTabState(tab.key || "")
        }))} variant="contained" />\r
        </div>\r
        <div className={styles.differentTabsWrapper__tabsGroup}>\r
          <Text type="p1">Separated Tabs</Text>\r
          <Tabs panes={commonTabs.map(tab => ({
          ...tab,
          active: tabState === tab.key,
          onClick: () => setTabState(tab.key || "")
        }))} isSeparated={true} variant="contained" />\r
        </div>\r
        <div className={styles.differentTabsWrapper__tabsGroup}>\r
          <Text type="p1">Filled Variant</Text>\r
          <Tabs panes={commonTabs.map(tab => ({
          ...tab,
          active: tabState === tab.key,
          onClick: () => setTabState(tab.key || "")
        }))} variant="filled" />\r
        </div>\r
        <div className={styles.differentTabsWrapper__tabsGroup}>\r
          <Text type="p1">Separated Tabs</Text>\r
          <Tabs panes={commonTabs.map(tab => ({
          ...tab,
          active: tabState === tab.key,
          onClick: () => setTabState(tab.key || "")
        }))} isSeparated={true} variant="filled" />\r
        </div>\r
        <div className={styles.differentTabsWrapper__tabsGroup}>\r
          <Text type="p1">Outlined Variant</Text>\r
          <Tabs panes={commonTabs.map(tab => ({
          ...tab,
          active: tabState === tab.key,
          onClick: () => setTabState(tab.key || "")
        }))} variant="outlined" />\r
        </div>\r
      </div>;
  }
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Different Tabs Sizes",
  render: () => {
    const [tabState, setTabState] = useState("tab1");
    const commonTabs = [{
      name: "Профиль",
      key: "tab1"
    }, {
      name: "Настройки",
      key: "tab2"
    }, {
      name: "Безопасность",
      key: "tab3"
    }];
    return <div className={styles.differentTabsWrapper}>\r
        <div className={styles.differentTabsWrapper__tabsGroup}>\r
          <Text type="p1">Contained, md</Text>\r
          <Tabs panes={commonTabs.map(tab => ({
          ...tab,
          active: tabState === tab.key,
          onClick: () => setTabState(tab.key)
        }))} variant="contained" size="md" />\r
        </div>\r
        <div className={styles.differentTabsWrapper__tabsGroup}>\r
          <Text type="p1">Contained, xl</Text>\r
          <Tabs panes={commonTabs.map(tab => ({
          ...tab,
          active: tabState === tab.key,
          onClick: () => setTabState(tab.key)
        }))} variant="contained" />\r
        </div>\r
        <div className={styles.differentTabsWrapper__tabsGroup}>\r
          <Text type="p1">Filled, md</Text>\r
          <Tabs panes={commonTabs.map(tab => ({
          ...tab,
          active: tabState === tab.key,
          onClick: () => setTabState(tab.key)
        }))} variant="filled" size="md" />\r
        </div>\r
        <div className={styles.differentTabsWrapper__tabsGroup}>\r
          <Text type="p1">Filled, xl</Text>\r
          <Tabs panes={commonTabs.map(tab => ({
          ...tab,
          active: tabState === tab.key,
          onClick: () => setTabState(tab.key)
        }))} variant="filled" />\r
        </div>\r
      </div>;
  }
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Complex Tabs Example",
  render: () => {
    const [activeTab, setActiveTab] = useState("info");
    const tabs: TPaneItem[] = [{
      name: "Основная информация",
      key: "info",
      active: activeTab === "info",
      onClick: () => setActiveTab("info"),
      infoTooltipText: "Основные данные об объекте недвижимости"
    }, {
      name: "Характеристики",
      key: "properties",
      active: activeTab === "properties",
      onClick: () => setActiveTab("properties"),
      infoTooltipText: "Технические характеристики и параметры объекта"
    }, {
      name: "Документы",
      key: "documents",
      active: activeTab === "documents",
      onClick: () => setActiveTab("documents"),
      infoTooltipText: "Прикрепленные документы и сертификаты"
    }, {
      name: "История изменений",
      key: "history",
      active: activeTab === "history",
      onClick: () => setActiveTab("history"),
      infoTooltipText: "Журнал изменений и версий объекта"
    }];
    return <div className={styles.complexTabsExample}>\r
        <Text type="h3">Управление объектом недвижимости</Text>\r
        <Tabs panes={tabs} variant="filled" isSeparated={false} />\r
        <div className={styles.complexTabsExample__tabContentWrapper}>\r
          {activeTab === "info" && <Text>Содержимое основной информации...</Text>}\r
          {activeTab === "properties" && <Text>Содержимое характеристик...</Text>}\r
          {activeTab === "documents" && <Text>Содержимое документов...</Text>}\r
          {activeTab === "history" && <Text>Содержимое истории изменений...</Text>}\r
        </div>\r
      </div>;
  }
}`,...N.parameters?.docs?.source}}};const ye=["Default","Filled","Outlined","Separated","TabsWithTooltip","TabsWithPerItemIcons","IconOnlyTabs","AllVariants","DifferentSizes","ComplexExample"];export{I as AllVariants,N as ComplexExample,p as Default,C as DifferentSizes,u as Filled,k as IconOnlyTabs,y as Outlined,_ as Separated,x as TabsWithPerItemIcons,f as TabsWithTooltip,ye as __namedExportsOrder,ue as default};
