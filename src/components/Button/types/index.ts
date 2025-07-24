import React, {CSSProperties} from "react";

import {TIconName} from "../../Icons";

export type TSPButtonColor = "blue" | "white";

export type TSPButtonType = "submit" | "reset" | "button";

export type TSPButtonVariant = "primary" | "secondary" | "link";

export interface ButtonProps extends React.PropsWithChildren {
    color?: TSPButtonColor,
    variant?: TSPButtonVariant,
    style?: CSSProperties,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean,
    type?: TSPButtonType,
    form?: string,
    isFullWidth?: boolean,
    isOnlyIcon?: boolean,
    iconName?: TIconName;
    classNameRoot?: string,
}