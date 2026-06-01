import{A as u}from"./ApplyButtons-BmQmNhpl.js";import{E as c}from"./Icon-DndJayG8.js";import"./iframe-CA4deTFl.js";import"./preload-helper-JD0jGv3q.js";import"./clsx-B-dksMZM.js";import"./Button-enFxszJ_.js";import"./Spinner-8qRTIFQm.js";const C={title:"Components/ApplyButtons",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
Универсальный компонент для отображения кнопок действий, таких как "Применить", "Сохранить", "Отмена". 
Компонент автоматически адаптируется под мобильные устройства и предоставляет гибкие настройки расположения.

## Основные возможности

- **Адаптивный дизайн**: автоматическое переключение между строкой и колонкой на разных устройствах
- **Гибкое выравнивание**: левое, центральное или правое расположение кнопок
- **Условное отображение**: кнопки отображаются только при наличии обработчиков клика
- **Интеграция с формами**: поддержка привязки к форме через formId
- **Состояния загрузки**: индикатор прогресса для кнопки отправки

## Поведение на разных устройствах

### Мобильные устройства (< 768px)
- **column**: кнопки в колонку (Cancel сверху, Submit снизу)
- **column-reverse**: кнопки в колонку (Submit сверху, Cancel снизу)  
- **row**: кнопки в строку (только для специальных случаев)

### Планшеты и десктоп (≥ 768px)
- Всегда горизонтальное расположение в строку
- Сохранение выбранного выравнивания (left/center/right)

## Базовое использование

\`\`\`jsx
<ApplyButtons
  cancelBtnContent="Отмена"
  submitBtnContent="Сохранить"
  onClose={() => console.log("Закрыть")}
  submit={() => console.log("Сохранить")}
/>
\`\`\`
        `}}},argTypes:{classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента
`,control:!1,table:{type:{summary:"string"}}},applyButtonsMobileDirection:{description:`Расположение кнопок на мобильных устройствах:
- 'column': кнопки в колонку (cancel сверху)
- 'column-reverse': кнопки в колонку (cancel снизу)
- 'row': кнопки в строку
- На desktop всегда в строку`,control:{type:"radio"},options:["column","column-reverse","row"],table:{defaultValue:{summary:"column"},type:{summary:"TApplyButtonsMobileDirection",detail:'"row" | "column" | "column-reverse"'}}},applyButtonsAlign:{description:`Выравнивание кнопок по горизонтали внутри родительского контейнера:
- 'left': по левому краю
- 'center': по центру
- 'right': по правому краю
`,control:{type:"radio"},options:["left","center","right"],table:{defaultValue:{summary:"center"},type:{summary:"TApplyButtonsAlign",detail:'"left" | "center" | "right"'}}},submitBtnVariant:{description:`Стиль кнопки 'Submit':
- 'primary': основной стиль для главных действий
- 'secondary': второстепенный стиль
- 'link': текстовый стиль для ссылок`,control:{type:"radio"},options:["primary","secondary","link"],table:{defaultValue:{summary:"primary"},type:{summary:"TButtonVariant",detail:'"primary" | "secondary" | "link"'}}},cancelBtnVariant:{description:`Стиль кнопки 'Cancel':
- 'primary': основной стиль для главных действий
- 'secondary': второстепенный стиль
- 'link': текстовый стиль для ссылок`,control:{type:"radio"},options:["primary","secondary","link"],table:{defaultValue:{summary:"secondary"},type:{summary:"TButtonVariant",detail:'"primary" | "secondary" | "link"'}}},cancelBtnContent:{description:`Текст кнопки Cancel. Если не указан, кнопка не отображается
`,control:{type:"text"},table:{defaultValue:{summary:"Отменить"}}},cancelBtnIconName:{description:`Иконка для кнопки Cancel (опционально)
`,control:"select",options:Object.values(c)},submitBtnIconName:{description:`Иконка для кнопки Submit (опционально)
`,control:"select",options:Object.values(c)},cancelBtnDisabled:{description:`Состояние disabled кнопки Cancel
`,control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},submitBtnClassName:{description:"Дополнительный CSS-класс для корневого элемента кнопки 'Submit'",control:!1,table:{type:{summary:"string"}}},cancelBtnClassName:{description:"Дополнительный CSS-класс для корневого элемента кнопки 'Cancel'",control:!1,table:{type:{summary:"string"}}},submitBtnContent:{description:`Текст кнопки Submit.
`,control:{type:"text"},table:{defaultValue:{summary:"Подтвердить"}}},formId:{description:`ID формы, к которой привязана кнопка отправки (атрибут form). Позволяет отправить форму извне
`,control:!1,table:{type:{summary:"string"}}},disabled:{description:`Состояние disabled кнопки Submit. Используется для блокировки при невалидной форме
`,control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},onClose:{description:`Callback-функция для кнопки Cancel. Вызывается при клике на кнопку отмены. Если не указан, кнопка не отображается
`,control:!1,table:{type:{detail:`onClose={(event) => {
  // логика обработки клика по кнопке Cancel;
}}`}}},submit:{description:`Callback-функция для кнопки Submit (вызывается при клике). Альтернатива отправке формы через formId. Если не указан, кнопка не отображается
`,control:!1,table:{type:{detail:`onClose={(event) => {
  // логика обработки клика по кнопке Submit;
}}`}}},loading:{description:`Показать индикатор загрузки на кнопке Submit. Используется во время асинхронных операций
`,control:{type:"boolean"},table:{defaultValue:{summary:"false"}}}},args:{onClose:()=>{},submit:()=>{},submitBtnVariant:"primary",cancelBtnVariant:"secondary"}},n={name:"Default Apply Buttons",args:{applyButtonsMobileDirection:"column",applyButtonsAlign:"center",cancelBtnContent:"Отмена",submitBtnContent:"Применить",cancelBtnDisabled:!1,disabled:!1,loading:!1}},t={name:"Only Submit Button",args:{applyButtonsMobileDirection:"column",applyButtonsAlign:"center",submitBtnContent:"Сохранить",disabled:!1,loading:!1}},e={name:"Only Cancel Button",args:{applyButtonsMobileDirection:"column",applyButtonsAlign:"center",cancelBtnContent:"Закрыть",cancelBtnDisabled:!1}},o={name:"Right applyButtonsAligned Buttons",args:{applyButtonsMobileDirection:"column",applyButtonsAlign:"right",cancelBtnContent:"Отмена",submitBtnContent:"Применить"}},a={name:"Left applyButtonsAligned Buttons",args:{applyButtonsMobileDirection:"column",applyButtonsAlign:"left",cancelBtnContent:"Отмена",submitBtnContent:"Применить"}},l={name:"Column Reverse applyButtonsMobileDirection",args:{applyButtonsMobileDirection:"column-reverse",applyButtonsAlign:"center",cancelBtnContent:"Отмена",submitBtnContent:"Сохранить"}},s={name:"Row Layout applyButtonsMobileDirection",args:{applyButtonsMobileDirection:"row",applyButtonsAlign:"center",cancelBtnContent:"Отмена",submitBtnContent:"Применить"}},r={name:"Submit Button Loading",args:{applyButtonsMobileDirection:"column",applyButtonsAlign:"center",cancelBtnContent:"Отмена",submitBtnContent:"Сохранить",loading:!0}},i={args:{applyButtonsMobileDirection:"column",applyButtonsAlign:"center",cancelBtnContent:"Отмена",submitBtnContent:"Применить",cancelBtnDisabled:!0,disabled:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Default Apply Buttons",
  args: {
    applyButtonsMobileDirection: "column",
    applyButtonsAlign: "center",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Применить",
    cancelBtnDisabled: false,
    disabled: false,
    loading: false
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Only Submit Button",
  args: {
    applyButtonsMobileDirection: "column",
    applyButtonsAlign: "center",
    submitBtnContent: "Сохранить",
    disabled: false,
    loading: false
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Only Cancel Button",
  args: {
    applyButtonsMobileDirection: "column",
    applyButtonsAlign: "center",
    cancelBtnContent: "Закрыть",
    cancelBtnDisabled: false
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Right applyButtonsAligned Buttons",
  args: {
    applyButtonsMobileDirection: "column",
    applyButtonsAlign: "right",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Применить"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Left applyButtonsAligned Buttons",
  args: {
    applyButtonsMobileDirection: "column",
    applyButtonsAlign: "left",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Применить"
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Column Reverse applyButtonsMobileDirection",
  args: {
    applyButtonsMobileDirection: "column-reverse",
    applyButtonsAlign: "center",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Сохранить"
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Row Layout applyButtonsMobileDirection",
  args: {
    applyButtonsMobileDirection: "row",
    applyButtonsAlign: "center",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Применить"
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Submit Button Loading",
  args: {
    applyButtonsMobileDirection: "column",
    applyButtonsAlign: "center",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Сохранить",
    loading: true
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    applyButtonsMobileDirection: "column",
    applyButtonsAlign: "center",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Применить",
    cancelBtnDisabled: true,
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};const f=["Default","WithoutCancel","WithoutSubmit","RightapplyButtonsAligned","LeftapplyButtonsAligned","ColumnReverse","RowLayout","WithLoading","DisabledButtons"];export{l as ColumnReverse,n as Default,i as DisabledButtons,a as LeftapplyButtonsAligned,o as RightapplyButtonsAligned,s as RowLayout,r as WithLoading,t as WithoutCancel,e as WithoutSubmit,f as __namedExportsOrder,C as default};
