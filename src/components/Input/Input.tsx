import cx from "clsx";
import React from "react";

import {Icon} from "../Icons";
import {IconName} from "../Icons";
import {Label} from "../Label";
import styles from "./Input.module.scss";
import {InputProps} from "./types";


export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        value,
        onChange,
        label,
        disabled = false,
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
        classNameRoot,
        classNameError,
        classNameLabel,
        ...otherProps
    } = props;

    const _classNameRoot = cx({
        [styles.spInput]: true,
        [styles.spInput_error]: Boolean(error),
        [classNameRoot]: classNameRoot,
    });

    const classNameContainer = cx({
        [styles.spInput__container]: true,
    });

    const classNameControl = cx({
        [styles.spInput__control]: true,
        [styles.spInput__control_clearable]: isClearable,
    });

    const classNameClear = cx({
        [styles.spInput__clear]: true,
    });

    const _classNameError = cx({
        [styles.spInput__error]: true,
        [classNameError]: classNameError,
    });

    const _classNameLabel = cx({
        [classNameLabel]: classNameLabel,
    });

    const onClear = (event: any) => {
        onChange(event, {name, value: ""});
    };

    // Для задания паттернов ввода
    const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;

        if (
            pattern &&
            value &&
            !new RegExp(pattern).test(value)
        ) {
            return;
        }

        onChange(event, {value, name});
    };

    const getInput = () => {
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
                {getInput()}
                {
                    isClearable && value && !disabled &&
                    <Icon
                        onClick={onClear}
                        className={classNameClear}
                        name={IconName.trash}
                    />
                }
            </div>
            {
                error &&
                <div className={_classNameError}>{error}</div>
            }
        </div>
    );
});