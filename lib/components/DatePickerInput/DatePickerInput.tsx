import cx from "clsx";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import InputMask from "react-input-mask";

import { useClickOutside } from "../../../src/hooks/useClickOutside.ts";
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
    size = "lg",
    disabled,
    error,
    onClick,
    onBlur,
    onMouseDownInput,
    readOnlyInput = false,
    isVisibleCalendarIcon = false,
    focused,
    changed,
    classNameRoot: propsClassNameRoot,
    required,
    classNameLabel,
    tooltipPosition,
    label,
    infoTooltipText,
    classNameBaseTooltipRoot: propsClassNameBaseTooltipRoot,
  } = props;

  const [localFocused, setLocalFocused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useClickOutside(
    [rootRef],
    () => {
      setLocalFocused(false);
    },
    localFocused,
  );

  const isEmpty = Boolean(value);

  useEffect(() => {
    if (!focused) {
      setLocalFocused(false);
    }
  }, [focused]);

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setLocalFocused(true);

    if (onMouseDownInput) {
      onMouseDownInput(event);
    }
  };

  const onBlurContainer = () => {
    setLocalFocused(false);
  };

  const onChangeMask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value, name } = target;

    if (onChange) {
      onChange(event, { value, name });
    }
  };

  const classNameRoot = cx({
    [styles.datepickerInput]: true,
    [styles[`datepickerInput_${variant}`]]: variant,
    [styles.datepickerInput_active]: isEmpty,
    [styles.datepickerInput_size]: size,
    [styles.datepickerInput_disabled]: disabled,
    [styles.datepickerInput_changed]: changed,
    [styles.datepickerInput_focused]: focused || localFocused,
    [styles.datepickerInput_error]: Boolean(error),
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameInputRoot = cx({
    [styles.datepickerInput__input]: true,
    [styles.datepickerInput__input_clearStyles]: true,
  });

  const classNameIconRoot = cx({
    [styles.datepickerInput__icon]: true,
  });

  return (
    <div>
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
        ref={rootRef}
        onMouseDown={onMouseDown}
        onClick={onClick}
        onBlur={onBlurContainer}
        className={classNameRoot}
      >
        <InputMask
          className={styles.datepickerInput}
          alwaysShowMask={false}
          disabled={disabled}
          mask={dateFormatMask}
          onBlur={onBlur}
          onMouseDown={(event) => {
            if (readOnlyInput) {
              event.preventDefault();
            }
          }}
          onChange={onChangeMask}
          name={name}
          value={value}
          placeholder={placeholderText}
        >
          {(inputProps) => {
            return (
              <input
                {...inputProps}
                ref={ref} // ← передаем ref сюда
                autoComplete={"off"}
                placeholder={placeholderText}
                disabled={disabled}
                className={classNameInputRoot}
              />
            );
          }}
        </InputMask>
        {isVisibleCalendarIcon && <CalendarIcon className={classNameIconRoot} />}
      </div>
      {error && <div>{error}</div>}
    </div>
  );
});

DatePickerInput.displayName = "DatePickerInput";
