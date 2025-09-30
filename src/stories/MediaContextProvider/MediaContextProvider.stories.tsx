import type { Meta, StoryObj } from "@storybook/react";

import { MediaContextProvider } from "../../../lib/components/MediaContextProvider";
import { MediaContent } from "./components";
import mainStyles from "../Stories.module.scss";

const meta: Meta<typeof MediaContextProvider> = {
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
1. Оберните корневой компонент приложения, передав в параметр breakpoints объект типа TBreakpoints с нужными значениями точек перехода:

\`\`\`
<MediaContextProvider breakpoints={{
  desktop: { minWidth: 1440 },
  tablet: { minWidth: 768, maxWidth: 1439 },
  mobile: { maxWidth: 767 }
}}>
    <App />
</MediaContextProvider>
\`\`\`
2. Получайте данные об устройстве в компонентах:

\`\`\`
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
    },
    breakpoints: {
      description: "Объект с настройками breakpoints для разных устройств",
      table: {
        type: {
          summary: "object",
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
  decorators: [
    (Story) => (
      <div className={mainStyles.storyWrapper}>
        <Story />
      </div>
    ),
  ],
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
