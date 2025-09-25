import type { Meta, StoryObj } from "@storybook/react";

import { Button, Confirm, useModal } from "../../../lib/test-stpr-ui-kit.ts";

const meta: Meta<typeof Confirm> = {
  component: Confirm,
  tags: ["autodocs"],
  argTypes: {
    applyButtonsAlign: {
      table: {
        defaultValue: { summary: "right" },
      },
    },
    applyButtonsMobileDirection: {
      table: {
        defaultValue: { summary: "column" },
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

type Story = StoryObj<typeof Confirm>;

export const Default: Story = {
  name: "Default Confirm Modal",
  args: {
    header: "Do you confirm?",
    subHeader: "Do you really want to confirm this meaningless action?",
    cancelBtnContent: "Cancel",
    submitBtnContent: "Confirm",
    applyButtonsAlign: "right",
    textAlign: "left",
    size: "lg",
  },
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    const renderModal = () => {
      if (!isOpen) return null;

      return <Confirm {...args} onClose={onCloseModal} />;
    };
    return (
      <>
        <Button onClick={() => onOpenModal({ isOpenModal: true })}>Open Confirm</Button>
        {renderModal()}
      </>
    );
  },
};
