import type { Meta, StoryObj } from "@storybook/react";

import { EllipsisTextWithTooltip } from "../../../lib/test-stpr-ui-kit.ts";

const meta: Meta<typeof EllipsisTextWithTooltip> = {
  component: EllipsisTextWithTooltip,
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
    text: "Ellipsis Text With Tooltip",
    isCursorPointer: false,
    isCursorPointerByOnClick: true,
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "20px",
          maxWidth: "250px",
        }}
      >
        <EllipsisTextWithTooltip {...args} type={"h1"} text={`${args.text} with type="h1"`} />
        <EllipsisTextWithTooltip {...args} type={"p1"} text={`${args.text} with type="p1"`} />
        <EllipsisTextWithTooltip {...args} type={"p2"} text={`${args.text} with type="p2"`} />
        <EllipsisTextWithTooltip
          {...args}
          type={"description"}
          text={`${args.text} with type="description"`}
        />
        <EllipsisTextWithTooltip {...args} type={"link"} text={`${args.text} with type="link"`} />
        <EllipsisTextWithTooltip {...args} text={`${args.text} without parameter type`} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof EllipsisTextWithTooltip>;

export const Default: Story = {
  name: "Default Ellipsis Text With Tooltip",
};
