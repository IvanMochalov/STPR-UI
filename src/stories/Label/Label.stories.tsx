import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "../../../lib/components/Label";

const meta: Meta<typeof Label> = {
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    classNameRoot: {
      control: false,
    },
    required: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    tooltipPosition: {
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
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  name: "Default label",
  args: {
    label: "Лейбл",
  },
};
export const Required: Story = {
  name: "Required label",
  args: {
    label: "Лейбл",
    required: true,
  },
};
export const WithTooltip: Story = {
  name: "Label with hover info tooltip",
  args: {
    label: "Лейбл",
    infoTooltipText: "Лейбл с вспомогающим тултипом",
  },
};
