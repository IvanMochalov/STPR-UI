import cx from "clsx";
import React, {CSSProperties, ReactNode} from "react";

import {Icon, TIconName} from "../Icons";
import styles from "./Button.module.scss"

export type TSPButtonColor = "blue" | "white";

export type TSPButtonType = "submit" | "reset" | "button";

export type TSPButtonVariant = "primary" | "secondary" | "link";

interface ButtonProps {
    color?: TSPButtonColor,
    variant?: TSPButtonVariant,
    style?: CSSProperties,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean,
    type?: TSPButtonType,
    form?: string,
    children?: ReactNode | string | null,
    isFullWidth?: boolean,
    isOnlyIcon?: boolean,
    iconName?: TIconName;
    classNameRoot?: string,
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        color = "blue",
        variant = "primary",
        style,
        onClick,
        iconName,
        disabled = false,
        type = "button",
        form,
        children,
        isFullWidth = false,
        isOnlyIcon = false,
        classNameRoot,
    } = props;

    const _onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) {
            return;
        }

        onClick?.(event);
    };

    const getContent = () => {
        const classNameText = cx({
            [styles.spButton__text]: true,
        });

        const classNameIconContainer = cx({
            [styles.spButton__iconContainer]: true,
        });

        return (
            <>
                {
                    iconName &&
                    <div className={classNameIconContainer}>
                        <Icon name={iconName}/>
                    </div>
                }
                {
                    !isOnlyIcon && children &&
                    <div className={classNameText}>
                        {children}
                    </div>
                }
            </>
        );
    };

    const _classNameRoot = cx({
        [styles.spButton]: true,
        [styles.spButton_onlyIcon]: isOnlyIcon,
        [styles[`spButton_${variant}`]]: variant,
        [styles[`spButton_${color}`]]: color,
        [styles.spButton_fullWidth]: isFullWidth,
        [styles.spButton_disabled]: disabled,
        [classNameRoot]: classNameRoot,
    });

    return (
        <button
            style={style}
            className={_classNameRoot}
            onClick={_onClick}
            disabled={disabled}
            type={type}
            form={form}
        >
            {getContent()}
        </button>
    );
};
