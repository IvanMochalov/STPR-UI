import{j as n}from"./iframe-CA4deTFl.js";import{u as l,M as i,T as d}from"./blocks-DvxwzneC.js";import"./preload-helper-JD0jGv3q.js";import"./index-SbPXkCt7.js";import"./index-DESwEi8l.js";function r(s){const e={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Documentation/Development/Release workflow"}),`
`,n.jsx(d,{children:"Инструкция: изменения, версионирование и публикация"}),`
`,n.jsx(e.p,{children:"Эта инструкция для разработчиков: как вносить изменения в библиотеку, фиксировать их в CHANGELOG, поднимать версию и публиковать пакет и Storybook."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"1-внесение-изменений",children:"1. Внесение изменений"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Вносите правки в код по обычному процессу (ветки, коммиты)."}),`
`,n.jsxs(e.li,{children:["Для создания новых компонентов и стори см. ",n.jsx(e.strong,{children:"CONTRIBUTING.md"})," в корне репозитория (",n.jsx(e.a,{href:"https://gitflic.ru/project/arnold2023/test-storybook/blob?file=CONTRIBUTING.md&branch=mochalov&mode=markdown",rel:"nofollow",children:"доступен только в Git"}),")."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"2-обновление-changelog-перед-релизом",children:"2. Обновление CHANGELOG перед релизом"}),`
`,n.jsxs(e.p,{children:["Перед каждым релизом обновите ",n.jsx(e.strong,{children:"CHANGELOG.md"})," в корне проекта."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Составьте новый лог релиза, указав будущую версию (из пункта 3) и дату релиза."}),`
`,n.jsxs(e.li,{children:["Заголовок версии оформляйте в формате: ",n.jsx(e.code,{children:"## [x.y.z] — YYYY-MM-DD"})," (для планируемого релиза допустимо ",n.jsx(e.code,{children:"IN FUTURE"}),")."]}),`
`,n.jsxs(e.li,{children:["Используйте только секции: ",n.jsx(e.strong,{children:"Added"}),", ",n.jsx(e.strong,{children:"Changed"}),", ",n.jsx(e.strong,{children:"Fixed"}),", ",n.jsx(e.strong,{children:"Removed"}),", ",n.jsx(e.strong,{children:"Security"})," (не используйте ",n.jsx(e.code,{children:"Updated"})," для новых записей)."]}),`
`,n.jsx(e.li,{children:"Для компонентных изменений фиксируйте только изменения публичного API, логики поведения и визуала компонента."}),`
`,n.jsx(e.li,{children:"Не добавляйте в компонентные release notes Storybook-only изменения (stories/docs/examples/decorators), если они не меняют поведение поставляемого пакета."}),`
`,n.jsx(e.li,{children:"Для breaking-изменений добавляйте явные migration-подсказки: что удалено/переименовано и что использовать вместо этого."}),`
`,n.jsx(e.li,{children:"Пример:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`## [0.6.0] — 2026-03-10\r
\r
### Added\r
- Страница «История версий» в Storybook: отображение CHANGELOG.md и текущей версии из package.json\r
- Скрипт \`scripts/inline-changelog.js\`: генерация Changelog.mdx из CHANGELOG.md перед сборкой Storybook\r
- Документация для разработчиков: раздел \`Documentation/Development/Release workflow\` — инструкция по внесению изменений, обновлению CHANGELOG, версионированию и публикации пакета и Storybook\r

`})}),`
`,n.jsx(e.h2,{id:"3-поднятие-версии-пакета",children:"3. Поднятие версии пакета"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Убедитесь, что ",n.jsx(e.strong,{children:"CHANGELOG.md"})," уже обновлён под эту версию (см. п. 2)."]}),`
`,n.jsx(e.li,{children:"Перед выбором команды оцените тип изменений:"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"patch"}),": исправления без расширения публичного API;"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"minor"}),": новая функциональность без breaking-изменений;"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"major"}),": breaking-изменения публичного API/поведения."]}),`
`]}),`
`,n.jsx(e.p,{children:"В корне проекта выполните (одну команду на выбор):"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm version patch -m "release: %s"   # 0.5.116 → 0.5.117 (исправления)\r
npm version minor -m "release: %s"   # 0.5.116 → 0.6.0   (новая функциональность без ломающих изменений)\r
npm version major -m "release: %s"   # 0.5.116 → 1.0.0   (ломающие изменения)
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Команда обновит ",n.jsx(e.strong,{children:"version"})," в ",n.jsx(e.strong,{children:"package.json"})," и создаст ",n.jsx(e.strong,{children:"git-тег"})," (например, ",n.jsx(e.code,{children:"v0.6.0"}),")."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"4-сборка-и-публикация-пакета-в-npm",children:"4. Сборка и публикация пакета в npm"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run build:lib\r
npm publish
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Сначала собирается библиотека (",n.jsx(e.code,{children:"dist/"}),"), затем пакет публикуется в npm."]}),`
`,n.jsxs(e.li,{children:["Для публикации нужны права в npm и выполненный ",n.jsx(e.code,{children:"npm login"})," при необходимости."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"6-краткая-последовательность-при-релизе",children:"6. Краткая последовательность при релизе"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Обновить ",n.jsx(e.strong,{children:"CHANGELOG.md"}),": оформить запись под новой версией."]}),`
`,n.jsxs(e.li,{children:["Поднять версию: ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"npm version patch"})})," / ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"minor"})})," / ",n.jsx(e.strong,{children:n.jsx(e.code,{children:'major -m "release: %s"'})}),"."]}),`
`,n.jsxs(e.li,{children:["Собрать и опубликовать пакет: ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"npm run build:lib"})})," → ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"npm publish"})}),"."]}),`
`,n.jsx(e.li,{children:"...Деплой"}),`
`]})]})}function t(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{t as default};
