import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ApplyButtons, Button, Modal, Text, useModal } from "../../../lib/test-stpr-ui-kit.ts";
import styles from "./ModalStories.module.scss";

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Компонент модального окна для отображения важной информации, форм или действий поверх основного контента. 
Автоматически блокирует скролл страницы и предоставляет гибкие настройки внешнего вида.

## Основные возможности

- **Два размера максимальной ширины МО**: md (600px) и lg (920px) на desktop
- **Выравнивание по вертикали**: центрирование или позиционирование сверху
- **Заголовки**: основной заголовок и подзаголовок
- **Футер**: область для кнопок действий
- **Блокировка скролла**: автоматическое управление прокруткой страницы
- **Адаптивный дизайн**: разные отступы и размеры на мобильных и desktop

## Базовое использование
- Хук useModal разработан специально для управления МО (и подобных компонентов), экспортируется также из "test-stpr-ui-kit";

\`\`\`jsx
const { isOpen, onOpenModal, onCloseModal } = useModal();

return (
  <>
    <Button onClick={() => onOpenModal({...})}>Открыть модальное окно</Button>
    {isOpen && (
      <Modal
        header="Заголовок модального окна"
        onClose={onCloseModal}
        zIndex={1000}
      >
        <div>Содержимое модального окна</div>
      </Modal>
    )}
  </>
);
\`\`\`

### Несколько модальных окон, управляемых одним хуком useModal:
- Хук useModal также возвращает modalData, которая была передана аргументом в onOpenModal;

\`\`\`jsx
const { modalData, onOpenModal, onCloseModal } = useModal();

return (
  <>
    <Button onClick={() => onOpenModal({isOpenFirstModal: true})}>Открыть первое модальное окно</Button>
    <Button onClick={() => onOpenModal({isOpenSecondModal: true})}>Открыть второе модальное окно</Button>
    {modalData?.isOpenFirstModal && (
      <Modal
        header="Заголовок первого модального окна"
        onClose={onCloseModal}
        zIndex={1000}
      >
        <div>Содержимое первого модального окна</div>
      </Modal>
    )}
    {modalData?.isOpenSecondModal && (
      <Modal
        header="Заголовок второго модального окна"
        onClose={onCloseModal}
        zIndex={1000}
      >
        <div>Содержимое второго модального окна</div>
      </Modal>
    )}
  </>
);
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    zIndex: {
      description: "Z-index модального окна. Определяет порядок наложения поверх других элементов",
      control: { type: "number" },
      table: {
        defaultValue: { summary: "999" },
      },
    },
    size: {
      description:
        "Размер модального окна:\n- 'lg': большой (920px max-width на desktop)\n- 'md': средний (600px max-width на desktop)",
      control: { type: "radio" },
      options: ["md", "lg"],
      table: {
        defaultValue: { summary: "lg" },
        type: { summary: "union:| 'md' | 'lg'" },
      },
    },
    modalVerticalAlign: {
      description:
        "Вертикальное выравнивание модального окна:\n- 'top': прижато к верху экрана\n- 'center': центрировано по вертикали",
      control: { type: "radio" },
      options: ["top", "center"],
      table: {
        defaultValue: { summary: "top" },
        type: { summary: "union:| 'top' | 'center'" },
      },
    },
    textAlign: {
      description: "Горизонтальное выравнивание текста внутри модального окна",
      control: { type: "radio" },
      options: ["left", "center", "right"],
      table: {
        defaultValue: { summary: "left" },
        type: { summary: "union:| 'left' | 'center' | 'right'" },
      },
    },
    isHiddenModal: {
      description:
        "Скрыть модальное окно. Используется для скрытия МО при отсутствии условного рендеринга компонента Modal",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    isVisibleCloseButton: {
      description: "Показывать кнопку закрытия в правом верхнем углу",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "true" },
      },
    },
    header: {
      description:
        "Заголовок модального окна. Может быть строкой или React-компонентом (обязательный)",
      control: { type: "text" },
      table: {
        type: { summary: "string | ReactNode" },
      },
    },
    subHeader: {
      description:
        "React-компонент. Подзаголовок модального окна. Отображается под основным заголовком",
      control: { type: "text" },
    },
    footer: {
      description: "Футер модального окна. Обычно содержит кнопки действий",
      control: false,
    },
    children: {
      description: "Основное содержимое модального окна",
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    onClose: {
      description:
        "Callback-функция при закрытии модального окна (по клику на крестик или вне области)",
      control: false,
    },
    style: {
      description: "Инлайн-стили для кастомизации внешнего вида модального окна",
      control: { type: "object" },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента модального окна",
      control: false,
    },
    classNameLayerRoot: {
      description: "Дополнительный CSS-класс для слоя (Layer) модального окна",
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "20vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Modal>;

// Базовый хук для управления модальным окном
const useModalStory = (defaultOpen = false) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const onOpenModal = () => setIsOpen(true);
  const onCloseModal = () => setIsOpen(false);

  return { isOpen, onOpenModal, onCloseModal };
};

export const Default: Story = {
  name: "Default Modal",
  args: {
    children: "Содержимое модального окна. Здесь может быть любой React-компонент или текст.",
    header: "Заголовок модального окна",
    isHiddenModal: false,
    isVisibleCloseButton: true,
    textAlign: "left",
    size: "lg",
    modalVerticalAlign: "top",
    zIndex: 1000,
    subHeader: "",
  },
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Открыть модальное окно</Button>
        {isOpen && <Modal {...args} onClose={onCloseModal} />}
      </>
    );
  },
};

export const MediumSize: Story = {
  name: "Medium Size Modal",
  args: {
    children:
      "Это модальное окно среднего размера. Идеально для коротких сообщений и подтверждений.",
    header: "Подтверждение действия",
    size: "md",
    zIndex: 1000,
  },
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Открыть среднее окно</Button>
        {isOpen && <Modal {...args} onClose={onCloseModal} />}
      </>
    );
  },
};

export const WithSubHeader: Story = {
  name: "Modal with SubHeader",
  args: {
    children: "Основное содержимое модального окна.",
    header: "Основной заголовок",
    subHeader: "Дополнительный подзаголовок с поясняющей информацией",
    zIndex: 1000,
  },
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Открыть с подзаголовком</Button>
        {isOpen && <Modal {...args} onClose={onCloseModal} />}
      </>
    );
  },
};

export const WithFooter: Story = {
  name: "Modal with Footer",
  args: {
    children: (
      <div>
        <Text>Форма редактирования данных пользователя.</Text>
        <div style={{ marginTop: "16px" }}>
          <input placeholder="Имя" style={{ padding: "8px", width: "100%", marginBottom: "8px" }} />
          <input placeholder="Email" style={{ padding: "8px", width: "100%" }} />
        </div>
      </div>
    ),
    header: "Редактирование профиля",
    subHeader: "Внесите необходимые изменения в данные пользователя",
    footer: (
      <ApplyButtons
        cancelBtnContent="Отмена"
        submitBtnContent="Сохранить"
        onClose={() => console.log("Закрыть")}
        submit={() => console.log("Сохранить")}
      />
    ),
    zIndex: 1000,
  },
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Открыть с футером</Button>
        {isOpen && <Modal {...args} onClose={onCloseModal} />}
      </>
    );
  },
};

export const CenteredModal: Story = {
  args: {
    children: "Это модальное окно центрировано по середине экрана.",
    header: "Центрированное окно",
    modalVerticalAlign: "center",
    textAlign: "center",
    zIndex: 1000,
  },
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Открыть центрированное</Button>
        {isOpen && <Modal {...args} onClose={onCloseModal} />}
      </>
    );
  },
};

export const WithoutCloseButton: Story = {
  name: "Modal without Close Button",
  args: {
    children: "Это модальное окно нельзя закрыть через крестик. Используйте кнопку ниже.",
    header: "Окно без кнопки закрытия",
    isVisibleCloseButton: false,
    zIndex: 1000,
  },
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Открыть окно</Button>
        {isOpen && (
          <div>
            <Modal {...args} onClose={onCloseModal}>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <Button onClick={onCloseModal}>Закрыть модальное окно</Button>
              </div>
            </Modal>
          </div>
        )}
      </>
    );
  },
};

export const RightAlignedText: Story = {
  name: "Right Aligned Text Modal",
  args: {
    children: "Весь текст в этом модальном окне выровнен по правому краю.",
    header: "Правовое соглашение",
    textAlign: "right",
    zIndex: 1000,
  },
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Открыть с правым выравниванием</Button>
        {isOpen && <Modal {...args} onClose={onCloseModal} />}
      </>
    );
  },
};

export const CustomHeader: Story = {
  name: "Modal with Custom Header",
  args: {
    children: "Заголовок этого модального окна реализован как кастомный React-компонент.",
    header: (
      <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#007bff" }}>
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>⚡</span>
        <span>Кастомный заголовок</span>
      </div>
    ),
    zIndex: 1000,
  },
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Открыть с кастомным заголовком</Button>
        {isOpen && <Modal {...args} onClose={onCloseModal} />}
      </>
    );
  },
};

export const SizesComparison: Story = {
  name: "Modal Sizes Comparison",
  render: () => {
    const { isOpen: isOpenLg, onOpenModal: onOpenLg, onCloseModal: onCloseLg } = useModalStory();
    const { isOpen: isOpenMd, onOpenModal: onOpenMd, onCloseModal: onCloseMd } = useModalStory();

    return (
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Button onClick={onOpenMd}>Открыть Medium (600px)</Button>
        <Button onClick={onOpenLg}>Открыть Large (920px)</Button>

        {isOpenMd && (
          <Modal header="Medium Modal" size="md" onClose={onCloseMd} zIndex={1000}>
            <Text>Это модальное окно среднего размера (max-width: 600px на desktop).</Text>
          </Modal>
        )}

        {isOpenLg && (
          <Modal header="Large Modal" size="lg" onClose={onCloseLg} zIndex={1001}>
            <Text>Это модальное окно большого размера (max-width: 920px на desktop).</Text>
          </Modal>
        )}
      </div>
    );
  },
};

export const ScrollableContent: Story = {
  name: "Modal with Scrollable Content",
  args: {
    header: "Прокручиваемое модальное окно",
    zIndex: 1000,
  },
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Открыть с прокруткой</Button>
        {isOpen && (
          <Modal {...args} onClose={onCloseModal}>
            <div
              className={styles.scrollableContent}
              style={{ maxHeight: "400px", overflowY: "auto" }}
            >
              {Array.from({ length: 20 }).map((_, index) => (
                <div key={index} style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                  <Text>Элемент списка #{index + 1}</Text>
                </div>
              ))}
            </div>
          </Modal>
        )}
      </>
    );
  },
};
