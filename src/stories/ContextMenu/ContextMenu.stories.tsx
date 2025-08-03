import type { Meta, StoryObj } from "@storybook/react";

import { ContextMenu, EIconName } from "../../components";

const meta: Meta<typeof ContextMenu> = {
  component: ContextMenu,
  tags: ["autodocs"],
  argTypes: {
    classNameRoot: {
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

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  name: "Default Context Menu",
  args: {
    list: [
      {
        key: "history",
        label: "История проверок",
        iconName: EIconName.HistoryClock,
      },
      {
        key: "delete",
        label: "Удалить",
        iconName: EIconName.Trash,
      },
    ],
  },
};
