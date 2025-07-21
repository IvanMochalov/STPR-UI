# **Welcome to Test STPR UI ⚡️**

- Works out of the box. Test STPR UI contains a set of polished React components
  that work out of the box.

# Installing Test STPR UI

⚡️Test STPR UI is made up of multiple components and tools which you can import
one by one. All you need to do is install the `test-stpr-ui-kit` package:

```sh
$ yarn add test-stpr-ui-kit
# or
$ npm install --save test-stpr-ui-kit
```

# Getting set up

To start using the components, please follow these steps:

1. Import styles in main react file (main.jsx or app.jsx) provded by **test-stpr-ui-kit**

```jsx
import "test-stpr-ui-kit/styles";

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App/>
    </StrictMode>
);
```

`import "test-stpr-ui-kit/styles"` is a temporary solution needed to style components.

2. Now you can start using components like so!:

```jsx
import { Button } from "test-stpr-ui-kit";

const App = () => <Button>⚡️Test STPR UI is very easy to use!⚡️</Button>;
```
