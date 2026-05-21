import { readdir, readFile, rename, writeFile } from "node:fs/promises";
import { join } from "node:path";

import type { Plugin } from "vite";

const walk = async (dir: string): Promise<string[]> => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(path)));
    } else {
      files.push(path);
    }
  }

  return files;
};

const rewriteBarrel = async (barrelPath: string): Promise<void> => {
  const source = await readFile(barrelPath, "utf8");
  const importByAlias = new Map<string, { exportedName: string; modulePath: string }>();

  for (const match of source.matchAll(/import\s*\{([^}]+)\}\s*from\s*["']([^"']+)["'];?/g)) {
    for (const part of match[1].split(",")) {
      const trimmed = part.trim();
      const aliasMatch = trimmed.match(/^([\w$]+)\s+as\s+([\w$]+)$/);
      const exportedName = aliasMatch?.[1] ?? trimmed;
      const localAlias = aliasMatch?.[2] ?? trimmed;

      importByAlias.set(localAlias, { exportedName, modulePath: match[2] });
    }
  }

  const exportBlock = source.match(/export\s*\{([\s\S]*?)\};/);
  if (!exportBlock) {
    throw new Error("Cannot parse export block in dist/test-stpr-ui-kit.js");
  }

  const lines = exportBlock[1]
    .split(",")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const reexport = line.match(/^([\w$]+)\s+as\s+([\w$]+)$/);
      if (!reexport) {
        throw new Error(`Unexpected export binding: ${line}`);
      }

      const binding = importByAlias.get(reexport[1]);
      if (!binding) {
        throw new Error(`Missing import for export alias: ${reexport[1]}`);
      }

      const publicName = reexport[2];
      const exportBinding =
        binding.exportedName === publicName
          ? publicName
          : `${binding.exportedName} as ${publicName}`;

      return `export { ${exportBinding} } from "${binding.modulePath}";`;
    });

  await writeFile(barrelPath, `${lines.join("\n")}\n`);
};

const fixCssModuleAssets = async (distDir: string): Promise<void> => {
  const files = await walk(distDir);
  const moduleCssFiles = files.filter((file) => file.endsWith(".module.css"));

  for (const oldPath of moduleCssFiles) {
    await rename(oldPath, oldPath.replace(/\.module\.css$/, ".css"));
  }

  for (const filePath of files) {
    if (!filePath.endsWith(".js")) {
      continue;
    }

    const content = await readFile(filePath, "utf8");
    if (!content.includes(".module.css")) {
      continue;
    }

    await writeFile(filePath, content.replace(/\.module\.css/g, ".css"));
  }
};

/** После lib-сборки: CSS без `.module.` в имени + barrel только re-export. */
export const libDistPostprocess = (
  distDir: string,
  barrelFileName = "test-stpr-ui-kit.js",
): Plugin => ({
  name: "vite-plugin-lib-dist-postprocess",
  apply: "build",
  enforce: "post",
  async closeBundle() {
    await fixCssModuleAssets(distDir);
    await rewriteBarrel(join(distDir, barrelFileName));
  },
});
