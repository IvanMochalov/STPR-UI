import{r as d,j as s}from"./iframe-DFzgFXfL.js";import{O as L,S as i}from"./index-Yj2EMtjo.js";import"./preload-helper-DCNYn41m.js";import"./clsx-B-dksMZM.js";import"./Icon-FLtHPxG2.js";import"./Label-5pjt2kXZ.js";import"./Tooltip-CAn8cC1X.js";import"./BaseTooltip-70cfOlMv.js";import"./Potral-BSVlFBsR.js";import"./index-DP6wETD2.js";import"./index-sQF5gpHW.js";const C="_decoratorWrapper_cvdzb_1",E="_absoluteErrorWrapper_cvdzb_6",T={decoratorWrapper:C,absoluteErrorWrapper:E},R={title:"Components/Select",component:i,tags:["autodocs"],argTypes:{onChange:{description:`Callback-функция, вызываемая при выборе значения из списка.
Получает два параметра:
- event: React событие MouseEvent&lt;HTMLDivElement&gt;
- data: объект с именем поля и выбранным значением

Особенности:
- При выборе значения передается \`string\` или \`null\` если сброс
- Автоматически закрывает выпадающий список после выбора
- Для работы с формами рекомендуется использовать вместе с состоянием React
`,control:!1,table:{type:{detail:`(event: React.MouseEvent&lt;HTMLDivElement&gt;,
data: {
  name: string;
  value: string | null
}) => void`,summary:"TOnChangeSelect"}}},variant:{description:`Вариант стиля селекта:
- "outlined" - с границей (по умолчанию)
- "filled" - с заполненным фоном
`,control:{type:"select"},options:["outlined","filled"],table:{type:{summary:"TSelectVariant",detail:"'outlined' | 'filled'"},defaultValue:{summary:'"outlined"'}}},size:{description:"Размер поля ввода",control:{type:"radio"},options:["md","xl"],table:{defaultValue:{summary:"xl"},type:{summary:"TSelectSize",detail:"'md' | 'xl'"}}},disabled:{description:`Отключить селект. Заблокирует взаимодействие и изменит визуальный стиль.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isAbsolutePositionError:{description:`Позиционировать текст ошибки абсолютно. Полезно для компактных форм.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isVisibleDefaultTitle:{description:`Показывать стандартный title при наведении на селект с текстом значения.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},isScrollableList:{description:"Включить прокрутку для длинных списков. Ограничивает высоту списка значением `maxHeightList` и добавляет скроллбар.\n",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isSearchable:{description:`Включить поиск по опциям в выпадающем списке.

Особенности:
- Поиск по тексту лейблов опций, локальная фильтрация
- Поле поиска автоматически фокусируется при открытии
- При открытии списка **снизу** от контрола поле поиска сверху списка; при открытии **сверху** (мало места снизу) — поле поиска внизу списка (ближе к контролу), позиция пересчитывается при изменении фильтра
- Поисковый запрос сбрасывается при закрытии списка и после выбора значения
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{description:`Пометить поле как обязательное для заполнения. Добавляет звездочку к лейблу.
`,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},maxHeightList:{description:"Максимальная высота выпадающего списка опций (px). Учитывается только при `isScrollableList={true}`.\n",control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:"180"}}},tooltipPosition:{description:`Позиция тултипа для подсказки лейбла.
`,control:{type:"select"},options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom"],table:{type:{summary:"ETooltipPosition"},defaultValue:{summary:'"bottom-left"'}}},label:{description:`Текст лейбла селекта. Отображается над элементом выбора.
`,control:{type:"text"},table:{type:{summary:"string"}}},infoTooltipText:{description:`Текст подсказки для лейбла. Показывает иконку информации с тултипом.
`,control:{type:"text"},table:{type:{summary:"string"}}},error:{description:`Текст ошибки валидации. Подсвечивает селект красным и показывает сообщение об ошибке.
`,control:{type:"text"},table:{type:{summary:"string"}}},placeholder:{description:`Текст-подсказка когда значение не выбрано.
`,control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:'"Выберите из списка..."'}}},searchPlaceholder:{description:`Текст-подсказка для поля поиска. Отображается только при \`isSearchable={true}\`.

Особенности:
- Используется только когда включен поиск
- Помогает пользователю понять назначение поля поиска
- По умолчанию: "Поиск..."
`,control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:'"Поиск..."'}}},value:{description:"Выбранное значение селекта. Должно соответствовать одному из `options.value`.\n",control:!1,table:{type:{summary:"string"}}},name:{description:`Имя поля для формы. Обязательный параметр.
`,control:!1,table:{type:{summary:"string"}}},options:{description:`Массив опций для выбора. Каждая опция должна содержать value и label.
`,control:!1,table:{defaultValue:{summary:"[]"},type:{summary:"TSelectOption[]",detail:`TSelectOption[] = {
  value: string | null;
  label: string;
  key?: string;
}[]`}}},classNameRoot:{description:`Дополнительный CSS-класс для корневого элемента селекта
`,control:!1,table:{type:{summary:"string"}}},classNameLabel:{description:`Дополнительный CSS-класс для элемента лейбла
`,control:!1,table:{type:{summary:"string"}}},classNameError:{description:`Дополнительный CSS-класс для элемента ошибки
`,control:!1,table:{type:{summary:"string"}}},classNameBaseTooltipRoot:{description:`Дополнительный CSS-класс для корневого элемента тултипа лейбла
`,control:!1,table:{type:{summary:"string"}}}},parameters:{docs:{description:{component:`
Компонент выпадающего списка с поддержкой валидации, поиска и работы внутри модалок и контейнеров с \`overflow: hidden\`.

## Особенности:
- **Рендер списка через Portal**: выпадающий список рендерится в \`document.body\`, не увеличивает размер родителя и не обрезается при \`overflow: hidden\`
- **Позиционирование по вертикали**: список открывается под контролом; если снизу недостаточно места — над контролом; ширина списка совпадает с шириной контрола
- **Анимация появления**: список плавно появляется (лёгкий сдвиг по вертикали в сторону контрола)
- **Два варианта стиля**: \`outlined\` (с границей) и \`filled\` (с заполненным фоном)
- **Валидация и ошибки**: подсветка ошибок и текстовые сообщения
- **Подсказки лейбла**: встроенная поддержка тултипов
- **Прокручиваемые списки**: при \`isScrollableList={true}\` — ограничение высоты и скролл
- **Поиск по опциям**: при \`isSearchable={true}\` — поле поиска; при открытии списка сверху поле поиска отображается внизу (ближе к контролу), позиция пересчитывается при изменении фильтра
- **Закрытие**: клик вне области (контрол + список) закрывает список
- **Визуальная обратная связь**: иконка галочки у выбранной опции, поворот стрелки при открытии

## Состояния:
- Обычное, открытое, с ошибкой, отключенное, с фокусом

## Функция поиска (\`isSearchable\`):
- Локальная фильтрация по лейблам опций, автофокус при открытии
- Сброс запроса при закрытии и после выбора; иконка очистки; сообщения «Ничего не найдено» / «Нет доступных вариантов»

## Рекомендации:
Используйте для выбора значения из предопределённого списка в формах, в том числе внутри модалок.

### Базовое использование

\`\`\`jsx
const [formData, setFormData] = useState({
  district: "",
});

<Select
  name="district"
  value={formData.district}
  onChange={(event, {name, value}) => setFormData(prev => ({
    ...prev,
    [name]: value,
  }))}
  options={[
    { value: "center", label: "Центральный округ" },
    { value: "north", label: "Северный округ" },
    { value: "south", label: "Южный округ" },
  ]}
  label="Округ"
  placeholder="Выберите округ..."
/>
\`\`\`

### Использование с поиском

\`\`\`jsx
<Select
  name="district"
  value={formData.district}
  onChange={onChange}
  options={LONG_DISTRICT_LIST}
  label="Округ"
  isSearchable={true}
  searchPlaceholder="Начните вводить название..."
  isScrollableList={true}
  maxHeightList={200}
/>
\`\`\`
        `}}},decorators:[e=>s.jsx("div",{className:T.decoratorWrapper,children:s.jsx(e,{})})],args:{options:L,variant:"outlined",size:"xl",placeholder:"Выберите из списка...",disabled:!1,required:!1,isAbsolutePositionError:!1,isScrollableList:!1,isVisibleDefaultTitle:!0,isSearchable:!1,searchPlaceholder:"Поиск...",maxHeightList:180}},n={name:"Default Select",render:e=>{const[a,l]=d.useState({okrug:""}),o=(c,r)=>{l(t=>({...t,[r.name]:r.value}))};return s.jsx(i,{...e,error:a.okrug?void 0:e.error,name:"okrug",value:a.okrug,onChange:o})}},u={render:n.render,args:{label:"Округ",options:[],placeholder:"Выберите округ..."}},m={name:"Searchable Select",render:e=>{const[a,l]=d.useState({searchable:""}),o=(c,r)=>{l(t=>({...t,[r.name]:r.value}))};return s.jsx(i,{...e,name:"searchable",value:a.searchable,onChange:o})},args:{label:"Поисковый селект",isSearchable:!0,searchPlaceholder:"Введите для поиска...",placeholder:"Выберите округ..."},parameters:{docs:{description:{story:`
Селект с поиском по опциям. При открытии списка отображается поле поиска; при нехватке места снизу список открывается сверху, а поле поиска — внизу списка (ближе к контролу).
        `}}}},p={name:"Searchable Select with Long List",render:e=>{const[a,l]=d.useState({searchable:""}),o=(r,t)=>{l(x=>({...x,[t.name]:t.value}))},c=[{value:"1",label:"Центральный административный округ города Москвы"},{value:"2",label:"Северный административный округ с очень длинным названием"},{value:"3",label:"Северо-Восточный административный округ"},{value:"4",label:"Восточный административный округ города Москвы"},{value:"5",label:"Юго-Восточный административный округ"},{value:"6",label:"Южный административный округ с длинным описанием"},{value:"7",label:"Юго-Западный административный округ города"},{value:"8",label:"Западный административный округ Москвы"},{value:"9",label:"Северо-Западный административный округ"},{value:"10",label:"Зеленоградский административный округ города Москвы"},{value:"11",label:"Троицкий административный округ"},{value:"12",label:"Новомосковский административный округ"}];return s.jsx(i,{...e,name:"searchable",value:a.searchable,onChange:o,options:c})},args:{label:"Поиск в длинном списке",isSearchable:!0,isScrollableList:!0,maxHeightList:200,searchPlaceholder:"Начните вводить название...",placeholder:"Выберите из списка..."},parameters:{docs:{description:{story:`
Демонстрирует селект с поиском для работы с большими списками опций. Сочетает функции поиска и прокрутки.

**Идеальные сценарии использования:**
- Списки с большим количеством опций (10+ элементов)
- Когда пользователь может не знать точное название нужной опции
- Для улучшения UX в формах с длинными справочниками
- Когда нужно быстро найти нужный элемент без прокрутки всего списка
        `}}}},b={name:"Select with Label",render:n.render,args:{label:"Округ",placeholder:"Выберите округ..."}},h={name:"Select with Label and Tooltip",render:n.render,args:{label:"Округ",infoTooltipText:"Выберите административный округ из доступного списка",placeholder:"Выберите округ..."}},g={name:"Required Select Field",render:e=>{const[a,l]=d.useState({requiredField:""}),o=(c,r)=>{l(t=>({...t,[r.name]:r.value}))};return s.jsx(i,{...e,name:"requiredField",value:a.requiredField,onChange:o,error:a.requiredField?void 0:"Это поле обязательно для заполнения"})},args:{label:"Обязательный выбор",required:!0,placeholder:"Сделайте выбор..."}},S={name:"Select with Label, Tooltip and Error",render:n.render,args:{label:"Округ",infoTooltipText:"Выберите административный округ из доступного списка",required:!0,error:"Обязательное поле для заполнения",placeholder:"Выберите округ..."}},v={name:"Filled Variant Select",render:n.render,args:{label:"Округ с заполненным фоном",variant:"filled",placeholder:"Выберите округ..."}},f={render:e=>s.jsx(i,{...e,name:"disabled",value:L[0].value,onChange:()=>{}}),args:{label:"Заблокированный выбор",disabled:!0,placeholder:"Выберите округ..."}},y={name:"Select with Scrollable List",render:n.render,args:{label:"Округ с прокруткой",isScrollableList:!0,maxHeightList:120,placeholder:"Выберите округ..."}},D={name:"Select with Absolute Position Error",render:e=>{const[a,l]=d.useState({fieldWithError:""}),o=(c,r)=>{l(t=>({...t,[r.name]:r.value}))};return s.jsx("div",{className:T.absoluteErrorWrapper,children:s.jsx(i,{...e,name:"fieldWithError",value:a.fieldWithError,onChange:o,error:a.fieldWithError?void 0:"Ошибка с абсолютным позиционированием"})})},args:{label:"Поле с абсолютной ошибкой",isAbsolutePositionError:!0,placeholder:"Сделайте выбор..."}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Default Select",
  render: args => {
    const [formData, setFormData] = useState({
      okrug: ""
    });
    const onChange: TOnChangeSelect = (_event, data) => {
      setFormData(prevState => ({
        ...prevState,
        [data.name]: data.value
      }));
    };
    return <Select {...args} error={!formData.okrug ? args.error : undefined} name={"okrug"} value={formData.okrug} onChange={onChange} />;
  }
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    label: "Округ",
    options: [],
    placeholder: "Выберите округ..."
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Searchable Select",
  render: args => {
    const [formData, setFormData] = useState({
      searchable: ""
    });
    const onChange: TOnChangeSelect = (_event, data) => {
      setFormData(prevState => ({
        ...prevState,
        [data.name]: data.value
      }));
    };
    return <Select {...args} name={"searchable"} value={formData.searchable} onChange={onChange} />;
  },
  args: {
    label: "Поисковый селект",
    isSearchable: true,
    searchPlaceholder: "Введите для поиска...",
    placeholder: "Выберите округ..."
  },
  parameters: {
    docs: {
      description: {
        story: \`
Селект с поиском по опциям. При открытии списка отображается поле поиска; при нехватке места снизу список открывается сверху, а поле поиска — внизу списка (ближе к контролу).
        \`
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Searchable Select with Long List",
  render: args => {
    const [formData, setFormData] = useState({
      searchable: ""
    });
    const onChange: TOnChangeSelect = (_event, data) => {
      setFormData(prevState => ({
        ...prevState,
        [data.name]: data.value
      }));
    };
    const LONG_OPTIONS = [{
      value: "1",
      label: "Центральный административный округ города Москвы"
    }, {
      value: "2",
      label: "Северный административный округ с очень длинным названием"
    }, {
      value: "3",
      label: "Северо-Восточный административный округ"
    }, {
      value: "4",
      label: "Восточный административный округ города Москвы"
    }, {
      value: "5",
      label: "Юго-Восточный административный округ"
    }, {
      value: "6",
      label: "Южный административный округ с длинным описанием"
    }, {
      value: "7",
      label: "Юго-Западный административный округ города"
    }, {
      value: "8",
      label: "Западный административный округ Москвы"
    }, {
      value: "9",
      label: "Северо-Западный административный округ"
    }, {
      value: "10",
      label: "Зеленоградский административный округ города Москвы"
    }, {
      value: "11",
      label: "Троицкий административный округ"
    }, {
      value: "12",
      label: "Новомосковский административный округ"
    }];
    return <Select {...args} name={"searchable"} value={formData.searchable} onChange={onChange} options={LONG_OPTIONS} />;
  },
  args: {
    label: "Поиск в длинном списке",
    isSearchable: true,
    isScrollableList: true,
    maxHeightList: 200,
    searchPlaceholder: "Начните вводить название...",
    placeholder: "Выберите из списка..."
  },
  parameters: {
    docs: {
      description: {
        story: \`
Демонстрирует селект с поиском для работы с большими списками опций. Сочетает функции поиска и прокрутки.

**Идеальные сценарии использования:**
- Списки с большим количеством опций (10+ элементов)
- Когда пользователь может не знать точное название нужной опции
- Для улучшения UX в формах с длинными справочниками
- Когда нужно быстро найти нужный элемент без прокрутки всего списка
        \`
      }
    }
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Select with Label",
  render: Default.render,
  args: {
    label: "Округ",
    placeholder: "Выберите округ..."
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Select with Label and Tooltip",
  render: Default.render,
  args: {
    label: "Округ",
    infoTooltipText: "Выберите административный округ из доступного списка",
    placeholder: "Выберите округ..."
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Required Select Field",
  render: args => {
    const [formData, setFormData] = useState({
      requiredField: ""
    });
    const onChange: TOnChangeSelect = (_event, data) => {
      setFormData(prevState => ({
        ...prevState,
        [data.name]: data.value
      }));
    };
    return <Select {...args} name={"requiredField"} value={formData.requiredField} onChange={onChange} error={!formData.requiredField ? "Это поле обязательно для заполнения" : undefined} />;
  },
  args: {
    label: "Обязательный выбор",
    required: true,
    placeholder: "Сделайте выбор..."
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Select with Label, Tooltip and Error",
  render: Default.render,
  args: {
    label: "Округ",
    infoTooltipText: "Выберите административный округ из доступного списка",
    required: true,
    error: "Обязательное поле для заполнения",
    placeholder: "Выберите округ..."
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Filled Variant Select",
  render: Default.render,
  args: {
    label: "Округ с заполненным фоном",
    variant: "filled",
    placeholder: "Выберите округ..."
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Select {...args} name={"disabled"} value={OKRUG_OPTIONS[0].value} onChange={() => {}} />;
  },
  args: {
    label: "Заблокированный выбор",
    disabled: true,
    placeholder: "Выберите округ..."
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Select with Scrollable List",
  render: Default.render,
  args: {
    label: "Округ с прокруткой",
    isScrollableList: true,
    maxHeightList: 120,
    placeholder: "Выберите округ..."
  }
}`,...y.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Select with Absolute Position Error",
  render: args => {
    const [formData, setFormData] = useState({
      fieldWithError: ""
    });
    const onChange: TOnChangeSelect = (_event, data) => {
      setFormData(prevState => ({
        ...prevState,
        [data.name]: data.value
      }));
    };
    return <div className={styles.absoluteErrorWrapper}>\r
        <Select {...args} name={"fieldWithError"} value={formData.fieldWithError} onChange={onChange} error={!formData.fieldWithError ? "Ошибка с абсолютным позиционированием" : undefined} />\r
      </div>;
  },
  args: {
    label: "Поле с абсолютной ошибкой",
    isAbsolutePositionError: true,
    placeholder: "Сделайте выбор..."
  }
}`,...D.parameters?.docs?.source}}};const k=["Default","WithEmptyListOption","Searchable","SearchableWithLongList","WithLabel","WithLabelAndTooltip","RequiredField","WithLabelAndTooltipAndError","FilledVariant","DisabledSelect","ScrollableList","AbsolutePositionError"];export{D as AbsolutePositionError,n as Default,f as DisabledSelect,v as FilledVariant,g as RequiredField,y as ScrollableList,m as Searchable,p as SearchableWithLongList,u as WithEmptyListOption,b as WithLabel,h as WithLabelAndTooltip,S as WithLabelAndTooltipAndError,k as __namedExportsOrder,R as default};
