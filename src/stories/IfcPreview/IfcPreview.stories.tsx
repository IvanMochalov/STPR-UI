import { IfcPreview } from "@components/IfcPreview";
import type { Meta, StoryObj } from "@storybook/react-vite";

import fixtureIfcUrl from "../../story-assets/fixtures/sample.ifc?url";
import styles from "./IfcPreviewStories.module.scss";

const wasmPublicPath = `${import.meta.env.BASE_URL}components-assets/IfcPreview/web-ifc/`;

const meta: Meta<typeof IfcPreview> = {
  title: "Components/IfcPreview",
  component: IfcPreview,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Предпросмотр IFC: карточка с данными загруженного файла и оверлеем действий при наведении.
Просмотр 3D открывается в отдельном слое (Layer).

## Режимы (\`readonly\`)

- **\`readonly={true}\`** — только **просмотр**: модель через \`ifcData\` или \`url\`. Кнопок загрузки и удаления нет.
- **\`readonly={false}\`** — **просмотр**, **загрузка** файла с диска (иконка Upload) и **удаление** (иконка Trash), если модель уже есть. При просмотре приоритет: \`file\` → \`ifcData\` → \`url\`.

## Лимит размера для просмотра

- **\`maxFileSizeMb\`**: \`50\` | \`100\` | \`150\` (по умолчанию **50**).
- **\`disableFileSizeLimit\`**: \`false\` по умолчанию — лимит действует.
- Файл **можно выбрать** на карточку любого размера; при нажатии «Просмотр», если размер превышает лимит, в Layer показывается: «Загрузите файл размером до {N} МБ».
- Для отключения лимита: \`disableFileSizeLimit={true}\`.

\`\`\`jsx
<IfcPreview maxFileSizeMb={100} />
<IfcPreview disableFileSizeLimit />
\`\`\`

## Зависимости

- **Peer-зависимости**: \`three\` и \`web-ifc\` (те же мажорные версии, что у UI-кита).
- **Файл \`web-ifc.wasm\`**: должен отдаваться по HTTP как статика; в этом репозитории он копируется при \`npm install\` в \`public/components-assets/IfcPreview/web-ifc/web-ifc.wasm\` и попадает в \`dist/components-assets/...\` вместе со сборкой библиотеки.
- Демо-модель в сторях: \`src/story-assets/fixtures/sample.ifc\`.

## \`wasmPublicPath\`: зачем и как

По умолчанию компонент грузит WASM с URL **\`/components-assets/IfcPreview/web-ifc/\`** (каталог должен содержать \`web-ifc.wasm\`).

В своём приложении вы кладёте wasm **туда, куда отдаёт ваш билд** (например \`public/\` в Vite). **URL каталога на сервере должен совпадать** с тем, что вы передаёте в \`wasmPublicPath\` (обычно с \`\${import.meta.env.BASE_URL}\`, если у Vite нестандартный \`base\`).

Если путь неверный, браузер вместо WASM получит HTML (404 или \`index.html\` SPA) — тогда в консоли бывает ошибка вида \`WebAssembly.instantiate(): expected magic word ... found 3c 21 64 6f\` (это начало \`<!do...\`).

## Базовое использование (Storybook / корень сайта)

Файл лежит в \`public/components-assets/IfcPreview/web-ifc/\`, приложение с \`base: "/"\`:

\`\`\`jsx
<IfcPreview />
\`\`\`

## Другая папка в \`public\` (ваш префикс)

Например wasm лежит в \`public/lk/themes/main/assets/agr/components-assets/IfcPreview/web-ifc/web-ifc.wasm\` — тогда каталог для \`wasmPublicPath\` тот же относительный URL:

\`\`\`jsx
const wasmPublicPath =
  \`\${import.meta.env.BASE_URL}lk/themes/main/assets/agr/components-assets/IfcPreview/web-ifc/\`;

<IfcPreview wasmPublicPath={wasmPublicPath} />
\`\`\`
        `,
      },
    },
  },
  args: {
    mode: "view",
    wasmPublicPath,
    disableFileSizeLimit: false,
    readonly: false,
    maxFileSizeMb: 50,
  },
  argTypes: {
    mode: {
      table: {
        type: { summary: "TIfcPreviewMode", detail: `"view" | "dev"` },
        defaultValue: { summary: "view" },
      },
    },
    wasmPublicPath: {
      table: {
        defaultValue: { summary: "/components-assets/IfcPreview/web-ifc/" },
      },
    },
    readonly: {
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    maxFileSizeMb: {
      control: { type: "radio" },
      options: [50, 100, 150],
      table: {
        type: { summary: "TIfcPreviewMaxFileSizeMb", detail: "50 | 100 | 150" },
        defaultValue: { summary: "50" },
      },
    },
    disableFileSizeLimit: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    url: { control: false },
    ifcData: {
      control: false,
      table: {
        type: { summary: "ArrayBuffer | Uint8Array | null | undefined" },
        defaultValue: { summary: "null" },
      },
    },
    file: {
      control: false,
      table: {
        type: { summary: "File | null | undefined" },
        defaultValue: { summary: "null" },
      },
    },
    onFileChange: { action: "onFileChange" },
    onClear: { action: "onClear" },
    onModelLoaded: { action: "onModelLoaded" },
    onError: { action: "onError" },
    onOpenViewer: { action: "onOpenViewer" },
    onCloseViewer: { action: "onCloseViewer" },
    classNameRoot: { control: false },
    children: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof IfcPreview>;

export const Default: Story = {
  name: "Default IfcPreview",
};

export const ReadonlyWithFixtureUrl: Story = {
  name: "Readonly (fixture URL)",
  args: {
    readonly: true,
    ifcData: null,
    url: fixtureIfcUrl,
  },
  render: (args) => (
    <div className={styles.storyShell}>
      <IfcPreview {...args} />
    </div>
  ),
};
