import { Text } from "@components/Text";
import type { Meta, StoryObj } from "@storybook/react-vite";

import styles from "./TextStories.module.scss";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: `Типографический стиль текста. Определяет размер, шрифт и начертание:
- "h1" - заголовок первого уровня (28px на мобильных, 48px на планшетах+)
- "h3" - заголовок третьего уровня (24px на мобильных, 36px на планшетах+)
- "p1" - основной параграф (16px на мобильных, 20px на планшетах+)
- "p2" - вторичный параграф (16px на всех устройствах)
- "description" - описание (14px на мобильных, 16px на планшетах+)
- "link" - стиль ссылки (16px на мобильных, 18px на планшетах+)\n`,
      control: { type: "select" },
      options: ["h1", "h3", "p1", "p2", "description", "link"],
      table: {
        type: {
          summary: "TTextType",
          detail: '"h1" | "h3" | "p1" | "p2" | "description" | "link"',
        },
      },
    },
    children: {
      description: `Содержимое текстового элемента. Может быть строкой или React-компонентом.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string | ReactNode" },
      },
    },
    color: {
      description: `Кастомный цвет текста. Переопределяет стандартные цвета типографики.\n`,
      control: { type: "color" },
      table: {
        type: { summary: "string" },
      },
    },
    title: {
      description: `Текст всплывающей подсказки при наведении (HTML-атрибут title).\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента текста\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    style: {
      description: "Инлайн-стили для кастомизации внешнего вида текста\n",
      control: { type: "object" },
      table: {
        type: { summary: "React.CSSProperties" },
      },
    },
    onClick: {
      description: `Callback-функция, вызываемая при клике на текстовый элемент.
Автоматически добавляет курсор-указатель если \`isCursorPointerByOnClick=true\`\n`,
      control: false,
      table: {
        type: { summary: "(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void" },
      },
    },
    isEllipsis: {
      description: `Включить обрезку текста с многоточием при переполнении.
Активирует CSS-свойства: white-space: nowrap, overflow: hidden, text-overflow: ellipsis\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    isCursorPointer: {
      description: `Принудительно установить курсор-указатель при наведении.
Игнорируется если \`onClick\` установлен и \`isCursorPointerByOnClick=true\`\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    ref: {
      control: false,
    },
    isCursorPointerByOnClick: {
      description: `Автоматически добавлять курсор-указатель при наличии \`onClick\` обработчика.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Базовый текстовый компонент для типографики с поддержкой различных стилей и адаптивным дизайном.

## Особенности:
- **Адаптивная типографика** - размеры шрифтов изменяются на разных \`breakpoints\`
- **Два шрифта** - основной \`(--spui-font-family-main)\` и заголовочный \`(--spui-font-family-title)\`
- **Автоматический \`cursor pointer\`** при наличии обработчика клика
- **Поддержка обрезки текста** с многоточием через \`isEllipsis\`

## Типографическая система:
- **Заголовки (h1, h3)** - используют шрифт заголовков с жирным начертанием
- **Параграфы (p1, p2)** - основной контент с адаптивными размерами
- **Описания (description)** - мелкий текст для дополнительной информации
- **Ссылки (link)** - стилизованные как кликабельные элементы

## Адаптивность:
Все типы текста адаптируются под разные разрешения устройств

## Рекомендации по использованию:
Используйте для всего текстового контента для обеспечения единообразия типографики.

### Базовое использование

\`\`\`jsx
<Text>Заголовок страницы</Text>
<Text type="h1">Заголовок страницы</Text>
<Text type="h3">Заголовок страницы</Text>
<Text type="p1">Основной текст контента</Text>
<Text type="p2">Основной текст контента</Text>
<Text type="link" onClick={handleClick}>Кликаемая ссылка</Text>
<Text type="description">Кликаемая ссылка</Text>
<Text isEllipsis>Длинный текст который будет обрезан если не поместится</Text>
\`\`\`
        `,
      },
    },
  },
  args: {
    children: "Text",
    isCursorPointer: false,
    isEllipsis: false,
    isCursorPointerByOnClick: true,
    title: "Text",
  },
  render: (args) => {
    return (
      <div className={styles.typesColumn}>
        <Text {...args} type={"h1"}>
          {`${args.children} with type="h1"`}
        </Text>
        <Text {...args} type={"h3"}>
          {`${args.children} with type="h1"`}
        </Text>
        <Text {...args} type={"p1"}>
          {`${args.children} with type="p1"`}
        </Text>
        <Text {...args} type={"p2"}>
          {`${args.children} with type="p2"`}
        </Text>
        <Text {...args} type={"description"}>
          {`${args.children} with type="description"`}
        </Text>
        <Text {...args} type={"link"}>
          {`${args.children} with type="link"`}
        </Text>
        <Text {...args}>{`${args.children} without parameter type`}</Text>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  name: "Default Text",
};

export const WithEllipsis: Story = {
  name: "Text with Ellipsis",
  args: {
    children:
      "Очень длинный текст который не помещается в одну строку и будет обрезан с многоточием",
    isEllipsis: true,
  },
  render: (args) => (
    <div className={styles.ellipsisBox}>
      <Text {...args} />
    </div>
  ),
};

export const ClickableText: Story = {
  args: {
    children: "Кликаемый текст (нажми меня)",
    onClick: () => alert("Текст был кликнут!"),
  },
  render: (args) => <Text {...args} />,
};

export const CustomColor: Story = {
  name: "Text with Custom Color",
  args: {
    children: "Текст с кастомным цветом",
    color: "#ff6b6b",
    type: "h3",
  },
  render: (args) => <Text {...args} />,
};

export const WithTitle: Story = {
  name: "Text with Title Attribute",
  args: {
    children: "Наведи курсор чтобы увидеть подсказку",
    title: "Это всплывающая подсказка с дополнительной информацией",
  },
  render: (args) => <Text {...args} />,
};

export const AllTypes: Story = {
  name: "All Text Types",
  args: {
    children: "Пример текста",
  },
  render: (args) => (
    <div className={styles.allTypesColumn}>
      <Text {...args} type="h1">
        Заголовок H1 - Главный заголовок
      </Text>
      <Text {...args} type="h3">
        Заголовок H3 - Подзаголовок
      </Text>
      <Text {...args} type="p1">
        Параграф P1 - Основной текст
      </Text>
      <Text {...args} type="p2">
        Параграф P2 - Второстепенный текст
      </Text>
      <Text {...args} type="description">
        Описание - Дополнительная информация
      </Text>
      <Text {...args} type="link">
        Ссылка - Кликаемый элемент
      </Text>
      <Text {...args}>Без типа - Стандартный текст</Text>
    </div>
  ),
};
