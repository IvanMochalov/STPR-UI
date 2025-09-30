import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown, ETooltipPosition } from "../../../lib/test-stpr-ui-kit.ts";
import styles from "./DropdownStories.module.scss";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Выпадающий список с возможностью кастомизации дизайна и гибкими настройками позиционирования. 
Компонент использует Tooltip для отображения списка options и предоставляет различные варианты расположения.

## Основные возможности

- **Гибкое позиционирование**: 12 вариантов расположения выпадающего списка
- **Заголовок списка**: опциональное название группы элементов
- **Описания элементов**: дополнительная информация для каждого пункта
- **Центрирование текста**: возможность центрировать текст в элементах
- **Адаптивный дизайн**: автоматическая подстройка под контент
- **Кастомные обработчики**: индивидуальные callback'и для каждого пункта

## Базовое использование

\`\`\`jsx
<Dropdown
  labelText="Тип файла"
  listName="Форматы экспорта"
  dropdownList={[
    { name: "CSV", description: "12 мб", onClick: () => handleExport('csv') },
    { name: "Excel", description: "23 мб", onClick: () => handleExport('excel') },
    { name: "PDF", description: "8 мб", onClick: () => handleExport('pdf') },
  ]}
  dropdownPosition={ETooltipPosition.BottomRight}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента dropdown",
      control: false,
    },
    labelText: {
      description: "Текст, отображаемый на кнопке dropdown",
      control: { type: "text" },
      table: {
        defaultValue: { summary: "Выпадающий список" },
        type: { summary: "string" },
      },
    },
    listName: {
      description: "Заголовок выпадающего списка. Отображается вверху списка элементов",
      control: { type: "text" },
    },
    dropdownList: {
      description: "Массив элементов для отображения в выпадающем списке",
      control: { type: "object" },
      table: {
        type: {
          summary: "Array<TDropdownListItem>",
          detail:
            "TDropdownListItem[] = {\n" +
            "  name: string;\n" +
            "  onClick?: () => void;\n" +
            "  description?: string;\n" +
            "  textCenter?: boolean;\n" +
            " }[]",
        },
      },
    },
    dropdownPosition: {
      description: "Позиция выпадающего списка относительно триггера",
      options: [
        "top",
        "top-left",
        "top-right",
        "bottom",
        "bottom-left",
        "bottom-right",
        "left",
        "left-top",
        "left-bottom",
        "right",
        "right-top",
        "right-bottom",
      ],
      control: { type: "select" },
      table: {
        defaultValue: { summary: "bottom-right" },
        type: { summary: "ETooltipPosition" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    dropdownPosition: ETooltipPosition.BottomRight,
    labelText: "Выпадающий список",
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  name: "Default Dropdown",
  args: {
    listName: "Тип файла",
    dropdownList: [
      { name: "CSV", description: "12 мб", onClick: () => alert("click on CSV") },
      { name: "Excel", description: "23 мб", onClick: () => alert("click on Excel") },
      { name: "Скачать ZIP-архив", textCenter: true, onClick: () => alert("click on ZIP") },
    ],
  },
};

export const WithLongDescriptions: Story = {
  name: "Dropdown with Long Descriptions",
  args: {
    labelText: "Форматы экспорта",
    listName: "Доступные форматы",
    dropdownList: [
      {
        name: "CSV",
        description: "Табличный формат, подходит для Excel",
        onClick: () => alert("CSV"),
      },
      {
        name: "JSON",
        description: "Структурированный формат для разработчиков",
        onClick: () => alert("JSON"),
      },
      {
        name: "PDF",
        description: "Формат для печати и документооборота",
        onClick: () => alert("PDF"),
      },
      {
        name: "Экспортировать все",
        textCenter: true,
        description: "Все форматы в ZIP-архиве",
        onClick: () => alert("Все"),
      },
    ],
  },
};

export const CustomStyling: Story = {
  name: "Dropdown with Custom Styling",
  args: {
    classNameRoot: styles.customDropdown,
    labelText: "Кастомный стиль",
    dropdownList: [
      { name: "Пункт меню 1", onClick: () => alert("Пункт 1") },
      { name: "Пункт меню 2", onClick: () => alert("Пункт 2") },
    ],
  },
};
