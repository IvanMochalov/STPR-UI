import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";

import { Tabs } from "../../../lib/components/Tabs";
import { Text } from "../../../lib/components/Text";
import mainStyles from "../Stories.module.scss";
import styles from "./TabsStories.module.scss";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: `Вариант стиля табов:\n- "contained" - в контейнере с заливкой фона (по умолчанию)\n- "filled" - отдельные заполненные вкладки\n`,
      control: { type: "select" },
      options: ["contained", "filled"],
      table: {
        type: {
          summary: "TTabsVariant",
          detail: "'contained' | 'filled'",
        },
        defaultValue: { summary: '"contained"' },
      },
    },
    size: {
      description: `Размер табов:\n- "md" - средний размер (по умолчанию)\n- "lg" - большой размер\n`,
      control: { type: "select" },
      options: ["md", "lg"],
      table: {
        type: { summary: "TabsSize", detail: "'md' | 'lg'" },
        defaultValue: { summary: '"md"' },
      },
    },
    isSeparated: {
      description: `Разделить табы отступами вместо общего контейнера.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    panes: {
      description: `Массив вкладок. Каждая вкладка должна содержать name и может содержать дополнительные параметры.\n`,
      control: false,
      table: {
        type: {
          summary: "TPaneItem[]",
          detail:
            "TPaneItem[] = {\n" +
            "  name: string;\n" +
            "  key?: string;\n" +
            "  active?: boolean;\n" +
            "  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;\n" +
            "  infoTooltipText?: string;\n" +
            "}[]",
        },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента табов\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameBaseTooltipRoot: {
      description: "Дополнительный CSS-класс для корневого элемента тултипов вкладок\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Компонент табов для организации контента в связанные вкладки с поддержкой различных стилей и состояний.

## Особенности:
- **Два варианта стиля**: contained (в общем контейнере) и filled (отдельные вкладки)
- **Два размера**: средний и большой для разных контекстов использования
- **Подсказки вкладок**: встроенная поддержка тултипов для пояснений
- **Разделенный режим**: возможность отображения вкладок с отступами вместо общего фона
- **Адаптивный дизайн**: разные отступы и размеры на мобильных и desktop устройствах
- **Типографика**: автоматическая настройка размера текста в зависимости от размера табов

## Визуальные состояния:
- **Активная вкладка**: выделяется цветом и фоном в зависимости от варианта стиля
- **Неактивная вкладка**: стандартное состояние с hover-эффектом
- **С подсказкой**: отображает иконку информации с тултипом

## Варианты стилей:
- **Contained**: вкладки в общем контейнере с заливкой фона, активная вкладка имеет белый фон
- **Filled**: отдельные заполненные вкладки, активная вкладка выделяется акцентным цветом

## Рекомендации по использованию:
Используйте для организации связанного контента по категориям или для переключения между разными представлениями данных.

### Базовое использование

\`\`\`jsx
const [activeTab, setActiveTab] = useState('tab1');

<Tabs
  panes={[
    {
      name: "Первая вкладка",
      active: activeTab === 'tab1',
      onClick: () => setActiveTab('tab1'),
    },
    {
      name: "Вторая вкладка", 
      active: activeTab === 'tab2',
      onClick: () => setActiveTab('tab2'),
    },
  ]}
  variant="contained"
  size="md"
/>
\`\`\`
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={mainStyles.storyWrapper}>
        <Story />
      </div>
    ),
  ],
  args: {
    isSeparated: false,
    variant: "contained",
    size: "md",
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  name: "Default Tabs",
  render: (args) => {
    const [activeTab, setActiveTab] = useState("address");
    const tabs = useMemo(() => {
      return [
        {
          name: "Адрес",
          key: "address",
          active: activeTab === "address",
          onClick: () => setActiveTab("address"),
        },
        {
          name: "Кадастровый номер",
          key: "cadastral",
          active: activeTab === "cadastral",
          onClick: () => setActiveTab("cadastral"),
        },
      ];
    }, [activeTab]);

    return <Tabs {...args} panes={tabs} />;
  },
};

export const Filled: Story = {
  name: "Filled Tabs",
  render: Default.render,
  args: {
    variant: "filled",
  },
};

export const Separated: Story = {
  name: "Separated Tabs",
  render: Default.render,
  args: {
    variant: "filled",
    isSeparated: true,
  },
};

export const TabsWithTooltip: Story = {
  name: "Tabs with Tooltips",
  render: (args) => {
    const [activeTab, setActiveTab] = useState("address");
    const tabs = useMemo(() => {
      return [
        {
          name: "Адрес",
          key: "address",
          active: activeTab === "address",
          onClick: () => setActiveTab("address"),
          infoTooltipText:
            "Переменная согласно данным требованиям, обозначающая строительный (почтовый) адрес элементов АГР с дополнительной нумерации, при необходимости. Включает в себя следующие адресообразующие элементы, если они присутствуют: элементы улично-дорожной сети (аллея, бульвар, магистраль, переулок, площадь, проезд и т.д.), элементы объектов адресации (здание, земельный участок, владение и т.д.), типы зданий/сооружений (дом, корпус, строение и т.д.).",
        },
        {
          name: "Кадастровый номер",
          key: "cadastral",
          active: activeTab === "cadastral",
          onClick: () => setActiveTab("cadastral"),
          infoTooltipText:
            "Если объект не имеет точного строительного/почтового адреса, например: деревня Внуково, то указывается кадастровый номер земельного участка. \n" +
            "\nПример: 77:01:0045002:4123",
        },
      ];
    }, [activeTab]);

    return <Tabs {...args} panes={tabs} />;
  },
};

export const AllVariants: Story = {
  name: "All Tabs Variants",
  render: () => {
    const [tabState, setTabState] = useState("tab1");

    const commonTabs = [
      { name: "Основные данные", key: "tab1" },
      { name: "Дополнительно", key: "tab2" },
      { name: "Настройки", key: "tab3" },
    ];

    return (
      <div className={styles.differentTabsWrapper}>
        <div className={styles.differentTabsWrapper__tabsGroup}>
          <Text type="p1">Contained Variant (по умолчанию)</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key),
            }))}
            variant="contained"
            size="md"
          />
        </div>
        <div className={styles.differentTabsWrapper__tabsGroup}>
          <Text type="p1">Separated Tabs</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key),
            }))}
            isSeparated={true}
            variant="contained"
            size="md"
          />
        </div>
        <div className={styles.differentTabsWrapper__tabsGroup}>
          <Text type="p1">Filled Variant</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key),
            }))}
            variant="filled"
            size="md"
          />
        </div>
        <div className={styles.differentTabsWrapper__tabsGroup}>
          <Text type="p1">Separated Tabs</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key),
            }))}
            isSeparated={true}
            variant="filled"
            size="md"
          />
        </div>
      </div>
    );
  },
};

export const DifferentSizes: Story = {
  name: "Different Tabs Sizes",
  render: () => {
    const [tabState, setTabState] = useState("tab1");

    const commonTabs = [
      { name: "Профиль", key: "tab1" },
      { name: "Настройки", key: "tab2" },
      { name: "Безопасность", key: "tab3" },
    ];

    return (
      <div className={styles.differentTabsWrapper}>
        <div className={styles.differentTabsWrapper__tabsGroup}>
          <Text type="p1">Medium Size (md)</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key),
            }))}
            variant="contained"
            size="md"
          />
        </div>
        <div className={styles.differentTabsWrapper__tabsGroup}>
          <Text type="p1">Medium Size (md)</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key),
            }))}
            variant="filled"
            size="md"
          />
        </div>
        <div className={styles.differentTabsWrapper__tabsGroup}>
          <Text type="p1">Large Size (lg)</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key),
            }))}
            variant="contained"
            size="lg"
          />
        </div>
        <div className={styles.differentTabsWrapper__tabsGroup}>
          <Text type="p1">Large Size (lg)</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key),
            }))}
            variant="filled"
            size="lg"
          />
        </div>
        <div className={styles.differentTabsWrapper__tabsGroup}>
          <Text type="p1">Large Size (lg)</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key),
            }))}
            isSeparated={true}
            variant="contained"
            size="lg"
          />
        </div>
        <div className={styles.differentTabsWrapper__tabsGroup}>
          <Text type="p1">Large Size (lg)</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key),
            }))}
            isSeparated={true}
            variant="filled"
            size="lg"
          />
        </div>
      </div>
    );
  },
};

export const ComplexExample: Story = {
  name: "Complex Tabs Example",
  render: () => {
    const [activeTab, setActiveTab] = useState("info");

    const tabs = [
      {
        name: "Основная информация",
        key: "info",
        active: activeTab === "info",
        onClick: () => setActiveTab("info"),
        infoTooltipText: "Основные данные об объекте недвижимости",
      },
      {
        name: "Характеристики",
        key: "properties",
        active: activeTab === "properties",
        onClick: () => setActiveTab("properties"),
        infoTooltipText: "Технические характеристики и параметры объекта",
      },
      {
        name: "Документы",
        key: "documents",
        active: activeTab === "documents",
        onClick: () => setActiveTab("documents"),
        infoTooltipText: "Прикрепленные документы и сертификаты",
      },
      {
        name: "История изменений",
        key: "history",
        active: activeTab === "history",
        onClick: () => setActiveTab("history"),
        infoTooltipText: "Журнал изменений и версий объекта",
      },
    ];

    return (
      <div className={styles.complexTabsExample}>
        <Text type="h3">Управление объектом недвижимости</Text>
        <Tabs panes={tabs} variant="filled" size="lg" isSeparated={false} />
        <div className={styles.complexTabsExample__tabContentWrapper}>
          {activeTab === "info" && <Text>Содержимое основной информации...</Text>}
          {activeTab === "properties" && <Text>Содержимое характеристик...</Text>}
          {activeTab === "documents" && <Text>Содержимое документов...</Text>}
          {activeTab === "history" && <Text>Содержимое истории изменений...</Text>}
        </div>
      </div>
    );
  },
};
