import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { Input } from "../../../lib/components/Input";
import { Text } from "../../../lib/components/Text";
import mainStyles from "../Stories.module.scss";
import styles from "./InputStories.module.scss";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      table: {
        defaultValue: { summary: "outlined" },
      },
    },
    disabled: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    isAbsolutePositionError: {
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
      <div className={mainStyles.storyWrapper}>
        <div style={{ width: "400px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
  args: {
    variant: "outlined",
    isAbsolutePositionError: false,
  },
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
      <div className={styles.storiesWrapper}>
        <Input
          {...args}
          error={!formData.description ? args.error : undefined}
          name={"description"}
          value={formData.description}
          onChange={onChange}
        />
        <div className={styles.viewInputList}>
          <div className={styles.viewInputListItem}>
            <Text type={"description"} classNameRoot={styles.viewInputListItem__description}>
              Input with Error view
            </Text>
            <Input
              {...args}
              name={"description"}
              value={formData.description}
              error={"Какая-то ошибка"}
              onChange={(event) => event.stopPropagation()}
            />
          </div>
          <div className={styles.viewInputListItem}>
            <Text type={"description"} classNameRoot={styles.viewInputListItem__description}>
              Disabled Input view
            </Text>
            <Input
              {...args}
              name={"description"}
              value={formData.description}
              disabled={true}
              onChange={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      </div>
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
