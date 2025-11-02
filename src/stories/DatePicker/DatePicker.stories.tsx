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
    // ... существующие argTypes

    enablePortal: {
      description: `Включить рендеринг календаря через React Portal.
      
Особенности:
- При включении (true) календарь рендерится в отдельном портале вне DOM-иерархии компонента
- Полезно для случаев когда календарь может быть обрезан родительскими элементами с overflow: hidden
- По умолчанию включено для обеспечения корректного отображения в сложных layout'ах
- При отключении календарь рендерится inline в DOM-иерархии компонента\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    classNamePortalRoot: {
      description: `Дополнительный CSS-класс для корневого элемента портала календаря.

Применяется только когда enablePortal=true.
Позволяет кастомизировать стили портала через который рендерится календарь.
Полезно для управления z-index, позиционированием и другими глобальными стилями.\n`,
      control: false,
      table: {
        type: { summary: "string" },
      },
    },

    // ... остальные существующие argTypes
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
    enablePortal: true, // добавил в дефолтные args
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
      <>
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
      </>
    );
  },
};
