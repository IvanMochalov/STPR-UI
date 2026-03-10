/**
 * Генерирует src/documentation/Changelog.mdx из CHANGELOG.md и версии из package.json.
 * Запускается перед storybook и storybook:build, чтобы в Storybook отображалась актуальная история версий.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const changelogPath = path.join(root, "CHANGELOG.md");
const packagePath = path.join(root, "package.json");
const outPath = path.join(root, "src", "documentation", "Changelog.mdx");

const changelog = fs.readFileSync(changelogPath, "utf-8");
const { version } = JSON.parse(fs.readFileSync(packagePath, "utf-8"));

const mdx = `import { Meta, Title } from "@storybook/addon-docs/blocks";

<Meta title="Documentation/Changelog" />
<Title>История версий</Title>

Текущая версия пакета в репозитории: **${version}**. (В шапке Storybook отображается версия собранной документации; в проекте может быть установлена другая версия \`test-stpr-ui-kit\`.)

Ниже — полная история изменений из \`CHANGELOG.md\`. По ней можно выбрать нужную версию для установки.

---

${changelog}
`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, mdx, "utf-8");

console.log("Changelog.mdx generated from CHANGELOG.md");
