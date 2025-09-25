import React from "react";

import { ApplyButtons } from "../ApplyButtons";
import { Modal } from "../Modal";
import { ConfirmProps } from "./types";

export const Confirm: React.FC<ConfirmProps> = (props) => {
  const {
    zIndex,
    header,
    subHeader,
    cancelBtnContent,
    cancelBtnDisabled,
    cancelBtnIconName,
    submitBtnContent,
    submitBtnIconName,
    submit,
    disabled,
    formId,
    onClose,
    applyButtonsMobileDirection = "column",
    applyButtonsAlign = "right",
    modalVerticalAlign = "top",
    textAlign = "left",
    loading,
    isVisibleCloseButton,
    isHiddenModal,
    size,
    classNameRoot,
    classNameLayerRoot,
  } = props;

  const isVisibleFooter =
    cancelBtnContent || cancelBtnIconName || submitBtnContent || submitBtnIconName;

  return (
    <Modal
      zIndex={zIndex}
      header={header}
      onClose={onClose}
      modalVerticalAlign={modalVerticalAlign}
      textAlign={textAlign}
      subHeader={subHeader}
      isVisibleCloseButton={isVisibleCloseButton}
      isHiddenModal={isHiddenModal}
      size={size}
      classNameRoot={classNameRoot}
      classNameLayerRoot={classNameLayerRoot}
      footer={
        isVisibleFooter ? (
          <ApplyButtons
            applyButtonsMobileDirection={applyButtonsMobileDirection}
            applyButtonsAlign={applyButtonsAlign}
            cancelBtnContent={cancelBtnContent}
            cancelBtnIconName={cancelBtnIconName}
            cancelBtnDisabled={cancelBtnDisabled}
            submitBtnContent={submitBtnContent}
            submitBtnIconName={submitBtnIconName}
            formId={formId}
            disabled={disabled}
            onClose={onClose}
            submit={submit}
            loading={loading}
          />
        ) : null
      }
    ></Modal>
  );
};
