import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { InputFiles } from "../../../lib/components/InputFiles";

const meta: Meta<typeof InputFiles> = {
  component: InputFiles,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    tooltipPosition: {
      table: {
        defaultValue: { summary: "bottom-left" },
      },
    },
    classNameRoot: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "20vh", display: "flex", alignItems: "center" }}>
        <div style={{ width: "400px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof InputFiles>;

export const Default: Story = {
  name: "Default Input Files",
  render: (args) => {
    const [formData, setFormData] = React.useState({
      file: [],
    });

    const uploadFiles = (acceptedFiles: File[], name: string) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: acceptedFiles,
      }));
    };
    return <InputFiles {...args} onDropFiles={uploadFiles} name={"file"} files={formData.file} />;
  },
  args: {
    placeholder: "Загрузите файл",
    multiple: false,
    accept: { "application/pdf": [".pdf"] },
    disabled: false,
    infoTooltipText: "Подсказка для поля загрузки  модель/-и формата IFC",
    error: undefined,
  },
};
