import cx from "clsx";
import React, { useRef, useState } from "react";

import { useClickOutside } from "../../../src/hooks/useClickOutside.ts";
import { EIconName, Icon } from "../Icons";
import { Label } from "../Label";
import { MAX_HEIGHT_SELECT_LIST } from "./constants";
import styles from "./Select.module.scss";
import { SelectProps, TOnChangeSelect } from "./types";

export const Select: React.FC<SelectProps> = (props) => {
  const {
    options = [],
    placeholder = "Выберите из списка...",
    value,
    name,
    variant = "outlined",
    onChange,
    onMouseEnter,
    error,
    label,
    infoTooltipText,
    tooltipPosition,
    disabled = false,
    required,
    maxHeightList = MAX_HEIGHT_SELECT_LIST,
    isVisibleDefaultTitle = true,
    isScrollableList = false,
    isAbsolutePositionError = false,
    classNameRoot: propsClassNameRoot,
    classNameError: propsClassNameError,
    classNameLabel: propsClassNameLabel,
    classNameBaseTooltipRoot: propsClassNameBaseTooltipRoot,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const refSelect = useRef<HTMLDivElement>(null);

  // Обработчик клика вне области
  useClickOutside(
    [refSelect],
    () => {
      setIsOpen(false);
    },
    isOpen,
  );

  const selectedOption = options.find((option) => option.value === value);

  const handleSelect: TOnChangeSelect = (event, data) => {
    onChange(event, { value: data.value, name });
    setIsOpen(false);
  };

  const handleToggle = () => {
    if (disabled) return;

    setIsOpen(!isOpen);
  };

  const classNameRoot = cx({
    [styles.spSelect]: true,
    [styles.spSelect_error]: Boolean(error),
    [styles.spSelect_absolutePositionError]: isAbsolutePositionError,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameContainer = cx({
    [styles.spSelect__container]: true,
  });

  const classNameControl = cx({
    [styles.spSelect__control]: true,
    [styles[`spSelect__control_${variant}`]]: variant,
    [styles.spSelect__control_disabled]: disabled,
  });

  const classNameSelectedValue = cx({
    [styles.spSelect__value]: true,
    [styles.spSelect__value_empty]: !selectedOption,
  });

  const classNameSelectIcon = cx({
    [styles.spSelect__icon]: true,
  });

  const classNameSelectList = cx({
    [styles.spSelect__list]: true,
    [styles.spSelect__list_scrollable]: isScrollableList,
  });

  const classNameLabel = cx({
    ...(propsClassNameLabel && { [propsClassNameLabel]: true }),
  });

  const classNameError = cx({
    [styles.spSelect__error]: true,
    [styles.spSelect__error_absolutePosition]: isAbsolutePositionError,
    ...(propsClassNameError && { [propsClassNameError]: true }),
  });

  const getSelect = () => {
    return (
      <div
        tabIndex={disabled ? -1 : 0}
        title={isVisibleDefaultTitle && value ? String(value) : undefined}
        className={classNameControl}
        onClick={handleToggle}
      >
        <div className={classNameSelectedValue}>{selectedOption?.label || placeholder}</div>
        <Icon
          name={EIconName.SelectChevronDown}
          rotate={isOpen ? 180 : undefined}
          className={classNameSelectIcon}
        />
      </div>
    );
  };

  const renderOptionList = () => {
    return (
      <div
        className={classNameSelectList}
        style={isScrollableList ? { maxHeight: `${maxHeightList}px` } : {}}
      >
        {options.length > 0 ? (
          options.map((option) => {
            const isSelectedOption = option.value === value;

            return (
              <div
                key={option.value}
                className={cx({
                  [styles.spSelect__option]: true,
                })}
                onClick={(event) => {
                  handleSelect(event, {
                    value: option.value,
                    name,
                  });
                }}
              >
                {option.label}
                {isSelectedOption && (
                  <Icon name={EIconName.Check} className={classNameSelectIcon} />
                )}
              </div>
            );
          })
        ) : (
          <div
            className={cx({
              [styles.spSelect__emptyOptions]: true,
            })}
          >
            Нет доступных вариантов выбора...
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={classNameRoot} ref={refSelect}>
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
        {getSelect()}
        {isOpen && renderOptionList()}
      </div>
      {error && <div className={classNameError}>{error}</div>}
    </div>
  );
};
