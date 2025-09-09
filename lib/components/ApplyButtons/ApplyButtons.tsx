import cx from "clsx";
import React from "react";

import { Button } from "../Button";
import styles from "./ApplyButtons.module.scss";
import { ApplyButtonsProps } from "./types";

export const ApplyButtons: React.FC<ApplyButtonsProps> = (props) => {
  const {
    mobile = "column",
    align = "center",
    cancelBtnContent,
    cancelBtnIconName,
    cancelBtnDisabled,
    submitBtnContent,
    formId,
    disabled,
    onClose,
    submit,
    loading,
  } = props;
  const classNameRoot = cx({
    [styles.spApplyButtons]: true,
    [styles[`spApplyButtons_mobile-${mobile}`]]: mobile,
    [styles[`spApplyButtons_align-${align}`]]: align,
  });
  const classNameSubmitButton = cx({
    [styles.spApplyButtons__submit]: true,
  });
  const classNameCancelButton = cx({
    [styles.spApplyButtons__cancel]: true,
  });

  return (
    <div className={classNameRoot}>
      {cancelBtnContent && onClose && (
        <Button
          type={"button"}
          variant={"secondary"}
          iconName={cancelBtnIconName}
          classNameRoot={classNameCancelButton}
          disabled={cancelBtnDisabled}
          onClick={onClose}
        >
          {cancelBtnContent}
        </Button>
      )}
      {submitBtnContent && (
        <Button
          type={"submit"}
          variant={"primary"}
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
