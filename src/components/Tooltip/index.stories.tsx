import type {Meta, StoryObj} from "@storybook/react";

import {Tooltip} from "./Tooltip.tsx";

const meta: Meta<typeof Tooltip> = {
    component: Tooltip,
    tags: ["autodocs"],
    argTypes: {
        trigger: {
            control: false,
        },
        classNameRoot: {
            control: false,
        },
        classNameTriggerTooltip: {
            control: false,
        },
        classNameRootBaseTooltip: {
            control: false,
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
            control: {type: "radio"},
        },
    },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    name: "Default tooltip",
    args: {
        hover: true,
        text: "Дефолтный тултип",
        trigger:
            <div
                style={{
                    position: "relative",
                    border: "1px dashed black",
                    padding: "10px 15px",
                }}
            >
                Hover at me
            </div>
    },
};

export const Clickable: Story = {
    name: "Clickable tooltip",
    args: {
        hover: false,
        text: "Дефолтный тултип",
        trigger:
            <div
                style={{
                    position: "relative",
                    border: "1px dashed black",
                    padding: "10px 15px",
                    cursor: "pointer",
                }}
            >
                Click me
            </div>
    },
};
