import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "../../../lib/components/Table";
import { defaultTableData } from "./constants";

const meta: Meta<typeof Table> = {
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    classNameRoot: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "20vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    isNotTableOnNotDesktop: false,
    data: defaultTableData,
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  name: "Default table",
  args: {
    columns: [
      {
        key: "name",
        title: "Наименование",
        isBeCopiedValue: true,
      },
      {
        key: "description",
        title: "Объект наименования",
        isColorContentsCurlyBrackets: true,
      },
    ],
  },
};
