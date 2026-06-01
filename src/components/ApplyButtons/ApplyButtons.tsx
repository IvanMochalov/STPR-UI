import cx from "clsx";
import React from "react";

import { Button } from "../Button";
import styles from "./ApplyButtons.module.scss";
import { ApplyButtonsProps } from "./types";

export const ApplyButtons: React.FC<ApplyButtonsProps> = (props) => {
  const {
    classNameRoot: propsClassNameRoot,
    applyButtonsMobileDirection = "column",
    applyButtonsAlign = "center",
    cancelBtnContent = "Отменить",
    cancelBtnIconName,
    submitBtnIconName,
    cancelBtnDisabled,
    submitBtnContent = "Подтвердить",
    formId,
    disabled,
    onClose,
    submit,
    loading,
    cancelBtnVariant = "secondary",
    submitBtnVariant = "primary",
    cancelBtnClassName: propsCancelBtnClassName,
    submitBtnClassName: propsSubmitBtnClassName,
  } = props;
  const classNameRoot = cx({
    [styles.spApplyButtons]: true,
    [styles[`spApplyButtons_mobile-${applyButtonsMobileDirection}`]]: applyButtonsMobileDirection,
    [styles[`spApplyButtons_align-${applyButtonsAlign}`]]: applyButtonsAlign,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });
  const classNameSubmitButton = cx({
    [styles.spApplyButtons__submit]: true,
    ...(propsSubmitBtnClassName && { [propsSubmitBtnClassName]: true }),
  });
  const classNameCancelButton = cx({
    [styles.spApplyButtons__cancel]: true,
    ...(propsCancelBtnClassName && { [propsCancelBtnClassName]: true }),
  });

  return (
    <div className={classNameRoot}>
      {onClose && (
        <Button
          type={"button"}
          variant={cancelBtnVariant}
          startIconName={cancelBtnIconName}
          classNameRoot={classNameCancelButton}
          disabled={cancelBtnDisabled}
          onClick={onClose}
        >
          {cancelBtnContent}
        </Button>
      )}
      {submit && (
        <Button
          type={"submit"}
          variant={submitBtnVariant}
          startIconName={submitBtnIconName}
          classNameRoot={classNameSubmitButton}
          form={formId ? formId : undefined}
          disabled={disabled}
          onClick={submit}
          loading={loading}
        >
          {submitBtnContent}
        </Button>
      )}
    </div>
  );
};
