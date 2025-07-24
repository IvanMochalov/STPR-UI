import cx from "clsx"
import React from "react";

import styles from "./Form.module.scss"
import {FormProps} from "./types";

export const Form: React.FC<FormProps> = (props) => {
    const {
        children,
        onSubmit,
        addMargin = false,
        withSeparator = false,
        fullWidth = true,
        classNameRoot: propsClassNameRoot,
        ...otherProps
    } = props;

    const classNameRoot = cx({
        [styles.spForm]: true,
        [styles.spForm_fullWidth]: fullWidth,
        [styles.spForm_addMargin]: addMargin,
        [styles.spForm_withSeparator]: withSeparator,
        [propsClassNameRoot]: propsClassNameRoot,
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