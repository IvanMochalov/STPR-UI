import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { Input } from "../../../lib/components/Input";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    isVisibleDefaultTitle: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    isClearable: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    tooltipPosition: {
      table: {
        defaultValue: { summary: "bottom-left" },
      },
    },
    required: {
      table: {
        defaultValue: { summary: "false" },
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
    pattern: {
      description:
        "RegExp.\n" +
        "\ninput will be ignored if the value does not match the regular expression (pattern)",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "20vh", display: "flex", alignItems: "center" }}>
        <div style={{ width: "400px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  name: "Default input",
  render: (args) => {
    const [formData, setFormData] = useState({
      description: "",
    });

    const onChange = (
      _event: React.ChangeEvent<HTMLInputElement>,
      data: {
        name: string;
        value?: string;
        checked?: boolean;
      },
    ) => {
      setFormData((prevState) => ({
        ...prevState,
        [data.name]: data.checked !== undefined ? data.checked : data.value,
      }));
    };
    return (
      <Input
        {...args}
        error={!formData.description ? args.error : undefined}
        name={"description"}
        value={formData.description}
        onChange={onChange}
      />
    );
  },
  args: {
    placeholder: "Введите описание...",
  },
};
export const WithLabel: Story = {
  name: "Input with label",
  render: Default.render,
  args: {
    label: "Описание строения",
    isClearable: true,
  },
};
export const WithLabelAndTooltip: Story = {
  name: "Input with label and tooltip",
  render: Default.render,
  args: {
    label: "Описание строения",
    infoTooltipText: "Подсказка для поля 'Описание строения'",
  },
};
export const WithLabelAndTooltipAndError: Story = {
  name: "Input with label, tooltip and error",
  render: Default.render,
  args: {
    label: "Описание строения",
    infoTooltipText: "Подсказка для поля 'Описание строения'",
    required: true,
    error: "Обязательное поле",
  },
};
