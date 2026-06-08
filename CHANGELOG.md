# Changelog

Все значимые изменения в проекте описываются в этом файле.

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.1.0/).

## [1.0.1] — 2026-06-08

### Fixed

- Пакет: удалён `postinstall`, из-за которого `npm install test-stpr-ui-kit` падал у потребителей (скрипт
  `copy-web-ifc-wasm.mjs` не входил в опубликованный tarball). Копирование `web-ifc.wasm` выполняется только при
  `npm run build:lib` / сборке Storybook в репозитории библиотеки; wasm по-прежнему поставляется в `dist/`.

## [1.0.0] — 2026-05-28

### Added

- `Button`: добавлен новый вариант `variant="text"`;
- `Button`: добавлена настройка размера через `size: "md" | "xl"`;
- `Button`: добавлена раздельная настройка иконок через `startIconName` и `endIconName`;
- `Tabs`: в `TPaneItem` добавлены опциональные поля для управления иконками на уровне элементов `panes` —
  `startIconName`, `endIconName`, `startIconRotate`, `endIconRotate`, `isOnlyIcon`;
- `Tabs`: добавлена поддержка размера `size="xl"`;
- `Input`: добавлена настройка размера через `size: "md" | "xl"`;
- `InfoTooltip`: добавлен параметр classNameTriggerIcon для кастомной стилизации иконки;
- `Select`: добавлена настройка размера через `size: "md" | "xl"`;
- `Accordion`: добавлена настройка размера через `size: "md" | "xl"`;
- `IfcPreview`: карточка предпросмотра IFC с оверлеем (просмотр, Upload, Trash); 3D в `Layer` через `IfcViewer`;
- `IfcViewer`: автономный 3D-просмотр IFC по `url`; внутри — загрузка файла, web-ifc, Three.js;
- Пакет: subpath `test-stpr-ui-kit/styles/tokens.css` — токены дизайн-системы подключаются явно в приложении.

### Changed

- Внедрены CSS Custom Properties с переходом от SCSS-переменных к token-ам во все компоненты;
- `ViewImageModal`: при ошибке загрузки основного `src` по умолчанию подставляется запасное изображение из
  `public/components-assets/` (в артефакте сборки — `dist/components-assets/ViewImageModal/fallBackSrc.jpeg`); при
  нестандартном `base` приложения задайте `fallbackSrc` вручную; отключение подмены — `fallbackSrc=""`;
- `Button`: обновлена логика рендера контента — при `loading` спиннер заменяет только стартовую иконку (если она есть),
  end-иконка продолжает отображаться;
- `Tabs`: обновлены размеры и поведение вариантов по токенам — высота tab-элементов теперь фиксируется
  через size-токены (`md`/`xl`) без расхождения между контейнером и элементами;
- Пакет: ESM-сборка с `preserveModules` — в `dist/` отдельные модули по компонентам; у потребителя работает
  tree-shaking: импорт `{ Button }` из корня пакета подтягивает только нужный код и CSS компонента, а не всю библиотеку;
  корневой `test-stpr-ui-kit.js` — barrel из re-export'ов;

### Removed

- Пакет: артефакт UMD/CommonJS (`test-stpr-ui-kit.umd.cjs`) и поле `exports.require`; поддерживается только ESM.
- `Button`: удален prop `color` и тип `TButtonColor`;
- `Button`: удален prop `classNameIconContainerRoot`;
- `Button`: удалены `iconName`, `icon`, `iconPosition` и тип `TButtonIconPosition` (вместо них используйте
  `startIconName`/`endIconName`);
- `Button`: удален `iconRotate` (вместо него используйте `startIconRotate`/`endIconRotate`);
- `Tabs`: удален `size="lg"` размер;
- `Accordion`: удален prop `level` (вместо него используйте `size`);

## [0.7.0] — 2026-04-28

### Added

- Начало внедрения CSS Custom Property взамен SCSS-переменным;
- Внедрены CSS Custom Property в компонент Button;

## [0.6.15] — 2026-04-28

### Added

- Добавлена иконка eye.svg;

### Fixed

- Поправлена анимация разворачивания компонента Accordion;

## [0.6.14] — 2026-04-03

### Added

- Добавлены иконки pause-circle.svg, play-circle.svg и upload-top.svg;

## [0.6.13] — 2026-04-02

### Fixed

- Исправлена ошибка сборки и формирования поставляемых типов;

## [0.6.12] — 2026-04-02

### Fixed

- Исправлена ошибка в использования компонента InputMask в компонентах Input и DatePickerInput;

## [0.6.11] — 2026-04-02

### Added

- Добавлена иконка refresh-dbl.svg;

### Fixed

- Исправлена совместимость компонентов Input и DatePickerInput с React 19;

## [0.6.10] — 2026-04-01

### Added

- Добавлены иконки update.svg, filter.svg, folder.svg, layers-three.svg и link-angled.svg;
- Добавлен параметр triggerTooltipGap компоненту Tooltip для управления отступом между триггером и тултипом;

### Fixed

- Исправлена доступность скрытого BaseTooltip для hover и click в компоненте Tooltip;

## [0.6.9] — 2026-03-26

### Fixed

- Исправлен текст ошибки при загрузке файла в компоненте UploadFiles;

## [0.6.8] — 2026-03-26

### Updated

- Обновлен vite до 7.2.2 версии;

## [0.6.7] — 2026-03-26

### Updated

- Обновлен react-datepicker до 9.1.0 версии;

## [0.6.6] — 2026-03-26

### Fixed

- Исправлена типизация компонента Table;
- Исправлен текст ошибки при загрузке файла без указания параметра maxSizeMb;

### Added

- Добавлена проверка размера изображения в компоненте UploadFiles;

## [0.6.2 - 0.6.5] — 2026-03-10

### Updated

- Обновлена документация по версионированию для разработчиков;

## [0.6.1] — 2026-03-10

### Changed

- Changelog.mdx добавлен в .gitignore (файл генерируется при сборке Storybook)
- Уточнён текст в CHANGELOG.md

## [0.6.0] — 2026-03-10

### Added

- Страница «История версий» в Storybook: отображение CHANGELOG.md и текущей версии из package.json
- Скрипт `scripts/inline-changelog.js`: генерация Changelog.mdx из CHANGELOG.md перед сборкой Storybook
- Документация для разработчиков: раздел **Documentation/Development/Release workflow** — инструкция по внесению
  изменений, обновлению CHANGELOG, версионированию и публикации пакета и Storybook

## [0.5.116] — 2026-03-10

### Fixed

- Исправлен компонент Select: рендер списка через Portal;
- Обновлена документация компонента Select;