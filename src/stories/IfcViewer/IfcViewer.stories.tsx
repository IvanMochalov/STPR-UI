import { IfcViewer } from "@components/IfcViewer";
import type { Meta, StoryObj } from "@storybook/react-vite";

import fixtureIfcUrl from "../../story-assets/fixtures/sample.ifc?url";
import styles from "./IfcViewerStories.module.scss";

const wasmPublicPath = `${import.meta.env.BASE_URL}components-assets/IfcPreview/web-ifc/`;

const meta: Meta<typeof IfcViewer> = {
  title: "Components/IfcViewer",
  component: IfcViewer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Минимальный 3D-просмотр IFC по URL: загрузка файла, инициализация web-ifc, построение сцены Three.js и встроенный \`Spinner\` с прогрессом.

Для карточки, Upload/Trash и \`Layer\` используйте [\`IfcPreview\`](?path=/docs/components-ifcpreview--docs).

## API

| Проп | Тип | Описание |
|------|-----|----------|
| \`url\` | \`string\` | **Обязательный.** HTTP(S) или \`blob:\` URL IFC-файла |
| \`wasmPublicPath\` | \`string\` | Каталог \`web-ifc.wasm\`; по умолчанию \`/components-assets/IfcPreview/web-ifc/\` |
| \`onModelLoaded\` | \`() => void\` | Модель построена и отображена |
| \`onError\` | \`(error: Error) => void\` | Ошибка fetch, wasm или парсинга IFC |
| \`classNameRoot\` | \`string\` | CSS-класс корневого контейнера (заполняет родителя по высоте/ширине) |

## Зависимости

- **Peer**: \`three\`, \`web-ifc\`.
- **\`web-ifc.wasm\`**: тот же путь, что у \`IfcPreview\` — \`components-assets/IfcPreview/web-ifc/\` после \`npm install\`.

\`\`\`jsx
const wasmPublicPath =
  \`\${import.meta.env.BASE_URL}components-assets/IfcPreview/web-ifc/\`;

<IfcViewer url={modelUrl} wasmPublicPath={wasmPublicPath} onModelLoaded={...} />
\`\`\`
        `,
      },
    },
  },
  args: {
    url: fixtureIfcUrl,
    wasmPublicPath,
  },
  argTypes: {
    url: {
      control: false,
      description: "URL IFC-модели (HTTP(S) или blob:).",
      table: { type: { summary: "string" } },
    },
    wasmPublicPath: {
      description: "Базовый URL каталога web-ifc.wasm.",
      table: {
        defaultValue: { summary: "/components-assets/IfcPreview/web-ifc/" },
      },
    },
    onModelLoaded: { action: "onModelLoaded", description: "Сцена готова к просмотру." },
    onError: { action: "onError", description: "Ошибка на любом этапе загрузки/инициализации." },
    classNameRoot: { control: false, description: "Дополнительный класс корня viewer." },
  },
  decorators: [
    (Story) => (
      <div className={styles.storyShell}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof IfcViewer>;

export const Default: Story = {
  name: "Default IfcViewer",
};
