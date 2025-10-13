import cx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import InputMask from "react-input-mask";

import { useClickOutside } from "../../../src/hooks/useClickOutside.ts";
import { CalendarIcon } from "../Icons";
import styles from "./DatePickerInput.module.scss";
import { IDatePickerInputProps } from "./types";

export const DatePickerInput: React.FC<IDatePickerInputProps> = (props) => {
  const {
    value,
    name,
    onChange,
    dateFormatMask = "99.99.9999",
    variant = "outlined",
    size = "lg",
    disabled,
    error,
    placeholderText = "дд.мм.гггг",
    onClick,
    onBlur,
    onMouseDownInput,
    readOnlyInput = false,
    focused,
    changed,
    classNameRoot: propsClassNameRoot,
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
      onChange(event, { value: value ? new Date(value) : null, name });
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
              autoComplete={"off"}
              placeholder={placeholderText}
              disabled={disabled}
              className={classNameInputRoot}
            />
          );
        }}
      </InputMask>
      <CalendarIcon className={classNameIconRoot} />
    </div>
  );
};
