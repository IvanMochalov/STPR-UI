import type { Meta, StoryObj } from "@storybook/react";

import { ApplyButtons } from "../../components";

const meta: Meta<typeof ApplyButtons> = {
  component: ApplyButtons,
  tags: ["autodocs"],
  argTypes: {
    classNameMainButtonsRoot: {
      control: false,
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
    cancelBtnContent: "cancel",
    submitBtnContent: "submit",
  },
};
