import{j as n}from"./iframe-DsoVLqtF.js";import{B as a}from"./Button-zrte1TL4.js";import{C as r}from"./Confirm-Cdl7MWC3.js";import{E as i,I as O}from"./Icon-CcD0Smza.js";import{u as l}from"./index-B8_OZSZW.js";import{T as h}from"./Text-Da_aKhKS.js";import"./preload-helper-DCNYn41m.js";import"./clsx-B-dksMZM.js";import"./Spinner-D4Zhwk-k.js";import"./ApplyButtons-eyT1RkWA.js";import"./Layer-FeUPcX3B.js";import"./Potral-7FViUbta.js";import"./index-Cz879DlY.js";import"./index-CMC9NNB4.js";const z="_customHeader_1i0s0_1",H="_customHeaderTitle_1i0s0_8",j="_buttonsRow_1i0s0_12",M={customHeader:z,customHeaderTitle:H,buttonsRow:j},E={title:"Components/Confirm",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
Компонент диалогового окна подтверждения, объединяющий функциональность Modal и ApplyButtons. 
Предназначен для запросов подтверждения действий, отображения предупреждений и принятия решений.

## Основные возможности

- **Наследует все свойства Modal и ApplyButtons**: полная совместимость с базовыми компонентами
- **Автоматическая интеграция кнопок**: ApplyButtons автоматически размещаются в футере
- **Гибкая настройка кнопок**: поддержка различных комбинаций отмены/подтверждения
- **Универсальное использование**: подходит для подтверждений, предупреждений, решений
- **Адаптивный дизайн**: наследует адаптивность от родительских компонентов

## Структура компонента

Confirm объединяет два основных компонента:

### Modal (основа)
- Заголовок и подзаголовок
- Визуальное оформление и позиционирование
- Управление z-index и overlay
- Блокировка скролла страницы

### ApplyButtons (футер)
- Кнопки отмены и подтверждения
- Гибкое расположение и адаптивность
- Состояния загрузки и блокировки
- Поддержка иконок

## Базовое использование
- Хук useModal разработан специально для управления МО (и подобных компонентов), экспортируется также из "test-stpr-ui-kit";

\`\`\`jsx
const { isOpen, onOpenModal, onCloseModal } = useModal();

return (
  <>
    <Button onClick={() => onOpenModal({...})}>Открыть модальное окно</Button>
    {isOpen && (
      <Confirm
        zIndex={1000}
        header="Подтверждение действия"
        subHeader="Вы уверены, что хотите выполнить это действие?"
        cancelBtnContent="Отмена"
        submitBtnContent="Подтвердить"
        onClose={onCloseModal}
        submit={handleConfirm}
      />
    )}
  </>
);
\`\`\`

## Преимущества перед использованием Modal + ApplyButtons

1. **Упрощенный синтаксис**: не нужно manually создавать футер
2. **Согласованность**: единый подход ко всем диалогам подтверждения
3. **Сокращение кода**: меньше boilerplate кода
4. **Легкость поддержки**: изменения применяются ко всем подтверждениям
        `}}},argTypes:{zIndex:{description:"Z-index модального окна. Определяет порядок наложения поверх других элементов",control:{type:"number"},table:{defaultValue:{summary:"999"}}},size:{description:`Размер модального окна:
- 'lg': большой (920px max-width)
- 'md': средний (600px max-width)`,control:{type:"radio"},options:["md","lg"],table:{defaultValue:{summary:"lg"},type:{summary:"TModalSize",detail:"'md' | 'lg'"}}},modalVerticalAlign:{description:`Вертикальное выравнивание модального окна:
- 'top': прижато к верху
- 'center': центрировано`,control:{type:"radio"},options:["top","center"],table:{defaultValue:{summary:"top"},type:{summary:"TModalVerticalAlign",detail:"'center' | 'top'"}}},textAlign:{description:"Горизонтальное выравнивание текста",control:{type:"radio"},options:["left","center","right"],table:{defaultValue:{summary:"left"},type:{summary:"TTextAlign",detail:"'left' | 'center' | 'right'"}}},isHiddenModal:{description:"Скрыть модальное окно. Для условного рендеринга",control:{type:"boolean"},table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},isVisibleCloseButton:{description:"Показывать кнопку закрытия в правом верхнем углу",control:{type:"boolean"},table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},header:{description:"Заголовок диалога подтверждения. Может быть строкой или React-компонентом",control:{type:"text"},table:{type:{summary:"string | ReactNode"}}},subHeader:{description:"Подзаголовок с дополнительной информацией или пояснением",control:{type:"text"},table:{type:{summary:"ReactNode"}}},onClose:{description:"Callback-функция при закрытии диалога (кнопка отмены или крестик). Если не указан, кнопка 'Cancel' не отображается",control:!1},classNameApplyButtonsRoot:{description:`Дополнительный CSS-класс для корневого элемента над кнопками в футере
`,control:!1,table:{type:{summary:"string"}}},applyButtonsMobileDirection:{description:`Расположение кнопок на мобильных устройствах:
- 'column': в колонку
- 'column-reverse': в колонку (обратный порядок)
- 'row': в строку`,control:{type:"radio"},options:["row","column","column-reverse"],table:{defaultValue:{summary:"column"},type:{summary:"TApplyButtonsMobileDirection",detail:'"row" | "column" | "column-reverse"'}}},applyButtonsAlign:{description:"Выравнивание кнопок по горизонтали",control:{type:"radio"},options:["left","center","right"],table:{defaultValue:{summary:"right"},type:{summary:"TApplyButtonsAlign",detail:'"left" | "center" | "right"'}}},cancelBtnContent:{description:"Текст кнопки отмены.",control:{type:"text"}},cancelBtnIconName:{description:"Иконка для кнопки отмены",control:{type:"select"},options:Object.values(i)},submitBtnContent:{description:"Текст кнопки подтверждения.",control:{type:"text"}},submitBtnIconName:{description:"Иконка для кнопки подтверждения",control:{type:"select"},options:Object.values(i)},cancelBtnDisabled:{description:"Заблокировать кнопку отмены",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},disabled:{description:"Заблокировать кнопку подтверждения",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},loading:{description:"Показать индикатор загрузки на кнопке подтверждения",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},disabledConfirm:{description:"Блокирует взаимодействие с модальным окном. При true блокирует все пользовательские события (pointer-events: none) и затемняет контент (opacity: 0.5).",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},loadingConfirm:{description:"По сути то же, что disabledConfirm (блокирует взаимодействие и затемняет контент), но дополнительно отображает спиннер поверх всего содержимого. Используйте при асинхронной загрузке данных.",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},formId:{description:"ID формы для привязки кнопки подтверждения",control:!1,table:{type:{summary:"string"}}},submit:{description:"Callback-функция при подтверждении действия. Если не указан, кнопка 'Submit' не отображается",control:!1},classNameRoot:{description:"Дополнительный CSS-класс для корневого элемента МО",control:!1,table:{type:{summary:"string"}}},submitBtnClassName:{description:"Дополнительный CSS-класс для корневого элемента кнопки 'Submit'",control:!1,table:{type:{summary:"string"}}},cancelBtnClassName:{description:"Дополнительный CSS-класс для корневого элемента кнопки 'Cancel'",control:!1,table:{type:{summary:"string"}}},classNameLayerRoot:{description:"Дополнительный CSS-класс для слоя модального окна",control:!1,table:{type:{summary:"string"}}},classNameHeaderRoot:{description:"Дополнительный CSS-класс для хедера модального окна",control:!1,table:{type:{summary:"string"}}},classNameSubHeaderRoot:{description:"Дополнительный CSS-класс для саб-хедера модального окна",control:!1,table:{type:{summary:"string"}}},classNameFooterRoot:{description:"Дополнительный CSS-класс для футера модального окна",control:!1,table:{type:{summary:"string"}}}},args:{onClose:()=>{},submit:()=>{},submitBtnVariant:"primary",cancelBtnVariant:"secondary"}},d={name:"Default Confirm Dialog",args:{zIndex:1e3,header:"Подтверждение действия",subHeader:"Вы уверены, что хотите выполнить это действие?",cancelBtnContent:"Отмена",submitBtnContent:"Подтвердить",applyButtonsAlign:"right",isHiddenModal:!1,cancelBtnDisabled:!1,disabled:!1,loading:!1,disabledConfirm:!1,loadingConfirm:!1,applyButtonsMobileDirection:"column",isVisibleCloseButton:!0,modalVerticalAlign:"top",textAlign:"left",size:"md"},render:o=>{const{isOpen:t,onCloseModal:e,onOpenModal:s}=l();return n.jsxs(n.Fragment,{children:[n.jsx(a,{onClick:()=>s({}),children:"Открыть подтверждение"}),t&&n.jsx(r,{...o,onClose:e})]})}},c={args:{zIndex:1e3,header:"Удаление элемента",subHeader:"Это действие нельзя будет отменить. Элемент будет удален безвозвратно.",cancelBtnContent:"Отменить",submitBtnContent:"Удалить",submitBtnIconName:i.Trash,textAlign:"center",size:"md"},render:o=>{const{isOpen:t,onCloseModal:e,onOpenModal:s}=l(),y=x=>{alert("Удаление выполнено"),e(x)};return n.jsxs(n.Fragment,{children:[n.jsx(a,{onClick:()=>s({}),children:"Удалить элемент"}),t&&n.jsx(r,{...o,onClose:e,submit:y})]})}},m={name:"Centered Confirm Dialog",args:{zIndex:1e3,header:"Важное действие",subHeader:"Это действие повлияет на несколько систем. Пожалуйста, подтвердите ваше решение.",cancelBtnContent:"Вернуться",submitBtnContent:"Продолжить",modalVerticalAlign:"center",textAlign:"center",size:"lg"},render:o=>{const{isOpen:t,onCloseModal:e,onOpenModal:s}=l();return n.jsxs(n.Fragment,{children:[n.jsx(a,{onClick:()=>s({}),children:"Выполнить важное действие"}),t&&n.jsx(r,{...o,onClose:e,submit:e})]})}},u={name:"Confirm with Loading",args:{zIndex:1e3,header:"Сохранение данных",subHeader:"Пожалуйста, подождите пока данные сохраняются...",cancelBtnContent:"Отмена",submitBtnContent:"Сохранить",loading:!0,disabled:!0,cancelBtnDisabled:!0,size:"md"},render:o=>{const{isOpen:t,onCloseModal:e,onOpenModal:s}=l();return n.jsxs(n.Fragment,{children:[n.jsx(a,{onClick:()=>s({}),children:"Сохранить с загрузкой"}),t&&n.jsx(r,{...o,onClose:e,submit:e})]})}},p={name:"Confirm without Cancel",args:{zIndex:1e3,header:"Информационное сообщение",subHeader:"Это действие будет выполнено автоматически через 5 секунд.",submitBtnContent:"Понятно",applyButtonsAlign:"center",size:"md"},render:o=>{const{isOpen:t,onCloseModal:e,onOpenModal:s}=l();return n.jsxs(n.Fragment,{children:[n.jsx(a,{onClick:()=>s({}),children:"Показать уведомление"}),t&&n.jsx(r,{...o,onClose:e,submit:e})]})}},C={name:"Confirm without Submit",args:{zIndex:1e3,header:"Информация",subHeader:"Это просто информационное сообщение. Для продолжения закройте диалог.",cancelBtnContent:"Закрыть",applyButtonsAlign:"center",size:"md"},render:o=>{const{isOpen:t,onCloseModal:e,onOpenModal:s}=l();return n.jsxs(n.Fragment,{children:[n.jsx(a,{onClick:()=>s({}),children:"Показать информацию"}),t&&n.jsx(r,{...o,onClose:e,submit:void 0})]})}},b={name:"Mobile Optimized Confirm",args:{zIndex:1e3,header:"Мобильное подтверждение",subHeader:"Этот диалог оптимизирован для использования на мобильных устройствах.",cancelBtnContent:"Отмена",submitBtnContent:"ОК",applyButtonsMobileDirection:"column-reverse",applyButtonsAlign:"center",size:"md"},render:o=>{const{isOpen:t,onCloseModal:e,onOpenModal:s}=l();return n.jsxs(n.Fragment,{children:[n.jsx(a,{onClick:()=>s({}),children:"Мобильное подтверждение"}),t&&n.jsx(r,{...o,onClose:e,submit:e})]})}},g={name:"Left Aligned Confirm",args:{zIndex:1e3,header:"Левое выравнивание",subHeader:"Весь текст и кнопки выровнены по левому краю.",cancelBtnContent:"Отмена",submitBtnContent:"Подтвердить",applyButtonsAlign:"left",textAlign:"left",size:"md"},render:o=>{const{isOpen:t,onCloseModal:e,onOpenModal:s}=l();return n.jsxs(n.Fragment,{children:[n.jsx(a,{onClick:()=>s({}),children:"Левое выравнивание"}),t&&n.jsx(r,{...o,onClose:e,submit:e})]})}},f={name:"Confirm with Custom Header",args:{zIndex:1e3,header:n.jsxs("div",{className:M.customHeader,children:[n.jsx(O,{name:i.WarningColor}),n.jsx(h,{classNameRoot:M.customHeaderTitle,children:"Важное предупреждение"})]}),subHeader:"Это действие требует особого внимания. Пожалуйста, проверьте все данные перед подтверждением.",cancelBtnContent:"Отмена",submitBtnContent:"Я понимаю риск",size:"lg"},render:o=>{const{isOpen:t,onCloseModal:e,onOpenModal:s}=l();return n.jsxs(n.Fragment,{children:[n.jsx(a,{onClick:()=>s({}),children:"Важное предупреждение"}),t&&n.jsx(r,{...o,onClose:e,submit:e})]})}},B={name:"Multiple Confirm Dialogs",render:()=>{const{modalData:o,onOpenModal:t,onCloseModal:e}=l();return n.jsxs("div",{className:M.buttonsRow,children:[n.jsx(a,{onClick:()=>t({isOpenFirstConfirm:!0}),children:"Простое подтверждение"}),n.jsx(a,{onClick:()=>t({isOpenSecondConfirm:!0}),children:"Удаление с иконками"}),o?.isOpenFirstConfirm&&n.jsx(r,{zIndex:1e3,header:"Простое подтверждение",subHeader:"Это стандартный диалог подтверждения",cancelBtnContent:"Отмена",submitBtnContent:"OK",onClose:e,size:"md"}),o?.isOpenSecondConfirm&&n.jsx(r,{zIndex:1001,header:"Удаление элемента",subHeader:"Элемент будет удален безвозвратно",cancelBtnContent:"Отменить",submitBtnContent:"Удалить",submitBtnIconName:i.Trash,onClose:e,submit:()=>{},size:"md"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Default Confirm Dialog",
  args: {
    zIndex: 1000,
    header: "Подтверждение действия",
    subHeader: "Вы уверены, что хотите выполнить это действие?",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Подтвердить",
    applyButtonsAlign: "right",
    isHiddenModal: false,
    cancelBtnDisabled: false,
    disabled: false,
    loading: false,
    disabledConfirm: false,
    loadingConfirm: false,
    applyButtonsMobileDirection: "column",
    isVisibleCloseButton: true,
    modalVerticalAlign: "top",
    textAlign: "left",
    size: "md"
  },
  render: args => {
    const {
      isOpen,
      onCloseModal,
      onOpenModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Открыть подтверждение</Button>\r
        {isOpen && <Confirm {...args} onClose={onCloseModal} />}\r
      </>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    zIndex: 1000,
    header: "Удаление элемента",
    subHeader: "Это действие нельзя будет отменить. Элемент будет удален безвозвратно.",
    cancelBtnContent: "Отменить",
    submitBtnContent: "Удалить",
    submitBtnIconName: EIconName.Trash,
    textAlign: "center",
    size: "md"
  },
  render: args => {
    const {
      isOpen,
      onCloseModal,
      onOpenModal
    } = useModal();
    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
      alert("Удаление выполнено");
      onCloseModal(e);
    };
    return <>\r
        <Button onClick={() => onOpenModal({})}>Удалить элемент</Button>\r
        {isOpen && <Confirm {...args} onClose={onCloseModal} submit={handleDelete} />}\r
      </>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Centered Confirm Dialog",
  args: {
    zIndex: 1000,
    header: "Важное действие",
    subHeader: "Это действие повлияет на несколько систем. Пожалуйста, подтвердите ваше решение.",
    cancelBtnContent: "Вернуться",
    submitBtnContent: "Продолжить",
    modalVerticalAlign: "center",
    textAlign: "center",
    size: "lg"
  },
  render: args => {
    const {
      isOpen,
      onCloseModal,
      onOpenModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Выполнить важное действие</Button>\r
        {isOpen && <Confirm {...args} onClose={onCloseModal} submit={onCloseModal} />}\r
      </>;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Confirm with Loading",
  args: {
    zIndex: 1000,
    header: "Сохранение данных",
    subHeader: "Пожалуйста, подождите пока данные сохраняются...",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Сохранить",
    loading: true,
    disabled: true,
    cancelBtnDisabled: true,
    size: "md"
  },
  render: args => {
    const {
      isOpen,
      onCloseModal,
      onOpenModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Сохранить с загрузкой</Button>\r
        {isOpen && <Confirm {...args} onClose={onCloseModal} submit={onCloseModal} />}\r
      </>;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Confirm without Cancel",
  args: {
    zIndex: 1000,
    header: "Информационное сообщение",
    subHeader: "Это действие будет выполнено автоматически через 5 секунд.",
    submitBtnContent: "Понятно",
    applyButtonsAlign: "center",
    size: "md"
  },
  render: args => {
    const {
      isOpen,
      onCloseModal,
      onOpenModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Показать уведомление</Button>\r
        {isOpen && <Confirm {...args} onClose={onCloseModal} submit={onCloseModal} />}\r
      </>;
  }
}`,...p.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Confirm without Submit",
  args: {
    zIndex: 1000,
    header: "Информация",
    subHeader: "Это просто информационное сообщение. Для продолжения закройте диалог.",
    cancelBtnContent: "Закрыть",
    applyButtonsAlign: "center",
    size: "md"
  },
  render: args => {
    const {
      isOpen,
      onCloseModal,
      onOpenModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Показать информацию</Button>\r
        {isOpen && <Confirm {...args} onClose={onCloseModal} submit={undefined} />}\r
      </>;
  }
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Mobile Optimized Confirm",
  args: {
    zIndex: 1000,
    header: "Мобильное подтверждение",
    subHeader: "Этот диалог оптимизирован для использования на мобильных устройствах.",
    cancelBtnContent: "Отмена",
    submitBtnContent: "ОК",
    applyButtonsMobileDirection: "column-reverse",
    applyButtonsAlign: "center",
    size: "md"
  },
  render: args => {
    const {
      isOpen,
      onCloseModal,
      onOpenModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Мобильное подтверждение</Button>\r
        {isOpen && <Confirm {...args} onClose={onCloseModal} submit={onCloseModal} />}\r
      </>;
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Left Aligned Confirm",
  args: {
    zIndex: 1000,
    header: "Левое выравнивание",
    subHeader: "Весь текст и кнопки выровнены по левому краю.",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Подтвердить",
    applyButtonsAlign: "left",
    textAlign: "left",
    size: "md"
  },
  render: args => {
    const {
      isOpen,
      onCloseModal,
      onOpenModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Левое выравнивание</Button>\r
        {isOpen && <Confirm {...args} onClose={onCloseModal} submit={onCloseModal} />}\r
      </>;
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Confirm with Custom Header",
  args: {
    zIndex: 1000,
    header: <div className={styles.customHeader}>\r
        <Icon name={EIconName.WarningColor} />\r
        <Text classNameRoot={styles.customHeaderTitle}>Важное предупреждение</Text>\r
      </div>,
    subHeader: "Это действие требует особого внимания. Пожалуйста, проверьте все данные перед подтверждением.",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Я понимаю риск",
    size: "lg"
  },
  render: args => {
    const {
      isOpen,
      onCloseModal,
      onOpenModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Важное предупреждение</Button>\r
        {isOpen && <Confirm {...args} onClose={onCloseModal} submit={onCloseModal} />}\r
      </>;
  }
}`,...f.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Multiple Confirm Dialogs",
  render: () => {
    const {
      modalData,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <div className={styles.buttonsRow}>\r
        <Button onClick={() => onOpenModal({
        isOpenFirstConfirm: true
      })}>\r
          Простое подтверждение\r
        </Button>\r
        <Button onClick={() => onOpenModal({
        isOpenSecondConfirm: true
      })}>\r
          Удаление с иконками\r
        </Button>\r
\r
        {modalData?.isOpenFirstConfirm && <Confirm zIndex={1000} header="Простое подтверждение" subHeader="Это стандартный диалог подтверждения" cancelBtnContent="Отмена" submitBtnContent="OK" onClose={onCloseModal} size="md" />}\r
\r
        {modalData?.isOpenSecondConfirm && <Confirm zIndex={1001} header="Удаление элемента" subHeader="Элемент будет удален безвозвратно" cancelBtnContent="Отменить" submitBtnContent="Удалить" submitBtnIconName={EIconName.Trash} onClose={onCloseModal} submit={() => {}} size="md" />}\r
      </div>;
  }
}`,...B.parameters?.docs?.source}}};const W=["Default","DeleteConfirmation","CenteredDialog","LoadingState","WithoutCancel","WithoutSubmit","MobileOptimized","LeftAligned","CustomHeaderContent","MultipleConfirms"];export{m as CenteredDialog,f as CustomHeaderContent,d as Default,c as DeleteConfirmation,g as LeftAligned,u as LoadingState,b as MobileOptimized,B as MultipleConfirms,p as WithoutCancel,C as WithoutSubmit,W as __namedExportsOrder,E as default};
