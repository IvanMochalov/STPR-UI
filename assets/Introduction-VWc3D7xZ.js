import{j as n}from"./iframe-DFzgFXfL.js";import{u as t,M as o,T as i}from"./blocks-hzX5Ujzh.js";import"./preload-helper-DCNYn41m.js";import"./index-DP6wETD2.js";import"./index-sQF5gpHW.js";function r(e){const s={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Documentation/Introduction"}),`
`,n.jsx(i,{children:"Добро пожаловать в Test STPR UI ⚡️"}),`
`,n.jsx(s.p,{children:"Готовые к использованию React-компоненты с согласованным визуальным стилем."}),`
`,n.jsx(s.h2,{id:"-быстрый-старт",children:"🚀 Быстрый старт"}),`
`,n.jsx(s.h3,{id:"1-установка-пакета",children:"1. Установка пакета"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`npm install test-stpr-ui-kit\r
# или\r
yarn add test-stpr-ui-kit
`})}),`
`,n.jsx(s.h3,{id:"2-токены-дизайн-системы-обязательно",children:"2. Токены дизайн-системы (обязательно)"}),`
`,n.jsxs(s.p,{children:["Стили компонентов опираются на CSS-переменные (",n.jsx(s.code,{children:"--spui-*"}),"). Подключите токены ",n.jsx(s.strong,{children:"один раз"})," в корне приложения (например ",n.jsx(s.code,{children:"main.tsx"})," или ",n.jsx(s.code,{children:"index.tsx"}),"):"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import "test-stpr-ui-kit/styles/tokens.css";
`})}),`
`,n.jsx(s.p,{children:"Без этого файла компоненты могут отображаться без ожидаемых цветов, отступов и размеров."}),`
`,n.jsx(s.h3,{id:"3-импорт-компонентов",children:"3. Импорт компонентов"}),`
`,n.jsx(s.p,{children:"Публичный API — именованные экспорты из корня пакета (как раньше):"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import { Button, Form, Input } from "test-stpr-ui-kit";\r
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
`,n.jsx(s.p,{children:"Стили компонентов подключаются автоматически при импорте (побочные импорты в ESM-сборке). Отдельный CSS-файл на каждый компонент подключать не нужно."}),`
`,n.jsx(s.p,{children:"Типы:"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-ts",children:`import type { ButtonProps, TPaneItem } from "test-stpr-ui-kit";
`})}),`
`,n.jsxs(s.h3,{id:"4-vite-и-локальная-разработка-библиотеки-компонентов-npm-link",children:["4. Vite и локальная разработка библиотеки компонентов (",n.jsx(s.code,{children:"npm link"}),")"]}),`
`,n.jsx(s.p,{children:"При линковке пакета в соседний Vite-проект рекомендуется исключить UI-kit из предварительной сборки зависимостей (pre-bundling):"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-ts",children:`// vite.config.ts приложения-потребителя\r
export default defineConfig({\r
  optimizeDeps: {\r
    exclude: ["test-stpr-ui-kit"],\r
  },\r
});
`})}),`
`,n.jsxs(s.p,{children:["После ",n.jsx(s.code,{children:"npm run build:lib"})," в репозитории библиотеки обновите линк в приложении и перезапустите dev-сервер."]}),`
`,n.jsx(s.h2,{id:"-подключение-шрифтов",children:"🔤 Подключение шрифтов"}),`
`,n.jsxs(s.p,{children:["Компоненты используют шрифты ",n.jsx(s.strong,{children:"ALS_Gorizont 2.1"})," и ",n.jsx(s.strong,{children:"ALS_Hauss"}),". Загрузка шрифтов не входит в стили компонентов — её нужно добавить в проект приложения."]}),`
`,n.jsxs(s.p,{children:["Файлы шрифтов поставляются в пакете: ",n.jsx(s.code,{children:"node_modules/test-stpr-ui-kit/dist/fonts/"})," (после сборки библиотеки — копия из ",n.jsx(s.code,{children:"public/"}),")."]}),`
`,n.jsxs(s.p,{children:["Скопируйте правила ",n.jsx(s.code,{children:"@font-face"})," ниже в глобальные стили (например ",n.jsx(s.code,{children:"index.css"})," или ",n.jsx(s.code,{children:"App.css"}),"). Пример путей — скопируйте ",n.jsx(s.code,{children:".woff2"})," в ",n.jsx(s.code,{children:"assets/fonts/"})," приложения или укажите URL на файлы из ",n.jsx(s.code,{children:"node_modules"}),":"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-css",children:`@font-face {\r
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
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Примечание:"})," подстройте пути в ",n.jsx(s.code,{children:'url("../assets/fonts/...")'})," под структуру вашего проекта. Имена семейств (",n.jsx(s.code,{children:"ALS_Gorizont 2.1"}),", ",n.jsx(s.code,{children:"ALS_Hauss"}),") должны совпадать точно — на них ссылаются компоненты:"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`// Переменные шрифтов в test-stpr-ui-kit\r
--font-family-gorizont: "ALS_Gorizont 2.1", Verdana, Arial, Sans-serif;\r
--font-family-hauss: "ALS_Hauss", Verdana, Arial, Sans-serif;
`})}),`
`,n.jsx(s.h2,{id:"-статические-ресурсы-пакета",children:"📦 Статические ресурсы пакета"}),`
`,n.jsxs(s.p,{children:["В ",n.jsx(s.code,{children:"dist/"})," также попадают:"]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"dist/fonts/"})," — шрифты ALS (см. выше);"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"dist/components-assets/"})," — например ",n.jsx(s.code,{children:"web-ifc.wasm"})," для ",n.jsx(s.code,{children:"IfcPreview"}),", запасное изображение для ",n.jsx(s.code,{children:"ViewImageModal"}),"."]}),`
`]}),`
`,n.jsxs(s.p,{children:["Пути к WASM и ассетам резолвятся относительно опубликованного пакета; при нестандартном ",n.jsx(s.code,{children:"base"})," у приложения см. пропсы компонентов (например ",n.jsx(s.code,{children:"fallbackSrc"})," у ",n.jsx(s.code,{children:"ViewImageModal"}),")."]}),`
`,n.jsx(s.h2,{id:"для-разработчиков-библиотеки",children:"Для разработчиков библиотеки"}),`
`,n.jsxs(s.p,{children:["Добавление компонентов, стори и релиз — в ",n.jsx(s.strong,{children:"CONTRIBUTING.md"})," и ",n.jsx(s.strong,{children:"Documentation → Development → Release workflow"}),"."]})]})}function h(e={}){const{wrapper:s}={...t(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{h as default};
