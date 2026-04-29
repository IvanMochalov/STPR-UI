import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, useModal, ViewImageModal } from "local-stpr-ui-kit";

import styles from "./ViewImageModalStories.module.scss";

const meta: Meta<typeof ViewImageModal> = {
  title: "Components/ViewImageModal",
  component: ViewImageModal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Модальное окно для просмотра изображений с поддержкой загрузки, обработки ошибок и адаптивным дизайном. 
Компонент автоматически блокирует скролл страницы и предоставляет удобный интерфейс для просмотра изображений.

## Основные возможности

- **Адаптивные размеры**: 350px (мобильные) → 740px (планшеты) → 825px (desktop)
- **Индикатор загрузки**: отображение спиннера во время загрузки изображения
- **Обработка ошибок**: автоматическая подмена на fallback изображение при ошибках
- **Запасное изображение**: возможность указать резервное изображение
- **Блокировка скролла**: автоматическое управление прокруткой страницы
- **Оптимизированное отображение**: object-fit: contain для правильного отображения

## Базовое использование
- Хук useModal разработан специально для управления модальными окнами (и подобных компонентов), экспортируется также из "test-stpr-ui-kit";

\`\`\`jsx
const { isOpen, onOpenModal, onCloseModal } = useModal();

return (
  <>
    <Button onClick={() => onOpenModal({})}>Просмотреть изображение</Button>
    {isOpen && (
      <ViewImageModal
        src="/path/to/image.jpg"
        onClose={onCloseModal}
      />
    )}
  </>
);
\`\`\`

### С запасным изображением и обработкой событий:

\`\`\`jsx
const { isOpen, onOpenModal, onCloseModal } = useModal();

return (
  <>
    <Button onClick={() => onOpenModal({})}>Просмотреть изображение</Button>
    {isOpen && (
      <ViewImageModal
        src="/path/to/image.jpg"
        fallbackSrc="/path/to/fallback.jpg"
        onLoad={() => console.log('Изображение загружено')}
        onError={() => console.log('Ошибка загрузки')}
        onClose={onCloseModal}
      />
    )}
  </>
);
        `,
      },
    },
  },
  argTypes: {
    src: {
      description: "URL основного изображения для отображения (обязательный)",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    fallbackSrc: {
      description: "URL запасного изображения, которое отображается при ошибке загрузки основного",
      control: { type: "text" },
    },
    zIndex: {
      description: "Z-index модального окна. Определяет порядок наложения поверх других элементов",
      control: false,
      table: {
        defaultValue: { summary: "999" },
      },
    },
    showLoader: {
      description: "Показывать индикатор загрузки во время загрузки изображения",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "true" },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента модального окна",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameImageRoot: {
      description: "Дополнительный CSS-класс для элемента изображения",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    onLoad: {
      description: "Callback-функция при успешной загрузке изображения",
      control: false,
      table: {
        type: { summary: "(event: React.SyntheticEvent<HTMLImageElement, Event>) => void" },
      },
    },
    onError: {
      description: "Callback-функция при ошибке загрузки изображения",
      control: false,
      table: {
        type: { summary: "(event: React.SyntheticEvent<HTMLImageElement, Event>) => void" },
      },
    },
    onClose: {
      description: "Callback-функция при закрытии модального окна (по клику на крестик)",
      control: false,
      table: {
        type: { summary: "(event: React.MouseEvent<HTMLButtonElement>) => void" },
      },
    },
  },
  args: {
    src: "/images/viewImageExample.jpg",
    fallbackSrc: "/images/fallBackSrc.jpeg",
    onLoad: () => console.log("loaded ViewImageModal"),
    onError: () => console.log("error ViewImageModal"),
    showLoader: true,
  },
};

export default meta;

type Story = StoryObj<typeof ViewImageModal>;

export const Default: Story = {
  name: "Default ViewImageModal",
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Показать изображение</Button>
        {isOpen && <ViewImageModal {...args} onClose={onCloseModal} />}
      </>
    );
  },
};

export const WithoutLoader: Story = {
  name: "ViewImageModal without Loader",
  args: {
    showLoader: false,
  },
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Показать без загрузчика</Button>
        {isOpen && <ViewImageModal {...args} onClose={onCloseModal} />}
      </>
    );
  },
};

export const WithErrorHandling: Story = {
  name: "ViewImageModal with Error Handling",
  args: {
    src: "/images/non-existent-image.jpg", // Несуществующее изображение для демонстрации ошибки
    fallbackSrc: "/images/fallBackSrc.jpeg",
  },
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Показать с ошибкой</Button>
        {isOpen && <ViewImageModal {...args} onClose={onCloseModal} />}
      </>
    );
  },
};

export const WithCallbacks: Story = {
  name: "ViewImageModal with Callbacks",
  args: {
    onLoad: (event) => {
      console.log("Изображение успешно загружено", event);
      // Можно добавить аналитику или дополнительную логику
    },
    onError: (event) => {
      console.log("Ошибка загрузки изображения", event);
      // Можно отправить ошибку в систему мониторинга
    },
  },
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Показать с callback&apos;ами</Button>
        {isOpen && <ViewImageModal {...args} onClose={onCloseModal} />}
      </>
    );
  },
};

export const CustomStyling: Story = {
  name: "ViewImageModal with Custom Styling",
  args: {
    classNameRoot: styles.customViewImageModal,
    classNameImageRoot: styles.customImageStyle,
  },
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Показать с кастомными стилями</Button>
        {isOpen && <ViewImageModal {...args} onClose={onCloseModal} />}

        <style>{`
          .custom-view-image-modal {
            border: 2px solid #007bff;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 123, 255, 0.3);
          }
          .custom-image-style {
            border-radius: 8px;
          }
        `}</style>
      </>
    );
  },
};
