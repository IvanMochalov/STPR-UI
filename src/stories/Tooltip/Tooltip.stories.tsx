import type { Meta, StoryObj } from "@storybook/react";

import { ETooltipPosition, Tooltip } from "../../components";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    hover: {
      table: {
        defaultValue: { summary: "true" },
      },
    },
    noPadding: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    isToggleClick: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    isVisibleTooltip: {
      table: {
        defaultValue: { summary: "true" },
      },
    },
    trigger: {
      control: false,
    },
    classNameRoot: {
      control: false,
    },
    classNameTriggerTooltip: {
      control: false,
    },
    classNameContentRoot: {
      control: false,
    },
    classNameTooltip: {
      control: false,
    },
    position: {
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
      control: { type: "select" },
      table: {
        defaultValue: { summary: "bottom-left" },
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
  args: {
    position: ETooltipPosition.BottomLeft,
    isVisibleTooltip: true,
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  name: "Default tooltip",
  args: {
    hover: true,
    text: "Дефолтный тултип",
    trigger: (
      <div
        style={{
          position: "relative",
          border: "1px dashed black",
          padding: "10px 15px",
        }}
      >
        Hover at me
      </div>
    ),
  },
};

export const Clickable: Story = {
  name: "Clickable tooltip",
  args: {
    hover: false,
    text: "Появляющийся по клику тултип",
    isVisibleTooltip: true,
    trigger: (
      <div
        style={{
          position: "relative",
          border: "1px dashed black",
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        Click me
      </div>
    ),
  },
};
export const ToggleClickable: Story = {
  name: "Clickable toggle tooltip",
  args: {
    isToggleClick: true,
    hover: false,
    text: "Появляющийся по клику тултип",
    isVisibleTooltip: true,
    trigger: (
      <div
        style={{
          position: "relative",
          border: "1px dashed black",
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        Click me again
      </div>
    ),
  },
};
