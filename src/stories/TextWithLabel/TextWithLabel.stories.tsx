import type { Meta, StoryObj } from "@storybook/react-vite";
import cx from "clsx";
import { TextWithLabel } from "local-stpr-ui-kit";

import styles from "./TextWithLabelStories.module.scss";

const meta: Meta<typeof TextWithLabel> = {
  title: "Components/TextWithLabel",
  component: TextWithLabel,
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
    label: {
      description: `Текст лейбла, отображаемый над основным текстом.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    required: {
      description: `Отображает звездочку (*) для обозначения обязательного поля.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    infoTooltipText: {
      description: `Текст всплывающей подсказки для лейбла.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    tooltipPosition: {
      description: `Позиция всплывающей подсказки относительно лейбла.\n`,
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
      table: {
        type: { summary: "ETooltipPosition" },
      },
    },
    classNameLabelRoot: {
      description: "Дополнительный CSS-класс для корневого элемента лейбла\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameWrapperRoot: {
      description: `Дополнительный CSS-класс для обертки компонента.
При использовании \`isEllipsis=true\` автоматически добавляется модификатор \`spTextWithLabel_ellipsis\`\n`,
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameBaseTooltipRoot: {
      description: "Дополнительный CSS-класс для тултипа лейбла\n",
      control: false,
      table: {
        type: { summary: "string" },
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
      description: "Инлайн-стили для кастомизации внешнего вида\n",
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
      description: `Включить обрезку всего компонента с многоточием при переполнении.
Активирует CSS-свойство width: 100% для обертки и наследует обрезку текста от компонента Text\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    isCursorPointer: {
      description: `Принудительно установить курсор-указатель при наведении.
Игнорируется, если \`onClick\` установлен и \`isCursorPointerByOnClick=true\`\n`,
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
Компонент для отображения текста с лейблом. Сочетает в себе функциональность компонентов Text и Label.

## Особенности:
- **Композиция компонентов** - объединяет Text и Label в единый блок
- **Гибкая настройка лейбла** - поддержка обязательных полей, тултипов и кастомизации
- **Наследование всех свойств Text** - полная поддержка типографической системы
- **Адаптивный дизайн** - согласованное поведение на всех устройствах
- **Поддержка обрезки** - \`isEllipsis\` применяется ко всему компоненту, устанавливая ширину 100%

## Использование:
Идеально подходит для форм, карточек и любых интерфейсов, где требуется отображение данных с подписью.

### Базовое использование

\`\`\`jsx
<TextWithLabel 
  label="Имя пользователя"
  type="p1"
>
  Джон Доу
</TextWithLabel>
\`\`\`

### С дополнительными свойствами лейбла

\`\`\`jsx
<TextWithLabel 
  label="Email"
  required={true}
  infoTooltipText="Введите действующий email адрес"
  type="p1"
>
  john.doe@example.com
</TextWithLabel>
\`\`\`

### С обрезкой текста

\`\`\`jsx
<TextWithLabel 
  label="Длинное описание"
  isEllipsis={true}
>
  Очень длинный текст который будет обрезан, если не поместится в контейнер
</TextWithLabel>
\`\`\`
        `,
      },
    },
  },
  args: {
    label: "Label",
    children: "Text With Label",
    isCursorPointer: false,
    infoTooltipText: "",
    required: false,
    isEllipsis: false,
    isCursorPointerByOnClick: true,
    title: "Text With Label",
  },
  render: (args) => {
    return (
      <div className={styles.textList}>
        <TextWithLabel {...args} type={"h1"}>
          {`${args.children} with type="h1"`}
        </TextWithLabel>
        <TextWithLabel {...args} type={"h3"}>
          {`${args.children} with type="h3"`}
        </TextWithLabel>
        <TextWithLabel {...args} type={"p1"}>
          {`${args.children} with type="p1"`}
        </TextWithLabel>
        <TextWithLabel {...args} type={"p2"}>
          {`${args.children} with type="p2"`}
        </TextWithLabel>
        <TextWithLabel {...args} type={"description"}>
          {`${args.children} with type="description"`}
        </TextWithLabel>
        <TextWithLabel {...args} type={"link"}>
          {`${args.children} with type="link"`}
        </TextWithLabel>
        <TextWithLabel {...args}>{`${args.children} without parameter type`}</TextWithLabel>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof TextWithLabel>;

export const Default: Story = {
  name: "Default Text With Label",
};

export const WithRequiredField: Story = {
  name: "Required Field",
  args: {
    label: "Обязательное поле",
    required: true,
    children: "Значение поля",
    type: "p1",
  },
  render: (args) => <TextWithLabel {...args} />,
};

export const WithTooltip: Story = {
  args: {
    label: "Поле с подсказкой",
    infoTooltipText: "Это поле требует специального формата ввода",
    children: "Значение поля",
    type: "p1",
  },
  render: (args) => <TextWithLabel {...args} />,
};

export const WithRequiredAndTooltip: Story = {
  name: "Required Field with Tooltip",
  args: {
    label: "Обязательное поле с подсказкой",
    required: true,
    infoTooltipText: "Это поле обязательно для заполнения и требует специального формата",
    children: "Значение поля",
    type: "p1",
  },
  render: (args) => <TextWithLabel {...args} />,
};

export const WithEllipsis: Story = {
  name: "Text With Label with Ellipsis",
  args: {
    label: "Длинный текст с обрезкой",
    children:
      "Очень длинный текст который не помещается в одну строку и будет обрезан с многоточием",
    isEllipsis: true,
  },
  render: (args) => (
    <div className={styles.withEllipsis}>
      <TextWithLabel {...args} />
    </div>
  ),
};

export const ClickableText: Story = {
  name: "Clickable Text With Label",
  args: {
    label: "Кликаемый текст",
    children: "Нажми меня для действия",
    onClick: () => alert("Текст был кликнут!"),
  },
  render: (args) => <TextWithLabel {...args} />,
};

export const CustomColor: Story = {
  name: "Text With Label with Custom Color",
  args: {
    label: "Цветной текст",
    children: "Текст с кастомным цветом",
    color: "#ff6b6b",
    type: "h3",
  },
  render: (args) => <TextWithLabel {...args} />,
};

export const AllTypesWithAdvancedLabels: Story = {
  name: "All Types with Advanced Labels",
  args: {
    children: "Пример текста",
  },
  render: (args) => (
    <div className={styles.textList}>
      <TextWithLabel {...args} label="Заголовок H1 (обязательный)" required={true} type="h1">
        Главный заголовок страницы
      </TextWithLabel>
      <TextWithLabel
        {...args}
        label="Заголовок H3 с подсказкой"
        infoTooltipText="Это подзаголовок раздела"
        type="h3"
      >
        Подзаголовок раздела
      </TextWithLabel>
      <TextWithLabel {...args} label="Основной текст" type="p1">
        Основной контент страницы с важной информацией
      </TextWithLabel>
      <TextWithLabel {...args} label="Второстепенный текст" type="p2">
        Дополнительная информация меньшей важности
      </TextWithLabel>
      <TextWithLabel {...args} label="Описание (обязательное)" required={true} type="description">
        Подробное описание элемента или процесса
      </TextWithLabel>
      <TextWithLabel {...args} label="Ссылка для перехода" type="link">
        Кликабельная ссылка на внешний ресурс
      </TextWithLabel>
      <TextWithLabel {...args} label="Стандартный текст">
        Текст без специального типа
      </TextWithLabel>
    </div>
  ),
};

export const EllipsisCombinations: Story = {
  args: {
    label: "Лейбл",
    children: "Текст содержимого",
  },
  render: (args) => (
    <div className={cx(styles.textList, styles.textList_ellipsis)}>
      <TextWithLabel {...args} label="Обычный текст" isEllipsis={false}>
        Этот текст не обрезается
      </TextWithLabel>
      <TextWithLabel {...args} label="Текст с обрезкой" isEllipsis={true}>
        Этот текст будет обрезан если не поместится
      </TextWithLabel>
      <TextWithLabel
        {...args}
        label="Обязательное поле с обрезкой"
        required={true}
        isEllipsis={true}
      >
        Обязательное поле с длинным текстом который обрезается
      </TextWithLabel>
      <TextWithLabel
        {...args}
        label="Поле с тултипом и обрезкой"
        infoTooltipText="Это поле имеет обрезку текста"
        isEllipsis={true}
      >
        Текст с подсказкой и обрезкой содержимого
      </TextWithLabel>
    </div>
  ),
};
