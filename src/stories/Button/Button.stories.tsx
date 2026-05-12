import { Button } from "@components/Button";
import { EIconName } from "@components/Icons";
import type { Meta, StoryObj } from "@storybook/react-vite";

import styles from "./ButtonStories.module.scss";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Универсальная кнопка с вариантами \`primary\`, \`secondary\`, \`text\`, \`link\` и размерами \`md\`/ \`xl\`.

## Основные возможности

- **Четыре варианта стилей**: \`primary\`, \`secondary\`, \`text\`, \`link\`
- **Размеры**: \`md\` и \`xl\`
- **Поддержка иконок**: иконки задаются только через \`startIconName\` и \`endIconName\` (для \`isOnlyIcon\` используется только \`startIconName\`).
- **Состояния**: \`disabled\`, \`loading\`, \`full width\`
- **Типы кнопок**: \`button\`, \`submit\`, \`reset\`

## Базовое использование

\`\`\`jsx
<Button variant="primary" startIconName={EIconName.Plus}>
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
        "Вариант кнопки:\n- 'primary': акцентная\n- 'secondary': вторичная\n- 'text': текстовая с фоном в hover/focus\n- 'link': прозрачная ссылка",
      control: { type: "radio" },
      options: ["primary", "secondary", "text", "link"],
      table: {
        defaultValue: { summary: "primary" },
        type: {
          summary: "TButtonVariant",
          detail: "'primary' | 'secondary' | 'text' | 'link'",
        },
      },
    },
    size: {
      description: "Размер кнопки",
      control: { type: "radio" },
      options: ["md", "xl"],
      table: {
        defaultValue: { summary: "xl" },
        type: {
          summary: "TButtonSize",
          detail: "'md' | 'xl'",
        },
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
      description: "Блокирует кнопку",
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
        type: {
          summary: "TButtonType",
          detail: "'button' | 'submit' | 'reset'",
        },
      },
    },
    form: {
      description: "ID формы для кнопок типа submit/reset. Позволяет управлять формой извне",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    startIconName: {
      description: "Иконка в начале",
      control: { type: "select" },
      options: [...Object.values(EIconName), undefined],
    },
    endIconName: {
      description: "Иконка в конце",
      control: { type: "select" },
      options: [...Object.values(EIconName), undefined],
    },
    startIconRotate: {
      description: "Угол поворота стартовой иконки в градусах. Полезно для анимаций",
      control: { type: "range", min: 0, max: 360 },
      table: {
        defaultValue: { summary: "0" },
      },
    },
    endIconRotate: {
      description: "Угол поворота конечной иконки в градусах. Полезно для анимаций",
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
      table: {
        type: { summary: "string" },
      },
    },
    classNameTextRoot: {
      description: "Дополнительный CSS-класс для корневого элемента содержимого кнопки",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameIconContainerRoot: {
      description: "Дополнительный CSS-класс для контейнера иконки",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "primary",
    size: "xl",
    children: "Default Button",
    type: "button",
    disabled: false,
    isFullWidth: false,
    noPadding: false,
    isOnlyIcon: false,
    startIconName: undefined,
    endIconName: undefined,
    loading: false,
    style: {},
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

export const WithStartIcon: Story = {
  name: "With Start Icon",
  args: {
    variant: "primary",
    startIconName: EIconName.Plus,
    children: "Add Item",
  },
};

export const WithStartAndEndIcon: Story = {
  name: "With Start And End Icon",
  args: {
    variant: "primary",
    startIconName: EIconName.Plus,
    endIconName: EIconName.Plus,
    children: "Primary",
  },
};

export const IconOnly: Story = {
  name: "Only Icon",
  args: {
    variant: "primary",
    startIconName: EIconName.Plus,
    endIconName: EIconName.Trash,
    isOnlyIcon: true,
  },
};

export const LoadingState: Story = {
  name: "Loading",
  args: {
    variant: "primary",
    loading: true,
    children: "Saving...",
  },
};

export const DisabledState: Story = {
  name: "Disabled",
  args: {
    variant: "primary",
    disabled: true,
    children: "Disabled Button",
  },
};

export const FullWidth: Story = {
  name: "Full Width",
  args: {
    variant: "primary",
    isFullWidth: true,
    children: "Full Width Button",
  },
};

export const NoPadding: Story = {
  name: "No Padding",
  args: {
    variant: "primary",
    noPadding: true,
    children: "No Padding",
  },
};

export const SubmitButton: Story = {
  args: {
    variant: "primary",
    type: "submit",
    children: "Submit Form",
  },
};

export const RotatedIcon: Story = {
  name: "With Rotated Icon",
  args: {
    variant: "primary",
    startIconName: EIconName.Trash,
    startIconRotate: 45,
    children: "Delete",
  },
};

export const AllVariants: Story = {
  name: "All Variants Overview",
  render: () => (
    <div className={styles.allVariants}>
      <div className={styles.section}>
        <p className={styles.sectionTitle}>Variants</p>
        <div className={styles.itemsRow}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="text">Text</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.sectionTitle}>Sizes</span>
        <div className={styles.itemsRowAligned}>
          <Button size="md">{`size = "md"`}</Button>
          <Button size="xl">{`size = "xl`}</Button>
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.sectionTitle}>Icons</span>
        <div className={styles.itemsRow}>
          <Button variant="primary" startIconName={EIconName.Plus}>
            Start Icon
          </Button>
          <Button variant="primary" endIconName={EIconName.Trash}>
            End Icon
          </Button>
          <Button variant="primary" startIconName={EIconName.Plus} endIconName={EIconName.Trash}>
            Both Icons
          </Button>
          <Button variant="primary" startIconName={EIconName.Trash} startIconRotate={45}>
            Rotated Icon
          </Button>
          <Button variant="secondary" startIconName={EIconName.Plus} isOnlyIcon />
          <Button variant="secondary" startIconName={EIconName.Plus} isOnlyIcon size={"md"} />
          <Button variant="secondary" startIconName={EIconName.Plus} isOnlyIcon noPadding />
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.sectionTitle}>States</span>
        <div className={styles.itemsRow}>
          <Button variant="primary" loading>
            Loading
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="primary" noPadding startIconName={EIconName.Plus}>
            No Padding
          </Button>
          <Button variant="text" startIconName={EIconName.Plus} loading>
            Loading Text
          </Button>
        </div>
      </div>
    </div>
  ),
};
