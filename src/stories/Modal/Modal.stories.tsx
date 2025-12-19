import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  ApplyButtons,
  Button,
  Confirm,
  Form,
  Input,
  Modal,
  Text,
  useModal,
} from "../../../lib/test-stpr-ui-kit.ts";
import mainStyles from "../Stories.module.scss";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
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
- **Умный скролл контента**: при \`modalVerticalAlign: "center"\` и переполнении контента скроллируется только область контента, хедер и футер остаются фиксированными

## Особенности вертикального выравнивания

### \`modalVerticalAlign: "top"\`
- Модальное окно прижато к верху экрана
- Подходит для окон с небольшим количеством контента
- Весь контент доступен без внутреннего скролла

### \`modalVerticalAlign: "center"\` 
- Модальное окно центрировано по вертикали
- Автоматически ограничивает максимальную высоту окна
- При переполнении контента добавляется скролл только для области контента
- Хедер и футер остаются фиксированными на месте
- Идеально для окон с большим количеством контента

## Базовое использование
Хук useModal разработан специально для управления МО (и подобных компонентов), экспортируется также из "test-stpr-ui-kit";

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
Хук useModal также возвращает modalData, которая была передана аргументом в onOpenModal;

Особенность данной реализации в том, что при открытии МО при наличии другого открытого МО,
 отображается последнее открытое ([см. пример Modal With Modal Inside](#modal-with-modal-inside)).


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

Для того чтобы одним хуком \`useModal\` управлять несколькими МО, которые отображаются поверх друг друга,
 передайте в \`onOpenModal\` второй аргумент в качестве \`true\` ==> \`onOpenModal({isOpenSecondModal: true}, true)\`.
 Такое использование сохранит данные из предыдущего состояни \`modalData\` ([см. пример Modal With Modal Inside And Not Closing Others](#modal-with-modal-inside-and-not-closing-others-with-closing-control)).

 \`\`\`jsx
const { modalData, onOpenModal, onCloseModal } = useModal();

return (
  <>
    <Button onClick={() => onOpenModal({ isOpenEditUserData: true })}>Открыть с футером</Button>
    {modalData?.isOpenEditUserData && (
      <Modal
        zIndex={1000}
        header={"Редактирование профиля"}
        subHeader={"Внесите необходимые изменения в данные пользователя"}
        onClose={onCloseModal}
        footer={
          <ApplyButtons
            cancelBtnContent="Отмена"
            applyButtonsAlign={"right"}
            submitBtnContent="Сохранить"
            onClose={() => console.log("Закрыть")}
            submit={() => onOpenModal({ isOpenConfirm: true }, true)}
          />
        }
      >
        <Form addMargin={true} size={"md"}>
          <Input placeholder="Имя" name={"name"} onChange={() => {}} />
          <Input placeholder="Email" name={"email"} onChange={() => {}} />
          <Text type={"p1"} color={"red"}>
            Нажми сохранить для открытия второго МО
          </Text>
        </Form>
      </Modal>
    )}
    {modalData?.isOpenConfirm && (
      <Confirm
        zIndex={1001}
        modalVerticalAlign={"center"}
        size={"md"}
        header={"Вы уверены?"}
        onClose={onCloseModal}
        cancelBtnContent={"Нет"}
        submitBtnContent={"Да"}
        submit={onCloseModal}
      />
    )}
  </>
);
\`\`\`

В данном случае видно, что \`onCloseModal\` закрывает все МО. Для того чтобы закрывать МО по отдельности используйте \`onCloseModal\` следующим образом: 
\`(e) => onCloseModal(e, { isOpenConfirm: false })\`. При таком использовании \`onCloseModal\` не будет сетить \`modalData\` в \`null\`,
 а будет обновлять состояние на основе данных, переданных вторым аргументов в \`onCloseModal\` с сохранением предыдущего состояния
 ([см. пример Modal With Modal Inside And Not Closing Others With Closing Control](#modal-with-modal-inside-and-not-closing-others)).

 \`\`\`jsx
const { modalData, onOpenModal, onCloseModal } = useModal();

return (
  <>
    <Button onClick={() => onOpenModal({ isOpenEditUserData: true })}>Открыть с футером</Button>
    {modalData?.isOpenEditUserData && (
      <Modal
        zIndex={1000}
        header={"Редактирование профиля"}
        subHeader={"Внесите необходимые изменения в данные пользователя"}
        onClose={onCloseModal}
        footer={
          <ApplyButtons
            cancelBtnContent="Отмена"
            applyButtonsAlign={"right"}
            submitBtnContent="Сохранить"
            onClose={() => console.log("Закрыть")}
            submit={() => onOpenModal({ isOpenConfirm: true }, true)}
          />
        }
      >
        <Form addMargin={true} size={"md"}>
          <Input placeholder="Имя" name={"name"} onChange={() => {}} />
          <Input placeholder="Email" name={"email"} onChange={() => {}} />
          <Text type={"p1"} color={"red"}>
            Нажми сохранить для открытия второго МО
          </Text>
        </Form>
      </Modal>
    )}
    {modalData?.isOpenConfirm && (
      <Confirm
        zIndex={1001}
        modalVerticalAlign={"center"}
        size={"md"}
        header={"Вы уверены?"}
        onClose={(e) => onCloseModal(e, { isOpenConfirm: false })}
        cancelBtnContent={"Нет"}
        submitBtnContent={"Да"}
        submit={(e) => onCloseModal(e, { isOpenConfirm: false })}
      />
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
        type: {
          summary: "TModalSize",
          detail: "'md' | 'lg'",
        },
      },
    },
    disabled: {
      description:
        "Блокирует взаимодействие с модальным окном. При true отображает спинер поверх содержимого и блокирует все пользовательские события",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    modalVerticalAlign: {
      description:
        "Вертикальное выравнивание модального окна:\n- 'top': прижато к верху экрана (подходит для короткого контента)\n- 'center': центрировано по вертикали (автоматически добавляет скролл для контента при переполнении, фиксируя хедер и футер)",
      control: { type: "radio" },
      options: ["top", "center"],
      table: {
        defaultValue: { summary: "top" },
        type: {
          summary: "TModalVerticalAlign",
          detail: "'center' | 'top'",
        },
      },
    },
    textAlign: {
      description: "Горизонтальное выравнивание текста внутри модального окна",
      control: { type: "radio" },
      options: ["left", "center", "right"],
      table: {
        defaultValue: { summary: "left" },
        type: {
          summary: "TTextAlign",
          detail: "'left' | 'center' | 'right'",
        },
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
      table: {
        type: { summary: "ReactNode" },
      },
    },
    footer: {
      description: "Футер модального окна. Обычно содержит кнопки действий",
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
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
      table: {
        type: { summary: "string" },
      },
    },
    classNameHeaderRoot: {
      description: "Дополнительный CSS-класс для хедера модального окна",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameFooterRoot: {
      description: "Дополнительный CSS-класс для футера модального окна",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameLayerRoot: {
      description: "Дополнительный CSS-класс для слоя (Layer) модального окна",
      control: false,
      table: {
        type: { summary: "string" },
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

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  name: "Default Modal",
  args: {
    children: "Содержимое модального окна. Здесь может быть любой React-компонент или текст.",
    header: "Заголовок модального окна",
    isHiddenModal: false,
    disabled: false,
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
        <Form addMargin={true} size={"md"}>
          <Input placeholder="Имя" name={"name"} onChange={() => {}} />
          <Input placeholder="Email" name={"email"} onChange={() => {}} />
        </Form>
      </div>
    ),
    header: "Редактирование профиля",
    subHeader: "Внесите необходимые изменения в данные пользователя",
    zIndex: 1000,
  },
  render: (args) => {
    const { isOpen, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Открыть с футером</Button>
        {isOpen && (
          <Modal
            {...args}
            onClose={onCloseModal}
            footer={
              <ApplyButtons
                applyButtonsAlign={"right"}
                cancelBtnContent="Отмена"
                submitBtnContent="Сохранить"
                onClose={onCloseModal}
                submit={onCloseModal}
              />
            }
          />
        )}
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
          <Modal {...args} onClose={onCloseModal}>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <Button onClick={onCloseModal}>Закрыть модальное окно</Button>
            </div>
          </Modal>
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
    const { modalData, onOpenModal, onCloseModal } = useModal();

    return (
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Button onClick={() => onOpenModal({ isOpenMd: true })}>Открыть Medium (600px)</Button>
        <Button onClick={() => onOpenModal({ isOpenLg: true })}>Открыть Large (920px)</Button>

        {modalData?.isOpenMd && (
          <Modal header="Medium Modal" size="md" onClose={onCloseModal} zIndex={1000}>
            <Text>Это модальное окно среднего размера (max-width: 600px на desktop).</Text>
          </Modal>
        )}

        {modalData?.isOpenLg && (
          <Modal header="Large Modal" size="lg" onClose={onCloseModal} zIndex={1001}>
            <Text>Это модальное окно большого размера (max-width: 920px на desktop).</Text>
          </Modal>
        )}
      </div>
    );
  },
};

export const WithModalInside: Story = {
  name: "Modal With Modal Inside",
  args: {
    children: (
      <Form addMargin={true} size={"md"}>
        <Input placeholder="Имя" name={"name"} onChange={() => {}} />
        <Input placeholder="Email" name={"email"} onChange={() => {}} />
        <Text type={"p1"} color={"red"}>
          Нажми сохранить для открытия второго МО
        </Text>
      </Form>
    ),
    modalVerticalAlign: "center",
    header: "Редактирование профиля",
    subHeader: "Внесите необходимые изменения в данные пользователя",
    zIndex: 1000,
  },
  render: (args) => {
    const { modalData, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({ isOpenEditUserData: true })}>Открыть с футером</Button>
        {modalData?.isOpenEditUserData && (
          <Modal
            {...args}
            onClose={onCloseModal}
            footer={
              <ApplyButtons
                cancelBtnContent="Отмена"
                applyButtonsAlign={"right"}
                submitBtnContent="Сохранить"
                onClose={() => console.log("Закрыть")}
                submit={() => onOpenModal({ isOpenConfirm: true })}
              />
            }
          />
        )}
        {modalData?.isOpenConfirm && (
          <Confirm
            size={"md"}
            header={"Вы уверены?"}
            onClose={onCloseModal}
            cancelBtnContent={"Нет"}
            submitBtnContent={"Да"}
            submit={onCloseModal}
          />
        )}
      </>
    );
  },
};

export const WithModalInsideAndNotClosingOthers: Story = {
  name: "Modal With Modal Inside And Not Closing Others",
  args: {
    children: (
      <Form addMargin={true} size={"md"}>
        <Input placeholder="Имя" name={"name"} onChange={() => {}} />
        <Input placeholder="Email" name={"email"} onChange={() => {}} />
        <Text type={"p1"} color={"red"}>
          Нажми сохранить для открытия второго МО
        </Text>
      </Form>
    ),
    header: "Редактирование профиля",
    subHeader: "Внесите необходимые изменения в данные пользователя",
    zIndex: 1000,
  },
  render: (args) => {
    const { modalData, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({ isOpenEditUserData: true })}>Открыть с футером</Button>
        {modalData?.isOpenEditUserData && (
          <Modal
            {...args}
            onClose={onCloseModal}
            footer={
              <ApplyButtons
                cancelBtnContent="Отмена"
                applyButtonsAlign={"right"}
                submitBtnContent="Сохранить"
                onClose={() => console.log("Закрыть")}
                submit={() => onOpenModal({ isOpenConfirm: true }, true)}
              />
            }
          />
        )}
        {modalData?.isOpenConfirm && (
          <Confirm
            zIndex={1001}
            modalVerticalAlign={"center"}
            size={"md"}
            header={"Вы уверены?"}
            onClose={onCloseModal}
            cancelBtnContent={"Нет"}
            submitBtnContent={"Да"}
            submit={onCloseModal}
          />
        )}
      </>
    );
  },
};

export const WithModalInsideAndNotClosingOthersWithClosingControl: Story = {
  name: "Modal With Modal Inside And Not Closing Others With Closing Control",
  args: {
    children: (
      <Form addMargin={true} size={"md"}>
        <Input placeholder="Имя" name={"name"} onChange={() => {}} />
        <Input placeholder="Email" name={"email"} onChange={() => {}} />
        <Text type={"p1"} color={"red"}>
          Нажми сохранить для открытия второго МО
        </Text>
      </Form>
    ),
    header: "Редактирование профиля",
    subHeader: "Внесите необходимые изменения в данные пользователя",
    zIndex: 1000,
  },
  render: (args) => {
    const { modalData, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({ isOpenEditUserData: true })}>Открыть с футером</Button>
        {modalData?.isOpenEditUserData && (
          <Modal
            {...args}
            onClose={onCloseModal}
            footer={
              <ApplyButtons
                cancelBtnContent="Отмена"
                applyButtonsAlign={"right"}
                submitBtnContent="Сохранить"
                onClose={() => console.log("Закрыть")}
                submit={() => onOpenModal({ isOpenConfirm: true }, true)}
              />
            }
          />
        )}
        {modalData?.isOpenConfirm && (
          <Confirm
            zIndex={1001}
            modalVerticalAlign={"center"}
            size={"md"}
            header={"Вы уверены?"}
            onClose={(e) => onCloseModal(e, { isOpenConfirm: false })}
            cancelBtnContent={"Нет"}
            submitBtnContent={"Да"}
            submit={(e) => onCloseModal(e, { isOpenConfirm: false })}
          />
        )}
      </>
    );
  },
};
