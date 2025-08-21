import React from "react";

import { ApplyButtons } from "../ApplyButtons";
import { Modal } from "../Modal";
import { ConfirmProps } from "./types";

export const Confirm: React.FC<ConfirmProps> = (props) => {
  const {
    zIndex,
    title,
    subtitle,
    cancelBtnContent,
    cancelBtnDisabled,
    cancelBtnIconName,
    submitBtnContent,
    submit,
    disabled,
    formId,
    onClose,
    mobile = "column",
    align = "right",
    modalAlign = "top",
    loading,
  } = props;

  const isVisibleFooter = cancelBtnContent || submitBtnContent;

  return (
    <Modal
      zIndex={zIndex}
      header={title}
      onClose={onClose}
      align={modalAlign}
      subHeader={subtitle}
      footer={
        isVisibleFooter ? (
          <ApplyButtons
            mobile={mobile}
            align={align}
            cancelBtnContent={cancelBtnContent}
            cancelBtnIconName={cancelBtnIconName}
            cancelBtnDisabled={cancelBtnDisabled}
            submitBtnContent={submitBtnContent}
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
