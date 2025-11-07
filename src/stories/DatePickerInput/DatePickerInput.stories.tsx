import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { DatePickerInput, TOnChangeDatePickerInput } from "../../../lib/components/DatePickerInput";
import { ETooltipPosition } from "../../../lib/components/Tooltip";
import mainStyles from "../Stories.module.scss";

const meta: Meta<typeof DatePickerInput> = {
  title: "Components/DatePickerInput",
  component: DatePickerInput,
  tags: ["autodocs"],
  argTypes: {
    // Основные параметры
    value: {
      description: `Текущее значение поля ввода даты в формате маски.\n`,
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    name: {
      description: `Имя поля для использования в формах.\n`,
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    onChange: {
      description: `Callback-функция при изменении значения. Получает событие и объект с name и value.\n`,
      control: false,
      table: {
        type: {
          detail: `(event: React.ChangeEvent<HTMLInputElement>, data: { name: string; value: string | null }) => void`,
          summary: "TOnChangeDatePickerInput",
        },
      },
    },
    dateFormatMask: {
      description: `Маска форматирования даты. По умолчанию: "99.99.9999" для формата ДД.ММ.ГГГГ\nПримеры: "99/99/9999", "9999-99-99"\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string | (string | RegExp)[]" },
        defaultValue: { summary: '"99.99.9999"' },
      },
    },

    // Стили и внешний вид
    variant: {
      description: `Стиль оформления поля:\n- "outlined" - с границей (по умолчанию)\n- "filled" - с заполненным фоном\n`,
      control: { type: "select" },
      options: ["outlined", "filled"],
      table: {
        type: { summary: "TDatePickerInputVariant", detail: '"outlined" | "filled"' },
        defaultValue: { summary: '"outlined"' },
      },
    },

    // Состояния
    disabled: {
      description: `Блокирует взаимодействие с полем.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    error: {
      description: `Текст ошибки валидации. Подсвечивает поле и показывает сообщение.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    readOnlyInput: {
      description: `Режим только для чтения. Блокирует прямое редактирование, но сохраняет возможность выбора через календарь.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    focused: {
      description: `Внешнее управление состоянием фокуса.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Видимость элементов
    isVisibleErrorText: {
      description: `Отображать текст ошибки под полем ввода. Если false - ошибка будет только подсвечивать поле.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    isVisibleLabelText: {
      description: `Отображать метку над полем ввода. Полезно для скрытия лейбла при сохранении структуры.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },

    // Текст и подписи
    placeholderText: {
      description: `Текст-подсказка при отсутствии значения. По умолчанию: "дд.мм.гггг"\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"дд.мм.гггг"' },
      },
    },
    label: {
      description: `Текст метки над полем ввода.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    required: {
      description: `Отображает звездочку как индикатор обязательного поля.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Иконка и тултипы
    isVisibleCalendarIcon: {
      description: `Отображать иконку календаря в правой части поля.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    infoTooltipText: {
      description: `Текст подсказки для метки поля.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    tooltipPosition: {
      description: `Позиция тултипа для подсказки лейбла.\n`,
      control: { type: "select" },
      options: [
        "top",
        "top-left",
        "top-right",
        "bottom",
        "bottom-left",
        "bottom-right",
        "left",
        "left-top",
        "left-bottom",
        "right",
        "right-top",
        "right-bottom",
      ],
      table: {
        type: { summary: "ETooltipPosition" },
        defaultValue: { summary: '"bottom-left"' },
      },
    },

    // Callback-функции
    onClick: {
      description: `Callback при клике на поле ввода.\n`,
      control: false,
      table: {
        type: { summary: "(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void" },
      },
    },
    onMouseDownInput: {
      description: `Callback при нажатии кнопки мыши на поле.\n`,
      control: false,
      table: {
        type: { summary: "(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void" },
      },
    },

    // CSS-классы
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента поля.\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameLabel: {
      description: "Дополнительный CSS-класс для элемента метки.\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameError: {
      description: "Дополнительный CSS-класс для элемента ошибки.\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameBaseTooltipRoot: {
      description: "Дополнительный CSS-класс для тултипа.\n",
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
Компонент поля ввода даты с маской, валидацией и поддержкой различных состояний.

## Особенности:
- **Автоматическое форматирование** через маску ввода
- **Два стиля оформления**: outlined (с границей) и filled (с заполненным фоном)
- **Два размера**: md (средний) и lg (большой)
- **Валидация** с подсветкой ошибок и текстовыми сообщениями
- **Опциональная иконка календаря**
- **Управление фокусом** с автоматическим скрытием при клике вне поля
- **Поддержка меток** с тултипами и индикатором обязательности
- **Гибкая система CSS-классов** для кастомизации
- **Контроль видимости** текста ошибки и метки

## Использование с состоянием:

\`\`\`jsx
const [date, setDate] = useState("");

<DatePickerInput
  name="birthDate"
  value={date}
  onChange={(event, { name, value }) => setDate(value)}
  label="Дата рождения"
  required
  isVisibleCalendarIcon
  isVisibleErrorText={true}
  isVisibleLabelText={true}
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
    dateFormatMask: "99.99.9999",
    placeholderText: "дд.мм.гггг",
    variant: "outlined",
    disabled: false,
    error: "",
    readOnlyInput: false,
    focused: false,
    isVisibleCalendarIcon: false,
    isVisibleErrorText: true,
    isVisibleLabelText: true,
    required: false,
    label: "",
    infoTooltipText: "",
    tooltipPosition: ETooltipPosition.BottomLeft,
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

export const WithLabel: Story = {
  name: "With Label and Tooltip",
  args: {
    label: "Дата создания",
    infoTooltipText: "Выберите дату создания документа",
    required: true,
    isVisibleCalendarIcon: true,
  },
};

export const WithError: Story = {
  name: "With Error State",
  args: {
    label: "Дата окончания",
    error: "Дата не может быть в прошлом",
    isVisibleCalendarIcon: true,
  },
};

export const Disabled: Story = {
  name: "Disabled State",
  args: {
    label: "Дата блокировки",
    disabled: true,
    value: "01.01.2024",
  },
};

export const HiddenLabel: Story = {
  name: "With Hidden Label",
  args: {
    label: "Скрытая метка",
    isVisibleLabelText: false,
    placeholderText: "Метка скрыта, но доступна для screen readers",
  },
};

export const HiddenErrorText: Story = {
  name: "With Hidden Error Text",
  args: {
    label: "Дата с ошибкой",
    error: "Эта ошибка не будет отображена текстом",
    isVisibleErrorText: false,
    isVisibleCalendarIcon: true,
  },
};
