import type { Meta, StoryObj } from "@storybook/react-vite";
import { useMemo, useState } from "react";
import { Breadcrumb, TCrumbItem, Text } from "test-stpr-ui-kit";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Компонент "хлебных крошек" для навигации по иерархии страниц. 
Отображает текущее местоположение пользователя в структуре сайта и предоставляет быстрый доступ к родительским разделам.

## Основные возможности

- **Иерархическая навигация** - отображение пути от корня до текущей страницы
- **Интерактивные элементы** - кликабельные ссылки на родительские разделы
- **Активное состояние** - визуальное выделение текущей страницы
- **Адаптивный дизайн** - корректное отображение на мобильных и desktop устройствах
- **Автоматические разделители** - иконки-шевроны между элементами

## Особенности поведения

- **Последний элемент** - не является кликабельным и отображается без разделителя
- **Активный элемент** - выделяется цветом и не имеет обработчика клика
- **Разделители** - автоматически скрываются для последнего элемента
- **Доступность** - включает ARIA-атрибуты для скринридеров

## Базовое использование

\`\`\`jsx
const [currentPage, setCurrentPage] = useState("cart");

const crumbsList = [
  { text: "Главная", onClick: () => setCurrentPage("main") },
  { text: "Каталог", onClick: () => setCurrentPage("catalog") },
  { text: "Корзина", active: true }
];

return <Breadcrumb crumbsList={crumbsList} />;
\`\`\`

## Динамическое управление активным состоянием

Для реализации интерактивной навигации можно комбинировать с состоянием React:

\`\`\`jsx
const [currentPage, setCurrentPage] = useState("catalog");

const crumbsList = [
  { 
    text: "Главная", 
    active: currentPage === "main", 
    onClick: () => setCurrentPage("main") 
  },
  { 
    text: "Каталог", 
    active: currentPage === "catalog", 
    onClick: () => setCurrentPage("catalog") 
  },
  { 
    text: "Электроника", 
    active: currentPage === "electronics", 
    onClick: () => setCurrentPage("electronics") 
  }
];

return <Breadcrumb crumbsList={crumbsList} />;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    crumbsList: {
      description: `Массив элементов навигации. Каждый элемент представляет собой шаг в иерархии.
- \`text\`: отображаемый текст (обязательный)
- \`onClick\`: обработчик клика (не используется для активного элемента)
- \`active\`: флаг активного состояния (последний элемент обычно активный)\n`,
      control: false,
      table: {
        type: {
          summary: "TCrumbItem[]",
          detail:
            "TCrumbItem[] = { text: string; onClick?: () => void; active?: boolean; visible?: boolean; }[]",
        },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента навигации\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameListRoot: {
      description: "Дополнительный CSS-класс для списка элементов навигации\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  name: "Default Breadcrumb",
  render: (args) => {
    const [currentPage, setCurrentPage] = useState("lib");
    const crumbList = useMemo<TCrumbItem[]>(() => {
      return [
        { text: "Главная", active: currentPage === "main", onClick: () => setCurrentPage("main") },
        {
          text: "Библиотека 3D-моделей для АГР",
          active: currentPage === "lib",
          onClick: () => setCurrentPage("lib"),
        },
        { text: "Корзина", active: currentPage === "cart", onClick: () => setCurrentPage("cart") },
      ];
    }, [currentPage]);

    return <Breadcrumb {...args} crumbsList={crumbList} />;
  },
};

export const WithLongPath: Story = {
  name: "Breadcrumb with Long Path",
  render: (args) => {
    const [currentPage, setCurrentPage] = useState("product");
    const crumbList = useMemo<TCrumbItem[]>(() => {
      return [
        { text: "Главная", active: currentPage === "main", onClick: () => setCurrentPage("main") },
        { text: "Магазин", active: currentPage === "shop", onClick: () => setCurrentPage("shop") },
        {
          text: "Электроника",
          active: currentPage === "electronics",
          onClick: () => setCurrentPage("electronics"),
        },
        {
          text: "Смартфоны и гаджеты",
          active: currentPage === "smartphones",
          onClick: () => setCurrentPage("smartphones"),
        },
        {
          text: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
          active: currentPage === "product",
        },
      ];
    }, [currentPage]);

    return <Breadcrumb {...args} crumbsList={crumbList} />;
  },
};

export const InteractiveBreadcrumb: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState("settings");
    const crumbList = useMemo<TCrumbItem[]>(() => {
      return [
        {
          text: "Рабочий стол",
          active: currentPage === "dashboard",
          onClick: () => setCurrentPage("dashboard"),
        },
        {
          text: "Проекты",
          active: currentPage === "projects",
          onClick: () => setCurrentPage("projects"),
        },
        {
          text: "Мой проект",
          active: currentPage === "project",
          onClick: () => setCurrentPage("project"),
        },
        {
          text: "Настройки",
          active: currentPage === "settings",
          onClick: () => setCurrentPage("settings"),
        },
      ];
    }, [currentPage]);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Breadcrumb {...args} crumbsList={crumbList} />
        <Text type={"description"} color={"#666"}>
          Текущая страница: {currentPage}
        </Text>
      </div>
    );
  },
};
