import type { Meta, StoryObj } from "@storybook/react";

import { ApplyButtons } from "../../../lib/components/ApplyButtons";
import { EIconName } from "../../../lib/components/Icons";
import mainStyles from "../Stories.module.scss";

const meta: Meta<typeof ApplyButtons> = {
  component: ApplyButtons,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Универсальный компонент для отображения кнопок действий, таких как "Применить", "Сохранить", "Отмена". 
Компонент автоматически адаптируется под мобильные устройства и предоставляет гибкие настройки расположения.

## Основные возможности

- **Адаптивный дизайн**: автоматическое переключение между строкой и колонкой на разных устройствах
- **Гибкое выравнивание**: левое, центральное или правое расположение кнопок
- **Условное отображение**: кнопки отображаются только при наличии обработчиков клика
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

## Базовое использование

\`\`\`jsx
<ApplyButtons
  cancelBtnContent="Отмена"
  submitBtnContent="Сохранить"
  onClose={() => console.log("Закрыть")}
  submit={() => console.log("Сохранить")}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    applyButtonsMobileDirection: {
      description:
        "Расположение кнопок на мобильных устройствах:\n- 'column': кнопки в колонку (cancel сверху)\n- 'column-reverse': кнопки в колонку (cancel снизу)\n- 'row': кнопки в строку\n- На desktop всегда в строку",
      control: { type: "radio" },
      options: ["column", "column-reverse", "row"],
      table: {
        defaultValue: { summary: "column" },
        type: {
          summary: "TApplyButtonsMobileDirection",
          detail: '"row" | "column" | "column-reverse"',
        },
      },
    },
    applyButtonsAlign: {
      description:
        "Выравнивание кнопок по горизонтали внутри родительского контейнера:\n- 'left': по левому краю\n- 'center': по центру\n- 'right': по правому краю\n",
      control: { type: "radio" },
      options: ["left", "center", "right"],
      table: {
        defaultValue: { summary: "center" },
        type: {
          summary: "TApplyButtonsAlign",
          detail: '"left" | "center" | "right"',
        },
      },
    },
    cancelBtnContent: {
      description: "Текст кнопки Cancel. Если не указан, кнопка не отображается\n",
      control: { type: "text" },
      table: {
        defaultValue: { summary: "Отменить" },
      },
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
      description: "Текст кнопки Submit.\n",
      control: { type: "text" },
      table: {
        defaultValue: { summary: "Подтвердить" },
      },
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
      description:
        "Callback-функция для кнопки Cancel. Вызывается при клике на кнопку отмены. Если не указан, кнопка не отображается\n",
      control: false,
      table: {
        type: {
          detail:
            "onClose={(event) => {\n" + "  // логика обработки клика по кнопке Cancel;\n" + "}}",
        },
      },
    },
    submit: {
      description:
        "Callback-функция для кнопки Submit (вызывается при клике). Альтернатива отправке формы через formId. Если не указан, кнопка не отображается\n",
      control: false,
      table: {
        type: {
          detail:
            "onClose={(event) => {\n" + "  // логика обработки клика по кнопке Submit;\n" + "}}",
        },
      },
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
      <div className={mainStyles.storyWrapper}>
        <Story />
      </div>
    ),
  ],
  args: {
    onClose: () => {},
    submit: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof ApplyButtons>;

export const Default: Story = {
  name: "Default Apply Buttons",
  args: {
    applyButtonsMobileDirection: "column",
    applyButtonsAlign: "center",
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
    applyButtonsMobileDirection: "column",
    applyButtonsAlign: "center",
    submitBtnContent: "Сохранить",
    disabled: false,
    loading: false,
  },
};

export const WithoutSubmit: Story = {
  name: "Only Cancel Button",
  args: {
    applyButtonsMobileDirection: "column",
    applyButtonsAlign: "center",
    cancelBtnContent: "Закрыть",
    cancelBtnDisabled: false,
  },
};

export const RightapplyButtonsAligned: Story = {
  name: "Right applyButtonsAligned Buttons",
  args: {
    applyButtonsMobileDirection: "column",
    applyButtonsAlign: "right",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Применить",
  },
};

export const LeftapplyButtonsAligned: Story = {
  name: "Left applyButtonsAligned Buttons",
  args: {
    applyButtonsMobileDirection: "column",
    applyButtonsAlign: "left",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Применить",
  },
};

export const ColumnReverse: Story = {
  name: "Column Reverse applyButtonsMobileDirection",
  args: {
    applyButtonsMobileDirection: "column-reverse",
    applyButtonsAlign: "center",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Сохранить",
  },
};

export const RowLayout: Story = {
  name: "Row Layout applyButtonsMobileDirection",
  args: {
    applyButtonsMobileDirection: "row",
    applyButtonsAlign: "center",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Применить",
  },
};

export const WithLoading: Story = {
  name: "Submit Button Loading",
  args: {
    applyButtonsMobileDirection: "column",
    applyButtonsAlign: "center",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Сохранить",
    loading: true,
  },
};

export const DisabledButtons: Story = {
  args: {
    applyButtonsMobileDirection: "column",
    applyButtonsAlign: "center",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Применить",
    cancelBtnDisabled: true,
    disabled: true,
  },
};
