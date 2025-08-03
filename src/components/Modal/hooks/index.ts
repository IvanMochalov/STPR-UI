import { useState } from "react";

interface UseModalParams {
  initialValue?: never;
}

export const useModal = (params: UseModalParams = {}) => {
  const { initialValue = null } = params;

  const [modalData, setModalData] = useState<null | { [name: string]: any }>(initialValue);

  const onOpenModal = (modalData: { [name: string]: never }) => {
    setModalData(modalData);
  };

  const onCloseModal = () => {
    setModalData(null);
  };

  return {
    isOpen: Boolean(modalData),
    modalData,
    onOpenModal,
    onCloseModal,
  };
};
