import type { Meta, StoryObj } from "@storybook/react";

import { ApplyButtons } from "../../../lib/components/ApplyButtons";
import { EIconName } from "../../../lib/components/Icons";

const meta: Meta<typeof ApplyButtons> = {
  component: ApplyButtons,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Универсальный компонент для отображения кнопок действий, таких как "Применить", "Сохранить", "Отмена". 
Компонент автоматически адаптируется под мобильные устройства и предоставляет гибкие настройки расположения.

## Основные возможности

- **Адаптивный дизайн**: автоматическое переключение между строкой и колонкой на разных устройствах
- **Гибкое выравнивание**: левое, центральное или правое расположение кнопок
- **Условное отображение**: кнопки отображаются только при наличии контента
- **Интеграция с формами**: поддержка привязки к форме через formId
- **Состояния загрузки**: индикатор прогресса для кнопки отправки

## Поведение на разных устройствах

### Мобильные устройства (< 768px)
- **column**: кнопки в колонку (Cancel сверху, Submit снизу)
- **column-reverse**: кнопки в колонку (Submit сверху, Cancel снизу)  
- **row**: кнопки в строку (только для специальных случаев)

### Планшеты и десктоп (≥ 768px)
- Всегда горизонтальное расположение в строку
- Сохранение выбранного выравнивания (left/center/right)
        `,
      },
    },
  },
  argTypes: {
    mobile: {
      description:
        "Расположение кнопок на мобильных устройствах:\n- 'column': кнопки в колонку (cancel сверху)\n- 'column-reverse': кнопки в колонку (cancel снизу)\n- 'row': кнопки в строку\n- На desktop всегда в строку",
      control: { type: "radio" },
      options: ["column", "column-reverse", "row"],
      table: {
        defaultValue: { summary: "column" },
      },
    },
    align: {
      description:
        "Выравнивание кнопок по горизонтали внутри родительского контейнера:\n- 'left': по левому краю\n- 'center': по центру\n- 'right': по правому краю\n",
      control: { type: "radio" },
      options: ["left", "center", "right"],
      table: {
        defaultValue: { summary: "'center'" },
      },
    },
    cancelBtnContent: {
      description: "Текст кнопки Cancel. Если не указан, кнопка не отображается\n",
      control: { type: "text" },
    },
    cancelBtnIconName: {
      description: "Иконка для кнопки Cancel (опционально)\n",
      control: "select",
      options: Object.values(EIconName),
    },
    submitBtnIconName: {
      description: "Иконка для кнопки Submit (опционально)\n",
      control: "select",
      options: Object.values(EIconName),
    },
    cancelBtnDisabled: {
      description: "Состояние disabled кнопки Cancel\n",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    submitBtnContent: {
      description: "Текст кнопки Submit. Если не указан, кнопка не отображается\n",
      control: { type: "text" },
    },
    formId: {
      description:
        "ID формы, к которой привязана кнопка отправки (атрибут form). Позволяет отправить форму извне\n",
      control: false,
    },
    disabled: {
      description:
        "Состояние disabled кнопки Submit. Используется для блокировки при невалидной форме\n",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    onClose: {
      description: "Callback-функция для кнопки Cancel. Вызывается при клике на кнопку отмены\n",
      control: false,
    },
    submit: {
      description:
        "Callback-функция для кнопки Submit (вызывается при клике). Альтернатива отправке формы через formId\n",
      control: false,
    },
    loading: {
      description:
        "Показать индикатор загрузки на кнопке Submit. Используется во время асинхронных операций\n",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "20vh", display: "flex", alignItems: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ApplyButtons>;

export const Default: Story = {
  name: "Default Apply Buttons",
  args: {
    mobile: "column",
    align: "center",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Применить",
    cancelBtnDisabled: false,
    disabled: false,
    loading: false,
  },
};

export const WithoutCancel: Story = {
  name: "Only Submit Button",
  args: {
    mobile: "column",
    align: "center",
    submitBtnContent: "Сохранить",
    disabled: false,
    loading: false,
  },
};

export const WithoutSubmit: Story = {
  name: "Only Cancel Button",
  args: {
    mobile: "column",
    align: "center",
    cancelBtnContent: "Закрыть",
    cancelBtnDisabled: false,
  },
};

export const RightAligned: Story = {
  name: "Right Aligned Buttons",
  args: {
    mobile: "column",
    align: "right",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Применить",
  },
};

export const LeftAligned: Story = {
  name: "Left Aligned Buttons",
  args: {
    mobile: "column",
    align: "left",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Применить",
  },
};

export const ColumnReverse: Story = {
  name: "Column Reverse Mobile",
  args: {
    mobile: "column-reverse",
    align: "center",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Сохранить",
  },
};

export const RowLayout: Story = {
  name: "Row Layout Mobile",
  args: {
    mobile: "row",
    align: "center",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Применить",
  },
};

export const WithLoading: Story = {
  name: "Submit Button Loading",
  args: {
    mobile: "column",
    align: "center",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Сохранить",
    loading: true,
  },
};

export const DisabledButtons: Story = {
  args: {
    mobile: "column",
    align: "center",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Применить",
    cancelBtnDisabled: true,
    disabled: true,
  },
};

export const WithFormIntegration: Story = {
  args: {
    mobile: "column",
    align: "right",
    cancelBtnContent: "Сбросить",
    submitBtnContent: "Отправить",
    formId: "example-form",
  },
  render: (args) => (
    <div>
      <form
        id="example-form"
        style={{ marginBottom: "20px", padding: "10px", border: "1px dashed #ccc" }}
      >
        <p>Пример формы с полями</p>
        <input type="text" placeholder="Имя" style={{ marginRight: "10px" }} />
        <input type="email" placeholder="Email" />
      </form>
      <ApplyButtons {...args} />
    </div>
  ),
};
