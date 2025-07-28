import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { Select } from "../../components";
import { OKRUG_OPTIONS } from "../constants";

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ["autodocs"],
  args: {
    options: OKRUG_OPTIONS,
  },
  argTypes: {
    placeholder: {
      table: {
        defaultValue: { summary: "Выберите из списка..." },
      },
    },
    disabled: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    maxHeightList: {
      table: {
        defaultValue: { summary: "160" },
      },
    },
    required: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    isVisibleDefaultTitle: {
      table: {
        defaultValue: { summary: "false" },
      },
    },

    tooltipPosition: {
      table: {
        defaultValue: { summary: "bottom-left" },
      },
    },
    classNameRoot: {
      control: false,
    },
    classNameLabel: {
      control: false,
    },
    classNameError: {
      control: false,
    },
    options: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "40vh", display: "flex", alignItems: "start" }}>
        <div style={{ width: "400px", marginTop: "80px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  name: "Default select",
  render: (args) => {
    const [formData, setFormData] = useState({
      okrug: "",
    });

    const onChange = (
      _event: React.ChangeEvent<HTMLSelectElement> | React.MouseEvent<HTMLDivElement>,
      data: { value: string | null; name: string },
    ) => {
      setFormData((prevState) => ({
        ...prevState,
        [data.name]: data.value || "",
      }));
    };
    return (
      <Select
        {...args}
        error={!formData.okrug ? args.error : undefined}
        name={"okrug"}
        value={formData.okrug}
        onChange={onChange}
      />
    );
  },
};
export const WithLabel: Story = {
  name: "Select with label",
  render: Default.render,
  args: {
    label: "Округ",
  },
};
export const WithLabelAndTooltip: Story = {
  name: "Select with label and tooltip",
  render: Default.render,
  args: {
    label: "Округ",
    infoTooltipText: "Подсказка для поля 'Округ'",
  },
};
export const WithLabelAndTooltipAndError: Story = {
  name: "Select with label, tooltip and error",
  render: Default.render,
  args: {
    label: "Описание строения",
    infoTooltipText: "Подсказка для поля 'Описание строения'",
    required: true,
    error: "Обязательное поле",
  },
};
