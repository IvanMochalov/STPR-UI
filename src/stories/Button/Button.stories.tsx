import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../../lib/components/Button";
import { EIconName } from "../../../lib/components/Icons";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Универсальный компонент кнопки с поддержкой различных стилей, состояний и иконок. 
Компонент предоставляет гибкие настройки внешнего вида и поведения.

## Основные возможности

- **Три варианта стилей**: primary, secondary, link
- **Два цвета**: blue (акцентный) и white (белый)
- **Поддержка иконок**: возможность добавления иконок слева от текста
- **Состояния**: disabled, loading, full width
- **Типы кнопок**: button, submit, reset
- **Адаптивный дизайн**: увеличенные отступы на планшетах и десктопе

## Базовое использование

\`\`\`jsx
<Button onClick={() => console.log("click");}>
  Кликни меня
</Button>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      description:
        "Стиль кнопки:\n- 'primary': основной стиль для главных действий\n- 'secondary': второстепенный стиль\n- 'link': текстовый стиль для ссылок",
      control: { type: "radio" },
      options: ["primary", "secondary", "link"],
      table: {
        defaultValue: { summary: "primary" },
        type: { summary: "union:| 'primary' | 'secondary' | 'link'" },
      },
    },
    color: {
      description:
        "Цветовая схема кнопки:\n- 'blue': акцентный синий (брендовый)\n- 'white': белый для цветных фонов",
      control: { type: "radio" },
      options: ["blue", "white"],
      table: {
        defaultValue: { summary: "blue" },
        type: { summary: "union:| 'white' | 'blue'" },
      },
    },
    children: {
      description: "Текст кнопки. Отображается если isOnlyIcon=false",
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
      },
    },
    disabled: {
      description: "Блокирует кнопку. Визуально затемняет и отключает взаимодействие",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    loading: {
      description: "Показывает индикатор загрузки вместо иконки. Автоматически блокирует кнопку",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    isFullWidth: {
      description: "Растягивает кнопку на всю ширину родительского контейнера",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    isOnlyIcon: {
      description: "Скрывает текст, отображает только иконку. Убирает лишние отступы",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    noPadding: {
      description: "Убирает все внутренние отступы. Используется для кастомных размеров",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    type: {
      description:
        "HTML-тип кнопки:\n- 'button': обычная кнопка\n- 'submit': для отправки форм\n- 'reset': для сброса форм",
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
      table: {
        defaultValue: { summary: "button" },
        type: { summary: "union:| 'button' | 'submit' | 'reset'" },
      },
    },
    form: {
      description: "ID формы для кнопок типа submit/reset. Позволяет управлять формой извне",
      control: false,
    },
    iconName: {
      description: "Иконка для отображения слева от текста. Не отображается при loading=true",
      control: { type: "select" },
      options: Object.values(EIconName),
    },
    iconRotate: {
      description: "Угол поворота иконки в градусах. Полезно для анимаций",
      control: { type: "range", min: 0, max: 360 },
      table: {
        defaultValue: { summary: "0" },
      },
    },
    onClick: {
      description: "Callback-функция при клике на кнопку. Не вызывается если disabled=true",
      control: false,
      table: {
        type: {
          detail: "onClose={(event) => {\n" + "  // логика обработки клика по кнопке;\n" + "}}",
        },
      },
    },
    style: {
      description: "Инлайн-стили для кастомизации внешнего вида",
      control: { type: "object" },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента кнопки",
      control: false,
    },
    classNameIconContainerRoot: {
      description: "Дополнительный CSS-класс для контейнера иконки",
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "20vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "primary",
    color: "blue",
    children: "Default Button",
    type: "button",
    disabled: false,
    isFullWidth: false,
    noPadding: false,
    isOnlyIcon: false,
    loading: false,
  },
};

export const PrimaryWhite: Story = {
  args: {
    variant: "primary",
    color: "white",
    children: "Primary White Button",
  },
};

export const SecondaryBlue: Story = {
  args: {
    variant: "secondary",
    color: "blue",
    children: "Secondary Blue Button",
  },
};

export const SecondaryWhite: Story = {
  args: {
    variant: "secondary",
    color: "white",
    children: "Secondary White Button",
  },
};

export const LinkBlue: Story = {
  args: {
    variant: "link",
    color: "blue",
    children: "Link Blue Button",
  },
};

export const WithIcon: Story = {
  name: "Button with Icon",
  args: {
    variant: "primary",
    color: "blue",
    iconName: EIconName.Plus,
    children: "Add Item",
  },
};

export const IconOnly: Story = {
  name: "Icon Only Button",
  args: {
    variant: "primary",
    color: "blue",
    iconName: EIconName.Trash,
    isOnlyIcon: true,
  },
};

export const LoadingState: Story = {
  name: "Loading Button",
  args: {
    variant: "primary",
    color: "blue",
    loading: true,
    children: "Saving...",
  },
};

export const DisabledState: Story = {
  name: "Disabled Button",
  args: {
    variant: "primary",
    color: "blue",
    disabled: true,
    children: "Disabled Button",
  },
};

export const FullWidth: Story = {
  name: "Full Width Button",
  args: {
    variant: "primary",
    color: "blue",
    isFullWidth: true,
    children: "Full Width Button",
  },
};

export const NoPadding: Story = {
  name: "No Padding Button",
  args: {
    variant: "primary",
    color: "blue",
    noPadding: true,
    children: "No Padding",
  },
};

export const SubmitButton: Story = {
  args: {
    variant: "primary",
    color: "blue",
    type: "submit",
    children: "Submit Form",
  },
};

export const RotatedIcon: Story = {
  name: "Button with Rotated Icon",
  args: {
    variant: "primary",
    color: "blue",
    iconName: EIconName.Trash,
    iconRotate: 45,
    children: "Delete",
  },
};

export const AllVariants: Story = {
  name: "All Variants Overview",
  render: () => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}
    >
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Button variant="primary" color="blue">
          Primary Blue
        </Button>
        <Button variant="primary" color="white">
          Primary White
        </Button>
        <Button variant="secondary" color="blue">
          Secondary Blue
        </Button>
        <Button variant="secondary" color="white">
          Secondary White
        </Button>
        <Button variant="link" color="blue">
          Link Blue
        </Button>
      </div>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Button variant="primary" color="blue" iconName={EIconName.Plus}>
          With Icon
        </Button>
        <Button variant="primary" color="blue" loading>
          Loading
        </Button>
        <Button variant="primary" color="blue" disabled>
          Disabled
        </Button>
        <Button variant="primary" color="blue" isFullWidth>
          Full Width
        </Button>
      </div>
    </div>
  ),
};
