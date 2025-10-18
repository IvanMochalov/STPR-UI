import type { Meta, StoryObj } from "@storybook/react-vite";

import { EllipsisTextWithTooltip } from "../../../lib/test-stpr-ui-kit.ts";
import mainStyles from "../Stories.module.scss";

const meta: Meta<typeof EllipsisTextWithTooltip> = {
  title: "Components/EllipsisTextWithTooltip",
  component: EllipsisTextWithTooltip,
  tags: ["autodocs"],
  argTypes: {
    text: {
      description: `Текст для отображения. При переполнении контейнера будет обрезан с многоточием и покажет тултип при наведении.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
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
      description: "Дополнительный CSS-класс для корневого элемента компонента\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameTooltipRoot: {
      description: "Дополнительный CSS-класс для корневого элемента тултипа (триггера)\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameBaseTooltipContentRoot: {
      description: "Дополнительный CSS-класс для контентной области базового тултипа\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameBaseTooltipRoot: {
      description: "Дополнительный CSS-класс для корневого элемента базового тултипа\n",
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
    isCursorPointer: {
      description: `Принудительно установить курсор-указатель при наведении.
Игнорируется если \`onClick\` установлен и \`isCursorPointerByOnClick=true\`\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    isCursorPointerByOnClick: {
      description: `Автоматически добавлять курсор-указатель при наличии \`onClick\` обработчика.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    isWithFixedEnd: {
      description: `Показывать окончание текста (например, расширение файла) при обрезке.
Полезно для отображения имен файлов, где важно видеть расширение даже при обрезанном названии.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    defaultTooltipPosition: {
      description: `Позиция тултипа относительно текста. Определяет где будет отображаться тултип при наведении.\n`,
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
      table: {
        type: { summary: "ETooltipPosition" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Компонент для отображения текста с автоматическим определением переполнения и показом тултипа с полным текстом при наведении.

## Особенности:
- **Автоматическое определение переполнения** - проверяет, обрезан ли текст через сравнение \`scrollWidth\` и \`clientWidth\`
- **Умный тултип** - показывается только когда текст действительно обрезан
- **Наследование всех свойств Text** - поддерживает все типографические стили и пропсы
- **Автоматическая обрезка** - всегда включает \`isEllipsis=true\` для текста
- **Производительность** - проверка переполнения происходит только при изменении текста
- **Фиксированный конец текста** - опция \`isWithFixedEnd\` позволяет отображать окончание текста (например, расширение файла) при обрезке

## Поведение:
- Компонент автоматически определяет, помещается ли текст в доступную ширину
- Если текст обрезан (появляется многоточие), при наведении показывается тултип с полным текстом
- Если текст полностью помещается, тултип не отображается даже при наведении
- При \`isWithFixedEnd=true\` окончание текста (последнее слово или расширение файла) отображается после многоточия
- Поддерживает все типографические стили родительского Text компонента

## Рекомендации по использованию:
Идеально подходит для таблиц, карточек и любых контейнеров с ограниченной шириной, где текст может быть обрезан.

### Базовое использование

\`\`\`jsx
<div style={{ width: "200px" }}>
  <EllipsisTextWithTooltip 
    text="Очень длинный текст который может не поместиться в контейнер"
    type="h1"
  />
</div>
\`\`\`

### С фиксированным окончанием (для файлов)

\`\`\`jsx
<div style={{ width: "150px" }}>
  <EllipsisTextWithTooltip 
    text="очень-длинное-название-файла-с-расширением.pdf"
    isWithFixedEnd={true}
    type="p2"
  />
</div>
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
    text: "Ellipsis Text With Tooltip",
    title: "Ellipsis Text With Tooltip",
    isCursorPointer: false,
    isCursorPointerByOnClick: true,
    isWithFixedEnd: false,
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "20px",
          maxWidth: "380px",
        }}
      >
        <EllipsisTextWithTooltip {...args} type={"h1"} text={`${args.text} with type="h1"`} />
        <EllipsisTextWithTooltip {...args} type={"h3"} text={`${args.text} with type="h1"`} />
        <EllipsisTextWithTooltip {...args} type={"p1"} text={`${args.text} with type="p1"`} />
        <EllipsisTextWithTooltip {...args} type={"p2"} text={`${args.text} with type="p2"`} />
        <EllipsisTextWithTooltip
          {...args}
          type={"description"}
          text={`${args.text} with type="description"`}
        />
        <EllipsisTextWithTooltip {...args} type={"link"} text={`${args.text} with type="link"`} />
        <EllipsisTextWithTooltip {...args} text={`${args.text} without parameter type`} />

        <EllipsisTextWithTooltip
          {...args}
          isWithFixedEnd={true}
          text={`${args.text}, with long text and fixed end!`}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof EllipsisTextWithTooltip>;

export const Default: Story = {
  name: "Default Ellipsis Text With Tooltip",
};

export const WithLongText: Story = {
  name: "Long Text with Tooltip",
  args: {
    text: "Очень длинный текст который точно не поместится в ограниченный контейнер и будет обрезан с многоточием",
  },
  render: (args) => (
    <div style={{ width: "200px", border: "1px solid #eee", padding: "10px" }}>
      <EllipsisTextWithTooltip {...args} />
      <div style={{ marginTop: "10px", fontSize: "12px", color: "#666" }}>
        (Наведите на текст чтобы увидеть тултип)
      </div>
    </div>
  ),
};

export const TextWithFixEnd: Story = {
  name: "Text with fixed end",
  args: {
    isWithFixedEnd: true,
    text: "SomeLongNameOfExampleFile.pdf",
  },
  render: (args) => (
    <div style={{ width: "200px", border: "1px solid #eee", padding: "10px" }}>
      <EllipsisTextWithTooltip {...args} />
      <div style={{ marginTop: "10px", fontSize: "12px", color: "#666" }}>
        (Наведите на текст чтобы увидеть тултип)
      </div>
    </div>
  ),
};

export const WithShortText: Story = {
  name: "Short Text without Tooltip",
  args: {
    text: "Короткий текст",
  },
  render: (args) => (
    <div style={{ width: "200px", border: "1px solid #eee", padding: "10px" }}>
      <EllipsisTextWithTooltip {...args} />
      <div style={{ marginTop: "10px", fontSize: "12px", color: "#666" }}>
        (Тултип не покажется - текст помещается)
      </div>
    </div>
  ),
};

export const ClickableWithTooltip: Story = {
  name: "Clickable Text with Tooltip",
  args: {
    text: "Кликаемый текст с тултипом при обрезке",
    onClick: () => alert("Текст был кликнут!"),
  },
  render: (args) => (
    <div style={{ width: "150px", border: "1px solid #eee", padding: "10px" }}>
      <EllipsisTextWithTooltip {...args} />
    </div>
  ),
};

export const CustomColor: Story = {
  name: "Custom Color with Tooltip",
  args: {
    text: "Текст с кастомным цветом который будет обрезан",
    color: "#ff6b6b",
    type: "p1",
  },
  render: (args) => (
    <div style={{ width: "200px", border: "1px solid #eee", padding: "10px" }}>
      <EllipsisTextWithTooltip {...args} />
    </div>
  ),
};
