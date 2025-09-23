import type { Meta, StoryObj } from "@storybook/react";

import { ApplyButtons } from "../../../lib/components/ApplyButtons";

const meta: Meta<typeof ApplyButtons> = {
  component: ApplyButtons,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    mobile: {
      description:
        "Расположение кнопок на мобильных устройствах:\n- 'column': кнопки в колонку (cancel сверху)\n- 'column-reverse': кнопки в колонку (cancel снизу)\n- 'row': кнопки в строку\n",
      control: { type: "radio" },
      table: {
        defaultValue: { summary: "column" },
      },
    },
    align: {
      description:
        "Выравнивание кнопок по горизонтали внутри родительского контейнера:\n- 'left': по левому краю\n- 'center': по центру\n- 'right': по правому краю\n",
      control: { type: "radio" },
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
      control: { type: "text" },
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
      description: "ID формы, к которой привязана кнопка отправки (атрибут form)\n",
      control: { type: "text" },
    },
    disabled: {
      description: "Состояние disabled кнопки Submit\n",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    onClose: {
      description: "Callback-функция для кнопки Cancel\n",
      control: false,
    },
    submit: {
      description: "Callback-функция для кнопки Submit (вызывается при клике)\n",
      control: false,
    },
    loading: {
      description: "Показать индикатор загрузки на кнопке Submit\n",
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
