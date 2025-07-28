import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "../../components";
import { useMemo, useState } from "react";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
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
  args: {
    isSeparated: false,
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  name: "Default",
  render: (args) => {
    const [isAddress, setIsAddress] = useState(true);
    const tabs = useMemo(() => {
      return [
        {
          name: "Адрес",
          active: isAddress,
          onClick: () => {
            setIsAddress(true);
          },
        },
        {
          name: "Кадастровый номер",
          active: !isAddress,
          onClick: () => {
            setIsAddress(false);
          },
        },
      ];
    }, [isAddress, setIsAddress]);

    return <Tabs {...args} panes={tabs} />;
  },
};

export const Separated: Story = {
  name: "Separated tabs",
  render: Default.render,
  args: {
    isSeparated: true,
  },
};

export const TabsWithTooltip: Story = {
  name: "With Tooltip tabs",
  render: (args) => {
    const [isAddress, setIsAddress] = useState(true);
    const tabs = useMemo(() => {
      return [
        {
          name: "Адрес",
          active: isAddress,
          onClick: () => {
            setIsAddress(true);
          },
          infoTooltipText:
            "Переменная согласно данным требованиям, обозначающая строительный (почтовый) адрес элементов АГР с дополнительной нумерации, при необходимости. Включает в себя следующие адресообразующие элементы, если они присутствуют: элементы улично-дорожной сети (аллея, бульвар, магистраль, переулок, площадь, проезд и т.д.), элементы объектов адресации (здание, земельный участок, владение и т.д.), типы зданий/сооружений (дом, корпус, строение и т.д.).",
        },
        {
          name: "Кадастровый номер",
          active: !isAddress,
          onClick: () => {
            setIsAddress(false);
          },
          infoTooltipText:
            "Если объект не имеет точного строительного/почтового адреса, например: деревня Внуково, то указывается кадастровый номер земельного участка. \n" +
            "\nПример: 77:01:0045002:4123",
        },
      ];
    }, [isAddress, setIsAddress]);

    return <Tabs {...args} panes={tabs} />;
  },
  args: {
    isSeparated: false,
  },
};
