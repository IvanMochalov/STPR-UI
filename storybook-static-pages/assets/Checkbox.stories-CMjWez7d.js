import{r as S,j as t}from"./iframe-CA4deTFl.js";import{C as r}from"./Checkbox-BINt8MPw.js";import{E as f}from"./Tooltip-DOi7Oqjo.js";import"./preload-helper-JD0jGv3q.js";import"./clsx-B-dksMZM.js";import"./BaseTooltip-CuZNMgt3.js";import"./Icon-DndJayG8.js";import"./Potral-CkHkY5OB.js";import"./index-SbPXkCt7.js";import"./index-DESwEi8l.js";const z="_sizesColumn_pp9tw_1",T="_statesColumn_pp9tw_7",v={sizesColumn:z,statesColumn:T},P={title:"Components/Checkbox",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
Компонент чекбокса с поддержкой различных размеров, состояний и дополнительных функций. 
Реализован с использованием кастомного дизайна вместо нативного input[type="checkbox"].

## Основные возможности

- **Два размера**: md (20px) и lg (30px)
- **Состояния**: checked, disabled, error
- **Валидация**: поддержка required поля и отображения ошибок
- **Дополнительная информация**: тултипы для пояснений
- **Доступность**: правильная семантика и ARIA-атрибуты
- **Адаптивный дизайн**: увеличенный текст на планшетах и десктопе

## Базовое использование

\`\`\`jsx
import {TOnChangeCheckbox} from "test-stpr-ui-kit";
...

const [states, setStates] = useState({
  someCheck: false,
});
    
const handleChange: TOnChangeCheckbox = (_event, data,) => {
  setStates((prev) => ({
    ...prev,
    [data.name]: data.checked,
  }));
};

return (
  <Checkbox
    name="someCheck"
    checked={states.someCheck}
    onChange={handleChange}
  />
\`\`\`
        `}}},argTypes:{size:{description:`Размер чекбокса:
- 'lg': большой (30x30px), галочка 16x16px
- 'md': средний (20x20px), галочка 12x12px`,control:{type:"radio"},options:["md","lg"],table:{defaultValue:{summary:"lg"},type:{summary:"TCheckboxSize",detail:"'md' | 'lg'"}}},checked:{description:"Состояние чекбокса (выбран/не выбран)",control:!1,table:{defaultValue:{summary:"false"}}},disabled:{description:"Блокирует взаимодействие с чекбоксом. Визуально затемняет элемент",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},name:{description:"Имя чекбокса (обязательное). Используется для идентификации в формах",control:{type:"text"}},label:{description:"Текстовая метка чекбокса. Отображается справа от квадрата",control:{type:"text"}},error:{description:"Текст ошибки валидации. Отображается под чекбоксом красным цветом",control:{type:"text"}},value:{description:"Значение чекбокса (опционально). Передается в onChange при изменении для дополнительной логики",control:{type:"text"}},required:{description:"Помечает поле как обязательное. Отображает звездочку (*) рядом с лейблом",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},tooltipPosition:{description:"Позиция всплывающей подсказки относительно чекбокса",control:{type:"select"},options:Object.values(f),table:{defaultValue:{summary:"bottom-left"}}},infoTooltipText:{description:"Текст всплывающей подсказки. Отображается при наведении на иконку информации",control:{type:"text"}},onChange:{description:"Callback-функция при изменении состояния чекбокса. Передает event и данные чекбокса",control:!1,table:{type:{summary:"TOnChangeCheckbox"}}},onMouseEnter:{description:"Callback-функция при наведении курсора на контейнер чекбокса",control:!1},classNameRoot:{description:"Дополнительный CSS-класс для корневого элемента чекбокса",control:!1,table:{type:{summary:"string"}}},classNameError:{description:"Дополнительный CSS-класс для элемента отображения ошибки",control:!1,table:{type:{summary:"string"}}}},args:{size:"lg",label:"Включить проверку",name:"checkbox-example",disabled:!1,required:!1,error:"",infoTooltipText:""}},n=e=>{const[s,a]=S.useState({is:e.checked||!1}),x=(l,o)=>{a(y=>({...y,[o.name]:o.checked!==void 0?o.checked:o.value}))};return t.jsx(r,{...e,error:e.error&&!s.is?e.error:void 0,name:"is",checked:s.is,onChange:x})},c={name:"Default Checkbox",render:n,args:{size:"lg",label:"Включить проверку",checked:!1}},i={name:"Medium Size Checkbox",render:n,args:{size:"md",label:"Компактный чекбокс"}},d={name:"Checked Checkbox",render:n,args:{checked:!0,label:"Предварительно выбранный"}},m={name:"Disabled Checkbox",render:n,args:{disabled:!0,label:"Заблокированный чекбокс"}},h={name:"Disabled and Checked",render:n,args:{disabled:!0,checked:!0,label:"Заблокированный и выбранный"}},p={name:"Required Checkbox",render:n,args:{required:!0,label:"Обязательное поле"}},u={name:"Checkbox with Error",render:n,args:{required:!0,error:"Это поле обязательно для выбора",label:"Чекбокс с ошибкой"}},b={name:"Checkbox with Tooltip",render:n,args:{label:"Чекбокс с подсказкой",infoTooltipText:"Эта опция включает дополнительные функции безопасности",tooltipPosition:f.Right}},C={name:"Checkbox without Label",render:n,args:{label:void 0,name:"no-label"}},k={render:()=>{const[e,s]=S.useState({large:!1,medium:!1}),a=(x,l)=>{s(o=>({...o,[l.name]:l.checked}))};return t.jsxs("div",{className:v.sizesColumn,children:[t.jsx(r,{name:"large",size:"lg",label:"Large size (30x30px)",checked:e.large,onChange:a}),t.jsx(r,{name:"medium",size:"md",label:"Medium size (20x20px)",checked:e.medium,onChange:a})]})}},g={name:"All States Overview",render:()=>{const[e,s]=S.useState({normal:!1,checked:!0,disabled:!1,error:!1,tooltip:!1}),a=(x,l)=>{s(o=>({...o,[l.name]:l.checked}))};return t.jsxs("div",{className:v.statesColumn,children:[t.jsx(r,{name:"normal",label:"Обычный чекбокс",checked:e.normal,onChange:a}),t.jsx(r,{name:"checked",label:"Предварительно выбранный",checked:e.checked,onChange:a}),t.jsx(r,{name:"disabled",label:"Заблокированный",disabled:!0,checked:e.disabled,onChange:a}),t.jsx(r,{name:"error",label:"С ошибкой",error:e.error?void 0:"Необходимо согласие",checked:e.error,onChange:a}),t.jsx(r,{name:"tooltip",label:"С подсказкой",infoTooltipText:"Это пример всплывающей подсказки",tooltipPosition:f.Right,checked:e.tooltip,onChange:a})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Default Checkbox",
  render: CheckboxWithState,
  args: {
    size: "lg",
    label: "Включить проверку",
    checked: false
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Medium Size Checkbox",
  render: CheckboxWithState,
  args: {
    size: "md",
    label: "Компактный чекбокс"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Checked Checkbox",
  render: CheckboxWithState,
  args: {
    checked: true,
    label: "Предварительно выбранный"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Disabled Checkbox",
  render: CheckboxWithState,
  args: {
    disabled: true,
    label: "Заблокированный чекбокс"
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Disabled and Checked",
  render: CheckboxWithState,
  args: {
    disabled: true,
    checked: true,
    label: "Заблокированный и выбранный"
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Required Checkbox",
  render: CheckboxWithState,
  args: {
    required: true,
    label: "Обязательное поле"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Checkbox with Error",
  render: CheckboxWithState,
  args: {
    required: true,
    error: "Это поле обязательно для выбора",
    label: "Чекбокс с ошибкой"
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Checkbox with Tooltip",
  render: CheckboxWithState,
  args: {
    label: "Чекбокс с подсказкой",
    infoTooltipText: "Эта опция включает дополнительные функции безопасности",
    tooltipPosition: ETooltipPosition.Right
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Checkbox without Label",
  render: CheckboxWithState,
  args: {
    label: undefined,
    name: "no-label"
  }
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [states, setStates] = useState({
      large: false,
      medium: false
    });
    const handleChange = (_event: React.ChangeEvent<HTMLInputElement>, data: {
      name: string;
      checked?: boolean;
    }) => {
      setStates(prev => ({
        ...prev,
        [data.name]: data.checked
      }));
    };
    return <div className={styles.sizesColumn}>\r
        <Checkbox name="large" size="lg" label="Large size (30x30px)" checked={states.large} onChange={handleChange} />\r
        <Checkbox name="medium" size="md" label="Medium size (20x20px)" checked={states.medium} onChange={handleChange} />\r
      </div>;
  }
}`,...k.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "All States Overview",
  render: () => {
    const [states, setStates] = useState({
      normal: false,
      checked: true,
      disabled: false,
      error: false,
      tooltip: false
    });
    const handleChange = (_event: React.ChangeEvent<HTMLInputElement>, data: {
      name: string;
      checked?: boolean;
    }) => {
      setStates(prev => ({
        ...prev,
        [data.name]: data.checked
      }));
    };
    return <div className={styles.statesColumn}>\r
        <Checkbox name="normal" label="Обычный чекбокс" checked={states.normal} onChange={handleChange} />\r
\r
        <Checkbox name="checked" label="Предварительно выбранный" checked={states.checked} onChange={handleChange} />\r
\r
        <Checkbox name="disabled" label="Заблокированный" disabled={true} checked={states.disabled} onChange={handleChange} />\r
\r
        <Checkbox name="error" label="С ошибкой" error={!states.error ? "Необходимо согласие" : undefined} checked={states.error} onChange={handleChange} />\r
\r
        <Checkbox name="tooltip" label="С подсказкой" infoTooltipText="Это пример всплывающей подсказки" tooltipPosition={ETooltipPosition.Right} checked={states.tooltip} onChange={handleChange} />\r
      </div>;
  }
}`,...g.parameters?.docs?.source}}};const O=["Default","MediumSize","CheckedState","DisabledState","DisabledChecked","RequiredField","WithError","WithTooltip","WithoutLabel","SizesComparison","AllStates"];export{g as AllStates,d as CheckedState,c as Default,h as DisabledChecked,m as DisabledState,i as MediumSize,p as RequiredField,k as SizesComparison,u as WithError,b as WithTooltip,C as WithoutLabel,O as __namedExportsOrder,P as default};
