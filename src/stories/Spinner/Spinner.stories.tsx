import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../../lib/components/Button";
import { Spinner } from "../../../lib/components/Spinner";
import { Text } from "../../../lib/components/Text";
import mainStyles from "../Stories.module.scss";
import styles from "./SpinnerStories.module.scss";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: `Размер спиннера. Доступные варианты:\n- "sm" - маленький (16px)\n- "md" - средний (24px, по умолчанию)\n- "lg" - большой (32px)\n- "xl" - очень большой (48px)\n`,
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: "SpinnerSize",
          detail: "'sm' | 'md' | 'lg' | 'xl'",
        },
        defaultValue: { summary: '"md"' },
      },
    },
    color: {
      description: `Цвет спиннера. Может быть задан в любом CSS-формате (hex, rgb, hsl, имя цвета).\n`,
      control: { type: "color" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"#036bfd"' },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента спиннера\n",
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
Компонент спиннера для отображения индикатора загрузки с плавной анимацией.

## Особенности:
- **Плавная анимация** - двойная анимация вращения и клиппинга для визуально приятного эффекта
- **Четыре размера** - от маленького до очень большого для разных контекстов использования
- **Настраиваемый цвет** - поддержка любых CSS-цветов через свойство color
- **Доступность** - встроенные ARIA-атрибуты для screen readers
- **CSS-переменные** - гибкая настройка через CSS Custom Properties
- **Производительность** - оптимизированная анимация с использованием CSS transforms

## Визуальные эффекты:
- **Вращение** - непрерывное вращение внешнего контейнера
- **Клиппинг-анимация** - плавное раскрытие и закрытие сегментов круга
- **Адаптивная толщина** - толщина линии увеличивается с размером спиннера
- **Плавность** - анимации используют ease-in-out для естественного движения

## Размеры и толщина:
- **sm**: диаметр 16px - толщина 2px
- **md**: диаметр 24px - толщина 3px
- **lg**: диаметр 32px - толщина 4px
- **xl**: диаметр 48px - толщина 5px

## Рекомендации по использованию:
Используйте для индикации процессов загрузки, обработки данных или ожидания действий.\n
Компонент \`Spinner\` уже используется в компоненте \`Button\` с параметром \`loading={true}\`)

### Базовое использование

\`\`\`jsx
// Стандартный спиннер
<Spinner />

// Спиннер определенного размера
<Spinner size="lg" />

// Спиннер с кастомным цветом
<Spinner color="#ff6b6b" />

// Спиннер с дополнительными классами
<Spinner 
  size="xl" 
  color="var(--accent-color)" 
  classNameRoot="custom-spinner"
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
    size: "md",
    color: "#036bfd",
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  name: "Default Spinner",
  args: {
    size: "md",
    color: "#036bfd",
  },
};

export const AllSizes: Story = {
  name: "All Spinner Sizes",
  render: () => {
    return (
      <div className={styles.allSizesSpinnerWrapper}>
        <div className={styles.listItemWrapper}>
          <Spinner size="sm" />
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>
            Small (16px)
          </Text>
        </div>
        <div className={styles.listItemWrapper}>
          <Spinner size="md" />
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>
            Medium (24px)
          </Text>
        </div>
        <div className={styles.listItemWrapper}>
          <Spinner size="lg" />
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>
            Large (32px)
          </Text>
        </div>
        <div className={styles.listItemWrapper}>
          <Spinner size="xl" />
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>
            X-Large (48px)
          </Text>
        </div>
      </div>
    );
  },
};

export const CustomColors: Story = {
  name: "Spinner with Custom Colors",
  render: () => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "24px",
          padding: "20px",
        }}
      >
        <div className={styles.listItemWrapper}>
          <Spinner color="#036bfd" />
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>
            Primary Blue
          </Text>
        </div>
        <div className={styles.listItemWrapper}>
          <Spinner color="#28a745" />
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>
            Success Green
          </Text>
        </div>
        <div className={styles.listItemWrapper}>
          <Spinner color="#dc3545" />
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>
            Error Red
          </Text>
        </div>
        <div className={styles.listItemWrapper}>
          <Spinner color="#ffc107" />
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>
            Warning Yellow
          </Text>
        </div>
        <div className={styles.listItemWrapper}>
          <Spinner color="#6f42c1" />
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>
            Purple
          </Text>
        </div>
        <div className={styles.listItemWrapper}>
          <Spinner color="#fd7e14" />
          <Text type={"description"} classNameRoot={styles.listItemWrapper__description}>
            Orange
          </Text>
        </div>
      </div>
    );
  },
};

export const ButtonLoading: Story = {
  name: "Spinner in Button Loading State",
  render: () => {
    return <Button loading={true}>Загрузка...</Button>;
  },
};
