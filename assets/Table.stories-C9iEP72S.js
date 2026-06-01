import{r as h,R as ce,j as e}from"./iframe-CA4deTFl.js";import{C as de}from"./Confirm-DaD07UkC.js";import{u as pe}from"./index-CXmG2N0V.js";import{c as m}from"./clsx-B-dksMZM.js";import{B as ue}from"./BaseTooltip-CuZNMgt3.js";import{E as me}from"./EllipsisTextWithTooltip-ySti2ov_.js";import{I as x,E as W}from"./Icon-DndJayG8.js";import{S as ye}from"./Spinner-8qRTIFQm.js";import"./preload-helper-JD0jGv3q.js";import"./ApplyButtons-BmQmNhpl.js";import"./Button-enFxszJ_.js";import"./Text-DSk7EiGw.js";import"./Layer-COehigPG.js";import"./Potral-CkHkY5OB.js";import"./index-SbPXkCt7.js";import"./index-DESwEi8l.js";import"./Tooltip-DOi7Oqjo.js";const be=({onEdit:r,onDelete:d,onRowClick:s,onCustomAction:c}={})=>h.useCallback(l=>{switch(c&&c(l),l.clickOn){case"delete":if(d){const b="key"in l.rowData&&l.rowData.key||"id"in l.rowData&&l.rowData.id||void 0;b!==void 0&&d(String(b))}break;case"edit":r&&r(l.rowData);break;case"row":s&&s(l.rowData);break}},[r,d,s,c]),_e="_tableWrapperRoot_ugn7p_1",he="_tableWrapperRoot_hasError_ugn7p_4",ke="_tableWrapperRoot__errorTooltip_ugn7p_7",Ce="_tableWrapper_ugn7p_1",Te="_table_ugn7p_1",ge="_table__tdContent_ugn7p_63",fe="_table__controlWrapper_ugn7p_85",De="_table__controlWrapper__control_ugn7p_90",we="_table__controlWrapper__control_disabled_ugn7p_107",xe="_table__loadingWrapper_ugn7p_111",We="_table__noDataWrapper_ugn7p_118",Se="_table__sortableHeader_ugn7p_126",Re="_table__sortIcon_ugn7p_134",ve="_table__headerContent_ugn7p_137",Ne="_tooltip_ugn7p_160",je="_tooltip_hasError_ugn7p_163",Ee="_tooltip__content_ugn7p_166",a={tableWrapperRoot:_e,tableWrapperRoot_hasError:he,tableWrapperRoot__errorTooltip:ke,tableWrapper:Ce,table:Te,table__tdContent:ge,table__controlWrapper:fe,table__controlWrapper__control:De,table__controlWrapper__control_disabled:we,table__loadingWrapper:xe,table__noDataWrapper:We,table__sortableHeader:Se,table__sortIcon:Re,table__headerContent:ve,"table--variant-default":"_table--variant-default_ugn7p_149","table--variant-znp":"_table--variant-znp_ugn7p_152",tooltip:Ne,tooltip_hasError:je,tooltip__content:Ee},F=r=>typeof r=="number",L=r=>typeof r=="string",K=r=>{const{columns:d,data:s,dispatch:c,styleVariant:l="default",classNameRoot:b,classNameTableRoot:T,classNameTdContentRoot:D,renderCellContent:_,noData:w={isVisibleHeader:!0,noDataText:"Нет данных"},loading:g=!1,hasError:M=!1,errorText:G=""}=r,f=h.useRef(null),[X,J]=h.useState(60),[p,z]=h.useState(null);h.useEffect(()=>{if(f.current&&s&&s.length>0&&!g){const t=f.current.offsetHeight;t>60&&J(t)}},[s,g]);const I=h.useCallback(t=>t.sortBy??t.key,[]),Q=ce.useMemo(()=>!p||!s.length?s:[...s].sort((t,o)=>{const u=d.find(ie=>ie.key===p.key);if(!u)return 0;const y=I(u),n=t[y],i=o[y];if(n==null&&i==null)return 0;if(n==null)return p.direction==="asc"?-1:1;if(i==null)return p.direction==="asc"?1:-1;if(L(n)&&L(i))return p.direction==="asc"?n.localeCompare(i):i.localeCompare(n);if(F(n)&&F(i))return n<i?p.direction==="asc"?-1:1:n>i?p.direction==="asc"?1:-1:0;const $=String(n),P=String(i);return p.direction==="asc"?$.localeCompare(P):P.localeCompare($)}),[p,s,d,I]),Y=t=>{t.isSortable&&(p?.key===t.key?z({key:t.key,direction:p.direction==="asc"?"desc":"asc"}):z({key:t.key,direction:"asc"}))},ee=t=>t.isSortable?p?.key===t.key?p.direction==="asc"?"↑":"↓":"↕":null,te=m({[a.tableWrapperRoot]:!0,[a.tableWrapperRoot_hasError]:M}),ae=m({[a.tableWrapper]:!0,...b&&{[b]:!0}}),re=m({[a.table]:!0,[a[`table--variant-${l}`]]:l,...T&&{[T]:!0}}),k=m({[a.table__tdContent]:!0,...D&&{[D]:!0}}),oe=(t,o)=>{if(o.renderCell)return e.jsx("div",{className:k,children:o.renderCell(t,o)});if(o.key==="controls"){const n=!!o.isDisabled;return e.jsx("div",{className:k,children:e.jsxs("div",{className:a.table__controlWrapper,children:[e.jsx(x,{name:W.Edit,className:m(a.table__controlWrapper__control,n&&a.table__controlWrapper__control_disabled),onClick:i=>{i.stopPropagation(),c?.({clickOn:"edit",rowData:t})}}),e.jsx(x,{name:W.Trash,className:m(a.table__controlWrapper__control,n&&a.table__controlWrapper__control_disabled),onClick:i=>{i.stopPropagation(),c?.({clickOn:"delete",rowData:t})}})]})})}if(o.key==="deleteControl"){const n=!!o.isDisabled;return e.jsx("div",{className:k,children:e.jsx("div",{className:a.table__controlWrapper,children:e.jsx(x,{name:W.Trash,className:m(a.table__controlWrapper__control,n&&a.table__controlWrapper__control_disabled),onClick:i=>{i.stopPropagation(),c&&c({clickOn:"delete",rowData:t})}})})})}if(o.key==="editControl"){const n=!!o.isDisabled;return e.jsx("div",{className:k,children:e.jsx("div",{className:a.table__controlWrapper,children:e.jsx(x,{name:W.Edit,className:m(a.table__controlWrapper__control,n&&a.table__controlWrapper__control_disabled),onClick:i=>{i.stopPropagation(),c&&c({clickOn:"edit",rowData:t})}})})})}if(_)return e.jsx("div",{className:k,children:_(t,o)});const u=!!o.isClickable,y=t[o.key];return e.jsx("div",{className:k,children:e.jsx(me,{onClick:n=>{u&&(n.stopPropagation(),c?.({clickOn:String(o.key),rowData:t}))},classNameBaseTooltipRoot:a.tooltip,isInheritFontStyles:!0,text:y?String(y):"-",isCursorPointerByOnClick:u})})},ne=()=>!w.isVisibleHeader&&(!s||s.length===0)?null:e.jsx("thead",{children:e.jsx("tr",{children:d.map((t,o)=>{const u=ee(t),y=t.isSortable;return e.jsx("th",{onClick:()=>Y(t),className:m(y&&a.table__sortableHeader),children:e.jsxs("div",{className:a.table__headerContent,children:[e.jsx("span",{children:t.title}),u&&e.jsx("span",{className:a.table__sortIcon,children:u})]})},o)})})}),se=()=>g?e.jsx("tbody",{ref:f,style:{height:`${X}px`},children:e.jsx("tr",{children:e.jsx("td",{colSpan:d.length,children:e.jsx("div",{className:a.table__loadingWrapper,children:e.jsx(ye,{size:"lg"})})})})}):!s||s.length===0?e.jsx("tbody",{ref:f,children:e.jsx("tr",{children:e.jsx("td",{colSpan:d.length,children:e.jsx("div",{className:a.table__noDataWrapper,children:w.noDataText})})})}):e.jsx("tbody",{ref:f,children:Q.map((t,o)=>t?e.jsx("tr",{onClick:u=>{u.stopPropagation(),c&&c({clickOn:"row",rowData:t})},children:d.map((u,y)=>e.jsx("td",{children:oe(t,u)},`${o}:${y}`))},o):null)}),le=()=>e.jsxs("table",{className:re,children:[e.jsx("colgroup",{children:d.map(({width:t},o)=>e.jsx("col",{style:{width:t?`${t}px`:void 0}},o))}),ne(),se()]});return e.jsxs("div",{className:te,children:[M&&e.jsx(ue,{text:G,classNameRoot:m(a.tableWrapperRoot__errorTooltip,a.tooltip,a.tooltip_hasError),classNameContentRoot:a.tooltip__content}),e.jsx("div",{className:ae,children:le()})]})};K.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  key: keyof TData | TDefaultColumnKey;\r
  title: string;\r
  isVisible?: boolean;\r
  isClickable?: boolean;\r
  isSortable?: boolean;\r
  isDisabled?: boolean;\r
  width?: number;\r
  renderCell?: (row: TData, col: TColumn<TData>) => ReactNode;\r
  sortBy?: keyof TData;\r
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof TData | TDefaultColumnKey",elements:[{name:"TData"},{name:"union",raw:'"controls" | "deleteControl" | "editControl"',elements:[{name:"literal",value:'"controls"'},{name:"literal",value:'"deleteControl"'},{name:"literal",value:'"editControl"'}]}],required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"isVisible",value:{name:"boolean",required:!1}},{key:"isClickable",value:{name:"boolean",required:!1}},{key:"isSortable",value:{name:"boolean",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"renderCell",value:{name:"signature",type:"function",raw:"(row: TData, col: TColumn<TData>) => ReactNode",signature:{arguments:[{type:{name:"TData"},name:"row"},{type:{name:"TColumn"},name:"col"}],return:{name:"ReactNode"}},required:!1}},{key:"sortBy",value:{name:"TData",required:!1}}]}}],raw:"TColumn<TData>[]"},description:""},dispatch:{required:!1,tsType:{name:"Dispatch",elements:[{name:"signature",type:"object",raw:`{\r
  clickOn: string;\r
  rowData: TData;\r
}`,signature:{properties:[{key:"clickOn",value:{name:"string",required:!0}},{key:"rowData",value:{name:"TData",required:!0}}]}}],raw:"Dispatch<TClickOnCellAction<TData>>"},description:""},classNameRoot:{required:!1,tsType:{name:"string"},description:""},classNameTableRoot:{required:!1,tsType:{name:"string"},description:""},classNameTdContentRoot:{required:!1,tsType:{name:"string"},description:""},renderCellContent:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData, col: TColumn<TData>) => ReactNode",signature:{arguments:[{type:{name:"TData"},name:"row"},{type:{name:"signature",type:"object",raw:`{\r
  key: keyof TData | TDefaultColumnKey;\r
  title: string;\r
  isVisible?: boolean;\r
  isClickable?: boolean;\r
  isSortable?: boolean;\r
  isDisabled?: boolean;\r
  width?: number;\r
  renderCell?: (row: TData, col: TColumn<TData>) => ReactNode;\r
  sortBy?: keyof TData;\r
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof TData | TDefaultColumnKey",elements:[{name:"TData"},{name:"union",raw:'"controls" | "deleteControl" | "editControl"',elements:[{name:"literal",value:'"controls"'},{name:"literal",value:'"deleteControl"'},{name:"literal",value:'"editControl"'}]}],required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"isVisible",value:{name:"boolean",required:!1}},{key:"isClickable",value:{name:"boolean",required:!1}},{key:"isSortable",value:{name:"boolean",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"renderCell",value:{name:"signature",type:"function",raw:"(row: TData, col: TColumn<TData>) => ReactNode",signature:{arguments:[{type:{name:"TData"},name:"row"},{type:{name:"TColumn"},name:"col"}],return:{name:"ReactNode"}},required:!1}},{key:"sortBy",value:{name:"TData",required:!1}}]}},name:"col"}],return:{name:"ReactNode"}}},description:""},styleVariant:{required:!1,tsType:{name:"union",raw:'"default" | "znp"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"znp"'}]},description:""},noData:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  isVisibleHeader?: boolean;\r
  noDataText?: string;\r
}`,signature:{properties:[{key:"isVisibleHeader",value:{name:"boolean",required:!1}},{key:"noDataText",value:{name:"string",required:!1}}]}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},errorText:{required:!1,tsType:{name:"string"},description:""}}};const U=[{key:"1",name:"_1_",description:"Файл архива",count:10},{key:"2",name:"_1__01",description:"FBX-файл ОКС",count:5},{key:"3",name:"_1__Ground",description:"FBX-файл благоустройства",count:3},{key:"4",name:"SM_1__Main",description:"Объект геометрии ОКС",count:12},{key:"5",name:"SM_1__MainGlass",description:"Объект полупрозрачных деталей ОКС",count:8},{key:"6",name:"SM_1__Ground",description:"Объект геометрии благоустройство",count:7},{key:"7",name:"T_1__Main_d_1",description:"Текстуры диффузного цвета ОКС",count:4},{key:"8",name:"M_1__Main_1",description:"Материал ОКС",count:1}],C=[{key:"name",title:"Наименование",isSortable:!0,width:200},{key:"description",title:"Описание"},{key:"count",title:"Кол-во",width:80}],Ve="_countCellHighlight_x8ckx_1",Oe={countCellHighlight:Ve},Z=K,Ye={title:"Components/Table",component:Z,tags:["autodocs"],parameters:{docs:{description:{component:'\nУниверсальная таблица с поддержкой сортировки по колонкам, колонок действий (редактирование, удаление), состояний загрузки и ошибки. Используется в формах задания на проектирование для отображения списков заказчиков, исполнителей, этапов строительства, документов, земельных участков и т.д.\n\n**Типизация:** компонент generic - `Table<TData extends Record<string, any>>`. Тип данных строки задаётся при использовании (`TableProps<TCustomerInTable>`, `TableProps<SampleRow>` и т.п.).\n\n\n## Основные возможности\n\n- **Сортировка:** колонки с `isSortable: true` - клик по заголовку сортирует по возрастанию/убыванию. Поле для сортировки задаётся `key` колонки или `sortBy` (если нужно сортировать по другому полю строки).\n- **Колонки действий:** специальные `key`: `"controls"` (иконки редактирования и удаления), `"editControl"` (только редактирование), `"deleteControl"` (только удаление). Для работы передаётся `dispatch`.\n- **Кастомное отображение ячеек:** `renderCell: (row, col) => ReactNode` в колонке или общий `renderCellContent` в пропсах таблицы.\n- **Состояния:** `loading` - спиннер вместо тела таблицы; пустые данные - текст из `noData.noDataText`; `hasError` + `errorText` - тултип с ошибкой над таблицей.\n- **Варианты оформления:** `styleVariant: "default"` (сетка по всем ячейкам) и `"znp"` (только нижние границы, другой стиль заголовка и ячеек).\n- **Обработка действий:** `dispatch` - функция `(action: TClickOnCellAction<TData>) => void`. Удобно получать через хук `useTableActions`.\n\n\n## Структура действия (TClickOnCellAction&lt;TData&gt;)\n\n```ts\ntype TClickOnCellAction<TData> = {\n  clickOn: string;  // "row" | "edit" | "delete" | key колонки (при isClickable)\n  rowData: TData;   // данные строки\n};\n```\n\n- **clickOn: "row"** - клик по строке (вне ячеек с отдельными обработчиками).\n- **clickOn: "edit"** - нажатие на иконку редактирования (колонка `editControl` или `controls`).\n- **clickOn: "delete"** - нажатие на иконку удаления (колонка `deleteControl` или `controls`).\n- **clickOn: string** (ключ колонки) - клик по ячейке колонки с `isClickable: true`.\n\n\n## Колонка (TColumn&lt;TData&gt;)\n\n| Поле | Тип | Описание |\n|--|--|--|\n| `key` | `keyof TData | "controls" | "editControl" | "deleteControl"` | Ключ данных или специальный тип колонки. |\n| `title` | `string` | Заголовок колонки. |\n| `isSortable` | `boolean?` | Включить сортировку по колонке (клик по заголовку). |\n| `sortBy` | `keyof TData?` | Поле строки для сортировки (если не совпадает с `key`). |\n| `isClickable` | `boolean?` | Клик по ячейке вызывает `dispatch` с `clickOn: key`. |\n| `isDisabled` | `boolean?` | Для колонок `controls` / `editControl` / `deleteControl` - отключить кнопки. |\n| `width` | `number?` | Ширина колонки в пикселях. |\n| `renderCell` | `(row, col) => ReactNode` | Кастомный рендер содержимого ячейки. |\n\nДля колонок с `key: "controls" | "editControl" | "deleteControl"` таблица сама рендерит иконки; `dispatch` обязателен для реакции на клики.\n\n\n## Хук useTableActions\n\nУпрощает обработку `dispatch` в формах: принимает `onEdit`, `onDelete`, `onRowClick`, `onCustomAction` и возвращает функцию для `dispatch`.\n\n```jsx\nconst handleTableDispatch = useTableActions({\n  onEdit: (rowData) => openEditModal(rowData),\n  onDelete: (id) => removeItem(id),  // id берётся из rowData.key или rowData.id\n  onRowClick: (rowData) => selectRow(rowData),\n  onCustomAction: (action) => { /* свои действия по action.clickOn */ },\n});\n\n<Table data={data} columns={columns} dispatch={handleTableDispatch} />;\n```\n\nДля `onDelete` хук ищет идентификатор в `rowData.key` или `rowData.id` и передаёт его строкой в `onDelete(id)`.\n\n\n## Базовое использование (только данные, без действий)\n\n```jsx\n<Table\n  data={items}\n  columns={[\n    { key: "name", title: "Наименование", isSortable: true, width: 200 },\n    { key: "description", title: "Описание" },\n    { key: "count", title: "Кол-во", width: 80 },\n  ]}\n  styleVariant="znp"\n/>\n```\n\n\n## Таблица с колонкой «Действия» (редактирование и удаление)\n\n```jsx\nconst handleDispatch = useTableActions({\n  onEdit: (row) => openEditModal(row),\n  onDelete: (id) => removeFromList(id),\n});\n\n<Table\n  data={items}\n  columns={[\n    { key: "name", title: "Наименование" },\n    { key: "description", title: "Описание" },\n    { key: "controls", title: "Действия", width: 92 },\n  ]}\n  dispatch={handleDispatch}\n  styleVariant="znp"\n/>\n```\n\nСтроки данных должны содержать `key` или `id` для корректной работы `onDelete`.\n\n\n## Кастомный рендер ячейки (renderCell)\n\nПо аналогии с `BuildersTable`, `DocumentsTable`, `AuthorsTable`: для колонки задаётся `renderCell`.\n\n```jsx\nconst columns = [\n  { key: "name", title: "Наименование" },\n  {\n    key: "type",\n    title: "Тип",\n    renderCell: (row) => (\n      <Tag\n        title={row.type === "FL" ? "Физ. лицо" : "Юр. лицо"}\n        colorVariant="blue"\n      />\n    ),\n  },\n  { key: "controls", title: "", width: 92 },\n];\n<Table data={data} columns={columns} dispatch={dispatch} />\n```\n\n\n## Состояния загрузки и ошибки\n\n```jsx\n<Table\n  data={data}\n  columns={columns}\n  loading={isLoading}\n  hasError={hasError}\n  errorText="Ошибка загрузки данных"\n  noData={{ isVisibleHeader: true, noDataText: "Нет данных" }}\n/>\n```\n        '}}},argTypes:{columns:{description:"Массив колонок: key (поле данных или 'controls' | 'editControl' | 'deleteControl'), title, опционально isSortable, sortBy, width, isClickable, isDisabled, renderCell.",control:!1,table:{type:{summary:"TColumn[]"},defaultValue:{summary:"—"}}},data:{description:"Массив объектов — данные строк. Для useTableActions (onDelete) в каждом объекте желательно иметь поле key или id.",control:!1,table:{type:{summary:"TData[]"},defaultValue:{summary:"—"}}},dispatch:{description:"Обработчик действий: (action) => void. action.clickOn — 'row' | 'edit' | 'delete' или key колонки; action.rowData — данные строки. Рекомендуется использовать useTableActions.",control:!1,table:{type:{summary:"Dispatch(TClickOnCellAction)"},defaultValue:{summary:"undefined"}}},styleVariant:{description:"Вариант оформления: 'default' — границы у всех ячеек; 'znp' — только нижние границы, стиль для форм ЗНП.",control:{type:"radio"},options:["default","znp"],table:{type:{summary:'"default" | "znp"'},defaultValue:{summary:'"default"'}}},loading:{description:"Показывать индикатор загрузки (Spinner) вместо тела таблицы.",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},hasError:{description:"Показать состояние ошибки: тултип над таблицей с текстом errorText, красная обводка.",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},errorText:{description:"Текст ошибки в тултипе при hasError: true.",control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:'""'}}},noData:{description:"Настройки пустого состояния: isVisibleHeader — показывать ли заголовок при пустых data; noDataText — текст в ячейке «нет данных».",control:!1,table:{type:{summary:"{ isVisibleHeader?: boolean; noDataText?: string }",detail:"По умолчанию: { isVisibleHeader: true, noDataText: 'Нет данных' }"},defaultValue:{summary:"{ isVisibleHeader: true, noDataText: 'Нет данных' }"}}},renderCellContent:{description:"Глобальный рендер ячейки: (row, col) => ReactNode. Используется для колонок без собственного renderCell, если нужна единая логика.",control:!1,table:{type:{summary:"(row, col) => ReactNode"}}},classNameRoot:{description:"Дополнительный CSS-класс для обёртки таблицы (внутренний div с overflow).",control:!1,table:{type:{summary:"string"}}},classNameTableRoot:{description:"Дополнительный CSS-класс для элемента table.",control:!1,table:{type:{summary:"string"}}},classNameTdContentRoot:{description:"Дополнительный CSS-класс для обёртки содержимого ячейки (td > div).",control:!1,table:{type:{summary:"string"}}}},args:{data:U,styleVariant:"default",loading:!1,hasError:!1,errorText:"",noData:{isVisibleHeader:!0,noDataText:"Нет данных"}}},S={name:"Default Table",args:{columns:C},parameters:{docs:{description:{story:"Базовая таблица с сортируемыми колонками. Клик по заголовку «Наименование», «Описание» или «Кол-во» переключает сортировку по возрастанию/убыванию."}}}},R={name:"With sorting",args:{columns:C},parameters:{docs:{description:{story:"Те же колонки с isSortable: true. Иконки ↕ / ↑ / ↓ в заголовке показывают возможность и направление сортировки."}}}},v={name:"With edit/delete controls",args:{columns:[{key:"name",title:"Наименование",width:200},{key:"description",title:"Описание"},{key:"controls",title:"Действия",width:92}],dispatch:r=>{typeof window<"u"&&console.log("Table dispatch:",r)}},parameters:{docs:{description:{story:"Колонка с key: 'controls' отображает иконки редактирования и удаления. dispatch вызывается с clickOn: 'edit' или 'delete' и rowData. В реальных формах сюда передают результат useTableActions({ onEdit, onDelete })."}}}},N={name:"With useTableActions (interactive)",render:function(d){const[s,c]=h.useState(U),{modalData:l,onOpenModal:b,onCloseModal:T}=pe(),D=be({onEdit:_=>{b({type:"edit",row:_})},onDelete:_=>{c(w=>w.filter(g=>g.key!==_))},onRowClick:_=>{b({type:"rowClick",row:_})}});return e.jsxs(e.Fragment,{children:[e.jsx(Z,{...d,data:s,columns:[{key:"name",title:"Наименование",width:200},{key:"description",title:"Описание"},{key:"controls",title:"Действия",width:92}],dispatch:D}),l?.type&&e.jsx(de,{size:"md",zIndex:1e3,header:l?.type==="edit"?"Редактировать":"Клик по строке",subHeader:`${l?.row.name}${l?.row.description?` — ${l?.row.description}`:""}`,cancelBtnContent:"Закрыть",submitBtnContent:"OK",onClose:T,submit:T})]})},parameters:{docs:{description:{story:"Пример из практики: dispatch получен через useTableActions. onDelete удаляет строку из state по row.key; onEdit и onRowClick открывают Confirm с данными строки. Можно удалять строки кнопкой корзины и кликать по строке."}}}},j={name:"With editControl only",args:{columns:[{key:"name",title:"Наименование",width:200},{key:"description",title:"Описание"},{key:"editControl",title:"",width:60}],dispatch:r=>{typeof window<"u"&&r.clickOn==="edit"&&console.log("Edit:",r.rowData)}},parameters:{docs:{description:{story:"Колонка key: 'editControl' — только иконка редактирования (без удаления)."}}}},E={name:"With deleteControl only",args:{columns:[{key:"name",title:"Наименование",width:200},{key:"description",title:"Описание"},{key:"deleteControl",title:"",width:60}],dispatch:r=>{typeof window<"u"&&r.clickOn==="delete"&&console.log("Delete:",r.rowData)}},parameters:{docs:{description:{story:"Колонка key: 'deleteControl' — только иконка удаления."}}}},V={name:"With clickable cell",args:{columns:[{key:"name",title:"Наименование",isClickable:!0,width:200},{key:"description",title:"Описание"},{key:"count",title:"Кол-во",width:80}],dispatch:r=>{typeof window<"u"&&r.clickOn==="name"&&console.log("Clicked name:",r.rowData)}},parameters:{docs:{description:{story:"Колонка с isClickable: true: клик по ячейке вызывает dispatch с clickOn равным key колонки (здесь 'name'). Курсор над ячейкой — pointer."}}}},O={name:"With custom renderCell",args:{columns:[{key:"name",title:"Наименование",width:200},{key:"count",title:"Кол-во",width:80,renderCell:r=>e.jsx("span",{className:Oe.countCellHighlight,children:r.count??"—"})},{key:"description",title:"Описание"}]},parameters:{docs:{description:{story:"Колонка «Кол-во» с кастомным renderCell — выделение значения стилем. По тому же принципу в проекте делают колонки с Tag, датами (dateFormat), составным контентом (несколько EllipsisTextWithTooltip)."}}}},q={name:"Loading state",args:{columns:C,loading:!0},parameters:{docs:{description:{story:"При loading: true вместо tbody отображается одна ячейка с Spinner (размер lg)."}}}},H={name:"Empty state",args:{columns:C,data:[],noData:{isVisibleHeader:!0,noDataText:"Нет данных"}},parameters:{docs:{description:{story:"Пустой массив data: заголовок отображается (isVisibleHeader: true), в теле — одна ячейка с noDataText. Если isVisibleHeader: false, заголовок скрыт."}}}},A={name:"With error",args:{columns:C,hasError:!0,errorText:"Ошибка в данных таблицы"},parameters:{docs:{description:{story:"hasError: true — красная обводка таблицы и тултип над ней с errorText (как в AuthorsTable при отсутствии утверждающего)."}}}},B={name:"Variant ZNP",args:{columns:C,styleVariant:"znp"},parameters:{docs:{description:{story:"Вариант оформления для форм ЗНП: только нижние границы у строк, другой фон заголовка и стиль текста в ячейках. Используется в CustomersTable, BuildersTable, ConstructionStagesTable, TEIRequirements и др."}}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Default Table",
  args: {
    columns: defaultColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Базовая таблица с сортируемыми колонками. Клик по заголовку «Наименование», «Описание» или «Кол-во» переключает сортировку по возрастанию/убыванию."
      }
    }
  }
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "With sorting",
  args: {
    columns: defaultColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Те же колонки с isSortable: true. Иконки ↕ / ↑ / ↓ в заголовке показывают возможность и направление сортировки."
      }
    }
  }
}`,...R.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "With edit/delete controls",
  args: {
    columns: [{
      key: "name",
      title: "Наименование",
      width: 200
    }, {
      key: "description",
      title: "Описание"
    }, {
      key: "controls",
      title: "Действия",
      width: 92
    }],
    dispatch: action => {
      if (typeof window !== "undefined") {
        console.log("Table dispatch:", action);
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Колонка с key: 'controls' отображает иконки редактирования и удаления. dispatch вызывается с clickOn: 'edit' или 'delete' и rowData. В реальных формах сюда передают результат useTableActions({ onEdit, onDelete })."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "With useTableActions (interactive)",
  render: function WithUseTableActionsRender(args) {
    const [data, setData] = useState<SampleRow[]>(defaultTableData);
    const {
      modalData,
      onOpenModal,
      onCloseModal
    } = useModal();
    const handleDispatch = useTableActions<SampleRow>({
      onEdit: row => {
        onOpenModal({
          type: "edit",
          row
        });
      },
      onDelete: id => {
        setData(prev => prev.filter(row => row.key !== id));
      },
      onRowClick: row => {
        onOpenModal({
          type: "rowClick",
          row
        });
      }
    });
    return <>\r
        <TableSampleRow {...args} data={data} columns={[{
        key: "name",
        title: "Наименование",
        width: 200
      }, {
        key: "description",
        title: "Описание"
      }, {
        key: "controls",
        title: "Действия",
        width: 92
      }]} dispatch={handleDispatch} />\r
        {modalData?.type && <Confirm size={"md"} zIndex={1000} header={modalData?.type === "edit" ? "Редактировать" : "Клик по строке"} subHeader={\`\${modalData?.row.name}\${modalData?.row.description ? \` — \${modalData?.row.description}\` : ""}\`} cancelBtnContent="Закрыть" submitBtnContent="OK" onClose={onCloseModal} submit={onCloseModal} />}\r
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: "Пример из практики: dispatch получен через useTableActions. onDelete удаляет строку из state по row.key; onEdit и onRowClick открывают Confirm с данными строки. Можно удалять строки кнопкой корзины и кликать по строке."
      }
    }
  }
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "With editControl only",
  args: {
    columns: [{
      key: "name",
      title: "Наименование",
      width: 200
    }, {
      key: "description",
      title: "Описание"
    }, {
      key: "editControl",
      title: "",
      width: 60
    }],
    dispatch: action => {
      if (typeof window !== "undefined" && action.clickOn === "edit") {
        console.log("Edit:", action.rowData);
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Колонка key: 'editControl' — только иконка редактирования (без удаления)."
      }
    }
  }
}`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "With deleteControl only",
  args: {
    columns: [{
      key: "name",
      title: "Наименование",
      width: 200
    }, {
      key: "description",
      title: "Описание"
    }, {
      key: "deleteControl",
      title: "",
      width: 60
    }],
    dispatch: action => {
      if (typeof window !== "undefined" && action.clickOn === "delete") {
        console.log("Delete:", action.rowData);
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Колонка key: 'deleteControl' — только иконка удаления."
      }
    }
  }
}`,...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "With clickable cell",
  args: {
    columns: [{
      key: "name",
      title: "Наименование",
      isClickable: true,
      width: 200
    }, {
      key: "description",
      title: "Описание"
    }, {
      key: "count",
      title: "Кол-во",
      width: 80
    }],
    dispatch: action => {
      if (typeof window !== "undefined" && action.clickOn === "name") {
        console.log("Clicked name:", action.rowData);
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Колонка с isClickable: true: клик по ячейке вызывает dispatch с clickOn равным key колонки (здесь 'name'). Курсор над ячейкой — pointer."
      }
    }
  }
}`,...V.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "With custom renderCell",
  args: {
    columns: [{
      key: "name",
      title: "Наименование",
      width: 200
    }, {
      key: "count",
      title: "Кол-во",
      width: 80,
      renderCell: row => <span className={styles.countCellHighlight}>{row.count ?? "—"}</span>
    }, {
      key: "description",
      title: "Описание"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Колонка «Кол-во» с кастомным renderCell — выделение значения стилем. По тому же принципу в проекте делают колонки с Tag, датами (dateFormat), составным контентом (несколько EllipsisTextWithTooltip)."
      }
    }
  }
}`,...O.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Loading state",
  args: {
    columns: defaultColumns,
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: "При loading: true вместо tbody отображается одна ячейка с Spinner (размер lg)."
      }
    }
  }
}`,...q.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Empty state",
  args: {
    columns: defaultColumns,
    data: [],
    noData: {
      isVisibleHeader: true,
      noDataText: "Нет данных"
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Пустой массив data: заголовок отображается (isVisibleHeader: true), в теле — одна ячейка с noDataText. Если isVisibleHeader: false, заголовок скрыт."
      }
    }
  }
}`,...H.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "With error",
  args: {
    columns: defaultColumns,
    hasError: true,
    errorText: "Ошибка в данных таблицы"
  },
  parameters: {
    docs: {
      description: {
        story: "hasError: true — красная обводка таблицы и тултип над ней с errorText (как в AuthorsTable при отсутствии утверждающего)."
      }
    }
  }
}`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Variant ZNP",
  args: {
    columns: defaultColumns,
    styleVariant: "znp"
  },
  parameters: {
    docs: {
      description: {
        story: "Вариант оформления для форм ЗНП: только нижние границы у строк, другой фон заголовка и стиль текста в ячейках. Используется в CustomersTable, BuildersTable, ConstructionStagesTable, TEIRequirements и др."
      }
    }
  }
}`,...B.parameters?.docs?.source}}};const et=["Default","WithSorting","WithControls","WithUseTableActions","WithEditControlOnly","WithDeleteControlOnly","WithClickableCell","WithCustomRenderCell","Loading","Empty","WithError","VariantZnp"];export{S as Default,H as Empty,q as Loading,B as VariantZnp,V as WithClickableCell,v as WithControls,O as WithCustomRenderCell,E as WithDeleteControlOnly,j as WithEditControlOnly,A as WithError,R as WithSorting,N as WithUseTableActions,et as __namedExportsOrder,Ye as default};
