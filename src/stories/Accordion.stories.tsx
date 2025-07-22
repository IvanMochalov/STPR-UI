import type {Meta, StoryObj} from "@storybook/react";

import {Accordion} from "../components";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
    tags: ["autodocs"],
    argTypes: {
        classNameRoot: {
            control: false,
        },
        classNameHeader: {
            control: false,
        },
        classNameTitle: {
            control: false,
        },
        classNameIcon: {
            control: false,
        },
        children: {
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
                width: "500px"
            }}>
                <Story/>
            </div>
        )
    ],
    args: {
        name: "Основное задание",
        children: <div style={{textAlign: "justify"}}>
            Разработать комплексную стратегию устойчивого развития, направленную на баланс между ростом населения и
            ограниченными ресурсами Земли. Внедрить глобальные программы по повышению уровня образования, доступности
            контрацепции и гендерного равенства для снижения рождаемости в перенаселенных регионах. Одновременно
            стимулировать переход на возобновляемые ресурсы, технологии замкнутого цикла и альтернативные источники пищи
            (например, искусственное мясо). Создать международные стандарты экологичного производства и потребления,
            чтобы минимизировать нагрузку на планету. Реализовать эти меры через сотрудничество ООН, государств и
            частного сектора с учетом культурных особенностей регионов.
        </div>,
    }
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    name: "Default accordion",
};