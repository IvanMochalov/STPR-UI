import type { Meta, StoryObj } from "@storybook/react";

import { Button, Confirm, useModal } from "../../../lib/test-stpr-ui-kit.ts";

const meta: Meta<typeof Confirm> = {
  component: Confirm,
  tags: ["autodocs"],
  argTypes: {
    align: {
      table: {
        defaultValue: { summary: "right" },
      },
    },
    mobile: {
      table: {
        defaultValue: { summary: "column" },
      },
    },
    // classNameRoot: {
    //   control: false,
    // },
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
    title: "Do you confirm?",
    subtitle: "Do you really want to confirm this meaningless action?",
    cancelBtnContent: "Cancel",
    submitBtnContent: "Confirm",
    align: "right",
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
