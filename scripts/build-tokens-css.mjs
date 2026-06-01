import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import * as sass from "sass";

const root = join(fileURLToPath(new URL("..", import.meta.url)));
const input = join(root, "src/styles/tokens.scss");
const output = join(root, "dist/styles/tokens.css");

const main = async () => {
  const result = sass.compile(input, {
    loadPaths: [join(root, "src/styles")],
    style: "expanded",
  });

  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, result.css);
  console.log(`Tokens CSS: ${output}`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
