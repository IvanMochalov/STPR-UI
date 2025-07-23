import React from "react";

export interface FormProps {
    withSeparator?: boolean,
    children: React.ReactNode,
    classNameRoot?: string,
    addMargin?: boolean,
    fullWidth?: boolean,
    onSubmit?: () => void,
    id?: string,
    name?: string,
    noValidate?: boolean,
    autoComplete?: React.AutoFillBase,
}