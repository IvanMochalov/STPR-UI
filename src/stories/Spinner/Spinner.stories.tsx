import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "../../../lib/components/Spinner";
import mainStyles from "../Stories.module.scss";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    classNameRoot: {
      control: false,
    },
    size: {
      table: {
        defaultValue: { summary: "md" },
      },
    },
    color: {
      table: {
        defaultValue: { summary: "#036bfd" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={mainStyles.storyWrapper}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  name: "Default label",
  args: {
    size: "md",
  },
};
