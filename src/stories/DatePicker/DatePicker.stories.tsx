import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { DatePicker } from "../../../lib/components/DatePicker";
import { TOnChangeDatePicker } from "../../../lib/components/DatePicker/types";
import mainStyles from "../Stories.module.scss";
import localStyles from "./DatePickerStories.module.scss";
import cx from "clsx";

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
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
    //   table: {
    //     type: { summary: "string" },
    //   },
    // },
    // classNameContentRoot: {
    //   description: "Дополнительный CSS-класс для контентной области тултипа\n",
    //   control: false,
    //   table: {
    //     type: { summary: "string" },
    //   },
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
      <div className={cx(mainStyles.storyWrapper, localStyles.storiesWrapper)}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  name: "Default DatePicker",
  args: {
    size: "lg",
    dateFormat: "dd.MM.yyyy",
    dateFormatMask: "99.99.9999",
    placeholderText: "дд.мм.гггг",
    variant: "outlined",
    isClearable: true,
    disabled: false,
    error: "",
    required: true,
    label: "Дата выдачи",
    readOnlyInput: false,
    focused: false,
    changed: false,
    shouldCloseOnSelect: true,
  },
  render: (args) => {
    const [formData, setFormData] = useState({
      createAt: null,
    });
    console.log("formData: -->", formData);

    const onChange: TOnChangeDatePicker = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    return (
      <DatePicker {...args} name="createAt" selected={formData.createAt} onChange={onChange} />
    );
  },
};
