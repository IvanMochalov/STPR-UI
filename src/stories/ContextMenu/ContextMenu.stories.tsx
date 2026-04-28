import type { Meta, StoryObj } from "@storybook/react-vite";

import { ContextMenu, EIconName } from "../../../lib/test-stpr-ui-kit.ts";

const meta: Meta<typeof ContextMenu> = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Контекстное меню для отображения списка действий с поддержкой иконок.

## Особенности:
- Автоматическое определение опции "Удалить" по ключу "delete"
- Подсветка иконки удаления красным цветом
- Гибкая система иконок через компонент Icon
- Адаптивный дизайн с hover-эффектами
- Семантическая HTML-разметка (ul/li)

## Базовое использование

\`\`\`jsx
<ContextMenu
  options={[
    { key: "edit", label: "Редактировать", iconName: EIconName.Edit },
    { key: "delete", label: "Удалить", iconName: EIconName.Trash },
  ]}
  onClickItem={(option) => console.log(option)}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента контекстного меню\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    options: {
      description: `Массив опций меню. Каждая опция должна содержать:
- key: уникальный идентификатор (обязательно для React key)
- label: текст опции
- iconName: имя иконки из EIconName (опционально)
- value: дополнительное значение (опционально)

Особенности:
- Опция с key="delete" автоматически получает красный цвет иконки
- Поддерживаются любые иконки из библиотеки EIconName
`,
      control: { type: "object" },
      table: {
        type: {
          summary: "TContextMenuOption[]",
          detail:
            "TContextMenuOption[] = { key?: string; value?: string; label?: string; iconName?: EIconName; }[]",
        },
      },
    },
    onClickItem: {
      description:
        "Callback-функция, вызываемая при клике на опцию меню. Получает объект выбранной опции в качестве параметра.",
      control: false,
      table: {
        type: {
          summary: "(option: TContextMenuOption) => void",
          detail:
            "onClickItem={(option) => {\n" +
            "  console.log('Выбрана опция:', option.key, option.label);\n" +
            "}}",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  name: "Default Context Menu",
  args: {
    options: [
      {
        key: "history",
        label: "История проверок",
        iconName: EIconName.HistoryClock,
      },
      {
        key: "delete",
        label: "Удалить",
        iconName: EIconName.Trash,
      },
    ],
  },
};

export const WithIcons: Story = {
  name: "Context Menu with Various Icons",
  args: {
    options: [
      {
        key: "plus",
        label: "Добавить",
        iconName: EIconName.Plus,
      },
      {
        key: "copy",
        label: "Копировать",
        iconName: EIconName.Copy,
      },
      {
        key: "download",
        label: "Скачать",
        iconName: EIconName.Upload,
      },
      {
        key: "delete",
        label: "Удалить",
        iconName: EIconName.Trash,
      },
    ],
  },
};

export const WithoutIcons: Story = {
  name: "Context Menu without Icons",
  args: {
    options: [
      {
        key: "view",
        label: "Просмотреть",
      },
      {
        key: "edit",
        label: "Редактировать",
      },
      {
        key: "delete",
        label: "Удалить",
      },
    ],
  },
};
