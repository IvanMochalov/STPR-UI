import cx from "clsx";
import React, { useEffect, useRef, useState } from "react";

import { useClickOutside } from "../../../src/hooks/useClickOutside.ts";
import { EIconName, Icon } from "../Icons";
import { Label } from "../Label";
import { MAX_HEIGHT_SELECT_LIST } from "./constants";
import styles from "./Select.module.scss";
import { SelectProps, TOnBlurSelect, TOnChangeSelect } from "./types";

export const Select: React.FC<SelectProps> = (props) => {
  const {
    options = [],
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

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // состояние поиска
  const refSelect = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Обработчик клика вне области
  useClickOutside(
    [refSelect],
    () => {
      setIsOpen(false);
      setSearchQuery(""); // сбрасываем поиск при закрытии
    },
    isOpen,
  );

  // Фокусируемся на поле поиска при открытии, если поиск включен
  useEffect(() => {
    if (isOpen && isSearchable && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 0);
    }
  }, [isOpen, isSearchable]);

  // Сбрасываем поиск при выборе значения
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
    }
  }, [isOpen]);

  const selectedOption = options.find((option) => option.value === value);

  // Фильтрация опций по поисковому запросу
  const filteredOptions =
    isSearchable && searchQuery
      ? options.filter((option) => option.label.toLowerCase().includes(searchQuery.toLowerCase()))
      : options;

  const handleSelect: TOnChangeSelect = (event, data) => {
    onChange?.(event, { value: data.value, name });
    setIsOpen(false);
    setSearchQuery(""); // сбрасываем поиск после выбора

    handleBlur({ value: data.value, name });
  };

  const handleBlur: TOnBlurSelect = ({ name, value }) => {
    onBlur?.({ name, value });
  };

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    setSearchQuery(""); // сбрасываем поиск при переключении
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // предотвращаем закрытие списка при клике на поиск
  };

  // Существующие className...
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

  // Новый класс для поискового поля
  const classNameSearch = cx({
    [styles.spSelect__search]: true,
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

  const renderSearchField = () => {
    if (!isSearchable) return null;

    return (
      <div className={classNameSearch} onClick={handleSearchClick}>
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

  const renderOptionList = () => {
    return (
      <div
        className={classNameSelectList}
        style={isScrollableList ? { maxHeight: `${maxHeightList}px` } : {}}
      >
        {renderSearchField()}

        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => {
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
            {searchQuery ? "Ничего не найдено" : "Нет доступных вариантов выбора..."}
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
