import "react-datepicker/dist/react-datepicker.css";

import cx from "clsx";
import { ru } from "date-fns/locale/ru";
import React, { ReactNode, useRef, useState } from "react";
import BaseDatePicker, { ReactDatePickerCustomHeaderProps } from "react-datepicker";

import { DatePickerInput } from "../DatePickerInput";
import { EIconName, Icon } from "../Icons";
import { Text } from "../Text";
import styles from "./DatePicker.module.scss";
import { IDatePickerProps } from "./types";

export const DatePicker: React.FC<IDatePickerProps> = (props) => {
  const {
    variant = "outlined",
    size = "lg",
    placeholderText = "дд.мм.гггг",
    dateFormatMask = "99.99.9999",
    dateFormat = "dd.MM.yyyy",
    readOnlyInput = true,
    isClearable = true,
    isRelative = true,
    shouldCloseOnSelect = false,
    closeOnScroll = false,
    disabled,
    required,
    error,
    label,
    value,
    selected,
    onCalendarOpen,
    onCalendarClose,
    onMouseDownInput,
    onChange,
    onBlur,
    onFocus,
    name,
    changed,
    onMouseEnter,
    infoTooltipText,
    tooltipPosition,
    minDate,
    maxDate,
    classNameRoot: propsClassNameRoot,
    classNameDatePickerInputRoot: propsClassNameDatePickerInputRoot,
    classNameLabel: propsClassNameLabel,
    classNameBaseTooltipRoot: propsClassNameBaseTooltipRoot,
  } = props;

  const [focused, setFocused] = useState(false);
  const [localSelected, setLocalSelected] = useState(selected);

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
      name && onChange({ name, value: date });
    }
  };

  const _onSelect = (date: Date | null) => {
    if (shouldCloseOnSelect) {
      _onChange(date);
    }

    setLocalSelected(date);
  };

  const classNameRoot = cx({
    [styles.datePicker]: true,
    [styles.datePicker_size]: size,
    [styles.datePicker_active]: Boolean(value),
    [styles.datePicker_error]: Boolean(error),
    [styles.datePicker_relative]: isRelative,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });
  const datePickerRef = useRef<BaseDatePicker>(null);
  const classNameFieldRoot = cx({
    [styles.datePicker__customInput]: true,
    ...(propsClassNameDatePickerInputRoot && { [propsClassNameDatePickerInputRoot]: true }),
  });

  const classNameLabel = cx({
    ...(propsClassNameLabel && { [propsClassNameLabel]: true }),
  });

  const onClear = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();

    // Сбрасываем значение
    _onChange(null, event);
    setLocalSelected(null);

    // Закрываем календарь
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(false);
    }

    // Также вызываем закрытие календаря через наш обработчик
    _onCalendarClose();
  };

  const onDone = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();

    // Закрываем календарь
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(false);
    }

    _onChange(localSelected, event);

    // Также вызываем закрытие календаря через наш обработчик
    _onCalendarClose();
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
            <Text
              classNameRoot={cx(
                styles.datePicker__footerActions,
                styles.datePicker__footerActions_done,
              )}
              onClick={onDone}
            >
              Готово
            </Text>
          </div>
        )}
      </div>
    );
  };

  return (
    <div onMouseEnter={onMouseEnter} className={classNameRoot}>
      <BaseDatePicker
        disabledKeyboardNavigation={!localSelected}
        onSelect={_onSelect}
        ref={datePickerRef}
        closeOnScroll={closeOnScroll}
        shouldCloseOnSelect={shouldCloseOnSelect}
        minDate={minDate}
        maxDate={maxDate}
        dateFormat={dateFormat}
        locale={ru}
        onBlur={onBlur}
        onFocus={onFocus}
        required={required}
        name={name}
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
            classNameLabel={classNameLabel}
            tooltipPosition={tooltipPosition}
            required={required}
            label={label}
            infoTooltipText={infoTooltipText}
            classNameBaseTooltipRoot={propsClassNameBaseTooltipRoot}
            variant={variant}
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
            isVisibleCalendarIcon={true}
          />
        }
      />
    </div>
  );
};
