import type {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";

import {Input} from "./Input.tsx";

const meta: Meta<typeof Input> = {
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        classNameRoot: {
            control: false,
        },
        classNameLabel: {
            control: false,
        },
        classNameError: {
            control: false,
        },
        pattern: {
            description: "RegExp.\n" +
                "\ninput will be ignored if the value does not match the regular expression (pattern)"
        }
    },
    decorators: [
        (Story) => (
            <div style={{width: "400px"}}>
                <Story/>
            </div>
        )
    ],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    name: "Default input",
    render: (args) => {
        const [formData, setFormData] = useState({
            description: ""
        });

        const onChange = (_event, {name, checked, value}) => {
            setFormData(prevState => ({
                ...prevState,
                [name]: typeof checked === "boolean" ? checked : value,
            }));
        };
        return (
            <Input
                {...args}
                name={"description"}
                value={formData.description}
                onChange={onChange}
            />
        )
    },
    args: {
        placeholder: "Введите описание...",
    }
};
export const WithLabel: Story = {
    name: "Input with label",
    render: Default.render,
    args: {
        label: "Описание строения",
        isClearable: true,
    },
};
export const WithLabelAndTooltip: Story = {
    name: "Input with label and tooltip",
    render: Default.render,
    args: {
        label: "Описание строения",
        infoTooltipText: "Подсказка для поля 'Описание строения'"
    },
};
export const WithLabelAndTooltipAndError: Story = {
    name: "Input with label, tooltip and error",
    render: Default.render,
    args: {
        label: "Описание строения",
        infoTooltipText: "Подсказка для поля 'Описание строения'",
        required: true,
        error: "Обязательное поле"
    },
};
