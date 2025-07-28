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
        <Text {...args} type={"h1"} children={`${args.children} with type="h1"`} />
        <Text {...args} type={"p1"} children={`${args.children} with type="p1"`} />
        <Text {...args} type={"p2"} children={`${args.children} with type="p2"`} />
        <Text {...args} children={`${args.children} without parameter type`} />
        <Text
          {...args}
          isLink={true}
          isCursorPointer={true}
          children={`${args.children} with isLink={true}`}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  name: "Default",
};
