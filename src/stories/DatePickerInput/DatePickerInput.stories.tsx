import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { DatePickerInput, TOnChangeDatePickerInput } from "../../../lib/components/DatePickerInput";
import mainStyles from "../Stories.module.scss";

const meta: Meta<typeof DatePickerInput> = {
  component: DatePickerInput,
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      description: `Callback-функция, вызываемая при изменении значения поля ввода даты.
Получает два параметра:
- event: стандартное React событие ChangeEvent<HTMLInputElement>
- data: объект с именем поля и новым значением

Особенности:
- Значение всегда передается как \`string\` в формате маски
- Работает с маской ввода для обеспечения корректного формата даты
- Для работы с формами рекомендуется использовать вместе с состоянием React\n`,
      control: false,
      table: {
        type: {
          detail:
            "(event: React.ChangeEvent<HTMLInputElement>,\n" +
            "data: {\n" +
            "  name: string;\n" +
            "  value: string | null;\n" +
            "}) => void",
          summary: "TOnChangeDatePickerInput",
        },
      },
    },
    variant: {
      description: `Вариант стиля поля ввода даты:\n- "outlined" - с границей (по умолчанию)\n- "filled" - с заполненным фоном\n`,
      control: { type: "select" },
      options: ["outlined", "filled"],
      table: {
        type: { summary: "TDatePickerInputVariant", detail: "'outlined' | 'filled'" },
        defaultValue: { summary: '"outlined"' },
      },
    },
    size: {
      description: `Размер поля ввода даты:\n- "md" - средний размер\n- "lg" - большой размер (по умолчанию)\n`,
      control: { type: "select" },
      options: ["md", "lg"],
      table: {
        type: { summary: "TDatePickerInputSize", detail: "'md' | 'lg'" },
        defaultValue: { summary: '"lg"' },
      },
    },
    disabled: {
      description: `Отключить поле ввода даты. Заблокирует взаимодействие и изменит визуальный стиль.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    dateFormatMask: {
      description: `Маска для форматирования ввода даты. Может быть строкой или массивом строк/регулярных выражений.\nПо умолчанию: "99.99.9999" (формат ДД.ММ.ГГГГ)\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string | (string | RegExp)[]" },
        defaultValue: { summary: '"99.99.9999"' },
      },
    },
    error: {
      description: `Текст ошибки валидации. Подсвечивает поле красным и показывает сообщение об ошибке.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    placeholderText: {
      description: `Текст-подсказка внутри поля когда значение отсутствует.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Выберите дату"' },
      },
    },
    readOnlyInput: {
      description: `Сделать поле только для чтения. Блокирует прямое редактирование, но сохраняет возможность выбора через календарь.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    focused: {
      description: `Внешнее управление состоянием фокуса поля.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    changed: {
      description: `Визуальный индикатор изменения поля. Подсвечивает поле для указания на модификацию.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onClick: {
      description: `Callback-функция, вызываемая при клике на поле ввода даты.\n`,
      control: false,
      table: {
        type: { summary: "(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void" },
      },
    },
    onBlur: {
      description: `Callback-функция, вызываемая при потере фокуса полем ввода.\n`,
      control: false,
      table: {
        type: { summary: "() => void" },
      },
    },
    onMouseDownInput: {
      description: `Callback-функция, вызываемая при нажатии кнопки мыши на поле ввода.\n`,
      control: false,
      table: {
        type: { summary: "(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void" },
      },
    },
    value: {
      description: `Значение поля ввода даты. Контролируемое свойство.\n`,
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    name: {
      description: `Имя поля для формы.\n`,
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента поля ввода даты\n",
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
Компонент поля ввода даты с маской и поддержкой различных состояний.

## Особенности:
- **Маска ввода**: автоматическое форматирование даты по заданному шаблону
- **Два варианта стиля**: outlined (с границей) и filled (с заполненным фоном)
- **Два размера**: md (средний) и lg (большой)
- **Валидация и ошибки**: подсветка ошибок и текстовые сообщения
- **Иконка календаря**: визуальный индикатор типа поля
- **Управление фокусом**: автоматическое скрытие/показ при клике вне поля
- **Гибкие пропсы**: name и onChange являются опциональными
- **Адаптивный дизайн**: разные размеры и отступы на мобильных и desktop
- **Доступность**: правильная семантика и поддержка screen readers

## Состояния поля:
- **Обычное**: стандартное состояние
- **С ошибкой**: красная граница и текст ошибки
- **Отключенное**: серый цвет и блокировка взаимодействия
- **С фокусом**: синяя граница для указания активного состояния
- **Измененное**: подсветка для указания на модификацию значения

## Рекомендации по использованию:
Используйте для ввода дат в формах с поддержкой валидации и стандартного форматирования.

### Базовое использование

\`\`\`jsx
const [formData, setFormData] = useState({
  birthDate: "",
});

<DatePickerInput
  name="birthDate"
  value={formData.birthDate}
  onChange={(_event, { name, value }) =>
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  placeholderText="Выберите дату"
  dateFormatMask="99.99.9999"
/>
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
    dateFormatMask: "99.99.9999",
    placeholderText: "дд.мм.гггг",
    variant: "outlined",
    size: "lg",
    disabled: false,
    error: "",
    readOnlyInput: false,
    focused: false,
    changed: false,
  },
};

export default meta;

type Story = StoryObj<typeof DatePickerInput>;

export const Default: Story = {
  name: "Default DatePickerInput",
  render: (args) => {
    const [formData, setFormData] = useState({
      createAt: "",
    });

    const onChange: TOnChangeDatePickerInput = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    return (
      <DatePickerInput {...args} name="createAt" value={formData.createAt} onChange={onChange} />
    );
  },
};
