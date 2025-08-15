import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown, ETooltipPosition } from "../../../lib/test-stpr-ui-kit.ts";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    classNameRoot: {
      control: false,
    },
    labelText: {
      table: {
        defaultValue: { summary: "Выпадающий список" },
      },
    },
    dropdownPosition: {
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
        defaultValue: { summary: "bottom-right" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "30vh", display: "flex", alignItems: "center" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    dropdownPosition: ETooltipPosition.BottomRight,
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  name: "Default dropdown",
  args: {
    listName: "Тип файла",
    dropdownList: [
      { name: "CSV", description: "12 мб", onClick: () => alert("click on CSV") },
      { name: "Excel", description: "23 мб", onClick: () => alert("click on Excel") },
      { name: "Скачать ZIP-архив", textCenter: true, onClick: () => alert("click on ZIP") },
    ],
  },
};
