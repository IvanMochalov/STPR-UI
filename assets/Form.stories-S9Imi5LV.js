import{r as x,j as e}from"./iframe-DFzgFXfL.js";import{C as b}from"./Checkbox-4wuuXQtk.js";import{F as v}from"./Form-WfnlPbHH.js";import{I as d}from"./Input-Bnd2RYvP.js";import{S as F,O as M}from"./index-Yj2EMtjo.js";import"./preload-helper-DCNYn41m.js";import"./clsx-B-dksMZM.js";import"./Tooltip-CAn8cC1X.js";import"./BaseTooltip-70cfOlMv.js";import"./Icon-FLtHPxG2.js";import"./Potral-BSVlFBsR.js";import"./index-DP6wETD2.js";import"./index-sQF5gpHW.js";import"./index-CJOS51_R.js";import"./Label-5pjt2kXZ.js";const y="_decoratorWrapper_1fxbm_1",D={decoratorWrapper:y},G={title:"Components/Form",component:v,tags:["autodocs"],argTypes:{size:{description:`Размер формы. Определяет величину отступов между элементами:
- "md" - средний размер (24px на мобильных, 32px на планшетах+)
- "lg" - большой размер (32px на мобильных, 48px на планшетах+)
`,control:{type:"select"},options:["md","lg"],table:{type:{summary:"TFormSize",detail:"'md' | 'lg'"},defaultValue:{summary:'"lg"'}}},withSeparator:{description:`Добавить разделители между элементами формы.
Каждый элемент кроме первого получает верхнюю границу-разделитель.

Работает вместе с \`addMargin={true}\``,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},addMargin:{description:"Добавить вертикальные отступы между элементами формы.\nРазмер отступов зависит от параметра `size`.\n",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{description:`Занимать всю доступную ширину родительского контейнера.
Если false - ширина формы определяется содержимым (width: fit-content).
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента формы
`,control:!1,table:{type:{summary:"string"}}},onSubmit:{description:`Callback-функция, вызываемая при отправке формы.
Автоматически предотвращает стандартное поведение браузера (event.preventDefault()).
`,control:!1,table:{type:{summary:"() => void"}}},id:{description:`HTML-атрибут id для формы. Полезен для связывания с элементами <label>.
`,control:!1,table:{type:{summary:"string"}}},name:{description:`HTML-атрибут name для формы. Используется для идентификации формы.
`,control:!1,table:{type:{summary:"string"}}},noValidate:{description:`Отключить встроенную валидацию браузера для формы.
Позволяет реализовать кастомную логику валидации.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{description:`Дочерние элементы формы. Обычно содержат поля ввода, кнопки и другие компоненты.
`,control:!1,table:{type:{summary:"ReactNode"}}}},parameters:{docs:{description:{component:`
Универсальный компонент формы с поддержкой различных стилей компоновки и адаптивным дизайном.

## Особенности:
- **Адаптивные отступы** - размеры меняются на разных \`breakpoints\` (мобильные/планшеты+)
- **Гибкая ширина** - может занимать всю ширину или подстраиваться под содержимое
- **Два варианта компоновки** - с разделителями или с отступами между элементами
- **Автоматический \`preventDefault\`** - предотвращает перезагрузку страницы при отправке
- **Семантическая HTML-разметка** - использует нативный \`<form>\` элемент

## Варианты компоновки:
- **С отступами \`(addMargin)\`** - вертикальные отступы между элементами
- **С разделителями \`(withSeparator)\`** - горизонтальные линии между элементами (только при \`addMargin={true}\`)
- **Комбинированный** - можно использовать оба варианта одновременно

## Адаптивность:
Все отступы и разделители адаптируются под разные разрешения устройств:
- Мобильные: базовые размеры отступов
- Планшеты и выше \`(sm breakpoint)\`: увеличенные размеры

## Рекомендации по использованию:
Используйте для создания структурированных форм с единообразным расположением элементов.

### Базовое использование

\`\`\`jsx
<Form onSubmit={handleSubmit} addMargin={true} size="lg">
  <Input label="Имя" name="name" />
  <Input label="Email" name="email" />
  <Button type="submit">Отправить</Button>
</Form>
\`\`\`
        `}}},decorators:[a=>e.jsx("div",{className:D.decoratorWrapper,children:e.jsx(a,{})})],args:{size:"lg",addMargin:!0,fullWidth:!0,withSeparator:!1,noValidate:!1,onSubmit:()=>{alert("Form is submitted")}}},o={name:"Form with Margin and Full Width",render:a=>{const[r,s]=x.useState({addressName:"",okrug:"",is:!1}),m=(i,{name:n,value:t})=>{s(l=>({...l,[n]:t}))},c=(i,{name:n,checked:t})=>{s(l=>({...l,[n]:t}))},f=(i,n)=>{s(t=>({...t,[n.name]:n.value}))};return e.jsxs(v,{addMargin:a.addMargin,fullWidth:a.fullWidth,withSeparator:a.withSeparator,onSubmit:a.onSubmit,id:a.id,name:a.name,noValidate:a.noValidate,classNameRoot:a.classNameRoot,size:a.size,children:[e.jsx(b,{label:"Включить проверку",name:"is",checked:r.is,onChange:c}),e.jsx(d,{label:"Наименование адреса",name:"addressName",value:r.addressName,onChange:m}),e.jsx(F,{label:"Округ",options:M,name:"okrug",value:r.okrug,onChange:f})]})}},p={name:"Form with Separator",render:o.render,args:{withSeparator:!0,addMargin:!0}},u={name:"Medium Size Form",render:o.render,args:{size:"md",addMargin:!0}},h={name:"Large Size Form",render:o.render,args:{size:"lg",addMargin:!0}},g={name:"Form with Fit Content Width",render:o.render,args:{fullWidth:!1,addMargin:!0}},S={name:"Form without Margin",render:o.render,args:{addMargin:!1,withSeparator:!1}},C={name:"Complex Form Example",render:a=>{const[r,s]=x.useState({firstName:"",lastName:"",email:"",phone:"",district:"",agreeTerms:!1,newsletter:!0}),m=(i,{name:n,value:t})=>{s(l=>({...l,[n]:t}))},c=(i,{name:n,checked:t})=>{s(l=>({...l,[n]:t}))},f=(i,n)=>{s(t=>({...t,[n.name]:n.value}))};return e.jsxs(v,{...a,children:[e.jsx(d,{label:"Имя",name:"firstName",value:r.firstName,onChange:m,placeholder:"Введите ваше имя"}),e.jsx(d,{label:"Фамилия",name:"lastName",value:r.lastName,onChange:m,placeholder:"Введите вашу фамилию"}),e.jsx(d,{label:"Email",name:"email",value:r.email,onChange:m,placeholder:"example@mail.ru"}),e.jsx(d,{label:"Телефон",name:"phone",value:r.phone,onChange:m,placeholder:"+7 (XXX) XXX-XX-XX"}),e.jsx(F,{label:"Округ",options:M,name:"district",value:r.district,onChange:f,placeholder:"Выберите округ"}),e.jsx(b,{label:"Я согласен с условиями использования",name:"agreeTerms",checked:r.agreeTerms,onChange:c}),e.jsx(b,{label:"Получать новостную рассылку",name:"newsletter",checked:r.newsletter,onChange:c})]})},args:{addMargin:!0,withSeparator:!0,size:"lg"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Form with Margin and Full Width",
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
    const handleSelectChange: TOnChangeSelect = (_event, data) => {
      setFormData(prevState => ({
        ...prevState,
        [data.name]: data.value
      }));
    };
    return <Form addMargin={args.addMargin} fullWidth={args.fullWidth} withSeparator={args.withSeparator} onSubmit={args.onSubmit} id={args.id} name={args.name} noValidate={args.noValidate} classNameRoot={args.classNameRoot} size={args.size}>\r
        <Checkbox label={"Включить проверку"} name={"is"} checked={formData.is} onChange={handleCheckboxChange} />\r
        <Input label={"Наименование адреса"} name={"addressName"} value={formData.addressName} onChange={handleInputChange} />\r
        <Select label={"Округ"} options={OKRUG_OPTIONS} name={"okrug"} value={formData.okrug} onChange={handleSelectChange} />\r
      </Form>;
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Form with Separator",
  render: Default.render,
  args: {
    withSeparator: true,
    addMargin: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Medium Size Form",
  render: Default.render,
  args: {
    size: "md",
    addMargin: true
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Large Size Form",
  render: Default.render,
  args: {
    size: "lg",
    addMargin: true
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Form with Fit Content Width",
  render: Default.render,
  args: {
    fullWidth: false,
    addMargin: true
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Form without Margin",
  render: Default.render,
  args: {
    addMargin: false,
    withSeparator: false
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Complex Form Example",
  render: args => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      district: "",
      agreeTerms: false,
      newsletter: true
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
    const handleSelectChange: TOnChangeSelect = (_event, data) => {
      setFormData(prevState => ({
        ...prevState,
        [data.name]: data.value
      }));
    };
    return <Form {...args}>\r
        <Input label={"Имя"} name={"firstName"} value={formData.firstName} onChange={handleInputChange} placeholder="Введите ваше имя" />\r
        <Input label={"Фамилия"} name={"lastName"} value={formData.lastName} onChange={handleInputChange} placeholder="Введите вашу фамилию" />\r
        <Input label={"Email"} name={"email"} value={formData.email} onChange={handleInputChange} placeholder="example@mail.ru" />\r
        <Input label={"Телефон"} name={"phone"} value={formData.phone} onChange={handleInputChange} placeholder="+7 (XXX) XXX-XX-XX" />\r
        <Select label={"Округ"} options={OKRUG_OPTIONS} name={"district"} value={formData.district} onChange={handleSelectChange} placeholder="Выберите округ" />\r
        <Checkbox label={"Я согласен с условиями использования"} name={"agreeTerms"} checked={formData.agreeTerms} onChange={handleCheckboxChange} />\r
        <Checkbox label={"Получать новостную рассылку"} name={"newsletter"} checked={formData.newsletter} onChange={handleCheckboxChange} />\r
      </Form>;
  },
  args: {
    addMargin: true,
    withSeparator: true,
    size: "lg"
  }
}`,...C.parameters?.docs?.source}}};const H=["Default","WithSeparator","MediumSize","LargeSize","FitContentWidth","WithoutMargin","ComplexForm"];export{C as ComplexForm,o as Default,g as FitContentWidth,h as LargeSize,u as MediumSize,p as WithSeparator,S as WithoutMargin,H as __namedExportsOrder,G as default};
