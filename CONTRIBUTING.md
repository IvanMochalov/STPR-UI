# Руководство для разработчиков: новые компоненты и стори

Документ описывает, как добавлять новые компоненты в библиотеку и как писать к ним истории в Storybook. Предназначен для
разработчиков, работающих с репозиторием.

---

## 1. Структура компонента в `lib/components`

Каждый компонент живёт в своей папке `lib/components/<ComponentName>/`. Типовая структура:

```
lib/components/<ComponentName>/
├── <ComponentName>.tsx          # React-компонент
├── <ComponentName>.module.scss  # Стили (CSS Modules)
├── index.ts                     # Реэкспорт компонента и типов
└── types/
    └── index.ts                 # Props и типы компонента
```

### Продвинутый пример

**Компонент с хуками, утилитами или константами** (при необходимости):

```
SomeComponent/
├── SomeComponent.tsx
├── SomeComponent.module.scss
├── index.ts
├── hooks/
│   └── index.ts
├── utils/
│   └── index.ts
├── constants/
│   └── index.ts
└── types/
    └── index.ts
```

---

## 2. Содержимое файлов компонента

### `types/index.ts`

- Определяются интерфейс пропсов (например `ButtonProps`, `DropdownProps`) и вспомогательные типы (например
  `TButtonVariant`, `TDropdownListItem`).
- При зависимости от других компонентов библиотеки импорты идут из `../../ComponentName` (например
  `import { ETooltipPosition } from "../../Tooltip"`).

### `<ComponentName>.tsx`

- Импорт стилей: `import styles from "./ComponentName.module.scss"`.
- Импорт типов из `./types`.
- Импорт других компонентов библиотеки из `../ComponentName` (относительно текущей папки компонента).
- Импорт глобальных стилей/переменных при необходимости из `@use "/src/styles/global"` или аналога (как в существующих
  компонентах).

### `index.ts`

- Реэкспорт компонента и типов, которые должны быть доступны снаружи.

Пример (простой компонент):

```ts
export { Spinner } from "./Spinner";
export type { SpinnerProps, SpinnerSize } from "./types";
```

Пример (компонент с хуком и типами для пропсов):

```ts
export { useModal } from "./hooks";
export { Modal } from "./Modal";
export type { ModalProps } from "./types";
```

Экспортировать из `index.ts` нужно только то, что будет использоваться снаружи (из пакета или из других компонентов).

---

## 3. Подключение компонента к сборке библиотеки

Все публичные API библиотеки задаются в **`lib/test-stpr-ui-kit.ts`**.

1. **Добавить импорты** в начало файла:
    - компоненты: `import { ComponentName } from "./components/ComponentName";`
    - типы: `import type { TSomeType, ISomeProps } from "./components/ComponentName";`
    - хуки: `import { useSomeHook } from "./components/ComponentName";`
    - enum/константы: `import { ESomeEnum } from "./components/ComponentName";`

2. **Добавить экспорты** в блок `export { ... }`:
    - компоненты, хуки, enum — как значение;
    - типы и интерфейсы — тоже в том же блоке (в TypeScript они будут видны как типы при `import type`).

Путь импорта всегда от корня `lib`: `"./components/<ComponentName>"` — при этом подтягивается `index.ts` этой папки.

---

## 4. Стори в Storybook

### Расположение и имя файла

- Папка: **`src/stories/<ComponentName>/`**.
- Файл стори: **`<ComponentName>.stories.tsx`**.
- Если для стори нужна локальная вёрстка/стилизация, не используйте inline-стили в `render`.
- Создавайте локальный SCSS-модуль в той же папке: **`<ComponentName>Stories.module.scss`** (например
  `DropdownStories.module.scss`) и подключайте классы из него.

В `.storybook/main.ts` уже задано: `../src/**/*.stories.@(js|jsx|mjs|ts|tsx)` — подхватываются все такие файлы.

### Импорты в стори

Компонент и типы импортируйте из `@components/<ComponentName>` (алиас на `lib/components/<ComponentName>`):

`import { ComponentName, type SomeProps } from "@components/ComponentName";`

В опубликованном приложении используйте имя npm-пакета, например `test-stpr-ui-kit`.

### Структура стори-файла

1. **Meta** — конфигурация для Storybook и autodocs:

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof ComponentName> = {
  title: "Components/ComponentName",   // раздел в сайдбаре: Components / ComponentName
  component: ComponentName,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
          Краткое описание компонента.

          ## Основные возможности
          - Пункт 1
          - Пункт 2

          ## Базовое использование
          \`\`\`jsx
          <ComponentName prop="value" />
          \`\`\`
        `,
      },
    },
  },
  argTypes: {
    // описание и контроль для каждого пропа
    propName: {
      description: "Текстовое описание",
      control: { type: "text" },  // или "boolean", "select", "radio", false и т.д.
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "value" },
      },
    },
  },
  // Переопределение decorators при необходимости
  decorators: [
    (Story) => (
      <div className={localStyles.localStoryWrapper}>
        <Story />
      </div>
    ),
  ],
  args: {
    // дефолтные значения для всех стори
  },
};

export default meta;
```

2. **Тип для стори** (удобно для типизации args):

```ts
type Story = StoryObj<typeof ComponentName>;
```

3. **Экспорт стори** — одна или несколько именованных стори:

```ts
export const Default: Story = {
  name: "Default ComponentName",  // опционально, для отображения в сайдбаре
  args: {
    prop1: "value1",
    prop2: true,
  },
};

export const WithLongText: Story = {
  name: "With Long Text",
  args: {
    ...Default.args,
    text: "Очень длинный текст...",
  },
};
```

### Рекомендации по argTypes

- Для каждого пропа, который должен быть виден в Docs и Controls, задать `description` и при необходимости `control`,
  `options`, `table` (type, defaultValue).
- Для пропов, которые не нужно менять в панели (например сложные объекты или callback): `control: false`, при
  необходимости описать в `table.type.summary` или `detail`.
- Для enum-пропов: `control: { type: "select" }`, `options: Object.values(ESomeEnum)`.

### Декоратор

В .storybook/preview.tsx используется общий decorators для создания storyWrapper в каждой Story, чтобы Story не
прилипали к краям и были в одном стиле:

```tsx
decorators: [
  (Story) => (
    <div className={mainStyles.storyWrapper}>
      <Story />
    </div>
  ),
]
```

Компоненты, которые рендерят контент через **Portal** (например, Modal через Layer → Portal), всё равно можно
оборачивать этим декоратором: оверлей и содержимое модалки попадают в `document.body` и не ограничиваются обёрткой.
Обёртка задаёт только место в дереве, где монтируется компонент; вынос в body делается внутри самого компонента (Layer
передаёт в Portal `node={document.body}`).

---

## 5. Чек-лист: новый компонент

- [ ] Создана папка `lib/components/<ComponentName>/`.
- [ ] Добавлены `ComponentName.tsx`, `ComponentName.module.scss`, `types/index.ts`, `index.ts`.
- [ ] В `index.ts` экспортированы компонент и нужные типы (и хуки, если есть).
- [ ] В `lib/test-stpr-ui-kit.ts` добавлены импорты и экспорты для компонента и всех типов/хуков, которые должны быть
  публичными.
- [ ] Создана папка `src/stories/<ComponentName>/` и файл `<ComponentName>.stories.tsx`.
- [ ] В стори заданы `meta` (title, component, tags, parameters.docs, argTypes, args), `export default meta`, одна или
  несколько именованных стори.
- [ ] При необходимости локальной стилизации стори добавлен файл `<ComponentName>Stories.module.scss`, inline-стили не
  используются.
- [ ] Любые изменения компонента (`fix` / `added` / `changed` / `removed`) отражены в `CHANGELOG.md` по правилам
  changelog.
- [ ] Оценено влияние на версию (`patch` / `minor` / `major`), для breaking-изменений выбран `major`.
- [ ] Линт проходит: `npm run lint`.
- [ ] Сборка библиотеки проходит: `npm run build:lib`.
- [ ] Статическая сборка Storybook проходит: `npm run build:storybook`.
- [ ] Локально рекомендовано запустить Storybook (`npm run storybook`) и проверить отображение компонента в
  Components/Docs.

После этого компонент доступен из пакета `test-stpr-ui-kit` и документирован в Storybook.
