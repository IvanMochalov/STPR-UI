import cx from "clsx";
import React, {useState} from "react";

import {useClickOutside} from "../../hooks/useClickOutside.ts";
import {TBaseTooltipPosition} from "../BaseTooltip";
import {Icon, IconName} from "../Icons";
import {Label} from "../Label";
import {MAX_HEIGHT_SELECT_LIST} from "./constants";
import styles from "./Select.module.scss";

export type SelectOption = {
    value: string | null;
    label: string;
}

interface SelectProps {
    options: SelectOption[];
    placeholder?: string;
    value?: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>, data: {
        name: string;
        value?: string,
        checked?: boolean
    }) => void;
    onMouseEnter?: () => void;
    error?: string;
    label?: string;
    infoTooltipText?: string;
    tooltipPosition?: TBaseTooltipPosition;
    disabled?: boolean;
    required?: boolean;
    maxHeightList?: number;
    isVisibleDefaultTitle?: boolean;
    classNameRoot?: string;
    classNameError?: string;
    classNameLabel?: string;
}

export const Select: React.FC<SelectProps> = (props) => {
    const {
        options,
        placeholder = "Выберите из списка...",
        value,
        name,
        onChange,
        onMouseEnter,
        error,
        label,
        infoTooltipText,
        tooltipPosition,
        disabled,
        required,
        maxHeightList = MAX_HEIGHT_SELECT_LIST,
        isVisibleDefaultTitle = true,
        classNameRoot,
        classNameError,
        classNameLabel,
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const refSelect = useClickOutside<HTMLDivElement>(() => {
        setIsOpen(false);
    }, isOpen);

    const selectedOption = options.find(option => option.value === value);

    const handleSelect = (event, optionValue) => {
        onChange(event, {value: optionValue, name});
        setIsOpen(false);
    };

    const handleToggle = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    const _classNameRoot = cx({
        [styles.spSelect]: true,
        [styles.spSelect_error]: Boolean(error),
        [classNameRoot]: classNameRoot,
    });

    const classNameContainer = cx({
        [styles.spSelect__container]: true,
    });

    const classNameControl = cx({
        [styles.spSelect__control]: true,
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
    });

    const _classNameLabel = cx({
        [classNameLabel]: classNameLabel,
    });

    const _classNameError = cx({
        [styles.spSelect__error]: true,
        [classNameError]: classNameError,
    });

    const getSelect = () => {
        return (
            <div
                tabIndex={0}
                title={isVisibleDefaultTitle ? value : undefined}
                className={classNameControl}
                onClick={handleToggle}
                ref={refSelect}
            >
                <div className={classNameSelectedValue}>
                    {selectedOption?.label || placeholder}
                </div>
                <Icon
                    name={IconName.selectChevronDown}
                    rotate={isOpen ? 180 : undefined}
                    className={classNameSelectIcon}
                />
            </div>
        );
    };

    return (
        <div className={_classNameRoot}>
            {
                label &&
                <Label
                    classNameRoot={_classNameLabel}
                    tooltipPosition={tooltipPosition}
                    required={required}
                    label={label}
                    infoTooltipText={infoTooltipText}
                />
            }
            <div
                className={classNameContainer}
                onMouseEnter={onMouseEnter}
            >
                {getSelect()}
                {isOpen &&
                    <div className={classNameSelectList} style={{maxHeight: `${maxHeightList}px`}}>
                        {options.map(option => {
                            const isSelectedOption = option.value === value;

                            return (
                                <div
                                    key={option.value}
                                    className={cx({
                                        [styles.spSelect__option]: true,
                                    })}
                                    onClick={(event) => handleSelect(event, option.value)}
                                >
                                    {option.label}
                                    {isSelectedOption &&
                                        <Icon
                                            name={IconName.check}
                                            className={classNameSelectIcon}
                                        />
                                    }
                                </div>
                            );
                        })}
                    </div>
                }
            </div>
            {
                error &&
                <div className={_classNameError}>{error}</div>
            }
        </div>
    );
};