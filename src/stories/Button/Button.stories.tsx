import type { Meta, StoryObj } from "@storybook/react";

import { Button, EIconName } from "../../components";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    form: {
      control: false,
    },
    isOnlyIcon: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    isFullWidth: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    variant: {
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    color: {
      table: {
        defaultValue: { summary: "blue" },
      },
    },
    type: {
      table: {
        defaultValue: { summary: "button" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "20vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "400px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    children: "Button",
    variant: "primary",
    color: "blue",
    type: "button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: "Default button",
};
export const OnlyIcon: Story = {
  name: "Only icon button",
  args: {
    isOnlyIcon: true,
    iconName: EIconName.PlusSquare,
  },
};
