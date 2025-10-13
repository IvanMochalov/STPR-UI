import "react-datepicker/dist/react-datepicker.css";

import cx from "clsx";
import { ru } from "date-fns/locale/ru";
import React, { ReactNode, useState } from "react";
import BaseDatePicker, { ReactDatePickerCustomHeaderProps } from "react-datepicker";

import { DatePickerInput } from "../DatePickerInput";
import { EIconName, Icon } from "../Icons";
import { Label } from "../Label";
import { Text } from "../Text";
import styles from "./DatePicker.module.scss";
import { IDatePickerProps } from "./types";

export const DatePicker: React.FC<IDatePickerProps> = (props) => {
  const {
    placeholderText = "дд.мм.гг",
    dateFormatMask = "99.99.99",
    dateFormat = "dd.MM.yyyy",
    size = "lg",
    disabled,
    required,
    error,
    label,
    readOnlyInput = true,
    value,
    selected,
    onCalendarOpen,
    onCalendarClose,
    onMouseDownInput,
    isClearable,
    onChange,
    onBlur,
    onFocus,
    name,
    changed,
    onMouseEnter,
    infoTooltipText,
    tooltipPosition,
    isRelative = true,
    minDate,
    maxDate,
    classNameRoot: propsClassNameRoot,
    classNameDatePickerInputRoot: propsClassNameDatePickerInputRoot,
    classNameLabel: propsClassNameLabel,
    classNameBaseTooltipRoot: propsClassNameBaseTooltipRoot,
  } = props;

  const [focused, setFocused] = useState(false);

  const _onCalendarOpen = () => {
    if (onCalendarOpen) {
      onCalendarOpen();
    }
    onFocus && onFocus();
    setFocused(true);
  };
  const _onCalendarClose = () => {
    if (onCalendarClose) {
      onCalendarClose();
    }
    onBlur && onBlur();
    setFocused(false);
  };

  const _onChange: (
    date: Date | null,
    event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
  ) => void = (date, _event) => {
    if (onChange) {
      // Создаем искусственный ChangeEvent для совместимости с DatePickerInput
      const syntheticEvent = {
        target: {
          name: name || "",
          value: date ? date.toISOString() : null,
        },
        // Можно добавить другие необходимые поля event'а если нужно
      } as React.ChangeEvent<HTMLInputElement>;
      name && onChange(syntheticEvent, { name, value: date });
    }
  };

  const classNameRoot = cx({
    [styles.datePicker]: true,
    [styles.datePicker_size]: size,
    [styles.datePicker_active]: Boolean(value),
    [styles.datePicker_error]: Boolean(error),
    [styles.datePicker_relative]: isRelative,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameFieldRoot = cx({
    [styles.datePicker__customInput]: true,
    ...(propsClassNameDatePickerInputRoot && { [propsClassNameDatePickerInputRoot]: true }),
  });

  const classNameLabel = cx({
    [styles.datePicker__label]: true,
    ...(propsClassNameLabel && { [propsClassNameLabel]: true }),
  });

  const classNameError = cx({
    [styles.datePicker__error]: true,
  });

  const onClear = (event: React.MouseEvent<HTMLElement>) => {
    _onChange(null, event);
  };

  const MyContainer = ({ className, children }: { className: string; children: ReactNode }) => {
    return (
      <div className={cx(styles.datePicker__customContainer, className)}>
        {children}
        {isClearable && (
          <div className={styles.datePicker__footer}>
            <Text
              classNameRoot={cx(
                styles.datePicker__footerActions,
                styles.datePicker__footerActions_clear,
              )}
              onClick={onClear}
            >
              Очистить
            </Text>
          </div>
        )}
      </div>
    );
  };

  return (
    <div onMouseEnter={onMouseEnter} className={classNameRoot}>
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
      <BaseDatePicker
        minDate={minDate}
        maxDate={maxDate}
        dateFormat={dateFormat}
        locale={ru}
        onBlur={onBlur}
        onFocus={onFocus}
        required={required}
        name={name}
        onChange={_onChange}
        onCalendarClose={_onCalendarClose}
        onCalendarOpen={_onCalendarOpen}
        selected={selected}
        value={value}
        disabled={disabled}
        renderCustomHeader={({
          monthDate,
          decreaseMonth,
          increaseMonth,
        }: ReactDatePickerCustomHeaderProps) => {
          const monthName = monthDate.toLocaleString("ru-RU", {
            month: "short",
          });
          const year = monthDate.getFullYear();
          const formattedDate = monthName.charAt(0).toUpperCase() + monthName.slice(1) + " " + year;

          return (
            <div className={styles.datePicker__customHeader}>
              <Text>{formattedDate.replace(".", "")}</Text>
              <div className={styles.datePicker__navigationWrapper}>
                <Icon
                  name={EIconName.ArrowBottom}
                  onClick={decreaseMonth}
                  className={cx(
                    styles.datePicker__navigation,
                    styles.datePicker__navigation_previous,
                  )}
                />
                <Icon
                  name={EIconName.ArrowBottom}
                  onClick={increaseMonth}
                  className={cx(styles.datePicker__navigation)}
                />
              </div>
            </div>
          );
        }}
        calendarContainer={MyContainer}
        customInput={
          <DatePickerInput
            placeholderText={placeholderText}
            dateFormatMask={dateFormatMask}
            changed={changed}
            classNameRoot={classNameFieldRoot}
            size={size}
            error={error}
            focused={focused}
            onMouseDownInput={onMouseDownInput}
            readOnlyInput={readOnlyInput}
            disabled={disabled}
          />
        }
      />
      {error && <div className={classNameError}>{error}</div>}
    </div>
  );
};
