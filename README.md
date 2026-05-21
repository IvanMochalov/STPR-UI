# **Welcome to Test STPR UI ⚡️**

- Works out of the box. Test STPR UI contains a set of polished React components
  that work out of the box.

## Installing Test STPR UI

⚡️ Test STPR UI is made up of multiple components which you can import one by one.
Install the `test-stpr-ui-kit` package:

```sh
yarn add test-stpr-ui-kit
# or
npm install test-stpr-ui-kit
```

The package is **ESM-only**. Runtime dependencies (`clsx`, `date-fns`, `react-datepicker`, etc.) are installed
transitively with the package.

### Peer dependencies

Your app must satisfy:

- `react`, `react-dom` — required;
- `three`, `web-ifc` — required only for `IfcPreview` / `IfcViewer`.

## Getting set up

### 1. Design tokens (required)

Import once at the app entry (e.g. `main.tsx`):

```tsx
import "test-stpr-ui-kit/styles/tokens.css";
```

Component styles rely on `--spui-*` CSS variables from this file.

### 2. Components

```tsx
import { Button } from "test-stpr-ui-kit";

const App = () => <Button>⚡️ Test STPR UI is very easy to use! ⚡️</Button>;
```

Per-component CSS is loaded automatically via ESM side effects — no separate CSS import per component.

### 3. Vite + linked package (optional)

```ts
// consumer vite.config.ts
export default defineConfig({
  optimizeDeps: {
    exclude: ["test-stpr-ui-kit"],
  },
});
```

## Documentation

Full guide (tokens, fonts, IFC assets, TypeScript): **Storybook → Documentation → Introduction**.

Quick checklist: **Documentation → Cheat sheets → Package usage**.

## For library contributors

See **CONTRIBUTING.md** (components, stories, `src/test-stpr-ui-kit.ts`, release workflow).
