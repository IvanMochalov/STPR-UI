import React, {CSSProperties, ReactNode} from "react";

import {TIconName} from "../../Icons";

export type TSPButtonColor = "blue" | "white";

export type TSPButtonType = "submit" | "reset" | "button";

export type TSPButtonVariant = "primary" | "secondary" | "link";

export interface ButtonProps {
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