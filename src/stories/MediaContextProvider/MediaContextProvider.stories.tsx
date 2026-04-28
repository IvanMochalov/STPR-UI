import type { Meta, StoryObj } from "@storybook/react-vite";

import { MediaContextProvider } from "../../../lib/components/MediaContextProvider";
import { MediaContent } from "./components";

const meta: Meta<typeof MediaContextProvider> = {
  title: "Providers/MediaContextProvider",
  component: MediaContextProvider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
\`MediaContextProvider\` - это провайдер контекста для отслеживания текущего разрешения экрана.
### Особенности:
- Автоматически определяет тип устройства (desktop/tablet/mobile) на основе переданных breakpoints
- Предоставляет контекст с текущим состоянием устройства
- Должен оборачивать корневой компонент приложения (или ту часть, где нужен доступ к данным об устройстве)

### Рекомендации по использованию:
1. Оберните корневой компонент приложения, передав в параметр breakpoints объект типа \`TBreakpoints\` с нужными значениями точек перехода:

\`\`\`jsx
<MediaContextProvider breakpoints={{
  desktop: { minWidth: 1440 },
  tablet: { minWidth: 768, maxWidth: 1439 },
  mobile: { maxWidth: 767 }
}}>
    <App />
</MediaContextProvider>
\`\`\`
2. Получайте данные об устройстве в компонентах, импортировав \`MediaContext\` из "test-stpr-ui-kit"

\`\`\`jsx
const { device:
    {
        isDesktop,
        isTablet,
        isMobile
    }
} = useContext(MediaContext);
\`\`\`
`,
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: "Дочерние компоненты, которые будут иметь доступ к медиа-контексту",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    breakpoints: {
      description: "Объект с настройками breakpoints для разных устройств",
      table: {
        type: {
          summary: "TBreakpoints",
          detail: `{
  desktop: { minWidth: number },
  tablet: { minWidth: number, maxWidth: number },
  mobile: { maxWidth: number }
}`,
        },
        defaultValue: {
          summary: `{
  desktop: { minWidth: 1440 },
  tablet: { minWidth: 768, maxWidth: 1439 },
  mobile: { maxWidth: 767 }
}`,
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MediaContextProvider>;

export const Default: Story = {
  name: "Default presentation",
  args: {
    breakpoints: {
      desktop: { minWidth: 1440 },
      tablet: { minWidth: 768, maxWidth: 1439 },
      mobile: { maxWidth: 767 },
    },
    children: <MediaContent />,
  },
};
