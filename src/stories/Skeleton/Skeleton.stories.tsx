import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "../../../lib/components/Skeleton";

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    classNameRoot: {
      control: false,
    },
    width: {
      table: {
        defaultValue: { summary: "100%" },
      },
    },
    height: {
      table: {
        defaultValue: { summary: "1rem" },
      },
    },
    circle: {
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

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  name: "Default Skeleton",
  args: {
    height: "100px",
    width: "400px",
    circle: false,
  },
};
