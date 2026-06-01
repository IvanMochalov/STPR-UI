import { EIconName } from "@components/Icons";
import { Tabs, type TPaneItem } from "@components/Tabs";
import { Text } from "@components/Text";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useMemo, useState } from "react";

import styles from "./TabsStories.module.scss";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Компонент табов для организации контента в связанные вкладки с поддержкой различных стилей и состояний.

## Особенности:
- **Три варианта стиля**: contained (в общем контейнере), filled (отдельные вкладки) и outlined (с активной нижней границей)
- **Два размер**: \`md\` и \`xl\`
- **Подсказки вкладок**: встроенная поддержка тултипов для пояснений
- **Разделенный режим**: возможность отображения вкладок с отступами
- **Иконки вкладок**: настраиваются отдельно для каждого элемента в \`panes\` (\`startIconName\`, \`endIconName\`, повороты) и поддерживают режим icon-only через \`isOnlyIcon\` в \`TPaneItem\`
- **Типографика**: автоматическая настройка размера текста в зависимости от размера табов

## Визуальные состояния:
- **Активная вкладка**: выделяется цветом и фоном в зависимости от варианта стиля
- **Неактивная вкладка**: стандартное состояние с hover-эффектом
- **С подсказкой**: отображает иконку информации с тултипом

## Варианты стилей:
- **Contained**: вкладки в общем контейнере с заливкой фона, активная вкладка имеет белый фон
- **Filled**: отдельные заполненные вкладки, активная вкладка выделяется акцентным цветом
- **Outlined**: прозрачные вкладки, активная вкладка подчеркивается border-bottom акцентного цвета

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
  argTypes: {
    variant: {
      description: `Вариант стиля табов:\n- "contained" - в контейнере с заливкой фона (по умолчанию)\n- "filled" - отдельные заполненные вкладки\n- "outlined" - прозрачные вкладки с нижней активной границей\n`,
      control: { type: "select" },
      options: ["contained", "filled", "outlined"],
      table: {
        type: {
          summary: "TTabsVariant",
          detail: "'contained' | 'filled' | 'outlined'",
        },
        defaultValue: { summary: '"contained"' },
      },
    },
    size: {
      description: 'Размер табов:\n- "md" - базовый размер\n- "xl" - увеличенный размер\n',
      control: { type: "radio" },
      options: ["md", "xl"],
      table: {
        defaultValue: { summary: "xl" },
        type: {
          summary: "TTabsSize",
          detail: "'md' | 'xl'",
        },
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
            "  isOnlyIcon?: boolean;\n" +
            "  startIconName?: EIconName;\n" +
            "  endIconName?: EIconName;\n" +
            "  startIconRotate?: number;\n" +
            "  endIconRotate?: number;\n" +
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
    classNameTabElementRoot: {
      description: "Дополнительный CSS-класс для корневого элемента вкладки\n",
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
  args: {
    isSeparated: false,
    variant: "contained",
    size: "xl",
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  name: "Default Tabs",
  render: (args) => {
    const [activeTab, setActiveTab] = useState("address");
    const tabs = useMemo<TPaneItem[]>(() => {
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
          infoTooltipText: "Кадастровый номер",
          startIconName: EIconName.AddFile,
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

export const Outlined: Story = {
  name: "Outlined Tabs",
  render: Default.render,
  args: {
    variant: "outlined",
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
    const tabs = useMemo<TPaneItem[]>(() => {
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

export const TabsWithPerItemIcons: Story = {
  name: "Tabs with Per-item Icons",
  render: (args) => {
    const [activeTab, setActiveTab] = useState("calendar");
    const tabs = useMemo<TPaneItem[]>(() => {
      return [
        {
          name: "Календарь",
          key: "calendar",
          active: activeTab === "calendar",
          onClick: () => setActiveTab("calendar"),
          startIconName: EIconName.Calendar,
        },
        {
          name: "Обновления",
          key: "updates",
          active: activeTab === "updates",
          onClick: () => setActiveTab("updates"),
          startIconName: EIconName.Update,
          startIconRotate: 180,
        },
        {
          name: "Действия",
          key: "actions",
          active: activeTab === "actions",
          onClick: () => setActiveTab("actions"),
          endIconName: EIconName.ChevronDown,
          endIconRotate: 90,
        },
      ];
    }, [activeTab]);

    return <Tabs {...args} panes={tabs} />;
  },
};

export const IconOnlyTabs: Story = {
  name: "Mixed Tabs with Per-item isOnlyIcon",
  render: (args) => {
    const [activeTab, setActiveTab] = useState("overview");
    const tabs = useMemo<TPaneItem[]>(() => {
      return [
        {
          name: "Обзор",
          key: "overview",
          active: activeTab === "overview",
          onClick: () => setActiveTab("overview"),
          startIconName: EIconName.Calendar,
        },
        {
          name: "Детали",
          key: "details",
          active: activeTab === "details",
          onClick: () => setActiveTab("details"),
        },
        {
          name: "Действия",
          key: "actions",
          active: activeTab === "actions",
          onClick: () => setActiveTab("actions"),
          startIconName: EIconName.Update,
          startIconRotate: 180,
          endIconName: EIconName.ChevronDown,
          endIconRotate: 90,
          isOnlyIcon: true,
        },
      ];
    }, [activeTab]);

    return <Tabs {...args} panes={tabs} />;
  },
  args: {
    variant: "filled",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Edge-case: для элемента с isOnlyIcon=true endIconName/endIconRotate заданы намеренно и игнорируются в рендере.",
      },
    },
  },
};

export const AllVariants: Story = {
  name: "All Tabs Variants",
  render: () => {
    const [tabState, setTabState] = useState("tab1");

    const commonTabs: TPaneItem[] = [
      { name: "Профиль", key: "tab1" },
      { name: "Настройки", key: "tab2" },
      { name: "Безопасность", key: "tab3" },
    ];

    return (
      <div className={styles.differentTabsWrapper}>
        <div className={styles.differentTabsWrapper__tabsGroup}>
          <Text type="p1">Contained Variant (по умолчанию)</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key || ""),
            }))}
            variant="contained"
          />
        </div>
        <div className={styles.differentTabsWrapper__tabsGroup}>
          <Text type="p1">Separated Tabs</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key || ""),
            }))}
            isSeparated={true}
            variant="contained"
          />
        </div>
        <div className={styles.differentTabsWrapper__tabsGroup}>
          <Text type="p1">Filled Variant</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key || ""),
            }))}
            variant="filled"
          />
        </div>
        <div className={styles.differentTabsWrapper__tabsGroup}>
          <Text type="p1">Separated Tabs</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key || ""),
            }))}
            isSeparated={true}
            variant="filled"
          />
        </div>
        <div className={styles.differentTabsWrapper__tabsGroup}>
          <Text type="p1">Outlined Variant</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key || ""),
            }))}
            variant="outlined"
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
          <Text type="p1">Contained, md</Text>
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
          <Text type="p1">Contained, xl</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key),
            }))}
            variant="contained"
          />
        </div>
        <div className={styles.differentTabsWrapper__tabsGroup}>
          <Text type="p1">Filled, md</Text>
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
          <Text type="p1">Filled, xl</Text>
          <Tabs
            panes={commonTabs.map((tab) => ({
              ...tab,
              active: tabState === tab.key,
              onClick: () => setTabState(tab.key),
            }))}
            variant="filled"
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

    const tabs: TPaneItem[] = [
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
        <Tabs panes={tabs} variant="filled" isSeparated={false} />
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
