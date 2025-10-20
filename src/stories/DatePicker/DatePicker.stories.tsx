import type { Meta, StoryObj } from "@storybook/react-vite";
import cx from "clsx";
import { useState } from "react";

import { DatePicker } from "../../../lib/components/DatePicker";
import { TOnChangeDatePicker } from "../../../lib/components/DatePicker";
import mainStyles from "../Stories.module.scss";
import localStyles from "./DatePickerStories.module.scss";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
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
      description: `Отключить выбор даты. Заблокирует взаимодействие и изменит визуальный стиль.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    dateFormatMask: {
      description: `Маска для форматирования ввода даты в текстовом поле.\nПо умолчанию: "99.99.9999" (формат ДД.ММ.ГГГГ)\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string | (string | RegExp)[]" },
        defaultValue: { summary: '"99.99.9999"' },
      },
    },
    dateFormat: {
      description: `Формат даты для отображения в календаре.\nПо умолчанию: "dd.MM.yyyy"\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"dd.MM.yyyy"' },
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
        defaultValue: { summary: '"дд.мм.гггг"' },
      },
    },
    readOnlyInput: {
      description: `Сделать текстовое поле только для чтения. Блокирует прямое редактирование, оставляя возможность выбора через календарь.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    isClearable: {
      description: `Показывать кнопки "Очистить" и "Готово" в календаре.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    isRelative: {
      description: `Использовать относительное позиционирование для контейнера календаря.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    shouldCloseOnSelect: {
      description: `Закрывать календарь автоматически после выбора даты.\n`,
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
    required: {
      description: `Помечать поле как обязательное для заполнения.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    label: {
      description: `Текст метки над полем ввода даты.\n`,
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
      description: `Позиция тултипа для метки поля.\n`,
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
      table: {
        type: { summary: "ETooltipPosition" },
      },
    },
    minDate: {
      description: `Минимальная доступная дата для выбора.\n`,
      control: { type: "date" },
      table: {
        type: { summary: "Date" },
      },
    },
    maxDate: {
      description: `Максимальная доступная дата для выбора.\n`,
      control: { type: "date" },
      table: {
        type: { summary: "Date" },
      },
    },
    selected: {
      description: `Выбранная дата. Контролируемое свойство.\n`,
      control: false,
      table: {
        type: { summary: "Date | null" },
      },
    },
    value: {
      description: `Значение поля ввода даты в текстовом формате.\n`,
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
    onChange: {
      description: `Callback-функция, вызываемая при изменении выбранной даты.
Получает объект с параметрами:
- name: имя поля
- value: выбранная дата (Date | null)

Особенности:
- Работает с объектами Date для удобной обработки дат
- Поддерживает сброс значения (null)
- Для работы с формами рекомендуется использовать вместе с состоянием React\n`,
      control: false,
      table: {
        type: {
          detail:
            "(data: {\n" +
            "  name: string;\n" +
            "  value: Date | null;\n" +
            "}, event?: React.ChangeEvent<HTMLInputElement>) => void",
          summary: "TOnChangeDatePicker",
        },
      },
    },
    onCalendarOpen: {
      description: `Callback-функция, вызываемая при открытии календаря.\n`,
      control: false,
      table: {
        type: { summary: "() => void" },
      },
    },
    onCalendarClose: {
      description: `Callback-функция, вызываемая при закрытии календаря.\n`,
      control: false,
      table: {
        type: { summary: "() => void" },
      },
    },
    onFocus: {
      description: `Callback-функция, вызываемая при фокусе на поле.\n`,
      control: false,
      table: {
        type: { summary: "() => void" },
      },
    },
    onBlur: {
      description: `Callback-функция, вызываемая при потере фокуса полем.\n`,
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
    onMouseEnter: {
      description: `Callback-функция, вызываемая при наведении мыши на контейнер поля.\n`,
      control: false,
      table: {
        type: { summary: "(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void" },
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
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента компонента DatePicker\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameDatePickerInputRoot: {
      description: "Дополнительный CSS-класс для элемента поля ввода даты\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameLabel: {
      description: "Дополнительный CSS-класс для элемента метки\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameBaseTooltipRoot: {
      description: "Дополнительный CSS-класс для корневого элемента тултипа\n",
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
  args: {
    variant: "outlined",
    size: "lg",
    placeholderText: "дд.мм.гггг",
    dateFormatMask: "99.99.9999",
    dateFormat: "dd.MM.yyyy",
    readOnlyInput: true,
    isClearable: true,
    isRelative: true,
    shouldCloseOnSelect: false,
    closeOnScroll: false,
    disabled: false,
    required: false,
    changed: false,
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
      <DatePicker {...args} name="createAt" selected={formData.createAt} onChange={onChange} />
    );
  },
};
