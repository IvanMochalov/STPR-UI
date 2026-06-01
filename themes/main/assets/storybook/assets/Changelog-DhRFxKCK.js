import{j as e}from"./iframe-CA4deTFl.js";import{u as s,M as l,T as c,S as r}from"./blocks-DvxwzneC.js";import"./preload-helper-JD0jGv3q.js";import"./index-SbPXkCt7.js";import"./index-DESwEi8l.js";function i(d){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Documentation/Changelog"}),`
`,e.jsx(c,{children:"История версий"}),`
`,e.jsxs(r,{children:["Текущая версия пакета в репозитории: ",e.jsx(n.strong,{children:"1.0.0"}),"."]}),`
`,e.jsxs(n.p,{children:["Ниже — полная история изменений из ",e.jsx(n.code,{children:"CHANGELOG.md"}),". По ней можно выбрать нужную версию для установки."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"changelog",children:"Changelog"}),`
`,e.jsx(n.p,{children:"Все значимые изменения в проекте описываются в этом файле."}),`
`,e.jsxs(n.p,{children:["Формат основан на ",e.jsx(n.a,{href:"https://keepachangelog.com/ru/1.1.0/",rel:"nofollow",children:"Keep a Changelog"}),"."]}),`
`,e.jsx(n.h2,{id:"100--2026-05-28",children:"[1.0.0] — 2026-05-28"}),`
`,e.jsx(n.h3,{id:"added",children:"Added"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Button"}),": добавлен новый вариант ",e.jsx(n.code,{children:'variant="text"'}),";"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Button"}),": добавлена настройка размера через ",e.jsx(n.code,{children:'size: "md" | "xl"'}),";"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Button"}),": добавлена раздельная настройка иконок через ",e.jsx(n.code,{children:"startIconName"})," и ",e.jsx(n.code,{children:"endIconName"}),";"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabs"}),": в ",e.jsx(n.code,{children:"TPaneItem"})," добавлены опциональные поля для управления иконками на уровне элементов ",e.jsx(n.code,{children:"panes"}),` —\r
`,e.jsx(n.code,{children:"startIconName"}),", ",e.jsx(n.code,{children:"endIconName"}),", ",e.jsx(n.code,{children:"startIconRotate"}),", ",e.jsx(n.code,{children:"endIconRotate"}),", ",e.jsx(n.code,{children:"isOnlyIcon"}),";"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabs"}),": добавлена поддержка размера ",e.jsx(n.code,{children:'size="xl"'}),";"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Input"}),": добавлена настройка размера через ",e.jsx(n.code,{children:'size: "md" | "xl"'}),";"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"InfoTooltip"}),": добавлен параметр classNameTriggerIcon для кастомной стилизации иконки;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Select"}),": добавлена настройка размера через ",e.jsx(n.code,{children:'size: "md" | "xl"'}),";"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Accordion"}),": добавлена настройка размера через ",e.jsx(n.code,{children:'size: "md" | "xl"'}),";"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"IfcPreview"}),": карточка предпросмотра IFC с оверлеем (просмотр, Upload, Trash); 3D в ",e.jsx(n.code,{children:"Layer"})," через ",e.jsx(n.code,{children:"IfcViewer"}),";"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"IfcViewer"}),": автономный 3D-просмотр IFC по ",e.jsx(n.code,{children:"url"}),"; внутри — загрузка файла, web-ifc, Three.js;"]}),`
`,e.jsxs(n.li,{children:["Пакет: subpath ",e.jsx(n.code,{children:"test-stpr-ui-kit/styles/tokens.css"})," — токены дизайн-системы подключаются явно в приложении."]}),`
`]}),`
`,e.jsx(n.h3,{id:"changed",children:"Changed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Внедрены CSS Custom Properties с переходом от SCSS-переменных к token-ам во все компоненты;"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ViewImageModal"}),": при ошибке загрузки основного ",e.jsx(n.code,{children:"src"}),` по умолчанию подставляется запасное изображение из\r
`,e.jsx(n.code,{children:"public/components-assets/"})," (в артефакте сборки — ",e.jsx(n.code,{children:"dist/components-assets/ViewImageModal/fallBackSrc.jpeg"}),`); при\r
нестандартном `,e.jsx(n.code,{children:"base"})," приложения задайте ",e.jsx(n.code,{children:"fallbackSrc"})," вручную; отключение подмены — ",e.jsx(n.code,{children:'fallbackSrc=""'}),";"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Button"}),": обновлена логика рендера контента — при ",e.jsx(n.code,{children:"loading"}),` спиннер заменяет только стартовую иконку (если она есть),\r
end-иконка продолжает отображаться;`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabs"}),`: обновлены размеры и поведение вариантов по токенам — высота tab-элементов теперь фиксируется\r
через size-токены (`,e.jsx(n.code,{children:"md"}),"/",e.jsx(n.code,{children:"xl"}),") без расхождения между контейнером и элементами;"]}),`
`,e.jsxs(n.li,{children:["Пакет: ESM-сборка с ",e.jsx(n.code,{children:"preserveModules"})," — в ",e.jsx(n.code,{children:"dist/"}),` отдельные модули по компонентам; у потребителя работает\r
tree-shaking: импорт `,e.jsx(n.code,{children:"{ Button }"}),` из корня пакета подтягивает только нужный код и CSS компонента, а не всю библиотеку;\r
корневой `,e.jsx(n.code,{children:"test-stpr-ui-kit.js"})," — barrel из re-export'ов;"]}),`
`]}),`
`,e.jsx(n.h3,{id:"removed",children:"Removed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Пакет: артефакт UMD/CommonJS (",e.jsx(n.code,{children:"test-stpr-ui-kit.umd.cjs"}),") и поле ",e.jsx(n.code,{children:"exports.require"}),"; поддерживается только ESM."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Button"}),": удален prop ",e.jsx(n.code,{children:"color"})," и тип ",e.jsx(n.code,{children:"TButtonColor"}),";"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Button"}),": удален prop ",e.jsx(n.code,{children:"classNameIconContainerRoot"}),";"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Button"}),": удалены ",e.jsx(n.code,{children:"iconName"}),", ",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"iconPosition"})," и тип ",e.jsx(n.code,{children:"TButtonIconPosition"}),` (вместо них используйте\r
`,e.jsx(n.code,{children:"startIconName"}),"/",e.jsx(n.code,{children:"endIconName"}),");"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Button"}),": удален ",e.jsx(n.code,{children:"iconRotate"})," (вместо него используйте ",e.jsx(n.code,{children:"startIconRotate"}),"/",e.jsx(n.code,{children:"endIconRotate"}),");"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabs"}),": удален ",e.jsx(n.code,{children:'size="lg"'})," размер;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Accordion"}),": удален prop ",e.jsx(n.code,{children:"level"})," (вместо него используйте ",e.jsx(n.code,{children:"size"}),");"]}),`
`]}),`
`,e.jsx(n.h2,{id:"070--2026-04-28",children:"[0.7.0] — 2026-04-28"}),`
`,e.jsx(n.h3,{id:"added-1",children:"Added"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Начало внедрения CSS Custom Property взамен SCSS-переменным;"}),`
`,e.jsx(n.li,{children:"Внедрены CSS Custom Property в компонент Button;"}),`
`]}),`
`,e.jsx(n.h2,{id:"0615--2026-04-28",children:"[0.6.15] — 2026-04-28"}),`
`,e.jsx(n.h3,{id:"added-2",children:"Added"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Добавлена иконка eye.svg;"}),`
`]}),`
`,e.jsx(n.h3,{id:"fixed",children:"Fixed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Поправлена анимация разворачивания компонента Accordion;"}),`
`]}),`
`,e.jsx(n.h2,{id:"0614--2026-04-03",children:"[0.6.14] — 2026-04-03"}),`
`,e.jsx(n.h3,{id:"added-3",children:"Added"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Добавлены иконки pause-circle.svg, play-circle.svg и upload-top.svg;"}),`
`]}),`
`,e.jsx(n.h2,{id:"0613--2026-04-02",children:"[0.6.13] — 2026-04-02"}),`
`,e.jsx(n.h3,{id:"fixed-1",children:"Fixed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Исправлена ошибка сборки и формирования поставляемых типов;"}),`
`]}),`
`,e.jsx(n.h2,{id:"0612--2026-04-02",children:"[0.6.12] — 2026-04-02"}),`
`,e.jsx(n.h3,{id:"fixed-2",children:"Fixed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Исправлена ошибка в использования компонента InputMask в компонентах Input и DatePickerInput;"}),`
`]}),`
`,e.jsx(n.h2,{id:"0611--2026-04-02",children:"[0.6.11] — 2026-04-02"}),`
`,e.jsx(n.h3,{id:"added-4",children:"Added"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Добавлена иконка refresh-dbl.svg;"}),`
`]}),`
`,e.jsx(n.h3,{id:"fixed-3",children:"Fixed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Исправлена совместимость компонентов Input и DatePickerInput с React 19;"}),`
`]}),`
`,e.jsx(n.h2,{id:"0610--2026-04-01",children:"[0.6.10] — 2026-04-01"}),`
`,e.jsx(n.h3,{id:"added-5",children:"Added"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Добавлены иконки update.svg, filter.svg, folder.svg, layers-three.svg и link-angled.svg;"}),`
`,e.jsx(n.li,{children:"Добавлен параметр triggerTooltipGap компоненту Tooltip для управления отступом между триггером и тултипом;"}),`
`]}),`
`,e.jsx(n.h3,{id:"fixed-4",children:"Fixed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Исправлена доступность скрытого BaseTooltip для hover и click в компоненте Tooltip;"}),`
`]}),`
`,e.jsx(n.h2,{id:"069--2026-03-26",children:"[0.6.9] — 2026-03-26"}),`
`,e.jsx(n.h3,{id:"fixed-5",children:"Fixed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Исправлен текст ошибки при загрузке файла в компоненте UploadFiles;"}),`
`]}),`
`,e.jsx(n.h2,{id:"068--2026-03-26",children:"[0.6.8] — 2026-03-26"}),`
`,e.jsx(n.h3,{id:"updated",children:"Updated"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Обновлен vite до 7.2.2 версии;"}),`
`]}),`
`,e.jsx(n.h2,{id:"067--2026-03-26",children:"[0.6.7] — 2026-03-26"}),`
`,e.jsx(n.h3,{id:"updated-1",children:"Updated"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Обновлен react-datepicker до 9.1.0 версии;"}),`
`]}),`
`,e.jsx(n.h2,{id:"066--2026-03-26",children:"[0.6.6] — 2026-03-26"}),`
`,e.jsx(n.h3,{id:"fixed-6",children:"Fixed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Исправлена типизация компонента Table;"}),`
`,e.jsx(n.li,{children:"Исправлен текст ошибки при загрузке файла без указания параметра maxSizeMb;"}),`
`]}),`
`,e.jsx(n.h3,{id:"added-6",children:"Added"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Добавлена проверка размера изображения в компоненте UploadFiles;"}),`
`]}),`
`,e.jsx(n.h2,{id:"062---065--2026-03-10",children:"[0.6.2 - 0.6.5] — 2026-03-10"}),`
`,e.jsx(n.h3,{id:"updated-2",children:"Updated"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Обновлена документация по версионированию для разработчиков;"}),`
`]}),`
`,e.jsx(n.h2,{id:"061--2026-03-10",children:"[0.6.1] — 2026-03-10"}),`
`,e.jsx(n.h3,{id:"changed-1",children:"Changed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Changelog.mdx добавлен в .gitignore (файл генерируется при сборке Storybook)"}),`
`,e.jsx(n.li,{children:"Уточнён текст в CHANGELOG.md"}),`
`]}),`
`,e.jsx(n.h2,{id:"060--2026-03-10",children:"[0.6.0] — 2026-03-10"}),`
`,e.jsx(n.h3,{id:"added-7",children:"Added"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Страница «История версий» в Storybook: отображение CHANGELOG.md и текущей версии из package.json"}),`
`,e.jsxs(n.li,{children:["Скрипт ",e.jsx(n.code,{children:"scripts/inline-changelog.js"}),": генерация Changelog.mdx из CHANGELOG.md перед сборкой Storybook"]}),`
`,e.jsxs(n.li,{children:["Документация для разработчиков: раздел ",e.jsx(n.strong,{children:"Documentation/Development/Release workflow"}),` — инструкция по внесению\r
изменений, обновлению CHANGELOG, версионированию и публикации пакета и Storybook`]}),`
`]}),`
`,e.jsx(n.h2,{id:"05116--2026-03-10",children:"[0.5.116] — 2026-03-10"}),`
`,e.jsx(n.h3,{id:"fixed-7",children:"Fixed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Исправлен компонент Select: рендер списка через Portal;"}),`
`,e.jsx(n.li,{children:"Обновлена документация компонента Select;"}),`
`]})]})}function a(d={}){const{wrapper:n}={...s(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(i,{...d})}):i(d)}export{a as default};
