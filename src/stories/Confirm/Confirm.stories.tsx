import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { EIconName } from "../../../lib/components/Icons";
import { Button, Confirm, Icon, Text, useModal } from "../../../lib/test-stpr-ui-kit.ts";
import mainStyles from "../Stories.module.scss";

const meta: Meta<typeof Confirm> = {
  component: Confirm,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Компонент диалогового окна подтверждения, объединяющий функциональность Modal и ApplyButtons. 
Предназначен для запросов подтверждения действий, отображения предупреждений и принятия решений.

## Основные возможности

- **Наследует все свойства Modal и ApplyButtons**: полная совместимость с базовыми компонентами
- **Автоматическая интеграция кнопок**: ApplyButtons автоматически размещаются в футере
- **Гибкая настройка кнопок**: поддержка различных комбинаций отмены/подтверждения
- **Универсальное использование**: подходит для подтверждений, предупреждений, решений
- **Адаптивный дизайн**: наследует адаптивность от родительских компонентов

## Структура компонента

Confirm объединяет два основных компонента:

### Modal (основа)
- Заголовок и подзаголовок
- Визуальное оформление и позиционирование
- Управление z-index и overlay
- Блокировка скролла страницы

### ApplyButtons (футер)
- Кнопки отмены и подтверждения
- Гибкое расположение и адаптивность
- Состояния загрузки и блокировки
- Поддержка иконок

## Базовое использование
- Хук useModal разработан специально для управления МО (и подобных компонентов), экспортируется также из "test-stpr-ui-kit";

\`\`\`jsx
const { isOpen, onOpenModal, onCloseModal } = useModal();

return (
  <>
    <Button onClick={() => onOpenModal({...})}>Открыть модальное окно</Button>
    {isOpen && (
      <Confirm
        zIndex={1000}
        header="Подтверждение действия"
        subHeader="Вы уверены, что хотите выполнить это действие?"
        cancelBtnContent="Отмена"
        submitBtnContent="Подтвердить"
        onClose={onCloseModal}
        submit={handleConfirm}
      />
    )}
  </>
);
\`\`\`

## Преимущества перед использованием Modal + ApplyButtons

1. **Упрощенный синтаксис**: не нужно manually создавать футер
2. **Согласованность**: единый подход ко всем диалогам подтверждения
3. **Сокращение кода**: меньше boilerplate кода
4. **Легкость поддержки**: изменения применяются ко всем подтверждениям
        `,
      },
    },
  },
  argTypes: {
    // Modal Props
    zIndex: {
      description: "Z-index модального окна. Определяет порядок наложения поверх других элементов",
      control: { type: "number" },
      table: {
        defaultValue: { summary: "999" },
      },
    },
    size: {
      description:
        "Размер модального окна:\n- 'lg': большой (920px max-width)\n- 'md': средний (600px max-width)",
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
    modalVerticalAlign: {
      description:
        "Вертикальное выравнивание модального окна:\n- 'top': прижато к верху\n- 'center': центрировано",
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
      description: "Горизонтальное выравнивание текста",
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
      description: "Скрыть модальное окно. Для условного рендеринга",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    isVisibleCloseButton: {
      description: "Показывать кнопку закрытия в правом верхнем углу",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "true" },
        type: { summary: "boolean" },
      },
    },
    header: {
      description: "Заголовок диалога подтверждения. Может быть строкой или React-компонентом",
      control: { type: "text" },
      table: {
        type: { summary: "string | ReactNode" },
      },
    },
    subHeader: {
      description: "Подзаголовок с дополнительной информацией или пояснением",
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
      },
    },
    onClose: {
      description:
        "Callback-функция при закрытии диалога (кнопка отмены или крестик). Если не указан, кнопка 'Cancel' не отображается",
      control: false,
    },

    // ApplyButtons Props
    applyButtonsMobileDirection: {
      description:
        "Расположение кнопок на мобильных устройствах:\n- 'column': в колонку\n- 'column-reverse': в колонку (обратный порядок)\n- 'row': в строку",
      control: { type: "radio" },
      options: ["row", "column", "column-reverse"],
      table: {
        defaultValue: { summary: "column" },
        type: {
          summary: "TApplyButtonsMobileDirection",
          detail: '"row" | "column" | "column-reverse"',
        },
      },
    },
    applyButtonsAlign: {
      description: "Выравнивание кнопок по горизонтали",
      control: { type: "radio" },
      options: ["left", "center", "right"],
      table: {
        defaultValue: { summary: "right" },
        type: {
          summary: "TApplyButtonsAlign",
          detail: '"left" | "center" | "right"',
        },
      },
    },
    cancelBtnContent: {
      description: "Текст кнопки отмены.",
      control: { type: "text" },
    },
    cancelBtnIconName: {
      description: "Иконка для кнопки отмены",
      control: { type: "select" },
      options: Object.values(EIconName),
    },
    submitBtnContent: {
      description: "Текст кнопки подтверждения.",
      control: { type: "text" },
    },
    submitBtnIconName: {
      description: "Иконка для кнопки подтверждения",
      control: { type: "select" },
      options: Object.values(EIconName),
    },
    cancelBtnDisabled: {
      description: "Заблокировать кнопку отмены",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      description: "Заблокировать кнопку подтверждения",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    loading: {
      description: "Показать индикатор загрузки на кнопке подтверждения",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    formId: {
      description: "ID формы для привязки кнопки подтверждения",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    submit: {
      description:
        "Callback-функция при подтверждении действия. Если не указан, кнопка 'Submit' не отображается",
      control: false,
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    submitBtnClassName: {
      description: "Дополнительный CSS-класс для корневого элемента кнопки 'Submit'",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    cancelBtnClassName: {
      description: "Дополнительный CSS-класс для корневого элемента кнопки 'Cancel'",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameLayerRoot: {
      description: "Дополнительный CSS-класс для слоя модального окна",
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
  },
  decorators: [
    (Story) => (
      <div className={mainStyles.storyWrapper}>
        <Story />
      </div>
    ),
  ],
  args: {
    onClose: () => {},
    submit: () => {},
    submitBtnVariant: "primary",
    cancelBtnVariant: "secondary",
  },
};

export default meta;

type Story = StoryObj<typeof Confirm>;

export const Default: Story = {
  name: "Default Confirm Dialog",
  args: {
    zIndex: 1000,
    header: "Подтверждение действия",
    subHeader: "Вы уверены, что хотите выполнить это действие?",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Подтвердить",
    applyButtonsAlign: "right",
    isHiddenModal: false,
    cancelBtnDisabled: false,
    disabled: false,
    loading: false,
    applyButtonsMobileDirection: "column",
    isVisibleCloseButton: true,
    modalVerticalAlign: "top",
    textAlign: "left",
    size: "md",
  },
  render: (args) => {
    const { isOpen, onCloseModal, onOpenModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Открыть подтверждение</Button>
        {isOpen && <Confirm {...args} onClose={onCloseModal} />}
      </>
    );
  },
};

export const DeleteConfirmation: Story = {
  args: {
    zIndex: 1000,
    header: "Удаление элемента",
    subHeader: "Это действие нельзя будет отменить. Элемент будет удален безвозвратно.",
    cancelBtnContent: "Отменить",
    submitBtnContent: "Удалить",
    submitBtnIconName: EIconName.Trash,
    textAlign: "center",
    size: "md",
  },
  render: (args) => {
    const { isOpen, onCloseModal, onOpenModal } = useModal();

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
      alert("Удаление выполнено");
      onCloseModal(e);
    };

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Удалить элемент</Button>
        {isOpen && <Confirm {...args} onClose={onCloseModal} submit={handleDelete} />}
      </>
    );
  },
};

export const CenteredDialog: Story = {
  name: "Centered Confirm Dialog",
  args: {
    zIndex: 1000,
    header: "Важное действие",
    subHeader: "Это действие повлияет на несколько систем. Пожалуйста, подтвердите ваше решение.",
    cancelBtnContent: "Вернуться",
    submitBtnContent: "Продолжить",
    modalVerticalAlign: "center",
    textAlign: "center",
    size: "lg",
  },
  render: (args) => {
    const { isOpen, onCloseModal, onOpenModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Выполнить важное действие</Button>
        {isOpen && <Confirm {...args} onClose={onCloseModal} submit={onCloseModal} />}
      </>
    );
  },
};

export const LoadingState: Story = {
  name: "Confirm with Loading",
  args: {
    zIndex: 1000,
    header: "Сохранение данных",
    subHeader: "Пожалуйста, подождите пока данные сохраняются...",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Сохранить",
    loading: true,
    disabled: true,
    cancelBtnDisabled: true,
    size: "md",
  },
  render: (args) => {
    const { isOpen, onCloseModal, onOpenModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Сохранить с загрузкой</Button>
        {isOpen && <Confirm {...args} onClose={onCloseModal} submit={onCloseModal} />}
      </>
    );
  },
};

export const WithoutCancel: Story = {
  name: "Confirm without Cancel",
  args: {
    zIndex: 1000,
    header: "Информационное сообщение",
    subHeader: "Это действие будет выполнено автоматически через 5 секунд.",
    submitBtnContent: "Понятно",
    applyButtonsAlign: "center",
    size: "md",
  },
  render: (args) => {
    const { isOpen, onCloseModal, onOpenModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Показать уведомление</Button>
        {isOpen && <Confirm {...args} onClose={onCloseModal} submit={onCloseModal} />}
      </>
    );
  },
};

export const WithoutSubmit: Story = {
  name: "Confirm without Submit",
  args: {
    zIndex: 1000,
    header: "Информация",
    subHeader: "Это просто информационное сообщение. Для продолжения закройте диалог.",
    cancelBtnContent: "Закрыть",
    applyButtonsAlign: "center",
    size: "md",
  },
  render: (args) => {
    const { isOpen, onCloseModal, onOpenModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Показать информацию</Button>
        {isOpen && <Confirm {...args} onClose={onCloseModal} submit={undefined} />}
      </>
    );
  },
};

export const MobileOptimized: Story = {
  name: "Mobile Optimized Confirm",
  args: {
    zIndex: 1000,
    header: "Мобильное подтверждение",
    subHeader: "Этот диалог оптимизирован для использования на мобильных устройствах.",
    cancelBtnContent: "Отмена",
    submitBtnContent: "ОК",
    applyButtonsMobileDirection: "column-reverse",
    applyButtonsAlign: "center",
    size: "md",
  },
  render: (args) => {
    const { isOpen, onCloseModal, onOpenModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Мобильное подтверждение</Button>
        {isOpen && <Confirm {...args} onClose={onCloseModal} submit={onCloseModal} />}
      </>
    );
  },
};

export const LeftAligned: Story = {
  name: "Left Aligned Confirm",
  args: {
    zIndex: 1000,
    header: "Левое выравнивание",
    subHeader: "Весь текст и кнопки выровнены по левому краю.",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Подтвердить",
    applyButtonsAlign: "left",
    textAlign: "left",
    size: "md",
  },
  render: (args) => {
    const { isOpen, onCloseModal, onOpenModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Левое выравнивание</Button>
        {isOpen && <Confirm {...args} onClose={onCloseModal} submit={onCloseModal} />}
      </>
    );
  },
};

export const CustomHeaderContent: Story = {
  name: "Confirm with Custom Header",
  args: {
    zIndex: 1000,
    header: (
      <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#d63384" }}>
        <Icon name={EIconName.WarningColor} />
        <Text style={{ fontWeight: "bold" }}>Важное предупреждение</Text>
      </div>
    ),
    subHeader:
      "Это действие требует особого внимания. Пожалуйста, проверьте все данные перед подтверждением.",
    cancelBtnContent: "Отмена",
    submitBtnContent: "Я понимаю риск",
    size: "lg",
  },
  render: (args) => {
    const { isOpen, onCloseModal, onOpenModal } = useModal();

    return (
      <>
        <Button onClick={() => onOpenModal({})}>Важное предупреждение</Button>
        {isOpen && <Confirm {...args} onClose={onCloseModal} submit={onCloseModal} />}
      </>
    );
  },
};

export const MultipleConfirms: Story = {
  name: "Multiple Confirm Dialogs",
  render: () => {
    const { modalData, onOpenModal, onCloseModal } = useModal();

    return (
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button onClick={() => onOpenModal({ isOpenFirstConfirm: true })}>
          Простое подтверждение
        </Button>
        <Button onClick={() => onOpenModal({ isOpenSecondConfirm: true })}>
          Удаление с иконками
        </Button>

        {modalData?.isOpenFirstConfirm && (
          <Confirm
            zIndex={1000}
            header="Простое подтверждение"
            subHeader="Это стандартный диалог подтверждения"
            cancelBtnContent="Отмена"
            submitBtnContent="OK"
            onClose={onCloseModal}
            size="md"
          />
        )}

        {modalData?.isOpenSecondConfirm && (
          <Confirm
            zIndex={1001}
            header="Удаление элемента"
            subHeader="Элемент будет удален безвозвратно"
            cancelBtnContent="Отменить"
            submitBtnContent="Удалить"
            submitBtnIconName={EIconName.Trash}
            onClose={onCloseModal}
            submit={() => {}}
            size="md"
          />
        )}
      </div>
    );
  },
};
