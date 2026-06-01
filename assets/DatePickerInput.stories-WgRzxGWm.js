import{r as b,j as y}from"./iframe-CA4deTFl.js";import{D as s}from"./DatePickerInput-BRn76-LL.js";import{E as f}from"./Tooltip-DOi7Oqjo.js";import"./preload-helper-JD0jGv3q.js";import"./index-hCGDlaXS.js";import"./clsx-B-dksMZM.js";import"./Icon-DndJayG8.js";import"./Label-Br7vcJEe.js";import"./BaseTooltip-CuZNMgt3.js";import"./Potral-CkHkY5OB.js";import"./index-SbPXkCt7.js";import"./index-DESwEi8l.js";const P={title:"Components/DatePickerInput",component:s,tags:["autodocs"],argTypes:{value:{description:`Текущее значение поля ввода даты в формате маски.
`,control:!1,table:{type:{summary:"string"}}},name:{description:`Имя поля для использования в формах.
`,control:!1,table:{type:{summary:"string"}}},onChange:{description:`Callback-функция при изменении значения. Получает событие и объект с name и value.
`,control:!1,table:{type:{detail:"(event: React.ChangeEvent<HTMLInputElement>, data: { name: string; value: string | null }) => void",summary:"TOnChangeDatePickerInput"}}},dateFormatMask:{description:`Маска форматирования даты. По умолчанию: "99.99.9999" для формата ДД.ММ.ГГГГ
Примеры: "99/99/9999", "9999-99-99"
`,control:{type:"text"},table:{type:{summary:"string | (string | RegExp)[]"},defaultValue:{summary:'"99.99.9999"'}}},variant:{description:`Стиль оформления поля:
- "outlined" - с границей (по умолчанию)
- "filled" - с заполненным фоном
`,control:{type:"select"},options:["outlined","filled"],table:{type:{summary:"TDatePickerInputVariant",detail:'"outlined" | "filled"'},defaultValue:{summary:'"outlined"'}}},disabled:{description:`Блокирует взаимодействие с полем.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},error:{description:`Текст ошибки валидации. Подсвечивает поле и показывает сообщение.
`,control:{type:"text"},table:{type:{summary:"string"}}},readOnlyInput:{description:`Режим только для чтения. Блокирует прямое редактирование, но сохраняет возможность выбора через календарь.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isVisibleErrorText:{description:`Отображать текст ошибки под полем ввода. Если false - ошибка будет только подсвечивать поле.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},isVisibleLabelText:{description:`Отображать метку над полем ввода. Полезно для скрытия лейбла при сохранении структуры.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},placeholderText:{description:`Текст-подсказка при отсутствии значения. По умолчанию: "дд.мм.гггг"
`,control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:'"дд.мм.гггг"'}}},label:{description:`Текст метки над полем ввода.
`,control:{type:"text"},table:{type:{summary:"string"}}},required:{description:`Отображает звездочку как индикатор обязательного поля.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isVisibleCalendarIcon:{description:`Отображать иконку календаря в правой части поля.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},infoTooltipText:{description:`Текст подсказки для метки поля.
`,control:{type:"text"},table:{type:{summary:"string"}}},tooltipPosition:{description:`Позиция тултипа для подсказки лейбла.
`,control:{type:"select"},options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom"],table:{type:{summary:"ETooltipPosition"},defaultValue:{summary:'"bottom-left"'}}},onClick:{description:`Callback при клике на поле ввода.
`,control:!1,table:{type:{summary:"(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void"}}},onMouseDownInput:{description:`Callback при нажатии кнопки мыши на поле.
`,control:!1,table:{type:{summary:"(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void"}}},classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента поля.
`,control:!1,table:{type:{summary:"string"}}},classNameLabel:{description:`Дополнительный CSS-класс для элемента метки.
`,control:!1,table:{type:{summary:"string"}}},classNameError:{description:`Дополнительный CSS-класс для элемента ошибки.
`,control:!1,table:{type:{summary:"string"}}},classNameBaseTooltipRoot:{description:`Дополнительный CSS-класс для тултипа.
`,control:!1,table:{type:{summary:"string"}}}},parameters:{docs:{description:{component:`
Компонент поля ввода даты с маской, валидацией и поддержкой различных состояний.

## Особенности:
- **Автоматическое форматирование** через маску ввода
- **Два стиля оформления**: outlined (с границей) и filled (с заполненным фоном)
- **Два размера**: md (средний) и lg (большой)
- **Валидация** с подсветкой ошибок и текстовыми сообщениями
- **Опциональная иконка календаря**
- **Управление фокусом** с автоматическим скрытием при клике вне поля
- **Поддержка меток** с тултипами и индикатором обязательности
- **Гибкая система CSS-классов** для кастомизации
- **Контроль видимости** текста ошибки и метки

## Использование с состоянием:

\`\`\`jsx
const [date, setDate] = useState("");

<DatePickerInput
  name="birthDate"
  value={date}
  onChange={(event, { name, value }) => setDate(value)}
  label="Дата рождения"
  required
  isVisibleCalendarIcon
  isVisibleErrorText={true}
  isVisibleLabelText={true}
/>
\`\`\`
        `}}},args:{dateFormatMask:"99.99.9999",placeholderText:"дд.мм.гггг",variant:"outlined",disabled:!1,error:"",readOnlyInput:!1,isVisibleCalendarIcon:!1,isVisibleErrorText:!0,isVisibleLabelText:!0,required:!1,label:"",infoTooltipText:"",tooltipPosition:f.BottomLeft}},e={name:"Default DatePickerInput",render:l=>{const[i,m]=b.useState({createAt:""}),c=(g,{name:p,value:u})=>{m(d=>({...d,[p]:u}))};return y.jsx(s,{...l,name:"createAt",value:i.createAt,onChange:c})}},t={name:"With Label and Tooltip",args:{label:"Дата создания",infoTooltipText:"Выберите дату создания документа",required:!0,isVisibleCalendarIcon:!0}},a={name:"With Error State",args:{label:"Дата окончания",error:"Дата не может быть в прошлом",isVisibleCalendarIcon:!0}},r={name:"Disabled State",args:{label:"Дата блокировки",disabled:!0,value:"01.01.2024"}},o={name:"With Hidden Label",args:{label:"Скрытая метка",isVisibleLabelText:!1,placeholderText:"Метка скрыта, но доступна для screen readers"}},n={name:"With Hidden Error Text",args:{label:"Дата с ошибкой",error:"Эта ошибка не будет отображена текстом",isVisibleErrorText:!1,isVisibleCalendarIcon:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default DatePickerInput",
  render: args => {
    const [formData, setFormData] = useState({
      createAt: ""
    });
    const onChange: TOnChangeDatePickerInput = (_event, {
      name,
      value
    }) => {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    return <DatePickerInput {...args} name="createAt" value={formData.createAt} onChange={onChange} />;
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "With Label and Tooltip",
  args: {
    label: "Дата создания",
    infoTooltipText: "Выберите дату создания документа",
    required: true,
    isVisibleCalendarIcon: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "With Error State",
  args: {
    label: "Дата окончания",
    error: "Дата не может быть в прошлом",
    isVisibleCalendarIcon: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Disabled State",
  args: {
    label: "Дата блокировки",
    disabled: true,
    value: "01.01.2024"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "With Hidden Label",
  args: {
    label: "Скрытая метка",
    isVisibleLabelText: false,
    placeholderText: "Метка скрыта, но доступна для screen readers"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "With Hidden Error Text",
  args: {
    label: "Дата с ошибкой",
    error: "Эта ошибка не будет отображена текстом",
    isVisibleErrorText: false,
    isVisibleCalendarIcon: true
  }
}`,...n.parameters?.docs?.source}}};const W=["Default","WithLabel","WithError","Disabled","HiddenLabel","HiddenErrorText"];export{e as Default,r as Disabled,n as HiddenErrorText,o as HiddenLabel,a as WithError,t as WithLabel,W as __namedExportsOrder,P as default};
