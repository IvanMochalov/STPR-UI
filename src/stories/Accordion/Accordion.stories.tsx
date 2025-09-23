import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { Accordion, Checkbox, Form, Input, Select } from "../../../lib/test-stpr-ui-kit.ts";
import { OKRUG_OPTIONS } from "../constants";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      description: "Содержимое аккордеона, которое отображается при раскрытии\n",
    },
    name: {
      description: "Заголовок аккордеона, отображаемый в свернутом состоянии\n",
    },
    defaultOpen: {
      table: {
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
      description: "Состояние раскрыт/свернут по умолчанию\n",
    },
    isHiddenExpandIcon: {
      table: {
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
      description:
        "Скрыть иконку раскрытия/сворачивания. Если true, аккордеон нельзя будет раскрыть/свернуть\n",
    },
    noBorder: {
      table: {
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
      description: "Убрать обводку аккордеона\n",
    },
    noPadding: {
      table: {
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
      description: "Убрать внутренние отступы (padding) аккордеона\n",
    },
    level: {
      description:
        "Уровень вложенности аккордеона. Влияет на размер шрифта заголовка:\n- 1: 24px\n- 2: 16px (24px на sm)\n",
      control: { type: "radio" },
      table: {
        defaultValue: { summary: "1" },
      },
    },
    onOpen: {
      description:
        "Callback-функция, вызываемая при изменении состояния аккордеона (раскрытии/сворачивании)\n",
      control: false,
    },
    classNameRoot: {
      control: false,
      description: "Дополнительный CSS-класс для корневого элемента аккордеона\n",
    },
    classNameHeader: {
      control: false,
      description: "Дополнительный CSS-класс для заголовка аккордеона\n",
    },
    classNameTitle: {
      control: false,
      description: "Дополнительный CSS-класс для текста заголовка\n",
    },
    classNameIcon: {
      control: false,
      description: "Дополнительный CSS-класс для иконки раскрытия/сворачивания\n",
    },
    classNameChildrenWrapper: {
      control: false,
      description: "Дополнительный CSS-класс для обертки содержимого аккордеона\n",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "20vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "600px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  name: "Default accordion",
  args: {
    defaultOpen: false,
    isHiddenExpandIcon: false,
    noBorder: false,
    noPadding: false,
    name: "Основное задание",
    level: 1,
    children: (
      <div style={{ textAlign: "justify" }}>
        Разработать комплексную стратегию устойчивого развития, направленную на баланс между ростом
        населения и ограниченными ресурсами Земли. Внедрить глобальные программы по повышению уровня
        образования, доступности контрацепции и гендерного равенства для снижения рождаемости в
        перенаселенных регионах. Одновременно стимулировать переход на возобновляемые ресурсы,
        технологии замкнутого цикла и альтернативные источники пищи (например, искусственное мясо).
        Создать международные стандарты экологичного производства и потребления, чтобы
        минимизировать нагрузку на планету. Реализовать эти меры через сотрудничество ООН,
        государств и частного сектора с учетом культурных особенностей регионов.
      </div>
    ),
  },
};

export const AccordionWithForm: Story = {
  name: "Accordion with form",
  args: {
    name: "Аккордеон с вложенными компонентами",
  },
  render: (args) => {
    const [formData, setFormData] = useState({
      addressName: "",
      okrug: "",
      is: false,
    });

    const handleInputChange = (
      _event: React.ChangeEvent<HTMLInputElement>,
      data: {
        name: string;
        value?: string;
        checked?: boolean;
      },
    ) => {
      setFormData((prevState) => ({
        ...prevState,
        [data.name]: data.checked !== undefined ? data.checked : data.value,
      }));
    };

    // Обработчик для Select
    const handleSelectChange = (
      _event: React.MouseEvent<HTMLDivElement>,
      data: { value: string | null; name: string },
    ) => {
      setFormData((prevState) => ({
        ...prevState,
        [data.name]: data.value || "",
      }));
    };
    return (
      <Accordion name={args.name}>
        <Form addMargin={true} fullWidth={true} withSeparator={true}>
          <Checkbox
            label={"Включить проверку"}
            name={"is"}
            checked={formData.is}
            onChange={handleInputChange}
          />
          <Input
            label={"Наименование адреса"}
            name={"addressName"}
            value={formData.addressName}
            onChange={handleInputChange}
          />
          <Select
            label={"Округ"}
            options={OKRUG_OPTIONS}
            name={"okrug"}
            value={formData.okrug}
            onChange={handleSelectChange}
          />
        </Form>
      </Accordion>
    );
  },
};

export const NestedAccordion: Story = {
  args: {
    name: "Аккордеон с вложенным аккордеон",
    noBorder: true,
    isHiddenExpandIcon: true,
  },
  render: (args) => {
    const [formData, setFormData] = useState({
      addressName: "",
      okrug: "",
      is: false,
    });

    const handleInputChange = (
      _event: React.ChangeEvent<HTMLInputElement>,
      data: {
        name: string;
        value?: string;
        checked?: boolean;
      },
    ) => {
      setFormData((prevState) => ({
        ...prevState,
        [data.name]: data.checked !== undefined ? data.checked : data.value,
      }));
    };

    // Обработчик для Select
    const handleSelectChange = (
      _event: React.MouseEvent<HTMLDivElement>,
      data: { value: string | null; name: string },
    ) => {
      setFormData((prevState) => ({
        ...prevState,
        [data.name]: data.value || "",
      }));
    };
    return (
      <Accordion name={args.name}>
        <Form addMargin={true} fullWidth={true} withSeparator={true}>
          <Checkbox
            label={"Включить проверку"}
            name={"is"}
            checked={formData.is}
            onChange={handleInputChange}
          />
          <Input
            label={"Наименование адреса"}
            name={"addressName"}
            value={formData.addressName}
            onChange={handleInputChange}
          />
          <Select
            label={"Округ"}
            options={OKRUG_OPTIONS}
            name={"okrug"}
            value={formData.okrug}
            onChange={handleSelectChange}
          />
          <Accordion name={"Основное задание"} level={2}>
            <div style={{ textAlign: "justify" }}>
              Разработать комплексную стратегию устойчивого развития, направленную на баланс между
              ростом населения и ограниченными ресурсами Земли. Внедрить глобальные программы по
              повышению уровня образования, доступности контрацепции и гендерного равенства для
              снижения рождаемости в перенаселенных регионах. Одновременно стимулировать переход на
              возобновляемые ресурсы, технологии замкнутого цикла и альтернативные источники пищи
              (например, искусственное мясо). Создать международные стандарты экологичного
              производства и потребления, чтобы минимизировать нагрузку на планету. Реализовать эти
              меры через сотрудничество ООН, государств и частного сектора с учетом культурных
              особенностей регионов.
            </div>
          </Accordion>
        </Form>
      </Accordion>
    );
  },
};
