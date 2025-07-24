import type {Meta, StoryObj} from "@storybook/react";

import {Icon, IconName} from "../../components";

const meta: Meta<typeof Icon> = {
    parameters: {
        layout: "none",
    },
    component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    args: {
        name: "trash",
        color: "#131313"
    },
    parameters: {
        layout: "centered",
    },
    argTypes: {
        name: {
            control: "select",
            options: Object.values(IconName),
        },
    },
    render: (args) => {
        return (
            <div
                key={args.name}
                style={{
                    fontFamily: "ALSHauss",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px"
                }}
            >
                <Icon name={args.name} rotate={args.rotate} color={args.color}/>
                <span
                    style={{
                        fontSize: "12px",
                        color: "#666",
                        textAlign: "center",
                        wordBreak: "break-word"
                    }}
                >
                        {args.name}
                    </span>
            </div>
        )
    }
};

export const Gallery: Story = {
    args: {
        color: "#131313"
    },
    argTypes: {
        name: {
            table: {disable: true},
        },
        color: {
            table: {disable: true},
        },
        rotate: {
            table: {disable: true},
        },
    },
    render: (args) => (
        <div
            style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
            }}
        >
            {Object.values(IconName).map((name) => (
                <div
                    key={name}
                    style={{
                        fontFamily: "ALSHauss",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minWidth: "100px",
                        padding: "12px",
                        gap: "8px"
                    }}
                >
                    <Icon {...args} name={name}/>
                    <span
                        style={{
                            fontSize: "12px",
                            color: "#666",
                            textAlign: "center",
                            wordBreak: "break-word"
                        }}
                    >
                        {name}
                    </span>
                </div>
            ))}
        </div>
    )
};

