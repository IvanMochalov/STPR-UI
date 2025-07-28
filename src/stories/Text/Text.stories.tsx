import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../../components";

const meta: Meta<typeof Text> = {
  component: Text,
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
    children: "Text",
    isLink: false,
    isCursorPointer: false,
    isCursorPointerByOnClick: true,
  },
  render: (args) => {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}
      >
        <Text {...args} type={"h1"}>
          {`${args.children} with type="h1"`}
        </Text>
        <Text {...args} type={"p1"}>
          {`${args.children} with type="p1"`}
        </Text>
        <Text {...args} type={"p2"}>
          {`${args.children} with type="p2"`}
        </Text>
        <Text {...args}>{`${args.children} without parameter type`}</Text>
        <Text {...args} isLink={true} isCursorPointer={true}>
          {`${args.children} with isLink={true}`}
        </Text>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  name: "Default Text",
};
