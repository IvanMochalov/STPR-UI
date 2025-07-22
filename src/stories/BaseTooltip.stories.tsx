import type {Meta, StoryObj} from "@storybook/react";

import {BaseTooltip} from "../components";

const meta: Meta<typeof BaseTooltip> = {
    component: BaseTooltip,
    tags: ["autodocs"],
    argTypes: {
        classNameRoot: {
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
    decorators: [
        (Story) => (
            <div style={{minHeight: "20vh", display: "flex", alignItems: "center"}}>
                <div style={{position: "relative", border: "1px dashed black", padding: "20px 40px"}}>
                    <Story/>
                </div>
            </div>
        )
    ],
    args: {
        position: "bottom-left",
    }
};

export default meta;

type Story = StoryObj<typeof BaseTooltip>;

export const Default: Story = {
    name: "Default tooltip",
    args: {
        text: "Дефолтный тултип",
    },
};
