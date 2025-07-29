import cx from "clsx";
import React from "react";

import { Icon } from "../Icons";
import styles from "./Button.module.scss";
import { ButtonProps } from "./types";

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
    classNameRoot: propsClassNameRoot,
    classNameIconContainerRoot: propsClassNameIconContainerRoot,
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
      ...(propsClassNameIconContainerRoot && { [propsClassNameIconContainerRoot]: true }),
    });

    return (
      <>
        {iconName && (
          <div className={classNameIconContainer}>
            <Icon name={iconName} />
          </div>
        )}
        {!isOnlyIcon && children && <div className={classNameText}>{children}</div>}
      </>
    );
  };

  const classNameRoot = cx({
    [styles.spButton]: true,
    [styles.spButton_onlyIcon]: isOnlyIcon,
    [styles[`spButton_${variant}`]]: variant,
    [styles[`spButton_${color}`]]: color,
    [styles.spButton_fullWidth]: isFullWidth,
    [styles.spButton_disabled]: disabled,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  return (
    <button
      style={style}
      className={classNameRoot}
      onClick={_onClick}
      disabled={disabled}
      type={type}
      form={form}
    >
      {getContent()}
    </button>
  );
};
