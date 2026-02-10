import cx from "clsx";
import React from "react";

import { InfoTooltip } from "../Tooltip";
import styles from "./Checkbox.module.scss";
import { CheckboxProps } from "./types";

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    size = "lg",
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
    [styles.spCheckbox__box_disabled]: disabled,
    [styles.spCheckbox__box_error]: error,
  });

  const classNameCheckmark = cx({
    [styles.spCheckbox__box__checkmark]: true,
    [styles[`spCheckbox__box__checkmark--size-${size}`]]: size,
  });

  const classNameInnerSquare = cx({
    [styles.spCheckbox__box__innerSquare]: true,
    [styles.spCheckbox__box__innerSquare_checked]: checked,
    [styles[`spCheckbox__box__innerSquare--size-${size}`]]: size,
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
        <span className={classNameCheckmark}>
          <span className={classNameInnerSquare} />
        </span>
        {label && (
          <span className={classNameLabel}>
            {label}

            {required && <div className={classNameRequired}>*</div>}
          </span>
        )}
        {infoTooltipText && (
          <div className={classNameCheckboxTooltip}>
            <InfoTooltip hover={true} position={tooltipPosition} text={infoTooltipText} />
          </div>
        )}
      </label>
      {error && <div className={classNameError}>{error}</div>}
    </div>
  );
};
