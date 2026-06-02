import{j as e}from"./iframe-DFzgFXfL.js";import{A as j}from"./ApplyButtons-DoQRJdFt.js";import{B as r}from"./Button---xTaN4m.js";import{M as s,C as D}from"./Confirm-3z1hcWeP.js";import{F as I}from"./Form-WfnlPbHH.js";import{I as i}from"./Input-Bnd2RYvP.js";import{u as l}from"./index-zCJD0lRf.js";import{T as c}from"./Text-Cmw29Q9M.js";import"./preload-helper-DCNYn41m.js";import"./clsx-B-dksMZM.js";import"./Icon-FLtHPxG2.js";import"./Spinner-BxCCScEk.js";import"./Layer-CRbpX3j0.js";import"./Potral-BSVlFBsR.js";import"./index-DP6wETD2.js";import"./index-sQF5gpHW.js";import"./index-CJOS51_R.js";import"./Label-5pjt2kXZ.js";import"./Tooltip-CAn8cC1X.js";import"./BaseTooltip-70cfOlMv.js";const k="_footerActions_4ev9a_15",S="_customHeader_4ev9a_20",H="_customHeaderIcon_4ev9a_27",F="_sizesComparisonRow_4ev9a_32",y={footerActions:k,customHeader:S,customHeaderIcon:H,sizesComparisonRow:F},$={title:"Components/Modal",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
Компонент модального окна для отображения важной информации, форм или действий поверх основного контента. 
Автоматически блокирует скролл страницы и предоставляет гибкие настройки внешнего вида.

## Основные возможности

- **Два размера максимальной ширины МО**: md (600px) и lg (920px) на desktop
- **Выравнивание по вертикали**: центрирование или позиционирование сверху
- **Заголовки**: основной заголовок и подзаголовок
- **Футер**: область для кнопок действий
- **Блокировка скролла**: автоматическое управление прокруткой страницы
- **Адаптивный дизайн**: разные отступы и размеры на мобильных и desktop
- **Умный скролл контента**: при \`modalVerticalAlign: "center"\` и переполнении контента скроллируется только область контента, хедер и футер остаются фиксированными

## Особенности вертикального выравнивания

### \`modalVerticalAlign: "top"\`
- Модальное окно прижато к верху экрана
- Подходит для окон с небольшим количеством контента
- Весь контент доступен без внутреннего скролла

### \`modalVerticalAlign: "center"\` 
- Модальное окно центрировано по вертикали
- Автоматически ограничивает максимальную высоту окна
- При переполнении контента добавляется скролл только для области контента
- Хедер и футер остаются фиксированными на месте
- Идеально для окон с большим количеством контента

## Базовое использование
Хук useModal разработан специально для управления МО (и подобных компонентов), экспортируется также из "test-stpr-ui-kit";

\`\`\`jsx
const { isOpen, onOpenModal, onCloseModal } = useModal();

return (
  <>
    <Button onClick={() => onOpenModal({...})}>Открыть модальное окно</Button>
    {isOpen && (
      <Modal
        header="Заголовок модального окна"
        onClose={onCloseModal}
        zIndex={1000}
      >
        <div>Содержимое модального окна</div>
      </Modal>
    )}
  </>
);
\`\`\`

### Несколько модальных окон, управляемых одним хуком useModal:
Хук useModal также возвращает modalData, которая была передана аргументом в onOpenModal;

Особенность данной реализации в том, что при открытии МО при наличии другого открытого МО,
 отображается последнее открытое ([см. пример Modal With Modal Inside](#modal-with-modal-inside)).


\`\`\`jsx
const { modalData, onOpenModal, onCloseModal } = useModal();

return (
  <>
    <Button onClick={() => onOpenModal({isOpenFirstModal: true})}>Открыть первое модальное окно</Button>
    <Button onClick={() => onOpenModal({isOpenSecondModal: true})}>Открыть второе модальное окно</Button>
    {modalData?.isOpenFirstModal && (
      <Modal
        header="Заголовок первого модального окна"
        onClose={onCloseModal}
        zIndex={1000}
      >
        <div>Содержимое первого модального окна</div>
      </Modal>
    )}
    {modalData?.isOpenSecondModal && (
      <Modal
        header="Заголовок второго модального окна"
        onClose={onCloseModal}
        zIndex={1000}
      >
        <div>Содержимое второго модального окна</div>
      </Modal>
    )}
  </>
);
\`\`\`

Для того чтобы одним хуком \`useModal\` управлять несколькими МО, которые отображаются поверх друг друга,
 передайте в \`onOpenModal\` второй аргумент в качестве \`true\` ==> \`onOpenModal({isOpenSecondModal: true}, true)\`.
 Такое использование сохранит данные из предыдущего состояни \`modalData\` ([см. пример Modal With Modal Inside And Not Closing Others](#modal-with-modal-inside-and-not-closing-others-with-closing-control)).

 \`\`\`jsx
const { modalData, onOpenModal, onCloseModal } = useModal();

return (
  <>
    <Button onClick={() => onOpenModal({ isOpenEditUserData: true })}>Открыть с футером</Button>
    {modalData?.isOpenEditUserData && (
      <Modal
        zIndex={1000}
        header={"Редактирование профиля"}
        subHeader={"Внесите необходимые изменения в данные пользователя"}
        onClose={onCloseModal}
        footer={
          <ApplyButtons
            cancelBtnContent="Отмена"
            applyButtonsAlign={"right"}
            submitBtnContent="Сохранить"
            onClose={() => console.log("Закрыть")}
            submit={() => onOpenModal({ isOpenConfirm: true }, true)}
          />
        }
      >
        <Form addMargin={true} size={"md"}>
          <Input placeholder="Имя" name={"name"} onChange={() => {}} />
          <Input placeholder="Email" name={"email"} onChange={() => {}} />
          <Text type={"p1"} color={"red"}>
            Нажми сохранить для открытия второго МО
          </Text>
        </Form>
      </Modal>
    )}
    {modalData?.isOpenConfirm && (
      <Confirm
        zIndex={1001}
        modalVerticalAlign={"center"}
        size={"md"}
        header={"Вы уверены?"}
        onClose={onCloseModal}
        cancelBtnContent={"Нет"}
        submitBtnContent={"Да"}
        submit={onCloseModal}
      />
    )}
  </>
);
\`\`\`

В данном случае видно, что \`onCloseModal\` закрывает все МО. Для того чтобы закрывать МО по отдельности используйте \`onCloseModal\` следующим образом: 
\`(e) => onCloseModal(e, { isOpenConfirm: false })\`. При таком использовании \`onCloseModal\` не будет сетить \`modalData\` в \`null\`,
 а будет обновлять состояние на основе данных, переданных вторым аргументов в \`onCloseModal\` с сохранением предыдущего состояния
 ([см. пример Modal With Modal Inside And Not Closing Others With Closing Control](#modal-with-modal-inside-and-not-closing-others)).

 \`\`\`jsx
const { modalData, onOpenModal, onCloseModal } = useModal();

return (
  <>
    <Button onClick={() => onOpenModal({ isOpenEditUserData: true })}>Открыть с футером</Button>
    {modalData?.isOpenEditUserData && (
      <Modal
        zIndex={1000}
        header={"Редактирование профиля"}
        subHeader={"Внесите необходимые изменения в данные пользователя"}
        onClose={onCloseModal}
        footer={
          <ApplyButtons
            cancelBtnContent="Отмена"
            applyButtonsAlign={"right"}
            submitBtnContent="Сохранить"
            onClose={() => console.log("Закрыть")}
            submit={() => onOpenModal({ isOpenConfirm: true }, true)}
          />
        }
      >
        <Form addMargin={true} size={"md"}>
          <Input placeholder="Имя" name={"name"} onChange={() => {}} />
          <Input placeholder="Email" name={"email"} onChange={() => {}} />
          <Text type={"p1"} color={"red"}>
            Нажми сохранить для открытия второго МО
          </Text>
        </Form>
      </Modal>
    )}
    {modalData?.isOpenConfirm && (
      <Confirm
        zIndex={1001}
        modalVerticalAlign={"center"}
        size={"md"}
        header={"Вы уверены?"}
        onClose={(e) => onCloseModal(e, { isOpenConfirm: false })}
        cancelBtnContent={"Нет"}
        submitBtnContent={"Да"}
        submit={(e) => onCloseModal(e, { isOpenConfirm: false })}
      />
    )}
  </>
);
\`\`\`
        `}}},argTypes:{zIndex:{description:"Z-index модального окна. Определяет порядок наложения поверх других элементов",control:{type:"number"},table:{defaultValue:{summary:"999"}}},size:{description:`Размер модального окна:
- 'lg': большой (920px max-width на desktop)
- 'md': средний (600px max-width на desktop)`,control:{type:"radio"},options:["md","lg"],table:{defaultValue:{summary:"lg"},type:{summary:"TModalSize",detail:"'md' | 'lg'"}}},disabled:{description:"Блокирует взаимодействие с модальным окном. При true блокирует все пользовательские события (pointer-events: none) и затемняет контент (opacity: 0.5).",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},loading:{description:"По сути то же, что disabled (блокирует взаимодействие и затемняет контент), но дополнительно отображает спиннер поверх всего содержимого. Используйте при асинхронной загрузке данных.",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},modalVerticalAlign:{description:`Вертикальное выравнивание модального окна:
- 'top': прижато к верху экрана (подходит для короткого контента)
- 'center': центрировано по вертикали (автоматически добавляет скролл для контента при переполнении, фиксируя хедер и футер)`,control:{type:"radio"},options:["top","center"],table:{defaultValue:{summary:"top"},type:{summary:"TModalVerticalAlign",detail:"'center' | 'top'"}}},textAlign:{description:"Горизонтальное выравнивание текста внутри модального окна",control:{type:"radio"},options:["left","center","right"],table:{defaultValue:{summary:"left"},type:{summary:"TTextAlign",detail:"'left' | 'center' | 'right'"}}},isHiddenModal:{description:"Скрыть модальное окно. Используется для скрытия МО при отсутствии условного рендеринга компонента Modal",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isVisibleCloseButton:{description:"Показывать кнопку закрытия в правом верхнем углу",control:{type:"boolean"},table:{defaultValue:{summary:"true"}}},header:{description:"Заголовок модального окна. Может быть строкой или React-компонентом (обязательный)",control:{type:"text"},table:{type:{summary:"string | ReactNode"}}},subHeader:{description:"React-компонент. Подзаголовок модального окна. Отображается под основным заголовком",control:{type:"text"},table:{type:{summary:"ReactNode"}}},footer:{description:"Футер модального окна. Обычно содержит кнопки действий",control:!1,table:{type:{summary:"ReactNode"}}},children:{description:"Основное содержимое модального окна",control:!1,table:{type:{summary:"ReactNode"}}},onClose:{description:"Callback-функция при закрытии модального окна (по клику на крестик или вне области)",control:!1},style:{description:"Инлайн-стили для кастомизации внешнего вида модального окна",control:{type:"object"}},classNameRoot:{description:"Дополнительный CSS-класс для корневого элемента модального окна",control:!1,table:{type:{summary:"string"}}},classNameHeaderRoot:{description:"Дополнительный CSS-класс для хедера модального окна",control:!1,table:{type:{summary:"string"}}},classNameSubHeaderRoot:{description:"Дополнительный CSS-класс для саб-хедера модального окна",control:!1,table:{type:{summary:"string"}}},classNameFooterRoot:{description:"Дополнительный CSS-класс для футера модального окна",control:!1,table:{type:{summary:"string"}}},classNameLayerRoot:{description:"Дополнительный CSS-класс для слоя (Layer) модального окна",control:!1,table:{type:{summary:"string"}}}}},d={name:"Default Modal",args:{children:"Содержимое модального окна. Здесь может быть любой React-компонент или текст.",header:"Заголовок модального окна",isHiddenModal:!1,disabled:!1,loading:!1,isVisibleCloseButton:!0,textAlign:"left",size:"lg",modalVerticalAlign:"top",zIndex:1e3,subHeader:""},render:t=>{const{isOpen:o,onOpenModal:a,onCloseModal:n}=l();return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>a({}),children:"Открыть модальное окно"}),o&&e.jsx(s,{...t,onClose:n})]})}},m={name:"Modal with disabled",render:d.render,args:{...d.args,disabled:!0}},p={name:"Modal with loading",render:d.render,args:{...d.args,loading:!0}},u={name:"Medium Size Modal",args:{children:"Это модальное окно среднего размера. Идеально для коротких сообщений и подтверждений.",header:"Подтверждение действия",size:"md",zIndex:1e3},render:t=>{const{isOpen:o,onOpenModal:a,onCloseModal:n}=l();return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>a({}),children:"Открыть среднее окно"}),o&&e.jsx(s,{...t,onClose:n})]})}},C={name:"Modal with SubHeader",args:{children:"Основное содержимое модального окна.",header:"Основной заголовок",subHeader:"Дополнительный подзаголовок с поясняющей информацией",zIndex:1e3},render:t=>{const{isOpen:o,onOpenModal:a,onCloseModal:n}=l();return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>a({}),children:"Открыть с подзаголовком"}),o&&e.jsx(s,{...t,onClose:n})]})}},M={name:"Modal with Footer",args:{children:e.jsx("div",{children:e.jsxs(I,{addMargin:!0,size:"md",children:[e.jsx(i,{placeholder:"Имя",name:"name",onChange:()=>{}}),e.jsx(i,{placeholder:"Email",name:"email",onChange:()=>{}})]})}),header:"Редактирование профиля",subHeader:"Внесите необходимые изменения в данные пользователя",zIndex:1e3},render:t=>{const{isOpen:o,onOpenModal:a,onCloseModal:n}=l();return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>a({}),children:"Открыть с футером"}),o&&e.jsx(s,{...t,onClose:n,footer:e.jsx(j,{applyButtonsAlign:"right",cancelBtnContent:"Отмена",submitBtnContent:"Сохранить",onClose:n,submit:n})})]})}},h={args:{children:"Это модальное окно центрировано по середине экрана.",header:"Центрированное окно",modalVerticalAlign:"center",textAlign:"center",zIndex:1e3},render:t=>{const{isOpen:o,onOpenModal:a,onCloseModal:n}=l();return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>a({}),children:"Открыть центрированное"}),o&&e.jsx(s,{...t,onClose:n})]})}},g={name:"Modal without Close Button",args:{children:"Это модальное окно нельзя закрыть через крестик. Используйте кнопку ниже.",header:"Окно без кнопки закрытия",isVisibleCloseButton:!1,zIndex:1e3},render:t=>{const{isOpen:o,onOpenModal:a,onCloseModal:n}=l();return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>a({}),children:"Открыть окно"}),o&&e.jsx(s,{...t,onClose:n,children:e.jsx("div",{className:y.footerActions,children:e.jsx(r,{onClick:n,children:"Закрыть модальное окно"})})})]})}},x={name:"Right Aligned Text Modal",args:{children:"Весь текст в этом модальном окне выровнен по правому краю.",header:"Правовое соглашение",textAlign:"right",zIndex:1e3},render:t=>{const{isOpen:o,onOpenModal:a,onCloseModal:n}=l();return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>a({}),children:"Открыть с правым выравниванием"}),o&&e.jsx(s,{...t,onClose:n})]})}},O={name:"Modal with Custom Header",args:{children:"Заголовок этого модального окна реализован как кастомный React-компонент.",header:e.jsxs("div",{className:y.customHeader,children:[e.jsx("span",{className:y.customHeaderIcon,children:"⚡"}),e.jsx("span",{children:"Кастомный заголовок"})]}),zIndex:1e3},render:t=>{const{isOpen:o,onOpenModal:a,onCloseModal:n}=l();return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>a({}),children:"Открыть с кастомным заголовком"}),o&&e.jsx(s,{...t,onClose:n})]})}},B={name:"Modal Sizes Comparison",render:()=>{const{modalData:t,onOpenModal:o,onCloseModal:a}=l();return e.jsxs("div",{className:y.sizesComparisonRow,children:[e.jsx(r,{onClick:()=>o({isOpenMd:!0}),children:"Открыть Medium (600px)"}),e.jsx(r,{onClick:()=>o({isOpenLg:!0}),children:"Открыть Large (920px)"}),t?.isOpenMd&&e.jsx(s,{header:"Medium Modal",size:"md",onClose:a,zIndex:1e3,children:e.jsx(c,{children:"Это модальное окно среднего размера (max-width: 600px на desktop)."})}),t?.isOpenLg&&e.jsx(s,{header:"Large Modal",size:"lg",onClose:a,zIndex:1001,children:e.jsx(c,{children:"Это модальное окно большого размера (max-width: 920px на desktop)."})})]})}},f={name:"Modal With Modal Inside",args:{children:e.jsxs(I,{addMargin:!0,size:"md",children:[e.jsx(i,{placeholder:"Имя",name:"name",onChange:()=>{}}),e.jsx(i,{placeholder:"Email",name:"email",onChange:()=>{}}),e.jsx(c,{type:"p1",color:"red",children:"Нажми сохранить для открытия второго МО"})]}),modalVerticalAlign:"center",header:"Редактирование профиля",subHeader:"Внесите необходимые изменения в данные пользователя",zIndex:1e3},render:t=>{const{modalData:o,onOpenModal:a,onCloseModal:n}=l();return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>a({isOpenEditUserData:!0}),children:"Открыть с футером"}),o?.isOpenEditUserData&&e.jsx(s,{...t,onClose:n,footer:e.jsx(j,{cancelBtnContent:"Отмена",applyButtonsAlign:"right",submitBtnContent:"Сохранить",onClose:()=>console.log("Закрыть"),submit:()=>a({isOpenConfirm:!0})})}),o?.isOpenConfirm&&e.jsx(D,{size:"md",header:"Вы уверены?",onClose:n,cancelBtnContent:"Нет",submitBtnContent:"Да",submit:n})]})}},b={name:"Modal With Modal Inside And Not Closing Others",args:{children:e.jsxs(I,{addMargin:!0,size:"md",children:[e.jsx(i,{placeholder:"Имя",name:"name",onChange:()=>{}}),e.jsx(i,{placeholder:"Email",name:"email",onChange:()=>{}}),e.jsx(c,{type:"p1",color:"red",children:"Нажми сохранить для открытия второго МО"})]}),header:"Редактирование профиля",subHeader:"Внесите необходимые изменения в данные пользователя",zIndex:1e3},render:t=>{const{modalData:o,onOpenModal:a,onCloseModal:n}=l();return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>a({isOpenEditUserData:!0}),children:"Открыть с футером"}),o?.isOpenEditUserData&&e.jsx(s,{...t,onClose:n,footer:e.jsx(j,{cancelBtnContent:"Отмена",applyButtonsAlign:"right",submitBtnContent:"Сохранить",onClose:()=>console.log("Закрыть"),submit:()=>a({isOpenConfirm:!0},!0)})}),o?.isOpenConfirm&&e.jsx(D,{zIndex:1001,modalVerticalAlign:"center",size:"md",header:"Вы уверены?",onClose:n,cancelBtnContent:"Нет",submitBtnContent:"Да",submit:n})]})}},z={name:"Modal With Modal Inside And Not Closing Others With Closing Control",args:{children:e.jsxs(I,{addMargin:!0,size:"md",children:[e.jsx(i,{placeholder:"Имя",name:"name",onChange:()=>{}}),e.jsx(i,{placeholder:"Email",name:"email",onChange:()=>{}}),e.jsx(c,{type:"p1",color:"red",children:"Нажми сохранить для открытия второго МО"})]}),header:"Редактирование профиля",subHeader:"Внесите необходимые изменения в данные пользователя",zIndex:1e3},render:t=>{const{modalData:o,onOpenModal:a,onCloseModal:n}=l();return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>a({isOpenEditUserData:!0}),children:"Открыть с футером"}),o?.isOpenEditUserData&&e.jsx(s,{...t,onClose:n,footer:e.jsx(j,{cancelBtnContent:"Отмена",applyButtonsAlign:"right",submitBtnContent:"Сохранить",onClose:()=>console.log("Закрыть"),submit:()=>a({isOpenConfirm:!0},!0)})}),o?.isOpenConfirm&&e.jsx(D,{zIndex:1001,modalVerticalAlign:"center",size:"md",header:"Вы уверены?",onClose:A=>n(A,{isOpenConfirm:!1}),cancelBtnContent:"Нет",submitBtnContent:"Да",submit:A=>n(A,{isOpenConfirm:!1})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Default Modal",
  args: {
    children: "Содержимое модального окна. Здесь может быть любой React-компонент или текст.",
    header: "Заголовок модального окна",
    isHiddenModal: false,
    disabled: false,
    loading: false,
    isVisibleCloseButton: true,
    textAlign: "left",
    size: "lg",
    modalVerticalAlign: "top",
    zIndex: 1000,
    subHeader: ""
  },
  render: args => {
    const {
      isOpen,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Открыть модальное окно</Button>\r
        {isOpen && <Modal {...args} onClose={onCloseModal} />}\r
      </>;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Modal with disabled",
  render: Default.render,
  args: {
    ...Default.args,
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Modal with loading",
  render: Default.render,
  args: {
    ...Default.args,
    loading: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Medium Size Modal",
  args: {
    children: "Это модальное окно среднего размера. Идеально для коротких сообщений и подтверждений.",
    header: "Подтверждение действия",
    size: "md",
    zIndex: 1000
  },
  render: args => {
    const {
      isOpen,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Открыть среднее окно</Button>\r
        {isOpen && <Modal {...args} onClose={onCloseModal} />}\r
      </>;
  }
}`,...u.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Modal with SubHeader",
  args: {
    children: "Основное содержимое модального окна.",
    header: "Основной заголовок",
    subHeader: "Дополнительный подзаголовок с поясняющей информацией",
    zIndex: 1000
  },
  render: args => {
    const {
      isOpen,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Открыть с подзаголовком</Button>\r
        {isOpen && <Modal {...args} onClose={onCloseModal} />}\r
      </>;
  }
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Modal with Footer",
  args: {
    children: <div>\r
        <Form addMargin={true} size={"md"}>\r
          <Input placeholder="Имя" name={"name"} onChange={() => {}} />\r
          <Input placeholder="Email" name={"email"} onChange={() => {}} />\r
        </Form>\r
      </div>,
    header: "Редактирование профиля",
    subHeader: "Внесите необходимые изменения в данные пользователя",
    zIndex: 1000
  },
  render: args => {
    const {
      isOpen,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Открыть с футером</Button>\r
        {isOpen && <Modal {...args} onClose={onCloseModal} footer={<ApplyButtons applyButtonsAlign={"right"} cancelBtnContent="Отмена" submitBtnContent="Сохранить" onClose={onCloseModal} submit={onCloseModal} />} />}\r
      </>;
  }
}`,...M.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Это модальное окно центрировано по середине экрана.",
    header: "Центрированное окно",
    modalVerticalAlign: "center",
    textAlign: "center",
    zIndex: 1000
  },
  render: args => {
    const {
      isOpen,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Открыть центрированное</Button>\r
        {isOpen && <Modal {...args} onClose={onCloseModal} />}\r
      </>;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Modal without Close Button",
  args: {
    children: "Это модальное окно нельзя закрыть через крестик. Используйте кнопку ниже.",
    header: "Окно без кнопки закрытия",
    isVisibleCloseButton: false,
    zIndex: 1000
  },
  render: args => {
    const {
      isOpen,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Открыть окно</Button>\r
        {isOpen && <Modal {...args} onClose={onCloseModal}>\r
            <div className={styles.footerActions}>\r
              <Button onClick={onCloseModal}>Закрыть модальное окно</Button>\r
            </div>\r
          </Modal>}\r
      </>;
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Right Aligned Text Modal",
  args: {
    children: "Весь текст в этом модальном окне выровнен по правому краю.",
    header: "Правовое соглашение",
    textAlign: "right",
    zIndex: 1000
  },
  render: args => {
    const {
      isOpen,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Открыть с правым выравниванием</Button>\r
        {isOpen && <Modal {...args} onClose={onCloseModal} />}\r
      </>;
  }
}`,...x.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Modal with Custom Header",
  args: {
    children: "Заголовок этого модального окна реализован как кастомный React-компонент.",
    header: <div className={styles.customHeader}>\r
        <span className={styles.customHeaderIcon}>⚡</span>\r
        <span>Кастомный заголовок</span>\r
      </div>,
    zIndex: 1000
  },
  render: args => {
    const {
      isOpen,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Открыть с кастомным заголовком</Button>\r
        {isOpen && <Modal {...args} onClose={onCloseModal} />}\r
      </>;
  }
}`,...O.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Modal Sizes Comparison",
  render: () => {
    const {
      modalData,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <div className={styles.sizesComparisonRow}>\r
        <Button onClick={() => onOpenModal({
        isOpenMd: true
      })}>Открыть Medium (600px)</Button>\r
        <Button onClick={() => onOpenModal({
        isOpenLg: true
      })}>Открыть Large (920px)</Button>\r
\r
        {modalData?.isOpenMd && <Modal header="Medium Modal" size="md" onClose={onCloseModal} zIndex={1000}>\r
            <Text>Это модальное окно среднего размера (max-width: 600px на desktop).</Text>\r
          </Modal>}\r
\r
        {modalData?.isOpenLg && <Modal header="Large Modal" size="lg" onClose={onCloseModal} zIndex={1001}>\r
            <Text>Это модальное окно большого размера (max-width: 920px на desktop).</Text>\r
          </Modal>}\r
      </div>;
  }
}`,...B.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Modal With Modal Inside",
  args: {
    children: <Form addMargin={true} size={"md"}>\r
        <Input placeholder="Имя" name={"name"} onChange={() => {}} />\r
        <Input placeholder="Email" name={"email"} onChange={() => {}} />\r
        <Text type={"p1"} color={"red"}>\r
          Нажми сохранить для открытия второго МО\r
        </Text>\r
      </Form>,
    modalVerticalAlign: "center",
    header: "Редактирование профиля",
    subHeader: "Внесите необходимые изменения в данные пользователя",
    zIndex: 1000
  },
  render: args => {
    const {
      modalData,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({
        isOpenEditUserData: true
      })}>Открыть с футером</Button>\r
        {modalData?.isOpenEditUserData && <Modal {...args} onClose={onCloseModal} footer={<ApplyButtons cancelBtnContent="Отмена" applyButtonsAlign={"right"} submitBtnContent="Сохранить" onClose={() => console.log("Закрыть")} submit={() => onOpenModal({
        isOpenConfirm: true
      })} />} />}\r
        {modalData?.isOpenConfirm && <Confirm size={"md"} header={"Вы уверены?"} onClose={onCloseModal} cancelBtnContent={"Нет"} submitBtnContent={"Да"} submit={onCloseModal} />}\r
      </>;
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Modal With Modal Inside And Not Closing Others",
  args: {
    children: <Form addMargin={true} size={"md"}>\r
        <Input placeholder="Имя" name={"name"} onChange={() => {}} />\r
        <Input placeholder="Email" name={"email"} onChange={() => {}} />\r
        <Text type={"p1"} color={"red"}>\r
          Нажми сохранить для открытия второго МО\r
        </Text>\r
      </Form>,
    header: "Редактирование профиля",
    subHeader: "Внесите необходимые изменения в данные пользователя",
    zIndex: 1000
  },
  render: args => {
    const {
      modalData,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({
        isOpenEditUserData: true
      })}>Открыть с футером</Button>\r
        {modalData?.isOpenEditUserData && <Modal {...args} onClose={onCloseModal} footer={<ApplyButtons cancelBtnContent="Отмена" applyButtonsAlign={"right"} submitBtnContent="Сохранить" onClose={() => console.log("Закрыть")} submit={() => onOpenModal({
        isOpenConfirm: true
      }, true)} />} />}\r
        {modalData?.isOpenConfirm && <Confirm zIndex={1001} modalVerticalAlign={"center"} size={"md"} header={"Вы уверены?"} onClose={onCloseModal} cancelBtnContent={"Нет"} submitBtnContent={"Да"} submit={onCloseModal} />}\r
      </>;
  }
}`,...b.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Modal With Modal Inside And Not Closing Others With Closing Control",
  args: {
    children: <Form addMargin={true} size={"md"}>\r
        <Input placeholder="Имя" name={"name"} onChange={() => {}} />\r
        <Input placeholder="Email" name={"email"} onChange={() => {}} />\r
        <Text type={"p1"} color={"red"}>\r
          Нажми сохранить для открытия второго МО\r
        </Text>\r
      </Form>,
    header: "Редактирование профиля",
    subHeader: "Внесите необходимые изменения в данные пользователя",
    zIndex: 1000
  },
  render: args => {
    const {
      modalData,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({
        isOpenEditUserData: true
      })}>Открыть с футером</Button>\r
        {modalData?.isOpenEditUserData && <Modal {...args} onClose={onCloseModal} footer={<ApplyButtons cancelBtnContent="Отмена" applyButtonsAlign={"right"} submitBtnContent="Сохранить" onClose={() => console.log("Закрыть")} submit={() => onOpenModal({
        isOpenConfirm: true
      }, true)} />} />}\r
        {modalData?.isOpenConfirm && <Confirm zIndex={1001} modalVerticalAlign={"center"} size={"md"} header={"Вы уверены?"} onClose={e => onCloseModal(e, {
        isOpenConfirm: false
      })} cancelBtnContent={"Нет"} submitBtnContent={"Да"} submit={e => onCloseModal(e, {
        isOpenConfirm: false
      })} />}\r
      </>;
  }
}`,...z.parameters?.docs?.source}}};const ee=["Default","WithDisabled","WithLoading","MediumSize","WithSubHeader","WithFooter","CenteredModal","WithoutCloseButton","RightAlignedText","CustomHeader","SizesComparison","WithModalInside","WithModalInsideAndNotClosingOthers","WithModalInsideAndNotClosingOthersWithClosingControl"];export{h as CenteredModal,O as CustomHeader,d as Default,u as MediumSize,x as RightAlignedText,B as SizesComparison,m as WithDisabled,M as WithFooter,p as WithLoading,f as WithModalInside,b as WithModalInsideAndNotClosingOthers,z as WithModalInsideAndNotClosingOthersWithClosingControl,C as WithSubHeader,g as WithoutCloseButton,ee as __namedExportsOrder,$ as default};
