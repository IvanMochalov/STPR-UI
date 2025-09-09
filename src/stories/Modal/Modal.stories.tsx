import type { Meta, StoryObj } from "@storybook/react";

import { Button, Modal, useModal } from "../../../lib/test-stpr-ui-kit.ts";

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
    header: "Default Modal Name",
    isHiddenModal: false,
    isVisibleCloseButton: true,
    size: "lg",
  },
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    const renderModal = () => {
      if (!isOpen) return null;

      return <Modal {...args} onClose={onCloseModal} />;
    };
    return (
      <>
        <Button onClick={() => onOpenModal({ isOpenModal: true })}>Open Modal</Button>
        {renderModal()}
      </>
    );
  },
};
