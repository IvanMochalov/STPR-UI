import{r as _,j as e}from"./iframe-DsoVLqtF.js";import{B as l}from"./Button-zrte1TL4.js";import{u as m}from"./index-B8_OZSZW.js";import{c as i}from"./clsx-B-dksMZM.js";import{I as H,E as f}from"./Icon-CcD0Smza.js";import{S as z}from"./Spinner-D4Zhwk-k.js";import{T as q}from"./Text-Da_aKhKS.js";import{L as U}from"./Layer-FeUPcX3B.js";import"./preload-helper-DCNYn41m.js";import"./Potral-7FViUbta.js";import"./index-Cz879DlY.js";import"./index-CMC9NNB4.js";const W="_viewImageModal_2zawy_1",F="_viewImageModal__img_2zawy_24",D="_viewImageModal__img_loading_2zawy_37",$="_viewImageModal__img_error_2zawy_40",P="_viewImageModal__spinner_2zawy_43",A="_viewImageModal__layer_2zawy_70",Q="_viewImageModal__closeButton_2zawy_75",t={viewImageModal:W,viewImageModal__img:F,viewImageModal__img_loading:D,viewImageModal__img_error:$,viewImageModal__spinner:P,viewImageModal__layer:A,viewImageModal__closeButton:Q},Z="/components-assets/ViewImageModal/fallBackSrc.jpeg",r=o=>{const{classNameRoot:a,classNameImageRoot:n,src:s,onLoad:h,onError:S,fallbackSrc:M=Z,showLoader:b=!0,onClose:k}=o,[v,I]=_.useState(!0),[y,C]=_.useState(!1),[x,O]=_.useState(s),j=i({[t.viewImageModal]:!0,...a&&{[a]:!0}}),L=i({[t.viewImageModal__layer]:!0}),R=i({[t.viewImageModal__closeButton]:!0}),V=i({[t.viewImageModal__spinner]:!0}),B=i(t.viewImageModal__img,{[t.viewImageModal__img_loading]:v,[t.viewImageModal__img_error]:y,...n&&{[n]:!0}}),N=w=>{I(!1),h?.(w)},T=w=>{I(!1),C(!0),M&&x!==M&&(O(M),C(!1),I(!0)),S?.(w)};return e.jsxs(U,{classNameRoot:L,children:[b&&v&&e.jsx(z,{classNameRoot:V,size:"xl"}),e.jsxs("div",{className:j,children:[e.jsx("img",{className:B,src:x,alt:"someImage",onLoad:N,onError:T}),y&&e.jsxs("div",{className:t.viewImage__errorWrapper,children:[e.jsx(H,{name:f.InfoError,className:t.viewImage__errorIcon}),e.jsx(q,{children:"Не удалось загрузить изображение"})]})]}),e.jsx(l,{classNameRoot:R,onClick:k,variant:"link",isOnlyIcon:!0,startIconName:f.Close})]})};r.__docgenInfo={description:"",methods:[],displayName:"ViewImageModal",props:{src:{required:!0,tsType:{name:"string"},description:""},fallbackSrc:{required:!1,tsType:{name:"string"},description:"Резерв при ошибке загрузки `src`. По умолчанию — статика пакета: `dist/components-assets/ViewImageModal/fallBackSrc.jpeg` (корень сайта); пустая строка отключает подмену."},zIndex:{required:!1,tsType:{name:"number"},description:""},classNameRoot:{required:!1,tsType:{name:"string"},description:""},classNameImageRoot:{required:!1,tsType:{name:"string"},description:""},showLoader:{required:!1,tsType:{name:"boolean"},description:""},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent<HTMLImageElement, Event>) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent<HTMLImageElement, Event>",elements:[{name:"HTMLImageElement"},{name:"Event"}]},name:"event"}],return:{name:"void"}}},description:""},onLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent<HTMLImageElement, Event>) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent<HTMLImageElement, Event>",elements:[{name:"HTMLImageElement"},{name:"Event"}]},name:"event"}],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const G="/STPR-UI/assets/viewImageExample-BEm_hxQS.jpg",J="_customViewImageModal_1rpzk_1",K="_customImageStyle_1rpzk_7",E={customViewImageModal:J,customImageStyle:K},ce={title:"Components/ViewImageModal",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
Модальное окно для просмотра изображений с поддержкой загрузки, обработки ошибок и адаптивным дизайном. 
Компонент автоматически блокирует скролл страницы и предоставляет удобный интерфейс для просмотра изображений.

## Основные возможности

- **Адаптивные размеры**: 350px (мобильные) → 740px (планшеты) → 825px (desktop)
- **Индикатор загрузки**: отображение спиннера во время загрузки изображения
- **Обработка ошибок**: автоматическая подмена на fallback изображение при ошибках
- **Запасное изображение**: по умолчанию файл из пакета (подкаталог components-assets в артефакте dist); можно переопределить пропом fallbackSrc
- **Блокировка скролла**: автоматическое управление прокруткой страницы
- **Оптимизированное отображение**: object-fit: contain для правильного отображения

## Базовое использование
- Хук useModal разработан специально для управления модальными окнами (и подобных компонентов), экспортируется также из "test-stpr-ui-kit";

\`\`\`jsx
const { isOpen, onOpenModal, onCloseModal } = useModal();

return (
  <>
    <Button onClick={() => onOpenModal({})}>Просмотреть изображение</Button>
    {isOpen && (
      <ViewImageModal
        src="/path/to/image.jpg"
        onClose={onCloseModal}
      />
    )}
  </>
);
\`\`\`

### С запасным изображением и обработкой событий:

\`\`\`jsx
const { isOpen, onOpenModal, onCloseModal } = useModal();

return (
  <>
    <Button onClick={() => onOpenModal({})}>Просмотреть изображение</Button>
    {isOpen && (
      <ViewImageModal
        src="/path/to/image.jpg"
        fallbackSrc="/path/to/fallback.jpg"
        onLoad={() => console.log('Изображение загружено')}
        onError={() => console.log('Ошибка загрузки')}
        onClose={onCloseModal}
      />
    )}
  </>
);
        `}}},argTypes:{src:{description:"URL основного изображения для отображения (обязательный)",control:{type:"text"},table:{type:{summary:"string"}}},fallbackSrc:{description:"URL запасного изображения при ошибке загрузки основного; по умолчанию — `/components-assets/ViewImageModal/fallBackSrc.jpeg` из пакета (при `base` в Storybook см. `args`); пустая строка отключает подмену",control:{type:"text"}},zIndex:{description:"Z-index модального окна. Определяет порядок наложения поверх других элементов",control:!1,table:{defaultValue:{summary:"999"}}},showLoader:{description:"Показывать индикатор загрузки во время загрузки изображения",control:{type:"boolean"},table:{defaultValue:{summary:"true"}}},classNameRoot:{description:"Дополнительный CSS-класс для корневого элемента модального окна",control:!1,table:{type:{summary:"string"}}},classNameImageRoot:{description:"Дополнительный CSS-класс для элемента изображения",control:!1,table:{type:{summary:"string"}}},onLoad:{description:"Callback-функция при успешной загрузке изображения",control:!1,table:{type:{summary:"(event: React.SyntheticEvent<HTMLImageElement, Event>) => void"}}},onError:{description:"Callback-функция при ошибке загрузки изображения",control:!1,table:{type:{summary:"(event: React.SyntheticEvent<HTMLImageElement, Event>) => void"}}},onClose:{description:"Callback-функция при закрытии модального окна (по клику на крестик)",control:!1,table:{type:{summary:"(event: React.MouseEvent<HTMLButtonElement>) => void"}}}},args:{src:G,fallbackSrc:"/STPR-UI/components-assets/ViewImageModal/fallBackSrc.jpeg",onLoad:()=>console.log("loaded ViewImageModal"),onError:()=>console.log("error ViewImageModal"),showLoader:!0}},c={name:"Default ViewImageModal",render:o=>{const{isOpen:a,onOpenModal:n,onCloseModal:s}=m();return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>n({}),children:"Показать изображение"}),a&&e.jsx(r,{...o,onClose:s})]})}},d={name:"ViewImageModal without Loader",args:{showLoader:!1},render:o=>{const{isOpen:a,onOpenModal:n,onCloseModal:s}=m();return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>n({}),children:"Показать без загрузчика"}),a&&e.jsx(r,{...o,onClose:s})]})}},g={name:"ViewImageModal with Error Handling",args:{src:"/STPR-UI/images/non-existent-image.jpg"},render:o=>{const{isOpen:a,onOpenModal:n,onCloseModal:s}=m();return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>n({}),children:"Показать с ошибкой"}),a&&e.jsx(r,{...o,onClose:s})]})}},p={name:"ViewImageModal with Callbacks",args:{onLoad:o=>{console.log("Изображение успешно загружено",o)},onError:o=>{console.log("Ошибка загрузки изображения",o)}},render:o=>{const{isOpen:a,onOpenModal:n,onCloseModal:s}=m();return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>n({}),children:"Показать с callback'ами"}),a&&e.jsx(r,{...o,onClose:s})]})}},u={name:"ViewImageModal with Custom Styling",args:{classNameRoot:E.customViewImageModal,classNameImageRoot:E.customImageStyle},render:o=>{const{isOpen:a,onOpenModal:n,onCloseModal:s}=m();return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>n({}),children:"Показать с кастомными стилями"}),a&&e.jsx(r,{...o,onClose:s}),e.jsx("style",{children:`
          .custom-view-image-modal {
            border: 2px solid #007bff;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 123, 255, 0.3);
          }
          .custom-image-style {
            border-radius: 8px;
          }
        `})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Default ViewImageModal",
  render: args => {
    const {
      isOpen,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Показать изображение</Button>\r
        {isOpen && <ViewImageModal {...args} onClose={onCloseModal} />}\r
      </>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "ViewImageModal without Loader",
  args: {
    showLoader: false
  },
  render: args => {
    const {
      isOpen,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Показать без загрузчика</Button>\r
        {isOpen && <ViewImageModal {...args} onClose={onCloseModal} />}\r
      </>;
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "ViewImageModal with Error Handling",
  args: {
    src: \`\${import.meta.env.BASE_URL}images/non-existent-image.jpg\`
  },
  render: args => {
    const {
      isOpen,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Показать с ошибкой</Button>\r
        {isOpen && <ViewImageModal {...args} onClose={onCloseModal} />}\r
      </>;
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "ViewImageModal with Callbacks",
  args: {
    onLoad: event => {
      console.log("Изображение успешно загружено", event);
      // Можно добавить аналитику или дополнительную логику
    },
    onError: event => {
      console.log("Ошибка загрузки изображения", event);
      // Можно отправить ошибку в систему мониторинга
    }
  },
  render: args => {
    const {
      isOpen,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Показать с callback&apos;ами</Button>\r
        {isOpen && <ViewImageModal {...args} onClose={onCloseModal} />}\r
      </>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "ViewImageModal with Custom Styling",
  args: {
    classNameRoot: styles.customViewImageModal,
    classNameImageRoot: styles.customImageStyle
  },
  render: args => {
    const {
      isOpen,
      onOpenModal,
      onCloseModal
    } = useModal();
    return <>\r
        <Button onClick={() => onOpenModal({})}>Показать с кастомными стилями</Button>\r
        {isOpen && <ViewImageModal {...args} onClose={onCloseModal} />}\r
\r
        <style>{\`
          .custom-view-image-modal {
            border: 2px solid #007bff;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 123, 255, 0.3);
          }
          .custom-image-style {
            border-radius: 8px;
          }
        \`}</style>\r
      </>;
  }
}`,...u.parameters?.docs?.source}}};const de=["Default","WithoutLoader","WithErrorHandling","WithCallbacks","CustomStyling"];export{u as CustomStyling,c as Default,p as WithCallbacks,g as WithErrorHandling,d as WithoutLoader,de as __namedExportsOrder,ce as default};
