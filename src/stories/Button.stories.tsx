import type {Meta, StoryObj} from "@storybook/react";

import {Button, IconName} from "../components";

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        classNameRoot: {
            control: false,
        },
        form: {
            control: false,
        },
    },
    decorators: [
        (Story) => (
            <div style={{
                minHeight: "20vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "400px"
            }}>
                <Story/>
            </div>
        )
    ],
    args: {
        children: "Button",
        variant: "primary",
        color: "blue",
        type: "submit",
    }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    name: "Default button",
};
export const OnlyIcon: Story = {
    name: "Only icon button",
    args: {
        isOnlyIcon: true,
        iconName: IconName.plusSquare,
    }
};