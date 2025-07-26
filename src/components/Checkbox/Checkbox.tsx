import cx from "clsx";
import React from "react";

import { InfoTooltip } from "../Tooltip";
import styles from "./Checkbox.module.scss";
import { CheckboxProps } from "./types";

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    checked,
    disabled,
    onChange,
    name,
    label,
    error,
    value,
    required,
    tooltipPosition,
    infoTooltipText,
    onMouseEnter,
    classNameRoot: propsClassNameRoot,
    classNameError: propsClassNameError,
  } = props;

  const classNameRoot = cx({
    [styles.spCheckbox]: true,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameBox = cx({
    [styles.spCheckbox__box]: true,
    [styles.spCheckbox__box_checked]: checked,
    [styles.spCheckbox__box_disabled]: disabled,
    [styles.spCheckbox__box_error]: error,
  });

  const classNameControl = cx({
    [styles.spCheckbox__control]: true,
  });

  const classNameLabel = cx({
    [styles.spCheckbox__label]: true,
  });

  const classNameRequired = cx({
    [styles.spCheckbox__required]: true,
  });

  const classNameError = cx({
    [styles.spCheckbox__error]: true,
    ...(propsClassNameError && { [propsClassNameError]: true }),
  });

  const classNameCheckboxTooltip = cx({
    [styles.spCheckbox__tooltip]: true,
  });

  const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    !disabled && onChange && onChange(event, { name, checked: !checked, value });
  };

  return (
    <div className={classNameRoot} onMouseEnter={onMouseEnter}>
      <label className={classNameBox}>
        <input
          type="checkbox"
          className={classNameControl}
          checked={checked}
          onChange={handleChangeChecked}
        />
        {label && <span className={classNameLabel}>{label}</span>}
        {required && <div className={classNameRequired}>*</div>}
        {infoTooltipText && (
          <div className={classNameCheckboxTooltip}>
            <InfoTooltip position={tooltipPosition} text={infoTooltipText} />
          </div>
        )}
      </label>
      {error && <div className={classNameError}>{error}</div>}
    </div>
  );
};
