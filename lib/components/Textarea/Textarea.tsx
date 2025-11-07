import cx from "clsx";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";

import { Label } from "../Label";
import styles from "./Textarea.module.scss";
import { TextareaProps } from "./types";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const {
    value,
    onChange,
    label,
    variant = "outlined",
    disabled = false,
    autoSize = true,
    isAbsolutePositionError = false,
    error,
    required,
    name,
    onMouseEnter,
    tooltipPosition,
    isVisibleDefaultTitle = true,
    infoTooltipText,
    placeholder = "Введите...",
    fluidHeight,
    rows = 1,
    maxRows,
    cols = 20,
    maxLength,
    minLength,
    readOnly = false,
    autoFocus = false,
    autoComplete = "off",
    spellCheck = true,
    wrap = "soft",
    resize = "both",
    onBlur,
    onFocus,
    classNameRoot: propsClassNameRoot,
    classNameError: propsClassNameError,
    classNameLabel: propsClassNameLabel,
    classNameBaseTooltipRoot: propsClassNameBaseTooltipRoot,
  } = props;

  const classNameRoot = cx({
    [styles.spTextarea]: true,
    [styles.spTextarea_fluidHeight]: fluidHeight,
    [styles.spTextarea_error]: Boolean(error),
    [styles.spTextarea_absolutePositionError]: isAbsolutePositionError,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameContainer = cx({
    [styles.spTextarea__container]: true,
  });

  const classNameControl = cx({
    [styles.spTextarea__control]: true,
    [styles[`spTextarea__control_${variant}`]]: variant,
    [styles.spTextarea__control_disabled]: disabled,
    [styles.spTextarea__control_fluidHeight]: fluidHeight,
    [styles[`spTextarea__control_resize_${resize}`]]: resize,
  });

  const classNameLabel = cx({
    ...(propsClassNameLabel && { [propsClassNameLabel]: true }),
  });

  const classNameError = cx({
    [styles.spTextarea__error]: true,
    [styles.spTextarea__error_absolutePosition]: isAbsolutePositionError,
    ...(propsClassNameError && { [propsClassNameError]: true }),
  });

  const _onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = event.target;
    onChange(event, { value, name });
  };

  const getTextarea = () => {
    return autoSize && !fluidHeight ? (
      <TextareaAutosize
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        autoFocus={autoFocus}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
        minLength={minLength}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        wrap={wrap}
        onChange={_onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        title={isVisibleDefaultTitle ? value : undefined}
        value={value}
        name={name}
        className={classNameControl}
        ref={ref}
        maxRows={maxRows}
      />
    ) : (
      <textarea
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        autoFocus={autoFocus}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
        minLength={minLength}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        wrap={wrap}
        onChange={_onChange}
        onBlur={onBlur}
        onFocus={onFocus}
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
      <div onMouseEnter={onMouseEnter} className={classNameContainer}>
        {getTextarea()}
      </div>
      {error && <div className={classNameError}>{error}</div>}
    </div>
  );
});

Textarea.displayName = "Textarea";
