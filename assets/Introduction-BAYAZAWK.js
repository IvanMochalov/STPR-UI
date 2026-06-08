import{j as n}from"./iframe-DsoVLqtF.js";import{u as i,M as t,T as o}from"./blocks-ClLtoJXP.js";import"./preload-helper-DCNYn41m.js";import"./index-Cz879DlY.js";import"./index-CMC9NNB4.js";function r(s){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Documentation/Introduction"}),`
`,n.jsx(o,{children:"Добро пожаловать в Test STPR UI ⚡️"}),`
`,n.jsx(e.p,{children:"Готовые к использованию React-компоненты с согласованным визуальным стилем."}),`
`,n.jsx(e.h2,{id:"-быстрый-старт",children:"🚀 Быстрый старт"}),`
`,n.jsx(e.h3,{id:"1-установка-пакета",children:"1. Установка пакета"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install test-stpr-ui-kit\r
# или\r
yarn add test-stpr-ui-kit
`})}),`
`,n.jsx(e.h3,{id:"2-токены-дизайн-системы-обязательно",children:"2. Токены дизайн-системы (обязательно)"}),`
`,n.jsxs(e.p,{children:["Стили компонентов опираются на CSS-переменные (",n.jsx(e.code,{children:"--spui-*"}),"). Подключите токены ",n.jsx(e.strong,{children:"один раз"})," в корне приложения (например ",n.jsx(e.code,{children:"main.tsx"})," или ",n.jsx(e.code,{children:"index.tsx"}),"):"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import "test-stpr-ui-kit/styles/tokens.css";
`})}),`
`,n.jsx(e.p,{children:"Без этого файла компоненты могут отображаться без ожидаемых цветов, отступов и размеров."}),`
`,n.jsx(e.h3,{id:"3-импорт-компонентов",children:"3. Импорт компонентов"}),`
`,n.jsx(e.p,{children:"Публичный API — именованные экспорты из корня пакета (как раньше):"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button, Form, Input } from "test-stpr-ui-kit";\r
\r
function App() {\r
  return (\r
    <Form>\r
      <Input placeholder="Введите имя" />\r
      <Button>Отправить</Button>\r
    </Form>\r
  );\r
}
`})}),`
`,n.jsx(e.p,{children:"Стили компонентов подключаются автоматически при импорте (побочные импорты в ESM-сборке). Отдельный CSS-файл на каждый компонент подключать не нужно."}),`
`,n.jsx(e.p,{children:"Типы:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import type { ButtonProps, TPaneItem } from "test-stpr-ui-kit";
`})}),`
`,n.jsxs(e.h3,{id:"4-vite-и-локальная-разработка-библиотеки-компонентов-npm-link",children:["4. Vite и локальная разработка библиотеки компонентов (",n.jsx(e.code,{children:"npm link"}),")"]}),`
`,n.jsx(e.p,{children:"При линковке пакета в соседний Vite-проект рекомендуется исключить UI-kit из предварительной сборки зависимостей (pre-bundling):"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// vite.config.ts приложения-потребителя\r
export default defineConfig({\r
  optimizeDeps: {\r
    exclude: ["test-stpr-ui-kit"],\r
  },\r
});
`})}),`
`,n.jsxs(e.p,{children:["После ",n.jsx(e.code,{children:"npm run build:lib"})," в репозитории библиотеки обновите линк в приложении и перезапустите dev-сервер."]}),`
`,n.jsx(e.h2,{id:"-подключение-шрифтов",children:"🔤 Подключение шрифтов"}),`
`,n.jsxs(e.p,{children:["Компоненты используют шрифты ",n.jsx(e.strong,{children:"ALS_Gorizont 2.1"})," и ",n.jsx(e.strong,{children:"ALS_Hauss"}),". Загрузка шрифтов не входит в стили компонентов — её нужно добавить в проект приложения."]}),`
`,n.jsxs(e.p,{children:["Файлы шрифтов поставляются в пакете: ",n.jsx(e.code,{children:"node_modules/test-stpr-ui-kit/dist/fonts/"})," (после сборки библиотеки — копия из ",n.jsx(e.code,{children:"public/"}),")."]}),`
`,n.jsxs(e.p,{children:["Скопируйте правила ",n.jsx(e.code,{children:"@font-face"})," ниже в глобальные стили (например ",n.jsx(e.code,{children:"index.css"})," или ",n.jsx(e.code,{children:"App.css"}),"). Пример путей — скопируйте ",n.jsx(e.code,{children:".woff2"})," в ",n.jsx(e.code,{children:"assets/fonts/"})," приложения или укажите URL на файлы из ",n.jsx(e.code,{children:"node_modules"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@font-face {\r
  font-family: "ALS_Gorizont 2.1";\r
  src: url("../assets/fonts/ALS_Gorizont_Regular_Expanded_2.1.woff2") format("woff2");\r
  font-weight: 400;\r
  font-display: swap;\r
  font-style: normal;\r
}\r
\r
@font-face {\r
  font-family: "ALS_Gorizont 2.1";\r
  src: url("../assets/fonts/ALS_Gorizont_Medium_Expanded_2.1.woff2") format("woff2");\r
  font-weight: 500;\r
  font-display: swap;\r
  font-style: normal;\r
}\r
\r
@font-face {\r
  font-family: "ALS_Gorizont 2.1";\r
  src: url("../assets/fonts/ALS_Gorizont_Bold_Expanded_2.1.woff2") format("woff2");\r
  font-weight: 700;\r
  font-display: swap;\r
  font-style: normal;\r
}\r
\r
@font-face {\r
  font-family: "ALS_Hauss";\r
  src: url("../assets/fonts/ALS_Hauss_Regular_1.002.woff2") format("woff2");\r
  font-weight: 400;\r
  font-display: swap;\r
  font-style: normal;\r
}\r
\r
@font-face {\r
  font-family: "ALS_Hauss";\r
  src: url("../assets/fonts/ALS_Hauss_Medium_1.2.woff2") format("woff2");\r
  font-weight: 500;\r
  font-display: swap;\r
  font-style: normal;\r
}\r
\r
@font-face {\r
  font-family: "ALS_Hauss";\r
  src: url("../assets/fonts/ALS_Hauss_Bold_1.002.woff2") format("woff2");\r
  font-weight: 700;\r
  font-display: swap;\r
  font-style: normal;\r
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Примечание:"})," подстройте пути в ",n.jsx(e.code,{children:'url("../assets/fonts/...")'})," под структуру вашего проекта. Имена семейств (",n.jsx(e.code,{children:"ALS_Gorizont 2.1"}),", ",n.jsx(e.code,{children:"ALS_Hauss"}),") должны совпадать точно — на них ссылаются компоненты:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`// Переменные шрифтов в test-stpr-ui-kit\r
--font-family-gorizont: "ALS_Gorizont 2.1", Verdana, Arial, Sans-serif;\r
--font-family-hauss: "ALS_Hauss", Verdana, Arial, Sans-serif;
`})}),`
`,n.jsx(e.h2,{id:"-статические-ресурсы-пакета",children:"📦 Статические ресурсы пакета"}),`
`,n.jsxs(e.p,{children:["Установка пакета — обычный ",n.jsx(e.code,{children:"npm install test-stpr-ui-kit"})," ",n.jsx(e.strong,{children:"без"})," ",n.jsx(e.code,{children:"--ignore-scripts"})," и без postinstall-хуков: в npm попадает только ",n.jsx(e.code,{children:"dist/"}),", lifecycle-скрипты не выполняются."]}),`
`,n.jsxs(e.p,{children:["В ",n.jsx(e.code,{children:"dist/"})," также лежат:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dist/fonts/"})," — шрифты ALS (см. выше);"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dist/components-assets/"})," — например ",n.jsx(e.code,{children:"web-ifc.wasm"})," для ",n.jsx(e.code,{children:"IfcPreview"})," / ",n.jsx(e.code,{children:"IfcViewer"}),", запасное изображение для ",n.jsx(e.code,{children:"ViewImageModal"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Для IFC-компонентов установите peer-зависимости ",n.jsx(e.code,{children:"three"})," и ",n.jsx(e.code,{children:"web-ifc"})," и отдавайте ",n.jsx(e.code,{children:"web-ifc.wasm"})," из статики приложения (по умолчанию каталог ",n.jsx(e.code,{children:"/components-assets/IfcPreview/web-ifc/"}),"). Файл можно скопировать из ",n.jsx(e.code,{children:"node_modules/test-stpr-ui-kit/dist/components-assets/IfcPreview/web-ifc/web-ifc.wasm"})," или из установленного peer ",n.jsx(e.code,{children:"web-ifc"}),"."]}),`
`,n.jsxs(e.p,{children:["При нестандартном ",n.jsx(e.code,{children:"base"})," у Vite передайте ",n.jsx(e.code,{children:"wasmPublicPath"})," с ",n.jsx(e.code,{children:"${import.meta.env.BASE_URL}"})," (см. стори ",n.jsx(e.code,{children:"IfcPreview"})," / ",n.jsx(e.code,{children:"IfcViewer"}),"). Для ",n.jsx(e.code,{children:"ViewImageModal"})," при необходимости задайте ",n.jsx(e.code,{children:"fallbackSrc"}),"."]}),`
`,n.jsx(e.h2,{id:"для-разработчиков-библиотеки",children:"Для разработчиков библиотеки"}),`
`,n.jsxs(e.p,{children:["Добавление компонентов, стори и релиз — в ",n.jsx(e.strong,{children:"CONTRIBUTING.md"})," и ",n.jsx(e.strong,{children:"Documentation → Development → Release workflow"}),"."]})]})}function h(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{h as default};
