import InputMask from "@mona-health/react-input-mask";
import cx from "clsx";
import React, { forwardRef } from "react";

import { CalendarIcon } from "../Icons";
import { Label } from "../Label";
import styles from "./DatePickerInput.module.scss";
import { IDatePickerInputProps } from "./types";

export const DatePickerInput = forwardRef<HTMLInputElement, IDatePickerInputProps>((props, ref) => {
  const {
    value,
    name,
    onChange,
    dateFormatMask = "99.99.9999",
    placeholderText = "дд.мм.гггг",
    variant = "outlined",
    disabled = false,
    error,
    onClick,
    onMouseDownInput,
    readOnlyInput = false,
    isVisibleCalendarIcon = true,
    isVisibleErrorText = true,
    required,
    classNameRoot: propsClassNameRoot,
    classNameError: propsClassNameError,
    classNameLabel: propsClassNameLabel,
    tooltipPosition,
    label,
    infoTooltipText,
    classNameBaseTooltipRoot: propsClassNameBaseTooltipRoot,
    onMouseEnter,
  } = props;

  const classNameRoot = cx({
    [styles.datepickerInput]: true,
    [styles.datepickerInput_error]: Boolean(error),
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameContainer = cx({
    [styles.datepickerInput__container]: true,
  });

  const classNameControl = cx({
    [styles.datepickerInput__control]: true,
    [styles.datepickerInput__control_disabled]: disabled,
    [styles[`datepickerInput__control_${variant}`]]: variant,
    [styles.datepickerInput__control_withIcon]: isVisibleCalendarIcon,
  });

  const classNameIcon = cx({
    [styles.datepickerInput__icon]: true,
  });

  const classNameError = cx({
    [styles.datepickerInput__error]: true,
    ...(propsClassNameError && { [propsClassNameError]: true }),
  });

  const classNameLabel = cx({
    ...(propsClassNameLabel && { [propsClassNameLabel]: true }),
  });

  const handleContainerClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClick) {
      onClick(event);
    }
  };

  const onChangeMask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value, name } = target;

    if (readOnlyInput) {
      return;
    }

    if (onChange) {
      onChange(event, { value, name });
    }
  };

  return (
    <div className={classNameRoot}>
      {label && (
        <Label
          classNameRoot={classNameLabel}
          tooltipPosition={tooltipPosition}
          required={required}
          label={label}
          infoTooltipText={infoTooltipText}
          classNameBaseTooltipRoot={propsClassNameBaseTooltipRoot}
        />
      )}
      <div
        className={classNameContainer}
        onMouseEnter={onMouseEnter}
        onMouseDown={onMouseDownInput}
        onClick={handleContainerClick}
      >
        <InputMask
          ref={ref}
          className={classNameControl}
          alwaysShowMask={false}
          disabled={disabled}
          mask={dateFormatMask}
          onChange={onChangeMask}
          name={name}
          value={value || ""}
          placeholder={placeholderText}
        >
          <input autoComplete="off" />
        </InputMask>
        {isVisibleCalendarIcon && <CalendarIcon className={classNameIcon} />}
      </div>
      {isVisibleErrorText && error && <div className={classNameError}>{error}</div>}
    </div>
  );
});

DatePickerInput.displayName = "DatePickerInput";
