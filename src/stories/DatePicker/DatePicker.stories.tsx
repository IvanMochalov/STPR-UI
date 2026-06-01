import { DatePicker, type TOnChangeDatePicker } from "@components/DatePicker";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import localStyles from "./DatePickerStories.module.scss";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    // Основные параметры
    selected: {
      description: `Выбранная дата. Контролируемое свойство для управления выбранной датой.\n`,
      control: false,
      table: {
        type: { summary: "Date | null" },
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
      description: `Callback-функция при изменении выбранной даты.\n`,
      control: false,
      table: {
        type: {
          detail: `(data: { name: string; value: Date | null }, event?: React.ChangeEvent&lt;HTMLInputElement&gt;) => void`,
          summary: "TOnChangeDatePicker",
        },
      },
    },

    // Форматы дат
    dateFormatMask: {
      description: `Маска форматирования для текстового ввода. По умолчанию: "99.99.9999"\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string | (string | RegExp)[]" },
        defaultValue: { summary: '"99.99.9999"' },
      },
    },
    dateFormat: {
      description: `Формат отображения даты в календаре. По умолчанию: "dd.MM.yyyy"\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"dd.MM.yyyy"' },
      },
    },

    // Стили и внешний вид
    variant: {
      description: `Стиль оформления поля ввода:\n- "outlined" - с границей (по умолчанию)\n- "filled" - с заполненным фоном\n`,
      control: { type: "select" },
      options: ["outlined", "filled"],
      table: {
        type: { summary: "TDatePickerInputVariant", detail: '"outlined" | "filled"' },
        defaultValue: { summary: '"outlined"' },
      },
    },

    // Состояния
    disabled: {
      description: `Блокирует взаимодействие с компонентом.\n`,
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
    required: {
      description: `Отображает звездочку как индикатор обязательного поля.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Поведение календаря
    readOnlyInput: {
      description: `Режим только для чтения для текстового поля. Блокирует прямое редактирование.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    isClearable: {
      description: `Показывать кнопку "Очистить" в календаре.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    shouldCloseOnSelect: {
      description: `Автоматически закрывать календарь после выбора даты.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    closeOnScroll: {
      description: `Закрывать календарь при скролле страницы.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    enablePortal: {
      description: `Включить рендеринг календаря через React Portal.\n\nОсобенности:\n- При включении (true) календарь рендерится в отдельном портале\n- Полезно для случаев когда календарь может быть обрезан родительскими элементами с overflow: hidden\n- По умолчанию включено для обеспечения корректного отображения\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    isRelative: {
      description: `Использовать относительное позиционирование для корневого элемента.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },

    // Диапазон дат
    minDate: {
      description: `Минимальная доступная для выбора дата.\n`,
      control: { type: "date" },
      table: {
        type: { summary: "Date" },
      },
    },
    maxDate: {
      description: `Максимальная доступная для выбора дата.\n`,
      control: { type: "date" },
      table: {
        type: { summary: "Date" },
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
    onCalendarOpen: {
      description: `Callback при открытии календаря.\n`,
      control: false,
      table: {
        type: { summary: "() => void" },
      },
    },
    onCalendarClose: {
      description: `Callback при закрытии календаря.\n`,
      control: false,
      table: {
        type: { summary: "() => void" },
      },
    },
    onMouseDownInput: {
      description: `Callback при нажатии кнопки мыши на поле ввода.\n`,
      control: false,
      table: {
        type: { summary: "(event: React.MouseEvent&lt;HTMLDivElement, MouseEvent&gt;) => void" },
      },
    },
    onMouseEnter: {
      description: `Callback при наведении курсора на поле ввода.\n`,
      control: false,
      table: {
        type: { summary: "(event: React.MouseEvent&lt;HTMLDivElement, MouseEvent&gt;) => void" },
      },
    },

    // CSS-классы
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента компонента.\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameDatePickerInputRoot: {
      description: "Дополнительный CSS-класс для элемента поля ввода даты.\n",
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
    classNamePortalRoot: {
      description: `Дополнительный CSS-класс для корневого элемента портала календаря.\n\nПрименяется только когда enablePortal=true.\nПозволяет кастомизировать стили портала через который рендерится календарь.\nПолезно для управления z-index, позиционированием и другими глобальными стилями.\n`,
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
Компонент выбора даты с календарем.

## Особенности:
- **Интегрированный календарь**: всплывающий календарь для визуального выбора даты
- **Текстовый ввод с маской**: возможность ручного ввода даты с автоматическим форматированием
- **Локализация на русский**: календарь полностью на русском языке
- **Кастомный интерфейс**: уникальный дизайн header и footer календаря
- **Валидация диапазона**: ограничение выбора дат minDate и maxDate
- **Гибкое управление**: кнопки "Очистить" и "Готово" для удобства работы
- **Два варианта стиля**: outlined (с границей) и filled (с заполненным фоном)
- **Поддержка меток и подсказок**: возможность добавления label с тултипом
- **Гибкое позиционирование**: возможность рендеринга через Portal для избежания обрезания в сложных layout'ах

## Состояния компонента:
- **Обычное**: стандартное состояние с возможностью выбора даты
- **С ошибкой**: красная граница и текст ошибки валидации
- **Отключенное**: серый цвет и блокировка взаимодействия
- **С фокусом**: активное состояние при открытом календаре
- **С меткой**: отображение текстовой метки над полем

## Рекомендации по использованию:
Используйте для выбора дат в формах где требуется удобный интерфейс календаря с возможностью ручного ввода.

### Базовое использование

\`\`\`jsx
const [selectedDate, setSelectedDate] = useState(null);

<DatePicker
  name="birthDate"
  selected={selectedDate}
  onChange={({ name, value }) => setSelectedDate(value)}
  label="Дата рождения"
  placeholderText="Выберите дату"
/>
\`\`\`

### С ограничением диапазона дат

\`\`\`jsx
<DatePicker
  name="appointmentDate"
  selected={selectedDate}
  onChange={({ name, value }) => setSelectedDate(value)}
  minDate={new Date()} // только будущие даты
  label="Дата записи"
/>
\`\`\`

### Без использования Portal (для простых layout'ов)

\`\`\`jsx
<DatePicker
  name="simpleDate"
  selected={selectedDate}
  onChange={({ name, value }) => setSelectedDate(value)}
  enablePortal={false} // отключаем portal для простых случаев
  label="Простая дата"
/>
\`\`\`

### С кастомизацией портала

\`\`\`jsx
<DatePicker
  name="customDate"
  selected={selectedDate}
  onChange={({ name, value }) => setSelectedDate(value)}
  classNamePortalRoot="my-custom-portal" // кастомные стили для портала
  label="Дата с кастомным порталом"
/>
\`\`\`
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={localStyles.storiesWrapper}>
        <Story />
      </div>
    ),
  ],
  args: {
    variant: "outlined",
    placeholderText: "дд.мм.гггг",
    dateFormatMask: "99.99.9999",
    dateFormat: "dd.MM.yyyy",
    readOnlyInput: true,
    isClearable: true,
    isRelative: true,
    shouldCloseOnSelect: false,
    enablePortal: false,
    closeOnScroll: false,
    disabled: false,
    required: false,
    error: "",
    infoTooltipText: "",
    label: "Дата выдачи",
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  name: "Default DatePicker",
  render: (args) => {
    const [formData, setFormData] = useState({
      createAt: null,
    });

    const onChange: TOnChangeDatePicker = ({ name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    return (
      <div className={localStyles.defaultStoriesWrapper}>
        <DatePicker
          {...args}
          enablePortal={false}
          name="createAt"
          selected={formData.createAt}
          onChange={onChange}
        />
        <DatePicker
          {...args}
          enablePortal={true}
          name="createAt"
          selected={formData.createAt}
          onChange={onChange}
        />
      </div>
    );
  },
};

export const WithError: Story = {
  name: "With Error State",
  render: Default.render,
  args: {
    label: "Дата с ошибкой",
    error: "Дата не может быть в прошлом",
  },
};

export const Disabled: Story = {
  name: "Disabled State",
  render: Default.render,
  args: {
    label: "Отключенная дата",
    disabled: true,
  },
};

export const WithDateRange: Story = {
  render: Default.render,
  args: {
    label: "Дата в диапазоне",
    minDate: new Date(2024, 0, 1),
    maxDate: new Date(2024, 11, 31),
  },
};

export const ReadOnly: Story = {
  name: "Read Only Input",
  render: Default.render,
  args: {
    label: "Только чтение",
    readOnlyInput: true,
  },
};

export const WithoutClearButton: Story = {
  render: Default.render,
  args: {
    label: "Без кнопки очистки",
    isClearable: false,
  },
};
