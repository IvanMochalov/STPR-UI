import type {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";

import {Checkbox, Form, Input, Select} from "../../components";
import {OKRUG_OPTIONS} from "../constants";

const meta: Meta<typeof Form> = {
    component: Form,
    tags: ["autodocs"],
    argTypes: {
        classNameRoot: {
            control: false,
        },
        children: {
            control: false,
        },
        fullWidth: {
            table: {
                defaultValue: {summary: "true"},
            }
        },
        withSeparator: {
            table: {
                defaultValue: {summary: "false"},
            }
        },
        autoComplete: {
            table: {
                defaultValue: {summary: "false"},
            },
            control: {type: "boolean"},
            description: "Указывает, могут ли элементы ввода по умолчанию автоматически дополнять свои значения браузером. autocompleteАтрибуты элементов формы переопределяют это значение form. Возможные значения:\n" + "\noff | on"
        },
        noValidate: {
            table: {
                defaultValue: {summary: "false"},
            },
            control: {type: "boolean"},
            description: "Этот логический атрибут указывает, что форма не должна проверяться при отправке. Если этот атрибут не задан (и, следовательно, форма проверена ), его можно переопределить атрибутом formnovalidate элемента button, input type submit, или input type image, принадлежащего форме",
        },
        addMargin: {
            table: {
                defaultValue: {summary: "false"},
            }
        }
    },
    decorators: [
        (Story) => (
            <div style={{minHeight: "50vh", display: "flex", alignItems: "center", width: "600px"}}>
                <Story/>
            </div>
        )
    ],
    args: {
        addMargin: true,
        fullWidth: true,
        withSeparator: false,
        onSubmit: () => {
            alert("Form is submitted")
        },
    },
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
    name: "Form with margin and full width",
    render: (args) => {
        const [formData, setFormData] = useState({
            addressName: "",
            okrug: "",
            is: false,
        });

        const onChange = (_event, {name, checked, value}) => {
            setFormData(prevState => ({
                ...prevState,
                [name]: typeof checked === "boolean" ? checked : value,
            }));
        };
        return (
            <Form
                addMargin={args.addMargin}
                fullWidth={args.fullWidth}
                withSeparator={args.withSeparator}
                onSubmit={args.onSubmit}
                id={args.id}
                name={args.name}
                noValidate={args.noValidate}
                autoComplete={args.autoComplete}
                classNameRoot={args.classNameRoot}
            >
                <Checkbox
                    label={"Включить проверку"}
                    name={"is"}
                    checked={formData.is}
                    onChange={onChange}
                />
                <Input
                    label={"Наименование адреса"}
                    name={"addressName"}
                    value={formData.addressName}
                    onChange={onChange}
                />
                <Select
                    label={"Округ"}
                    options={OKRUG_OPTIONS}
                    name={"okrug"}
                    value={formData.okrug}
                    onChange={onChange}
                />
            </Form>
        )
    },
};
export const FormWithSeparator: Story = {
    name: "Form with separator",
    render: Default.render,
    args: {
        withSeparator: true,
    }
};

