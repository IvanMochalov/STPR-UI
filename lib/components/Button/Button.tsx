import cx from "clsx";
import React from "react";

import { Icon } from "../Icons";
import { Spinner } from "../Spinner";
import styles from "./Button.module.scss";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    color = "blue",
    variant = "primary",
    style,
    onClick,
    iconName,
    icon,
    iconRotate = 0,
    disabled = false,
    type = "button",
    form,
    children,
    loading = false,
    isFullWidth = false,
    isOnlyIcon = false,
    noPadding = false,
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

    const renderIcon = () => {
      if (loading) {
        return <Spinner size={"md"} classNameRoot={styles.spButton__spinner} />;
      }

      if (iconName) {
        return <Icon name={iconName} rotate={iconRotate} />;
      }

      if (icon) {
        return icon;
      }

      return null;
    };

    return (
      <>
        {(icon || iconName || loading) && (
          <div className={classNameIconContainer}>{renderIcon()}</div>
        )}
        {!isOnlyIcon && children && <div className={classNameText}>{children}</div>}
      </>
    );
  };

  const classNameRoot = cx({
    [styles.spButton]: true,
    [styles.spButton_noPadding]: noPadding,
    [styles.spButton_onlyIcon]: isOnlyIcon,
    [styles[`spButton_${variant}`]]: variant,
    [styles[`spButton_${color}`]]: color,
    [styles.spButton_fullWidth]: isFullWidth,
    [styles.spButton_disabled]: disabled,
    [styles.spButton_loading]: loading,
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
