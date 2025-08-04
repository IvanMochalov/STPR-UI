import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "../../components";

const meta: Meta<typeof Modal> = {
  component: Modal,
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

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  name: "Default Modal",
  args: {
    children: "Default Modal children",
    modalName: "Default Modal Name",
    isHiddenModal: false,
    isVisibleCloseButton: true,
  },
};
