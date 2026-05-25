import cx from "clsx";
import React from "react";

import { EIconName, Icon } from "../Icons";
import { Spinner } from "../Spinner";
import styles from "./Button.module.scss";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = "primary",
    size = "xl",
    style,
    onClick,
    startIconName,
    endIconName,
    startIconRotate = 0,
    endIconRotate = 0,
    disabled = false,
    type = "button",
    form,
    children,
    loading = false,
    isFullWidth = false,
    isOnlyIcon = false,
    noPadding = false,
    classNameRoot: propsClassNameRoot,
    classNameTextRoot: propsClassNameTextRoot,
  } = props;

  const _onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      return;
    }

    onClick?.(event);
  };

  const classNameIconContainer = cx({
    [styles.spButton__iconContainer]: true,
  });

  const classNameText = cx({
    [styles.spButton__text]: true,
    ...(propsClassNameTextRoot && { [propsClassNameTextRoot]: true }),
  });

  const renderSpinner = () => (
    <div className={classNameIconContainer}>
      <Spinner size={"md"} classNameRoot={styles.spButton__spinner} />
    </div>
  );

  const renderIcon = (iconName?: EIconName, iconRotate?: number) => {
    if (!iconName) {
      return null;
    }

    return (
      <div className={classNameIconContainer}>
        <Icon
          name={iconName}
          rotate={iconRotate}
          className={styles.spButton__iconContainer__icon}
        />
      </div>
    );
  };

  const getContent = () => {
    const shouldRenderStartIcon = Boolean(startIconName);
    const shouldRenderEndIcon = !isOnlyIcon && Boolean(endIconName);

    return (
      <React.Fragment>
        {loading
          ? renderSpinner()
          : renderIcon(shouldRenderStartIcon ? startIconName : undefined, startIconRotate)}
        {!isOnlyIcon && children && <div className={classNameText}>{children}</div>}
        {renderIcon(shouldRenderEndIcon ? endIconName : undefined, endIconRotate)}
      </React.Fragment>
    );
  };

  const classNameRoot = cx({
    [styles.spButton]: true,
    [styles[`spButton_size-${size}`]]: size,
    [styles.spButton_noPadding]: noPadding,
    [styles.spButton_onlyIcon]: isOnlyIcon,
    [styles[`spButton_${variant}`]]: variant,
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
