import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";

import { Breadcrumb, TCrumbItem } from "../../../lib/components/Breadcrumb";
import mainStyles from "../Stories.module.scss";

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  tags: ["autodocs"],
  argTypes: {
    crumbsList: {
      description:
        "Содержимое тултипа. Может быть строкой или React-компонентом\nПоддерживает переносы строк через `white-space: pre-line`\n",
      control: false,
      table: {
        type: {
          summary: "TCrumbItem[]",
          detail: "TCrumbItem[] = { text: string; onClick?: () => void; active?: boolean; }[]",
        },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента хлебных крошек\n",
      control: false,
    },
    classNameListRoot: {
      description: "Дополнительный CSS-класс для списка хлебных крошек\n",
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div className={mainStyles.storyWrapper}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  name: "Default Tooltip",
  render: (args) => {
    const [currentPage, setCurrentPage] = useState("main");
    const crumbList = useMemo<TCrumbItem[]>(() => {
      return [
        { text: "Главная", active: currentPage === "main", onClick: () => setCurrentPage("main") },
        {
          text: "Библиотека 3D-моделей для АГР",
          active: currentPage === "lib",
          onClick: () => setCurrentPage("lib"),
        },
        { text: "Корзина", active: currentPage === "cart", onClick: () => setCurrentPage("cart") },
      ];
    }, [currentPage]);

    return <Breadcrumb {...args} crumbsList={crumbList} />;
  },
};
