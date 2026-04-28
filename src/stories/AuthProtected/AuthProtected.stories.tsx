import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { AuthProtected } from "../../../lib/components/AuthProtected";
import { Button } from "../../../lib/components/Button";
import { Text } from "../../../lib/components/Text";
import styles from "./AuthProtectedStories.module.scss";

const meta: Meta<typeof AuthProtected> = {
  title: "Components/AuthProtected",
  component: AuthProtected,
  tags: ["autodocs"],
  argTypes: {
    isNeedAuthorized: {
      description: `Флаг, указывающий на необходимость авторизации.
При значении true отображается модальное окно с предложением авторизоваться\n`,
      control: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onClickAuthorization: {
      description: `Callback-функция, вызываемая при клике на кнопку авторизации.
Обычно содержит логику перенаправления на страницу авторизации или открытия модального окна.\n`,
      control: false,
      table: {
        type: {
          summary: "() => void",
          detail:
            "onClickAuthorization={() => {\n" +
            "  // логика обработки клика по кнопке Authorization;\n" +
            "}}",
        },
      },
    },
    unauthorizedMessage: {
      description: `Текст сообщения, отображаемый в модальном окне при необходимости авторизации.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Необходимо авторизоваться"' },
      },
    },
    authButtonText: {
      description: `Текст на кнопке авторизации в модальном окне.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Авторизоваться"' },
      },
    },
    confirmSize: {
      description: `Размер модального окна подтверждения авторизации.\n`,
      control: { type: "select" },
      options: ["md", "lg"],
      table: {
        type: {
          summary: "TModalSize",
          detail: "'md' | 'lg'",
        },
        defaultValue: { summary: '"md"' },
      },
    },
    zIndex: {
      description: `z-index модального окна для управления слоями отображения.\n`,
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "999" },
      },
    },
    children: {
      description: `Контент, который будет защищен проверкой авторизации.
Отображается только когда авторизация не требуется.\n`,
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Компонент для защиты контента, требующего авторизации пользователя.

## Особенности:
- Автоматически отображает модальное окно при необходимости авторизации
- Использует компонент Confirm для единообразия интерфейса
- Поддерживает кастомизацию текстов и размеров модального окна
- Управление z-index для корректного отображения поверх других элементов
- Центрированное расположение контента и кнопок в модальном окне

## Поведение:
- При \`isNeedAuthorized={true}\` блокирует доступ к защищенному контенту
- Показывает модальное окно с предложением авторизоваться
- После авторизации (через \`onClickAuthorization\`) скрывает модальное окно
- Позволяет кастомизировать все текстовые элементы модального окна

## Рекомендации по использованию:
- Используйте для защиты страниц, разделов или отдельных компонентов, требующих авторизации.
- На данный момент компонент реализован без интеграции с API, то есть в поле \`isNeedAuthorized\` нужно передавать \`true\`, если какой либо из ваших методов API разрешился со статусом \`401 Unauthorized\`

### Базовое использование

\`\`\`jsx
<AuthProtected
  isNeedAuthorized={!isAuthenticated}
  onClickAuthorization={() => redirectToLogin()}
  unauthorizedMessage="Для доступа к этому разделу требуется авторизация"
  authButtonText="Войти в систему"
>
  <ProtectedContent />
</AuthProtected>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AuthProtected>;

export const Default: Story = {
  name: "Default Auth Protected",
  args: {
    unauthorizedMessage: "Необходимо авторизоваться",
    authButtonText: "Авторизоваться",
    confirmSize: "md",
    zIndex: 999,
  },
  render: (args) => {
    const [isNotAuth, setIsNotAuth] = useState(false);
    return (
      <AuthProtected
        {...args}
        isNeedAuthorized={isNotAuth}
        onClickAuthorization={() => setIsNotAuth(false)}
      >
        <div className={styles.contentWrapper}>
          <Text type="h3">Защищенный контент</Text>
          <Text>Этот контент доступен только авторизованным пользователям</Text>
          <div style={{ marginTop: "20px" }}>
            <Button onClick={() => setIsNotAuth(true)}>Сымитировать отсутствие авторизации</Button>
          </div>
        </div>
      </AuthProtected>
    );
  },
};

export const CustomMessage: Story = {
  name: "With Custom Message",
  args: {
    unauthorizedMessage: "Для доступа к этому функционалу требуется войти в систему",
    authButtonText: "Войти",
    confirmSize: "md",
  },
  render: (args) => {
    const [isNotAuth, setIsNotAuth] = useState(false);
    return (
      <AuthProtected
        {...args}
        isNeedAuthorized={isNotAuth}
        onClickAuthorization={() => setIsNotAuth(false)}
      >
        <div className={styles.contentWrapper}>
          <Text type="h3">Премиум контент</Text>
          <Text>Этот раздел доступен только зарегистрированным пользователям</Text>
          <div style={{ marginTop: "20px" }}>
            <Button onClick={() => setIsNotAuth(true)}>Сымитировать отсутствие авторизации</Button>
          </div>
        </div>
      </AuthProtected>
    );
  },
};
