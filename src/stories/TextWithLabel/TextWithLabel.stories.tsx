import type { Meta, StoryObj } from "@storybook/react";

import { TextWithLabel } from "../../components";

const meta: Meta<typeof TextWithLabel> = {
  component: TextWithLabel,
  tags: ["autodocs"],
  argTypes: {
    classNameRoot: {
      control: false,
    },
    onClick: {
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
  args: {
    label: "Label",
    children: "Text With Label",
    isCursorPointer: false,
    isCursorPointerByOnClick: true,
  },
  render: (args) => {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}
      >
        <TextWithLabel {...args} type={"h1"}>
          {`${args.children} with type="h1"`}
        </TextWithLabel>
        <TextWithLabel {...args} type={"p1"}>
          {`${args.children} with type="p1"`}
        </TextWithLabel>
        <TextWithLabel {...args} type={"p2"}>
          {`${args.children} with type="p2"`}
        </TextWithLabel>
        <TextWithLabel {...args}>{`${args.children} without parameter type`}</TextWithLabel>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof TextWithLabel>;

export const Default: Story = {
  name: "Default Text With Label",
};
