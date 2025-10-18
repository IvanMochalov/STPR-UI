import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import {
  Checkbox,
  Form,
  Input,
  Select,
  TOnChangeCheckbox,
  TOnChangeInput,
  TOnChangeSelect,
} from "../../../lib/test-stpr-ui-kit.ts";
import { OKRUG_OPTIONS } from "../constants";
import mainStyles from "../Stories.module.scss";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: `Размер формы. Определяет величину отступов между элементами:
- "md" - средний размер (24px на мобильных, 32px на планшетах+)
- "lg" - большой размер (32px на мобильных, 48px на планшетах+)\n`,
      control: { type: "select" },
      options: ["md", "lg"],
      table: {
        type: { summary: "TFormSize", detail: "'md' | 'lg'" },
        defaultValue: { summary: '"lg"' },
      },
    },
    withSeparator: {
      description: `Добавить разделители между элементами формы.
Каждый элемент кроме первого получает верхнюю границу-разделитель.\n
Работает вместе с \`addMargin={true}\``,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    addMargin: {
      description: `Добавить вертикальные отступы между элементами формы.
Размер отступов зависит от параметра \`size\`.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    fullWidth: {
      description: `Занимать всю доступную ширину родительского контейнера.
Если false - ширина формы определяется содержимым (width: fit-content).\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента формы\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    onSubmit: {
      description: `Callback-функция, вызываемая при отправке формы.
Автоматически предотвращает стандартное поведение браузера (event.preventDefault()).\n`,
      control: false,
      table: {
        type: { summary: "() => void" },
      },
    },
    id: {
      description: `HTML-атрибут id для формы. Полезен для связывания с элементами <label>.\n`,
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    name: {
      description: `HTML-атрибут name для формы. Используется для идентификации формы.\n`,
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    noValidate: {
      description: `Отключить встроенную валидацию браузера для формы.
Позволяет реализовать кастомную логику валидации.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    children: {
      description: `Дочерние элементы формы. Обычно содержат поля ввода, кнопки и другие компоненты.\n`,
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Универсальный компонент формы с поддержкой различных стилей компоновки и адаптивным дизайном.

## Особенности:
- **Адаптивные отступы** - размеры меняются на разных \`breakpoints\` (мобильные/планшеты+)
- **Гибкая ширина** - может занимать всю ширину или подстраиваться под содержимое
- **Два варианта компоновки** - с разделителями или с отступами между элементами
- **Автоматический \`preventDefault\`** - предотвращает перезагрузку страницы при отправке
- **Семантическая HTML-разметка** - использует нативный \`<form>\` элемент

## Варианты компоновки:
- **С отступами \`(addMargin)\`** - вертикальные отступы между элементами
- **С разделителями \`(withSeparator)\`** - горизонтальные линии между элементами (только при \`addMargin={true}\`)
- **Комбинированный** - можно использовать оба варианта одновременно

## Адаптивность:
Все отступы и разделители адаптируются под разные разрешения устройств:
- Мобильные: базовые размеры отступов
- Планшеты и выше \`(sm breakpoint)\`: увеличенные размеры

## Рекомендации по использованию:
Используйте для создания структурированных форм с единообразным расположением элементов.

### Базовое использование

\`\`\`jsx
<Form onSubmit={handleSubmit} addMargin={true} size="lg">
  <Input label="Имя" name="name" />
  <Input label="Email" name="email" />
  <Button type="submit">Отправить</Button>
</Form>
\`\`\`
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={mainStyles.storyWrapper}>
        <div style={{ width: "600px", maxWidth: "100%" }}>
          <Story />
        </div>
      </div>
    ),
  ],
  args: {
    size: "lg",
    addMargin: true,
    fullWidth: true,
    withSeparator: false,
    noValidate: false,
    onSubmit: () => {
      alert("Form is submitted");
    },
  },
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  name: "Form with Margin and Full Width",
  render: (args) => {
    const [formData, setFormData] = useState({
      addressName: "",
      okrug: "",
      is: false,
    });

    const handleInputChange: TOnChangeInput = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleCheckboxChange: TOnChangeCheckbox = (_event, { name, checked }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    };

    const handleSelectChange: TOnChangeSelect = (_event, data) => {
      setFormData((prevState) => ({
        ...prevState,
        [data.name]: data.value,
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
        classNameRoot={args.classNameRoot}
        size={args.size}
      >
        <Checkbox
          label={"Включить проверку"}
          name={"is"}
          checked={formData.is}
          onChange={handleCheckboxChange}
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
    );
  },
};

export const WithSeparator: Story = {
  name: "Form with Separator",
  render: Default.render,
  args: {
    withSeparator: true,
    addMargin: true,
  },
};

export const MediumSize: Story = {
  name: "Medium Size Form",
  render: Default.render,
  args: {
    size: "md",
    addMargin: true,
  },
};
export const LargeSize: Story = {
  name: "Large Size Form",
  render: Default.render,
  args: {
    size: "lg",
    addMargin: true,
  },
};

export const FitContentWidth: Story = {
  name: "Form with Fit Content Width",
  render: Default.render,
  args: {
    fullWidth: false,
    addMargin: true,
  },
};

export const WithoutMargin: Story = {
  name: "Form without Margin",
  render: Default.render,
  args: {
    addMargin: false,
    withSeparator: false,
  },
};

export const ComplexForm: Story = {
  name: "Complex Form Example",
  render: (args) => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      district: "",
      agreeTerms: false,
      newsletter: true,
    });

    const handleInputChange: TOnChangeInput = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleCheckboxChange: TOnChangeCheckbox = (_event, { name, checked }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    };

    const handleSelectChange: TOnChangeSelect = (_event, data) => {
      setFormData((prevState) => ({
        ...prevState,
        [data.name]: data.value,
      }));
    };

    return (
      <Form {...args}>
        <Input
          label={"Имя"}
          name={"firstName"}
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Введите ваше имя"
        />
        <Input
          label={"Фамилия"}
          name={"lastName"}
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Введите вашу фамилию"
        />
        <Input
          label={"Email"}
          name={"email"}
          value={formData.email}
          onChange={handleInputChange}
          placeholder="example@mail.ru"
        />
        <Input
          label={"Телефон"}
          name={"phone"}
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="+7 (XXX) XXX-XX-XX"
        />
        <Select
          label={"Округ"}
          options={OKRUG_OPTIONS}
          name={"district"}
          value={formData.district}
          onChange={handleSelectChange}
          placeholder="Выберите округ"
        />
        <Checkbox
          label={"Я согласен с условиями использования"}
          name={"agreeTerms"}
          checked={formData.agreeTerms}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label={"Получать новостную рассылку"}
          name={"newsletter"}
          checked={formData.newsletter}
          onChange={handleCheckboxChange}
        />
      </Form>
    );
  },
  args: {
    addMargin: true,
    withSeparator: true,
    size: "lg",
  },
};
