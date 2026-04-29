import type { Meta, StoryObj } from "@storybook/react-vite";
import { ETooltipPosition, Label, Text } from "local-stpr-ui-kit";

import styles from "./LabelStories.module.scss";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: `Текст лейбла. Отображается как подпись для связанного элемента формы.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    required: {
      description: `Пометить поле как обязательное для заполнения. Добавляет красную звездочку (*) после текста лейбла.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    infoTooltipText: {
      description: `Текст всплывающей подсказки. Показывает иконку информации с тултипом при наведении.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    tooltipPosition: {
      description: `Позиция тултипа относительно иконки информации. По умолчанию bottom-left.\n`,
      control: { type: "select" },
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
      table: {
        type: { summary: "ETooltipPosition" },
        defaultValue: { summary: '"bottom-left"' },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента лейбла\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameBaseTooltipRoot: {
      description: "Дополнительный CSS-класс для корневого элемента тултипа\n",
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
Компонент лейбла для подписи полей формы, любых других компонентов с поддержкой обязательных полей и вспомогательных подсказок.\n
Данный компонент используется в компонентах (устанавливается через параметр \`label\`):
- **\`Input\`**
- **\`Select\`**
- **\`TextWithLabel\`**

## Особенности:
- **Семантическая разметка** - использует нативный HTML элемент \`<label>\`
- **Обязательные поля** - визуальное обозначение звездочкой для required полей
- **Встроенные подсказки** - интеграция с \`InfoTooltip\` для поясняющей информации
- **Адаптивный дизайн** - разные размеры шрифта на мобильных и desktop устройствах
- **Гибкое позиционирование** - поддержка различных позиций тултипа

## Визуальные состояния:
- **Обычный лейбл** - стандартный серый текст
- **Обязательное поле** - текст с красной звездочкой (*)
- **С подсказкой** - текст с иконкой информации для дополнительных пояснений

## Адаптивность:
Размер шрифта адаптируется под разные разрешения устройств:
- Мобильные: 12px
- Планшеты и выше \`(sm breakpoint)\`: 14px

## Рекомендации по использованию:
Используйте для семантической разметки форм и улучшения пользовательского опыта через подсказки.

### Базовое использование

\`\`\`jsx
// Простой лейбл
<Label label="Имя пользователя" />

// Обязательное поле
<Label label="Email" required={true} />

// Лейбл с подсказкой
<Label 
  label="Сложный параметр" 
  infoTooltipText="Этот параметр влияет на важные настройки системы" 
/>

// Комбинированный вариант
<Label 
  label="Критический параметр" 
  required={true}
  infoTooltipText="Это поле обязательно для корректной работы системы"
  tooltipPosition={ETooltipPosition.BottomLeft}
/>
\`\`\`
        `,
      },
    },
  },
  args: {
    label: "Лейбл поля",
    required: false,
    infoTooltipText: "",
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  name: "Default Label",
  args: {
    label: "Обычный лейбл поля",
  },
};

export const Required: Story = {
  name: "Required Label",
  args: {
    label: "Обязательное поле",
    required: true,
  },
};

export const WithTooltip: Story = {
  name: "Label with Tooltip",
  args: {
    label: "Поле с подсказкой",
    infoTooltipText: "Это вспомогательная подсказка с пояснениями по заполнению поля",
  },
};

export const AllVariants: Story = {
  name: "All Label Variants",
  render: () => {
    return (
      <div className={styles.labelsWrapper}>
        <div className={styles.allLabelsWrapper__item}>
          <Text type={"description"}>Обычный лейбл</Text>
          <Label label="Базовая информация" />
        </div>

        <div className={styles.allLabelsWrapper__item}>
          <Text type={"description"}>Обязательное поле</Text>
          <Label label="Критический параметр" required={true} />
        </div>

        <div className={styles.allLabelsWrapper__item}>
          <Text type={"description"}>Лейбл с подсказкой</Text>
          <Label
            label="Сложный параметр"
            infoTooltipText="Этот параметр требует особого внимания при настройке"
          />
        </div>

        <div className={styles.allLabelsWrapper__item}>
          <Text type={"description"}>Комбинированный вариант</Text>
          <Label
            label="Важный параметр системы"
            required={true}
            infoTooltipText="Это поле обязательно для корректной работы системы. Подробности в документации."
          />
        </div>
      </div>
    );
  },
};

export const DifferentTooltipPositions: Story = {
  render: () => {
    return (
      <div className={styles.labelsWrapper}>
        <Label
          label="Подсказка справа"
          infoTooltipText="Тултип отображается справа от иконки"
          tooltipPosition={ETooltipPosition.Right}
        />
        <Label
          label="Подсказка сверху"
          infoTooltipText="Тултип отображается сверху от иконки"
          tooltipPosition={ETooltipPosition.Top}
        />
        <Label
          label="Подсказка слева"
          infoTooltipText="Тултип отображается слева от иконки"
          tooltipPosition={ETooltipPosition.Left}
        />
        <Label
          label="Подсказка снизу (по умолчанию)"
          infoTooltipText="Тултип отображается снизу от иконки"
          tooltipPosition={ETooltipPosition.Bottom}
        />
        <Label
          label="Подсказка по умолчанию)"
          infoTooltipText="Тултип отображается снизу от иконки"
        />
      </div>
    );
  },
};
