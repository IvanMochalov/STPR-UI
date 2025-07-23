import type {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";

import {Checkbox} from "../components";

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
    tags: ["autodocs"],
    argTypes: {
        checked: {
            table: {
                defaultValue: {summary: "false"},
            },
        },
        disabled: {
            table: {
                defaultValue: {summary: "false"},
            },
        },
        required: {
            table: {
                defaultValue: {summary: "false"},
            },
        },
        tooltipPosition: {
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
        label: "Включить проверку",
    }
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    name: "Default checkbox",
    render: (args) => {
        const [formData, setFormData] = useState({
            is: false,
        });

        const onChange = (_event, {name, checked, value}) => {
            setFormData(prevState => ({
                ...prevState,
                [name]: typeof checked === "boolean" ? checked : value,
            }));
        };
        return (
            <Checkbox
                {...args}
                error={!formData.is ? args.error : undefined}
                name={"is"}
                checked={formData.is}
                onChange={onChange}
            />
        )
    },
};

export const ErrorCheckbox: Story = {
    name: "Error checkbox",
    render: Default.render,
    args: {
        required: true,
        error: "Обязательное поле",
    }
}

