import cx from "clsx";
import React from "react";

import {TBaseTooltipPosition} from "../BaseTooltip";
import {InfoTooltip} from "../Tooltip";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, data: {
        name: string;
        value?: string,
        checked?: boolean
    }) => void;
    name: string;
    label?: string;
    error?: string;
    value?: string;
    required?: boolean;
    tooltipPosition?: TBaseTooltipPosition;
    infoTooltipText?: string;
    onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
    classNameRoot?: string;
    classNameError?: string;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
    const {
        checked,
        disabled,
        onChange,
        name,
        label,
        error,
        value,
        required,
        tooltipPosition,
        infoTooltipText,
        onMouseEnter,
    } = props;

    const classNameRoot = cx({
        [styles.spCheckbox]: true,
        [props.classNameRoot]: props.classNameRoot,
    });

    const classNameBox = cx({
        [styles.spCheckbox__box]: true,
        [styles.spCheckbox__box_checked]: checked,
        [styles.spCheckbox__box_disabled]: disabled,
        [styles.spCheckbox__box_error]: error,
    });

    const classNameControl = cx({
        [styles.spCheckbox__control]: true,
    });

    const classNameLabel = cx({
        [styles.spCheckbox__label]: true,
    });

    const classNameRequired = cx({
        [styles.spCheckbox__required]: true,
    });

    const classNameError = cx({
        [styles.spCheckbox__error]: true,
        [props.classNameError]: props.classNameError,
    });

    const classNameCheckboxTooltip = cx({
        [styles.spCheckbox__tooltip]: true,
    });

    const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        !disabled && onChange && onChange(event, {name, checked: !checked, value});
    };

    return (
        <div
            className={classNameRoot}
            onMouseEnter={onMouseEnter}
        >
            <label
                className={classNameBox}
            >
                <input
                    type="checkbox"
                    className={classNameControl}
                    checked={checked}
                    onChange={handleChangeChecked}
                />
                {
                    label &&
                    <span className={classNameLabel}>
                        {label}
                    </span>

                }
                {
                    required &&
                    <div className={classNameRequired}>
                        *
                    </div>
                }
                {
                    infoTooltipText &&
                    <div className={classNameCheckboxTooltip}>
                        <InfoTooltip
                            position={tooltipPosition}
                            text={infoTooltipText}
                        />
                    </div>
                }
            </label>
            {
                error &&
                <div className={classNameError}>{error}</div>
            }
        </div>
    );
};