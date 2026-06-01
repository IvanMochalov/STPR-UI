import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const main = async () => {
  const root = join(fileURLToPath(new URL("..", import.meta.url)));
  const src = join(root, "node_modules", "web-ifc", "web-ifc.wasm");
  const destDir = join(root, "public", "components-assets", "IfcPreview", "web-ifc");
  const dest = join(destDir, "web-ifc.wasm");

  await mkdir(destDir, { recursive: true });
  await copyFile(src, dest);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
