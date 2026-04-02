import InputMask from "@mona-health/react-input-mask";
import cx from "clsx";
import React from "react";

import { EIconName, Icon } from "../Icons";
import { Label } from "../Label";
import styles from "./Input.module.scss";
import { IInputProps } from "./types";

export const Input = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const {
    value,
    onChange,
    onBlur,
    label,
    variant = "outlined",
    disabled = false,
    isAbsolutePositionError = false,
    error,
    required,
    name,
    isClearable,
    pattern,
    onMouseEnter,
    infoTooltipText,
    tooltipPosition,
    isVisibleDefaultTitle = true,
    placeholder = "Введите...",
    classNameRoot: propsClassNameRoot,
    classNameError: propsClassNameError,
    classNameLabel: propsClassNameLabel,
    classNameBaseTooltipRoot: propsClassNameBaseTooltipRoot,
    alwaysShowMask = false,
    mask,
    maskChar = "_",
    ...otherProps
  } = props;

  const classNameRoot = cx({
    [styles.spInput]: true,
    [styles.spInput_error]: Boolean(error),
    [styles.spInput_absolutePositionError]: isAbsolutePositionError,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameContainer = cx({
    [styles.spInput__container]: true,
  });

  const classNameControl = cx({
    [styles.spInput__control]: true,
    [styles.spInput__control_disabled]: disabled,
    [styles[`spInput__control_${variant}`]]: variant,
    [styles.spInput__control_clearable]: isClearable,
  });

  const classNameClear = cx({
    [styles.spInput__clear]: true,
  });

  const classNameError = cx({
    [styles.spInput__error]: true,
    [styles.spInput__error_absolutePosition]: isAbsolutePositionError,
    ...(propsClassNameError && { [propsClassNameError]: true }),
  });

  const classNameLabel = cx({
    ...(propsClassNameLabel && { [propsClassNameLabel]: true }),
  });

  const onClear = (event: never) => {
    onChange?.(event, { name, value: "" });
  };

  // Для задания паттернов ввода
  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    if (pattern && value && !new RegExp(pattern).test(value)) {
      return;
    }

    onChange?.(event, { value, name });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    onBlur?.(event, { name, value: value });
  };

  const getInput = () => {
    if (mask) {
      return (
        <InputMask
          ref={ref}
          className={classNameControl}
          alwaysShowMask={alwaysShowMask}
          onChange={_onChange}
          onBlur={handleBlur}
          disabled={disabled}
          value={value}
          mask={mask}
          name={name}
          maskPlaceholder={maskChar}
          {...otherProps}
        >
          <input placeholder={placeholder} title={isVisibleDefaultTitle ? value : undefined} />
        </InputMask>
      );
    }
    return (
      <input
        {...otherProps}
        placeholder={placeholder}
        disabled={disabled}
        onChange={_onChange}
        onBlur={handleBlur}
        title={isVisibleDefaultTitle ? value : undefined}
        value={value}
        name={name}
        className={classNameControl}
        ref={ref}
      />
    );
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
      <div className={classNameContainer} onMouseEnter={onMouseEnter}>
        {getInput()}
        {isClearable && value && !disabled && (
          <Icon onClick={onClear} className={classNameClear} name={EIconName.Trash} />
        )}
      </div>
      {error && <div className={classNameError}>{error}</div>}
    </div>
  );
});

Input.displayName = "Input";
