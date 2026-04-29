import type { Meta, StoryObj } from "@storybook/react-vite";
import { EIconName, EllipsisTextWithTooltip, Icon, Text } from "test-stpr-ui-kit";

import styles from "./IconsStories.module.scss";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Компонент иконки для отображения SVG-графики с поддержкой различных стилей и возможностей кастомизации.

## Основные возможности

- **Библиотека иконок**: готовые SVG-иконок для различных сценариев использования
- **Поворот иконок**: возможность вращения на заданный угол
- **Кастомизация цвета**: изменение цвета через стандартные SVG-пропсы
- **Размеры и стили**: полная поддержка всех SVG-атрибутов (width, height, style и т.д.)
- **TypeScript поддержка**: строгая типизация всех доступных иконок

## Базовое использование

\`\`\`jsx
// Простая иконка
<Icon name={EIconName.Trash} />

// Иконка с кастомным цветом
<Icon name={EIconName.Info} color="#007bff" />

// Повернутая иконка
<Icon name={EIconName.ChevronDown} rotate={90} />

// Иконка с измененным размером
<Icon name={EIconName.Plus} width={24} height={24} />
\`\`\`

## Рекомендации по использованию

- Используйте семантически подходящие иконки для действий
- Сохраняйте единообразие размеров иконок в рамках одного интерфейса
- Для интерактивных элементов добавляйте hover-эффекты через CSS
- Используйте rotate для анимации переходов (например, стрелки аккордеона)
        `,
      },
    },
  },
  argTypes: {
    name: {
      description: `Название иконки из доступной библиотеки. Определяет какой SVG будет отображен.\n`,
      control: { type: "select" },
      options: Object.values(EIconName),
      table: {
        type: {
          summary: "EIconName",
        },
      },
    },
    rotate: {
      description: `Угол поворота иконки в градусах. Полезно для анимации стрелок и индикаторов состояния.\n`,
      control: { type: "range", min: 0, max: 360 },
      table: {
        type: { summary: "number" },
      },
    },
    color: {
      description: `Цвет иконки. Переопределяет цвет fill/stroke в SVG. Поддерживает любые CSS-цвета.\n`,
      control: { type: "color" },
      table: {
        type: { summary: "string" },
      },
    },
    width: {
      description: `Ширина иконки. Если не указана, используется размер по умолчанию из SVG.\n`,
      control: { type: "number" },
      table: {
        type: { summary: "number" },
      },
    },
    height: {
      description: `Высота иконки. Если не указана, используется размер по умолчанию из SVG.\n`,
      control: { type: "number" },
      table: {
        type: { summary: "number" },
      },
    },
    style: {
      description: `Инлайн-стили для кастомизации внешнего вида иконки.\n`,
      control: { type: "object" },
      table: {
        type: { summary: "CSSProperties" },
      },
    },
    className: {
      description: `CSS-класс для дополнительной стилизации иконки.\n`,
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  name: "Single Icon",
  args: {
    name: EIconName.Trash,
    color: "#131313",
    width: 24,
    height: 24,
  },
  argTypes: {
    name: {
      control: "select",
      options: Object.values(EIconName),
    },
  },
  render: (args) => {
    return (
      <div key={args.name} className={styles.iconCard}>
        <Icon {...args} />
        <Text classNameRoot={styles.iconCard__iconName}>{args.name}</Text>
      </div>
    );
  },
};

export const Gallery: Story = {
  name: "Icon Gallery",
  args: {
    color: "#131313",
    width: 24,
    height: 24,
  },
  argTypes: {
    name: {
      table: { disable: true },
    },
    color: {
      table: { disable: true },
    },
    rotate: {
      table: { disable: true },
    },
    width: {
      table: { disable: true },
    },
    height: {
      table: { disable: true },
    },
  },
  render: (args) => (
    <div className={styles.gallery}>
      {Object.values(EIconName).map((name) => (
        <div key={name} className={styles.iconCard}>
          <Icon {...args} name={name} />
          <EllipsisTextWithTooltip classNameRoot={styles.iconCard__iconName} text={name} />
        </div>
      ))}
    </div>
  ),
};

export const CustomColors: Story = {
  args: {
    name: EIconName.Info,
    width: 32,
    height: 32,
  },
  render: (args) => (
    <div className={styles.gallery}>
      {[
        { color: "#007bff", label: "Primary Blue" },
        { color: "#28a745", label: "Success Green" },
        { color: "#dc3545", label: "Error Red" },
        { color: "#ffc107", label: "Warning Yellow" },
        { color: "#6c757d", label: "Gray" },
        { color: "#6610f2", label: "Purple" },
      ].map(({ color, label }) => (
        <div key={color} className={styles.iconCard}>
          <Icon {...args} color={color} />
          <Text classNameRoot={styles.iconCard__iconName}>{label}</Text>
          <Text style={{ fontSize: "12px", fontFamily: "monospace" }}>{color}</Text>
        </div>
      ))}
    </div>
  ),
};

export const RotatedIcons: Story = {
  args: {
    color: "#131313",
    width: 24,
    height: 24,
  },
  render: (args) => (
    <div className={styles.gallery}>
      {[
        { rotate: 0, label: "0°" },
        { rotate: 45, label: "45°" },
        { rotate: 90, label: "90°" },
        { rotate: 180, label: "180°" },
        { rotate: 270, label: "270°" },
        { rotate: 360, label: "360°" },
      ].map(({ rotate, label }) => (
        <div key={rotate} className={styles.iconCard}>
          <Icon {...args} name={EIconName.ChevronDown} rotate={rotate} />
          <Text classNameRoot={styles.iconCard__iconName}>{label}</Text>
        </div>
      ))}
    </div>
  ),
};

export const DifferentSizes: Story = {
  args: {
    name: EIconName.PlusCircle,
    color: "#131313",
  },
  render: (args) => (
    <div className={styles.gallery}>
      {[16, 20, 24, 32, 40, 48, 64].map((size) => (
        <div key={size} className={styles.iconCard}>
          <Icon {...args} width={size} height={size} />
          <Text classNameRoot={styles.iconCard__iconName}>{size}px</Text>
        </div>
      ))}
    </div>
  ),
};
