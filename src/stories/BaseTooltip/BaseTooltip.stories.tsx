import type { Meta, StoryObj } from "@storybook/react";

import { BaseTooltip } from "../../components";

const meta: Meta<typeof BaseTooltip> = {
  component: BaseTooltip,
  tags: ["autodocs"],
  argTypes: {
    classNameRoot: {
      control: false,
    },
    noPadding: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "20vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "relative", border: "1px dashed black", padding: "20px 40px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BaseTooltip>;

export const Default: Story = {
  name: "Default tooltip",
  args: {
    text: "Дефолтный тултип",
  },
};
