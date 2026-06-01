import{j as n,r as x}from"./iframe-CA4deTFl.js";import{A as g}from"./Accordion-Ci8-vLQw.js";import{C as y}from"./Checkbox-BINt8MPw.js";import{F as S}from"./Form-k4KeBKZf.js";import{E as N}from"./Icon-DndJayG8.js";import{I as T}from"./Input-DGLVR5Mw.js";import{S as I,O}from"./index-BJQszVBn.js";import{E as v}from"./Tooltip-DOi7Oqjo.js";import"./preload-helper-JD0jGv3q.js";import"./clsx-B-dksMZM.js";import"./Text-DSk7EiGw.js";import"./index-hCGDlaXS.js";import"./Label-Br7vcJEe.js";import"./Potral-CkHkY5OB.js";import"./index-SbPXkCt7.js";import"./index-DESwEi8l.js";import"./BaseTooltip-CuZNMgt3.js";const E="_contentText_t88l3_1",A={contentText:E},q={title:"Components/Accordion",component:g,tags:["autodocs"],argTypes:{name:{description:`Заголовок аккордеона, отображаемый в свернутом состоянии
`,control:{type:"text"}},children:{description:`Содержимое аккордеона, которое отображается при раскрытии
`,control:!1,table:{type:{summary:"ReactNode"}}},defaultOpen:{description:`Состояние открыт/закрыт по умолчанию при первоначальной загрузке
`,control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isHiddenExpandIcon:{description:`Скрыть иконку раскрытия/сворачивания. Если true, аккордеон нельзя будет раскрыть/свернуть
`,control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},noBorder:{description:`Убрать границу вокруг аккордеона. Добавляет нижнюю границу и отступ
`,control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},noPadding:{description:`Убрать внутренние отступы (padding) аккордеона
`,control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},size:{description:"Размер компонента",control:{type:"radio"},options:["md","xl"],table:{defaultValue:{summary:"xl"},type:{summary:"TAccordionSize",detail:"'md' | 'xl'"}}},expandIconName:{description:`Имя иконки для раскрытия/сворачивания аккордеона. Использует компонент Icon из библиотеки
`,control:{type:"select"},options:Object.values(N),table:{defaultValue:{summary:"EIconName.ChevronDown"}}},onOpen:{description:`Callback-функция, вызываемая при изменении состояния аккордеона (раскрытии/сворачивании). Передает текущее состояние (boolean)
`,control:!1,table:{type:{detail:`onOpen={(open) => {
  console.log(open ? 'открыт' : 'закрыт');
}}`}}},infoTooltipText:{description:`Текст подсказки для имени аккордеона. Показывает иконку информации с тултипом.
`,control:{type:"text"},table:{type:{summary:"string"}}},tooltipPosition:{description:`Позиция тултипа для подсказки имени аккордеона.
`,control:{type:"select"},options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom"],table:{type:{summary:"ETooltipPosition"},defaultValue:{summary:'"bottom-left"'}}},classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента аккордеона
`,control:!1,table:{type:{summary:"string"}}},classNameHeader:{description:`Дополнительный CSS-класс для заголовка аккордеона
`,control:!1,table:{type:{summary:"string"}}},classNameTitle:{description:`Дополнительный CSS-класс для текста заголовка
`,control:!1,table:{type:{summary:"string"}}},classNameIcon:{description:`Дополнительный CSS-класс для иконки раскрытия/сворачивания
`,control:!1,table:{type:{summary:"string"}}},classNameChildrenWrapper:{description:`Дополнительный CSS-класс для обертки содержимого аккордеона
`,control:!1,table:{type:{summary:"string"}}},classNameBaseTooltipRoot:{description:`Дополнительный CSS-класс для корневого элемента тултипа имени аккордеона
`,control:!1,table:{type:{summary:"string"}}}},parameters:{docs:{description:{component:`
Аккордеон-компонент для организации контента в раскрывающихся секциях.

## Особенности анимации:

- Плавное раскрытие через CSS Grid (\`grid-template-rows\`)
- Постепенное появление контента с задержкой через opacity/visibility
- Вращение иконки на 180 градусов при раскрытии
- Адаптивные отступы: 16px (мобильные) / 32px (планшеты и выше)

## Состояния аккордеона:

- **Открыт**: контент виден, иконка перевернута
- **Закрыт**: контент скрыт, иконка в исходном положении
- **Заблокирован** (\`isHiddenExpandIcon=true\`): нельзя взаимодействовать

## Комбинации noBorder и noPadding:

- \`noBorder={true}\` - убирает все границы
- \`noBorder={true} noPadding={true}\` - добавляется нижняя граница и отступ
- \`noBorder={false} noPadding={true}\` - только граница без внутренних отступов

## Дополнительные возможности:

- Поддержка кастомных иконок через \`expandIconName\`
- Возможность отключения анимации с помощью CSS-переменных
- Поддержка различных уровней вложенности заголовков
- Адаптивная верстка для мобильных устройств

## Базовое использование

\`\`\`jsx
<Accordion name={"Название раскрывающего блока"}>
  <div>
    Какое то содержимое раскрывающегося блока
  </div>
</Accordion>
\`\`\`

## Пример с формой

\`\`\`jsx
<Accordion name="Форма с полями">
  <Form>
    <Input name="username" label="Имя пользователя" />
    <Input name="email" label="Email" type="email" />
    <Checkbox name="subscribe" label="Подписаться на рассылку" />
  </Form>
</Accordion>
\`\`\`
        `}}}},P=n.jsx("div",{className:A.contentText,children:"Разработать комплексную стратегию устойчивого развития, направленную на баланс между ростом населения и ограниченными ресурсами Земли. Внедрить глобальные программы по повышению уровня образования, доступности контрацепции и гендерного равенства для снижения рождаемости в перенаселенных регионах. Одновременно стимулировать переход на возобновляемые ресурсы, технологии замкнутого цикла и альтернативные источники пищи (например, искусственное мясо). Создать международные стандарты экологичного производства и потребления, чтобы минимизировать нагрузку на планету. Реализовать эти меры через сотрудничество ООН, государств и частного сектора с учетом культурных особенностей регионов."}),e={name:"Collapsed",args:{defaultOpen:!1,isHiddenExpandIcon:!1,noBorder:!1,noPadding:!1,name:"Основное задание",size:"xl",infoTooltipText:"",tooltipPosition:v.BottomLeft,children:P}},r={name:"Expanded",args:{...e.args,defaultOpen:!0}},s={name:"Accordion with InfoTooltip",render:e.render,args:{...e.args,infoTooltipText:"Информация о том, как работает аккордеон",name:"Аккордеон с информационным тултипом"}},l={name:"Initially Open Accordion",args:{defaultOpen:!0,name:"Предварительно открытый аккордеон",children:"Этот аккордеон изначально открыт при загрузке страницы"}},i={name:"No Border & No Padding",args:{name:"Аккордеон без границ и отступов",noBorder:!0,noPadding:!0,children:"Минималистичный вариант аккордеона без визуального обрамления"}},d={name:"Non-Collapsible Accordion",args:{name:"Нескладываемый аккордеон",isHiddenExpandIcon:!0,defaultOpen:!0,children:"Этот аккордеон всегда открыт и его нельзя свернуть"}},c={name:"Accordion with Form",args:{name:"Аккордеон с формой"},render:f=>{const[m,p]=x.useState({addressName:"",okrug:"",is:!1}),h=(u,{name:o,value:a})=>{p(t=>({...t,[o]:a}))},b=(u,{name:o,checked:a})=>{p(t=>({...t,[o]:a}))},C=(u,{name:o,value:a})=>{p(t=>({...t,[o]:a}))};return n.jsx(g,{...f,children:n.jsxs(S,{addMargin:!0,children:[n.jsx(T,{name:"addressName",label:"Название адреса",value:m.addressName,onChange:h}),n.jsx(I,{name:"okrug",label:"Округ",options:O,value:m.okrug,onChange:C}),n.jsx(y,{name:"is",label:"Является основным адресом",checked:m.is,onChange:b})]})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Collapsed",
  args: {
    defaultOpen: false,
    isHiddenExpandIcon: false,
    noBorder: false,
    noPadding: false,
    name: "Основное задание",
    size: "xl",
    infoTooltipText: "",
    tooltipPosition: ETooltipPosition.BottomLeft,
    children: DEFAULT_CONTENT
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Expanded",
  args: {
    ...Collapsed.args,
    defaultOpen: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Accordion with InfoTooltip",
  render: Collapsed.render,
  args: {
    ...Collapsed.args,
    infoTooltipText: "Информация о том, как работает аккордеон",
    name: "Аккордеон с информационным тултипом"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Initially Open Accordion",
  args: {
    defaultOpen: true,
    name: "Предварительно открытый аккордеон",
    children: "Этот аккордеон изначально открыт при загрузке страницы"
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "No Border & No Padding",
  args: {
    name: "Аккордеон без границ и отступов",
    noBorder: true,
    noPadding: true,
    children: "Минималистичный вариант аккордеона без визуального обрамления"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Non-Collapsible Accordion",
  args: {
    name: "Нескладываемый аккордеон",
    isHiddenExpandIcon: true,
    defaultOpen: true,
    children: "Этот аккордеон всегда открыт и его нельзя свернуть"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Accordion with Form",
  args: {
    name: "Аккордеон с формой"
  },
  render: args => {
    const [formData, setFormData] = useState({
      addressName: "",
      okrug: "",
      is: false
    });
    const handleInputChange: TOnChangeInput = (_event, {
      name,
      value
    }) => {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    const handleCheckboxChange: TOnChangeCheckbox = (_event, {
      name,
      checked
    }) => {
      setFormData(prevState => ({
        ...prevState,
        [name]: checked
      }));
    };
    const handleSelectChange: TOnChangeSelect = (_event, {
      name,
      value
    }) => {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    return <Accordion {...args}>\r
        <Form addMargin={true}>\r
          <Input name="addressName" label="Название адреса" value={formData.addressName} onChange={handleInputChange} />\r
          <Select name="okrug" label="Округ" options={OKRUG_OPTIONS} value={formData.okrug} onChange={handleSelectChange} />\r
          <Checkbox name="is" label="Является основным адресом" checked={formData.is} onChange={handleCheckboxChange} />\r
        </Form>\r
      </Accordion>;
  }
}`,...c.parameters?.docs?.source}}};const J=["Collapsed","Expanded","WithInfoTooltip","InitiallyOpen","NoBorderNoPadding","NonCollapsible","WithForm"];export{e as Collapsed,r as Expanded,l as InitiallyOpen,i as NoBorderNoPadding,d as NonCollapsible,c as WithForm,s as WithInfoTooltip,J as __namedExportsOrder,q as default};
