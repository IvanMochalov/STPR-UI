import React, { useState } from "react";

interface UseModalParams {
  initialValue?: never;
}

export const useModal = (params: UseModalParams = {}) => {
  const { initialValue = null } = params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [modalData, setModalData] = useState<null | { [name: string]: any }>(initialValue);

  const onOpenModal = (
    modalData: { [name: string]: boolean | NonNullable<unknown> },
    isKeepRest = false,
  ) => {
    if (isKeepRest) {
      setModalData((prevState) => ({ ...prevState, ...modalData }));
      return;
    }
    setModalData(modalData);
  };

  const onCloseModal = (
    _event?: React.MouseEvent<HTMLButtonElement>,
    closeData?: { [name: string]: boolean | NonNullable<unknown> },
  ) => {
    if (closeData && Object.keys(closeData).length > 0) {
      setModalData((prevState) => ({ ...prevState, ...closeData }));
      return;
    }
    setModalData(null);
  };

  return {
    isOpen: Boolean(modalData),
    modalData,
    onOpenModal,
    onCloseModal,
  };
};
