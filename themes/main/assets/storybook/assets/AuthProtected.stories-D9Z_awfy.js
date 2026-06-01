import{r as i,j as e}from"./iframe-CA4deTFl.js";import{C as y}from"./Confirm-DaD07UkC.js";import{B as l}from"./Button-enFxszJ_.js";import{T as a}from"./Text-DSk7EiGw.js";import"./preload-helper-JD0jGv3q.js";import"./ApplyButtons-BmQmNhpl.js";import"./clsx-B-dksMZM.js";import"./Icon-DndJayG8.js";import"./Spinner-8qRTIFQm.js";import"./Layer-COehigPG.js";import"./Potral-CkHkY5OB.js";import"./index-SbPXkCt7.js";import"./index-DESwEi8l.js";const c=r=>{const{children:n,isNeedAuthorized:t,onClickAuthorization:m,unauthorizedMessage:h="Необходимо авторизоваться",authButtonText:p="Авторизоваться",confirmSize:A="md",zIndex:x=999}=r,[z,d]=i.useState(t);i.useEffect(()=>{d(t)},[t]);const f=()=>{d(!1),m?.()};return e.jsxs(e.Fragment,{children:[n,z&&e.jsx(y,{zIndex:x,isVisibleCloseButton:!1,textAlign:"center",applyButtonsAlign:"center",header:h,submitBtnContent:p,size:A,submit:f})]})};c.__docgenInfo={description:"",methods:[],displayName:"AuthProtected",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isNeedAuthorized:{required:!0,tsType:{name:"boolean"},description:""},onClickAuthorization:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},unauthorizedMessage:{required:!1,tsType:{name:"string"},description:""},authButtonText:{required:!1,tsType:{name:"string"},description:""},confirmSize:{required:!1,tsType:{name:"union",raw:'"md" | "lg"',elements:[{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},zIndex:{required:!1,tsType:{name:"number"},description:""}}};const g="_contentWrapper_132av_1",N="_actionSection_132av_9",u={contentWrapper:g,actionSection:N},q={title:"Components/AuthProtected",component:c,tags:["autodocs"],argTypes:{isNeedAuthorized:{description:`Флаг, указывающий на необходимость авторизации.
При значении true отображается модальное окно с предложением авторизоваться
`,control:!1,table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClickAuthorization:{description:`Callback-функция, вызываемая при клике на кнопку авторизации.
Обычно содержит логику перенаправления на страницу авторизации или открытия модального окна.
`,control:!1,table:{type:{summary:"() => void",detail:`onClickAuthorization={() => {
  // логика обработки клика по кнопке Authorization;
}}`}}},unauthorizedMessage:{description:`Текст сообщения, отображаемый в модальном окне при необходимости авторизации.
`,control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:'"Необходимо авторизоваться"'}}},authButtonText:{description:`Текст на кнопке авторизации в модальном окне.
`,control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:'"Авторизоваться"'}}},confirmSize:{description:`Размер модального окна подтверждения авторизации.
`,control:{type:"select"},options:["md","lg"],table:{type:{summary:"TModalSize",detail:"'md' | 'lg'"},defaultValue:{summary:'"md"'}}},zIndex:{description:`z-index модального окна для управления слоями отображения.
`,control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:"999"}}},children:{description:`Контент, который будет защищен проверкой авторизации.
Отображается только когда авторизация не требуется.
`,control:!1,table:{type:{summary:"ReactNode"}}}},parameters:{docs:{description:{component:`
Компонент для защиты контента, требующего авторизации пользователя.

## Особенности:
- Автоматически отображает модальное окно при необходимости авторизации
- Использует компонент Confirm для единообразия интерфейса
- Поддерживает кастомизацию текстов и размеров модального окна
- Управление z-index для корректного отображения поверх других элементов
- Центрированное расположение контента и кнопок в модальном окне

## Поведение:
- При \`isNeedAuthorized={true}\` блокирует доступ к защищенному контенту
- Показывает модальное окно с предложением авторизоваться
- После авторизации (через \`onClickAuthorization\`) скрывает модальное окно
- Позволяет кастомизировать все текстовые элементы модального окна

## Рекомендации по использованию:
- Используйте для защиты страниц, разделов или отдельных компонентов, требующих авторизации.
- На данный момент компонент реализован без интеграции с API, то есть в поле \`isNeedAuthorized\` нужно передавать \`true\`, если какой либо из ваших методов API разрешился со статусом \`401 Unauthorized\`

### Базовое использование

\`\`\`jsx
<AuthProtected
  isNeedAuthorized={!isAuthenticated}
  onClickAuthorization={() => redirectToLogin()}
  unauthorizedMessage="Для доступа к этому разделу требуется авторизация"
  authButtonText="Войти в систему"
>
  <ProtectedContent />
</AuthProtected>
\`\`\`
        `}}}},o={name:"Default Auth Protected",args:{unauthorizedMessage:"Необходимо авторизоваться",authButtonText:"Авторизоваться",confirmSize:"md",zIndex:999},render:r=>{const[n,t]=i.useState(!1);return e.jsx(c,{...r,isNeedAuthorized:n,onClickAuthorization:()=>t(!1),children:e.jsxs("div",{className:u.contentWrapper,children:[e.jsx(a,{type:"h3",children:"Защищенный контент"}),e.jsx(a,{children:"Этот контент доступен только авторизованным пользователям"}),e.jsx("div",{className:u.actionSection,children:e.jsx(l,{onClick:()=>t(!0),children:"Сымитировать отсутствие авторизации"})})]})})}},s={name:"With Custom Message",args:{unauthorizedMessage:"Для доступа к этому функционалу требуется войти в систему",authButtonText:"Войти",confirmSize:"md"},render:r=>{const[n,t]=i.useState(!1);return e.jsx(c,{...r,isNeedAuthorized:n,onClickAuthorization:()=>t(!1),children:e.jsxs("div",{className:u.contentWrapper,children:[e.jsx(a,{type:"h3",children:"Премиум контент"}),e.jsx(a,{children:"Этот раздел доступен только зарегистрированным пользователям"}),e.jsx("div",{className:u.actionSection,children:e.jsx(l,{onClick:()=>t(!0),children:"Сымитировать отсутствие авторизации"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Default Auth Protected",
  args: {
    unauthorizedMessage: "Необходимо авторизоваться",
    authButtonText: "Авторизоваться",
    confirmSize: "md",
    zIndex: 999
  },
  render: args => {
    const [isNotAuth, setIsNotAuth] = useState(false);
    return <AuthProtected {...args} isNeedAuthorized={isNotAuth} onClickAuthorization={() => setIsNotAuth(false)}>\r
        <div className={styles.contentWrapper}>\r
          <Text type="h3">Защищенный контент</Text>\r
          <Text>Этот контент доступен только авторизованным пользователям</Text>\r
          <div className={styles.actionSection}>\r
            <Button onClick={() => setIsNotAuth(true)}>Сымитировать отсутствие авторизации</Button>\r
          </div>\r
        </div>\r
      </AuthProtected>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "With Custom Message",
  args: {
    unauthorizedMessage: "Для доступа к этому функционалу требуется войти в систему",
    authButtonText: "Войти",
    confirmSize: "md"
  },
  render: args => {
    const [isNotAuth, setIsNotAuth] = useState(false);
    return <AuthProtected {...args} isNeedAuthorized={isNotAuth} onClickAuthorization={() => setIsNotAuth(false)}>\r
        <div className={styles.contentWrapper}>\r
          <Text type="h3">Премиум контент</Text>\r
          <Text>Этот раздел доступен только зарегистрированным пользователям</Text>\r
          <div className={styles.actionSection}>\r
            <Button onClick={() => setIsNotAuth(true)}>Сымитировать отсутствие авторизации</Button>\r
          </div>\r
        </div>\r
      </AuthProtected>;
  }
}`,...s.parameters?.docs?.source}}};const R=["Default","CustomMessage"];export{s as CustomMessage,o as Default,R as __namedExportsOrder,q as default};
