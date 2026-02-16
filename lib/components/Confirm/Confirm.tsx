import React from "react";

import { ApplyButtons } from "../ApplyButtons";
import { Modal } from "../Modal";
import { ConfirmProps } from "./types";

export const Confirm: React.FC<ConfirmProps> = (props) => {
  const {
    classNameApplyButtonsRoot,
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
    submitBtnVariant,
    cancelBtnVariant,
    submitBtnClassName,
    cancelBtnClassName,
    classNameHeaderRoot,
    classNameSubHeaderRoot,
    classNameFooterRoot,
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
      classNameHeaderRoot={classNameHeaderRoot}
      classNameSubHeaderRoot={classNameSubHeaderRoot}
      classNameFooterRoot={classNameFooterRoot}
      footer={
        isVisibleFooter ? (
          <ApplyButtons
            classNameRoot={classNameApplyButtonsRoot}
            submitBtnClassName={submitBtnClassName}
            cancelBtnClassName={cancelBtnClassName}
            applyButtonsMobileDirection={applyButtonsMobileDirection}
            applyButtonsAlign={applyButtonsAlign}
            cancelBtnContent={cancelBtnContent}
            cancelBtnIconName={cancelBtnIconName}
            cancelBtnDisabled={cancelBtnDisabled}
            submitBtnContent={submitBtnContent}
            submitBtnIconName={submitBtnIconName}
            submitBtnVariant={submitBtnVariant}
            cancelBtnVariant={cancelBtnVariant}
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
