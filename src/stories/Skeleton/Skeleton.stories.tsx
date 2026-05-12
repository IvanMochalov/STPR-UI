import { Skeleton } from "@components/Skeleton";
import { Text } from "@components/Text";
import type { Meta, StoryObj } from "@storybook/react-vite";

import styles from "./SkeletonStories.module.scss";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    startColor: {
      description: `Начальный цвет градиента анимации. По умолчанию используется цвет из дизайн-системы.\n`,
      control: { type: "color" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"#e6e6e6"' },
      },
    },
    endColor: {
      description: `Конечный цвет градиента анимации. По умолчанию используется белый цвет.\n`,
      control: { type: "color" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"#ffffff"' },
      },
    },
    width: {
      description: `Ширина скелетона. Может быть задана в пикселях, процентах или других CSS-единицах.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: '"100%"' },
      },
    },
    height: {
      description: `Высота скелетона. Может быть задана в пикселях, процентах или других CSS-единицах.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: '"1rem"' },
      },
    },
    circle: {
      description: `Сделать скелетон круглым. Игнорирует стандартные скругления и создает идеальный круг.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента скелетона\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    style: {
      description: `Инлайн-стили для кастомизации внешнего вида скелетона.\n`,
      control: { type: "object" },
      table: {
        type: { summary: "CSSProperties" },
      },
    },
  },
  parameters: {
    docs: {
      controls: {
        sort: "none",
      },
      description: {
        component: `
Компонент скелетона предназначен для отображения плейсхолдера контента во время загрузки.

## Особенности:
- **Анимированный шиммер** - плавная анимация с градиентным перемещением
- **Настраиваемые цвета** - кастомизация начального и конечного цвета градиента
- **Гибкие размеры** - поддержка любых CSS-единиц измерения
- **Круглая форма** - возможность создания круглых плейсхолдеров
- **Простая кастомизация** - базовые пропсы для быстрой настройки
- **Производительность** - легковесная реализация без лишних зависимостей

## Визуальные эффекты:
- **Градиентная анимация** - плавное перемещение светлой полосы по темному фону
- **Настраиваемые цвета** - возможность задать кастомные цвета для градиента
- **Настраиваемая скорость** - стандартная длительность анимации 2 секунды
- **Бесконечное повторение** - анимация продолжается пока отображается скелетон

## Цветовая схема:
- **startColor** - базовый цвет скелетона, определяет темную часть градиента
- **endColor** - цвет "свечения", определяет светлую движущуюся часть градиента
- По умолчанию используются цвета из дизайн-системы: \`#e6e6e6\` → \`#ffffff\`

## Рекомендации по использованию:
Используйте для улучшения пользовательского опыта во время загрузки контента.

### Базовое использование

\`\`\`jsx
// Простой прямоугольный скелетон
<Skeleton width="200px" height="20px" />

// Круглый скелетон для аватаров
<Skeleton width="40px" height="40px" circle={true} />

// Скелетон с кастомными стилями
<Skeleton 
  width="100%" 
  height="100px" 
  style={{ marginBottom: "16px" }}
/>

// Скелетон с кастомными цветами
<Skeleton 
  width="300px" 
  height="24px" 
  startColor="#d1d1d1" 
  endColor="#f0f0f0" 
/>

// Темная тема
<Skeleton 
  width="250px" 
  height="18px" 
  startColor="#333333" 
  endColor="#555555" 
/>
\`\`\`
        `,
      },
    },
  },
  args: {
    width: "100%",
    height: "1rem",
    circle: false,
    startColor: "#e6e6e6",
    endColor: "#ffffff",
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  name: "Default Skeleton",
  args: {
    width: "400px",
    height: "100px",
  },
};

export const CircleSkeletons: Story = {
  render: () => {
    return (
      <div className={styles.circleSkeletons}>
        <div className={styles.circleSkeletons__item}>
          <Skeleton width="40px" height="40px" circle={true} />
          <Text classNameRoot={styles.circleSkeletons__item__description}>40px</Text>
        </div>

        <div className={styles.circleSkeletons__item}>
          <Skeleton width="60px" height="60px" circle={true} />
          <Text classNameRoot={styles.circleSkeletons__item__description}>60px</Text>
        </div>

        <div className={styles.circleSkeletons__item}>
          <Skeleton width="80px" height="80px" circle={true} />
          <Text classNameRoot={styles.circleSkeletons__item__description}>80px</Text>
        </div>

        <div className={styles.circleSkeletons__item}>
          <Skeleton width="100px" height="100px" circle={true} />
          <Text classNameRoot={styles.circleSkeletons__item__description}>100px</Text>
        </div>
      </div>
    );
  },
};

export const CardSkeleton: Story = {
  render: () => {
    return (
      <div
        style={{
          border: "1px solid #e9ecef",
          borderRadius: "8px",
          padding: "20px",
          width: "300px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <Skeleton width="48px" height="48px" circle={true} />
          <div style={{ flex: 1 }}>
            <Skeleton width="80%" height="16px" style={{ marginBottom: "8px" }} />
            <Skeleton width="60%" height="12px" />
          </div>
        </div>

        <Skeleton width="100%" height="120px" style={{ marginBottom: "12px" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Skeleton width="100%" height="14px" />
          <Skeleton width="90%" height="14px" />
          <Skeleton width="95%" height="14px" />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
          <Skeleton width="80px" height="32px" />
          <Skeleton width="60px" height="32px" />
        </div>
      </div>
    );
  },
};

export const WithCustomStyles: Story = {
  name: "Skeleton with Custom Styles",
  args: {
    width: "150px",
    height: "28px",
    classNameRoot: styles.customStylesSkeleton,
  },
  render: (args) => {
    return (
      <div className={styles.customStylesSkeletonWrapper}>
        <Text type={"description"}>Кастомизация</Text>
        <Skeleton {...args} />
      </div>
    );
  },
};

export const CustomColors: Story = {
  name: "Skeleton with Custom Colors",
  render: () => {
    return (
      <div className={styles.customColorsSkeletonWrapper}>
        <div className={styles.customStylesSkeletonWrapper}>
          <Text type={"description"}>Светлая тема</Text>
          <Skeleton width="200px" height="20px" startColor="#e6e6e6" endColor="#ffffff" />
        </div>

        <div className={styles.customStylesSkeletonWrapper}>
          <Text type={"description"}>Темная тема</Text>
          <Skeleton width="200px" height="20px" startColor="#333333" endColor="#555555" />
        </div>

        <div className={styles.customStylesSkeletonWrapper}>
          <Text type={"description"}>Синяя тема</Text>
          <Skeleton width="200px" height="20px" startColor="#d1e3f8" endColor="#e8f2ff" />
        </div>

        <div className={styles.customStylesSkeletonWrapper}>
          <Text type={"description"}>Зеленая тема</Text>
          <Skeleton width="200px" height="20px" startColor="#d1f2eb" endColor="#e8f9f5" />
        </div>
      </div>
    );
  },
};
