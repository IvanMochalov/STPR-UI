import type { Meta, StoryObj } from "@storybook/react";

import { ProtectedRoute } from "../../../lib/components/ProtectedRoute";

const meta: Meta<typeof ProtectedRoute> = {
  component: ProtectedRoute,
  tags: ["autodocs"],
  argTypes: {
    // text: {
    //   description:
    //     "Содержимое тултипа. Может быть строкой или React-компонентом\nПоддерживает переносы строк через `white-space: pre-line`\n",
    //   control: { type: "text" },
    //   table: {
    //     type: { summary: "string | ReactNode" },
    //   },
    // },
    // noPadding: {
    //   description: "Убрать внутренние отступы (padding) тултипа\n",
    //   control: { type: "boolean" },
    //   table: {
    //     defaultValue: { summary: "false" },
    //   },
    // },
    // classNameRoot: {
    //   description: "Дополнительный CSS-класс для корневого элемента тултипа\n",
    //   control: false,
    // },
    // classNameContentRoot: {
    //   description: "Дополнительный CSS-класс для контентной области тултипа\n",
    //   control: false,
    // },
    // style: {
    //   description: "Инлайн-стили для кастомизации позиционирования и внешнего вида\n",
    //   control: { type: "object" },
    // },
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

## Рекомендации по использованию:
Компонент обычно используется как часть составных компонентов тултипов.
Для прямого использования требуется ручное управление позиционированием.

### Базовое использование

\`\`\`jsx
<BaseTooltip
  text={"Текст для всплывающего сообщения"}
/>
\`\`\`
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

type Story = StoryObj<typeof ProtectedRoute>;

export const Default: Story = {
  name: "Default ProtectedRoute",
  args: {
    text: "Дефолтный тултип с базовыми стилями",
    noPadding: false,
    isNeedAuthorized: true,
    children: "Контент доступный только авторизованному пользователю",
  },
};
