import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { UploadFiles } from "../../../lib/components/UploadFiles";
import mainStyles from "../Stories.module.scss";

const meta: Meta<typeof UploadFiles> = {
  component: UploadFiles,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
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
      <div className={mainStyles.storyWrapper}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof UploadFiles>;

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
    return <UploadFiles {...args} onDropFiles={uploadFiles} name={"file"} files={formData.file} />;
  },
  args: {
    placeholder: "Загрузите файл .ifc",
    variant: "dropzone",
    accept: { "application/ifc": [".ifc"] },
    disabled: false,
    multiple: true,
    infoTooltipText: "Подсказка для поля загрузки  модель/-и формата IFC",
    loading: false,
    error: "",
  },
};
