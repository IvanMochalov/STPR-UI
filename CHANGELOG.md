# Changelog

Все значимые изменения в проекте описываются в этом файле.

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.1.0/).

## [0.6.1] — 2026-03-10

### Changed
- Changelog.mdx добавлен в .gitignore (файл генерируется при сборке Storybook)
- Уточнён текст в CHANGELOG.md

## [0.6.0] — 2026-03-10

### Added
- Страница «История версий» в Storybook: отображение CHANGELOG.md и текущей версии из package.json
- Скрипт `scripts/inline-changelog.js`: генерация Changelog.mdx из CHANGELOG.md перед сборкой Storybook
- Документация для разработчиков: раздел **Documentation/Development/Release workflow** — инструкция по внесению изменений, обновлению CHANGELOG, версионированию и публикации пакета и Storybook

## [0.5.116] — 2026-03-10

### Fixed
- Фикс компонента Select: рендер списка через Portal;
- Обновлена документация компонента Select;