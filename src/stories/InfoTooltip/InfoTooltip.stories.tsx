import type { Meta, StoryObj } from "@storybook/react";

import { ETooltipPosition, InfoTooltip } from "../../../lib/components/Tooltip";

const meta: Meta<typeof InfoTooltip> = {
  component: InfoTooltip,
  tags: ["autodocs"],
  argTypes: {
    hover: {
      control: false,
      table: {
        defaultValue: { summary: "true" },
      },
    },
    trigger: {
      control: false,
    },
    classNameBaseTooltipRoot: {
      control: false,
    },
    classNameTriggerTooltip: {
      control: false,
    },
    classNameBaseTooltipContentRoot: {
      control: false,
    },
    classNameTooltip: {
      control: false,
    },
    noPadding: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    position: {
      options: [
        "top",
        "top-left",
        "top-right",
        "bottom",
        "bottom-left",
        "bottom-right",
        "left",
        "left-top",
        "left-bottom",
        "right",
        "right-top",
        "right-bottom",
      ],
      control: { type: "select" },
      table: {
        defaultValue: { summary: "bottom-left" },
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
  args: {
    position: ETooltipPosition.BottomLeft,
  },
};

export default meta;

type Story = StoryObj<typeof InfoTooltip>;

export const Default: Story = {
  name: "Default info tooltip",
  args: {
    text:
      "Если в проектируемом доме нужно заложить\n" +
      "квартиры-студии, внесите их параметры в\n" +
      "загружаемый файл по шаблону",
  },
};
