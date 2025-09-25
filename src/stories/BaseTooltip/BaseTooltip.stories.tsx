import type { Meta, StoryObj } from "@storybook/react";

import { BaseTooltip } from "../../../lib/components/BaseTooltip";
import { Button } from "../../../lib/components/Button";

const meta: Meta<typeof BaseTooltip> = {
  component: BaseTooltip,
  tags: ["autodocs"],
  argTypes: {
    text: {
      description:
        "Содержимое тултипа. Может быть строкой или React-компонентом\nПоддерживает переносы строк через `white-space: pre-line`\n",
      control: { type: "text" },
      table: {
        type: { summary: "string | ReactNode" },
      },
    },
    noPadding: {
      description: "Убрать внутренние отступы (padding) тултипа\n",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента тултипа\n",
      control: false,
    },
    classNameContentRoot: {
      description: "Дополнительный CSS-класс для контентной области тултипа\n",
      control: false,
    },
    style: {
      description: "Инлайн-стили для кастомизации позиционирования и внешнего вида\n",
      control: { type: "object" },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Базовый компонент тултипа для отображения всплывающих подсказок.

## Особенности:
- Автоматическая ширина по содержимому (width: max-content)
- Адаптивная максимальная ширина:
  - Мобильные: 300px
  - Планшеты (sm): 450px  
  - Десктоп (xl): 600px
- Минимальная ширина 160px
- Адаптивные отступы:
  - Мобильные: 12px
  - Планшеты и выше: 20px
- Тень для визуального отделения от фона
- Кастомный скроллбар при переполнении
- Поддержка многострочного текста с переносами
- Плавная анимация появления/исчезновения

## Использование:
Компонент обычно используется как часть составных компонентов тултипов.
Для прямого использования требуется ручное управление позиционированием.
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "20vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "relative", border: "1px dashed black", padding: "20px 40px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BaseTooltip>;

export const Default: Story = {
  name: "Default Tooltip",
  args: {
    text: "Дефолтный тултип с базовыми стилями",
    noPadding: false,
  },
};

export const NoPadding: Story = {
  name: "Tooltip Without Padding",
  args: {
    text: "Тултип без внутренних отступов",
    noPadding: true,
  },
};

export const WithCustomStyles: Story = {
  name: "Tooltip with Custom Styles",
  args: {
    text: "Тултип с кастомными стилями",
    style: {
      backgroundColor: "#f0f8ff",
      border: "2px solid #007bff",
      borderRadius: "8px",
    },
  },
};

export const WithReactNode: Story = {
  name: "Tooltip with React Node",
  args: {
    text: (
      <div>
        <strong>Тултип с React-компонентом</strong>
        <br />
        <span style={{ color: "#666" }}>Может содержать любые React-элементы</span>
        <br />
        <Button onClick={() => alert("Кнопка в тултипе!")}>Пример кнопки</Button>
      </div>
    ),
  },
};
