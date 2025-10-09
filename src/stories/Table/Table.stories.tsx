import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "../../../lib/components/Table";
import mainStyles from "../Stories.module.scss";
import { defaultTableData } from "./constants";

const meta: Meta<typeof Table> = {
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    classNameRoot: {
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={mainStyles.storyWrapper}>
        <Story />
      </div>
    ),
  ],
  args: {
    isDesktop: false,
    isNotTableOnNotDesktop: true,
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
