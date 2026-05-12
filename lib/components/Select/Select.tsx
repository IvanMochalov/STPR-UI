import cx from "clsx";
import React from "react";

import { EIconName, Icon } from "../Icons";
import { Label } from "../Label";
import { Portal } from "../Portal";
import { MAX_HEIGHT_SELECT_LIST } from "./constants";
import { useSelect } from "./hooks/useSelect";
import styles from "./Select.module.scss";
import { ISelectProps } from "./types";

export const Select: React.FC<ISelectProps> = (props) => {
  const {
    options = [],
    size = "xl",
    placeholder = "Выберите из списка...",
    value,
    name,
    variant = "outlined",
    onChange,
    onBlur,
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
    isSearchable = false,
    searchPlaceholder = "Поиск...",
    classNameRoot: propsClassNameRoot,
    classNameError: propsClassNameError,
    classNameLabel: propsClassNameLabel,
    classNameBaseTooltipRoot: propsClassNameBaseTooltipRoot,
  } = props;

  const {
    isOpen,
    searchQuery,
    listStyle,
    refControl,
    refListWrapper,
    searchInputRef,
    selectedOption,
    filteredOptions,
    listWrapperStyle,
    handleSelect,
    handleToggle,
    handleSearchChange,
    handleSearchClick,
    setSearchQuery,
  } = useSelect({
    options,
    value,
    name,
    disabled,
    isSearchable,
    onChange,
    onBlur,
  });

  const classNameRoot = cx({
    [styles.spSelect]: true,
    [styles[`spSelect_size-${size}`]]: size,
    [styles.spSelect_error]: Boolean(error),
    [styles.spSelect_absolutePositionError]: isAbsolutePositionError,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameContainer = cx({
    [styles.spSelect__container]: true,
  });

  const classNameControl = cx({
    [styles.spSelect__control]: true,
    [styles.spSelect__control_open]: isOpen,
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

  const classNameSearch = styles.spSelect__search;

  const classNameLabel = cx({
    [styles.spSelect__label]: true,
    ...(propsClassNameLabel && { [propsClassNameLabel]: true }),
  });

  const classNameError = cx({
    [styles.spSelect__error]: true,
    [styles.spSelect__error_absolutePosition]: isAbsolutePositionError,
    ...(propsClassNameError && { [propsClassNameError]: true }),
  });

  const renderSearchField = (atBottom?: boolean) => {
    if (!isSearchable) return null;
    return (
      <div
        className={cx(classNameSearch, atBottom && styles.spSelect__search_atBottom)}
        onClick={handleSearchClick}
      >
        <Icon name={EIconName.Search} className={styles.spSelect__searchIcon} />
        <input
          ref={searchInputRef}
          type="text"
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.spSelect__searchInput}
        />
        {searchQuery && (
          <Icon
            name={EIconName.Trash}
            className={styles.spSelect__searchClearIcon}
            onClick={() => setSearchQuery("")}
          />
        )}
      </div>
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
        <div
          ref={refControl}
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
        {isOpen && (
          <Portal node={document.body}>
            <div
              ref={refListWrapper}
              className={cx(
                styles.spSelect__listWrapper,
                size && [styles[`spSelect__listWrapper_size-${size}`]],
                listStyle?.placement === "bottom" && styles.spSelect__listWrapper_placementBottom,
                listStyle?.placement === "top" && styles.spSelect__listWrapper_placementTop,
              )}
              style={listWrapperStyle}
            >
              {renderSearchField(listStyle?.placement === "top")}
              <div
                className={classNameSelectList}
                style={isScrollableList ? { maxHeight: `${maxHeightList}px` } : {}}
              >
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option) => {
                    const isSelectedOption = option.value === value;
                    return (
                      <div
                        key={option.value}
                        className={styles.spSelect__option}
                        onClick={(event) => handleSelect(event, { value: option.value, name })}
                      >
                        {option.label}
                        {isSelectedOption && (
                          <Icon name={EIconName.Check} className={classNameSelectIcon} />
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className={styles.spSelect__emptyOptions}>
                    {searchQuery ? "Ничего не найдено" : "Нет доступных вариантов выбора..."}
                  </div>
                )}
              </div>
            </div>
          </Portal>
        )}
      </div>
      {error && <div className={classNameError}>{error}</div>}
    </div>
  );
};
