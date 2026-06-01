import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STORYBOOK_DIR = path.resolve(__dirname, "../storybook-static");
const BASE_PATH = "/themes/main/assets/storybook/";

// Рекурсивно получаем все файлы
function getAllFiles(dir, extensions = [".html", ".js", ".css"]) {
  const files = [];

  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return files;
  }

  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...getAllFiles(fullPath, extensions));
    } else if (extensions.some((ext) => item.name.endsWith(ext))) {
      files.push(fullPath);
    }
  }

  return files;
}

// Заменяем относительные пути на абсолютные
function fixPaths(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  const originalContent = content;

  // Заменяем './sb-' на абсолютный путь
  content = content.replace(/(['"])\.\/(sb-[^'"]+)/g, `$1${BASE_PATH}$2`);

  // Заменяем './assets/' на абсолютный путь
  content = content.replace(/(['"])\.\/(assets\/[^'"]+)/g, `$1${BASE_PATH}$2`);

  // Заменяем './images/' на абсолютный путь
  content = content.replace(/(['"])\.\/(images\/[^'"]+)/g, `$1${BASE_PATH}$2`);

  // Заменяем url('./sb-') в CSS
  content = content.replace(/url\(['"]?\.\/(sb-[^'")\s]+)/g, `url('${BASE_PATH}$1`);

  // Заменяем url('./assets/') в CSS
  content = content.replace(/url\(['"]?\.\/(assets\/[^'")\s]+)/g, `url('${BASE_PATH}$1`);

  // Заменяем import './sb-' на абсолютный путь
  content = content.replace(/import\s+(['"])\.\/(sb-[^'"]+)/g, `import $1${BASE_PATH}$2`);

  // Заменяем src="./sb-" на абсолютный путь
  content = content.replace(/src=['"]\.\/sb-/g, `src="${BASE_PATH}sb-`);

  // Заменяем href="./sb-" на абсолютный путь
  content = content.replace(/href=['"]\.\/sb-/g, `href="${BASE_PATH}sb-`);

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Fixed paths in: ${path.relative(STORYBOOK_DIR, filePath)}`);
  }
}

// Основная функция
function main() {
  console.log(`Fixing paths in Storybook build...`);
  console.log(`Base path: ${BASE_PATH}`);
  console.log(`Directory: ${STORYBOOK_DIR}\n`);

  const files = getAllFiles(STORYBOOK_DIR);

  if (files.length === 0) {
    console.error("No files found. Make sure Storybook is built first.");
    process.exit(1);
  }

  console.log(`Found ${files.length} files to process\n`);

  for (const file of files) {
    fixPaths(file);
  }

  console.log("\nDone!");
}

main();
