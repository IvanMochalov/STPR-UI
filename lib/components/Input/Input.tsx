import cx from "clsx";
import React from "react";
import InputMask from "react-input-mask";

import { EIconName, Icon } from "../Icons";
import { Label } from "../Label";
import styles from "./Input.module.scss";
import { InputProps } from "./types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    value,
    onChange,
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
    onChange(event, { name, value: "" });
  };

  // Для задания паттернов ввода
  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    if (pattern && value && !new RegExp(pattern).test(value)) {
      return;
    }

    onChange(event, { value, name });
  };

  const getInput = () => {
    if (mask) {
      return (
        <InputMask
          className={classNameControl}
          alwaysShowMask={alwaysShowMask}
          onChange={_onChange}
          disabled={disabled}
          value={value}
          mask={mask}
          name={name}
          maskChar={maskChar}
          {...otherProps}
        >
          {(inputProps) => {
            return (
              <input {...inputProps} disabled={disabled} placeholder={placeholder} ref={ref} />
            );
          }}
        </InputMask>
      );
    }
    return (
      <input
        {...otherProps}
        placeholder={placeholder}
        disabled={disabled}
        onChange={_onChange}
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
