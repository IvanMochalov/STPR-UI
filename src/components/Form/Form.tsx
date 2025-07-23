import cx from "clsx"
import React from "react";

import styles from "./Form.module.scss"

interface FormProps {
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

export const Form: React.FC<FormProps> = (props) => {
    const {
        children,
        onSubmit,
        addMargin = false,
        withSeparator = false,
        fullWidth = true,
        ...otherProps
    } = props;

    const classNameRoot = cx({
        [styles.spForm]: true,
        [styles.spForm_fullWidth]: fullWidth,
        [styles.spForm_addMargin]: addMargin,
        [styles.spForm_withSeparator]: withSeparator,
        [props.classNameRoot]: props.classNameRoot,
    } as never);

    const _onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (onSubmit) {
            onSubmit();
        }
    };

    return (
        <form
            {...otherProps}
            onSubmit={_onSubmit}
            className={classNameRoot}
        >
            {children}
        </form>
    );
};