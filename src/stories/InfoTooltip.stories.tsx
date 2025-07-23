import type {Meta, StoryObj} from "@storybook/react";

import {InfoTooltip} from "../components";

const meta: Meta<typeof InfoTooltip> = {
    component: InfoTooltip,
    tags: ["autodocs"],
    argTypes: {
        hover: {
            control: false,
            table: {
                defaultValue: {summary: "true"},
            },
        },
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
        noPadding: {
            table: {
                defaultValue: {summary: "false"},
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
            control: {type: "select"},
            table: {
                defaultValue: {summary: "bottom-left"},
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{minHeight: "20vh", display: "flex", alignItems: "center"}}>
                <Story/>
            </div>
        )
    ],
    args: {
        position: "bottom-left",
    }
};

export default meta;

type Story = StoryObj<typeof InfoTooltip>;

export const Default: Story = {
    name: "Default info tooltip",
    args: {
        text: "Дефолтный инфо-тултип",
    },
};

